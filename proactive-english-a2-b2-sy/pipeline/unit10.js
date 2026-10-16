// Proactive English A2 · Syria Edition · Book 1 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 10  Health'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**10.1**  say how you feel and describe symptoms',
  '**10.2**  give and ask for advice',
  '**10.3**  make an appointment',
  '**10.4**  read and explain the instructions on a medicine box',
  '**10.5**  talk about healthy habits',
  '**10.6**  say you\'re sorry someone is ill, and wish them well',
  '**10.7**  Review & Mediate: explain a medicine label to a relative',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Important', [
  'In this unit you learn the **English words** people use about health: how to describe how you feel, how to book an appointment, and how to read the instructions on a box.',
  'Your **doctor and your pharmacist** decide about medicine – not this book and not your classmates! When our characters have a real problem, they always ask a professional. Do the same.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('New in this unit', [
  '**Dr Samar Khalil** – a doctor at Al-Noor Clinic, Mezzeh.   ·   **Al-Shifa Pharmacy** – Maya\'s pharmacy (Unit 2).',
], C.lyellow, C.orange));

// ======================= 10.1 =======================
out.push(pb());
out.push(h2('10.1  I\'ve got a sore throat'));
out.push(p('**Function:** describing symptoms   ·   **Grammar:** _have got_ + illness; _My … hurts_   ·   **Pronunciation:** /ɜː/ _hurt, worse, nurse_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many parts of the body can you name in English in two minutes? Your teacher writes them on the board.'));
out.push(board('I\'ve got a headache.', 'I can\'t come to work today.'));
out.push(p('**b**  Match: _head · throat · stomach · back · tooth_  →  You eat with it. · You think with it. · You sit on a chair and it hurts. · You speak with it. · You feel it after a big meal.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Rami?   **A** at the doctor\'s   **B** at the pharmacy   **C** at home'));
out.push(p('**b**  Listen again. **1** How long has he had the problem?   **2** What does Maya tell him to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.1  At Al-Shifa Pharmacy', [
  ['Maya', 'Rami! You don\'t look well. What\'s the matter?'],
  ['Rami', 'I\'ve got a terrible sore throat. And my head hurts.'],
  ['Maya', 'Oh dear. How long have you had it?'],
  ['Rami', 'Since Sunday. Three days.'],
  ['Maya', 'Have you got a temperature?'],
  ['Rami', 'I don\'t know. I feel hot, then cold.'],
  ['Maya', 'Hmm. Are you coughing?'],
  ['Rami', 'A little, at night. And I\'m very tired – I slept twelve hours yesterday.'],
  ['Maya', 'Rami, listen to me as a pharmacist, not as a friend. Three days with a temperature isn\'t a simple cold. You should see a doctor today.'],
  ['Rami', 'It\'s just a cold, Maya. I\'ve got a lot of work…'],
  ['Maya', 'Dr Samar at Al-Noor Clinic is open until six. Go, please. If it\'s nothing, you\'ll be happy. If it isn\'t, you\'ll be happier.'],
  ['Rami', '(laughs) OK, OK. I\'m going.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – talking about how you feel**',
  table(['have got + a / an', 'My … hurts', 'I feel + adjective'], [
    ['I\'ve got **a** headache / **a** sore throat / **a** cold / **a** temperature / **a** cough / **a** stomach ache / toothache (no _a_).',
     'My head **hurts**. · My back **hurts**. · My feet **hurt**. (plural – no -s!)',
     'I feel **tired / hot / cold / dizzy / sick** (= I want to vomit). · I don\'t feel **well**.'],
  ], [1.3, 1, 1.2]),
  '⚠ _I feel **well**_ (an adjective after _feel_), not ~~I feel good~~ for health.  ⚠ _My head **hurts**_, not ~~My head is hurt~~ or ~~I have pain in my head~~ (possible, but not natural).',
  '**Asking:** What\'s the matter? · How do you feel? · Have you got a temperature? · How long have you had it? – **Since** Sunday. / **For** three days.',
  '**Parts of the body:** head · eye · ear · nose · mouth · tooth (teeth) · throat · neck · shoulder · arm · hand · finger · back · stomach · leg · knee · foot (feet)',
  '**Practise:** Complete.  1 I\'ve got ______ sore throat.  2 My legs ______ (hurt) after the match.  3 She\'s got ______ toothache.  4 I don\'t feel ______.  5 How long ______ you had it? – ______ Monday.',
  '**Useful phrases:** You don\'t look well. · Oh dear. · I feel hot, then cold. · Listen to me as a pharmacist, not as a friend. · It\'s just a cold.',
  '**Pronunciation.** 🔊 **Track 10.2** /ɜː/ – a long sound: _hurt · worse · nurse · first · Thursday · heard_. Listen and repeat: _My back hurts and it\'s getting worse._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A doesn\'t feel well, B asks questions. **B always ends by sending A to a doctor or pharmacist.** Then swap.'));
out.push(dlg(null, [
  ['B', 'You don\'t look well. What\'s the matter?'],
  ['A', 'I\'ve got __________. And my __________ hurts.'],
  ['B', 'Oh dear. How long have you had it?'],
  ['A', 'Since __________.'],
  ['B', 'Have you got __________?'],
  ['A', '__________.'],
  ['B', 'I think you should __________.'],
  ['A', 'OK, I\'m going.'],
]));
out.push(table(['Symptom card A', 'Symptom card B'], [['bad stomach ache · since yesterday evening · can\'t eat · feels dizzy', 'toothache · for a week · worse at night · the side of the face is swollen']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the symptoms and how long. Was the advice good?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a time when you **weren\'t well** (a cold, a bad back, a headache after a long day – nothing private you don\'t want to share). Tell your partner: what was the matter, how long it lasted, what you did.'));
out.push(p('**b**  Now your partner describes symptoms and you ask **four** questions. Change partners and repeat.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner:  _Last winter Fadi had a bad cough for two weeks. He didn\'t sleep well and he felt tired all day. In the end he went to a doctor, and after that he was fine._'));
out.push(p('**Listener task:** who waited the longest before they asked for help?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two messages. Answer the questions.'));
out.push(model([
  '**1 · Rami → Mr Fouad (his manager)**',
  'Dear Mr Fouad,',
  'I\'m sorry, but I can\'t come to work today. I\'ve had a sore throat and a temperature since Sunday, and this morning I feel worse. I\'m going to see a doctor at eleven.',
  'The two laptops for Medica Trading are finished and they\'re on the shelf with the notes. Nour knows about the printer at the school; she can finish it today.',
  'I\'ll call you after the doctor and tell you about tomorrow.',
  'Sorry again,',
  'Rami',
  '**2 · Rami → Omar**',
  'Omar – I\'m not coming in today, I feel terrible 🤒 Sore throat since Sunday + temperature. Maya shouted at me until I agreed to see a doctor! Can you tell Nour the printer parts are in the blue box? Thanks – and don\'t come near me this week 😷',
]));
out.push(item('1', 'Who is the first message for? Who is the second for?'));
out.push(item('2', 'Which message is more formal? Give two examples.'));
out.push(item('3', 'What does Rami organise in both messages?'));
out.push(writers([
  'A message to say you\'re ill: **sorry + you can\'t come** → **what\'s wrong** (short! nobody needs the details) → **what you\'re doing about it** → **your work** (what is finished, who can help) → **when you\'ll be in touch**.',
  '**Formal** (manager): _Dear Mr…, I\'m sorry, but I can\'t… I\'ll call you…_   **Informal** (a friend): short sentences, emojis, jokes.',
  'The most important part is the **work section**. A good "I\'m ill" message makes your colleague\'s day easier, not harder.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______________,   I\'m sorry, but I can\'t come to ______________ today. I\'ve had ______________ since ______________, and this morning ______________. I\'m going to ______________.   ______________ is / are finished and ______________. ______________ knows about ______________.   I\'ll ______________.   Sorry again,   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_I\'ve got / I\'ve had … since / for_', 'The work section: what\'s finished, who can help', 'All parts: sorry, what\'s wrong, what you\'re doing, work, contact']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **two** messages for the same day (60 words or more in total): one **formal** to your manager, teacher or client, and one **informal** to a colleague or friend. You can\'t come today.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s formal message as the **manager**. ★ _Thank you for organising everything._  ✓ _Can you add who has the keys?_  ? _Do you need more days?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two pairs of messages are read aloud. What is different between the formal and the informal one?'));
out.push(hw('Write the **manager\'s reply** (25+ words): say get well, answer one question, and tell them not to worry about the work.'));

// ======================= 10.2 =======================
out.push(pb());
out.push(h2('10.2  You should drink more water'));
out.push(p('**Function:** giving and asking for advice   ·   **Grammar:** _should / shouldn\'t_; _Why don\'t you…?_   ·   **Pronunciation:** _should_ /ʃʊd/ – silent l'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What advice do people in your family give when someone is ill? (tea with lemon, soup, rest, go to the doctor…) Make a class list – the funny ones too!'));
out.push(board('You should drink more water.', 'Why don\'t you take a day off?'));
out.push(p('**b**  Good advice or bad advice? _You should sleep more. · You shouldn\'t go to the doctor – it\'s expensive. · You should drink water. · You shouldn\'t sit at the computer for six hours._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Hiba\'s problem?   **A** she can\'t sleep   **B** her back hurts   **C** she has a cold'));
out.push(p('**b**  Listen again. **1** Why does her back hurt?   **2** What does Rasha say about the doctor?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.3  In the centre café', [
  ['Hiba', 'Ouch.'],
  ['Rasha', 'What\'s wrong?'],
  ['Hiba', 'My back. I sit at the computer from eight until four and then I study in the evening.'],
  ['Rasha', 'That\'s ten hours on a chair! You should stand up every hour.'],
  ['Hiba', 'I forget.'],
  ['Rasha', 'Then why don\'t you put an alarm on your phone? Every hour: stand up, walk, drink some water.'],
  ['Hiba', 'That\'s a good idea, actually.'],
  ['Rasha', 'And you shouldn\'t study on your bed. My sister did that for a year and her back was terrible.'],
  ['Hiba', 'But my desk is full of boxes!'],
  ['Rasha', 'Then that\'s your homework this weekend: empty the desk. 😀'],
  ['Hiba', 'Ha! OK. And if it doesn\'t get better?'],
  ['Rasha', 'Then you should see a doctor. Don\'t wait a month like my sister – she needed six weeks of exercises in the end.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – giving advice**',
  table(['should / shouldn\'t + base verb', 'Why don\'t you + base verb?', 'Other ways'], [
    ['You **should stand up** every hour. · You **shouldn\'t study** on your bed.',
     '**Why don\'t you put** an alarm on your phone? (a friendly suggestion)',
     'It\'s a good idea to… · Have you tried …-ing? · If I were you, I\'d… _(learn as a phrase)_'],
  ], [1.3, 1.2, 1.2]),
  '**should** + **base verb**, no _to_ and no -s: _She **should rest**_, not ~~She should to rest~~ or ~~She shoulds~~.',
  '**Asking for advice:** What should I do? · Do you think I should see a doctor? · What do you think?',
  '⚠ **should** is **advice**, not an order: _You **should** rest._ (a friend)  /  _You **must** rest._ (the doctor!)',
  '**Practise:** Give advice with _should_ or _shouldn\'t_.  1 I\'m always tired. → ______  2 I\'ve got a sore throat. → ______  3 I can\'t sleep at night. → ______  4 My eyes hurt after work. → ______  5 I drink six coffees a day. → ______',
  '**Useful phrases:** What\'s wrong? · Ouch! · That\'s a good idea, actually. · And if it doesn\'t get better? · Don\'t wait a month.',
  '**Pronunciation.** 🔊 **Track 10.4** _should_ /ʃʊd/ – the **l is silent**! _shouldn\'t_ /ˈʃʊdnt/. Listen and repeat: _You should rest. You shouldn\'t work so much._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the problem on the card, B gives **three** pieces of advice – using a different form each time. Then swap.'));
out.push(dlg(null, [
  ['B', 'What\'s wrong?'],
  ['A', '__________. __________.'],
  ['B', 'You should __________.'],
  ['A', '__________.'],
  ['B', 'Then why don\'t you __________? And you shouldn\'t __________.'],
  ['A', 'That\'s a good idea, actually.'],
  ['B', 'And if it doesn\'t get better, you should __________.'],
]));
out.push(table(['Problem card A', 'Problem card B'], [[
  'You\'re always tired. You sleep five hours, drink a lot of coffee and look at your phone in bed.',
  'Your eyes hurt every evening. You work on a computer all day and the light in your office is bad.']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three pieces of advice. Which one would **you** follow?'));
out.push(stage('4', 'Your turn – the advice circle', 9));
out.push(p('**a**  Write **one real problem** on a piece of paper – something everyday: I\'m always late, I can\'t stop looking at my phone, I never have time to exercise, I eat too fast, I don\'t sleep enough. (No private health problems!)'));
out.push(p('**b**  Give your paper to the person on your right. Read their problem and write **one** piece of advice. Pass again. After four papers, give them back. Read all the advice you got – which is the best?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My problem was "I never have time to exercise". Fadi said I should walk to work. Hiba said I shouldn\'t take the service for short journeys. Rasha asked why I don\'t exercise with my children. I think Rasha\'s advice is the best – my children have a lot of energy!_'));
out.push(p('**Listener task:** which piece of advice is the most practical?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the problem and the answer from a magazine page. Answer the questions.'));
out.push(model([
  '**ASK OUR READERS**',
  '**The problem:** "I work in an office from eight until five. When I come home I\'m so tired that I just eat and watch my phone until midnight. Then I sleep badly and the next day is the same. I\'m thirty-one and I feel sixty. How can I change this?" – T., Damascus',
  '**One reader answers:**',
  'Dear T.,',
  'I had exactly the same problem two years ago, so I understand you.',
  'First, you should change one small thing, not everything. I started with a walk: twenty minutes after dinner, every day. It isn\'t a lot, but it was the beginning.',
  'Second, you shouldn\'t take your phone to bed. Put it in the kitchen. The first week is difficult and after that you sleep like a child.',
  'Why don\'t you also ask a friend to walk with you? It\'s easier with somebody, and you can talk about your day.',
  'If you still feel tired after a month, you should see a doctor – sometimes being tired is not about habits.',
  'Good luck! It gets better. – R., Homs',
]));
out.push(item('1', 'What does the reader say about changing things?'));
out.push(item('2', 'Where should T. put his phone?'));
out.push(item('3', 'What should T. do if nothing changes after a month?'));
out.push(writers([
  'An advice letter: _Dear…,_ → **show you understand** (_I had the same problem…_) → **advice 1** (First, you should…) → **advice 2** (Second, you shouldn\'t…) → **a friendly suggestion** (Why don\'t you…?) → **when to get real help** → **a short, warm ending**.',
  'Order your advice: **First… Second… And…**',
  'Good advice is **small and possible**: _twenty minutes after dinner_, not "change your whole life".',
  'Always end with **when to see a professional** – a friend\'s advice has limits.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______,   I had ______________, so I understand you.   First, you should ______________. ______________.   Second, you shouldn\'t ______________. ______________.   Why don\'t you ______________?   If ______________ after ______________, you should ______________.   Good luck! ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_should / shouldn\'t_ + base verb', 'Advice in order: First… Second… Why don\'t you…?', 'An ending that says when to get real help']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one piece of advice before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Choose a real everyday problem (yours, a classmate\'s from Stage 4, or an invented one) and write an advice letter (60 words or more) with **three** pieces of advice.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as the **person with the problem**. ★ _I\'m going to try this!_  ✓ _Can you add how you started?_  ? _What if I can\'t…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two letters are read aloud. Which advice would the class really follow?'));
out.push(hw('Write the **thank-you reply** from the person with the problem (25+ words): say which advice you will try first and why.'));

// ======================= 10.3 =======================
out.push(pb());
out.push(h2('10.3  I\'d like to make an appointment'));
out.push(p('**Function:** making an appointment   ·   **Grammar:** _I\'d like to…_; dates and times (recycle)   ·   **Pronunciation:** dates and times on the phone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What appointments do people make? (doctor, dentist, hairdresser, garage, bank, visa office…) What do you say when you phone?'));
out.push(board('I\'d like to make an appointment.', 'Tuesday 28th, 10.30 – Dr Samar'));
out.push(p('**b**  Put in order: _Is Tuesday at ten OK? · Good morning, Al-Noor Clinic. · I\'d like to make an appointment, please. · Perfect, thank you. · Can I take your name?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When is Rami\'s appointment?   **A** today at 11   **B** tomorrow at 11   **C** Tuesday at 11'));
out.push(p('**b**  Listen again. **1** Why can\'t he come at 9.30?   **2** What must he bring?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.5  Phoning Al-Noor Clinic', [
  ['Receptionist', 'Good morning, Al-Noor Clinic.'],
  ['Rami', 'Good morning. I\'d like to make an appointment with Dr Samar, please.'],
  ['Receptionist', 'Of course. Is it urgent?'],
  ['Rami', 'I\'ve had a sore throat and a temperature since Sunday.'],
  ['Receptionist', 'Then let\'s find something today. We have half past nine or eleven o\'clock.'],
  ['Rami', 'I can\'t come at half past nine – I\'m at a site in Kafr Sousa. Eleven is good.'],
  ['Receptionist', 'Eleven o\'clock, then. Can I take your name?'],
  ['Rami', 'Rami Khoury. K-H-O-U-R-Y.'],
  ['Receptionist', 'Thank you. And your phone number?'],
  ['Rami', '0988 204 517.'],
  ['Receptionist', 'Perfect. Please bring your ID card, and come ten minutes early – you have to fill in a form the first time.'],
  ['Rami', 'OK. How much is the visit?'],
  ['Receptionist', 'Sixty thousand for the first visit. We take cash only, I\'m afraid.'],
  ['Rami', 'That\'s fine. Thank you very much.'],
  ['Receptionist', 'See you at eleven, Mr Khoury. Get well soon.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making an appointment**',
  table(['You', 'The receptionist'], [
    ['I\'d like to **make an appointment** with…, please. · Is it possible **to come** today? · Can I come **on Tuesday**? · **How much is** the visit? · Is Tuesday **at ten** OK?',
     'Is it urgent? · We have 9.30 **or** 11 o\'clock. · Can I take your name? · Could you spell that? · Please **bring** your ID. · Come ten minutes **early**. · Get well soon.'],
  ], [1.3, 1.3]),
  '**I\'d like to** + base verb (polite – Unit 4): _I\'d like **to make** an appointment._',
  '**Changing or cancelling:** _I\'d like to **change** my appointment. · I\'m afraid I **can\'t come** on Tuesday. · Could I come **on Thursday instead**?_',
  '**at / on / in** (recycle, Unit 2 and 7): **at** eleven o\'clock · **on** Tuesday · **on** 28 October · **in** the morning',
  '**Practise:** Complete.  1 I\'d like ______ make an appointment.  2 Can I come ______ Thursday?  3 The appointment is ______ half past three.  4 Please come ten minutes ______.  5 I\'m afraid I can\'t ______ on Monday.',
  '**Useful phrases:** Is it urgent? · Let\'s find something today. · …, then. · We take cash only, I\'m afraid. · Get well soon.',
  '**Pronunciation.** 🔊 **Track 10.6** On the phone, say dates and times **slowly and clearly**, and repeat them back: _Tuesday the twenty-eighth, at half past ten._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back**. A phones the place on the card, B is the receptionist. Make the appointment and write it down. Then swap.'));
out.push(dlg(null, [
  ['B', 'Good morning, __________.'],
  ['A', 'Good morning. I\'d like to make an appointment __________, please.'],
  ['B', 'Of course. We have __________ or __________.'],
  ['A', 'I can\'t come at __________ because __________. __________ is good.'],
  ['B', 'Can I take your name? … And your phone number?'],
  ['A', '__________.'],
  ['B', 'Please bring __________ and come __________ early.'],
  ['A', 'How much is it?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the dentist', 'Card B – the garage'], [[
  'toothache for a week · free Tue after 4, Thu morning · bring your old X-rays · 80,000 · card accepted',
  'the car makes a noise · they have Monday 8 am or Wednesday 2 pm · leave the car for 3 hours · check is free, repairs extra']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform (back to back). **Listener task:** write the day, the time, the price and one thing to bring.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a **real** appointment you need to make (doctor, dentist, garage, hairdresser, office, bank). Phone your partner and make it. They invent the times – and there\'s always a problem: your time isn\'t free!'));
out.push(p('**b**  Now phone again – you have to **change** the appointment. Give a reason and agree a new time.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I made an appointment at the garage for Monday at eight, but then I had to change it because I\'m working. Now it\'s Wednesday at two. I have to leave the car for three hours and the check is free._'));
out.push(p('**Listener task:** who had the most difficult receptionist?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the appointment card and the message. Answer the questions.'));
out.push(table(['AL-NOOR CLINIC – APPOINTMENT CARD', ''], [
  ['Patient', 'Rami Khoury'], ['Doctor', 'Dr Samar Khalil'], ['Date', 'Thursday 23 October'], ['Time', '11.00 am'],
  ['Please bring', 'ID card · old reports (if any)'], ['Note', 'Come 10 minutes early for the form. First visit: 60,000 SYP, cash only.'],
  ['To change an appointment', 'Call 011 445 2233 before 6 pm the day before.'],
], [1, 3], { headFill: C.navy }));
out.push(sp());
out.push(model([
  '**Rami → the clinic (two days later)**',
  'Good morning. My name is Rami Khoury and I have an appointment with Dr Samar on Thursday 23 October at 11 am.',
  'I\'m afraid I can\'t come at that time: my company has an urgent site meeting that morning. Could I change the appointment to the afternoon, or to another day this week? I\'m free after 3 pm every day except Wednesday.',
  'I\'m sorry for the trouble. My phone number is 0988 204 517.',
  'Thank you very much.',
]));
out.push(item('1', 'What must Rami bring, and when must he arrive?'));
out.push(item('2', 'When must you call to change an appointment?'));
out.push(item('3', 'When is Rami **not** free?'));
out.push(writers([
  'An appointment card has: **patient · professional · date · time · what to bring · a note · how to change it**.',
  'A message to change an appointment: **your name + the appointment you have** → **you can\'t come + the reason** → **when you ARE free** (this is the important part!) → **sorry** → **your phone number**.',
  'Never write only "I can\'t come on Thursday". Always give the times you **can** come – it saves two more messages.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Good morning. My name is ______________ and I have an appointment with ______________ on ______________ at ______________.   I\'m afraid I can\'t come at that time: ______________. Could I change the appointment to ______________, or to ______________? I\'m free ______________ except ______________.   I\'m sorry for the trouble. My phone number is ______________.   Thank you very much.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (days, months) and full stops', '_I\'d like to… / Could I…?_ for the polite request', 'The times you ARE free', 'All parts: name, appointment, reason, free times, sorry, phone']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **two** things (60 words or more in total): **(a)** an appointment card for a **real or invented** place (clinic, dentist, garage, office) and **(b)** a message changing an appointment.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **receptionist**. ★ _Easy to help you!_  ✓ _Can you add your phone number?_  ? _Is Sunday at four OK?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. Which one can the receptionist answer with one short reply?'));
out.push(hw('Write the **receptionist\'s reply** (25+ words): offer a new day and time, confirm what to bring, and ask them to confirm.'));

// ======================= 10.4 =======================
out.push(pb());
out.push(h2('10.4  Take one tablet twice a day'));
out.push(p('**Function:** understanding instructions   ·   **Grammar:** imperatives + frequency; _before / after / with_   ·   **Pronunciation:** /s/ and /z/ in plurals'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What information is on a medicine box? What words do you see? Make a class list.'));
out.push(board('Take it after meals.', 'Twice a day for five days'));
out.push(p('**b**  What do they mean? _twice a day · three times a day · every eight hours · before meals · with food · at night_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Maya explaining the instructions to?   **A** Rami   **B** an older customer   **C** a child'));
out.push(p('**b**  Listen again. **1** How many times a day?   **2** What must he not do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.7  At the pharmacy counter', [
  ['Abu Samir', 'Maya, my daughter brought this from the doctor, but the writing is very small. I can\'t read it.'],
  ['Maya', 'Let me explain, Abu Samir. The doctor says one tablet, twice a day.'],
  ['Abu Samir', 'Twice – morning and evening?'],
  ['Maya', 'Exactly. Morning and evening, and always **after** food, not before. The box says "after meals".'],
  ['Abu Samir', 'And for how many days?'],
  ['Maya', 'Seven days. This is important: you have to finish all of them, even if you feel better after three days.'],
  ['Abu Samir', 'Why? If I\'m well, why do I continue?'],
  ['Maya', 'Because the doctor chose seven days for a reason. If you stop early, the problem can come back.'],
  ['Abu Samir', 'I understand. And the other box?'],
  ['Maya', 'That one is for the cough – one spoon at night, only if you need it. Shall I write everything on the boxes for you?'],
  ['Abu Samir', 'Please. In big letters!'],
  ['Maya', '(writing) Big letters. "ONE TABLET – MORNING AND EVENING – AFTER FOOD – 7 DAYS." And here: "ONE SPOON AT NIGHT IF YOU COUGH."'],
  ['Abu Samir', 'God bless you, my daughter.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Understanding instructions on a box**',
  table(['How much', 'How often', 'When'], [
    ['one tablet · two tablets · one spoon · 5 ml · one capsule',
     'once a day · **twice a day** · three times a day · every eight hours · when you need it',
     '**before** meals · **after** meals · **with** food · on an empty stomach · at night · in the morning'],
  ], [1.1, 1.3, 1.3]),
  '**Other words on the box:** for 7 days · finish the course · keep in the fridge · keep away from children · do not use after [date] · ask your doctor or pharmacist',
  '**Explaining to somebody:** The doctor says… · The box says… · It means… · This is important: … · Shall I write it for you?',
  '⚠ **twice a day** = two times a day. **every eight hours** = three times in 24 hours (morning, afternoon, night).',
  '**Practise:** What does it mean? Write it in your own words.  1 "1 tablet 3 × daily after meals"  2 "2 × 5 ml at night"  3 "Every 8 hours for 5 days"  4 "Do not take on an empty stomach"',
  '**Remember:** only a **doctor or pharmacist** decides what medicine you take and how much. In English class we only learn to **read and explain** the words on the box.',
  '**Pronunciation.** 🔊 **Track 10.8** Plurals: /s/ **tablets**, weeks · /z/ **days**, pills, spoons · /ɪz/ do**ses**, box**es**. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the label on the card. B is a relative who can\'t read the small letters. Explain it in simple words, then write it in big letters. Then swap.'));
out.push(table(['Label card A', 'Label card B'], [
  ['**ANTIBIOTIC 500 mg**', '**COUGH SYRUP**'],
  ['1 capsule every 8 hours', '10 ml three times a day'],
  ['after meals · for 6 days', 'after food · maximum 5 days'],
  ['finish the course · do not take with milk', 'keep in the fridge · do not drive after taking it'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the instructions in big letters as the explainer says them. Compare with the card – is anything missing?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of instructions you have to explain to someone in **your** life: a medicine box, a machine, a form, a school letter, a bank message. Explain it to your partner in simple words.'));
out.push(p('**b**  Your partner asks **three** questions – including one you can\'t answer. What do you say? (_I don\'t know – we should ask the pharmacist / the office._)'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba explained a letter from her son\'s school. The children have to bring sports clothes every Tuesday and a swimming towel on Thursdays. Parents have to sign the paper and send it back before Sunday. She didn\'t know if they need a swimming hat, so she\'s going to ask the teacher._'));
out.push(p('**Listener task:** what was the hardest thing to explain?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the instruction leaflet. Answer the questions.'));
out.push(model([
  '**COLDEX – FOR COLDS AND SORE THROATS**   **Tablets, 500 mg**',
  '**How to take it:** Adults: one tablet three times a day, after meals. Do not take more than three tablets in 24 hours.',
  '**For how long:** Up to five days. If you do not feel better after five days, stop and see a doctor.',
  '**Important:**',
  '• Do not take this medicine on an empty stomach.',
  '• Do not take it with other cold medicines.',
  '• Keep it away from children.',
  '• Do not use after the date on the box.',
  '**Ask your doctor or pharmacist before you take this medicine if you are pregnant, if you take other medicines, or if you have any questions.**',
  'Al-Shifa Pharmacy · Al-Ward Street, Mezzeh · 0933 427 815',
]));
out.push(item('1', 'How many tablets a day maximum?'));
out.push(item('2', 'What should you do after five days if you don\'t feel better?'));
out.push(item('3', 'Who should you ask before taking it?'));
out.push(writers([
  'An instruction leaflet: **name + what it\'s for** → **How to take it** (how much · how often · when) → **For how long** → **Important** (a short list of *do not*…) → **when to ask a professional** → **contact**.',
  'Use **imperatives**: _Take… Do not take… Keep…_ Each instruction is **one short line**.',
  'The most important line is the last one: **ask your doctor or pharmacist**. Real leaflets always have it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – FOR ______________**   **How to take it:** ______________, ______ times a day, ______________.   **For how long:** ______________. If ______________, ______________.   **Important:**  • Do not ______________.  • Do not ______________.  • Keep ______________.   **Ask your doctor or pharmacist if ______________.**   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Imperatives: Take… / Do not take…', 'How much · how often · when · how long', 'The "ask a professional" line is there']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one instruction before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a clear instruction sheet (60 words or more) for something you know well – **not** medicine: how to use a washing machine, a coffee machine, an air conditioner, a printer, a heater, or how to look after a plant. Use the same shape: how to use it · how long · important · who to ask.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s sheet as **somebody using it for the first time**. ★ _Very clear!_  ✓ _Can you add what to do if…?_  ? _How often should I…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two sheets are read aloud. Could you follow them without any help?'));
out.push(hw('Write the instructions again for **a child** (30+ words): shorter sentences, easier words, and a friendly line at the end.'));

// ======================= 10.5 =======================
out.push(pb());
out.push(h2('10.5  I try to walk every day'));
out.push(p('**Function:** talking about healthy habits   ·   **Grammar:** _try to / want to / need to_ + base verb; _enough / too much_   ·   **Pronunciation:** _to_ /tə/ in verb + to'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do people do to stay well? (walk, sleep, drink water, eat vegetables, see friends…) What makes it difficult? Make two lists.'));
out.push(board('I try to walk every day.', 'I don\'t drink enough water.'));
out.push(p('**b**  _enough_ or _too much_?  I sleep five hours – I don\'t sleep ______.  ·  I drink six coffees – that\'s ______ coffee.  ·  I sit all day – I don\'t move ______.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they doing?   **A** a class survey   **B** a doctor\'s visit   **C** a job interview'));
out.push(p('**b**  Listen again. **1** What does Tareq try to do?   **2** What is Lama\'s problem?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.9  The class health survey', [
  ['Hiba', 'OK, question one: do you sleep enough?'],
  ['Tareq', 'No! I need to sleep seven hours, but I sleep five. My son wakes up at five.'],
  ['Lama', 'I sleep nine hours. Sometimes ten.'],
  ['Hiba', 'Ten! Question two: do you exercise?'],
  ['Tareq', 'I try to walk home from the bank twice a week – it\'s forty minutes.'],
  ['Lama', 'I want to go to the gym, but I don\'t have time. I\'m a student – I study all evening.'],
  ['Hiba', 'Hmm, "I don\'t have time" is what everybody says.'],
  ['Lama', 'I know, I know. The truth is I spend too much time on my phone.'],
  ['Hiba', 'Me too, honestly. Question three: water?'],
  ['Tareq', 'I don\'t drink enough. I drink coffee – five cups a day.'],
  ['Hiba', 'Five! And you can\'t sleep…'],
  ['Tareq', 'Ah. Maybe that\'s the problem, not my son.'],
  ['Lama', '(laughing) Write that in the report!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – verb + to + base verb; enough / too much**',
  table(['try / want / need / hope / decide + **to** + base verb', 'enough / not enough', 'too much / too many'], [
    ['I **try to walk** every day. · I **want to go** to the gym. · I **need to sleep** seven hours. · I **decided to stop** smoking.',
     'I don\'t sleep **enough**. · I don\'t drink **enough water**.\n(enough **after** a verb, **before** a noun)',
     '**too much** + uncountable: too much coffee / time / sugar\n**too many** + countable: too many cups / hours / sweets'],
  ], [1.4, 1.2, 1.3]),
  '⚠ _I want **to go**_, not ~~I want go~~ or ~~I want going~~.  ⚠ _I don\'t drink enough **water**_, not ~~enough of water~~.',
  '**Healthy-habit words:** exercise · walk · sleep well · drink water · eat vegetables · take a break · spend time with people · stress',
  '**Practise:** Complete.  1 I try ______ (walk) every morning.  2 He drinks ______ coffee – six cups!  3 I don\'t eat ______ vegetables.  4 She needs ______ (take) a break.  5 You spend ______ hours on your phone.',
  '**Useful phrases:** The truth is… · Me too, honestly. · "I don\'t have time" is what everybody says. · Maybe that\'s the problem.',
  '**Pronunciation.** 🔊 **Track 10.10** _to_ is weak /tə/: _I try to‿walk_ /traɪ tə wɔːk/ · _I need to‿sleep_ · _I want to‿go_ (often "wanna" in fast speech – but say _want to_ in class!). Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the survey questions, B answers using the card – and always gives a reason or an excuse. Then swap.'));
out.push(dlg(null, [
  ['A', 'Do you sleep enough?'],
  ['B', 'No. I need to sleep __________, but I sleep __________, because __________.'],
  ['A', 'Do you exercise?'],
  ['B', 'I try to __________. / I want to __________, but __________.'],
  ['A', 'Do you drink enough water?'],
  ['B', '__________. I drink too much __________.'],
  ['A', 'What do you want to change?'],
  ['B', 'I\'d like to __________.'],
]));
out.push(table(['Survey card A', 'Survey card B'], [[
  'sleeps 6 hours (works late) · walks at the weekend only · drinks tea, not water · wants to swim again',
  'sleeps 8 hours · no exercise at all (no time, three children) · drinks a lot of water · wants to walk with a friend']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **one** healthy habit and **one** problem for each person.'));
out.push(stage('4', 'Your turn – the real class survey', 9));
out.push(p('In groups of four, ask each other **five** questions about everyday habits: sleep · walking or exercise · water · breaks at work · time outside. Write the answers. Be honest – and kind!'));
out.push(table(['Question', 'Name 1', 'Name 2', 'Name 3', 'Name 4'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [2, 1, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Report your group\'s results:  _In our group nobody sleeps enough – between five and six and a half hours. Two people try to walk every day. Three people drink too much coffee. Everybody wants to spend less time on their phone, but nobody knows how!_'));
out.push(p('**Listener task:** what is the biggest problem in this class? What is the best habit?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the class survey report. Answer the questions.'));
out.push(model([
  '**Class 4B – How healthy are we?**',
  'This week we asked twelve students about their everyday habits. The results are interesting – and a little worrying!',
  '**Sleep.** Nobody sleeps enough. Most students sleep between five and six hours, and only two people sleep seven. The main reasons are work, study and children.',
  '**Exercise.** Half of the class try to walk every day, usually to or from work. Three people go to a gym. Four people do no exercise at all, and they all gave the same reason: "I don\'t have time."',
  '**Water and coffee.** Most students don\'t drink enough water, but they drink a lot of coffee – one student drinks five cups a day!',
  '**What we want to change.** Everybody wants to spend less time on their phone, and eight students want to walk more.',
  '**Our conclusion:** we don\'t need a gym. We need to walk, to drink water and to put our phones in another room.',
]));
out.push(item('1', 'How many students sleep seven hours?'));
out.push(item('2', 'What reason did the four people give?'));
out.push(item('3', 'What is the conclusion?'));
out.push(writers([
  'A survey report (recycle Unit 2): **who you asked** → **a section for each question** (with a title in bold) → **what people want to change** → **a conclusion**.',
  'Report words: _nobody · most students · half of the class · three people · everybody · only two people_.  ⚠ _Nobody **sleeps**_, _Everybody **wants**_ – with **-s**!',
  'A good conclusion is **one clear sentence** that comes from the results, not from your opinion.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – How healthy are we?**   This week we asked ______ students about ______________. The results are ______________.   **______________.** Nobody ______________. Most students ______________.   **______________.** Half of the class ______________. ______ people ______________.   **What we want to change.** Everybody ______________.   **Our conclusion:** we need to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'nobody / everybody / most students + **-s**', 'enough / too much / too many used correctly', 'All parts: who you asked, sections, what to change, conclusion']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one result sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the report for **your group\'s** survey from Stage 4 (60 words or more). Use at least **three** section titles and end with a conclusion.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _Your conclusion is true for me too!_   ✓ _Can you add the numbers?_   ? _How many people…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('All the groups read their conclusions. Make **one** class conclusion together and write it on the board.'));
out.push(hw('Write a short plan for **yourself** (30+ words): _This month I want to… I\'m going to try to… I need to…_ Keep it – read it again in four weeks!'));

// ======================= 10.6 =======================
out.push(pb());
out.push(h2('10.6  Get well soon!'));
out.push(p('**Function:** showing sympathy   ·   **Grammar:** fixed expressions; _I hope…_   ·   **Pronunciation:** warm, gentle intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do people say when someone is ill? What do they say to the family? What do they bring? Make a class list.'));
out.push(board('Get well soon!', 'I hope you feel better soon.'));
out.push(p('**b**  To the ill person or to the family? _Get well soon. · How is he today? · I hope you feel better. · Is there anything I can do? · Take care of yourself._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where are they?   **A** at the office   **B** at Rami\'s flat   **C** at the hospital'));
out.push(p('**b**  Listen again. **1** What did the doctor say?   **2** What do they bring?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.11  Visiting Rami', [
  ['Omar', 'Come in, come in. He\'s on the sofa, like a king.'],
  ['Lina', 'Rami! How are you feeling?'],
  ['Rami', 'Better, thank you. Much better than Thursday.'],
  ['Maya', 'And what did the doctor say?'],
  ['Rami', 'That you were right, Maya. It wasn\'t a simple cold. She gave me something and told me to rest for five days.'],
  ['Maya', 'Five days! And are you resting?'],
  ['Rami', 'Omar took my laptop and hid it.'],
  ['Omar', 'It\'s true. It\'s in the kitchen, behind the rice.'],
  ['Lina', 'Good man. We brought you some soup – my mother made it, so it will probably cure everything.'],
  ['Rami', 'Thank you so much. Really.'],
  ['Maya', 'And this is from the class. Everybody signed it.'],
  ['Rami', '(reading) "Get well soon – we need you for the football club." Ha!'],
  ['Lina', 'Is there anything you need? Shopping? The pharmacy?'],
  ['Rami', 'No, Omar is doing everything. Just… don\'t tell Mr Fouad how well I look.'],
  ['Omar', 'Too late. I sent him a photo.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Showing sympathy**',
  table(['To the person who is ill', 'To their family', 'Offering help'], [
    ['How are you feeling? · I\'m sorry to hear you\'re ill. · **Get well soon!** · I hope you feel better soon. · Take care of yourself. · Don\'t come back to work too early!',
     'How is he / she today? · I hope he gets better soon. · Please give her my best wishes. · If you need anything, call me.',
     'Is there anything I can do? · Do you need anything from the pharmacy? · Shall I bring you…? · I can do your shopping.'],
  ], [1.3, 1.2, 1.2]),
  '**Get well soon** is for a card or a message. When you speak, people usually say _I hope you feel better soon._',
  '**Answering:** Thank you so much. · That\'s very kind of you. · I\'m feeling much better, thank you. · Much better than yesterday.',
  '⚠ _I hope you **feel** better_ (not ~~I hope you will feeling~~). · _Get **well**_, not ~~Get good~~.',
  '**Practise:** What do you say?  1 Your colleague has flu. → ______  2 Your neighbour\'s mother is in hospital. → ______  3 Your friend had an operation and is at home. → ______  4 Your teacher has lost her voice. → ______',
  '**Useful phrases:** Like a king! · Much better than Thursday. · Good man. · Is there anything you need? · Too late!',
  '**Pronunciation.** 🔊 **Track 10.12** Sympathy needs a **soft, warm** voice and a **falling** tone: _I\'m so sorry to hear that._ ↘ · _I hope you feel better soon._ ↘ Not fast, not loud. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is visiting or phoning, B is the person on the card. Use **three** sympathy phrases and **one** offer of help. Then swap.'));
out.push(dlg(null, [
  ['A', 'How are you feeling?'],
  ['B', '__________, thank you. __________.'],
  ['A', 'I\'m sorry to hear that. What did the doctor say?'],
  ['B', '__________.'],
  ['A', 'Is there anything I can do? __________?'],
  ['B', 'That\'s very kind of you. __________.'],
  ['A', 'Take care of yourself. And __________!'],
]));
out.push(table(['Card A – you are…', 'Card B – you are…'], [[
  'at home with flu for three days · feeling a little better · you\'re bored · your family is doing the shopping',
  'your mother is in hospital after a small operation · she\'s fine · you\'re tired because you stay with her every evening']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the phrases you hear. Did the voice sound warm?'));
out.push(PHRASE_CARD(['How are you feeling?', 'I\'m sorry to hear that.', 'I hope you feel better soon.', 'Is there anything I can do?', 'That\'s very kind of you.', 'Take care of yourself.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of someone **real** who was ill or had a difficult time recently (a relative, a neighbour, a colleague). Tell your partner what happened and what people said and did.'));
out.push(p('**b**  Now role-play: your partner is that person. Visit them or phone them. Use the phrases – and make a **concrete** offer of help, not just "tell me if you need anything".'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _When Hiba\'s neighbour broke her arm, the women in the building made a list: one cooked on Monday, one took the children to school, one did the shopping. Hiba says nobody asked – they just organised it._'));
out.push(p('**Listener task:** what is the most useful thing people do when someone is ill?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card and the message. Answer the questions.'));
out.push(model([
  '**1 · The class card**',
  '**GET WELL SOON, RAMI!**',
  'The whole class is thinking of you. The centre is very quiet without your questions in the Language box!',
  'Rest properly and don\'t come back before the doctor says yes. We can wait – the football club can\'t, but we can.',
  'With best wishes from all of us in Class 4B 🌼',
  '**2 · Lina → Rami\'s mother in Homs**',
  'Dear Umm Rami,',
  'I hope you are well. I wanted to tell you that we visited Rami this evening. He is much better than last week – he was sitting on the sofa and laughing at us.',
  'The doctor gave him something and told him to rest for five days, and Omar is taking very good care of him. We brought some soup and the class sent a card.',
  'Please don\'t worry. If anything changes, I will call you immediately. My number is 0991 205 734.',
  'With warm regards,',
  'Lina',
]));
out.push(item('1', 'What does the class card say about coming back?'));
out.push(item('2', 'Why does Lina write to Rami\'s mother?'));
out.push(item('3', 'What does Lina promise?'));
out.push(writers([
  'A get-well card: **GET WELL SOON + name** → **one warm, personal line** (something only you would say about this person) → **rest / don\'t hurry back** → **from all of us**.',
  'A message to the family: _Dear…,_ → **I hope you are well** → **the news** (how the person is – start with the good part) → **what is being done** → **please don\'t worry + I will call you** → **your number** → warm ending.',
  'For a family far away, the most important sentences are **"he is better than last week"** and **"I will call you if anything changes."**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Card:** **GET WELL SOON, ______!**   ______________ is thinking of you. ______________ without ______________! Rest ______________ and don\'t ______________. With best wishes from ______________.'));
out.push(p('**Message to the family:** Dear ______________,   I hope you are well. I wanted to tell you that ______________. He / She is ______________ than ______________.   The doctor ______________, and ______________ is taking care of ______________.   Please don\'t worry. If anything changes, I will ______________. My number is ______________.   With warm regards,   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_I hope you feel better_ / _Get well soon_ written correctly', 'The good news comes first', 'A promise to call + a phone number']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one line of your card before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **both** (60 words or more in total) for a **real or invented** person: **(a)** a get-well card from your class or your office, and **(b)** a message to their family with the news.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **family member far away**. ★ _This made me feel better._  ✓ _Can you add when he can go back to work?_  ? _Is he eating properly?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two cards are read aloud. Which line would make an ill person smile?'));
out.push(hw('Write the **family\'s reply** to your partner\'s message (25+ words): thank them, ask one question, and ask them to do one small thing.'));

// ======================= 10.7 =======================
out.push(pb());
out.push(h2('10.7  Review & Mediate: What does the box say?'));
out.push(p('**Function:** explaining instructions to a relative   ·   **Recycling:** Units 1–10   ·   **Exam practice:** A2 Key Reading Part 3, Writing Part 6, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** I have headache.  **2** My feet hurts.  **3** You should to rest.  **4** I\'d like make an appointment.  **5** I don\'t drink enough of water.  **6** I hope you will feeling better.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two boxes from the pharmacy.'));
out.push(table(['BOX 1 · THROAT TABLETS', 'BOX 2 · VITAMIN D'], [
  ['One tablet every 4 hours', 'One capsule a week'],
  ['Maximum 6 tablets a day', 'Take it with food (not on an empty stomach)'],
  ['Suck slowly – do not swallow whole', 'The same day every week (e.g. Friday)'],
  ['For 3–4 days only', 'Keep away from light'],
  ['If the pain continues, see a doctor', 'Ask your doctor before you start'],
], [1, 1]));
out.push(p('**b**  **Books closed.** Listen. Maya explains the two boxes to her grandmother. What does she write on the calendar?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.13  Explaining to Teta', [
  ['Teta', 'Maya, habibti, the doctor gave me two boxes and I understood nothing.'],
  ['Maya', 'Don\'t worry, Teta. Let\'s do them one by one. This box is for your throat.'],
  ['Teta', 'How many?'],
  ['Maya', 'One tablet every four hours – so about four or five a day, but **never** more than six.'],
  ['Teta', 'And do I swallow it with water?'],
  ['Maya', 'No! This is important: you suck it slowly, like a sweet. Don\'t swallow it whole.'],
  ['Teta', 'Ah. Like a sweet. And for how many days?'],
  ['Maya', 'Three or four days only. If your throat still hurts after that, we go back to the doctor – we don\'t buy more.'],
  ['Teta', 'Fine. And the other one? It\'s very big!'],
  ['Maya', 'That one is easy: one capsule a **week**. Not every day – once a week.'],
  ['Teta', 'Once a week! I\'ll forget.'],
  ['Maya', 'That\'s why we choose a day. Friday? Everybody remembers Friday. And you take it **with food**, after lunch.'],
  ['Teta', 'Friday after lunch. Write it on my calendar, please.'],
  ['Maya', '(writing) Here: big letters on every Friday. "VITAMIN – AFTER LUNCH."'],
  ['Teta', 'God bless your hands.'],
]));
out.push(sp());
out.push(box('Language box – explaining instructions to somebody', [
  '**1 One thing at a time:** _Let\'s do them one by one. This box is for…_',
  '**2 Say the number simply:** _every four hours – so about four or five a day_',
  '**3 Warn clearly:** _This is important: … · **Never** more than six. · **Don\'t** swallow it whole._',
  '**4 Compare with something they know:** _You suck it slowly, **like a sweet**._',
  '**5 Make it easy to remember:** _Let\'s choose a day. Friday? · I\'ll write it on your calendar._',
  '**6 Say when to go back:** _If it still hurts after four days, **we go back to the doctor**._',
  '⚠ When you don\'t understand something on a box, the answer is always: **ask the pharmacist**. Never guess for somebody else.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the instructions on the card; B is a relative who finds them confusing. Explain, using the **six steps** in the Language box. Then swap.'));
out.push(table(['Instructions card A – eye drops', 'Instructions card B – a blood-pressure machine'], [
  ['2 drops in each eye', 'Sit quietly for 5 minutes first'],
  ['3 times a day', 'Put the band on your arm, above the elbow'],
  ['Do not touch the eye with the bottle', 'Press the button and do not talk'],
  ['Throw the bottle away 4 weeks after opening', 'Write the two numbers in the book, every morning'],
  ['If your eye is red after 2 days, see a doctor', 'Take the book to the doctor every month'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the instructions in **big simple letters**, as the explainer would write them. Did they forget anything?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **real instructions** you have explained (or should explain) to someone in your family: a machine, a form, a school letter, a bank app, a bus timetable, a box from the pharmacy. Explain them to your partner using the six steps. Your partner plays the relative – and asks the difficult questions!'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained:  _Tareq explained the bank app to his father. First you open the app and you put your number. The code comes by message and it only works for two minutes. His father always forgets the code, so Tareq wrote the steps on a card and put it in his wallet._'));
out.push(p('**Listener task:** whose explanation was the clearest? What made it clear?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 3)', 7));
out.push(p('Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(model([
  '**The pharmacist in the middle – by Maya Nasser**',
  'People think a pharmacist only gives out boxes. In my pharmacy, I spend half my day explaining them.',
  'Many of my customers are older people. They come with two or three boxes from the doctor and very small writing. Sometimes they come with a bag of old medicines from last year, and they ask me which one is for which problem. I always do the same thing: I take them one by one, I explain in simple words, and I write big letters on the box with a marker.',
  'The hardest part is not the words – it\'s the habits. One man told me he stops his medicine when he feels better, after two or three days. His daughter buys it, he feels better, he stops, and three weeks later he is ill again. We talked about it for twenty minutes. Now he brings the empty box to show me that he finished it.',
  'My grandmother is the same. She is eighty-one and she says, "I took medicine for forty years before you were born." But she lets me write on her calendar, and that is enough.',
  'A pharmacist is not only a person who sells medicine. Often we are the person between the doctor and the family – and we have time to explain.',
]));
out.push(sp());
[
  '**1**  What does Maya spend a lot of time doing?   **A** selling medicine   **B** explaining instructions   **C** calling doctors',
  '**2**  Why do older customers find the boxes difficult?   **A** The writing is very small.   **B** They don\'t speak English.   **C** The boxes are old.',
  '**3**  What does Maya do with a marker?   **A** She writes on her calendar.   **B** She writes big letters on the box.   **C** She writes a letter to the doctor.',
  '**4**  What was the problem with the man?   **A** He took too many tablets.   **B** He stopped when he felt better.   **C** He forgot to buy his medicine.',
  '**5**  What does Maya say about her grandmother?   **A** She refuses all help.   **B** She accepts the calendar idea.   **C** She can\'t read.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note Maya puts in her grandmother\'s bag (use the two boxes from Stage 2).'));
out.push(p('**TETA – YOUR TWO BOXES**   **Box 1 (throat):** One tablet every ______ hours. Never more than ______ a day. ______________ it slowly, like a sweet – do not ______________. For ______ days only.   **Box 2 (vitamin):** One capsule ______ a week – ______! Take it ______ food, after ______. I wrote it on your calendar.   **Important:** if your throat ______________ after four days, ______________.   Call me any time, Teta. ❤ Maya · 0933 427 815'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Both boxes explained in simple words', 'How much · how often · when · how long', 'A clear warning and when to go back to the doctor', 'A phone number']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend, **Tom**, is ill and can\'t come to your class. Write an email to Tom.',
  'In your email:  •  say **you\'re sorry** he is ill  •  tell him **what you did in the class**  •  **offer to help** him.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I\'ve got ___ sore throat.   a) –   b) a   c) the',
  '2  My back ___ when I sit for a long time.   a) hurt   b) hurts   c) is hurt',
  '3  You ___ rest for a few days.   a) should   b) should to   c) shoulds',
  '4  ___ you take a day off?   a) Why don\'t   b) Why not you   c) Why you don\'t',
  '5  I\'d like ___ an appointment.   a) make   b) to make   c) making',
  '6  Take one tablet ___ a day: morning and evening.   a) two   b) twice   c) second',
  '7  I don\'t drink ___ water.   a) enough   b) too much   c) too many',
  '8  I hope you ___ better soon.   a) feel   b) will feeling   c) feels',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 3 style).** 🔊 **Track 10.14** Listen to a pharmacist talking to a customer. Choose **A**, **B** or **C**.'));
['1  How many tablets a day?   A one   B two   C three',
 '2  When must the customer take them?   A before food   B with food   C on an empty stomach',
 '3  How many days?   A three   B five   C seven',
 '4  What must the customer not do?   A drive   B drink coffee   C stop early',
 '5  What should she do if she doesn\'t feel better?   A take more tablets   B come back to the pharmacy   C see a doctor'].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 10.14  Audio script (read after the check)', [
  ['Pharmacist', 'Right, let me explain this one. It\'s one tablet in the morning and one in the evening – so two a day, not three.'],
  ['Customer', 'Two. With water?'],
  ['Pharmacist', 'With water, and always with food – never on an empty stomach, because it isn\'t comfortable for the stomach.'],
  ['Customer', 'And for how long?'],
  ['Pharmacist', 'The doctor wrote five days. This is the important part: finish all five days. Many people stop after two days because they feel better, and then the problem comes back.'],
  ['Customer', 'I understand. Can I drive?'],
  ['Pharmacist', 'Yes, this one is fine for driving. And if you don\'t feel better after the five days, don\'t buy another box – go back to the doctor.'],
  ['Customer', 'Thank you very much.'],
]));
out.push(p('**C  Writing.** Write a message to a friend or colleague who is ill (35+ words). Say you\'re sorry, ask how they are, and offer **one** concrete piece of help.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 10)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say how I feel and describe symptoms',
  '☐ give and ask for everyday advice',
  '☐ make, change and cancel an appointment',
  '☐ read and explain the instructions on a box or a leaflet',
  '☐ talk about healthy habits with _try to / need to / enough / too much_',
  '☐ show sympathy and offer help',
  '☐ explain instructions to a relative, step by step',
  '☐ write an "I\'m ill" message, an advice letter, an appointment message, an instruction sheet, a survey report and a get-well card',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
