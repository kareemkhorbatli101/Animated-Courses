// Proactive English A2 · Syria Edition · Book 2 · Unit 13 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 13  Experiences'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**13.1**  talk about your experiences',
  '**13.2**  ask for the details of an experience',
  '**13.3**  say how many times you have done something',
  '**13.4**  talk about something you have just done',
  '**13.5**  say how long',
  '**13.6**  recommend something from your own experience',
  '**13.7**  Review & Mediate: explain a CV to somebody who does not read English',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**A new term.** It is **January**. Class 4B is back in Room 12 on Thursdays at half past five, and Book 2 starts.',
  '**Lama Nasser** – Maya\'s younger sister – is now in her **second year** of English literature at Damascus University. She shares Maya\'s flat and she is looking for part-time work.',
  '**Dar Al-Kalima Bookshop**, Shaalan – a bookshop with a small café. The owner is **Mrs Mona**. It needs a part-time assistant for three afternoons a week.   ·   **Aunt Suad** – Maya and Lama\'s aunt in Damascus. She does not read English.',
], C.lyellow, C.orange));

// ======================= 13.1 =======================
out.push(pb());
out.push(h2('13.1  Have you ever been to Palmyra?'));
out.push(p('**Function:** talking about your experiences   ·   **Grammar:** present perfect with _ever_ / _never_   ·   **Pronunciation:** weak _have_ /həv/ and _\'ve_ /v/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which of these has somebody in this class done? _travel by plane · see the sea · cook for twenty people · ride a horse · lose a phone · sleep in a tent · meet somebody famous_. Your teacher writes the class\'s ideas on the board.'));
out.push(board('Have you ever slept in a tent?', 'Rami has slept in a tent (Bludan, two years ago).'));
out.push(p('**b**  Say the past form and then the third form: _go – went – ______ · see – saw – ______ · eat – ate – ______ · take – took – ______ · fly – flew – ______ · do – did – _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who has been to Palmyra?   **A** Omar   **B** Nour   **C** nobody in the class'));
out.push(p('**b**  Listen again. **1** What **two** things has Hiba never done?   **2** Where has Omar been more times than he can count?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.1  The first class of the new term', [
  ['Ms Huda', 'Welcome back, everybody, and happy new term. Before we open Book 2, I want to ask you something – not what you did in the holiday. Something better.'],
  ['Omar', 'That is a big promise for five past five, Miss.'],
  ['Ms Huda', '(laughs) Here is the question. Have you ever been to Palmyra?'],
  ['Hiba', 'Never. I\'ve always wanted to go.'],
  ['Omar', 'I haven\'t been either. I\'ve seen a thousand photographs of it – I\'ve printed some of them myself – but I\'ve never stood there.'],
  ['Nour', 'I have. We went when I was eleven, with my school.'],
  ['Ms Huda', 'One person in the room. And have you ever flown, Hiba?'],
  ['Hiba', 'No, never. I\'ve been to Beirut, but by bus.'],
  ['Omar', 'I\'ve flown twice. Both times to Cairo, and both times I was ill.'],
  ['Ms Huda', 'Thank you, Omar. And the Citadel of Aleppo?'],
  ['Omar', 'Miss, I\'m from Aleppo. I\'ve been there more times than I can count.'],
  ['Ms Huda', 'Good – and that is the lesson. _Have you ever…?_ asks about your whole life. It doesn\'t ask about last week.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present perfect: _have_ / _has_ + the third form**',
  table(['+', '–', '?'], [
    ['I / you / we / they **have** (**\'ve**) been.\nHe / she / it **has** (**\'s**) been.',
     'I **haven\'t** been.\nShe **hasn\'t** been.',
     '**Have** you **ever** been?\n– Yes, I **have**. / No, I **haven\'t**. / No, **never**.'],
  ], [1.2, 1, 1.4]),
  'We use it for your **whole life up to now**, when the time is **not important**: _I\'ve been to Beirut._ · _She\'s flown twice._',
  '⚠ _ever_ goes in the **question** only: _Have you **ever** been…?_  ~~I have ever been.~~   ⚠ _never_ already means "not": ~~I haven\'t never been.~~ → _I\'ve **never** been._',
  '**The third form (past participle).** Regular: visit – visited, try – tried, climb – climbed. Irregular ones to learn now:',
  table(['be → **been**', 'go → **gone / been**', 'see → **seen**', 'eat → **eaten**', 'fly → **flown**'],
    [['do → **done**', 'take → **taken**', 'write → **written**', 'drive → **driven**', 'swim → **swum**']], [1, 1, 1, 1, 1]),
  '**Practise:** Complete with _have_ / _has_ and the third form.  1 I ______ (never / be) to Palmyra.  2 ______ you ever ______ (eat) fish in Latakia?  3 She ______ (fly) twice.  4 We ______ (not / see) the new bridge.  5 He ______ (drive) to Homs many times.  6 ______ they ever ______ (swim) in the sea?',
  '**Useful phrases:** Have you ever…? · Never. · I\'ve always wanted to… · I haven\'t been either. · more times than I can count. · Me neither.',
  '**Pronunciation.** 🔊 **Track 13.2** _have_ is short and weak: _Have you ever been?_ /həvjuː ˈevə bɪn/ · _I\'ve been_ /aɪv bɪn/ · _We\'ve seen it_ /wiːv ˈsiːn ɪt/. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Ask about the things on your partner\'s card. Use _Have you ever…?_ and answer with _Yes, I have_, _No, I haven\'t_ or _No, never_. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Have you ever __________?'],
  ['B', 'Yes, I __________. / No, I __________. / No, __________.'],
  ['A', 'Really? And have you ever __________?'],
  ['B', '__________. I\'ve always wanted to __________.'],
  ['A', 'Me too. What about __________?'],
  ['B', 'I\'ve __________ times.'],
  ['A', 'I haven\'t __________ either.'],
  ['B', 'Then we should __________ one day.'],
]));
out.push(table(['Card A – you', 'Card B – you'], [
  ['✓ been to Beirut (twice)', '✓ been to Bosra and Maaloula'],
  ['✗ eaten fish', '✗ travelled by plane'],
  ['✓ flown once – to Cairo', '✓ tried diving in Latakia'],
  ['✓ climbed Mount Qasioun at night', '✗ cooked kibbeh'],
  ['✗ slept in a tent', '✓ slept in a tent (three times)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **three** things you hear – one with _never_, one with a number of times, and one question with _ever_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  **Find someone who has…** Stand up and ask people in the class. Find a **different** person for each line, and write the name.  _…been to another country  ·  …eaten something they didn\'t like  ·  …lost something important  ·  …met somebody famous  ·  …cooked for more than ten people  ·  …never drunk coffee_'));
out.push(p('**b**  Sit down with a partner. Tell them about **two** of the people you found, and about **one** thing you have never done and would like to do. Your partner asks **three** questions. Then swap.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what you found:  _I found three people who have been to another country – Hiba has been to Beirut, by bus, and Rami has been to Jordan twice. Nobody has met anybody famous, but Omar says he has photographed a famous singer, which I think is nearly the same thing. I\'ve never slept in a tent, and nobody in my group has either. We\'ve decided that the class should go to Bludan in the summer._'));
out.push(p('**Listener task:** which experience in the class surprised you most? Which one would you like to have?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the English Club noticeboard. Answer the questions.'));
out.push(model([
  '**AL-YASMIN ENGLISH CLUB · MEMBER OF THE MONTH**',
  '**Nour**, 23 – junior technician at TechCare',
  'Nour joined the club in the autumn and she has not missed a single Saturday since. She repairs laptops for a living, and she has repaired four of ours for nothing, which is why we are writing about her.',
  'She has done more than most of us. She has been to Palmyra – she went with her school when she was eleven, and she still remembers the heat and the colour of the stone. She has worked in three different places, and she has taught her younger brother to use a computer.',
  'There are things she has never done. She has never travelled outside Syria, she has never been swimming in the sea, and she says she has never read a whole book in English. "Not yet," she told us. "The first two are expensive. The third one is free."',
  'Next month she starts a training course at work. We have asked her to come and tell us about it in the club.',
]));
out.push(item('1', 'Why is the club writing about Nour this month?'));
out.push(item('2', 'What does she still remember about Palmyra?'));
out.push(item('3', 'What does she mean by "The first two are expensive. The third one is free."?'));
out.push(writers([
  'A short profile of a person: **who they are** → **what they have done** → **what they have never done** → **what is next**.',
  'Open with the present perfect for the life: _She **has done** more than most of us._ Then, when you give **one** detail — a date, a place, an age — switch to the past simple: _She **went** with her school when she **was** eleven._',
  'Two or three **linkers** hold a profile together: _and · but · because · which is why_. Use at least two.',
  '⚠ An honest warning: a profile that is only good news is boring. The line everybody remembers in this one is the line about what she has **never** done.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a short profile of somebody in your class (35 words or more). Use the skeleton.'));
out.push(p('**MEMBER OF THE MONTH: ______________**   ______________ is ______________ and ______________.   ______________ has ______________ and ______________, which is why ______________.   There are things ______________ has never done: ______________ and ______________.   Next month ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Capital letters and full stops · the person\'s name at the top',
  'Present perfect: _has_ + the third form (_has been_, _has worked_, _has never…_)',
  'At least two linkers: _and · but · because · which is why_',
  'All three parts: what they have done · what they have never done · what is next',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **about yourself** for the club noticeboard (60 words or more): three things you have done in your life, two things you have never done, and one thing you are going to do this year.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s profile as **a club member who has never met them**. ★ _That is the most interesting line._  ✓ _One thing you could add._  ? _One question I still want to ask._'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the profiles on the wall. Walk round and read them. **Which person in this room has done something you would like to do?** Tell them.'));
out.push(hw('Write the **same profile about a person in your family** (40+ words): what they have done, what they have never done, and one thing they are going to do.'));

// ======================= 13.2 =======================
out.push(pb());
out.push(h2('13.2  When did you go?'));
out.push(p('**Function:** asking for the details of an experience   ·   **Grammar:** present perfect → past simple   ·   **Pronunciation:** _did you_ /dɪdʒə/ and contrast stress'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody says _"I\'ve been to Aleppo."_ What **five** questions do you want to ask next? Your teacher writes them on the board.'));
out.push(board('When did you go? Who with?', 'Aleppo – 2019, with her brother, 3 days'));
out.push(p('**b**  Which question is right? **1** _When have you gone? / When did you go?_  **2** _Have you ever been there? / Did you ever be there?_  **3** _How long did you stay? / How long have you stayed?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How old was Nour when she went to Palmyra?   **A** eight   **B** eleven   **C** sixteen'));
out.push(p('**b**  Listen again. **1** How did they travel, and how long did the journey take?   **2** What does Nour say she didn\'t understand at the time?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.3  Tell me about it', [
  ['Hiba', 'Nour, you said you\'ve been to Palmyra. I want all the details.'],
  ['Nour', '(laughs) It was a school trip. I was eleven.'],
  ['Hiba', 'When did you go – which month?'],
  ['Nour', 'April, I think. It wasn\'t hot yet, and the teachers kept saying "in July you would die here".'],
  ['Hiba', 'How did you travel?'],
  ['Nour', 'By bus, from Homs. It took about three hours. Forty children and two very tired teachers.'],
  ['Hiba', 'And how long did you stay?'],
  ['Nour', 'One day. We left at six in the morning and we came back at nine at night.'],
  ['Hiba', 'What do you remember?'],
  ['Nour', 'The colour. Everything was the same colour as the ground, and then the sun moved and it all changed. And the quiet – I have never heard quiet like that anywhere else.'],
  ['Hiba', 'Did you understand what you were looking at?'],
  ['Nour', 'Not at all. I was eleven. I counted the columns and I ate my sandwich. I understood it ten years later, from a photograph.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – two steps: the life, then the time**',
  table(['Step 1 – the question about your life', 'Step 2 – the questions about the time'], [
    ['**present perfect**\n_**Have** you ever **been** to Palmyra?_\n_– Yes, I **have**._',
     '**past simple**\n_**When did** you **go**?_ · _**How did** you travel?_\n_**How long did** you stay?_ · _**What did** you see?_'],
  ], [1, 1.4]),
  '⚠ As soon as you say **when**, you must change to the past simple: ~~When have you gone?~~ → _**When did** you **go**?_   ~~I have been there in 2019.~~ → _I **went** there in 2019._',
  '**The answer moves too:** _I\'ve been to Palmyra._ **(life)** → _I **went** with my school. It **took** three hours. We **stayed** one day._ **(the time)**',
  '**Question words for details:** When? · Where exactly? · Who with? · How? · How long? · How much? · What did you see / eat / do?',
  '**Practise:** Put the question in the right tense.  1 _​______ (you / ever / be) to Bosra?_  2 _​______ (you / go) there last summer?_  3 _​______ (how long / you / stay)?_  4 _​______ (she / ever / fly)?_  5 _​______ (who / she / go) with?_',
  '**Useful phrases:** I want all the details. · Tell me about it. · Not at all. · I don\'t remember exactly. · I\'ll never forget it.',
  '**Pronunciation.** 🔊 **Track 13.4** _did you_ runs together: /dɪdʒə/ – _When d\'you go?_ · _How d\'you travel?_ · _What d\'you see?_ Listen and repeat, then say the four questions in Step 2 quickly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the experience on B\'s card – first with _Have you ever…?_, then **four** questions in the past simple. B answers with the details on the card and invents the rest. Then swap.'));
out.push(dlg(null, [
  ['A', 'Have you ever __________?'],
  ['B', 'Yes, I __________.'],
  ['A', 'Really? When __________?'],
  ['B', '__________.'],
  ['A', 'Who __________ with?'],
  ['B', '__________.'],
  ['A', 'How long __________?'],
  ['B', '__________.'],
  ['A', 'And what __________ you remember?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – a night on Mount Qasioun', 'Card B – a week in Latakia'], [
  ['when: last August, after the exams', 'when: two summers ago, in July'],
  ['who with: four friends from university', 'who with: my sister and my cousins'],
  ['how: by taxi, and then on foot for an hour', 'how: by bus from the garage, five hours'],
  ['how long: all night – we came down at six', 'how long: six days, in a small hotel near the sea'],
  ['remember: the city with no noise at four in the morning', 'remember: swimming before breakfast every day'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **four** details you hear – when, who with, how long, and one thing they remember.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a **real** experience of your own: a journey, a day you remember, a first time. Tell your partner the one sentence: _I\'ve ______._ They must ask you **five** questions in the past simple before you say anything else.'));
out.push(p('**b**  Swap. This time the listener must **not** ask _"Was it nice?"_ – every question needs a question word.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s experience, in order:  _Lina has been to the Citadel of Aleppo. She went three years ago, in the spring, with her brother Ziad and his wife. They travelled by bus and it took five hours. They stayed two days. What she remembers is not the Citadel – it is the man in the small restaurant below it, who refused to take any money from them because they were visitors._'));
out.push(p('**Listener task:** whose experience would make the best short film? Write the one question you would still ask that person.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the post from the English Club page. Answer the questions.'));
out.push(model([
  '**THE DAY I WENT TO PALMYRA**  · by Nour',
  'People at the club keep asking me about Palmyra, so here is the whole story.',
  'I have been once, and I was eleven. We went in April, by bus from Homs, and the journey took about three hours. There were forty of us and two teachers, and one of the teachers sang for the first hour because she thought it would keep us quiet. It did not.',
  'We arrived at nine. I remember three things. The first is the colour: everything was the colour of the ground, and then the sun moved and the whole place changed. The second is the quiet. The third is my sandwich, which I ate much too early.',
  'I did not understand what I was looking at. I was eleven; I counted the columns and I waited for lunch. I understood it ten years later, in a photograph in a magazine, in a dentist\'s waiting room in Damascus.',
  'I have never been back. I am going to go again this year, and this time I am going to look.',
]));
out.push(item('1', 'Why did one of the teachers sing on the bus?'));
out.push(item('2', 'What three things does Nour remember?'));
out.push(item('3', 'Where was she when she finally understood Palmyra?'));
out.push(writers([
  'A story about an experience: **open in the present perfect** (_I **have been** once_) → **the details in the past simple** (when, how, how long) → **what you remember** → **what you think now**.',
  'Give **three** details, not ten. A reader remembers three.',
  'One small, strange, true detail is worth a paragraph of adjectives: _the sandwich_, _the dentist\'s waiting room_.',
  '⚠ The commonest mistake in this genre: starting the whole text in the present perfect. The first line only. After that, past simple.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write about an experience of your own (35 words or more).'));
out.push(p('**THE DAY I ______________**   I have ______________, and I was ______________.   We went ______________, by ______________, and the journey took ______________.   I remember ______________ and ______________.   I didn\'t ______________.   I am going to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Capital letters, full stops, and a title at the top',
  'The **first** line in the present perfect; everything after it in the past simple',
  'At least two linkers: _and · but · because · so_',
  'All three parts: the details · what you remember · what you think now',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full story of an experience you have had (60 words or more): one you have told people about many times, or one you have never told anybody.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s story as **a reader of the club page**. ★ _The detail I will remember._  ✓ _One place where I wanted more._  ? _One question the story did not answer._'));
out.push(stage('7R', 'Share', 4));
out.push(p('Three students read their stories aloud. **Which story made you want to ask a question?** Ask it.'));
out.push(hw('Write the **same experience from another person\'s side** (40+ words) – the teacher on the bus, the friend who was with you, the person who sold you the ticket.'));

// ======================= 13.3 =======================
out.push(pb());
out.push(h2('13.3  I\'ve been there three times'));
out.push(p('**Function:** saying how many times you have done something   ·   **Grammar:** _been_ and _gone_; once, twice, three times   ·   **Pronunciation:** _been_ /biːn/ and /bɪn/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many times have you done these things? _been to Aleppo · eaten in a restaurant this month · taken a taxi this week · missed a bus · moved house_. Count the class totals on the board.'));
out.push(board('I\'ve been there three times.', 'Aleppo: Omar – many times; Lina – twice'));
out.push(p('**b**  Two sentences. What is the difference? _Samer has **gone** to Aleppo._ / _Samer has **been** to Aleppo._ Which one means he is **not here now**?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Samer now?   **A** at home in Damascus   **B** in Aleppo   **C** at the bank'));
out.push(p('**b**  Listen again. **1** How many times has Rami been to Aleppo?   **2** Why does Omar say Rami doesn\'t know Aleppo?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.5  Been and gone', [
  ['Rami', 'Is Samer coming on Friday?'],
  ['Omar', 'No – he\'s gone to Aleppo. He left on Tuesday. The bank sent him for a week.'],
  ['Rami', 'Lucky man. I\'ve been to Aleppo twice and both times it was for work, and both times it rained.'],
  ['Omar', 'Twice! And you think you know the city.'],
  ['Rami', 'I didn\'t say I know it.'],
  ['Omar', 'Twice is not knowing a city. Twice is seeing a hotel and a meeting room. I\'ve been to the Citadel more times than I can count – I grew up ten minutes from it – and I still find a street I\'ve never walked down.'],
  ['Rami', 'All right. Then take me. I\'ve never seen it properly.'],
  ['Omar', 'In the spring. Not in the rain – you have had enough rain in Aleppo for one life.'],
  ['Rami', 'And Samer?'],
  ['Omar', 'Samer has gone for the bank, so Samer will see a hotel and a meeting room, exactly like you did. Nobody has ever seen a city from a meeting room.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _been_ or _gone_?**',
  table(['_has **gone** to_', '_has **been** to_'], [
    ['He **went** and he **is still there**.\n_Samer **has gone** to Aleppo._ (he is in Aleppo now)',
     'He **went** and he **came back** – or: it is in his life.\n_I **have been** to Aleppo twice._ (I am here now)'],
  ], [1, 1.2]),
  '⚠ Never use _gone_ about yourself when you are here: ~~I have gone to Aleppo twice.~~ → _I have **been** to Aleppo twice._',
  '**How many times?**  _once · twice · three times · four times · several times · many times · more times than I can count · never_',
  table(['Question', 'Answer'], [
    ['**How many times** have you been there?', 'Twice. · Three times. · Never. · I\'ve lost count.'],
    ['**Have you been** there **before**?', 'Yes, once. · No, this is the first time.'],
  ], [1, 1.4]),
  '**Practise:** _been_ or _gone_?  1 Maya isn\'t here – she\'s ______ to the pharmacy.  2 I\'ve ______ to Latakia four times.  3 Where\'s Lina? She\'s ______ to lunch.  4 Have you ever ______ to Bosra?  5 They\'ve ______ to the airport – their flight is at six.',
  '**Useful phrases:** How many times…? · This is the first time. · I\'ve lost count. · Twice is not knowing a city. · I\'ve never seen it properly.',
  '**Pronunciation.** 🔊 **Track 13.6** _been_ has a long sound when it is important – _I\'ve **BEEN** there_ /biːn/ – and a short one when it is not: _I\'ve been there twice_ /bɪn/. Listen and repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is looking for the people on the card; B says where each one has gone, and how many times A has been to the same place. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Is __________ here?'],
  ['B', 'No, __________ has gone to __________.'],
  ['A', 'Again? How many times has __________ been there this month?'],
  ['B', '__________ times. Have you ever been?'],
  ['A', 'I\'ve been __________. / I\'ve never __________.'],
  ['B', 'Then you should go with __________ next time.'],
]));
out.push(table(['Card A – the office today', 'Card B – the office today'], [
  ['Rana → the bank (third time this month)', 'Omar → the workshop (twice today)'],
  ['Mr Khaled → Homs (first time this year)', 'Nour → the storeroom (she has lost count)'],
  ['Lina → the post office (twice this week)', 'Mr Fouad → a meeting in Mezzeh (every Tuesday)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three places you hear and how many times each person has been.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Choose a city, a building or a place you know. Tell your partner **how many times** you have been there, **why** you went each time, and whether you really know it. Your partner must disagree at least once – like Omar: _"Twice is not knowing a city."_'));
out.push(p('**b**  Swap partners and do it again, faster. This time add a place you have **never** been to and would like to know properly.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba has been to Beirut three times, always by bus, always to see the same aunt, and she says she has never seen anything of the city except that street. I told her three times is not knowing a city and she agreed with me, which was disappointing – I wanted an argument. The place she has never been to and wants to know properly is Aleppo._'));
out.push(p('**Listener task:** write the name of one person who has been somewhere **more** times than you, and one who has been **fewer**.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three short notes from the club\'s "Places we know" page. Answer the questions.'));
out.push(model([
  '**PLACES WE KNOW** – three members, three cities',
  '**Omar · Aleppo.** I have been to the Citadel more times than I can count, because I grew up ten minutes from it. I have taken about two thousand photographs of it and I have never taken a good one. Last year I walked down a street I had never seen before, and it was four minutes from my mother\'s house. That is what a city is.',
  '**Lina · Homs.** I have been three times, all three for a wedding, which means I have seen one hall, one hotel and the road between them. I know the food very well and the city not at all.',
  '**Hiba · Beirut.** Three times, always by bus, always to the same aunt in the same street. The bus takes four hours and my aunt talks for six. I have never seen the sea there, although it is twenty minutes away. This year I am going to be a bad niece and go to the sea first.',
]));
out.push(item('1', 'Why has Omar never taken a good photograph of the Citadel, in his opinion?'));
out.push(item('2', 'What has Lina seen of Homs?'));
out.push(item('3', 'What does Hiba mean by "I am going to be a bad niece"?'));
out.push(writers([
  'A short "places I know" note: **the place + how many times** → **why you went** → **what you saw and what you didn\'t** → **one line that says what you really think**.',
  'The pattern that makes these notes work is a **contrast**: _I know the food very well **and** the city not at all._ Write your contrast first and build the note round it.',
  'Numbers are the whole point of this genre. _Three times · four hours · twenty minutes · two thousand photographs._ Use at least three.',
  '⚠ Don\'t write a guidebook. Nobody wants your opinion of the Citadel; they want to know how many times you have stood in front of it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "Places we know" note (35 words or more).'));
out.push(p('**______________ · ______________.**  I have been ______________ times, ______________, which means ______________.  I have seen ______________ but I have never ______________.  ______________ takes ______________.  This year I am going to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Capital letters, full stops, and the place name at the top',
  '_been_ and _gone_ used correctly · _have / has_ + the third form',
  'At least three numbers, and at least two linkers (_and · but · because · which means_)',
  'All three parts: how many times · why · the contrast at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about **a place you have been to many times** (60 words or more): how many times, why, what you have never done there, and whether you really know it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **somebody who has never been there**. ★ _The number that surprised me._  ✓ _One thing you could add._  ? _Would you take me?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the notes into one class page: **Places we know**. Which member of this class knows a place best – and how do you know?'));
out.push(hw('Write a note about a place you have been to **only once** (40+ words): when, why, and the one thing you remember.'));

// ======================= 13.4 =======================
out.push(pb());
out.push(h2('13.4  I\'ve just finished it'));
out.push(p('**Function:** talking about something you have just done   ·   **Grammar:** _just_ / _already_ / _yet_   ·   **Pronunciation:** stress on _just_ and _already_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What have you done **today**, before this lesson? Make a class list of ten things – and mark the ones somebody did in the **last hour**.'));
out.push(board('I\'ve just eaten.', 'Done today: 10 · in the last hour: 3'));
out.push(p('**b**  Put these in order, from the longest ago to now: _I finished it last week · I\'ve already finished it · I\'ve just finished it · I haven\'t finished it yet_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Has Lina sent the report?   **A** not yet   **B** she has just sent it   **C** she sent it last week'));
out.push(p('**b**  Listen again. **1** Who has already read the report?   **2** What has Rana **not** done yet, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.7  Have you sent it yet?', [
  ['Rana', 'Lina – the January report. Have you sent it yet?'],
  ['Lina', 'I\'ve just sent it. Two minutes ago. Look at the screen, it\'s still open.'],
  ['Rana', 'Thank you. Mr Khaled has asked me about it four times this morning.'],
  ['Lina', 'He\'s already read it.'],
  ['Rana', 'He can\'t have. You\'ve just sent it.'],
  ['Lina', 'He has already read it. He replied before I finished my coffee. He has written "good – one question" and then the question is three pages long.'],
  ['Rana', '(laughs) That is Mr Khaled. Have you answered him?'],
  ['Lina', 'Not yet. I\'ve only just read the question. Have you finished the supplier list?'],
  ['Rana', 'No, I haven\'t started it yet, because I\'ve been on the phone to Türkiye since nine o\'clock.'],
  ['Lina', 'Then neither of us has done the thing we were going to do today.'],
  ['Rana', 'We\'ve both done something else instead. That is an office.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _just_, _already_, _yet_**',
  table(['_just_', '_already_', '_yet_'], [
    ['a very short time ago\n_I\'ve **just** sent it._\n_She has **just** arrived._',
     'sooner than you expected\n_He has **already** read it._\n_We\'ve **already** eaten._',
     'up to now – **questions and negatives**, at the **end**\n_Have you sent it **yet**?_\n_I haven\'t started it **yet**._'],
  ], [1, 1, 1.5]),
  '**Word order:** _just_ and _already_ go **between** _have_ and the third form: _I have **just** sent it._ · _He has **already** read it._  _yet_ goes at the **end** of the sentence.',
  '⚠ ~~I have sent it already yet.~~  ⚠ ~~Have you already finished?~~ → at A2 use _yet_ in the question: _Have you finished **yet**?_  ⚠ ~~I haven\'t finished already.~~ → _I haven\'t finished **yet**._',
  '**Practise:** Put the word in the right place.  1 I have eaten. (just)  2 Have you spoken to him? (yet)  3 She hasn\'t replied. (yet)  4 They have left. (already)  5 We have paid the bill. (already)  6 Has the bus gone? (yet)',
  '**Useful phrases:** Have you …​ yet? · Not yet. · I\'ve only just… · Two minutes ago. · He can\'t have! · That is an office.',
  '**Pronunciation.** 🔊 **Track 13.8** The stress falls on _just_ and _already_, not on the verb: _I\'ve **JUST** sent it._ · _He\'s al**REA**dy read it._ Listen and repeat, then say them again with no stress and hear the difference.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the manager and asks about every job on the list. B answers from the card: _just_, _already_ or _not yet_ – with a reason for the ones that are not done. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Have you __________ yet?'],
  ['B', 'I\'ve just __________.'],
  ['A', 'Good. And __________?'],
  ['B', 'I\'ve already __________ – I did it __________.'],
  ['A', 'And __________?'],
  ['B', 'Not yet, because __________.'],
  ['A', 'When can you __________?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – TechCare, Thursday morning', 'Card B – Medica Trading, Thursday morning'], [
  ['the two laptop repairs → just finished', 'the January report → just sent'],
  ['the order for cables → already sent (Tuesday)', 'the supplier list → already finished (yesterday)'],
  ['the workshop phone → not yet, on the phone all morning', 'Mr Khaled\'s question → not yet, three pages long'],
  ['the price list for Mr Fouad → not yet, the printer is broken', 'the Türkiye call → not yet, they ring at four'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three jobs that are **done** and the three that are **not done yet**, with one reason.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Make a list of **six** things you have to do this week. Tell your partner which ones you have **already** done, which one you have **just** done, and which ones you haven\'t done **yet** – with a reason for each.'));
out.push(p('**b**  Swap partners. Your new partner is somebody who is waiting for you to finish those jobs. They ask _"Have you … yet?"_ about each one, and they are not very patient.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar has already done four of his six jobs, which I think is a lie. He has just finished the laptop repairs – he showed me the message. He hasn\'t written the price list yet, because the printer at TechCare has been broken since Monday and nobody has called anybody about it. And he hasn\'t phoned his mother yet, which he said very quietly._'));
out.push(p('**Listener task:** who in this class has done the most? Who has the best reason for not doing something?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lina sends at the end of the day. Answer the questions.'));
out.push(model([
  '**To:** Mr Khaled   **Subject:** Thursday – where things are',
  'Dear Mr Khaled,',
  'Before I leave, here is where everything is.',
  'I have already sent the January report and I have just answered your question about the March figures – the answer is in the last paragraph, not in the table, because the table was making it worse.',
  'I have not finished the supplier list yet. Rana has been on the phone to Türkiye since nine, and the list needs their new prices, which we still haven\'t received. I will finish it on Sunday morning.',
  'I have already ordered the paper for the printer. It has not arrived yet, but they have promised Saturday.',
  'Best regards,',
  'Lina Haddad · Accounts · Medica Trading',
]));
out.push(item('1', 'What has Lina just done?'));
out.push(item('2', 'Why isn\'t the supplier list finished?'));
out.push(item('3', 'Which job is finished at Lina\'s end but not finished completely?'));
out.push(writers([
  'An end-of-day message: **greeting** → **what is done** (_already_, _just_) → **what is not done yet, and why** → **when it will be done** → **ending and your name**.',
  'Put the **good news first**. A manager who reads "I haven\'t finished" in line one stops reading carefully.',
  'Every _not yet_ needs two things after it: a **reason** and a **date**. _I have not finished it yet **because** … I will finish it **on Sunday**._',
  '⚠ Don\'t apologise three times. One short reason is more professional than three sorrys.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an end-of-day message to your manager or your teacher (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   I have already ______________ and I have just ______________.   I have not ______________ yet, because ______________. I will ______________ on ______________.   Best regards,   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending and a full name',
  '_just_ and _already_ between _have_ and the verb · _yet_ at the end',
  'At least two linkers (_and · but · because · so_), and two short paragraphs',
  'Every _not yet_ has a reason **and** a date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the message you would send at the end of **a real day** of yours (60 words or more) – at work, at college, or at home: what you have already done, what you have just done, what you haven\'t done yet and when you will do it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who is waiting for the work**. ★ _This line made me relax._  ✓ _One thing I still need to know._  ? _When exactly?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read two messages aloud. **Which one would you be happy to receive at six o\'clock on a Thursday?** Why?'));
out.push(hw('Write **the manager\'s reply** (40+ words): thank them, ask about the one thing that is not finished, and say when you need it.'));

// ======================= 13.5 =======================
out.push(pb());
out.push(h2('13.5  I\'ve known her since 2019'));
out.push(p('**Function:** saying how long   ·   **Grammar:** _for_ and _since_   ·   **Pronunciation:** weak _for_ /fə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How long have the people in this class been studying English? Ask three people and put the answers on the board in two columns: a **period** (two years) or a **starting point** (since September).'));
out.push(board('How long have you studied English?', 'Hiba: 6 years · Omar: since 2016'));
out.push(p('**b**  _for_ or _since_? _______ two years · _______ September · _______ a long time · _______ I was twelve · _______ ten minutes · _______ last Thursday_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the job?   **A** a teacher at the centre   **B** an assistant in a bookshop   **C** a technician'));
out.push(p('**b**  Listen again. **1** How long has Lama lived in Damascus?   **2** What does Mrs Mona ask her to bring, and by when?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.9  At the bookshop', [
  ['Mrs Mona', 'So. You have seen the card in the window. Three afternoons a week, four until eight. Tell me about yourself.'],
  ['Lama', 'My name is Lama Nasser. I\'m a student – second year, English literature, at Damascus University.'],
  ['Mrs Mona', 'How long have you lived in Damascus?'],
  ['Lama', 'For two years. I\'m from Latakia. I live with my sister in Mezzeh.'],
  ['Mrs Mona', 'And how long have you studied English?'],
  ['Lama', 'Since I was twelve, at school, and then seriously since I started university.'],
  ['Mrs Mona', 'Have you ever worked in a shop?'],
  ['Lama', 'No, never. But I worked for two months on a children\'s summer course in Latakia, and I have been coming to this shop since my first week in Damascus. I know where everything is.'],
  ['Mrs Mona', '(laughs) That is true. You have been standing in the poetry corner for two years and you have bought four books.'],
  ['Lama', 'Five.'],
  ['Mrs Mona', 'Five. Bring me a CV – in English, one page. Can you do that by Sunday?'],
  ['Lama', 'I\'ll bring it on Saturday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _How long…?_ with _for_ and _since_**',
  table(['_for_ + a period of time', '_since_ + a point in time'], [
    ['_for_ two years · _for_ ten minutes · _for_ a long time · _for_ ages',
     '_since_ September · _since_ 2019 · _since_ Monday · _since_ I was twelve · _since_ I started university'],
  ], [1, 1.3]),
  '_**How long have** you **lived** here?_ – _I\'ve lived here **for** two years._ / _**since** 2022._',
  'The action **started in the past and is still true now**: _I\'ve known her since 2019_ (I know her now). Compare: _I knew her in 2019_ (and now – who knows?).',
  '⚠ ~~I live here since two years.~~ → _I **have lived** here **for** two years._   ⚠ ~~since two years~~ → _**for** two years_.   ⚠ ~~I am here since Monday.~~ → _I **have been** here **since** Monday._',
  '**Practise:** _for_ or _since_, and the right form of the verb.  1 She ______ (work) there ______ January.  2 We ______ (know) each other ______ ten years.  3 I ______ (not see) him ______ the wedding.  4 How long ______ you ______ (have) that phone?  5 They ______ (live) in Mezzeh ______ 2021.',
  '**Useful phrases:** How long have you…? · For about two years. · Since I was twelve. · Not for very long. · I\'ve been coming here since…',
  '**Pronunciation.** 🔊 **Track 13.10** _for_ is weak: /fə/ – _for two years_ /fə tuː jɪəz/ · _for ages_ /fər ˈeɪdʒɪz/. _since_ keeps its sound: /sɪns/. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the owner of the shop or the café on the card; B is the person asking for the job. Ask and answer **five** questions with _How long…?_, _Have you ever…?_ and _Can you…?_ Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Tell me about yourself.'],
  ['B', 'My name is __________. I\'m __________.'],
  ['A', 'How long have you __________?'],
  ['B', 'For __________. / Since __________.'],
  ['A', 'Have you ever __________?'],
  ['B', '__________, but I __________ for __________.'],
  ['A', 'Can you __________?'],
  ['B', '__________.'],
  ['A', 'Bring me __________ by __________.'],
  ['B', 'I\'ll bring it on __________.'],
]));
out.push(table(['Card A – Dar Al-Kalima Bookshop', 'Card B – the café at Al-Yasmin Centre'], [
  ['the job: assistant, 3 afternoons, 4–8', 'the job: weekend help, Friday and Saturday mornings'],
  ['you need: somebody who reads English', 'you need: somebody who is quick and polite'],
  ['you ask for: a CV in English, one page, by Sunday', 'you ask for: two names of people who know them, by Thursday'],
  ['you are: friendly but you ask everything twice', 'you are: in a hurry – you have four people to see'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** _How long…?_ answers you hear, and whether each one used _for_ or _since_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Interview your partner about their real life: how long they have lived where they live, how long they have studied English, how long they have known their oldest friend, how long they have had the thing in their pocket. **Five** questions, all with _How long…?_'));
out.push(p('**b**  Swap partners. Now answer the same five questions about **somebody in your family**, and your partner must ask one extra question about each answer.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what you learned:  _Nour has lived in Damascus for four years but she has worked at TechCare for only fourteen months, which surprised me – she behaves as if she built the place. She has studied English since she was ten. She has known her oldest friend since the first day of school, and they still speak every week. And she has had the same phone for five years, which she says is a record in her family._'));
out.push(p('**Listener task:** who has done something for the longest time? Write one fact you would not have guessed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lama sends with her CV. Answer the questions.'));
out.push(model([
  '**To:** Dar Al-Kalima Bookshop   **Subject:** Part-time assistant – Lama Nasser',
  'Dear Mrs Mona,',
  'Thank you for seeing me on Thursday. I am sending my CV, as you asked.',
  'I am in my second year of English literature at Damascus University, and I have lived in Damascus for two years. I have studied English since I was twelve. I have never worked in a shop, but I worked for two months on a children\'s summer course in Latakia, where I was responsible for a group of fourteen children, and I have been a customer of yours since my first week here.',
  'I am free on Monday, Tuesday and Thursday afternoons, and I can start at any time.',
  'Thank you for considering my application.',
  'Best regards,',
  'Lama Nasser · 0955 612 408 · lama.nasser@mail.sy',
]));
out.push(item('1', 'What did Mrs Mona ask Lama to send?'));
out.push(item('2', 'How does Lama answer the problem that she has never worked in a shop?'));
out.push(item('3', 'Which three days can she work?'));
out.push(writers([
  'A message with an application: **thank them for the meeting** → **who you are, and how long** → **the thing you have never done, and what you have done instead** → **when you are free** → **thank you and your contact details**.',
  'The strongest sentence in this genre is the honest one: _I have **never** worked in a shop, **but** I worked for two months…_ Say the weakness, then turn it with _but_.',
  'Give **dates and lengths**, not adjectives. _For two years_ and _since I was twelve_ are worth more than _very experienced_.',
  '⚠ Do not write "I am hard-working and I love books". Everybody writes that. Write what you have done and for how long, and let the reader decide.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message with an application for a job or a course (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   Thank you for ______________. I am sending ______________, as you asked.   I am ______________, and I have ______________ for ______________. I have ______________ since ______________. I have never ______________, but I ______________.   I am free ______________.   Best regards,   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, a full name and one way to contact you',
  '_for_ + a period · _since_ + a point · _have_ / _has_ + the third form',
  'At least two linkers (_and · but · because · where_), and two short paragraphs',
  'All three parts: who you are and how long · the honest _but_ sentence · when you are free',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a real application message of your own (60 words or more) – for a job, a course, a club or a volunteer place. Include at least **three** _for_ or _since_ sentences and one honest _but_ sentence.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who has to choose**. ★ _The sentence that would get you an interview._  ✓ _One fact that is missing._  ? _One thing I would ask you at the interview._'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three messages aloud with the names removed. **Which one would you give the job to?** You must give a reason from the text, not a feeling.'));
out.push(hw('Write **Mrs Mona\'s reply** (40+ words): thank Lama, say what you have decided, and give her a day and a time.'));

// ======================= 13.6 =======================
out.push(pb());
out.push(h2('13.6  It\'s the best book I\'ve ever read'));
out.push(p('**Function:** recommending something from your own experience   ·   **Grammar:** superlative + present perfect   ·   **Pronunciation:** stress on the superlative'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish these three sentences about your own life, and your teacher will collect the best ones on the board. _The best thing I have ever eaten is… · The longest journey I have ever made is… · The most useful thing I have ever bought is…_'));
out.push(board('It\'s the best book I\'ve ever read.', 'Recommended: _The Prophet_ – Hiba'));
out.push(p('**b**  Make the superlative: _good → ______ · bad → ______ · long → ______ · interesting → ______ · beautiful → ______ · easy → _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they choosing?   **A** a film for the club   **B** a book for the club shelf   **C** a present for Ms Huda'));
out.push(p('**b**  Listen again. **1** Why does Rami say his choice is "not the best book"?   **2** What does Lama say about short books?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.11  One book each', [
  ['Lama', 'Ms Huda wants one book from each of us for the club shelf. One book, and one sentence about why.'],
  ['Hiba', 'That is the hardest question anybody has asked me this year.'],
  ['Rami', 'It isn\'t hard. Mine is a book about bridges. It is not the best book I have ever read – it\'s probably the worst written – but it is the most useful thing I have ever bought, and I have read it four times.'],
  ['Lama', 'A book about bridges.'],
  ['Rami', 'You asked for honest, not for beautiful.'],
  ['Hiba', 'Mine is the first novel I ever finished in English. It took me five months. It is not the most interesting story in the world, but it is the proudest I have ever been of a shelf.'],
  ['Lama', 'That is a good sentence. Write that one down.'],
  ['Hiba', 'And you?'],
  ['Lama', 'A collection of poems, ninety pages. It is the shortest book on my shelf and I have read it more times than everything else together. Short books are the ones you go back to.'],
  ['Rami', 'So the three of us have chosen the worst written, the slowest to read, and the shortest.'],
  ['Lama', 'And every one of them is the best in its way. Put that on the card.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the superlative + the present perfect**',
  table(['the pattern', 'examples'], [
    ['**the** + superlative + noun + **I\'ve ever** + third form',
     '_It\'s **the best** book **I\'ve ever read**._\n_She\'s **the kindest** person **I\'ve ever met**._\n_That\'s **the most useful** thing **I\'ve ever bought**._'],
  ], [1, 1.6]),
  '**Softer, and very common:** _It\'s **one of the best** books I\'ve ever read._ · _It\'s **probably** the worst._',
  '**Superlatives to recycle:** good → **the best** · bad → **the worst** · long → **the longest** · easy → **the easiest** · interesting → **the most interesting** · beautiful → **the most beautiful** · proud → **the proudest**',
  '⚠ ~~the most best~~ → _the best_.   ⚠ ~~It\'s the best book that I ever read.~~ → _…that **I\'ve ever read**_.   ⚠ ~~the more beautiful place I have seen~~ → _the **most** beautiful place_.',
  '**Practise:** Make one sentence.  1 film / good / I / see  2 journey / long / she / make  3 food / bad / we / eat  4 city / beautiful / he / visit  5 day / proud / I / have',
  '**Useful phrases:** It\'s the best … I\'ve ever… · one of the best… · probably the worst… · in its way · Write that one down.',
  '**Pronunciation.** 🔊 **Track 13.12** The stress goes on the **superlative**, not on the noun: _It\'s the **BEST** book I\'ve ever read._ · _the **MOST USEFUL** thing I\'ve ever bought._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for a recommendation from the list on the card; B recommends something from their own life with a superlative and **one** reason. A must ask **two** questions about it. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'I need __________. What do you recommend?'],
  ['B', '__________. It\'s the __________ I\'ve ever __________.'],
  ['A', 'Really? Why?'],
  ['B', 'Because __________.'],
  ['A', 'How many times have you __________?'],
  ['B', '__________.'],
  ['A', 'And is there one you would **not** recommend?'],
  ['B', 'Yes – __________. It\'s the __________ I\'ve ever __________.'],
]));
out.push(table(['Card A – ask for…', 'Card B – ask for…'], [
  ['a book to read on a long bus journey', 'a place to take a visitor in your city'],
  ['a cheap place to eat near the centre', 'a film to watch with a family'],
  ['a useful thing to buy for a student flat', 'a thing to learn that changed your week'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** recommendations and the **one** thing somebody would not recommend.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Bring one real recommendation to your partner: a book, a film, a place, a shop, a food, a thing you bought. Say what it is, use a superlative with _I\'ve ever_, give **one** honest reason, and add one thing that is **wrong** with it. Your partner decides whether they will try it, and says why.'));
out.push(p('**b**  Swap partners. This time recommend **the opposite**: the worst thing you have ever bought, eaten, watched or read – and warn them properly.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rami recommended a book about bridges, which is the most useful thing he has ever bought and, he says, the worst written. He has read it four times. The thing that is wrong with it is that there are no pictures, which for a book about bridges is a strange decision. I am not going to read it, but I liked the way he talked about it – he has clearly read it four times._'));
out.push(p('**Listener task:** write down the one recommendation from today that you will actually try, and who gave it to you.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three cards from the club shelf. Answer the questions.'));
out.push(model([
  '**ONE BOOK EACH** – cards from the club shelf',
  '**Rami.** A book about bridges, 1997, second-hand. It is not the best book I have ever read; it is probably the worst written. But it is the most useful thing I have ever bought, I have read it four times, and I have never needed a picture, because I have stood under the bridges. Take it if you build something.',
  '**Hiba.** The first novel I ever finished in English. It took me five months and I read the last page twice because I did not want it to be over. It is not the most interesting story in the world. It is the proudest I have ever been of a shelf. Take it if you are stuck at page forty of something.',
  '**Lama.** Ninety pages of poems. It is the shortest book I own and I have read it more times than everything else together. Short books are the ones you go back to. Take it if you have ten minutes and a bad week.',
]));
out.push(item('1', 'Why does Rami say he has never needed a picture?'));
out.push(item('2', 'Why did Hiba read the last page twice?'));
out.push(item('3', 'Each card ends with the same kind of sentence. What does it do?'));
out.push(writers([
  'A recommendation card: **what it is** → **the honest superlative** (_the best / the worst / the most useful … I have ever …_) → **one piece of proof from your own life** → **who should take it** (_Take it if…_).',
  'The proof is the part people believe: _I have read it four times._ · _It took me five months._ Give a **number**.',
  'Admit **one** fault. A recommendation with no fault reads like an advertisement, and nobody believes an advertisement.',
  '⚠ Don\'t tell the story. A card is not a summary — your reader does not want to know what happens, they want to know what it did to you.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own card for the club shelf (35 words or more).'));
out.push(p('**______________.**  ______________, ______________.  It is not the ______________ I have ever ______________; it is probably ______________. But it is the ______________ I have ever ______________, and I have ______________.  Take it if ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Capital letters, full stops, and your name at the top of the card',
  '_the_ + superlative + _I have ever_ + the third form (not ~~the most best~~)',
  'At least two linkers (_but · because · and · so_), and one number as proof',
  'All three parts: the honest superlative · the proof · _Take it if…_',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a recommendation card (60 words or more) for the thing you would most like somebody in this room to try: a book, a film, a place, a food, a shop, a habit. One superlative, one fault, one number, and a _Take it if…_ line.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card as **somebody deciding whether to try it**. ★ _The line that convinced me._  ✓ _One thing that would convince me more._  ? _Would you lend it to me?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the cards on the shelf, face up. Walk round and take **one**. **Whose card did you take, and which sentence made you take it?**'));
out.push(hw('Write the card for **the worst thing you have ever bought** (40+ words): what it was, the superlative, the proof, and _Don\'t take it if…_'));

// ======================= 13.7 =======================
out.push(pb());
out.push(h2('13.7  Review & Mediate: What does the CV say?'));
out.push(p('**Function:** explaining a CV to somebody who does not read English   ·   **Recycling:** Units 1–13   ·   **Exam practice:** A2 Key Reading Part 4, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 13 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I have ever been to Aleppo.  **2** When have you gone there?  **3** I have gone to Beirut twice.  **4** Have you already finished? – Not already.  **5** I live here since two years.  **6** It is the most best film I ever saw.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the CV that Lama took to the bookshop.'));
out.push(box(null, [
  '**CURRICULUM VITAE**',
  '**LAMA NASSER**',
  '15 Al-Jalaa Street, Mezzeh, Damascus  ·  0955 612 408  ·  lama.nasser@mail.sy',
  '**EDUCATION**',
  'Damascus University — BA English Literature, 2nd year (present)',
  'Al-Basel Secondary School, Latakia — Secondary Certificate',
  '**WORK EXPERIENCE**',
  'Summer assistant, Children\'s Summer Course, Latakia (2 months) — responsible for a group of 14 children aged 8–10; prepared daily activities in English.',
  '**SKILLS**',
  'Arabic (mother tongue) · English (good, written and spoken) · Word, Excel · cash handling',
  '**INTERESTS**',
  'Reading (poetry), swimming, the university theatre group',
  '**AVAILABILITY**',
  'Monday, Tuesday and Thursday afternoons · can start immediately',
  '**REFERENCES**',
  'Available on request',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lama explains the CV to her Aunt Suad, who does not read English. What does Aunt Suad think is missing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.13  Explaining the CV', [
  ['Aunt Suad', 'Let me see it. I can\'t read any of this. What is this word at the top – "curriculum"?'],
  ['Lama', 'It just means "my life on one page". Everything I have studied and everything I have done.'],
  ['Aunt Suad', 'And this part?'],
  ['Lama', 'That\'s education – where I have studied. University first, then the school in Latakia.'],
  ['Aunt Suad', 'Why is the school second? You went to the school first.'],
  ['Lama', 'Because in English you write the newest one first and go backwards. The reader wants to know where I am now, not where I was at six.'],
  ['Aunt Suad', 'Hmm. And "work experience" – you have never had a job.'],
  ['Lama', 'I have. The summer course in Latakia, two months, fourteen children. It says I was responsible for them and that I prepared the activities in English.'],
  ['Aunt Suad', 'Two months is not a job.'],
  ['Lama', 'It is on a CV. And here it says when I can work – Monday, Tuesday and Thursday afternoons.'],
  ['Aunt Suad', 'What is "references"?'],
  ['Lama', 'People who know my work and will say I\'m honest. "Available on request" means: ask me and I\'ll give you their names. You don\'t put the names on the page.'],
  ['Aunt Suad', 'And where is your photograph? Every paper I have ever signed had a photograph.'],
  ['Lama', 'You don\'t put a photograph on an English CV. They want to read what I have done, not look at me.'],
  ['Aunt Suad', 'In my day they looked at you. Take it to her on Saturday, and comb your hair anyway.'],
]));
out.push(sp());
out.push(box('Language box – explaining a document to somebody who cannot read it', [
  'Give the **shape of the page first**, before any detail: _It has five parts: where I studied, what I have done, what I can do, when I can work, and the people who know me._',
  'Translate an English **heading** into what it does, not word for word: _"References" = people who will say I\'m honest._ · _"Available on request" = ask me and I\'ll give the names._',
  'Explain the **order**, because that is where people get lost: _In English you write the newest first and go backwards._',
  'Answer the question they are really asking. _"You have never had a job"_ → _I have: two months, fourteen children, and it says what I was responsible for._',
  'Say what is **not** there and why: _There is no photograph, because…_',
  '**Useful phrases:** It just means… · in English you… · It says that… · That part is… · Ask me and I\'ll… · You don\'t put … on an English CV.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the documents below and does **not** show it. A explains it to B and C, who have never seen one and ask about anything that is unclear. B and C then say what they would do next. Change roles with the other document.'));
out.push(table(['Document A – a job advert in a window', 'Document B – a course certificate'], [
  ['PART-TIME ASSISTANT WANTED', 'AL-YASMIN LANGUAGE CENTRE'],
  ['3 afternoons a week, 4–8 pm', 'This is to certify that ______ has successfully completed'],
  ['Must read English · no experience necessary', 'Level A2 (120 hours) · December'],
  ['Apply in person with a CV (one page, English)', 'Attendance: 92% · Final result: Pass with merit'],
  ['Ask for Mrs Mona · no telephone calls', 'Signed: Director of Studies · stamped'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write **three** things the document says and **one** thing it does **not** say that you would want to know.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** English document in your own life: a form, a ticket, a bill, a label, a certificate, a message from an app, an advert. Explain it to your partner so completely that they could use it without asking anybody else. They must ask about anything you leave out, and about anything that is **missing** from the document. Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Hiba explained the certificate she got in December. It has her full name, the level — A2 — and the number of hours, which is a hundred and twenty. It says her attendance was ninety-two per cent and that she passed with merit, which she had to explain to me: it means better than a pass but not the top. It is signed by the Director of Studies and it has the centre\'s stamp, and she says the stamp is the part that matters, because without it anybody could print one. The thing it does not say is what A2 actually means, so I decided I would write "A2 (Cambridge level)" next to it if I ever send mine anywhere._'));
out.push(p('**Listener task:** did they explain the **shape** of the document before the details? What did they leave out – a date, a number, a condition, a signature?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 4)', 7));
out.push(p('Read the text and choose **A**, **B** or **C** for each question.'));
out.push(model([
  '**MY FIRST INTERVIEW**  · by Lama Nasser',
  'I have wanted a part-time job since my first term at university, but I have never had one, and that is a difficult sentence to write on a page that is supposed to make somebody employ you.',
  'The card appeared in the window of the bookshop in Shaalan in January: three afternoons a week, must read English, apply in person. I have been going into that shop since my first week in Damascus. I have bought five books there and read about forty.',
  'I went in on the Thursday. Mrs Mona asked me two questions: how long have you lived in Damascus, and how long have you studied English? Then she asked: "Have you ever worked in a shop?" I said no. I have learned since then that the word "no" is only half an answer, because I then told her about the two months I spent on a children\'s summer course, and her face changed completely. Fourteen children, she said. Then you can manage a Saturday.',
  'She asked for a CV in English, one page, by Sunday. I wrote it on Friday, my aunt read it on Friday evening and told me it was missing a photograph, and I took it in on Saturday morning.',
  'I have not had an answer yet. But I have learned one thing already: never say only "no".',
]));
[
  '**1**  What has Lama never done before?     **A** read an English book   **B** had a part-time job   **C** written in English',
  '**2**  Where did she see the advertisement?     **A** in a newspaper   **B** on the internet   **C** in a shop window',
  '**3**  How well does she know the bookshop?     **A** she has been going there for about two years   **B** she went there once   **C** she has never been inside',
  '**4**  What changed Mrs Mona\'s face?     **A** Lama said she has bought five books   **B** Lama told her about the fourteen children   **C** Lama said she can start immediately',
  '**5**  What did Lama\'s aunt say about the CV?     **A** it was too long   **B** it had no photograph   **C** it had a mistake in it',
  '**6**  What has happened by the end of the text?     **A** Lama has got the job   **B** Lama has not had an answer   **C** Mrs Mona has said no',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend about the job and the interview (35 words or more). Use the CV and the story above.'));
out.push(p('Hi ______!   I\'ve got news. I\'ve applied for ______________ at ______________. It\'s ______________ a week, from ______________ to ______________.   I went in on ______________ and I spoke to ______________. She asked me how long ______________ and whether ______________. I said ______________.   She asked for ______________ by ______________, so I ______________.   I haven\'t ______________ yet. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, and two short paragraphs',
  'Present perfect for the news · past simple for the details of the day',
  'At least two linkers (_and · but · because · so_)',
  'All three content points: what the job is · what happened at the interview · what has not happened yet',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** has asked you about a new experience you have had.',
  'Write an email to Sam.  In your email:  •  say **what you have done** for the first time  •  say **when and where** it happened  •  tell him **one thing you learned** from it.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 13 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ never been to Palmyra.   a) am   b) have   c) has',
  '2  Have you ever ___ a plane?   a) take   b) took   c) taken',
  '3  He\'s ___ to Aleppo – he comes back on Sunday.   a) been   b) gone   c) go',
  '4  I\'ve ___ finished the report – two minutes ago.   a) yet   b) just   c) since',
  '5  Have you sent it ___?   a) yet   b) already   c) just',
  '6  I\'ve lived here ___ two years.   a) since   b) for   c) ago',
  '7  She\'s worked there ___ September.   a) for   b) since   c) from',
  '8  It\'s the ___ film I\'ve ever seen.   a) most best   b) best   c) better',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 13.14** Ms Huda talks about five people in the class. What has each person done? Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they have done'], [
  ['1  Nour ___', 'A  has applied for a first job'],
  ['2  Hiba ___', 'B  has never travelled by plane'],
  ['3  Lama ___', 'C  has driven to another city for the first time'],
  ['4  Omar ___', 'D  has worked in the same place for more than a year'],
  ['5  Fadi ___', 'E  has been to the same place more times than he can count'],
  ['', 'F  has started a university course this month'],
  ['', 'G  has moved into a new flat'],
], [1, 2]));
out.push(dlg('Track 13.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, here is where everybody is this January. Nour has worked at TechCare for fourteen months now – she started as a trainee and she has had her contract since December. Hiba has still never been on a plane; she has been to Beirut three times and all three times she went by bus. Lama has applied for her first job, in a bookshop in Shaalan, and she took her CV in on Saturday. Omar went home to Aleppo at the new year and walked up to the Citadel again – he says he has been there more times than he can count, and he still found a street he has never walked down. And Fadi drove all the way to Homs on his own for the first time, which took him two hours and, he says, ten years off his mother\'s life.'],
]));
out.push(p('**C  Writing.** A friend is going to do something for the first time next week – a journey, an interview, a course. Write them a message (40+ words): say what you have done that is similar, when you did it, one thing that went wrong, and one piece of advice.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 13)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask and answer _Have you ever…?_ about my whole life',
  '☐ change to the past simple as soon as I say **when**',
  '☐ use _been_ and _gone_ correctly',
  '☐ say how many times I have done something',
  '☐ use _just_, _already_ and _yet_ in the right place',
  '☐ say how long with _for_ and _since_',
  '☐ recommend something with _the best … I\'ve ever …_',
  '☐ explain an English document to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 14 – PLANS AND PREDICTIONS', [
  'Unit 13 was about everything you **have** done. Unit 14 is about what you think **will** happen: predictions, instant decisions, and the difference between _I\'ll do it_ and _I\'m going to do it_.',
  'Before the next lesson: write down **three** predictions for this year – one about yourself, one about this class, and one about your city. Keep them. We will read them again in Unit 24.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 13 · Student\'s Book');
