// Proactive English A2 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));

// ---------- UNIT OPENER ----------
out.push(h1('Unit 1  Meeting People'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**1.1**  greet people and introduce yourself',
  '**1.2**  introduce other people',
  '**1.3**  ask for and give personal details',
  '**1.4**  talk about your family',
  '**1.5**  talk about likes and dislikes',
  '**1.6**  ask people to repeat, spell and explain',
  '**1.7**  Review & Mediate: tell a friend about a notice',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Meet the people in this book', [
  'All the people in Book 1 study English at **Al-Yasmin Language Centre** in Mezzeh, Damascus.',
  '**Lina Haddad** (28) – accountant, from Damascus   ·   **Rami Khoury** (31) – civil engineer, from Homs, works in Damascus',
  '**Maya Nasser** (24) – pharmacist, from Latakia   ·   **Omar Darwish** (35) – IT technician, from Aleppo; Rami\'s colleague and flatmate',
  '**Ms Huda Saleh** – their English teacher   ·   **Karim** – receptionist at City Gym',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('How every cycle works', [
  '**Lesson A – Speaking:**  1 Get ready → 2 Listen and read → 3 Practise → 3R Perform → 4 Your turn → 4R Report',
  '**Lesson B – Writing:**  5 Read → 6 Write with help → 6P Check together → 6R Share → 7 Write freely → 7P Respond → 7R Share → Homework',
  'When classmates perform or report, **listen and do the listener task**. Your teacher will not stop you to correct mistakes – mistakes go on the board at the end, and we fix them together.',
], C.grey, C.navy));

// ======================= CYCLE 1.1 =======================
out.push(pb());
out.push(h2('1.1  Hello! I\'m Lina'));
out.push(p('**Function:** greeting people and introducing yourself   ·   **Grammar:** _be_ (I\'m / you\'re / he\'s / she\'s)   ·   **Pronunciation:** contractions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  It\'s your first day at a new course. What do people **say** when they meet? What do they **write** in a first message? Tell your teacher. Your teacher writes your ideas on the board.'));
out.push(table(['We SAY…', 'We WRITE…'], [['Hello! / Hi! / Good morning!', 'Hello everyone!'], ['', ''], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Match the countries and cities with the nationalities. Syria → _Syrian_. Lebanon → ______  Jordan → ______  Egypt → ______  Iraq → ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where are Lina and Rami?   **A** at work   **B** at an English class   **C** in a café'));
out.push(p('**b**  Listen again. Answer the questions.   **1** Where is Rami from?   **2** What is Lina\'s job?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.1  First day at Al-Yasmin', [
  ['Lina', 'Hi! Is this the English class?'],
  ['Rami', 'Yes, it is. Hello, I\'m Rami.'],
  ['Lina', 'Nice to meet you, Rami. I\'m Lina.'],
  ['Rami', 'Nice to meet you too. Where are you from, Lina?'],
  ['Lina', 'I\'m from Damascus. And you?'],
  ['Rami', 'I\'m from Homs, but I work here in Damascus. I\'m an engineer.'],
  ['Lina', 'Oh, really? I\'m an accountant.'],
  ['Ms Huda', 'Good morning, everyone! I\'m Huda Saleh. I\'m your teacher. Welcome to Al-Yasmin Language Centre!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – be (present)**',
  table(['+', '–', '?'], [
    ['I\'m (I am) from Homs.', 'I\'m not from Aleppo.', 'Am I late? – Yes, you are. / No, you aren\'t.'],
    ['You\'re (you are) my teacher.', 'You aren\'t late.', 'Are you from Damascus? – Yes, I am. / No, I\'m not.'],
    ['He\'s / She\'s an engineer.', 'She isn\'t a student.', 'Is this the English class? – Yes, it is.'],
  ], [1, 1, 1.4]),
  '⚠ In English, every sentence needs a verb. Say _I\'m an engineer_, not ~~I engineer~~. Use _a_ before consonant sounds (a teacher) and _an_ before vowel sounds (an engineer, an accountant).',
  '**Practise:** Complete with _\'m, \'s, \'re, isn\'t_ or _aren\'t_.',
  '1 I ___ from Latakia.  2 She ___ a pharmacist.  3 You ___ late – the class starts at six.  4 Omar ___ from Damascus. He\'s from Aleppo.  5 ___ you a student? – Yes, I am.',
  '**Useful phrases:**  Nice to meet you.  ·  Nice to meet you too.  ·  Where are you from?  ·  And you?  ·  Welcome to…',
  '**Pronunciation – contractions.** 🔊 **Track 1.2** Listen and repeat: _I\'m_ /aɪm/ · _you\'re_ /jɔː/ · _he\'s_ /hiːz/ · _she\'s_ /ʃiːz/ · _it\'s_ /ɪts/ · _I\'m an engineer_ /aɪmən endʒɪˈnɪə/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton. Then swap roles. Then use the role cards.'));
out.push(dlg(null, [
  ['A', 'Hi! Is this the __________ class?'],
  ['B', 'Yes, it is. Hello, I\'m __________.'],
  ['A', 'Nice to meet you, __________. I\'m __________.'],
  ['B', 'Nice to meet you too. Where are you from?'],
  ['A', 'I\'m from __________. And you?'],
  ['B', 'I\'m from __________. I\'m a / an __________.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [['Maya · Latakia · pharmacist', 'Omar · Aleppo · IT technician']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['Hi!', 'I\'m…', 'Nice to meet you.', 'Nice to meet you too.', 'Where are you from?', 'And you?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Stand up. Meet **three** classmates. Use your **real** name, city and job. Make notes. With your third classmate, try to finish in **one minute**.'));
out.push(table(['Name', 'From', 'Job'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Introduce one person you met to the class:  _This is ______. He\'s / She\'s from ______. He\'s / She\'s a / an ______._'));
out.push(p('**Listener task:** write down one fact. Then ask the person one question, e.g. _Are you from Old Damascus?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.'));

out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes a post on the class page. Read it and answer the questions.'));
out.push(box(null, [
  '**Al-Yasmin English – Class 4B**',
  'Hello everyone! My name is Lina Haddad. I\'m 28 years old and I\'m from Damascus. I\'m an accountant. I work for a small company in Mezzeh. I\'m in this class because I need English for my job. I\'m happy to meet you all!',
  'Lina',
], 'FFFFFF', C.navy));
out.push(item('1', 'How old is Lina?'));
out.push(item('2', 'Where does she work?'));
out.push(item('3', 'Why is she in the class?'));
out.push(box('Writer\'s box', [
  '**Parts of a profile post:** greeting → name → age and city → job → reason → friendly ending → your name.',
  '**Capital letters:** names (Lina), cities and countries (Damascus, Syria), languages (English), and **I** – always!',
  'Every sentence ends with a **full stop (.)**. An exclamation mark (!) shows you are happy.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Use the ideas on the board. Complete the post about **you**.'));
out.push(p('Hello everyone! My name is ______________. I\'m ______ years old and I\'m from ______________. I\'m a / an ______________. I work / study ______________. I\'m in this class because ______________. I\'m happy to meet you all!   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (read this once – we use it all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "Your post is clear. Check the capital letter in _damascus_. Can you add your job?"',
  'Be kind, be clear, and point to **one** thing to fix.',
  '**Phrase bank:** It\'s clear. · I like… · Can you add…? · I think you forgot… · Check the spelling of… · Good idea!',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books with your partner. Read your partner\'s post. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters (names, cities, I) and full stops', ''],
  ['A verb (_be_) in every sentence: _I\'m…_', ''],
  ['he / she + verb: _she works_ (if you write about another person)', ''],
  ['All the parts: greeting, name, age, city, job, reason, ending', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your **real** post for our class page (35 words or more). Introduce yourself and add **one more thing**: a hobby, your family or your favourite place in your city.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s post as a **classmate**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _a question about the content_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the posts on the wall. Walk and read. Put a sticky note on one post: _Nice to meet you! I\'m from… too!_'));
out.push(box('Homework', ['Write your final post. Then write a **reply** to your partner\'s post (20+ words), e.g. _Hi Rami! Nice to meet you. My brother is an engineer too…_'], C.lblue, C.navy));

// ======================= CYCLE 1.2 =======================
out.push(pb());
out.push(h2('1.2  This is my friend, Maya'));
out.push(p('**Function:** introducing other people   ·   **Grammar:** possessive adjectives, \'s, object pronouns   ·   **Pronunciation:** linking _this is_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Look at a photo on your phone. Who is in it? Make a class list of words for people: _friend, colleague, …_'));
out.push(table(['We SAY…', 'We WRITE…'], [['This is my friend.', 'This is me with my friend.'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Put the words in the right group: _friend · colleague · cousin · neighbour · classmate · manager · uncle · aunt_.   **Family:** ______   **Work / study:** ______   **Other:** ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many people meet in the café?   **A** three   **B** four   **C** five'));
out.push(p('**b**  Listen again. **1** Where is Maya from?   **2** What is Omar\'s job?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.3  Coffee break at the centre café', [
  ['Lina', 'Rami, this is my friend Maya. She\'s a pharmacist.'],
  ['Rami', 'Hi, Maya. Nice to meet you.'],
  ['Maya', 'Nice to meet you too.'],
  ['Rami', 'Are you from Damascus?'],
  ['Maya', 'No, I\'m not. I\'m from Latakia. My family lives there.'],
  ['Lina', 'Maya\'s pharmacy is in my building. I see her every day!'],
  ['Rami', 'And this is Omar. He\'s my colleague. We work together, and we share a flat.'],
  ['Omar', 'Hello! Nice to meet you both.'],
  ['Maya', 'Are you an engineer too, Omar?'],
  ['Omar', 'No, I\'m not. I\'m an IT technician. I fix their computers!'],
  ['Rami', 'He fixes my phone too. We can\'t work without him.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – possessives and object pronouns**',
  table(['Subject', 'Possessive', 'Object'], [
    ['I', 'my friend', 'Lina knows **me**.'], ['you', 'your colleague', 'Nice to meet **you**.'],
    ['he', 'his phone', 'We can\'t work without **him**.'], ['she', 'her family', 'I see **her** every day.'],
    ['we', 'our teacher', 'She helps **us**.'], ['they', 'their computers', 'Omar fixes **them**.'],
  ], [1, 1.3, 2]),
  '**\'s** = belongs to: _Maya\'s pharmacy_ (the pharmacy of Maya), _Lina\'s friend_.  ⚠ Don\'t confuse _he\'s_ (he is) and _his_.',
  '**Practise:** Choose the correct word.',
  '1 Rami is (_he / his_) colleague.  2 This is Maya. Do you know (_she / her_)?  3 (_Omar / Omar\'s_) flat is in Mezzeh.  4 Ms Huda is (_our / us_) teacher.  5 Our parents live in Homs. We visit (_they / them_) on Fridays.',
  '**Useful phrases:**  This is my friend / colleague… · Nice to meet you both. · Do you know…? · We work together.',
  '**Pronunciation.** 🔊 **Track 1.4** Link the words: _this‿is_ /ðɪsɪz/ · _this‿is‿Omar_ · _she‿is_ → _she\'s_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A introduces C to B. Then change roles.'));
out.push(dlg(null, [
  ['A', '__________, this is my __________, __________. He\'s / She\'s a / an __________.'],
  ['B', 'Hi, __________. Nice to meet you.'],
  ['C', 'Nice to meet you too.'],
  ['B', 'Are you from __________?'],
  ['C', 'No, I\'m not. I\'m from __________.  /  Yes, I am.'],
]));
out.push(table(['Role card 1', 'Role card 2', 'Role card 3'], [['your cousin · Hama · nurse', 'your neighbour · Tartus · teacher', 'your colleague · Daraa · driver']], [1, 1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** tick what you hear.'));
out.push(PHRASE_CARD(['This is my…', 'He\'s / She\'s a…', 'Nice to meet you.', 'Are you from…?', 'No, I\'m not.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Show your partner a photo of a person in your life (or draw them). Introduce them: _This is my brother, Ahmad. He\'s 22. He\'s a student. His university is in Aleppo._'));
out.push(p('**b**  Now find a new pair. Introduce your partner **and** their photo person to them.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s photo person. Use **\'s**:  _This is Maya\'s brother. His name is…_'));
out.push(p('**Listener task:** ask one question, e.g. _Where does he live?_   **Board clinic:** fix three mistakes together.'));

out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes captions for two photos. Read and answer.'));
out.push(box(null, [
  '📷 **Photo 1:**  This is me with my colleagues at work. The man on the left is our manager, Mr Khaled. The woman next to me is Rana. She\'s my best friend at work. We have lunch together every day.',
  '📷 **Photo 2:**  And this is my cousin Sara with her husband, Fadi. Their son, Karam, is two. I love him!',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who is Mr Khaled?'));
out.push(item('2', 'Who is Lina\'s best friend at work?'));
out.push(item('3', 'How old is Karam?'));
out.push(box('Writer\'s box', [
  'Start captions with **This is…** / **This is me with…**',
  'Say where people are: **on the left · on the right · in the middle · next to me**.',
  'Write **\'s** with no space: _Lina\'s cousin_, not ~~Lina \'s~~.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a caption for a photo of people in your life.'));
out.push(p('This is me with my ______________. The man / woman on the left is ______________. He\'s / She\'s ______________. The person next to me is ______________. We ______________ together.'));
out.push(stage('6P', 'Check together', 5));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters and full stops', ''], ['A verb in every sentence: _He\'s my cousin._', ''],
  ['he / she + -s: _She works…_', ''], ['his / her / \'s used correctly', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write captions for **two** photos of people in your life (35 words or more). Say who they are, where they are in the photo, and one thing about them.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s captions. ★ _I like…_  ✓ _Can you add…?_  ? _Is your cousin a…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their captions aloud. Listeners note one person they remember.'));
out.push(box('Homework', ['Write your final captions. Then write a comment on your partner\'s photo (20+ words): _What a nice photo! Your sister looks…_'], C.lblue, C.navy));

// ======================= CYCLE 1.3 =======================
out.push(pb());
out.push(h2('1.3  How do you spell that?'));
out.push(p('**Function:** asking for and giving personal details   ·   **Grammar:** Wh- questions with _be_   ·   **Pronunciation:** the alphabet; /p/ and /b/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a form you fill in (a gym, a bank, a library). What questions does it ask? Your teacher writes them on the board.'));
out.push(table(['We SAY…', 'We WRITE…'], [['What\'s your name?', 'Full name: ______'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  How do we say these?   **@** = ______   **.** (in an email) = ______   **0933** = ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Maya want to do?   **A** buy a phone   **B** join a gym   **C** open a bank account'));
out.push(p('**b**  Listen again. **1** How old is Maya?   **2** What is her phone number?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.5  At City Gym', [
  ['Karim', 'Good afternoon. Can I help you?'],
  ['Maya', 'Yes, please. I\'d like to join the gym.'],
  ['Karim', 'Of course. What\'s your name, please?'],
  ['Maya', 'Maya Nasser.'],
  ['Karim', 'How do you spell your surname?'],
  ['Maya', 'N-A-S-S-E-R.'],
  ['Karim', 'Thank you. And what\'s your phone number?'],
  ['Maya', 'It\'s 0933 427 815.'],
  ['Karim', 'Sorry, is that 0933 427 815?'],
  ['Maya', 'Yes, that\'s right.'],
  ['Karim', 'What\'s your email address?'],
  ['Maya', 'It\'s maya.nasser@mail.sy – that\'s maya dot nasser at mail dot S-Y.'],
  ['Karim', 'How old are you?'],
  ['Maya', 'I\'m 24.'],
  ['Karim', 'And what\'s your address?'],
  ['Maya', '15 Al-Jalaa Street, Mezzeh.'],
  ['Karim', 'Great. Here\'s your card. Welcome to City Gym!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – Wh- questions with be**',
  table(['Question word', 'be', 'Rest', 'Answer'], [
    ['What', '\'s (is)', 'your name?', 'It\'s Maya Nasser. / Maya Nasser.'], ['How old', 'are', 'you?', 'I\'m 24.'],
    ['Where', 'are', 'you from?', 'I\'m from Latakia.'], ['What', '\'s', 'your email address?', 'It\'s maya.nasser@mail.sy.'],
    ['When', '\'s', 'your birthday?', 'It\'s on 3 May.'],
  ], [1.2, 0.8, 1.6, 2.2]),
  '⚠ Say _How old are you?_ – not ~~How old you are?~~ The verb comes **before** the person in questions.',
  '**Practise:** Put the words in order. 1 your / what / surname / is / ?  2 are / old / how / you / ?  3 from / where / you / are / ?  4 phone number / what / your / is / ?',
  '**Useful phrases:** How do you spell that? · Sorry, is that…? · Yes, that\'s right. · Here\'s your card.',
  '**Pronunciation – the alphabet.** 🔊 **Track 1.6** Listen and repeat the groups: /eɪ/ A H J K · /iː/ B C D E G P T V · /e/ F L M N S X Z · /aɪ/ I Y · /əʊ/ O · /uː/ Q U W · /ɑː/ R',
  '🔊 **Track 1.7** /p/ or /b/? Listen and circle. 1 pen / Ben  2 pin / bin  3 pack / back  4 P / B  5 pay / bay   _Audio script (read after listening): pen, bin, pack, P, bay._  Tip: for /p/, hold a paper in front of your mouth – it moves!',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the receptionist, B is the new member. Use the skeleton and the card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Good afternoon. Can I help you?'],
  ['B', 'Yes, please. I\'d like to join the __________.'],
  ['A', 'Of course. What\'s your name, please?'],
  ['B', '__________.'],
  ['A', 'How do you spell your surname?'],
  ['B', '__________.'],
  ['A', 'What\'s your phone number?'],
  ['B', 'It\'s __________.'],
  ['A', 'Sorry, is that __________?'],
  ['B', 'Yes, that\'s right.  /  No, it\'s __________.'],
]));
out.push(table(['Card 1 – library', 'Card 2 – sports club'], [['Omar Darwish · 0944 318 260 · omar.d@mail.sy · 35', 'Lina Haddad · 0991 205 734 · lina.haddad@mail.sy · 28']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the surname and phone number you hear. Check with the class.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Interview a new partner and complete the form. Use your real details **or invent** a phone number and address – it\'s OK!'));
out.push(table(['ENGLISH CLUB – NEW MEMBER', ''], [['Full name', ''], ['Age', ''], ['From', ''], ['Phone', ''], ['Email', ''], ['Address', '']], [1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner. Spell the surname:  _Her name is Maya Nasser – N-A-S-S-E-R. She\'s 24. Her email is…_'));
out.push(p('**Listener task:** write the surname as you hear it. Is your spelling right?   **Board clinic:** fix three mistakes.'));

out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Maya\'s gym form. Answer the questions.'));
out.push(table(['CITY GYM – MEMBERSHIP FORM', ''], [
  ['First name', 'Maya'], ['Surname', 'Nasser'], ['Age', '24'], ['Address', '15 Al-Jalaa Street, Mezzeh, Damascus'],
  ['Phone', '0933 427 815'], ['Email', 'maya.nasser@mail.sy'], ['Job', 'Pharmacist'],
  ['Why do you want to join?', 'I work all day in the pharmacy, so I want to be healthy. I want to swim and use the running machines.'],
  ['When can you come?', 'Monday and Wednesday evenings'],
], [1, 2], { headFill: C.navy }));
out.push(item('1', 'What is Maya\'s surname?'));
out.push(item('2', 'Why does she want to join the gym?'));
out.push(item('3', 'When can she come?'));
out.push(box('Writer\'s box', [
  'Forms use **short answers**: _Age: 24_ (not _I am 24 years old_).',
  'But questions like **Why…?** need a **full sentence** with a capital letter and a full stop.',
  '**First name** = your name.  **Surname** = your family name.  Write emails in small letters.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Complete a form for the **City Library**. Use your details (or invent them).'));
out.push(table(['CITY LIBRARY – MEMBERSHIP FORM', ''], [['First name', ''], ['Surname', ''], ['Age', ''], ['Phone', ''], ['Email', ''], ['What do you like reading? Why?', 'I like reading ______________ because ______________.']], [1, 2], { headFill: C.navy }));
out.push(stage('6P', 'Check together', 5));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Short answers for name, age, phone', ''], ['Capital letters for names and places', ''],
  ['A full sentence + full stop for the Why question', ''], ['Every box is complete', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one "Why" answer before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Choose a club you would like to join (sports, music, photography, computers, cooking…). Design a short form with **five** boxes and fill it in. In the last box, **write 3–4 sentences**: _Why do you want to join?_'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s form as the **club manager**. ★ _Good reason!_  ✓ _Can you add…?_  ? _When can you come?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their "Why" answers. Which club is the most popular in the class?'));
out.push(box('Homework', ['Write your final form. Then write a short **welcome note** from the club to your partner (20+ words): _Dear Maya, Welcome to the Photography Club! Our first meeting is…_'], C.lblue, C.navy));

// ======================= CYCLE 1.4 =======================
out.push(pb());
out.push(h2('1.4  I\'ve got two brothers'));
out.push(p('**Function:** talking about your family   ·   **Grammar:** _have got / has got_   ·   **Pronunciation:** _\'ve got / \'s got_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many family words do you know in English? Make a class list.'));
out.push(table(['We SAY…', 'We WRITE…'], [['I\'ve got two brothers.', 'My family is big.'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Complete the pairs: father – mother · brother – ______ · son – ______ · uncle – ______ · grandfather – ______ · husband – ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are Lina and Rami looking at?   **A** a map   **B** a photo   **C** a book'));
out.push(p('**b**  Listen again. **1** How many brothers has Rami got?   **2** Who is Jana?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.8  Family photos', [
  ['Lina', 'Is that a photo of your family?'],
  ['Rami', 'Yes, it is. This is my mother and this is my father. They live in Homs.'],
  ['Lina', 'They look lovely. Have you got any brothers or sisters?'],
  ['Rami', 'Yes, I have. I\'ve got two brothers and one sister. My sister, Hala, is a teacher.'],
  ['Lina', 'How old are your brothers?'],
  ['Rami', 'Samer is 26 and Fadi is 19. Fadi is a student at Al-Baath University.'],
  ['Lina', 'Has Samer got any children?'],
  ['Rami', 'No, he hasn\'t. He isn\'t married. What about you?'],
  ['Lina', 'I\'ve got one brother, Ziad. He\'s married and he\'s got a little daughter, Jana. She\'s three.'],
  ['Rami', 'So you\'re an aunt!'],
  ['Lina', 'Yes, I am – and I love it!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – have got**',
  table(['+', '–', '?'], [
    ['I / You / We / They **\'ve got** (have got) a sister.', 'I **haven\'t got** a car.', '**Have** you **got** any brothers? – Yes, I **have**. / No, I **haven\'t**.'],
    ['He / She **\'s got** (has got) a daughter.', 'He **hasn\'t got** any children.', '**Has** he **got** a car? – Yes, he **has**. / No, he **hasn\'t**.'],
  ], [1.3, 1, 1.6]),
  '⚠ _He\'s got_ = he **has** got. _He\'s married_ = he **is** married. Look at the next word!',
  '**How many** + plural: _How many brothers have you got?_   **any** in questions and negatives: _Have you got any children?_',
  '**Practise:** Complete with the correct form of _have got_. 1 I ______ two sisters.  2 ______ you ______ any cousins in Damascus?  3 Omar ______ (–) a car.  4 Lina\'s brother ______ a daughter.  5 How many children ______ your uncle ______?',
  '**Useful phrases:** They look lovely. · What about you? · So you\'re an aunt!',
  '**Pronunciation.** 🔊 **Track 1.9** Listen and repeat: _I\'ve got_ /aɪv gɒt/ · _she\'s got_ /ʃiːz gɒt/ · _Have you got…?_ /həv juː gɒt/ (weak _have_ in questions).',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton and the family cards. Then swap.'));
out.push(dlg(null, [
  ['A', 'Is that a photo of your family?'],
  ['B', 'Yes, it is. This is my __________.'],
  ['A', 'Have you got any brothers or sisters?'],
  ['B', 'Yes, I have. I\'ve got __________.  /  No, I haven\'t.'],
  ['A', 'How old is / are your __________?'],
  ['B', '__________ is __________.'],
  ['A', 'Has he / she got any children?'],
  ['B', 'Yes, he / she has. He / She\'s got __________.  /  No, he / she hasn\'t.'],
]));
out.push(table(['Family card 1', 'Family card 2'], [['2 sisters (Rasha 30, Nour 22) · Rasha: 1 son', '1 brother (Hadi 27) · no children · grandmother lives with you']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** draw a small family tree for what you hear.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draw your family tree (or a family you know well – you choose). Tell your partner about it. Your partner asks **three** questions with _Have you got…? / How old…? / Where does… live?_ Then change partners and repeat, faster.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s family:  _Omar\'s got three sisters. His oldest sister is a doctor. She\'s got two children._'));
out.push(p('**Listener task:** listen for _\'s got_ and _hasn\'t got_. Ask one question.   **Board clinic:** fix three mistakes.'));

out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Rami writes about his family for the class page. Read and answer.'));
out.push(box(null, [
  '**My family**',
  'I\'ve got a big family. My parents live in Homs. My father is a retired teacher and my mother is a nurse. I\'ve got two brothers and one sister. My sister, Hala, is 29. She\'s a teacher and she\'s got two sons. My brother Samer is 26. He works in a bank. My little brother, Fadi, is 19 and he studies engineering. I live in Damascus, but I visit my family every month. I love our big Friday lunches!',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where do Rami\'s parents live?'));
out.push(item('2', 'How many children has Hala got?'));
out.push(item('3', 'How often does Rami visit his family?'));
out.push(box('Writer\'s box', [
  'Start with a **topic sentence**: _I\'ve got a big / small family._',
  'Then write about each person: **who → age → job → one more fact**.',
  'Use **and** to join two short sentences: _She\'s a teacher **and** she\'s got two sons._',
  'Finish with a **feeling**: _I love…_ / _I miss…_',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('I\'ve got a ______________ family. My parents live in ______________. My father is ______________ and my mother is ______________. I\'ve got ______________. My ______________ is ______ years old. He / She ______________ and he / she\'s got ______________. I ______________ every ______________. I love ______________!'));
out.push(stage('6P', 'Check together', 5));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters (names, cities) and full stops', ''], ['_be_ in every sentence: _He\'s 26._', ''],
  ['he / she + -s: _He works… She\'s got…_', ''], ['Topic sentence at the start and a feeling at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about **your** family, or a family you know well (50 words or more). Use _have got_, and use _and_ two times.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I like…_  ✓ _Can you add…?_  ? _Does your sister live in…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their texts. Who has got the biggest family in the class?'));
out.push(box('Homework', ['Write your final text. Then write a reply to your partner (20+ words): _Your family sounds great! My brother is a student too…_'], C.lblue, C.navy));

// ======================= CYCLE 1.5 =======================
out.push(pb());
out.push(h2('1.5  I love cooking!'));
out.push(p('**Function:** talking about likes and dislikes   ·   **Grammar:** _love / like / don\'t mind / don\'t like / hate_ + _-ing_   ·   **Pronunciation:** _-ing_ /ɪŋ/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you do in your free time? Make a class list of activities.'));
out.push(table(['We SAY…', 'We WRITE…'], [['I love playing football.', 'I like reading.'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Put the faces in order from 😍 to 😠:  _I don\'t mind · I hate · I love · I don\'t like · I like_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Rami and Omar are new… **A** colleagues   **B** flatmates   **C** classmates'));
out.push(p('**b**  Listen again. **1** What does Rami hate?   **2** What do they both like?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.10  The new flat', [
  ['Omar', 'So, Rami, what do you do in your free time?'],
  ['Rami', 'I love playing football. I play every Friday with my friends.'],
  ['Omar', 'Really? I like football too, but I don\'t play. I like watching it on TV.'],
  ['Rami', 'Great! We can watch the matches together. Do you like cooking?'],
  ['Omar', 'Yes, I do. I love cooking. My mother\'s kibbeh is the best, but my kibbeh is OK too!'],
  ['Rami', 'That\'s good news. I hate cooking! But I don\'t mind washing the dishes.'],
  ['Omar', 'Perfect. I cook, you wash. What about music?'],
  ['Rami', 'I like listening to old Arabic songs. Fairuz in the morning!'],
  ['Omar', 'Me too! I think this flat is going to be fine.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – verb + -ing**',
  'I **love / like / don\'t mind / don\'t like / hate** + verb**-ing**: _I love cooking._ _She hates getting up early._',
  'Spelling: cook → cook**ing** · writ**e** → writ**ing** · swi**m** → swi**mming** · ge**t** → ge**tting**',
  'Questions: **Do** you like reading? – Yes, I **do**. / No, I **don\'t**.  **Does** she like swimming? – Yes, she **does**. / No, she **doesn\'t**.',
  '**Practise:** Write the -ing form. 1 read  2 swim  3 drive  4 play  5 shop  6 dance',
  'Then complete: 7 Omar loves ______ (cook).  8 I don\'t mind ______ (wash) the dishes.  9 ______ you like ______ (draw)?',
  '**Useful phrases:** What do you do in your free time? · Me too! · Really? · What about…? · Perfect.',
  '**Pronunciation.** 🔊 **Track 1.11** The end of _-ing_ is /ɪŋ/. Don\'t add a /g/ sound at the end! Listen and repeat: _cooking · reading · swimming · playing football · listening to music_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton and the cards. Then swap.'));
out.push(dlg(null, [
  ['A', 'What do you do in your free time?'],
  ['B', 'I love __________. I __________ every __________.'],
  ['A', 'Really? I like __________ too, but I don\'t __________.'],
  ['B', 'Do you like __________?'],
  ['A', 'Yes, I do. / No, I don\'t. I hate __________.'],
  ['B', 'What about __________?'],
  ['A', 'I don\'t mind __________.'],
]));
out.push(table(['Card A', 'Card B'], [['😍 swimming · 🙂 reading · 😐 shopping · 😠 getting up early', '😍 drawing · 🙂 walking in the park · 😐 cooking · 😠 watching football']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick what you hear.'));
out.push(PHRASE_CARD(['I love…', 'I don\'t mind…', 'I hate…', 'Do you like…?', 'Me too!', 'What about…?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Talk to your partner about **your** free time. Find **three things in common**. Then find a new partner and do it again – this time you have only two minutes!'));
out.push(table(['We both like…', 'He / She likes … but I…'], [['1', ''], ['2', ''], ['3', '']], [1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Maya and I both love swimming. She hates shopping, but I don\'t mind it._'));
out.push(p('**Listener task:** count the people who like the same thing as you.   **Board clinic:** fix three mistakes.'));

out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Maya writes to Sara, a new student in her class. Read and answer.'));
out.push(box(null, [
  'Hi Sara,',
  'Welcome to our class! I\'m Maya – I sit next to the window. I want to tell you a little about me. I love swimming and I go to City Gym twice a week. I also like reading novels, but I don\'t like watching TV. I hate getting up early, but I work at eight o\'clock! What do you like doing? Maybe we can go for a walk in the old city one day.',
  'See you on Thursday,',
  'Maya',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does Maya do twice a week?'));
out.push(item('2', 'What doesn\'t she like doing?'));
out.push(item('3', 'What does she want to do with Sara?'));
out.push(box('Writer\'s box', [
  '**A friendly message:** _Hi + name,_ → why you write → information → a question → an idea → _See you… / Bye for now,_ → your name.',
  'Use **but** for a contrast: _I like reading, **but** I don\'t like watching TV._',
  'Use **also** for one more idea: _I **also** like…_',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi ______,   Welcome to our class! I\'m ______. I love ______________ and I ______________. I also like ______________, but I don\'t like ______________. I hate ______________! What do you like doing? Maybe we can ______________ one day.   See you on ______,   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters and full stops', ''], ['Verb + -ing after love / like / hate', ''],
  ['_but_ used for a contrast', ''], ['All parts: greeting, information, a question, an idea, ending', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a message to a **classmate** you don\'t know well (50 words or more). Tell them about your likes and dislikes, ask a question, and suggest something to do together.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Give your message to the classmate. They read it and write: ★ _I like…_  ✓ _Can you add…?_  ? _a question_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their messages. Listeners: say _Me too!_ when you share a like.'));
out.push(box('Homework', ['Write a **reply** to the message you received (30+ words). Answer the question and say yes or no to the idea.'], C.lblue, C.navy));

// ======================= CYCLE 1.6 =======================
out.push(pb());
out.push(h2('1.6  Sorry, can you repeat that?'));
out.push(p('**Function:** asking people to repeat, spell and explain   ·   **Grammar:** imperatives; _Can you…?_   ·   **Pronunciation:** polite intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What can you say when you don\'t understand? What do teachers say in class? Make two lists.'));
out.push(table(['When I don\'t understand, I SAY…', 'In class, the teacher SAYS / WRITES…'], [['Sorry?', 'Open your books.'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Match: 1 Work in pairs.  2 Listen and repeat.  3 Close your books.  →  A 📕   B 👥   C 👂🗣'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is Lina calling?   **A** to ask about the class   **B** to say sorry   **C** to book a room'));
out.push(p('**b**  Listen again. **1** What time is the class?   **2** What room is it in?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.12  A bad line', [
  ['Ms Huda', 'Hello, Al-Yasmin Language Centre.'],
  ['Lina', 'Hello, this is Lina Haddad. I\'m in Class 4B. Sorry, can you speak louder, please? The line is bad.'],
  ['Ms Huda', 'Of course. How can I help?'],
  ['Lina', 'What time is the class on Thursday?'],
  ['Ms Huda', 'It\'s at half past five.'],
  ['Lina', 'Sorry? Can you repeat that, please?'],
  ['Ms Huda', 'Half past five. Five thirty.'],
  ['Lina', 'OK, thank you. And where is it?'],
  ['Ms Huda', 'It\'s in Room 12, on the second floor. And bring your workbook, please.'],
  ['Lina', 'Sorry, what does "workbook" mean?'],
  ['Ms Huda', 'It\'s the small book with exercises – the blue one.'],
  ['Lina', 'Ah, I understand. Thank you very much.'],
  ['Ms Huda', 'You\'re welcome. See you on Thursday!'],
], 'Sound effect: a noisy phone line'));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – imperatives and Can you…?**',
  'Imperative = the base verb, no subject: **Bring** your workbook. **Open** your books. **Don\'t write** now.',
  'A polite request: **Can you** + base verb **, please?**  _Can you repeat that, please? Can you speak more slowly, please?_',
  '**Practise:** Make polite requests. 1 (repeat) → _Can you repeat that, please?_  2 (spell your name)  3 (speak louder)  4 (write it on the board)  5 (say that again)',
  '**Repair phrases:** Sorry? · Can you repeat that, please? · Can you speak more slowly / louder, please? · How do you spell that? · What does "…" mean? · I don\'t understand. · Ah, I understand. Thank you!',
  '**Classroom language:** Work in pairs. · Listen and repeat. · Open / Close your books. · Look at the board. · Don\'t look at your partner\'s card!',
  '**Pronunciation.** 🔊 **Track 1.13** Your voice goes **up** ↗ on _Sorry?_ and goes **down** ↘ at the end of polite requests: _Can you repeat that, please?_ ↘. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B covers the book. A reads card A quickly and quietly. B must use repair phrases to get every detail. Then swap with card B.'));
out.push(dlg(null, [
  ['A', 'Hello, __________ (place).'],
  ['B', 'Hello, this is __________. Sorry, can you speak louder, please?'],
  ['A', 'Of course. How can I help?'],
  ['B', 'What time is __________?'],
  ['A', 'It\'s at __________.'],
  ['B', 'Sorry? Can you repeat that, please?'],
  ['A', '__________. And bring your __________.'],
  ['B', 'Sorry, what does "__________" mean?'],
  ['A', 'It\'s __________.'],
]));
out.push(table(['Card A – City Gym', 'Card B – the dentist'], [['class at **quarter past seven** · Room **3** · bring your **towel** (= a cloth to dry your body)', 'appointment at **ten to four** · **first** floor · bring your **ID card** (= a card with your name and photo)']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. The class makes noise (quietly!). **Listener task:** tick the repair phrases you hear.'));
out.push(PHRASE_CARD(['Sorry?', 'Can you repeat that?', 'Can you speak louder?', 'How do you spell that?', 'What does … mean?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('On a card, write **three** true facts about you: your birthday, your favourite place in Syria, and one difficult word you know in English. Tell a partner **quickly**. Your partner must use repair phrases and write all three facts correctly. Then swap. Then find a new partner.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what you understood:  _Omar\'s birthday is on 3 May. His favourite place is the Citadel of Aleppo. His difficult word is "comfortable" – C-O-M-F-O-R-T-A-B-L-E._'));
out.push(p('**Listener task:** if you don\'t understand, use a repair phrase!   **Board clinic:** fix three mistakes.'));

out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes a note to her teacher. Read and answer.'));
out.push(box(null, [
  'Dear Ms Huda,',
  'I\'m sorry, but I can\'t come to class on Thursday because I have an important meeting at work. Can you send me the homework, please? My email is lina.haddad@mail.sy. Also, what does "revise" mean? It\'s in the homework instructions.',
  'Thank you,',
  'Lina Haddad (Class 4B)',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why can\'t Lina come to class?'));
out.push(item('2', 'What does she want Ms Huda to do?'));
out.push(item('3', 'What word doesn\'t she understand?'));
out.push(box('Writer\'s box', [
  '**A note to a teacher:** _Dear + title + name,_ (Dear Ms Huda, / Dear Mr Khaled,) → the problem → a polite request → _Thank you, / Best wishes,_ → full name (+ class).',
  'Use **because** to give a reason: _I can\'t come **because** I have a meeting._',
  'Be polite: **Can you…, please?**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______________,   I\'m sorry, but I can\'t ______________ on ______ because ______________. Can you ______________, please? Also, what does "______" mean?   Thank you,   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Dear + Ms / Mr + name_ and a comma', ''], ['A reason with _because_', ''],
  ['A polite request: _Can you…, please?_', ''], ['A good ending and full name', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your request sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a **real** note to your teacher (35 words or more). Ask for help with something: a word you don\'t understand, where to buy the workbook, a problem with the class time, or another real question.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as the **teacher**. ★ _Clear request!_  ✓ _Can you add…?_  ? _Which word…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Your teacher reads two notes (with permission) and answers the questions for the whole class.'));
out.push(box('Homework', ['Write your final note. Then write the **teacher\'s reply** to your partner\'s note (25+ words): _Dear Omar, Thank you for your note. "Revise" means…_'], C.lblue, C.navy));

// ======================= CYCLE 1.7 =======================
out.push(pb());
out.push(h2('1.7  Review & Mediate: Have you seen the notice?'));
out.push(p('**Function:** telling someone about information in a notice   ·   **Recycling:** Unit 1   ·   **Exam practice:** A2 Key Reading Part 1, Writing Part 6'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(p('In teams. Say the phrase! **1** You meet someone new. → ______  **2** You want the spelling. → ______  **3** You don\'t understand a word. → ______  **4** You introduce your colleague. → ______  **5** You ask about brothers and sisters. → ______  **6** You say you don\'t like cooking a lot (😐). → ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the notice on the wall of Al-Yasmin Language Centre.'));
out.push(box(null, [
  '**AL-YASMIN ENGLISH CLUB**',
  'Speak English for fun – games, songs and short films!',
  '**When:** every Saturday, 11:00–12:30   **Where:** the café, ground floor',
  '**Who:** all students, all levels   **Cost:** free for students',
  '**Bring:** your student card and a friend!',
  'Write your name on the list at reception before Thursday.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lina tells Maya about the club. What does Maya need to do before Thursday?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.14  The English Club', [
  ['Lina', 'Maya, have you seen the notice about the English Club?'],
  ['Maya', 'No, I haven\'t. What is it?'],
  ['Lina', 'It\'s a club for students. You can speak English and play games. They watch short films too.'],
  ['Maya', 'That sounds fun! When is it?'],
  ['Lina', 'It\'s every Saturday, from eleven to half past twelve, in the café.'],
  ['Maya', 'How much is it?'],
  ['Lina', 'It\'s free for students. You need to bring your student card.'],
  ['Maya', 'Great. Can I go?'],
  ['Lina', 'Yes, but you need to write your name on the list at reception before Thursday.'],
  ['Maya', 'OK, I\'ll do it today. Let\'s go together!'],
]));
out.push(sp());
out.push(box('Language box – telling someone about a notice', [
  'Don\'t read the notice aloud. Use **your own** sentences:',
  '_When: Saturday 11:00_ → **It\'s every Saturday at eleven.**   _Cost: free_ → **It\'s free.**   _Bring: student card_ → **You need to bring your student card.**',
  '**Useful phrases:** Have you seen the notice about…? · It\'s a club for… · You can… · You need to… · It\'s free / It costs… · Let\'s go together!',
  '_Note: Have you seen…? / I\'ll… – learn these as phrases now. We study them later in the course._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads notice A, B reads notice B. **Don\'t show your notice!** Tell your partner about it. Your partner asks questions. Then decide: which club do you want to join together?'));
out.push(table(['Notice A', 'Notice B'], [[
  '**PHOTOGRAPHY CLUB**  · Mondays 6–7.30 pm · Room 8 · 5,000 SYP a month · Bring: your phone or camera · Sign up: email photo.club@alyasmin.sy',
  '**COOKING IN ENGLISH**  · Wednesdays 4–6 pm · the centre kitchen · free · Bring: an apron · Sign up: talk to Ms Huda by Sunday']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the day, time and place of each club.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** club, course or event in your town (a sports club, a library event, a course at your work). Tell your partner about it: what, when, where, cost, what to bring. Your partner decides: _Yes, I want to go because… / No, thanks, because…_'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about your **partner\'s** club or event, in your own words:  _There\'s a football club at Tishreen Park. It\'s every Friday at nine. It costs…_'));
out.push(p('**Listener task:** choose one event you want to go to. **Board clinic:** fix three mistakes.'));

out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 7));
out.push(p('For each text, choose the correct answer **A**, **B** or **C**.'));
out.push(box(null, ['**1**  _Students: please bring your workbook to every class. No workbook = no homework check!_'], 'FFFFFF', C.navy));
out.push(p('**A** Students must buy a new workbook.   **B** Students need to have their workbook in class.   **C** The teacher checks homework once a month.', { indent: 200 }));
out.push(box(null, ['**2**  _Maya – Gym closed today (water problem). Your Monday class is now on Tuesday, same time. Karim_'], 'FFFFFF', C.navy));
out.push(p('**A** Maya\'s class is on Tuesday this week.   **B** Maya\'s class is at a different time.   **C** The gym is closed for a week.', { indent: 200 }));
out.push(box(null, ['**3**  _LIBRARY: Members can borrow 3 books for 2 weeks. Please show your card._'], 'FFFFFF', C.navy));
out.push(p('**A** You can keep books for three weeks.   **B** Anyone can take books home.   **C** You need a library card to borrow books.', { indent: 200 }));
out.push(box(null, ['**4**  _Hi Omar, I can\'t meet at 5 – my meeting finishes late. Is 6.30 OK? Same café. Rami_'], 'FFFFFF', C.navy));
out.push(p('**A** Rami wants to change the place.   **B** Rami wants to meet later.   **C** Rami can\'t meet today.', { indent: 200 }));
out.push(stage('6', 'Write with help', 9));
out.push(p('Your friend Sami wants to learn English. Write an email to him about the Al-Yasmin English Club. Use the notice.'));
out.push(p('Hi Sami,   There\'s a great English club at my language centre! It\'s every ______ from ______ to ______, in the ______. It\'s ______ for students. You need to bring ______. Please write your name on ______ before ______. Let\'s go together!   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(table(['Checklist', '✓ / ✗'], [['Day and time', ''], ['Place and cost', ''], ['What to bring and what to do before Thursday', ''], ['Own words – not copied from the notice', '']], [5, 1]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'You want to go to the **Photography Club** (Notice A) with your English friend, Tom. Write an email to Tom.',
  'In your email:  •  say **when** the club is  •  say **what Tom needs to bring**  •  say **how to sign up**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Rami ___ from Homs.   a) are   b) is   c) am',
  '2  ___ you got any sisters?   a) Have   b) Has   c) Do',
  '3  This is Maya. Do you know ___?   a) she   b) her   c) hers',
  '4  Omar loves ___.   a) cook   b) cooks   c) cooking',
  '5  How old ___ ?   a) you are   b) are you   c) you',
  '6  Lina is ___ accountant.   a) a   b) an   c) –',
  '7  My father\'s sister is my ___.   a) aunt   b) uncle   c) cousin',
  '8  Sorry, can you ___ that, please?   a) repeat   b) repeating   c) to repeat',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 1.15** Listen to a new student at the gym. Complete the form.   Surname: ______   Age: ______   Phone: ______'));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['Karim', 'What\'s your name, please?'],
  ['Man', 'Hadi Barakat. That\'s B-A-R-A-K-A-T.'],
  ['Karim', 'And how old are you, Hadi?'],
  ['Man', 'I\'m thirty-two.'],
  ['Karim', 'What\'s your phone number?'],
  ['Man', 'It\'s 0955 612 043.'],
]));
out.push(p('**C  Writing.** Write a note to a new classmate (25+ words). Say hello, where you are from, and one thing you love doing. Ask one question.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 1)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ greet people and introduce myself',
  '☐ introduce other people',
  '☐ ask for and give personal details and spell names',
  '☐ talk about my family',
  '☐ talk about my likes and dislikes',
  '☐ ask people to repeat, spell and explain',
  '☐ tell someone about a notice in my own words',
  '☐ write a profile post, captions, a form, a family text, a friendly message and a note to a teacher',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
