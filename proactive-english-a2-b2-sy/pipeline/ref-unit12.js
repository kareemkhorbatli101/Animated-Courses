// Proactive English A2 · Syria Edition · Book 1 · Unit 12 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 12  Celebrations & Customs'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**12.1**  describe a celebration in your country',
  '**12.2**  read an invitation card and reply to it',
  '**12.3**  give good wishes and congratulations',
  '**12.4**  ask and give advice about presents',
  '**12.5**  tell the story of a day you remember',
  '**12.6**  explain a custom to a visitor',
  '**12.7**  Review & Mediate: explain an invitation and a programme',
], C.lblue, C.navy));
out.push(sp());
out.push(box('In this unit you meet again…', [
  '**Hiba\'s cousin\'s wedding** in Homs (Unit 7) – Omar photographs the engagement party and the class is invited to the wedding.',
  '**Mr Peter Lang** comes to Damascus in April (Unit 11) and his visit lands on a celebration.   ·   **Jana** (Ziad\'s daughter) is four this year.',
], C.lyellow, C.orange));

// ======================= 12.1 =======================
out.push(pb());
out.push(h2('12.1  What do people do at Eid?'));
out.push(p('**Function:** describing a celebration   ·   **Grammar:** present simple for customs + _before / after / when_   ·   **Pronunciation:** weak _do_ in questions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which celebrations do you know in your country? Make a class list: religious days, national days, family days.'));
out.push(board('We visit our relatives.', 'Eid: three days of visits'));
out.push(p('**b**  Which words go with a celebration? _visit · cook · wear · give · buy · clean · invite · wait · sleep · phone_. Choose five and say why.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Lina talking to?   **A** her sister   **B** a visitor from another country   **C** her manager'));
out.push(p('**b**  Listen again. **1** What do people do the day before?   **2** Who visits who first?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.1  Explaining Eid to a visitor', [
  ['Mr Lang', 'Lina, can I ask you something? My colleague said "Eid Mubarak" to me yesterday, and I didn\'t know what to answer.'],
  ['Lina', '(laughs) You answer "Eid Mubarak" too! It means something like "a blessed feast".'],
  ['Mr Lang', 'And what do people actually do?'],
  ['Lina', 'Well, before the Eid everybody cleans the house and buys new clothes, especially for the children. My mother cooks for two days.'],
  ['Mr Lang', 'Two days!'],
  ['Lina', 'For about forty people. On the first morning, after the prayer, the men come home and we have breakfast together. Then the visits start.'],
  ['Mr Lang', 'Who visits who?'],
  ['Lina', 'The young people visit the older people first – grandparents, uncles, aunts. When we arrive, we say "Eid Mubarak", we sit, we eat sweets, we drink coffee, and after twenty minutes we go to the next house.'],
  ['Mr Lang', 'Twenty minutes? That\'s a short visit.'],
  ['Lina', 'Because there are ten more houses! And the children get money – "eidiyeh". That\'s the best part when you\'re seven.'],
  ['Mr Lang', 'And when it finishes?'],
  ['Lina', 'Three days later everybody sleeps for a week. Come in April – you\'re going to see all of it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present simple for customs**',
  'We use the **present simple** for what people **always** do: _Everybody **cleans** the house._ · _The young people **visit** the older people first._ · _Children **get** money._',
  'Useful subjects for customs: **people · everybody · we · the family · the children · nobody**.  ⚠ _everybody **cleans**_, _people **clean**_.',
  '**Grammar – before / after / when + present simple**',
  table(['before', 'after', 'when'], [
    ['**Before** the Eid, everybody cleans the house. · **Before** we visit, we buy sweets.',
     '**After** the prayer, the men come home. · **After** twenty minutes, we go to the next house.',
     '**When** we arrive, we say "Eid Mubarak". · **When** the visits finish, everybody sleeps!'],
  ], [1.3, 1.3, 1.3]),
  '⚠ Use the **present simple** after these words, not the future: _When we **arrive**_, not ~~when we will arrive~~.',
  '**Celebration words:** a celebration · a feast · a holiday · the prayer · visits · sweets · new clothes · presents · to invite · to celebrate',
  '**Practise:** Join the sentences with the word in brackets.  1 We clean the house. The guests arrive. (before)  2 We eat. We drink coffee. (after)  3 The children see their grandfather. They kiss his hand. (when)  4 My mother cooks for two days. The Eid starts. (before)',
  '**Useful phrases:** Can I ask you something? · It means something like… · What do people actually do? · That\'s the best part. · Come in April!',
  '**Pronunciation.** 🔊 **Track 12.2** In questions, _do_ is short and weak: _What d\'you do?_ /wɒdjəduː/ · _What do people eat?_ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is a visitor from another country; B explains the celebration on the card. Use **before, after** and **when** at least once each. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Can I ask you something? What is __________?'],
  ['B', 'It\'s __________. It means something like __________.'],
  ['A', 'And what do people actually do?'],
  ['B', 'Before __________, everybody __________.'],
  ['A', 'And on the day?'],
  ['B', 'When __________, we __________. After that, __________.'],
  ['A', 'Who visits who?'],
  ['B', '__________.'],
  ['A', 'That sounds wonderful. How long does it last?'],
  ['B', '__________.'],
]));
out.push(table(['Celebration card A – Mother\'s Day (21 March)', 'Celebration card B – a new baby'], [
  ['before: children buy flowers or a small present; schools prepare songs', 'before: the family prepares the house; the grandmother comes to help'],
  ['on the day: families eat together; people phone their mothers; the radio plays old songs', 'when visitors arrive: they bring sweets or something for the baby; they say "Mabrouk"'],
  ['after: people put photos on the internet', 'after: the mother rests, the grandmother cooks for everybody'],
  ['one day only', 'the visits continue for two or three weeks'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **three** customs you hear – one with _before_, one with _when_, one with _after_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Choose a **real** celebration you know well – a religious feast, a national day, a wedding, a graduation, Mother\'s Day, or a family custom in your own house. Explain it to your partner: what happens before, what happens on the day, who visits who, what people eat and wear, and what children like most. Your partner asks **four** questions. Then swap.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s celebration:  _Nour told me about the olive harvest in her village. Before it starts, the whole family comes from the city, even the cousins who live far away. When they arrive, everybody works – the children carry the small boxes. After the day in the field, they eat together outside, and somebody always plays music. She says it isn\'t a holiday, but it feels like one._'));
out.push(p('**Listener task:** which celebration would you most like to see? Which one is the most similar to yours?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the text from an international website. Answer the questions.'));
out.push(model([
  '**EID AL-FITR IN SYRIA – what a visitor should know**',
  'Eid al-Fitr comes after the month of Ramadan and it lasts three days. It is the biggest family celebration of the year, and the whole country stops.',
  '**Before the Eid.** In the last days of Ramadan everybody cleans the house, and the markets stay open until very late. Families buy new clothes, especially for the children, and many people make or buy special sweets.',
  '**The first morning.** After the morning prayer, families have breakfast together. Then the visits begin: young people visit older relatives first – grandparents, uncles and aunts.',
  '**The visits.** When guests arrive, they say "Eid Mubarak". They sit for fifteen or twenty minutes, eat sweets and drink coffee, and then they go to the next house. Children receive a small amount of money, which is called "eidiyeh".',
  '**For a visitor.** You don\'t have to bring a present, but sweets are always welcome. If somebody invites you, say yes – and don\'t eat too much in the first house!',
]));
out.push(item('1', 'How long does Eid al-Fitr last?'));
out.push(item('2', 'Why do people go to the market late at night before the Eid?'));
out.push(item('3', 'What advice does the text give to a visitor?'));
out.push(writers([
  'A short text about a celebration: **name + when it is + how long it lasts** → **Before** → **The day itself** → **What people do / eat / say** → **For a visitor** (one practical tip).',
  'Write the **special words** in your language and then explain them: _"eidiyeh" – a small amount of money for children_. Don\'t leave a word the reader can\'t understand.',
  'Use the **present simple** all the way through: this is what happens **every** year.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – what a visitor should know**   ______________ is ______________. It lasts ______________.   **Before.** ______________, people ______________.   **The day.** When ______________, families ______________. Then ______________.   **What people eat:** ______________.   **For a visitor:** you don\'t have to ______________, but ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (names of feasts and months) and full stops', 'Present simple: _people visit_, _everybody cleans_', '_before / after / when_ + present simple', 'All parts: when, before, the day, food, a tip for a visitor']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short text (60 words or more) about a celebration in **your** country or your family, for a visitor who knows nothing about it. Explain any special words.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text as a **foreign visitor**. ★ _Now I understand!_  ✓ _You used a word you didn\'t explain._  ? _What should I wear?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the texts on the wall: this is our **class guide to celebrations**. Which one explains the special words best?'));
out.push(hw('Write about **one small custom** in your own family (30+ words) that other families don\'t have – something you always do before a feast, at a birthday, or when a guest arrives.'));

// ======================= 12.2 =======================
out.push(pb());
out.push(h2('12.2  You are invited'));
out.push(p('**Function:** reading an invitation and replying   ·   **Grammar:** formal and friendly register; _We are pleased to invite you…_   ·   **Pronunciation:** dates and times in a formal reply'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What information must an invitation always give? Make a class list of **five** things.'));
out.push(board('We\'d love to come.', 'RSVP by 15 October'));
out.push(p('**b**  Friendly or formal? _Come at eight! · We are pleased to invite you · See you there 😊 · We look forward to seeing you · Bring the kids_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the invitation for?   **A** a birthday   **B** a wedding   **C** a graduation'));
out.push(p('**b**  Listen again. **1** Where and when is it?   **2** Why is Lina worried about the time?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.3  An invitation arrives', [
  ['Hiba', 'Look what came today! The cards for my cousin\'s wedding. One is for the class.'],
  ['Lina', 'For all of us? Read it!'],
  ['Hiba', '"Mr and Mrs Fouad Dabbagh are pleased to invite you to the wedding of their daughter Rasha and Mr Samer Khoury, on Friday the 24th of October at six o\'clock in the evening, at the Rose Hall, Homs. RSVP by the 17th."'],
  ['Lina', 'Rose Hall! That\'s a beautiful place. And what does RSVP mean?'],
  ['Hiba', 'It means "please answer" – they need to know how many people are coming, because of the food.'],
  ['Lina', 'Six o\'clock in Homs… the bus takes two hours. We have to leave at three.'],
  ['Hiba', 'Three at the latest. And nothing in Syria starts at six.'],
  ['Lina', '(laughs) True. But we arrive at six.'],
  ['Omar', 'I\'m going earlier – I\'m photographing the engagement party in the afternoon.'],
  ['Hiba', 'So can everybody tell me by Thursday? I have to send one answer for all of us.'],
  ['Lina', 'Write "with pleasure" from me. Should we take a present?'],
  ['Hiba', 'We\'ll talk about that. One thing at a time!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reading an invitation – the five things**',
  table(['Who', 'What', 'When', 'Where', 'Answer'], [
    ['Mr and Mrs Fouad Dabbagh', 'the wedding of their daughter Rasha and Mr Samer Khoury', 'Friday the 24th of October at six o\'clock', 'the Rose Hall, Homs', '**RSVP** by the 17th'],
  ], [1.1, 1.5, 1.1, 1, 1]),
  '**Formal invitation language:** We **are pleased to invite you to**… · on … at … · We **look forward to seeing you**. · **RSVP** (= please answer) by …',
  '**Friendly invitation language:** We\'re having a party for… · Come at eight! · Bring the children. · Let me know by Thursday. · See you there!',
  '**Answering:**',
  table(['Accepting (formal)', 'Accepting (friendly)', 'Saying no (always: thank + reason + good wishes)'], [
    ['Thank you for your kind invitation. We **will be pleased to attend**. · With pleasure.',
     'Of course we\'re coming! · We\'d love to. · Count me in. · Try and stop me! 😄',
     'Thank you very much for the invitation. I\'m afraid I can\'t come, because… I hope you have a wonderful day.'],
  ], [1.2, 1.2, 1.6]),
  '**Practise:** Formal (F) or friendly (f)?  1 Come whenever you like. ___  2 We look forward to seeing you. ___  3 Bring the kids! ___  4 We are pleased to invite you. ___  5 Let me know by Thursday. ___',
  '**Useful phrases:** Look what came today! · What does RSVP mean? · at the latest · One thing at a time!',
  '**Pronunciation.** 🔊 **Track 12.4** Reading a card aloud: pause at the commas. _on Friday the twenty-fourth of October ⏸ at six o\'clock in the evening ⏸ at the Rose Hall, Homs._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an invitation card and reads it to B. B asks for the missing information and then answers (yes or no). Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Look what came today! An invitation to __________.'],
  ['B', 'Read it!'],
  ['A', '"__________ are pleased to invite you to __________, on __________ at __________, at __________."'],
  ['B', 'And do we have to answer?'],
  ['A', 'Yes – __________ by __________.'],
  ['B', 'How are we going to get there?'],
  ['A', '__________.'],
  ['B', 'Then __________ from me.'],
]));
out.push(table(['Invitation card A', 'Invitation card B'], [
  ['**Who:** The Al-Yasmin Centre', '**Who:** Ziad and Rana'],
  ['**What:** the end-of-year certificate evening', '**What:** Jana\'s fourth birthday'],
  ['**When:** Thursday 19 December, 5.30 pm', '**When:** Saturday afternoon, 4 o\'clock'],
  ['**Where:** the big hall, second floor', '**Where:** our house (the garden if it\'s sunny)'],
  ['**Answer:** RSVP to Mr Bassam by 12 December', '**Answer:** just tell us by Thursday – and no big presents please!'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the five things (who · what · when · where · answer by).'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Invent an event of your own: a family celebration, an opening, a class party, a graduation. Invite your partner **by phone** and give them all five pieces of information. They ask about anything you forgot.'));
out.push(p('**b**  Now your partner invites you – and this time you **can\'t come**. Say no properly: thank them, give a real reason, and send good wishes.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Samir invited me to his sister\'s graduation party on Saturday the 7th at five, at their house in Jaramana. He asked me to answer by Wednesday. I said I\'m afraid I can\'t come, because I work until seven on Saturdays, but I\'m going to send a card and I hope they have a wonderful evening._'));
out.push(p('**Listener task:** did your classmate give all five pieces of information? What was missing?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two invitations and the two replies. Answer the questions.'));
out.push(model([
  '**1 · The card (formal)**',
  'Mr and Mrs Fouad Dabbagh',
  'are pleased to invite you to the wedding of their daughter',
  '**Rasha**  and  **Mr Samer Khoury**',
  'on Friday 24 October at 6.00 pm',
  'at the Rose Hall, Al-Hamra Street, Homs',
  'We look forward to seeing you.   RSVP by 17 October · 031 442 8800',
  '**2 · The message (friendly)**',
  'Hi everyone! 🎉 Jana is four on Saturday and we\'re having a small party at our house at four o\'clock. Come and eat cake with us. The garden is ready if the weather is kind. Please no big presents – she\'s four! Just tell me by Thursday so I know how much cake to make. Rana',
  '**3 · Hiba\'s reply for the class (formal)**',
  'Dear Mr and Mrs Dabbagh,',
  'Thank you very much for your kind invitation to Rasha and Samer\'s wedding.',
  'We will be pleased to attend. Six of us are coming from Damascus and we will arrive at about six o\'clock.',
  'We wish Rasha and Samer every happiness.',
  'Best regards, Hiba Karam (Class 4B, Al-Yasmin Centre)',
  '**4 · Lina\'s reply to Rana (friendly)**',
  'Of course we\'re coming! 🎂 Tell Jana that Auntie Lina is bringing the balloons and nothing else, as ordered. See you at four!',
]));
out.push(item('1', 'Which two words tell you that text 1 is formal?'));
out.push(item('2', 'What does Hiba add that the card didn\'t ask for?'));
out.push(item('3', 'Why does Rana ask people to answer by Thursday?'));
out.push(writers([
  'A **formal reply**: _Dear…_ → **thank them** → **yes or no clearly** → **how many people / when you arrive** → **good wishes** → _Best regards_ + your name (+ who you are).',
  'A **friendly reply**: one or two lines, a joke is fine, but **still answer the question** (how many of you, and when).',
  'Match the register: a card that says _We are pleased to invite you_ gets _We will be pleased to attend_, not _Count me in_.',
  'Never leave out the **number of people**. The family is counting chairs and food.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**A formal reply.**   Dear ______________,   Thank you very much for ______________.   We ______________. ______ of us are coming, and we ______________.   We wish ______________.   Best regards, ______________'));
out.push(p('**A friendly reply.**   ______________! ______________. See you ______________!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Formal reply: no contractions, _Dear… / Best regards_', 'A clear yes or no, and how many people', 'Good wishes at the end']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your formal sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **an invitation and a reply** (60 words or more in total): **(a)** invite the class to a real or invented event – give all five pieces of information; **(b)** then write the reply you would like to receive. Choose formal or friendly, and keep the same register in both.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s invitation as a guest. ★ _Everything is clear – I know where to go._  ✓ _You didn\'t say by when I have to answer._  ? _Can I bring my sister?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two invitations are read aloud. Could you answer them with no more questions?'));
out.push(hw('Write a reply that says **no** (30+ words) to your partner\'s invitation: thank them, give a real reason, send good wishes, and offer one thing you can do instead.'));

// ======================= 12.3 =======================
out.push(pb());
out.push(h2('12.3  Congratulations!'));
out.push(p('**Function:** good wishes and congratulations   ·   **Grammar:** _I hope…_ ; _Wishing you…_ ; fixed phrases   ·   **Pronunciation:** word stress – con·gra·tu·**la**·tions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say in English for these? _a birthday · a wedding · a new baby · a new job · passing an exam · a new house · a feast_'));
out.push(board('Congratulations!', 'Wishing you every happiness'));
out.push(p('**b**  In your language, what do you say when somebody buys something new, or comes back from a journey? Is there an English phrase for it?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many pieces of good news are there?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** What is Nour\'s news?   **2** What does Ms Huda ask the class to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.5  Good news in class', [
  ['Ms Huda', 'Before we start, we have some news. Nour, would you like to tell them?'],
  ['Nour', 'I finished my training at TechCare. From Sunday I\'m a junior technician – a real contract.'],
  ['Class', 'Congratulations! · Mabrouk! · Well done, Nour!'],
  ['Omar', 'Congratulations, Nour. You worked very hard for that.'],
  ['Nour', 'Thank you. I was so nervous on Thursday.'],
  ['Ms Huda', 'And there\'s more. Hiba\'s cousin is getting married on the 24th, and the whole class is invited.'],
  ['Lina', 'Congratulations to your cousin! Give her our best wishes.'],
  ['Hiba', 'I will. Thank you.'],
  ['Ms Huda', 'So, two things to learn today. First: in English we say "Congratulations" for something a person **did** – an exam, a job, a new house.'],
  ['Omar', 'And for a wedding?'],
  ['Ms Huda', 'For a wedding we usually say "Congratulations" to the couple and "Best wishes" or "We wish you every happiness". For a new baby: "Congratulations" to the parents.'],
  ['Lina', 'And if somebody is ill?'],
  ['Ms Huda', 'Then it isn\'t congratulations – it\'s "Get well soon". Different box! Now, everybody: write one line for Nour and one for Hiba\'s cousin.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Good wishes – choose the right one**',
  table(['Occasion', 'You say', 'You write (card or message)'], [
    ['Birthday', 'Happy birthday! · Many happy returns!', 'Wishing you a wonderful year. · Have a lovely day!'],
    ['Wedding / engagement', 'Congratulations! · Best wishes!', 'We wish you every happiness. · Congratulations to you both.'],
    ['New baby', 'Congratulations!', 'Congratulations on your beautiful news. · Welcome to the world, little one.'],
    ['New job / exam / graduation', 'Congratulations! · Well done!', 'Congratulations – you worked very hard for this. · Well done, and good luck in the new job.'],
    ['A feast / holiday', 'Happy Eid! · Happy New Year!', 'Wishing you and your family a happy Eid.'],
    ['⚠ Somebody is ill or sad', '**Not** congratulations!', 'Get well soon. · I\'m very sorry to hear that. (Unit 10)'],
  ], [1.1, 1.3, 1.8]),
  '**Grammar – I hope / Wishing you**',
  '**I hope** + present simple: I hope you **have** a wonderful day. · I hope everything **goes** well.',
  '**Wishing you** + noun: Wishing you **every happiness**. · Wishing you **a lovely year**.',
  '**Congratulations on** + noun or -ing: Congratulations **on your new job**. · Congratulations **on passing** your exam.',
  '**Answering good wishes:** Thank you! · Thank you very much. · That\'s very kind of you. · Thank you – and the same to you! (for a feast)',
  '**Practise:** What do you say?  1 Your friend passed his driving test. ______  2 Your neighbour has a new baby. ______  3 It\'s the first day of the Eid. ______  4 Your colleague is in hospital. ______  5 Your cousin is getting married tomorrow. ______',
  '**Useful phrases:** Would you like to tell them? · You worked very hard for that. · Give her our best wishes. · I was so nervous. · Different box!',
  '**Pronunciation.** 🔊 **Track 12.6** Stress: con·gra·tu·**LA**·tions · **HAP**·py **BIRTH**·day · best **WISH**·es. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a situation from the card; B gives the right good wishes **and one extra sentence**. A answers. Then swap cards.'));
out.push(table(['Situation card A', 'Situation card B'], [
  ['Your colleague passed a difficult exam.', 'Your neighbour\'s daughter is getting married.'],
  ['Your cousin moved into a new flat.', 'Your friend\'s father came home from hospital.'],
  ['It\'s your teacher\'s birthday.', 'Your colleague is starting a new job tomorrow.'],
  ['Your friend\'s sister had a baby boy.', 'It\'s the first day of a feast.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the phrase they used and the extra sentence. Was it the right phrase for that situation?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner **one real piece of good news** from your family, your work or your studies – this month or this year. Your partner congratulates you properly and asks **two** questions.'));
out.push(p('**b**  Now go round the class: collect good news from **four** people and give each one the right good wishes.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what you collected:  _Nour finished her training and she has a contract now – congratulations, Nour! Samir\'s brother is getting married in the spring, so best wishes to him. Hiba moved into a new flat last month, and Fadi\'s daughter started school this year – well done to her!_'));
out.push(p('**Listener task:** who has the biggest news in this class?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four cards. Answer the questions.'));
out.push(model([
  '**1 · To Nour (new job)**',
  'Dear Nour,',
  'Congratulations on your new contract! We all know how hard you worked this year, and nobody in this class is surprised.',
  'Well done, and good luck on Sunday.',
  'From everybody in 4B',
  '**2 · To Rasha and Samer (wedding)**',
  'Dear Rasha and Samer,',
  'Congratulations to you both on your wedding. We wish you every happiness, and a home full of laughter.',
  'With our warmest wishes, Class 4B, Al-Yasmin Centre',
  '**3 · To Jana (fourth birthday)**',
  'Happy birthday, Jana! You are four today – that\'s very old. 🎂 I hope you have a wonderful day and a lot of cake. From Auntie Lina',
  '**4 · To a colleague at the feast**',
  'Dear Mr Khaled,',
  'Wishing you and your family a very happy Eid. I hope you have a restful few days with the people you love.',
  'Best regards, Lina',
]));
out.push(item('1', 'Which card is for a child? How can you see that?'));
out.push(item('2', 'Which card mentions hard work, and why is that a good idea?'));
out.push(item('3', 'Which two cards are from a group, not one person?'));
out.push(writers([
  'A good-wishes card: **Dear + name** → **the good wishes phrase** → **one personal sentence** (what you know about them) → **a hope for the future** → **your name** (or "from everybody in…").',
  'The **personal sentence** is what makes a card real: _We all know how hard you worked this year._ Without it, every card is the same card.',
  'Keep a child\'s card **short, warm and a little funny**. Keep a wedding or a feast card **warm and calm**.',
  'Never mention a problem in a congratulations card ("at last!", "after all those failed exams"). Save it for another day.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______________,   Congratulations on ______________! ______________.   I hope ______________.   ______________, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'The right phrase for this occasion', 'One personal sentence about this person', 'A hope for the future, and a good ending']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your personal sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **three short cards** (60 words or more in total) to three different people: one for something somebody **did** (exam, job, new home), one for a **family** occasion (wedding, baby, birthday), and one for a **feast or holiday**. Make each one sound different.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s three cards as the three people. ★ _This card is really for me._  ✓ _Card 2 could be for anybody – add something personal._  ? _Is "congratulations" right here?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('The class chooses the warmest card in the room. Then send the real ones!'));
out.push(hw('Write a card (30+ words) to somebody in **this class** for something real they did this year. Give it to them in the next lesson.'));

// ======================= 12.4 =======================
out.push(pb());
out.push(h2('12.4  What should I bring?'));
out.push(p('**Function:** asking and giving advice about presents   ·   **Grammar:** _should_ + _Do you think…?_ ; _It\'s for…_   ·   **Pronunciation:** polite intonation in questions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do people usually give in your country for: a wedding · a new baby · a new house · a birthday · a first visit to somebody\'s home?'));
out.push(board('What should I bring?', 'Present ideas: sweets, flowers, something for the house'));
out.push(p('**b**  Is it a good present or not? Why? _money · flowers · a plant · sweets · a photo frame · something you made · a voucher_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do they decide to give?   **A** money   **B** something for the house   **C** flowers'));
out.push(p('**b**  Listen again. **1** Why doesn\'t Omar want to give money?   **2** What does Ms Huda suggest?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.7  A present from the class', [
  ['Lina', 'So – the wedding. What should we bring?'],
  ['Hiba', 'Here most people give money in an envelope. It\'s normal and it really helps a young couple.'],
  ['Omar', 'I know, but we\'re eighteen people. Eighteen small envelopes is strange. Do you think we should give one present from everybody?'],
  ['Lina', 'That\'s better. Something for the house?'],
  ['Hiba', 'They have everything, honestly. Her mother bought half of Homs.'],
  ['Ms Huda', 'Can I suggest something? Omar is photographing the engagement party. What about a photo album – the pictures from that evening, printed, with a card from all of us?'],
  ['Lina', 'Oh, that\'s lovely.'],
  ['Omar', 'I can print twenty or thirty. And I can finish it before the 24th.'],
  ['Hiba', 'Nobody else is going to give them that. Everybody gives money or glasses.'],
  ['Lina', 'And we can all sign the first page.'],
  ['Ms Huda', 'Shall we say two thousand each for the printing?'],
  ['Omar', 'Less. Let me check the prices first.'],
  ['Hiba', 'Perfect. One present, one card, eighteen names. Much better than eighteen envelopes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for advice about a present**',
  'What **should** I bring? · What **should** we get her? · **Do you think** we should give money? · **Is it OK to** bring sweets? · **What do people usually give** here?',
  '**Giving advice**',
  table(['Recommending', 'Softening it', 'Saying no to an idea politely'], [
    ['You **should** bring something small. · **Why don\'t you** give a plant? · **What about** a photo album?',
     '**Maybe** flowers? · **I think** sweets are always safe. · It **depends on** the family.',
     'I know, **but**… · **Honestly**, they have everything. · That\'s a nice idea, **but** it\'s a bit expensive.'],
  ], [1.3, 1.3, 1.4]),
  '**What about / Why don\'t we:** _What about **a photo album**?_ (+ noun) · _What about **asking** her mother?_ (+ -ing) · _Why don\'t we **ask** her mother?_ (+ base verb)',
  '**Talking about a present:** It\'s **for** the house. · It\'s **from** all of us. · It\'s **something** she can use. · It isn\'t expensive, but it\'s **personal**.',
  '**Practise:** Complete.  1 What ______ I bring to the party?  2 ______ about a plant for the new flat?  3 Why ______ we give one present from everybody?  4 Do you ______ we should bring the children?  5 It\'s something ______ he can use every day.',
  '**Useful phrases:** Can I suggest something? · That\'s lovely. · Nobody else is going to give them that. · Let me check the prices first. · Much better than…',
  '**Pronunciation.** 🔊 **Track 12.8** A question with a falling voice can sound hard. Let your voice **go up** at the end: _Do you think we should give money?↗_ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the situation card and asks for advice; B gives **two** ideas, A says no to the first (politely!) and they agree on the second. Then swap.'));
out.push(dlg(null, [
  ['A', 'I need some advice. I\'m going to __________. What should I bring?'],
  ['B', 'What about __________?'],
  ['A', 'I know, but __________.'],
  ['B', 'Then why don\'t you __________?'],
  ['A', 'That\'s a good idea. Do you think __________?'],
  ['B', '__________.'],
  ['A', 'Perfect. __________.'],
]));
out.push(table(['Advice card A', 'Advice card B'], [
  ['Your manager invited you to his house for the first time. You don\'t know the family.', 'Your friend\'s sister had a baby last week and you are visiting tomorrow.'],
  ['A colleague is leaving the company after ten years.', 'Your old teacher is retiring and the class wants one present.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the two ideas, and why the first one was refused.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a **real** occasion coming up for you – a wedding, a new baby, a birthday, a visit to somebody\'s house. Ask your partner for advice. They must give at least **two** ideas and ask about your budget.'));
out.push(p('**b**  Now a harder one: a **foreign visitor** is going to a Syrian family\'s home for dinner for the first time. What should they bring, and what should they **not** bring? Agree on three rules together.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your three rules for the visitor:  _We think a visitor should bring sweets from a good shop – that\'s always safe and everybody shares them. They shouldn\'t bring something very expensive, because then the family feels they have to give something back. And they should bring something small for the children if there are children – that is the thing people remember._'));
out.push(p('**Listener task:** write the rules you agree with. Does the class agree on all of them?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three messages from the class group. Answer the questions.'));
out.push(model([
  '**Omar:** Everybody – about the wedding present. Lina, Hiba and I talked after the lesson and we have an idea. Instead of eighteen envelopes, what about **one present from all of us**: a photo album from the engagement party, printed, with a card we all sign? 📷',
  '**Lina:** I think it\'s a lovely idea. It\'s personal, nobody else is going to give them that, and it isn\'t expensive. The only problem is the time – Omar, can you really finish it before the 24th?',
  '**Omar:** Yes. I\'m photographing on the 17th and the printing takes three days. The cost is about 1,500 each if everybody pays. If somebody can\'t pay this month, that\'s absolutely fine – just sign the card. Please answer with 👍 or 👎 by Thursday evening so I can order the album.',
]));
out.push(item('1', 'What three reasons does Lina give for liking the idea?'));
out.push(item('2', 'What is her one worry?'));
out.push(item('3', 'How does Omar make it easy for somebody who has no money this month?'));
out.push(writers([
  'A message suggesting a group present: **what the present is** → **why it\'s a good idea** (two or three reasons) → **how much and by when** → **what to do if you can\'t pay** → **how to answer and by when**.',
  'Always give people a **quiet way out**: _If somebody can\'t pay this month, that\'s absolutely fine._ Money in a group is a sensitive thing.',
  'Finish with **one clear action and a date**: _answer with 👍 by Thursday evening_.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi everyone! About ______________. What about ______________ from all of us?   I think it\'s a good idea because ______________ and ______________.   It costs about ______ each. If ______________, that\'s absolutely fine.   Please answer by ______________ so I can ______________.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_What about_ + noun or -ing; _Why don\'t we_ + base verb', 'Reasons, the cost, and a quiet way out', 'One clear action with a date']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a group message (60 words or more) suggesting a present for a **real or invented** occasion: a colleague leaving, a teacher retiring, a wedding, a new baby, a neighbour who helped everybody. Give your reasons and make it easy to say yes.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Reply to your partner\'s message as a member of the group. ★ _I\'m in – great idea._  ✓ _Can you say by when we should pay?_  ? _Can I give something instead of money?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. Which one would get the fastest "yes" from this class, and why?'));
out.push(hw('Write the message you would send **three days later** (30+ words): thank the people who answered, say how much money you have, and remind the others politely.'));

// ======================= 12.5 =======================
out.push(pb());
out.push(h2('12.5  While we were waiting, the lights went out'));
out.push(p('**Function:** telling the story of a day you remember   ·   **Grammar:** past continuous with _when / while_   ·   **Pronunciation:** _was / were_ weak forms'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a celebration that didn\'t go as planned – rain, no electricity, somebody late, too much food, not enough chairs. Tell the class in **one sentence**.'));
out.push(board('While we were waiting, the lights went out.', 'It was the longest ten minutes of the evening.'));
out.push(p('**b**  Which happened first?  _We **were eating** when my uncle **arrived**._  ·  _When the music **started**, everybody **stood up**._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened at the wedding?   **A** the bride was late   **B** the electricity went off   **C** it rained'));
out.push(p('**b**  Listen again. **1** What were people doing when it happened?   **2** What did Omar do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.9  The night of the wedding', [
  ['Ms Huda', 'So! Tell me about Friday. How was the wedding?'],
  ['Lina', 'Unforgettable. But not for the normal reasons.'],
  ['Ms Huda', 'Oh dear.'],
  ['Hiba', 'Everything was perfect at the beginning. We arrived at six, the hall was beautiful, my cousin looked wonderful. And then, while we were waiting for the dinner, the electricity went off. The whole street.'],
  ['Ms Huda', 'The whole street!'],
  ['Lina', 'Completely dark. Two hundred people, and you could hear one baby crying somewhere.'],
  ['Hiba', 'My uncle was making a speech when it happened. He stopped in the middle of a sentence.'],
  ['Omar', 'And then somebody started singing. I think it was Rasha\'s grandmother.'],
  ['Lina', 'Everybody joined in. In the dark, two hundred people singing – I will never forget it.'],
  ['Omar', 'While they were singing, I ran to the car and brought my camera light. It isn\'t strong, but it was something.'],
  ['Hiba', 'When the lights came back twenty minutes later, nobody was angry. Everybody was laughing.'],
  ['Ms Huda', 'And the dinner?'],
  ['Hiba', 'Cold. Nobody cared. It was the best part of the evening.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – past continuous (was / were + -ing)**',
  'We use it for a **longer action** that was happening, and the **past simple** for the **short action** that interrupted it.',
  table(['The long action (past continuous)', 'The short action (past simple)'], [
    ['**While** we **were waiting** for the dinner,', 'the electricity **went off**.'],
    ['My uncle **was making** a speech', '**when** it **happened**.'],
    ['**While** they **were singing**,', 'I **ran** to the car.'],
  ], [1.4, 1.2]),
  '**Forms:** I / he / she / it **was** waiting · you / we / they **were** waiting · He **wasn\'t** listening. · **Were** you dancing? – Yes, I was. / No, I wasn\'t. · **What were** you **doing**?',
  '**when** + past simple (the short action): _**when** the lights **came** back_.   **while** + past continuous (the long action): _**while** we **were waiting**_.',
  '⚠ Both parts can be past simple if the actions follow each other: _When the lights came back, everybody **clapped**._',
  '**Practise:** Put the verbs in the right tense.  1 While we ______ (eat), my uncle ______ (arrive).  2 I ______ (take) photos when the music ______ (start).  3 What ______ you ______ (do) when the lights ______ (go) off?  4 She ______ (not listen) – she ______ (talk) to her sister.',
  '**Useful phrases:** Unforgettable. · But not for the normal reasons. · Oh dear. · He stopped in the middle of a sentence. · Nobody cared. · I will never forget it.',
  '**Pronunciation.** 🔊 **Track 12.10** _was_ and _were_ are weak in the middle of a sentence: /wəz/ /wə/ — _We were WAITing._ _He was MAKing a speech._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A tells the story on the card using **while** and **when** at least twice. B reacts (_Oh dear! · Really? · What did you do?_) and asks **three** questions. Then swap cards.'));
out.push(table(['Story card A – the birthday', 'Story card B – the graduation'], [
  ['6.00 we were decorating the room', '10.00 we were waiting outside the hall'],
  ['→ the cake fell on the floor', '→ it started to rain'],
  ['7.00 the guests were arriving', '11.00 my brother was getting his certificate'],
  ['→ we were still cleaning the kitchen', '→ my phone battery died, no photos'],
  ['8.00 everybody was laughing about it; we bought sweets instead', '12.00 a man we didn\'t know sent us all his photos'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **two** sentences from the story with _while_ or _when_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about a **real** celebration you remember – a wedding, a feast, a birthday, a graduation, a first day at work. Say: where you were and what people were doing, what happened, and how it finished. Use _while_ and _when_. Your partner asks **four** questions and reacts. Then swap, and tell a second partner the same story – faster and better.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s story:  _Fadi was at his sister\'s graduation. While the family was waiting outside the hall, it started to rain and everybody ran inside. His brother was getting his certificate when Fadi\'s phone died, so they have no photos of the moment. But a man they didn\'t know was filming, and the next day he sent them everything._'));
out.push(p('**Listener task:** whose story is the funniest? Whose is the most beautiful?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lina\'s message to her sister. Answer the questions.'));
out.push(model([
  '**The wedding – you missed something 😄**',
  'Dear Rana,',
  'I\'m still laughing. You have to hear about Friday.',
  'Everything started perfectly. We arrived at six, the Rose Hall was full of flowers, and Rasha looked beautiful.',
  'Then, while we were waiting for the dinner, the electricity went off – the whole street. Two hundred people in the dark, and complete silence. Rasha\'s uncle was making a speech when it happened, and he stopped in the middle of a sentence!',
  'After a minute, somebody started singing, and everybody joined in. While they were singing, Omar ran to his car and brought his camera light. When the lights came back twenty minutes later, nobody was angry – everybody was laughing.',
  'The dinner was cold and nobody cared. It was the best wedding I have been to.',
  'Next time, come with us!',
  'Love, Lina',
]));
out.push(item('1', 'What three things does Lina say about the beginning?'));
out.push(item('2', 'What was the uncle doing when the lights went off?'));
out.push(item('3', 'How does she finish the story?'));
out.push(writers([
  'A story message: **a title that makes them want to read** → **set the scene** (where, when, how it looked) → **then the problem** (_Then, while we were…_) → **what people did** → **how it finished** → **what you think about it now**.',
  'Set the scene with the **past continuous** and tell the events with the **past simple**. That is what makes a story sound like a story.',
  'One good detail beats five: _he stopped in the middle of a sentence_ · _you could hear one baby crying_.',
  'Finish with a **feeling**, not a fact: _It was the best wedding I have been to._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________**   Dear ______________,   You have to hear about ______________.   Everything started ______________. We arrived at ______, and ______________.   Then, while we were ______________, ______________. ______________ was ______________ when it happened.   ______________. While ______________, ______________.   When ______________, ______________.   It was ______________.   Love, ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_was / were_ + -ing for the long action; past simple for the short one', '_while_ + continuous, _when_ + simple', 'All parts: scene, problem, what people did, the end, your feeling']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your _while_ sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the story of a day you remember (70 words or more) – a celebration, a journey, a first day, a day when everything went wrong. Set the scene, tell what happened, and finish with how you feel about it now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I could see it – especially the part about…_  ✓ _Add what people were doing before it happened._  ? _What did your mother say afterwards?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Three stories are read aloud. The class votes: the funniest, the most surprising, the best ending.'));
out.push(hw('Rewrite **one paragraph** of your story (30+ words) adding **two** more past continuous sentences – what other people were doing at that moment.'));

// ======================= 12.6 =======================
out.push(pb());
out.push(h2('12.6  It\'s polite to take your shoes off'));
out.push(p('**Function:** explaining a custom to a visitor   ·   **Grammar:** _It\'s + adjective + to_ ; _You don\'t have to… but_   ·   **Pronunciation:** _don\'t have to_ /həftə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  A visitor is invited to a family home in your country for the first time. Write **five** things they should know.'));
out.push(board('It\'s polite to take your shoes off.', 'Customs: what to do and what to avoid'));
out.push(p('**b**  True for your country? _You should arrive exactly on time. · You must refuse food twice before you accept. · You take a present for the children. · You stay two hours._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Mr Lang going?   **A** to a restaurant   **B** to Omar\'s family home   **C** to a wedding'));
out.push(p('**b**  Listen again. **1** What time should he arrive?   **2** What does Lina say about saying no to food?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.11  Before the visit', [
  ['Mr Lang', 'Omar\'s family invited me for lunch on Friday. I\'m a little nervous – tell me the rules.'],
  ['Lina', 'There aren\'t really rules, but there are customs. First: they said one o\'clock, so arrive at about one fifteen.'],
  ['Mr Lang', 'Late? In Germany that\'s terrible.'],
  ['Lina', 'Here, exactly on time means the family is still cooking. Fifteen minutes is perfect. Half an hour is also fine.'],
  ['Mr Lang', 'Good. And a present?'],
  ['Lina', 'You don\'t have to bring anything, but it\'s nice to take sweets from a good shop, or something small for the children. Not something expensive – then they feel uncomfortable.'],
  ['Mr Lang', 'Shoes? I\'ve heard about the shoes.'],
  ['Lina', 'Look at the door. If there are shoes near the door, take yours off. In most homes it\'s polite to take them off, and nobody will tell you.'],
  ['Mr Lang', 'And the food? I can\'t eat as much as Syrians eat.'],
  ['Lina', '(laughs) That\'s the difficult part. They will put food on your plate again and again. It\'s normal to say "no thank you, it was delicious" two or three times – and it\'s normal for them to continue.'],
  ['Mr Lang', 'So how do I stop?'],
  ['Lina', 'You put your hand on your heart and smile. It always works. And one more thing: don\'t leave immediately after the food. Stay for coffee – the coffee is the real visit.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – It\'s + adjective + to + verb**',
  'It\'s **polite to** take your shoes off. · It\'s **normal to** arrive fifteen minutes late. · It\'s **nice to** bring sweets. · It **isn\'t** usual **to** leave after the food. · It\'s **better to** ask than to guess.',
  'Useful adjectives: _polite · impolite · normal · usual · nice · important · better · difficult · easy_',
  '**Grammar – you don\'t have to … but …**',
  'This is how you explain a custom that is **not a rule**: _You **don\'t have to** bring anything, **but** it\'s nice to take sweets._ · _You **don\'t have to** stay late, **but** people usually stay for coffee._',
  table(['It\'s a rule', 'It\'s a custom (not a rule)', 'Don\'t do it'], [
    ['You **have to** take your shoes off in the mosque.', 'You **don\'t have to** bring a present, **but** it\'s nice to. · People **usually** arrive a little late.', 'It **isn\'t** polite **to** leave straight after the food. · You **shouldn\'t** bring something very expensive.'],
  ], [1.2, 1.6, 1.4]),
  '**Practise:** Make sentences.  1 (polite / take your shoes off) ______  2 (normal / arrive fifteen minutes late) ______  3 (not usual / leave after the food) ______  4 (you don\'t have to / bring a present / but / nice / sweets) ______',
  '**Useful phrases:** Tell me the rules. · There aren\'t really rules, but there are customs. · That\'s the difficult part. · It always works. · And one more thing…',
  '**Pronunciation.** 🔊 **Track 12.12** _have to_ = /hæftə/ and _don\'t have to_ = /dəʊnt ˈhæftə/. Listen and repeat: _You don\'t have to bring anything._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the visitor with the situation card; B explains the customs. Use **It\'s + adjective + to** three times and **you don\'t have to… but…** once. Then swap.'));
out.push(table(['Situation card A', 'Situation card B'], [
  ['You are invited to a family home for lunch for the first time.', 'You are going to a wedding and you know nobody except one friend.'],
  ['You are visiting a colleague who is ill, at his home.', 'You are invited to a family\'s house during a feast.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **three** pieces of advice. Which one would surprise a visitor most?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Your partner is a visitor from another country who is coming to **your** home next Friday. Explain everything they need to know: the time, the present, the shoes, the food, the coffee, when to leave.'));
out.push(p('**b**  Now ask your partner: what is **different** in another country they know, or have read or heard about? Find **two** differences and discuss them – neither one is wrong, they are just different.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _I explained a first visit to a Syrian home. I said it\'s normal to arrive about fifteen minutes late, and it\'s polite to take your shoes off if you see shoes at the door. You don\'t have to bring a present, but it\'s nice to bring sweets. Hiba told me that in some places people arrive exactly on time and the visit is shorter – so a visitor from there might leave right after the food, and here that looks cold._'));
out.push(p('**Listener task:** write one custom that is the same everywhere, and one that is different.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Lina wrote for the centre\'s website. Answer the questions.'));
out.push(model([
  '**VISITING A SYRIAN HOME – a short guide for our foreign guests**',
  '**The time.** If the family says one o\'clock, arrive at about one fifteen. It\'s normal to be a little late, and exactly on time usually means the family is still cooking.',
  '**A present.** You don\'t have to bring anything, but it\'s nice to bring sweets from a good shop, or something small for the children. It isn\'t a good idea to bring something very expensive, because then the family feels they have to give something back.',
  '**At the door.** Look at the floor near the door. If you see shoes there, it\'s polite to take yours off. Nobody is going to tell you.',
  '**The food.** Your hosts will put food on your plate again and again. It\'s normal to say "no thank you, it was delicious" two or three times, and it\'s normal for them to continue. Put your hand on your heart and smile – it always works.',
  '**After the food.** Don\'t leave immediately. It isn\'t polite to go straight after lunch: stay for coffee and conversation. The coffee is the real visit.',
  '**And finally.** Nobody is going to be angry if you make a mistake. People here are happy that you came.',
]));
out.push(item('1', 'Why shouldn\'t a visitor bring an expensive present?'));
out.push(item('2', 'How does the guide tell you to stop the food politely?'));
out.push(item('3', 'Why is the last paragraph important for a nervous visitor?'));
out.push(writers([
  'A customs guide: **a short section for each moment** (the time · a present · at the door · the food · after the food) → **a kind last line**.',
  'Explain the **reason**, not just the rule: _because then the family feels they have to give something back_. A reason is easy to remember; a rule is easy to forget.',
  'Use **It\'s normal / polite / nice to…** and **You don\'t have to… but…**, not _You must_ everywhere. Most customs are not laws.',
  'End by taking the pressure off: _Nobody is going to be angry if you make a mistake._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**VISITING ______________ – a short guide for ______________**   **The time.** ______________. It\'s normal to ______________.   **A present.** You don\'t have to ______________, but ______________. It isn\'t a good idea to ______________, because ______________.   **______________.** It\'s polite to ______________.   **The food.** ______________.   **And finally.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_It\'s + adjective + to + verb_ (not _It\'s polite taking_)', '_You don\'t have to… but…_ used at least once', 'A reason for each custom, and a kind last line']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one custom before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short customs guide (70 words or more) for a visitor to your country, your city or your village. Choose **one** situation: a family home · a wedding · a feast · an office · a market. Give reasons.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s guide as a **nervous visitor**. ★ _This makes me feel ready._  ✓ _Add why, not only what._  ? _What happens if I make a mistake?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the guides together: this is our **Class 4B guide for visitors to Syria**. Which custom is the hardest to explain?'));
out.push(hw('Write about **one custom from another country** (30+ words) that you find interesting or surprising – and say what a Syrian visitor there should know.'));

// ======================= 12.7 =======================
out.push(pb());
out.push(h2('12.7  Review & Mediate: The invitation and the programme'));
out.push(p('**Function:** explaining an invitation and a programme to a guest   ·   **Recycling:** Units 1–12   ·   **Exam practice:** A2 Key Reading Part 4, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** When the guests will arrive, we eat.  **2** It\'s polite taking your shoes off.  **3** While we ate, the lights went off.  **4** Congratulations for your new job.  **5** What about to give a photo album?  **6** Everybody clean the house before the feast.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the invitation and the programme that came with it.'));
out.push(box(null, [
  '**AL-YASMIN CENTRE · END-OF-YEAR EVENING**',
  'We are pleased to invite you and your family to our end-of-year evening',
  'on **Thursday 19 December at 5.30 pm**, in the big hall (second floor).',
  'RSVP to Mr Bassam by 12 December · 011 332 4455',
  '**Programme**',
  '5.30  Doors open · tea and coffee in the corridor',
  '6.00  Welcome from the director (10 minutes)',
  '6.15  Certificates – levels A1 and A2',
  '7.00  Short break · photographs',
  '7.20  Certificates – levels B1 and B2',
  '8.00  Music from the centre\'s group, and dinner',
  '**Please note:** the certificates for each level take about 45 minutes. If you only want to see your own level, come 15 minutes before it starts. Children are welcome. There is no parking in front of the building – use the street behind. Entrance is free, but every family should bring one dish for the dinner.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Nour explains the evening to her uncle on the phone. What time does she tell him to come, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.13  Explaining the evening', [
  ['Uncle', 'Nour, I got your message. What is this evening exactly?'],
  ['Nour', 'It\'s the centre\'s end-of-year evening, on Thursday the 19th of December. The doors open at half past five.'],
  ['Uncle', 'And it finishes when?'],
  ['Nour', 'After eight – there\'s music and dinner at eight, so about ten, I think.'],
  ['Uncle', 'Four hours! I\'m not sitting in a hall for four hours.'],
  ['Nour', '(laughs) You don\'t have to. My level is A2, and the A2 certificates are at a quarter past six. The paper says come fifteen minutes before your level, so if you come at six, that\'s perfect.'],
  ['Uncle', 'Six. Good. Is there a car park?'],
  ['Nour', 'No – not in front of the building. You have to use the street behind.'],
  ['Uncle', 'Fine. Does it cost anything?'],
  ['Nour', 'The evening is free, but every family brings one dish for the dinner. My mother is making kibbeh, so that\'s our dish – you don\'t have to bring anything.'],
  ['Uncle', 'And can I bring the children?'],
  ['Nour', 'Yes, children are welcome. There\'s a break at seven for photos – bring them then, they\'ll love it.'],
  ['Uncle', 'Six o\'clock Thursday. I\'ll be there. Congratulations, by the way. Your mother told me about the contract.'],
]));
out.push(sp());
out.push(box('Language box – explaining an invitation and a programme', [
  'Give the **five things** first: **what · when · where · how to answer · how much**.',
  'Then read the programme for the person, not to them – tell them **the time that matters to them**: _My level is at a quarter past six, and the paper says come fifteen minutes before, so come at six._',
  'Explain the **practical conditions**, which is where people get it wrong:',
  '_No parking in front_ → **You have to use the street behind.**   _Entrance free, one dish per family_ → **It\'s free, but every family brings one dish.**   _Children welcome_ → **You can bring the children.**',
  'Say what they **don\'t** have to do: _You **don\'t have to** stay four hours._ · _You **don\'t have to** bring anything – my mother is making our dish._',
  '**Useful phrases:** What is this evening exactly? · It finishes when? · You don\'t have to. · that\'s perfect · I\'ll be there.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has an invitation card (don\'t show it!). A explains it to B and C, who ask about the practical things (time, parking, children, money, what to bring). They decide when to arrive and what to take. Then change roles with the other card.'));
out.push(table(['Event card A – A school open day', 'Event card B – A neighbourhood iftar'], [
  ['Saturday 8 March, 9.00–13.00', 'Saturday, after the sunset prayer, in the street'],
  ['9.00 classrooms open · 10.30 the children sing · 11.30 tea with the teachers · 12.30 photographs', 'Everybody brings one dish · the tables are ready at 5.30 · the food starts after the prayer'],
  ['Parents of A2 children: the singing is the important part', 'Families with children: there is a corner with games'],
  ['No cars in the school street · free · tea and sweets provided', 'Free · bring your own chairs if you can · finishes about ten'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write when they decided to arrive, what they are taking, and one condition they remembered.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** event you know about: a family celebration, a conference or course, a school event, a religious evening, a wedding in your family. Explain it to your partner so completely that they could go without asking anybody else. They must ask about anything you leave out. Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Samir explained his nephew\'s graduation party. It\'s on Saturday the 14th at five, at their house in Jaramana. It\'s free, obviously, but everybody takes something sweet. There\'s no parking in their street, so you leave the car on the main road and walk five minutes. Children are welcome. I decided I would go at about half past five, because nothing starts at five, and I would take sweets from the shop near my house._'));
out.push(p('**Listener task:** did they explain all the conditions? What did they forget – parking, money, what to bring, what time it really starts?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 4)', 7));
out.push(p('Read the text and choose **A**, **B** or **C** for each question.'));
out.push(model([
  '**A WEDDING IN HOMS**',
  'Last month our English class went to a wedding together. Our classmate Hiba invited us – her cousin Rasha was getting married – and eighteen of us travelled from Damascus by bus.',
  'We discussed the present for two weeks. Here, most guests give money in an envelope, and for a family that is very useful. But eighteen envelopes from one class seemed strange, so our teacher suggested something else: our classmate Omar was photographing the engagement party the week before, so we printed his photographs in an album and we all signed the first page. It cost each of us very little, and nobody else gave them anything like it.',
  'The wedding itself was unforgettable, but not for the usual reasons. We arrived at six and the hall was beautiful. Then, while we were waiting for the dinner, the electricity went off – not only in the hall, but in the whole street. Two hundred people sat in the dark. Rasha\'s uncle was making a speech and he stopped in the middle of a sentence.',
  'After a minute somebody started to sing, and then everybody was singing. Omar ran out to his car and came back with his camera light. When the electricity came back twenty minutes later, nobody was angry; everybody was laughing. The dinner was cold and nobody cared.',
  'On the bus home at two in the morning, we agreed: we will all forget the flowers and the food, but none of us will forget those twenty minutes in the dark.',
]));
[
  '**1**  Why did the class decide not to give money?     **A** They had no money.   **B** Eighteen separate envelopes seemed strange.   **C** The family asked them not to.',
  '**2**  Who had the idea of the photo album?     **A** Omar   **B** Hiba   **C** the teacher',
  '**3**  What was Rasha\'s uncle doing when the lights went out?     **A** eating dinner   **B** making a speech   **C** taking photographs',
  '**4**  What did Omar do during the twenty minutes?     **A** He sang with everybody.   **B** He went to get a light from his car.   **C** He phoned the electricity company.',
  '**5**  How did the guests feel when the lights came back?     **A** angry   **B** tired   **C** happy',
  '**6**  What does the writer say at the end?     **A** The food was the best part.   **B** They will remember the dark minutes most.   **C** They came home early.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend explaining the end-of-year evening (use the invitation and programme in Stage 2).'));
out.push(p('Hi ______!   The centre\'s end-of-year evening is on ______________ at ______________, in ______________. You have to answer ______________ by ______________.   Our level gets the certificates at ______________, so come at ______________.   It\'s free, but ______________. There\'s no parking ______________, so ______________. You can ______________ the children – there\'s a break at ______ for photos.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['The five things: what, when, where, answer by, cost', 'The time that matters to your friend, with the reason', 'The conditions: parking, one dish, children', 'Something they _don\'t have to_ do']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** is going to a celebration with your family next week.',
  'Write an email to Sam.  In your email:  •  say **what the celebration is and when it starts**  •  say **what he should bring**  •  tell him **one thing people do** that he should know.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Before the feast, everybody ___ the house.   a) clean   b) cleans   c) cleaning',
  '2  When the guests ___, we say "welcome".   a) will arrive   b) arrive   c) arriving',
  '3  It\'s polite ___ your shoes off.   a) take   b) to take   c) taking',
  '4  You ___ bring a present, but it\'s nice.   a) don\'t have to   b) mustn\'t   c) shouldn\'t',
  '5  While we ___ for the dinner, the lights went off.   a) waited   b) were waiting   c) are waiting',
  '6  My uncle was making a speech when it ___.   a) happened   b) was happening   c) happens',
  '7  Congratulations ___ your new job!   a) for   b) on   c) to',
  '8  What ___ giving one present from everybody?   a) about   b) if   c) we',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 12.14** Ms Huda talks about five people in the class. What is each person\'s news? Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'News'], [
  ['1  Nour ___', 'A  moved into a new flat'],
  ['2  Hiba ___', 'B  is going to be a grandmother'],
  ['3  Omar ___', 'C  got a work contract'],
  ['4  Lina ___', 'D  is travelling for the first time'],
  ['5  Fadi ___', 'E  had a cousin\'s wedding'],
  ['', 'F  passed a driving test'],
  ['', 'G  had a photograph in a newspaper'],
], [1, 2]));
out.push(dlg('Track 12.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish the year, let\'s remember the good news in this class. Nour finished her training at TechCare and she has a real contract now – she starts as a junior technician. Hiba went to her cousin Rasha\'s wedding in Homs last month, and she took all of us with her, which I think is the kindest thing anybody did this year. Omar has had a very good month: one of his photographs from the engagement party was in a newspaper in Homs. Lina and her family finally moved into the new flat in Mezzeh – after four months of waiting, she says the kitchen still has no door. And Fadi passed his driving test on the third try, and he told us the examiner was more nervous than he was.'],
]));
out.push(p('**C  Writing.** A visitor from another country is coming to a celebration in your family. Write them a message (40+ words): say what the celebration is, what time they should arrive, what to bring, and **one** custom they should know – with the reason.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 12)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe a celebration with _before_, _when_ and _after_',
  '☐ read an invitation and find the five things',
  '☐ reply to an invitation, formally and in a friendly way',
  '☐ give the right good wishes for each occasion',
  '☐ ask for and give advice about a present',
  '☐ tell the story of a day I remember with _while_ and _when_',
  '☐ explain a custom and give the reason for it',
  '☐ explain an invitation and a programme so somebody else can go without asking',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: THE END-OF-BOOK TEST', [
  'You have finished **Book 1** – twelve units and eighty-four cycles. The next pages are the **End-of-Book Test**: Reading (5 parts), Writing (2 parts), Listening (4 parts) and Speaking (2 parts), in the format of the Cambridge A2 Key exam.',
  'How to prepare: go through the **"I can…"** box at the end of every unit and find the lines you ticked 😐. Those are your five minutes of revision each evening this week – not the whole book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 12 · Student\'s Book');
