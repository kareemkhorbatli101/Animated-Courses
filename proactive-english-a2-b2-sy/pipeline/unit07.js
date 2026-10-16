// Proactive English A2 · Syria Edition · Book 1 · Unit 7 — Student's Book
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

out.push(h1('Unit 7  Free Time & Arrangements'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**7.1**  talk about what you can do and what you\'re good at',
  '**7.2**  talk about your arrangements for this week',
  '**7.3**  say no politely to an invitation',
  '**7.4**  agree a time and a place, and change an arrangement',
  '**7.5**  talk about what you prefer',
  '**7.6**  talk about what\'s on in your city',
  '**7.7**  Review & Mediate: plan an outing from leaflets',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Al-Yasmin Clubs** – the language centre now has three clubs: photography, cooking and football.',
  '**Dar Al-Fann Cultural Centre** – a small arts centre in the Old City (concerts, films, exhibitions).',
  '**Ziad** – Lina\'s brother (dentist). His daughter **Jana** is three.   ·   **Sara** – a classmate in 4B.',
], C.lyellow, C.orange));

// ======================= 7.1 =======================
out.push(pb());
out.push(h2('7.1  I\'m quite good at photography'));
out.push(p('**Function:** talking about abilities and hobbies   ·   **Grammar:** _can_; _could_ (past ability); _good at_ + -ing   ·   **Pronunciation:** _can_ /kən/ and _could_ /kʊd/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What can people in this class do? (swim, drive, cook, draw, play an instrument, fix things…) Your teacher writes the class\'s ideas on the board.'));
out.push(board('I can swim, but not very well.', 'I\'m good at drawing.'));
out.push(p('**b**  Complete: I can ______ very well. · I can\'t ______ at all. · I\'m good at ______. · I\'m not very good at ______.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which club does Omar join?   **A** cooking   **B** photography   **C** football'));
out.push(p('**b**  Listen again. **1** What could Omar do when he was a child?   **2** What is Sara good at?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.1  Club sign-up day at Al-Yasmin', [
  ['Mr Bassam', 'Good evening! Three clubs this term: photography, cooking and football. Which one for you?'],
  ['Omar', 'I\'m not sure. I can cook quite well, so maybe the cooking club isn\'t for me.'],
  ['Sara', 'Then come to the photography club with me!'],
  ['Omar', 'But I can\'t take good photos at all. My pictures are always dark.'],
  ['Sara', 'That\'s why it\'s a club – you learn! Are you good at anything with a camera?'],
  ['Omar', 'Well… when I was at school I could draw quite well. Does that help?'],
  ['Sara', 'Of course! Drawing and photography are both about light and shapes.'],
  ['Omar', 'OK, you win. What about you? Are you good at photography?'],
  ['Sara', 'I\'m quite good at taking photos of people, but I\'m not very good at buildings. I want to learn.'],
  ['Omar', 'And can you use the editing programs?'],
  ['Sara', 'No, I can\'t. But you work with computers – you can teach me!'],
  ['Omar', 'Deal. Mr Bassam, two for the photography club, please!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – can, could, good at**',
  table(['can (now)', 'could (in the past)', 'good at + -ing'], [
    ['I **can** swim. · She **can\'t** drive. · **Can** you cook? – Yes, I can.', 'When I was a child I **could** draw. · I **couldn\'t** swim at six.', 'I\'m **good at** cook**ing**. · He\'s **not very good at** draw**ing**.']], [1, 1, 1]),
  '**can / could + base verb**: _I can **swim**_, not ~~I can to swim~~. No -s: _She **can** drive_, not ~~She cans~~.',
  '**How well?** _very well · quite well · not very well · not… at all_: _I can cook **quite well**. I can\'t sing **at all**._',
  '**good at** + **noun** or **-ing**: _good at **English** · good at **speaking** English_.  ⚠ Not ~~good in~~.',
  '**Practise:** Complete with _can, can\'t, could, couldn\'t_ or _good at_.  1 I ______ play the oud – my uncle taught me.  2 When I was five I ______ read, but now I read every day.  3 She\'s very ______ cooking.  4 ______ you drive? – No, I ______.  5 He ______ swim at all – he\'s afraid of water.',
  '**Useful phrases:** I\'m not sure. · …, so maybe… · That\'s why… · Does that help? · OK, you win. · Deal.',
  '**Pronunciation.** 🔊 **Track 7.2** _can_ is weak /kən/ in sentences: _I can‿swim._  _can\'t_ is strong /kɑːnt/. _could_ /kʊd/ – short, like "good". Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is at the sign-up desk, B chooses a club. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Three clubs this term: __________. Which one for you?'],
  ['B', 'I\'m not sure. I can __________ quite well, so maybe __________ isn\'t for me.'],
  ['A', 'Then come to __________!'],
  ['B', 'But I can\'t __________ at all.'],
  ['A', 'That\'s why it\'s a club – you learn! Are you good at __________?'],
  ['B', 'Well… when I was __________ I could __________.'],
  ['A', 'That helps! So, __________?'],
  ['B', 'OK, you win!'],
]));
out.push(table(['Card A – you…', 'Card B – you…'], [['can cook well · can\'t swim · could run fast at school · want to be fitter', 'can drive · can\'t play any instrument · could sing in the school choir · love music']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write one thing each person **can** do and one thing they **could** do in the past.'));
out.push(stage('4', 'Your turn – find the experts', 9));
out.push(p('Walk around the class. Find someone who **can** do each thing. Write their name and ask **one** extra question (_How well? Who taught you? When did you learn?_).'));
out.push(table(['Find someone who can…', 'Name', 'Extra information'], [
  ['cook a Syrian dish', '', ''], ['drive', '', ''], ['play an instrument', '', ''], ['swim', '', ''], ['fix a computer or a car', '', ''], ['speak a third language', '', ''],
], [2, 1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your experts:  _Fadi can cook mansaf – his mother taught him. Hiba can play the oud quite well, and when she was at school she could play the piano too._'));
out.push(p('**Listener task:** who is the most talented person in the class?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Sara\'s application for the photography club. Answer the questions.'));
out.push(model([
  '**AL-YASMIN CLUBS – APPLICATION FORM**',
  '**Name:** Sara Hamdan   **Class:** 4B   **Club:** Photography',
  '**Why do you want to join this club?**',
  'I love taking photos, but I only use my phone and I don\'t really understand how a camera works. I want to learn.',
  '**What can you already do?**',
  'I\'m quite good at taking photos of people – my friends always ask me to take their pictures at weddings. I\'m not very good at photos of buildings or at night photos.',
  '**What do you want to learn?**',
  'I want to learn about light, and I want to learn to use editing programs on the computer.',
  '**When can you come?** Mondays after six. I work until five, so I can\'t come earlier.',
]));
out.push(item('1', 'What does Sara use for her photos now?'));
out.push(item('2', 'What is she not very good at?'));
out.push(item('3', 'Why can\'t she come before six?'));
out.push(writers([
  'A club application: **your details** → **why you want to join** → **what you can already do** (be honest – good and bad!) → **what you want to learn** → **when you can come** (+ a reason if there\'s a problem).',
  'Mix **can / can\'t** and **good at / not very good at** so the reader knows your real level.',
  'Give a **reason** with _because_ or _so_ (Unit 6).',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Name:** ______________  **Club:** ______________   **Why do you want to join?** I ______________, but ______________. I want to ______________.   **What can you already do?** I\'m quite good at ______________. I\'m not very good at ______________.   **What do you want to learn?** ______________.   **When can you come?** ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_can / could_ + base verb (no _to_, no -s)', '_good at_ + -ing', 'All parts: why, what you can do, what you want to learn, when']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an application for a **real or invented** club or course: a language, a sport, music, cooking, computers (50 words or more). Be honest about what you can and can\'t do.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s application as the **club leader**. ★ _Welcome!_  ✓ _Can you add…?_  ? _Have you got your own camera / boots / instrument?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two applications are read aloud. Which club in the class has the most members?'));
out.push(hw('Write the club leader\'s **reply** to your partner (25+ words): welcome them, say when and where the first meeting is, and say what to bring.'));

// ======================= 7.2 =======================
out.push(pb());
out.push(h2('7.2  What are you doing on Friday?'));
out.push(p('**Function:** talking about arrangements   ·   **Grammar:** present continuous for the future   ·   **Pronunciation:** contractions _I\'m meeting, we\'re going_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What have you got in your diary this week? (work, family, appointments, friends…) What do you write in a diary or on your phone?'));
out.push(board('I\'m meeting Omar at seven.', 'Thu 6.30 – dentist'));
out.push(p('**b**  Which are **arrangements** (you decided with another person) and which are **plans in your head**? _I\'m seeing the dentist at five. · I want to clean the flat. · We\'re having lunch with my parents. · Maybe I\'ll read a book._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When can they meet?   **A** Thursday   **B** Friday   **C** Saturday'));
out.push(p('**b**  Listen again. **1** What is Maya doing on Thursday evening?   **2** Who is coming on Saturday?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.3  A busy week', [
  ['Lina', 'Maya, are you free this week? I want to see that new film.'],
  ['Maya', 'Let me look at my diary… I\'m working late on Tuesday and Wednesday.'],
  ['Lina', 'What about Thursday?'],
  ['Maya', 'On Thursday I\'m going to the photography club after class – I\'m taking my sister. Sorry!'],
  ['Lina', 'Hmm. Friday?'],
  ['Maya', 'On Friday morning I\'m having lunch with my aunt, but I\'m free in the evening. What time does the film start?'],
  ['Lina', 'There are two: six o\'clock and half past eight.'],
  ['Maya', 'The six o\'clock one is better for me. Is Omar coming?'],
  ['Lina', 'No, he isn\'t. He\'s playing football with the club on Friday evening.'],
  ['Maya', 'And on Saturday my parents are arriving from Latakia, so Friday really is the only day!'],
  ['Lina', 'Friday at six, then. I\'m booking the tickets tonight.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present continuous for the future (arrangements)**',
  'We use **am / is / are + -ing** for things we have **already arranged** with other people, with a **time word**:',
  table(['+', '–', '?'], [['I**\'m meeting** Omar at seven.', 'He **isn\'t coming** on Friday.', '**Are** you **doing** anything on Thursday?'], ['My parents **are arriving** on Saturday.', 'We **aren\'t going** to the club this week.', 'What **are** you **doing** at the weekend?']], [1, 1, 1.2]),
  '**Time words:** tonight · tomorrow · on Friday · this week · at the weekend · next month',
  'Compare: _I **work** on Fridays._ (a routine – Unit 2)  /  _I**\'m working** this Friday._ (this week only – an arrangement)',
  '**Practise:** Make sentences about the future.  1 (I / meet / my manager / at 10) ______  2 (she / not come / tonight) ______  3 (what / you / do / tomorrow?) ______  4 (we / have / dinner / with Ziad / on Friday) ______  5 (they / arrive / on Saturday) ______',
  '**Useful phrases:** Are you free…? · Let me look at my diary. · What about…? · I\'m free in the evening. · …is better for me. · …, then.',
  '**Pronunciation.** 🔊 **Track 7.4** Say the contraction, not two words: _I\'m meeting_ /aɪm ˈmiːtɪŋ/ · _we\'re going_ /wɪə ˈɡəʊɪŋ/ · _they\'re arriving_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. **Don\'t show your diary!** Find a day when you are both free. Use the skeleton. Then swap diaries and do it again.'));
out.push(dlg(null, [
  ['A', 'Are you free this week? I want to __________.'],
  ['B', 'Let me look at my diary… I\'m __________ on __________.'],
  ['A', 'What about __________?'],
  ['B', 'On __________ I\'m __________. Sorry!'],
  ['A', 'Hmm. __________?'],
  ['B', 'I\'m free in the __________. What time?'],
  ['A', '__________ at __________, then!'],
]));
out.push(table(['Diary A', 'Diary B'], [[
  'Mon: working late · Tue: dentist 6.30 · Wed: free · Thu: cooking club 6–8 · Fri: free evening · Sat: cousin\'s wedding',
  'Mon: free · Tue: free evening · Wed: mother arriving from Homs · Thu: free · Fri: football 5–7, free after 8 · Sat: working']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** which day and time do they choose? Write it down.'));
out.push(stage('4', 'Your turn – your real week', 9));
out.push(p('Fill in **your real diary** for this week (work, family, appointments, study). Then find a classmate and arrange something together: a coffee after class, a walk, studying for the next test. You must find a time when you are **both** free!'));
out.push(table(['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], [['', '', '', '', '', '', '']], [1, 1, 1, 1, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s week and your arrangement:  _Tareq is very busy this week. He\'s working late on Monday and Tuesday, and on Wednesday he\'s taking his son to the doctor. We\'re meeting on Thursday after class to study for the test._'));
out.push(p('**Listener task:** who is the busiest person in the class this week?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lina\'s diary page and her message to Maya. Answer the questions.'));
out.push(model([
  '**LINA – THIS WEEK**',
  'Sun: work 8–4 · evening: Jana\'s birthday at Ziad\'s house 🎂',
  'Mon: work 8–4 · gym 6.00',
  'Tue: work 8–6 (end-of-month accounts) 😩',
  'Wed: work 8–6 · Mum coming for dinner',
  'Thu: work 8–4 · ENGLISH CLASS 5.30',
  'Fri: free! · 6.00 film with Maya',
]));
out.push(sp());
out.push(model([
  '**Message to Maya:**',
  'Hi Maya! Here\'s my week – it\'s terrible! I\'m working until six on Tuesday and Wednesday because of the end-of-month accounts, and my mother is coming for dinner on Wednesday too. On Sunday evening I\'m going to my brother\'s house for Jana\'s birthday – she\'s three! Thursday is our English class as usual. So Friday is perfect for the film. I\'m booking two tickets for six o\'clock. See you there! 🎬',
]));
out.push(item('1', 'Why is Lina working late on Tuesday?'));
out.push(item('2', 'What is happening on Sunday evening?'));
out.push(item('3', 'What is Lina doing tonight about the film?'));
out.push(writers([
  'A "my week" message: **greeting** → **the busy days** (with reasons) → **a special day** → **the free day** → **your arrangement** → **a friendly ending**.',
  'Use the **present continuous** for arrangements and **because** for reasons.',
  'A diary uses **short notes** (_work 8–4_), but a message uses **full sentences**.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi ______! Here\'s my week. I\'m ______________ on ______ and ______ because ______________. On ______ I\'m ______________. ______________ is ______________ as usual. So ______ is perfect for ______________. I\'m ______________ tonight. See you ______________!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (days!) and full stops', 'am / is / are + -ing for arrangements', 'A time word in each sentence (on Friday, this week…)', 'All parts: busy days + reasons, special day, free day, arrangement']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a message to a friend or a relative about **your real week** (50 words or more). Say what you\'re doing on at least **four** days and suggest one day to meet.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _Your week is so busy!_   ✓ _Can you add what time?_   ? _Are you free on…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. The class says which day sounds the hardest.'));
out.push(hw('Write the friend\'s **reply** (25+ words): say your own week, accept or change the day, and agree a time.'));

// ======================= 7.3 =======================
out.push(pb());
out.push(h2('7.3  I\'d love to, but…'));
out.push(p('**Function:** saying no politely   ·   **Grammar:** _but / because_ with excuses; _I\'d love to, but…_   ·   **Pronunciation:** warm, falling intonation in refusals'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When is it difficult to say no? (a wedding, a family lunch, your manager, a neighbour…) What do people say? What do they write?'));
out.push(board('I\'d love to, but I\'m working.', 'Thank you so much for the invitation…'));
out.push(p('**b**  Good or bad? _"No."_ · _"I\'d love to, but I can\'t."_ · _"I\'m busy."_ · _"I\'m really sorry – I\'m away that weekend."_ · _"Maybe."_   Which answers would make **you** sad?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the invitation?   **A** a wedding   **B** a birthday dinner   **C** a trip'));
out.push(p('**b**  Listen again. **1** Why can\'t Omar come?   **2** What does he offer to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.5  A difficult no', [
  ['Hiba', 'Omar, my cousin is getting married on the 24th. Would you like to come? It\'s in Homs.'],
  ['Omar', 'Oh, thank you so much! I\'d love to, but I\'m afraid I can\'t. My brother is arriving from Dubai that weekend – I only see him once a year.'],
  ['Hiba', 'Oh, that\'s a shame. But of course, family first!'],
  ['Omar', 'I\'m really sorry, Hiba. I was looking forward to meeting your family.'],
  ['Hiba', 'Don\'t worry. There\'s always the next wedding – I have a big family!'],
  ['Omar', 'Ha! Listen, can I do something else? I can take the photos at the engagement party next month.'],
  ['Hiba', 'Really? That\'s very kind of you!'],
  ['Omar', 'Of course. I\'m learning at the photography club – your family can be my practice!'],
  ['Hiba', 'Perfect. And bring your brother to the party if he\'s still here!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying no politely – the four steps**',
  table(['1 Thank', '2 Say no', '3 Give a reason', '4 Keep the friendship'], [
    ['Thank you so much! · That\'s very kind of you.', 'I\'d love to, **but** I\'m afraid I can\'t. · I\'m really sorry…', 'My brother **is arriving** that weekend. · **because** I\'m working.', 'Maybe next time. · Can I do something else? · Have a wonderful day!']], [1, 1.2, 1.2, 1.3]),
  '⚠ Never only _"No"_ or _"I\'m busy"_ – in English (and in Arabic!) that sounds rude. Always **thank + reason**.',
  'Notice: the reason is often an **arrangement** (7.2): _I\'m **working** that day. My brother **is arriving**._',
  '**Answering a "no":** That\'s a shame. · Don\'t worry. · Of course – family first! · Maybe next time.',
  '**Practise:** Make polite refusals with a reason.  1 (a wedding / you\'re travelling) ______  2 (dinner on Thursday / you have class) ______  3 (football on Friday / your knee hurts) ______  4 (a trip on Saturday / you\'re working) ______',
  '**Useful phrases:** I was looking forward to… · There\'s always the next… · Can I do something else? · if he\'s still here',
  '**Pronunciation.** 🔊 **Track 7.6** Start **high and warm** on _Oh, thank you so much!_ then go **down** ↘ on _…but I\'m afraid I can\'t._ A flat voice sounds like you don\'t care. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A invites, B refuses politely using all **four steps**. Then swap.'));
out.push(dlg(null, [
  ['A', '__________ is / are __________ on __________. Would you like to come?'],
  ['B', 'Oh, thank you so much! I\'d love to, but I\'m afraid I can\'t. I\'m __________.'],
  ['A', 'Oh, that\'s a shame.'],
  ['B', 'I\'m really sorry. I was looking forward to __________.'],
  ['A', 'Don\'t worry. Maybe next time.'],
  ['B', 'Listen, can I __________ instead?'],
  ['A', 'That\'s very kind of you!'],
]));
out.push(table(['Card A – invitations', 'Card B – invitations'], [['your sister\'s graduation party, Saturday · a picnic on Friday · a football match tonight', 'your son\'s birthday, Thursday · a trip to Maaloula on Friday · dinner at your new flat']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the four steps. Did B do all of them?'));
out.push(PHRASE_CARD(['1 Thank', '2 Say no', '3 Reason', '4 Keep the friendship']));
out.push(stage('4', 'Your turn – you can\'t say yes to everything!', 9));
out.push(p('Everyone writes **two** invitations on paper (real or invented: a wedding, a dinner, a trip, a match, a party). Walk around and invite people. **Rule:** you can only say **yes twice** – you must refuse all the other invitations politely, with a different reason each time!'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I invited six people to my barbecue. Hiba and Fadi are coming. Tareq can\'t come because he\'s visiting his parents in Suwayda, and Rasha is working. Everybody was very polite – nobody just said no!_'));
out.push(p('**Listener task:** whose refusal was the most polite? Whose excuse was the funniest?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Omar\'s written reply to the wedding invitation. Answer the questions.'));
out.push(model([
  'Dear Hiba,',
  'Thank you very much for inviting me to your cousin\'s wedding on the 24th. It was very kind of you to think of me.',
  'I\'m really sorry, but I\'m afraid I can\'t come. My brother Khaled is arriving from Dubai on the same weekend, and I only see him once a year. I was looking forward to meeting your family and seeing Homs again.',
  'I hope the day is beautiful and that everyone dances until the morning! Please give my best wishes to your cousin and her husband.',
  'If it\'s useful, I\'d be happy to take the photos at the engagement party next month – just tell me the date.',
  'With best wishes,',
  'Omar',
]));
out.push(item('1', 'When is the wedding?'));
out.push(item('2', 'What two things does Omar wish them?'));
out.push(item('3', 'What does he offer?'));
out.push(writers([
  'A written refusal is **longer and warmer** than a spoken one: _Dear + name,_ → **thank them** → **say no + the reason** → **what you\'ll miss** → **good wishes for the day** → **an offer or a next time** → _With best wishes,_ → name.',
  'Use **I\'m afraid**, **I was looking forward to…** and **I hope…** – these make a refusal kind.',
  'Never write only two lines for an important invitation (a wedding, a graduation): the length shows respect.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______,   Thank you very much for inviting me to ______________. It was very kind of you ______________.   I\'m really sorry, but I\'m afraid I can\'t come. ______________. I was looking forward to ______________.   I hope ______________. Please ______________.   If it\'s useful, I\'d be happy to ______________.   With best wishes,   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'All four steps: thank, no, reason, keep the friendship', 'A reason with an arrangement (I\'m …-ing) or _because_', 'Good wishes + an offer or next time']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your refusal sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a polite refusal (60 words or more) to a **real or invented** invitation you can\'t accept: a wedding, a graduation, a work trip, a party, a family lunch.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as the **person who invited them**. ★ _What a kind letter!_  ✓ _Can you add…?_  ? _Can you come to…instead?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two letters are read aloud. The class decides: is the writer still a good friend after this letter? Why?'));
out.push(hw('Write the **reply** to your partner\'s refusal (25+ words): say it\'s OK, say you\'ll miss them, and suggest another time or accept their offer.'));

// ======================= 7.4 =======================
out.push(pb());
out.push(h2('7.4  Can we make it seven?'));
out.push(p('**Function:** agreeing and changing an arrangement   ·   **Grammar:** prepositions of time and place (recycle); _Can we make it…?_   ·   **Pronunciation:** _at_ /ət/, _in_ /ɪn/, _on_ /ɒn/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where do you meet friends? (a café, the centre, outside a shop, a gate…) Why do people change arrangements?'));
out.push(board('Can we make it seven?', 'See you at 7 outside the cinema.'));
out.push(p('**b**  _at, in_ or _on_?  ___ Friday · ___ half past six · ___ the morning · ___ the weekend · ___ 24 October · ___ night'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who needs to change the time?   **A** Lina   **B** Maya   **C** nobody'));
out.push(p('**b**  Listen again. **1** What is the new time?   **2** Where do they decide to meet?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.7  Changing the plan', [
  ['Maya', 'Lina, I\'m really sorry – can we change the film to half past eight?'],
  ['Lina', 'Oh! Is everything OK?'],
  ['Maya', 'Yes, but the pharmacy is busy on Friday evening and my colleague is ill. I can\'t leave at five.'],
  ['Lina', 'No problem. Can you be there at eight?'],
  ['Maya', 'Let\'s say a quarter past eight, to be safe. Can we make it the late film?'],
  ['Lina', 'OK, the half past eight one. I\'ll change the tickets.'],
  ['Maya', 'Thank you! Where shall we meet?'],
  ['Lina', 'How about outside the cinema, next to the ticket office? It\'s on the first floor of the centre.'],
  ['Maya', 'Perfect. And if I\'m late, don\'t wait outside – go in and I\'ll find you.'],
  ['Lina', 'OK. Row G, I think. I\'ll send you the seat numbers.'],
  ['Maya', 'You\'re a star. See you on Friday!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Agreeing and changing an arrangement**',
  table(['Suggesting a time / place', 'Changing it', 'Confirming'], [
    ['What time shall we meet? · Where shall we meet? · How about outside the cinema?', 'Can we make it seven? · Can we change it to Saturday? · Let\'s say a quarter past, to be safe.', 'OK, seven, then. · Perfect. · See you on Friday! · I\'ll send you…']], [1, 1.2, 1]),
  '**at / in / on** (recycle, Unit 2): **at** 8.30, at night · **in** the morning / the evening · **on** Friday, on 24 October · **at** the weekend',
  '**Places to meet:** **outside** the cinema · **next to** the ticket office · **in front of** the mosque · **at** the main gate · **on** the first floor',
  '**Practise:** Complete with _at, in, on_ or _outside_.  1 Let\'s meet ______ half past six.  2 I\'m free ______ the evening.  3 The wedding is ______ 24 October.  4 Wait for me ______ the bank.  5 I\'m busy ______ the weekend.',
  '**Useful phrases:** Is everything OK? · No problem. · …, to be safe. · Don\'t wait – go in. · You\'re a star!',
  '**Pronunciation.** 🔊 **Track 7.8** Weak prepositions: _at‿eight_ /ət eɪt/ · _in‿the morning_ · _on‿Friday_. The important word is the **time**, not the preposition. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an arrangement; B needs to change it. Agree a new time **and** a place. Then swap.'));
out.push(dlg(null, [
  ['B', 'I\'m really sorry – can we change __________ to __________?'],
  ['A', 'Oh! Is everything OK?'],
  ['B', 'Yes, but __________.'],
  ['A', 'No problem. Can you be there at __________?'],
  ['B', 'Let\'s say __________, to be safe.'],
  ['A', 'OK. Where shall we meet?'],
  ['B', 'How about __________?'],
  ['A', 'Perfect. See you on __________!'],
]));
out.push(table(['Card A – the arrangement', 'Card B – your problem'], [['dinner at a restaurant, Thursday 7 pm', 'your meeting finishes at 7.30 · you want Friday instead'], ['studying together, Saturday 10 am, the library', 'the library is closed on Saturday · you can only come in the afternoon']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **new** day, time and place.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Arrange a **real** meeting with your partner (coffee after class, studying together, a walk). Agree the day, the time and the exact place.'));
out.push(p('**b**  Now your teacher gives you a problem (_your boss needs you · your child is ill · the bus is cancelled_). Phone your partner and change the arrangement. Agree a new time and place.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba and I are meeting on Sunday to study. First we said ten o\'clock at the library, but the library opens at eleven on Sundays, so we changed it. Now we\'re meeting at eleven in the café next to the centre._'));
out.push(p('**Listener task:** how many pairs changed their plan? What was the most common problem?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three short messages. Answer the questions.'));
out.push(model([
  '**1 · Lina → Maya (Thursday evening)**',
  'Hi Maya! Just confirming Friday: the film starts at 8.30, so let\'s meet at 8.15 outside the cinema, next to the ticket office (first floor). I\'ve got the tickets – Row G, seats 11 and 12. 🎬',
  '**2 · Maya → Lina (Friday, 5.40 pm)**',
  'Lina, I\'m so sorry – a delivery arrived late and I\'m still at the pharmacy. I\'m leaving in ten minutes, so I\'ll be about fifteen minutes late. Please don\'t wait outside – go in and I\'ll find you. Sorry!! 🙏',
  '**3 · Lina → Maya (Friday, 5.45 pm)**',
  'No problem at all! I\'m inside, Row G on the left. The film starts with adverts anyway, so you won\'t miss anything. Take your time. ☕',
]));
out.push(item('1', 'What exact place do they agree to meet?'));
out.push(item('2', 'Why is Maya late?'));
out.push(item('3', 'What does Lina tell her not to worry about?'));
out.push(writers([
  'Three useful messages: **confirming** (day, time, exact place, extra information) · **saying you\'re late** (sorry + reason + how late + what the other person should do) · **answering** (don\'t worry + where you are + something kind).',
  'Be **exact** about the place: not _at the cinema_ but _outside the cinema, next to the ticket office_.',
  'When you\'re late, always say **how many minutes** – and never only "sorry".',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**1 Confirming:** Hi ______! Just confirming ______: ______________ starts at ______, so let\'s meet at ______ ______________. ______________.'));
out.push(p('**2 Late:** ______, I\'m so sorry – ______________. I\'m leaving ______________, so I\'ll be about ______ minutes late. Please ______________.'));
out.push(p('**3 Answer:** No problem! I\'m ______________. ______________. Take your time.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'at / in / on correct', 'The place is exact (next to…, outside…, on the … floor)', 'The late message says how many minutes and what to do']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one message before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the **three messages** for a real arrangement of your own (50 words or more in total): confirm it, then say you\'re late with a reason, then write the kind answer.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _Very clear and kind!_   ✓ _Can you add the exact place?_   ? _How will I know where you are?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two sets are read aloud by three students (one for each message). Which answer is the kindest?'));
out.push(hw('Write a **fourth** message for your partner\'s arrangement (25+ words): the next day, say thank you for the evening and suggest doing it again.'));

// ======================= 7.5 =======================
out.push(pb());
out.push(h2('7.5  I prefer the cinema to TV'));
out.push(p('**Function:** talking about preferences   ·   **Grammar:** _prefer A to B_; _prefer + -ing_; _I\'d rather_   ·   **Pronunciation:** _I\'d rather_ /aɪd ˈrɑːðə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Cinema or TV? Café or home? Football or films? Ask three classmates and write the class\'s favourite.'));
out.push(board('I prefer coffee to tea.', 'Most students prefer the café.'));
out.push(p('**b**  Choose for you: _tea or coffee · summer or winter · the sea or the mountains · staying at home or going out_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they deciding?   **A** what film to see   **B** where to go after the film   **C** what to eat'));
out.push(p('**b**  Listen again. **1** What does Maya prefer?   **2** What do they decide?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.9  After the film', [
  ['Lina', 'That was a good film! Shall we eat something? There\'s a nice restaurant on the top floor.'],
  ['Maya', 'Hmm. Honestly, I\'d rather not eat in the shopping centre. I prefer small places to big restaurants.'],
  ['Lina', 'Me too, actually. What about the café in Bab Touma?'],
  ['Maya', 'The one with the garden? Yes! I prefer sitting outside, even in October.'],
  ['Lina', 'Then let\'s go. Do you prefer walking or taking a taxi?'],
  ['Maya', 'I\'d rather walk – it\'s only fifteen minutes and the evening is beautiful.'],
  ['Lina', 'Perfect. And what do you prefer – a full dinner or just mezze?'],
  ['Maya', 'Mezze, definitely. I prefer eating a little of many things.'],
  ['Lina', 'You\'re speaking my language. Let\'s go!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – preferences**',
  table(['prefer + noun **to** noun', 'prefer + **-ing**', 'I\'d rather + **base verb**'], [
    ['I prefer small places **to** big restaurants. · She prefers tea **to** coffee.', 'I prefer **sitting** outside. · He prefers **walking** to **taking** a taxi.', 'I\'d (would) **rather walk**. · I\'d **rather not** eat here.']], [1.2, 1.1, 1.1]),
  '⚠ _prefer A **to** B_, not ~~prefer A than B~~.  ⚠ _I\'d rather **walk**_, not ~~I\'d rather to walk~~ or ~~I\'d rather walking~~.',
  '**Negative:** _I\'d **rather not**…_ (= a polite no): _I\'d rather not eat here._',
  '**Asking:** Do you prefer X or Y? · Which do you prefer? · Would you rather walk or take a taxi?',
  '**Practise:** Correct the mistakes.  1 I prefer the sea than the mountains.  2 I\'d rather to stay at home.  3 She prefers to read than watching TV. (use -ing)  4 I\'d rather not going out tonight.  5 Do you prefer tea or you prefer coffee?',
  '**Useful phrases:** Honestly,… · Me too, actually. · …, definitely. · even in October · You\'re speaking my language!',
  '**Pronunciation.** 🔊 **Track 7.10** _I\'d rather_ /aɪd ˈrɑːðə/ – don\'t forget the /d/! Compare: _I rather_ ✗ / _I\'d rather_ ✓. And _prefer_ – the stress is on the **second** syllable: pre**FER**. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Decide together using the card. You must **disagree** at least once and use _I\'d rather_ at least twice. Then swap.'));
out.push(dlg(null, [
  ['A', 'Shall we __________?'],
  ['B', 'Honestly, I\'d rather not __________. I prefer __________ to __________.'],
  ['A', 'Me too, actually. What about __________?'],
  ['B', 'Yes! I prefer __________.'],
  ['A', 'Do you prefer __________ or __________?'],
  ['B', 'I\'d rather __________.'],
  ['A', 'Perfect. Let\'s go!'],
]));
out.push(table(['Decide: a free Friday', 'Decide: a present for a colleague'], [['the park or the Old City · walk or taxi · picnic or restaurant · morning or afternoon', 'a book or a plant · buy together or alone · give it at work or at a café · with a card or without']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['I prefer … to …', 'I prefer …-ing', 'I\'d rather…', 'I\'d rather not…', 'Which do you prefer?', 'Me too, actually.']));
out.push(stage('4', 'Your turn – this or that?', 9));
out.push(p('**a**  Ask your partner about **eight** choices and always ask **why**: tea/coffee · city/village · summer/winter · reading/watching · cooking/eating out · early/late · cat/dog · phone/laptop.'));
out.push(p('**b**  Now find **three** things where you are different. Can you explain why?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fadi and I are the same about food – we both prefer eating at home to eating out. But he prefers winter to summer because he hates the heat, and I\'d rather have forty degrees than cold hands!_'));
out.push(p('**Listener task:** find someone with the same preferences as you.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Maya\'s post on the class page. Answer the questions.'));
out.push(model([
  '**Night person or morning person?**',
  'I\'m definitely a night person. I prefer working in the evening to working in the morning, and when I was a student I always studied after midnight.',
  'But my job doesn\'t agree with me! I open the pharmacy at eight, so I\'d rather go to bed at eleven – and I usually can\'t. I lie in bed and think about everything.',
  'My sister Lama is the opposite. She prefers getting up at six and studying on her balcony with the first coffee of the day. She says the morning is "quiet and clean". For me, six o\'clock is the middle of the night!',
  'So: are you a morning person or a night person? And more importantly – how do you wake up?',
]));
out.push(item('1', 'When did Maya study as a student?'));
out.push(item('2', 'What does Lama prefer?'));
out.push(item('3', 'What two questions does Maya ask the readers?'));
out.push(writers([
  'A preferences post: **title as a question** → **your answer about yourself** → **a problem or contrast** (_But…_) → **another person who is different** → **a question to the readers**.',
  'Use **prefer + to / -ing** and **I\'d rather** – and give a **reason** for each.',
  'Ending with a **question** gets comments – that\'s how posts work!',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ or ______________?**   I\'m definitely ______________. I prefer ______________ to ______________, and ______________.   But ______________! I ______________, so I\'d rather ______________.   My ______________ is the opposite. He / She prefers ______________. He / She says ______________. For me, ______________!   So: ______________? And ______________?'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'prefer A **to** B (not _than_); prefer + -ing', 'I\'d rather + base verb', 'All parts: your preference, contrast, another person, a question']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one preference sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a post about **your** preferences (60 words or more): city or village? cooking or eating out? big family parties or quiet evenings? studying alone or with people? End with a question for your classmates.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Answer your partner\'s question in writing (a real comment!): ★ _I like…_  ✓ _Can you add why?_  ? and **your** answer to their question.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two posts are read aloud and the class answers the questions. Is this class more morning people or night people?'));
out.push(hw('Write a comment on your partner\'s post (30+ words): agree or disagree, give your reason, and tell them one thing you\'d rather do.'));

// ======================= 7.6 =======================
out.push(pb());
out.push(h2('7.6  What\'s on this week?'));
out.push(p('**Function:** talking about events   ·   **Grammar:** present simple for timetables and programmes   ·   **Pronunciation:** dates: _the 24th of October_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What happens in your city? (concerts, matches, exhibitions, markets, weddings, religious events…) Where do you find out about them?'));
out.push(board('There\'s a concert on Thursday.', 'Doors open at 7. Starts at 7.30.'));
out.push(p('**b**  Say the dates: 1/5 · 3/6 · 12/10 · 21/12 · 24/4'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lama want to go to?   **A** a concert   **B** a film   **C** an exhibition'));
out.push(p('**b**  Listen again. **1** What time does it start?   **2** How much is a student ticket?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.11  Calling Dar Al-Fann', [
  ['Man', 'Dar Al-Fann Cultural Centre, good morning.'],
  ['Lama', 'Good morning. I\'d like to ask about the oud concert. When is it, please?'],
  ['Man', 'It\'s on Thursday the 23rd. The doors open at seven and the concert starts at half past seven.'],
  ['Lama', 'How long does it last?'],
  ['Man', 'About ninety minutes, with a short break in the middle.'],
  ['Lama', 'And how much are the tickets?'],
  ['Man', 'Thirty thousand, but students pay fifteen. Bring your university card.'],
  ['Lama', 'Great. Do I need to book?'],
  ['Man', 'Yes, I recommend it – the hall is small and it fills up quickly. You can book here or on our page.'],
  ['Lama', 'Is anything else on this month?'],
  ['Man', 'Yes! There\'s a photography exhibition every day until the 30th – that one\'s free – and we show an old film every Sunday at six.'],
  ['Lama', 'Perfect. Thank you very much!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present simple for programmes and timetables**',
  'For events and timetables we use the **present simple**, even about the future:',
  '_The concert **starts** at 7.30. · The doors **open** at seven. · The exhibition **finishes** on the 30th. · The film **begins** at six._',
  'Compare: _I**\'m going** to the concert on Thursday._ (my arrangement – 7.2)  /  _The concert **starts** at 7.30._ (the programme)',
  '**Asking about events:** What\'s on this week? · When is it? · What time does it start / finish? · How long does it last? · How much are the tickets? · Do I need to book? · Is there a discount for students?',
  '**Dates:** the 23rd of October / October the 23rd · the 1st, the 2nd, the 3rd, the 4th… the 21st, the 22nd, the 23rd, the 30th',
  '**Practise:** Complete with the present simple.  1 The match ______ (start) at four.  2 The museum ______ (not open) on Fridays.  3 What time ______ the concert ______ (finish)?  4 The exhibition ______ (last) two weeks.  5 The doors ______ (open) half an hour before.',
  '**Useful phrases:** I\'d like to ask about… · How long does it last? · Do I need to book? · It fills up quickly. · Is anything else on?',
  '**Pronunciation.** 🔊 **Track 7.12** Dates: _the twenty-**third**_ · _the **first** of May_ · _October the **thirtieth**_. The ordinal ending is the important part. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A phones about the event on the card; B has the information. Then swap.'));
out.push(table(['Event card A – football match', 'Event card B – book fair'], [[
  'Al-Jaish v Al-Wahda · Friday 24th · gates open 3.00, match starts 4.00 · 90 minutes · tickets 25,000 (children 10,000) · no booking, buy at the gate',
  'Damascus Book Fair · every day 10–8 until the 31st · free · talks by writers at 5 pm on Saturdays · café inside · bring a bag for your books!']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the date, the time and the price.'));
out.push(stage('4', 'Your turn – what\'s on in our city', 9));
out.push(p('**a**  Think of a **real** event you know about: a match, a wedding, a religious event, a market, a concert, a film, a school event. Tell your partner: what, when, where, how much, do you need to book?'));
out.push(p('**b**  Now your partner asks: _Would you like to go together?_ Agree on **one** event and arrange it (day, time, place to meet – recycle 7.4!).'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your plan:  _There\'s a book fair until the 31st. It opens at ten and it\'s free. On Saturdays there are talks at five. Hiba and I are going on Saturday – we\'re meeting at four outside the main gate._'));
out.push(p('**Listener task:** write down one event you want to go to.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the poster. Answer the questions.'));
out.push(box(null, [
  '**DAR AL-FANN CULTURAL CENTRE  ·  WHAT\'S ON IN OCTOBER**',
  '**🎵 OUD CONCERT – Nour Ensemble**',
  'Thursday 23 October · Doors open 7.00 pm · Concert starts 7.30 pm · 90 minutes with a break',
  'Tickets: 30,000 SYP · Students 15,000 (bring your card) · **Please book – the hall is small!**',
  '**📷 PHOTOGRAPHY EXHIBITION – "Our Streets"**',
  'Every day until 30 October · 10.00 am – 8.00 pm · **FREE** · Photos of Damascus by young photographers',
  '**🎬 SUNDAY CINEMA** · Every Sunday at 6.00 pm · Old Arabic films · 10,000 SYP · Tea and sweets in the break',
  'Dar Al-Fann, Straight Street, Bab Sharqi · 011 543 2109 · We are closed on Fridays.',
], C.lyellow, C.orange));
out.push(item('1', 'How long does the concert last?'));
out.push(item('2', 'Which event is free?'));
out.push(item('3', 'When is the centre closed?'));
out.push(writers([
  'An events poster: **the place + the month** → **each event**: a title with a symbol, then **date · times · how long · price · a note**.',
  'Use the **present simple** for times: _Doors open… The concert starts…_',
  'Put the **most important information in bold** or capitals: FREE, Please book.',
  'End with the **address, phone number and closing days**.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________  ·  WHAT\'S ON IN ______________**   **______ ______________**   ______________ · Doors open ______ · Starts ______ · ______ minutes   Tickets: ______ · ______________   **______ ______________**   ______________ · ______________ · ______________   ______________ · ______________ · We are closed on ______.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (days, months) and full stops', 'Present simple for times (_the film starts_)', 'Dates written correctly (Thursday 23 October)', 'All parts: events with date, time, price, address and phone']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one event line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Make a "What\'s on" poster for **your city, your workplace or our class** – real or invented (60 words or more). Include **three** events with all the information.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s poster as **someone looking for something to do**. ★ _I want to go to…_  ✓ _Can you add the price?_  ? _Do I need to book?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the posters on the wall. Walk around and write your name under the event you want to go to. Which event is the most popular?'));
out.push(hw('Write a message to a friend (30+ words) about **one** event from a classmate\'s poster: say what it is, when and how much, and invite them.'));

// ======================= 7.7 =======================
out.push(pb());
out.push(h2('7.7  Review & Mediate: Let\'s plan Saturday'));
out.push(p('**Function:** planning an outing from leaflets   ·   **Recycling:** Units 1–7   ·   **Exam practice:** A2 Key Reading Part 2, Writing Part 6, Speaking Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** I can to swim.  **2** She\'s good in cooking.  **3** What you doing on Friday?  **4** I prefer tea than coffee.  **5** I\'d rather to stay home.  **6** The film is starting at eight every day.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the three leaflets.'));
out.push(table(['🏛 CITADEL TOUR', '🌳 TISHREEN PARK DAY', '🎨 DAR AL-FANN'], [
  ['Guided tour of the Citadel, **in English**.', 'Open **every day**, 8 am – sunset.', 'Photography exhibition "Our Streets".'],
  ['**Saturdays at 10 am and 2 pm.**', '**FREE.** Big playground for children.', 'Every day until **the 30th**, 10 am – 8 pm. **FREE.**'],
  ['2 hours. A lot of walking and stairs.', 'Boats on the lake: 15,000 for 30 min.', 'Sunday cinema at 6 pm: 10,000.'],
  ['40,000 SYP · students 20,000.', 'Café near the main gate.', 'Small café inside.'],
  ['Book on 011 221 3344.', 'Very busy on Fridays.', '**Closed on Fridays.**'],
], [1, 1, 1]));
out.push(p('**b**  **Books closed.** Listen. Lina, Maya and Omar plan Saturday with Mr Lang. What do they decide?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.13  Planning Saturday', [
  ['Lina', 'So, Mr Lang is free on Saturday. Shall we do the Citadel tour? It\'s in English.'],
  ['Omar', 'Good idea. But it\'s two hours and there are a lot of stairs. He\'s nearly sixty.'],
  ['Maya', 'He walks a lot, actually – he told me he walks every morning. I think he can do it.'],
  ['Lina', 'OK. There are two tours: ten o\'clock and two o\'clock. Which do you prefer?'],
  ['Omar', 'I\'d rather go at ten. It\'s cooler, and then we have the whole afternoon.'],
  ['Maya', 'Agreed. And after the tour? The exhibition at Dar Al-Fann is free, and it\'s very near the Citadel.'],
  ['Lina', 'Perfect – and he\'s interested in photography. What about lunch?'],
  ['Omar', 'There\'s a small café inside Dar Al-Fann, or we can go to Beit Al-Yasmin.'],
  ['Maya', 'Beit Al-Yasmin, definitely. He loved the fattoush last time.'],
  ['Lina', 'So: the tour at ten, lunch at Beit Al-Yasmin at half past twelve, the exhibition at two. Is that too much?'],
  ['Omar', 'It\'s fine – everything is close. I\'m booking the tour now. Forty thousand each.'],
  ['Maya', 'And let\'s meet at the Citadel gate at a quarter to ten, to be safe.'],
]));
out.push(sp());
out.push(box('Language box – planning together from information', [
  'Use the information, then **decide**:',
  '_Saturdays at 10 and 2_ → **There are two tours. Which do you prefer?**   _Free_ → **It doesn\'t cost anything.**   _Closed on Fridays_ → **We can\'t go on Friday.**',
  'Think about the **person**: _He\'s nearly sixty. · He\'s interested in photography. · He loved the fattoush._',
  'Finish with a **summary**: _So: the tour at ten, lunch at half past twelve, the exhibition at two._',
  '**Useful phrases:** Shall we…? · I\'d rather… · Agreed. · …, definitely. · Is that too much? · Everything is close. · …, to be safe.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. Plan **one day** for a visitor using the three leaflets. You must: make at least **four** suggestions · disagree politely at least **once** · agree a **time and place to meet** · give a **summary** at the end.'));
out.push(table(['Choose your visitor', 'a)', 'b)', 'c)'], [['Your group decides:', 'a family with two small children', 'two students with very little money', 'an older couple who walk slowly']], [1, 1.2, 1.2, 1.2]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform their plan. **Listener task:** write the plan: time, place, cost. Is it good for that visitor?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your partner is visiting your city for **one day**. Using **real** places, plan the day together: morning, lunch, afternoon, evening. Think about your partner: what do they like? How much can they spend? Agree everything.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class your partner\'s plan in your own words:  _Fadi planned my day in Aleppo. In the morning we\'re visiting the citadel because the light is good early. Then we\'re having lunch at his uncle\'s restaurant – he says the kebab is the best in the city. The museum is closed on Tuesdays, so we\'re going to the souq instead._'));
out.push(p('**Listener task:** which day sounds the best? Which is the cheapest?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 2)', 7));
out.push(p('Read about three people. For each question, choose **A**, **B** or **C**.'));
out.push(table(['A  Nabil', 'B  Rasha', 'C  Kareem'], [[
  'Nabil works six days a week and he\'s free only on Fridays. He doesn\'t like crowds, so he prefers small places. He can\'t walk far because of his knee, but he loves looking at old photographs. He never spends much money on a day out.',
  'Rasha has two children, aged four and seven. They have a lot of energy! She\'s free at the weekend and she\'d rather be outside than inside. She can spend about 50,000 on the day, and she needs somewhere with food and a toilet.',
  'Kareem is a student. He\'s free in the evenings and he loves old films. He hasn\'t got much money, but he can pay a little. He prefers going out with a group of friends to going alone, and he lives near Bab Sharqi.']], [1, 1, 1]));
out.push(sp());
[
  '**1**  Who can go to the Sunday cinema most easily?     A     B     C',
  '**2**  Who should go to Tishreen Park?     A     B     C',
  '**3**  Who can\'t do the Citadel tour?     A     B     C',
  '**4**  Who would like the photography exhibition most?     A     B     C',
  '**5**  Who cannot go to Dar Al-Fann on their free day?     A     B     C',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to Mr Lang about Saturday. Use the plan from Track 7.13.'));
out.push(p('Dear Mr Lang,   We\'re all free on Saturday! Here\'s the plan. The Citadel tour ______________ at ______, so let\'s meet at ______ ______________. The tour ______________ two hours and it costs ______. After that, we\'re ______________ at Beit Al-Yasmin at ______. In the afternoon we\'re ______________ – it\'s ______________ and it\'s very near. Please wear ______________ because ______________.   See you on Saturday!   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Present simple for the programme (the tour starts…)', 'Present continuous for the arrangements (we\'re having…)', 'Time, place to meet and price', 'One piece of advice (wear…, bring…)']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend, **Kate**, is coming to your city on Saturday. Write an email to Kate.',
  'In your email:  •  tell her **one thing you can do together** and **when it starts**  •  say **where you can meet**  •  ask her **what she prefers** to do after that.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  When I was a child I ___ swim very well.   a) can   b) could   c) couldn\'t to',
  '2  She\'s very good ___ cooking.   a) in   b) at   c) for',
  '3  What ___ on Friday evening?   a) you are doing   b) do you do   c) are you doing',
  '4  I\'d love to, ___ I\'m afraid I can\'t.   a) but   b) because   c) so',
  '5  Can we ___ it half past seven?   a) do   b) make   c) take',
  '6  I prefer small cafés ___ big restaurants.   a) than   b) to   c) from',
  '7  I\'d rather ___ at home tonight.   a) to stay   b) staying   c) stay',
  '8  The concert ___ at half past seven.   a) starts   b) is starting   c) start',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 2 style).** 🔊 **Track 7.14** Listen to a man talking about a cultural centre. Complete the notes.'));
out.push(table(['DAR AL-FANN – THIS WEEK', ''], [['Concert: day', '1 ______'], ['Concert starts at', '2 ______'], ['Student ticket (SYP)', '3 ______'], ['The exhibition finishes on the', '4 ______'], ['Closed on', '5 ______']], [2, 1], { headFill: C.navy }));
out.push(dlg('Track 7.14  Audio script (read after the check)', [
  ['Man', 'Hello and welcome to Dar Al-Fann. Here\'s what\'s on this week. Our big event is the oud concert on Thursday – not Wednesday, as it says on the old poster. The doors open at seven and the music starts at half past seven. Tickets are thirty thousand, but if you\'re a student you pay only fifteen thousand – please bring your card. Our photography exhibition is free and it finishes on the thirtieth of this month, so don\'t miss it. And remember: like all the centres in the Old City, we\'re closed on Fridays. See you soon!'],
]));
out.push(p('**C  Writing.** Write a message to a classmate (35+ words). Invite them to an event this month. Say when it starts, where to meet, and ask what they prefer: going early or late.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 7)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I can do and what I\'m good at',
  '☐ talk about my arrangements for this week',
  '☐ say no politely, with a reason',
  '☐ agree a time and place, and change an arrangement',
  '☐ say what I prefer and why',
  '☐ ask and talk about events in my city',
  '☐ plan a day out with other people from leaflets',
  '☐ write a club application, a "my week" message, a polite refusal, arrangement messages, a preferences post and an events poster',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 7 · Student\'s Book');
