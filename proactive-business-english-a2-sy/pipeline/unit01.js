// Proactive Business English A2 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'colleague · manager · assistant · department · company · office · warehouse · trade counter · staff · position · surname · first name · badge · extension · head office · branch · supplier · customer · reception · sales · accounts · team · report to · look after · spell · repeat';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 1  Meeting People at Work'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**1.1**  greet people at work and say who you are',
  '**1.2**  introduce a colleague to somebody else',
  '**1.3**  give and take personal and company details, and spell them',
  '**1.4**  say who you work for and describe your company',
  '**1.5**  say what you do in your job',
  '**1.6**  ask somebody to repeat, spell or explain — on the telephone and face to face',
  '**1.7**  Review & Mediate: tell a colleague what a staff notice says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Meet the people in this book', [
  'Everybody in Book 1 works at **Sham Trading Co.**, a small import and distribution company in **Mezzeh, Damascus**. There is an office on the second floor, a warehouse behind the building, and a small trade counter at the front.',
  '**Nour Mansour** (24) – administrative assistant. It is her first job; she starts in this unit.   ·   **Mr Khaled Ayoub** (48) – office manager.',
  '**Nadia Sayegh** (33) – accountant, from Homs.   ·   **Bassel Nassif** (29) – sales, from Aleppo; he travels to Homs and Aleppo.',
  '**Abu Yasser** (52) – warehouse supervisor; thirty years in the trade. He says: _check it twice_.',
  'Outside the company: **Mr Fouad Tarabishi**, a customer with a shop in Souq al-Hamidiyeh, and **Ms Dima Shamsi**, the supplier in Aleppo.',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('How every cycle works', [
  '**Lesson A – Speaking:**  1 Get ready → 2 Listen and read → 3 Practise → 3R Perform → 4 Your turn → 4R Report',
  '**Lesson B – Writing:**  5 Read → 6 Write with help → 6P Check together → 6R Share → 7 Write freely → 7P Respond → 7R Share → Homework',
  'When colleagues perform or report, **listen and do the listener task**. Your teacher will not stop you to correct mistakes – mistakes go on the board at the end, and we fix them together.',
  '**Everything in this book happens at work.** Where a task asks about you, you can use your real job — or you can invent one.',
], C.grey, C.navy));

// ======================= CYCLE 1.1 =======================
out.push(pb());
out.push(h2('1.1  Good morning — I\'m the new assistant'));
out.push(p('**Function:** greeting people at work and saying who you are   ·   **Grammar:** _be_ (present)   ·   **Pronunciation:** contractions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  It is your first morning in a new job. What do people **say** when they meet at work? What do they **write** in a first email? Tell your teacher. Your teacher writes your ideas on the board.'));
out.push(table(['We SAY…', 'We WRITE…'], [['Good morning. / Hello.', 'Dear colleagues,'], ['', ''], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Match the department with the work. _sales · accounts · warehouse · reception_   →   money and invoices ___ · customers and orders ___ · the first desk at the door ___ · boxes and deliveries ___'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Nour?   **A** in the warehouse   **B** at the office door   **C** in a café'));
out.push(p('**b**  Listen again. Answer the questions.   **1** What is Nour\'s job?   **2** Which floor is the office on?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.1  Nour\'s first morning', [
  ['Nour', 'Good morning. I\'m Nour Mansour. I\'m the new assistant.'],
  ['Mr Ayoub', 'Good morning, Nour. Welcome to Sham Trading. I\'m Khaled Ayoub, the office manager.'],
  ['Nour', 'Pleased to meet you, Mr Ayoub.'],
  ['Mr Ayoub', 'Pleased to meet you too. The office is on the second floor. Are you from Damascus?'],
  ['Nour', 'Yes, I am. I\'m from Mezzeh — I live ten minutes from here.'],
  ['Mr Ayoub', 'That\'s very good. This is your desk, next to Nadia. She\'s our accountant.'],
  ['Nour', 'Thank you. Is the warehouse in this building?'],
  ['Mr Ayoub', 'It\'s behind the building. Abu Yasser is the supervisor there — you\'ll meet him today.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – be (present)**',
  table(['+', '–', '?'], [
    ['I\'m (I am) the new assistant.', 'I\'m not from Homs.', 'Am I late? – Yes, you are. / No, you aren\'t.'],
    ['You\'re (you are) the manager.', 'You aren\'t in sales.', 'Are you from Damascus? – Yes, I am. / No, I\'m not.'],
    ['He\'s / She\'s our accountant.', 'She isn\'t in the warehouse.', 'Is the office on this floor? – Yes, it is.'],
  ], [1, 1, 1.4]),
  '⚠ Every English sentence needs a verb. Say _I\'m the new assistant_, not ~~I new assistant~~. Use _a_ before consonant sounds (a manager) and _an_ before vowel sounds (an assistant, an accountant).',
  '**Practise:** Complete with _\'m, \'s, \'re, isn\'t_ or _aren\'t_.',
  '1 I ___ the new assistant.  2 She ___ our accountant.  3 You ___ late – we start at eight.  4 Bassel ___ in the office today. He\'s in Homs.  5 ___ you from Aleppo? – No, I\'m not.',
  '**Useful phrases:**  Pleased to meet you.  ·  Pleased to meet you too.  ·  Welcome to…  ·  I\'m the new…  ·  This is your desk.',
  '**Pronunciation – contractions.** 🔊 **Track 1.2** Listen and repeat: _I\'m_ /aɪm/ · _you\'re_ /jɔː/ · _he\'s_ /hiːz/ · _she\'s_ /ʃiːz/ · _it\'s_ /ɪts/ · _I\'m an assistant_ /aɪmən əˈsɪstənt/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton. Then swap roles. Then use the role cards.'));
out.push(dlg(null, [
  ['A', 'Good morning. I\'m __________. I\'m the new __________.'],
  ['B', 'Good morning, __________. Welcome to __________. I\'m __________, the __________.'],
  ['A', 'Pleased to meet you, __________.'],
  ['B', 'Pleased to meet you too. Are you from __________?'],
  ['A', 'Yes, I am. / No, I\'m not. I\'m from __________.'],
  ['B', 'This is your desk, next to __________.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [['Hala Mourad · customer service · Latakia · her desk is next to the window', 'Bassel Nassif · sales · Aleppo · his desk is next to the door']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['Good morning.', 'I\'m the new…', 'Welcome to…', 'Pleased to meet you.', 'Are you from…?', 'This is your desk.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Stand up. Meet **three** colleagues. Use your **real** name, job and company — or invent them. Make notes. With the third person, try to finish in **one minute**.'));
out.push(table(['Name', 'Job', 'Company / department'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Introduce one person to the class:  _This is ______. He\'s / She\'s a / an ______. He\'s / She\'s in ______._'));
out.push(p('**Listener task:** write down one fact. Then ask that person one question, e.g. _Are you in the sales department?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Nour writes a short message to all the staff on her first day. Read it and answer the questions.'));
out.push(box(null, [
  '**To:** All staff   **From:** Nour Mansour   **Subject:** Hello from the new assistant',
  'Dear colleagues,',
  'My name is Nour Mansour. I\'m the new administrative assistant. I\'m 24 years old and I\'m from Mezzeh. My desk is on the second floor, next to Nadia. I look after the orders and the post. My extension is 212.',
  'Pleased to meet you all.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is Nour\'s job?'));
out.push(item('2', 'Where is her desk?'));
out.push(item('3', 'What is her extension number?'));
out.push(box('Writer\'s box', [
  '**Parts of a first message to staff:** subject line → greeting → name and job → where you sit → what you look after → how to reach you → friendly ending → your name.',
  '**Capital letters:** names (Nour), cities and countries (Damascus, Syria), companies (Sham Trading Co.), languages (English), and **I** – always.',
  'Every sentence ends with a **full stop (.)**. A work message is short: one idea in each sentence.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Use the ideas on the board. Complete the message about **you**.'));
out.push(p('**Subject:** ______________   Dear colleagues, My name is ______________. I\'m the new ______________. I\'m from ______________. My desk is ______________. I look after ______________. My extension is ______. Pleased to meet you all.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (read this once – we use it all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "Your message is clear. Check the capital letter in _damascus_. Can you add your extension?"',
  'Be kind, be clear, and point to **one** thing to fix.',
  '**Phrase bank:** It\'s clear. · I like… · Can you add…? · I think you forgot… · Check the spelling of… · Good idea!',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books with your partner. Read your partner\'s message. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters (names, cities, company, I) and full stops', ''],
  ['A verb (_be_) in every sentence: _I\'m…_', ''],
  ['he / she + verb: _she works_ (if you write about another person)', ''],
  ['All the parts: subject, greeting, name, job, desk, duties, extension, ending', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your **real** first-day message to the staff of your company (35 words or more). Add **one more thing**: your working hours, the languages you speak, or where you worked before.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as a **colleague**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _a question about the content_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the messages on the wall. Walk and read. Put a sticky note on one message: _Welcome! My desk is on the second floor too._'));
out.push(box('Homework', ['Write your final message. Then write a **reply** to your partner\'s message (20+ words), e.g. _Hello Nour, welcome to the company. I\'m in the accounts department. My extension is 208._'], C.lblue, C.navy));

// ======================= CYCLE 1.2 =======================
out.push(pb());
out.push(h2('1.2  This is my colleague, Nadia'));
out.push(p('**Function:** introducing a colleague to somebody else   ·   **Grammar:** possessive adjectives, \'s, object pronouns   ·   **Pronunciation:** linking _this is_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Who do you work with? Make a class list of words for people at work: _colleague, manager, …_'));
out.push(table(['We SAY…', 'We WRITE…'], [['This is my colleague, Nadia.', 'Nadia Sayegh (Accounts)'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Put the words in the right group: _colleague · manager · customer · supplier · supervisor · assistant · driver · accountant_.   **In our company:** ______   **Outside our company:** ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many people are in the conversation?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** What is Nadia\'s job?   **2** Where is Bassel today?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.3  At the second-floor desks', [
  ['Mr Ayoub', 'Nour, this is Nadia. Nadia, this is Nour, our new assistant.'],
  ['Nadia', 'Hello, Nour. Pleased to meet you. Your desk is next to mine.'],
  ['Nour', 'Pleased to meet you too, Nadia. What do you do here?'],
  ['Nadia', 'I\'m the accountant. I look after the invoices and the payments.'],
  ['Nour', 'And who is at that desk?'],
  ['Nadia', 'That\'s Bassel\'s desk. He\'s in sales. He isn\'t here today — he\'s in Homs with a customer.'],
  ['Mr Ayoub', 'You\'ll meet him tomorrow. His customers are all in Homs and Aleppo.'],
  ['Nour', 'Thank you. And the warehouse supervisor — what\'s his name?'],
  ['Nadia', 'Abu Yasser. Everybody calls him Abu Yasser. Ask him anything — he knows it all.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – possessives and object pronouns**',
  table(['Subject', 'Possessive adjective', 'Object', 'Example'], [
    ['I', 'my', 'me', 'This is **my** desk. Ask **me**.'],
    ['you', 'your', 'you', '**Your** extension is 212.'],
    ['he / she / it', 'his / her / its', 'him / her / it', 'That\'s **his** desk. Ask **him**.'],
    ['we / they', 'our / their', 'us / them', '**Our** office is upstairs. Call **them**.'],
  ], [1, 1.4, 1, 2]),
  '**\'s for people:** _Bassel\'s desk_ · _the manager\'s office_ · _Ms Shamsi\'s company_.',
  '⚠ _his_ and _her_ follow the **owner**, not the thing: _Nadia and **her** desk_ · _Bassel and **his** customers_.',
  '**Practise:** Complete with _my, your, his, her, our, their, him, her_ or _them_.',
  '1 This is Nadia. ___ desk is next to mine.  2 That\'s Bassel\'s desk. Ask ___ about the Homs order.  3 We like ___ new office.  4 Mr Ayoub is in a meeting. Please call ___ at four.  5 The customers are waiting. Can you help ___?',
  '**Useful phrases:**  This is…  ·  Pleased to meet you.  ·  What do you do here?  ·  Who is at that desk?  ·  He / She isn\'t here today.',
  '**Pronunciation – linking.** 🔊 **Track 1.4** Listen and repeat: _this is_ /ðɪsɪz/ · _this is my colleague_ · _that\'s his desk_ · _ask him_ /ɑːskɪm/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in threes. A introduces B to C. Then change roles. Then use the role cards.'));
out.push(dlg(null, [
  ['A', '__________, this is __________. __________, this is __________, our __________.'],
  ['B', 'Hello, __________. Pleased to meet you.'],
  ['C', 'Pleased to meet you too. What do you do here?'],
  ['B', 'I\'m the __________. I look after __________.'],
  ['C', 'And who is at that desk?'],
  ['B', 'That\'s __________\'s desk. He / She is in __________.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [['Abu Yasser · warehouse supervisor · looks after the stock and the deliveries', 'Hala Mourad · customer service · looks after complaints and repairs']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups of three act out their introduction for the class – **without the book**.'));
out.push(p('**Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['This is…', 'Pleased to meet you.', 'What do you do here?', 'I look after…', 'That\'s … \'s desk.', 'He / She isn\'t here today.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Work in threes. Introduce your **real** colleague (or invent one) to a third person. Say the person\'s name, job and one duty. Make notes.'));
out.push(table(['Name', 'Job', 'Looks after'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about one person you met:  _This is ______. He\'s / She\'s our ______. He / She looks after ______._'));
out.push(p('**Listener task:** write the person\'s job. Then ask one question with _his_ or _her_, e.g. _Is her desk upstairs?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Nour writes the staff list for the office door. Read it and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — SECOND FLOOR**',
  'Mr Khaled Ayoub — Office Manager — ext. 201',
  'Nadia Sayegh — Accounts — ext. 208 — invoices and payments',
  'Bassel Nassif — Sales — ext. 205 — customers in Homs and Aleppo',
  'Nour Mansour — Assistant — ext. 212 — orders and post',
  'Warehouse: Abu Yasser — ext. 230',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who looks after the invoices?'));
out.push(item('2', 'What is Bassel\'s extension?'));
out.push(item('3', 'Which person is not on the second floor?'));
out.push(box('Writer\'s box', [
  '**Parts of a staff list:** company and floor → name → department or job → extension → what the person looks after.',
  'Keep the **same order** in every line. A reader looks down the list, not across it.',
  'Use a dash (—) or a comma between the parts, and use it the same way every time.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Complete the staff list for **your** office or department. Write four people.'));
out.push(table(['Name', 'Job / department', 'Ext.', 'Looks after'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 0.6, 2]));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s list. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters for names, departments and the company', ''],
  ['The same order in every line', ''],
  ['A job **and** a duty for each person', ''],
  ['All four lines complete', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short paragraph (35 words or more) introducing **two** people in your office to a new colleague. Use _his_, _her_ and _\'s_ at least once each.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s paragraph as the **new colleague**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _one question about a person_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read one paragraph aloud to the class. The class says which person they would ask about an invoice, and which about a delivery.'));
out.push(box('Homework', ['Write your final paragraph. Then write a **reply** as the new colleague (20+ words), e.g. _Thank you. So I should ask Nadia about the invoice and Abu Yasser about the delivery._'], C.lblue, C.navy));

// ======================= CYCLE 1.3 =======================
out.push(pb());
out.push(h2('1.3  How do you spell the company name?'));
out.push(p('**Function:** giving and taking details, and spelling them   ·   **Grammar:** Wh- questions with _be_   ·   **Pronunciation:** the alphabet and numbers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What details does a company ask a new customer for? Make a class list: _name, company, …_'));
out.push(table(['We SAY…', 'We WRITE…'], [['What\'s your company name?', 'Company: __________'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Say these aloud: **0991 205 734** · **ext. 212** · **Order no. 4087** · **d.shamsi@mail.sy**. Which parts are hard to hear on the telephone?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is on the telephone?   **A** a supplier   **B** a new customer   **C** the manager'));
out.push(p('**b**  Listen again. **1** What is the shop called?   **2** What is Mr Tarabishi\'s mobile number?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.5  Taking a customer\'s details', [
  ['Nour', 'Sham Trading, good morning. Nour speaking.'],
  ['Mr Tarabishi', 'Good morning. My name is Fouad Tarabishi. I have a shop in Souq al-Hamidiyeh.'],
  ['Nour', 'Good morning, Mr Tarabishi. How do you spell your surname, please?'],
  ['Mr Tarabishi', 'T-A-R-A-B-I-S-H-I.'],
  ['Nour', 'Thank you. And what\'s the name of the shop?'],
  ['Mr Tarabishi', 'Al-Noor Stationery. That\'s A-L, then N-O-O-R.'],
  ['Nour', 'Al-Noor Stationery. And what\'s your mobile number?'],
  ['Mr Tarabishi', 'It\'s 0944 318 260.'],
  ['Nour', 'Let me repeat that: zero nine four four, three one eight, two six zero. Is that right?'],
  ['Mr Tarabishi', 'Yes, that\'s right.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – Wh- questions with be**',
  table(['Question', 'Answer'], [
    ['**What\'s** your name / your company / your email?', 'It\'s Nour Mansour. / It\'s Sham Trading.'],
    ['**Where\'s** your office / your shop?', 'It\'s in Mezzeh. / It\'s in Souq al-Hamidiyeh.'],
    ['**Who\'s** your manager?', 'It\'s Mr Ayoub. / Mr Ayoub is.'],
    ['**How** do you spell that?', 'T-A-R-A-B-I-S-H-I.'],
  ], [1.6, 2]),
  '⚠ _What\'s_ = _What is_. In a question the verb comes **before** the person: _What is your name?_ not ~~What your name is?~~',
  '**Checking what you heard:** _Let me repeat that…_ · _Is that right?_ · _Sorry, is that B for Beirut or P for Palmyra?_',
  '**Practise:** Write the question.',
  '1 ______? – It\'s Nadia Sayegh.  2 ______? – It\'s in Mezzeh, on the second floor.  3 ______? – It\'s 0991 205 734.  4 ______? – S-H-A-M.  5 ______? – Mr Ayoub is.',
  '**Useful phrases:**  … speaking.  ·  How do you spell that, please?  ·  Let me repeat that.  ·  Is that right?',
  '**Pronunciation – alphabet and numbers.** 🔊 **Track 1.6** Listen and repeat the hard letters: _A E I_ · _G J_ · _B P_ · _M N_ · _S X_. Then the numbers: _13 / 30_ · _14 / 40_ · _15 / 50_. In Syria we say a mobile number in three groups: _0944 · 318 · 260_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the assistant, one is the customer. Use the skeleton, then the role cards. Then swap.'));
out.push(dlg(null, [
  ['A', '__________, good morning. __________ speaking.'],
  ['B', 'Good morning. My name is __________. I have a __________ in __________.'],
  ['A', 'How do you spell your surname, please?'],
  ['B', '__________.'],
  ['A', 'Thank you. And what\'s your mobile number?'],
  ['B', 'It\'s __________.'],
  ['A', 'Let me repeat that: __________. Is that right?'],
]));
out.push(table(['Role card 1', 'Role card 2'], [['Dima Shamsi · supplier · Aleppo · 0955 612 043 · d.shamsi@mail.sy', 'Hadi Barakat · customer · Latakia · 0933 427 815 · hadi.b@mail.sy']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the telephone call for the class – **without the book**. Sit back to back, so you cannot see each other\'s lips.'));
out.push(p('**Listener task:** write down the name and the number you hear. Then check with the pair.'));
out.push(PHRASE_CARD(['… speaking.', 'How do you spell…?', 'What\'s your…?', 'Let me repeat that.', 'Is that right?', 'That\'s right.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take the details of **three** classmates for a company list. Use your real details, or invent them. Spell every surname aloud; do not show your book.'));
out.push(table(['Surname (spelled)', 'Company', 'Telephone', 'Email'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.3, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read one line of your list to the class, slowly:  _The surname is ______, that\'s ______. The company is ______. The number is ______._'));
out.push(p('**Listener task:** write the number. The class checks it against the speaker\'s book.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Nour fills in the new-customer form. Read it and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — NEW CUSTOMER FORM**',
  'Company name: **Al-Noor Stationery**   ·   Contact: **Mr Fouad Tarabishi**',
  'Address: **Souq al-Hamidiyeh, Damascus**   ·   Mobile: **0944 318 260**',
  'Email: **f.tarabishi@mail.sy**   ·   Payment: **cash**',
  'Form completed by: **N. Mansour**   ·   Date: **3 March**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the company name?'));
out.push(item('2', 'How does this customer pay?'));
out.push(item('3', 'Who completed the form?'));
out.push(box('Writer\'s box', [
  '**Parts of a form:** one label, one answer, on one line. Never leave a line empty — write a dash (—) if there is nothing.',
  '**Capital letters** for company names, people\'s names and cities. **Small letters** for email addresses — always.',
  'Write numbers in the groups people say them in: _0944 318 260_, not _0944318260_.',
  'Sign the form with your initial and surname: _N. Mansour_.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Complete the form for **a customer of your company** — real or invented.'));
out.push(table(['Company name', ''], [['Contact', ''], ['Address', ''], ['Mobile', ''], ['Email', ''], ['Payment', ''], ['Form completed by', '']], [1, 2.4]));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s form. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters for names and companies; small letters for the email', ''],
  ['The telephone number in groups', ''],
  ['No empty lines (a dash where there is nothing)', ''],
  ['The form is signed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short message (35 words or more) to your manager with a new customer\'s details. Begin: _I took the details of a new customer this morning._'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **manager**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _one question, e.g. "How do they pay?"_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read one message aloud. The class listens and writes the telephone number. Then check it.'));
out.push(box('Homework', ['Write your final message. Then write the **reply** your manager would send (20+ words), e.g. _Thank you, Nour. Please add them to the customer list and send them our price list._'], C.lblue, C.navy));

// ======================= CYCLE 1.4 =======================
out.push(pb());
out.push(h2('1.4  We\'ve got a warehouse behind the building'));
out.push(p('**Function:** saying who you work for and describing your company   ·   **Grammar:** _have got_   ·   **Pronunciation:** _\'ve got_ / _\'s got_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you want to know about a new company? Make a class list of questions: _How many staff…?_'));
out.push(table(['We ASK…', 'We SAY about our company…'], [['How many staff have you got?', 'We\'ve got nineteen staff.'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Match: _head office · branch · warehouse · trade counter_ → where customers come to buy ___ · where the goods are kept ___ · the main office of a company ___ · an office in another city ___'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Nour talking to?   **A** a customer   **B** her cousin   **C** her manager'));
out.push(p('**b**  Listen again. **1** How many staff has the company got?   **2** Has it got a branch?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.7  Telling the family about the new job', [
  ['Nour', 'I started my new job today. I work for Sham Trading now.'],
  ['Nadia', 'Sham Trading — that\'s the company in Mezzeh? What have they got there?'],
  ['Nour', 'We\'ve got an office on the second floor, and we\'ve got a warehouse behind the building.'],
  ['Nadia', 'How many staff have you got?'],
  ['Nour', 'Nineteen. It\'s a small company. We haven\'t got a big head office like the banks.'],
  ['Nadia', 'Have you got a branch in another city?'],
  ['Nour', 'Yes, we have. We\'ve got a small branch in Homs — two people and a store room.'],
  ['Nadia', 'And what does the company sell?'],
  ['Nour', 'We import paper, packaging and office things, and we sell them to shops.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – have got**',
  table(['+', '–', '?'], [
    ['We\'ve got a warehouse.', 'We haven\'t got a branch.', 'Have you got a branch? – Yes, we have. / No, we haven\'t.'],
    ['She\'s got two customers in Homs.', 'He hasn\'t got an extension.', 'Has she got a company car? – Yes, she has.'],
    ['I\'ve got your number.', 'I haven\'t got his email.', 'How many staff have you got? – Nineteen.'],
  ], [1.2, 1.2, 1.8]),
  '⚠ _have got_ = _have_. Both are correct: _We\'ve got nineteen staff_ = _We have nineteen staff_. In speech, _have got_ is more common.',
  '⚠ The short answer repeats **have**, not **got**: _Yes, we **have**_, not ~~Yes, we have got~~.',
  '**Practise:** Complete with _\'ve got, \'s got, haven\'t got_ or _hasn\'t got_.',
  '1 We ___ a warehouse behind the building.  2 The branch ___ only two people.  3 I ___ his email — can you send it?  4 She ___ three customers in Aleppo.  5 ___ you ___ a price list? – Yes, I have.',
  '**Useful phrases:**  I work for…  ·  We\'ve got…  ·  How many … have you got?  ·  It\'s a small / big company.  ·  We import / sell…',
  '**Pronunciation – \'ve got / \'s got.** 🔊 **Track 1.8** Listen and repeat: _we\'ve got_ /wiːvɡɒt/ · _she\'s got_ /ʃiːzɡɒt/ · _haven\'t got_ /ˈhævntɡɒt/ · _How many staff have you got?_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about B\'s company. Use the skeleton, then the role cards. Then swap.'));
out.push(dlg(null, [
  ['A', 'Who do you work for?'],
  ['B', 'I work for __________.'],
  ['A', 'What have you got there?'],
  ['B', 'We\'ve got __________ and __________.'],
  ['A', 'How many staff have you got?'],
  ['B', '__________. It\'s a __________ company.'],
  ['A', 'Have you got a branch in another city?'],
  ['B', 'Yes, we have — in __________. / No, we haven\'t.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [['Al-Noor Stationery · a shop in Souq al-Hamidiyeh · 4 staff · no branch · sells paper and pens', 'Shamsi Packaging · Aleppo · 31 staff · a store in Latakia · makes boxes']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['Who do you work for?', 'I work for…', 'We\'ve got…', 'How many staff…?', 'We haven\'t got…', 'Yes, we have.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** classmates about their company — real or invented. Make notes.'));
out.push(table(['Company', 'Staff', 'Has got…', 'Branch?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 0.7, 2, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about one company:  _______ works for ______. They\'ve got ______ staff. They\'ve got ______, but they haven\'t got ______._'));
out.push(p('**Listener task:** write the number of staff. Then ask one question with _Have they got…?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the short company profile from the Sham Trading price list.'));
out.push(box(null, [
  '**ABOUT SHAM TRADING CO.**',
  'Sham Trading Co. is a small import and distribution company in Mezzeh, Damascus. We import paper, packaging and office supplies, and we sell them to shops and offices in Syria.',
  'We have got nineteen staff. We have got an office, a warehouse and a trade counter in Mezzeh, and a small branch in Homs. We have not got a shop — customers order by telephone or at the counter.',
  'The company started in 1998. Our customers are shops, schools and offices.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the company import?'));
out.push(item('2', 'Where is the branch?'));
out.push(item('3', 'How do customers order?'));
out.push(box('Writer\'s box', [
  '**Parts of a company profile:** what the company is and where → what it does → what it has got → when it started → who its customers are.',
  'In writing, use the **full forms**: _We have got_, _We have not got_. In speech, use _We\'ve got_, _We haven\'t got_.',
  'Write the company name in full the **first** time, then use _we_ or _the company_.',
  'Give a **number** where you can: nineteen staff, one branch, 1998. Numbers make a profile believable.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Complete the profile of **your** company — real or invented.'));
out.push(p('______________ is a ______ company in ______________. We ______________ and we sell ______________. We have got ______ staff. We have got ______________, but we have not got ______________. The company started in ______. Our customers are ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s profile. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters for the company name and the city', ''],
  ['_have got_ / _have not got_ in full forms', ''],
  ['At least two numbers', ''],
  ['All five parts: what, does, has got, started, customers', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the profile of your company for a price list (35 words or more). Add **one thing** the company is proud of.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s profile as a **possible customer**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _one question a customer would ask_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the profiles on the wall. Walk and read. Which company would you order from? Tell the class why, in one sentence.'));
out.push(box('Homework', ['Write your final profile. Then write a short **enquiry** to your partner\'s company (20+ words), e.g. _We are a school in Homs. Have you got a branch near us?_'], C.lblue, C.navy));

// ======================= CYCLE 1.5 =======================
out.push(pb());
out.push(h2('1.5  I look after the orders'));
out.push(p('**Function:** saying what you do in your job   ·   **Grammar:** verb + -ing (_I like doing… / My job is doing…_)   ·   **Pronunciation:** -ing endings'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do people do at work all day? Make a class list of verbs: _answer, check, …_'));
out.push(table(['We SAY about a job…', 'We WRITE in a job advertisement…'], [['I look after the orders.', 'Duties: checking orders'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Match the person and the work: _accountant · assistant · supervisor · salesperson_ → visiting customers ___ · checking the stock ___ · paying the invoices ___ · answering the telephone ___'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where are they?   **A** in the office   **B** in the warehouse   **C** at the trade counter'));
out.push(p('**b**  Listen again. **1** What does Abu Yasser do first every morning?   **2** What does he not like doing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.9  In the warehouse with Abu Yasser', [
  ['Abu Yasser', 'So, this is the warehouse. Come in, come in.'],
  ['Nour', 'It\'s bigger than I thought. What do you do here all day?'],
  ['Abu Yasser', 'I look after the stock. First thing every morning, I count what came in yesterday.'],
  ['Nour', 'And then?'],
  ['Abu Yasser', 'Then I check the orders for today. I like checking the orders — it\'s quiet in the morning.'],
  ['Nour', 'Do you like working here?'],
  ['Abu Yasser', 'Thirty years, my daughter. I love working with the boxes and the lorries. I don\'t like writing reports.'],
  ['Nour', 'Nobody likes writing reports.'],
  ['Abu Yasser', 'You\'re right. One rule here: check it twice. Count it, write it, then count it again.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – verb + -ing**',
  table(['After these verbs…', 'Example'], [
    ['love / like / don\'t mind / don\'t like / hate', 'I **like checking** the orders. I **don\'t like writing** reports.'],
    ['My job is…', 'My job is **answering** the telephone and **checking** the post.'],
    ['Duties: (in writing)', 'Duties: **taking** orders, **filing** invoices, **helping** at the counter.'],
    ['good at / responsible for', 'She\'s good at **working** with numbers.'],
  ], [1.4, 2.4]),
  '⚠ Spelling: _check → checking_ · _write → writing_ (drop the -e) · _put → putting_ (double the last letter).',
  '⚠ Say _I like **checking**_, not ~~I like check~~. After _like, love, hate_ we use the -ing form.',
  '**Practise:** Put the verb in the right form.',
  '1 I like ___ (answer) the telephone.  2 He doesn\'t like ___ (write) reports.  3 My job is ___ (check) the stock.  4 She\'s good at ___ (work) with customers.  5 Duties: ___ (take) orders and ___ (help) at the counter.',
  '**Useful phrases:**  I look after…  ·  First thing every morning, I…  ·  My job is…  ·  I like / don\'t like…  ·  What do you do here?',
  '**Pronunciation – -ing.** 🔊 **Track 1.10** Listen and repeat. The ending is /ɪŋ/, not /ɪn/: _checking_ · _writing_ · _working_ · _answering_ · _I like checking the orders._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about B\'s job. Use the skeleton, then the role cards. Then swap.'));
out.push(dlg(null, [
  ['A', 'What do you do here?'],
  ['B', 'I look after __________.'],
  ['A', 'What do you do first every morning?'],
  ['B', 'First thing, I __________.'],
  ['A', 'Do you like working here?'],
  ['B', 'Yes. I like __________. But I don\'t like __________.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [['Nadia · accounts · invoices and payments · likes working with numbers · doesn\'t like telephoning late payers', 'Bassel · sales · customers in Homs and Aleppo · likes travelling · doesn\'t like writing the weekly report']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['What do you do here?', 'I look after…', 'First thing, I…', 'I like …-ing', 'I don\'t like …-ing', 'Do you like working here?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** classmates about their job. Use your real job, or invent one. Make notes.'));
out.push(table(['Name', 'Looks after', 'Likes', 'Doesn\'t like'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.3, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about one person:  _______ looks after ______. He / She likes ______-ing, but he / she doesn\'t like ______-ing._'));
out.push(p('**Listener task:** write one thing the person likes. Then ask: _Why don\'t you like …?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the duties list Mr Ayoub wrote for Nour\'s first week.'));
out.push(box(null, [
  '**ASSISTANT — DUTIES (first week)**',
  'Every morning: opening the post, checking the email, answering the telephone.',
  'Every day: taking orders at the counter, writing them in the order book, giving them to Abu Yasser.',
  'Every Thursday: filing the invoices, helping Nadia with the weekly figures.',
  'When Mr Ayoub is out: taking messages and writing them on his desk pad.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does Nour do every morning?'));
out.push(item('2', 'Who gets the orders after Nour writes them?'));
out.push(item('3', 'What does she do on Thursdays?'));
out.push(box('Writer\'s box', [
  '**Parts of a duties list:** when → what, with the **-ing** form: _Every morning: opening the post…_',
  'Group the duties by **time** (every morning, every day, every Thursday), not by importance. A reader wants to know when.',
  'Use a colon (:) after the time, and commas between the duties.',
  'Keep every line in the **same** shape. A list that changes shape is hard to follow.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the duties list for **your** job — real or invented.'));
out.push(p('Every morning: ______________.   Every day: ______________.   Every week: ______________.   When my manager is out: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s list. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every duty in the **-ing** form', ''],
  ['A colon after the time, commas between the duties', ''],
  ['Every line in the same shape', ''],
  ['All four lines complete', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short paragraph about your job (35 words or more). Say what you look after, what you do first every morning, and one thing you like and one thing you don\'t like doing.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s paragraph as a **new colleague**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _one question about the job_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read one paragraph aloud. The class guesses the job before the writer says it.'));
out.push(box('Homework', ['Write your final paragraph. Then write a **reply** to your partner (20+ words), e.g. _I don\'t like writing reports either. I do mine on Thursday afternoon, when the office is quiet._'], C.lblue, C.navy));

// ======================= CYCLE 1.6 =======================
out.push(pb());
out.push(h2('1.6  Sorry — could you repeat that?'));
out.push(p('**Function:** asking somebody to repeat, spell or explain   ·   **Grammar:** imperatives and _Can you…? / Could you…?_   ·   **Pronunciation:** polite intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When is it hard to understand somebody at work? Make a class list: _on the telephone, …_'));
out.push(table(['The problem', 'What we say'], [['The line is bad.', 'Sorry, could you repeat that?'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Which is more polite? _Repeat that._ / _Can you repeat that?_ / _Could you repeat that, please?_ Put them in order, 1 (least polite) to 3.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** the line is bad   **B** Nour is busy   **C** the order is wrong'));
out.push(p('**b**  Listen again. **1** What is the order number?   **2** How many boxes does Ms Shamsi send?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.11  A bad line from Aleppo', [
  ['Ms Shamsi', 'Hello, Sham Trading? This is Dima Shamsi, from Aleppo.'],
  ['Nour', 'Good morning, Ms Shamsi. Sorry — the line isn\'t very good. Could you speak a little louder, please?'],
  ['Ms Shamsi', 'Of course. Is that better? I\'m calling about order four-oh-eight-seven.'],
  ['Nour', 'Sorry, could you repeat the number, please?'],
  ['Ms Shamsi', 'Four, zero, eight, seven.'],
  ['Nour', 'Four zero eight seven. Thank you. Go ahead.'],
  ['Ms Shamsi', 'We\'re sending forty boxes on Tuesday, not thirty.'],
  ['Nour', 'Sorry — forty or fourteen?'],
  ['Ms Shamsi', 'Forty. Four-zero.'],
  ['Nour', 'Forty boxes, Tuesday. Let me write that down. Thank you, Ms Shamsi.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – imperatives and Can you…? / Could you…?**',
  table(['Form', 'When we use it', 'Example'], [
    ['Imperative (no subject)', 'instructions, signs, a list of steps', '**Check** it twice. **Write** it in the order book.'],
    ['Can you…?', 'a normal request to a colleague', '**Can you** send me the price list?'],
    ['Could you…?, please', 'a polite request — a customer, a manager, a stranger', '**Could you** repeat that, **please**?'],
    ['Negative imperative', 'a rule or a warning', '**Don\'t** send it before Mr Ayoub signs it.'],
  ], [1.2, 1.6, 2]),
  '⚠ After _Can you_ / _Could you_, use the **base verb**: _Could you **repeat** that?_ not ~~Could you to repeat~~.',
  '**Asking for help — four things you can ask for:**  _Could you **repeat** that?_ · _Could you **spell** that?_ · _Could you **speak more slowly**?_ · _What does … **mean**?_',
  '**Practise:** Make the request polite.',
  '1 Repeat that. → ______  2 Spell your surname. → ______  3 Speak more slowly. → ______  4 Send the invoice today. → ______  5 Explain this word. → ______',
  '**Useful phrases:**  Sorry, could you…?  ·  Is that better?  ·  Go ahead.  ·  Let me write that down.  ·  Forty or fourteen?',
  '**Pronunciation – polite intonation.** 🔊 **Track 1.12** Listen. The voice goes **up** at the end of a polite request: _Could you repeat that, please?_ ↗  A flat voice sounds impatient. Repeat the five requests with a rising voice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, sitting back to back. A reads a card quietly and quickly. B asks for help until B has it right.'));
out.push(dlg(null, [
  ['A', '(reads quietly) Order number __________, __________ boxes, __________ day.'],
  ['B', 'Sorry, could you __________, please?'],
  ['A', '(repeats) __________'],
  ['B', 'Sorry — __________ or __________?'],
  ['A', '__________.'],
  ['B', 'Let me write that down. __________. Thank you.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Order 3015 · 15 boxes · Wednesday · Mr Tarabishi', 'Order 4090 · 50 boxes · Thursday · Ms Shamsi']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**, back to back.'));
out.push(p('**Listener task:** write the order number and the number of boxes. Then check.'));
out.push(PHRASE_CARD(['Sorry, could you repeat…?', 'Could you spell…?', 'More slowly, please.', 'Is that better?', 'Forty or fourteen?', 'Let me write that down.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Work in pairs. A dictates three real details from this book (a name, a number, an email). B writes them. B must ask for help at least **twice**. Then swap.'));
out.push(table(['What A said', 'What B wrote', 'Right?'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.4, 0.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My partner said ______. I asked him / her to ______. Then I understood._'));
out.push(p('**Listener task:** write down which request was used most in the class: _repeat_, _spell_ or _speak more slowly_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the telephone message Nour left on Mr Ayoub\'s desk.'));
out.push(box(null, [
  '**TELEPHONE MESSAGE**',
  'For: **Mr Ayoub**   ·   Date: **5 March**   ·   Time: **10.15**',
  'From: **Ms Dima Shamsi** (Shamsi Packaging, Aleppo)   ·   Tel: **0955 612 043**',
  'Message: **Order 4087 — forty boxes, not thirty. They are sending them on Tuesday.**',
  'Action: **Please call her before Monday.**',
  'Taken by: **N. Mansour**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who is the message for?'));
out.push(item('2', 'What is the change to the order?'));
out.push(item('3', 'What must Mr Ayoub do, and when?'));
out.push(box('Writer\'s box', [
  '**Parts of a telephone message:** for → date and time → from (and company) → telephone number → the message → the action → who took it.',
  'Write the **number** every time, even if you think the reader has it. The reader may be in another office.',
  'Put the **change** in the message, not the whole conversation: _forty boxes, not thirty_.',
  '⚠ The **action** line is the one people forget. Without it, a message is only news.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Your manager is out. Take this message: _Hadi Barakat from Latakia called at 11.40. His number is 0933 427 815. He wants the price list for packaging. He needs it this week._'));
out.push(table(['For', ''], [['Date / Time', ''], ['From', ''], ['Tel', ''], ['Message', ''], ['Action', ''], ['Taken by', '']], [1, 2.4]));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s message. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters for names and companies', ''],
  ['The telephone number, written in groups', ''],
  ['The message says **what changed** or **what is wanted**', ''],
  ['There is an **action** line, and the message is signed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their **action** line. The class says whether it is clear enough to act on.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a telephone message for a colleague (35 words or more) about a real or invented call. Include a number, a change and an action.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **colleague who was out**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _one question you still have_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read one message aloud. The class listens with books closed and writes the **action**. Then check.'));
out.push(box('Homework', ['Write your final message. Then write the **reply** the colleague would send (20+ words), e.g. _Thank you. I called Ms Shamsi — forty boxes is fine. Please change the order book._'], C.lblue, C.navy));

// ======================= CYCLE 1.7 =======================
out.push(pb());
out.push(h2('1.7  Review & Mediate: what does the notice say?'));
out.push(p('**Function:** telling a colleague, in simple words, what a written notice says   ·   **Review:** _be_ · possessives · Wh- questions · _have got_ · verb + -ing · requests'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Two ways to greet somebody on their first morning at work.',
  '**2** The question that asks about the letters of a name.',
  '**3** _We ______ got nineteen staff._ — positive and negative.',
  '**4** Two things you can ask for when you cannot understand on the telephone.',
  '**5** The seven parts of a telephone message.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is on the notice?   **A** a holiday   **B** a new delivery day   **C** a new manager'));
out.push(p('**b**  Listen again. **1** Who cannot read the notice easily?   **2** What is the new day for deliveries from Aleppo?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.13  At the notice board', [
  ['Abu Yasser', 'Nour, there\'s a new paper on the board. My English is from nineteen eighty-five. What does it say?'],
  ['Nour', 'It\'s from Mr Ayoub. It\'s about the deliveries from Aleppo.'],
  ['Abu Yasser', 'Good news or bad news?'],
  ['Nour', 'Not bad. It says the Aleppo lorry comes on Tuesday now, not on Monday.'],
  ['Abu Yasser', 'Tuesday. From which week?'],
  ['Nour', 'From next week. And it says we have to count the boxes at the gate, not in the store.'],
  ['Abu Yasser', 'At the gate. That\'s better — I asked for that in the winter. Anything else?'],
  ['Nour', 'One more thing. It says: any problem, call extension 201 the same day.'],
  ['Abu Yasser', 'Two-oh-one. Good. Thank you, my daughter. Now I know what my own board says.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – saying what a text says, in your own words**',
  table(['To start', 'To give the content', 'To finish'], [
    ['It\'s from…  ·  It\'s about…', 'It says (that)…  ·  It says we have to…', 'Anything else? – No, that\'s all.'],
    ['It\'s a notice about…', 'The new day is…  ·  The number is…', 'One more thing:…'],
  ], [1.3, 2, 1.2]),
  '⚠ When you mediate, you **do not read the words aloud**. You say the same thing in **easier** English. Leave out what the listener does not need.',
  '⚠ Say _It **says**…_ — the notice is doing the saying, not you.',
  '**Practise:** The notice says: _Staff are reminded that the trade counter closes at 4 pm on Thursdays._ Say it in easy English, in one sentence, for a colleague.',
  '**Useful phrases:**  It\'s from…  ·  It\'s about…  ·  It says…  ·  From next week…  ·  One more thing…  ·  Anything else?',
  '**Pronunciation – the important word.** 🔊 **Track 1.14** Listen. When you mediate, make the **new** information loud: _The lorry comes on **TUESDAY** now._ Repeat the four sentences, making the new word loud.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the notice silently. B closes the book. A tells B what it says, in easy English. Then swap with the second notice.'));
out.push(table(['Notice 1 — for A', 'Notice 2 — for B'], [[
  '**STAFF NOTICE.** With effect from 1 April, the trade counter will open at 8.30 am and close at 4 pm on Thursdays. Staff requiring access outside these hours should contact the office manager in advance.',
  '**STAFF NOTICE.** The staff car park will be closed on Saturday for repairs. Vehicles may be left in the side street. The warehouse entrance will remain open as usual.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their notice for the class – **without the book**.'));
out.push(p('**Listener task:** write the **one** thing you would have to do differently next week.'));
out.push(PHRASE_CARD(['It\'s from…', 'It\'s about…', 'It says…', 'From next week…', 'One more thing…', 'That\'s all.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a short notice in formal English. Read it silently. Then tell **two** colleagues what it says. Do not show them the paper.'));
out.push(table(['Who I told', 'What they must do', 'Did they understand?'], [['', '', ''], ['', '', '']], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the notice you mediated. This is the **first** unit of this book, and the mediation task comes back in every unit — so listen to how other people did it.'));
out.push(p('_It\'s from ______. It\'s about ______. It says ______. The important thing for us is ______._'));
out.push(p('**Listener task:** write the one action. Then say whether the speaker **explained** or only **read aloud**.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Trade counter closed 1–2 pm for lunch._   **A** The counter opens at 1. **B** The counter is shut for one hour. **C** Lunch is free.',
  '**2**  _Nour — Ms Shamsi rang. Call her before 3. — N._   **A** Ms Shamsi will call again. **B** Nour must telephone Ms Shamsi this afternoon. **C** Ms Shamsi is coming at 3.',
  '**3**  _Please count all boxes AT THE GATE._   **A** Count the boxes in the store. **B** Do not count the boxes. **C** Count the boxes when they arrive.',
  '**4**  _Invoices to Nadia by Thursday, please._   **A** Nadia sends the invoices. **B** Give Nadia the invoices before Friday. **C** The invoices come on Thursday.',
  '**5**  _Staff car park closed Saturday — use side street._   **A** Do not bring a car on Saturday. **B** Park in a different place on Saturday. **C** The side street is closed.',
  '**6**  _New extension list on the board. Please check yours._   **A** Look at the board for your number. **B** The board is new. **C** Telephone the board.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. You must include **all three**, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'Twenty-five words is **short**. Do not explain; just say the three things.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to your colleague Abu Yasser. Say: **(1)** the Aleppo lorry comes on Tuesday now, **(2)** the boxes must be counted at the gate, **(3)** he should call extension 201 if there is a problem. Use the frame.'));
out.push(p('Dear Abu Yasser, ______________. Also, ______________. If ______________, please ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  The lorry comes on Tuesday', ''], ['2  Count the boxes at the gate', ''], ['3  Call extension 201 if there is a problem', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('A new colleague starts on Monday. Write a message to him or her (25 words or more). Say: **(1)** who you are and what you do, **(2)** where his or her desk is, **(3)** one thing to bring on the first day.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your new colleague would send (20+ words), e.g. _Thank you, Nour. I\'ll bring my identity card. Is the office on the second floor?_'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I ___ the new assistant.   a) am   b) is   c) are',
  '2  That\'s Bassel\'s desk. Ask ___ about the Homs order.   a) he   b) him   c) his',
  '3  ___ do you spell your surname?   a) What   b) Who   c) How',
  '4  We ___ got a branch in Homs.   a) have   b) has   c) having',
  '5  I don\'t like ___ reports.   a) write   b) writing   c) to writing',
  '6  ___ you repeat that, please?   a) Could   b) Do   c) Are',
  '7  Nadia is our ___. She looks after the invoices.   a) supervisor   b) accountant   c) driver',
  '8  The warehouse is ___ the building.   a) behind   b) between   c) under',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 1.15** Listen to a call at the trade counter. Complete the note.   Company: ______   Contact: ______   Tel: ______   Wants: ______'));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['Nour', 'Sham Trading, good morning. Nour speaking.'],
  ['Caller', 'Good morning. This is Rasha Hamdan, from Hamdan Printing in Jaramana.'],
  ['Nour', 'Good morning. How do you spell Hamdan, please?'],
  ['Caller', 'H-A-M-D-A-N. My number is 0988 450 176.'],
  ['Nour', 'Thank you. And how can I help?'],
  ['Caller', 'I\'d like your price list for paper, please.'],
]));
out.push(p('**C  Writing.** Write a short message to a new colleague (25+ words). Say who you are, what you look after, and your extension number.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 1)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ greet people at work and say who I am',
  '☐ introduce a colleague to somebody else',
  '☐ give and take details on the telephone, and spell them',
  '☐ say who I work for and describe my company',
  '☐ say what I do in my job, and what I like and don\'t like doing',
  '☐ ask somebody to repeat, spell, explain or speak more slowly',
  '☐ tell a colleague in easy English what a notice says',
  '☐ write a first-day message, a staff list, a form, a company profile, a duties list and a telephone message',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
