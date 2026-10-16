// Proactive English A2 · Syria Edition · Book 2 · Unit 16 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 16  Then and Now'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**16.1**  talk about something you did regularly in the past and do not do now',
  '**16.2**  ask somebody about their childhood',
  '**16.3**  describe how a place has changed',
  '**16.4**  say what has stopped and what still happens',
  '**16.5**  compare then and now',
  '**16.6**  report what older people say about the past',
  '**16.7**  Review & Mediate: explain old photographs and their captions',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The then-and-now wall.** Everybody brings one photograph taken at least ten years ago. They go on the wall in Room 12 with a caption under each one.',
  '**Omar\'s Aleppo folder** — he has about two thousand photographs of the city, going back to when he was fourteen.   ·   **Rami\'s father, Abu Rami**, comes to the club one Thursday and talks about the Homs he grew up in.',
  '**Mrs Mona** at the bookshop remembers when there were nine bookshops in that street. There are two.',
], C.lyellow, C.orange));

// ======================= 16.1 =======================
out.push(pb());
out.push(h2('16.1  I used to walk to school'));
out.push(p('**Function:** talking about a finished past habit   ·   **Grammar:** _used to_ / _didn\'t use to_   ·   **Pronunciation:** _used to_ /ˈjuːstə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What did you do every day five years ago that you do not do now? _travel · eat · watch · wear · study · live_. Your teacher writes five of the class\'s answers on the board.'));
out.push(board('I used to walk to school.', 'used to = then, not now'));
out.push(p('**b**  True or false for you? _I used to walk to school. · I used to drink coffee. · I didn\'t use to like this city. · I used to have more free time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is on the wall of Room 12?   **A** the class timetable   **B** photographs from at least ten years ago   **C** a map of the city'));
out.push(p('**b**  Listen again. **1** What did Omar use to do every Friday when he was fourteen?   **2** What didn\'t Hiba use to like?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.1  The wall', [
  ['Ms Huda', 'One photograph each, ten years old or more. Put it on the wall and tell us one thing you used to do.'],
  ['Omar', 'Mine is the Citadel from the north side. I was fourteen. Every Friday I used to walk up there with a camera that belonged to my uncle, and I used to take four photographs, because four was all the film I could afford.'],
  ['Hiba', 'Four?'],
  ['Omar', 'Four. I used to think about each one for ten minutes. Now I take forty in a minute and I look at none of them.'],
  ['Hiba', 'Mine is my grandmother\'s kitchen in 2013. I used to spend every summer in that room. I didn\'t use to like it — I used to think it was boring and hot and full of women telling me what to do.'],
  ['Ms Huda', 'And now?'],
  ['Hiba', 'Now I would give a month of my life for one afternoon in it.'],
  ['Rami', 'Mine is not interesting. It is the road to Homs.'],
  ['Omar', 'Everything you say is not interesting turns out to be the best one.'],
  ['Rami', 'We used to stop at a place halfway, every single time, for tea. My father used to say you cannot arrive without stopping. It isn\'t there any more. I didn\'t take the photograph for the tea place. It is just in the corner.'],
  ['Ms Huda', 'That is how it usually is.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _used to_: a habit that has finished**',
  table(['+', '–', '?'], [
    ['I **used to** walk.\nShe **used to** live here.\nWe **used to** stop for tea.',
     'I **didn\'t use to** like it.\nHe **didn\'t use to** smoke.\n(no _d_ after _didn\'t_)',
     '**Did** you **use to** walk?\n– Yes, I **did**. / No, I **didn\'t**.'],
  ], [1.1, 1.2, 1.2]),
  '**One form for everybody** — I / you / he / she / we / they **used to**. It always means: **true then, not true now.**',
  '⚠ **The spelling trap.** _used to_ keeps the **d** only in the **positive**. After _didn\'t_ and in questions the **d disappears**: _I **used to** go._ but _I **didn\'t use to** go._ and _**Did** you **use to** go?_',
  '⚠ ~~I used to go there last year.~~ _used to_ never takes a finished time expression. For one event, use the past simple: _I **went** there last year._',
  '⚠ ~~I am used to walk.~~ That is a different phrase altogether and it is not in this unit. Here it is always just _**used to** + bare verb_.',
  '**For a state, _used to_ works too:** _I **used to have** more free time._ · _She **used to be** a teacher._ · _We **used to live** in Homs._',
  '**Practise:** Put the verb in.  1 I ______ (walk) to school every day.  2 She ______ (not / like) coffee.  3 ______ you ______ (live) in Aleppo?  4 We ______ (stop) halfway for tea.  5 He ______ (not / have) a telephone.  6 They ______ (be) neighbours of ours.',
  '**Useful phrases:** I used to… · I didn\'t use to… · every single time · It isn\'t there any more. · That is how it usually is.',
  '**Pronunciation.** 🔊 **Track 16.2** _used to_ is one word in speech: /ˈjuːstə/ — not /juːzd tuː/. _I used to walk_ /aɪ ˈjuːstə wɔːk/. Listen and repeat, and notice that _use to_ in the negative sounds **exactly the same**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about a time on the card; B says **three** things they used to do and **one** they didn\'t use to do. A must ask _"and now?"_ once. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Tell me about __________.'],
  ['B', 'I used to __________ every __________.'],
  ['A', 'Every?'],
  ['B', 'Every. And I used to __________, and I used to __________.'],
  ['A', 'And now?'],
  ['B', 'Now I __________.'],
  ['A', 'Was there anything you didn\'t use to like?'],
  ['B', 'I didn\'t use to __________. __________.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [
  ['when you were fourteen', 'your summers as a child'],
  ['your first job', 'the street where you grew up'],
  ['five years ago', 'before you had a telephone'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **three** _used to_ sentences and **one** _didn\'t use to_. Check the spelling of each one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take out your photograph. Tell your partner **when** it was taken, **three** things you used to do at that time, and **one** thing you didn\'t use to like. Your partner must ask about the thing in the corner of the photograph that you did not mention.'));
out.push(p('**b**  Swap. Then each of you say the **one** thing from that time you would do again tomorrow if you could.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s photograph:  _Rami\'s photograph is the road to Homs, which he said was not interesting and which turned out to be the best one in the room. His family used to drive it every month, and they used to stop halfway at a tea place, every single time, because his father used to say you cannot arrive without stopping. He didn\'t use to pay any attention to the place at all. It is in the corner of the photograph by accident, and it isn\'t there any more, and that corner is now the only picture of it that he has._'));
out.push(p('**Listener task:** whose photograph has something important by accident in it? Write what it is.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three captions from the wall. Answer the questions.'));
out.push(model([
  '**THE WALL — Room 12**',
  '**Omar · Aleppo, the Citadel from the north, 2014.** I was fourteen. Every Friday I used to walk up here with my uncle\'s camera and take exactly four photographs, because four was all the film I could buy. I used to think about each one for ten minutes. I didn\'t use to delete anything, because you couldn\'t.',
  '**Hiba · my grandmother\'s kitchen, 2013.** I used to spend every summer in this room and I didn\'t use to like it. It was hot, it was boring, and there were always four women in it telling me to do something. The woman on the left is my grandmother. She used to make bread on that table every morning of her life.',
  '**Rami · the road to Homs, 2012.** We used to drive this road once a month. We used to stop halfway, every single time, at the tea place you can just see in the corner — my father used to say you cannot arrive without stopping. I didn\'t take this photograph for the tea place. It is the only picture of it that exists.',
]));
out.push(item('1', 'Why did Omar only take four photographs?'));
out.push(item('2', 'What did Hiba\'s grandmother use to do every morning?'));
out.push(item('3', 'Why is Rami\'s photograph important now?'));
out.push(writers([
  'A photograph caption: **who, where, when** → **what you used to do** → **one thing you didn\'t use to like or notice** → **the line that turns it round**.',
  'Say **how often**, exactly: _every Friday_ · _every summer_ · _once a month_ · _every single time_. A habit without a frequency is just a memory.',
  'The strongest captions end with what the photograph means **now**, not then: _It is the only picture of it that exists._ Write the last line last, after you have looked at the photograph again.',
  '⚠ Do not describe the whole picture. The reader can see it. Tell them the thing they cannot see.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the caption for your own photograph (35 words or more).'));
out.push(p('**______________ · ______________, ______________.**  I was ______________.  Every ______________ I used to ______________.  I used to ______________ and I used to ______________.  I didn\'t use to ______________.  ______________ is now ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Your name, the place and the year at the top',
  '_used to_ with the **d** in the positive; _didn\'t use to_ with **no d**',
  'At least two frequencies (_every Friday_, _once a month_, _every single time_)',
  'All three parts: the habits · the thing you didn\'t like or notice · what it means now',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about **a year of your life you can remember clearly** (60 words or more): what you used to do every week, what you didn\'t use to like, what you used to think would happen, and what you know now.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who did not know them then**. ★ _The habit I can see most clearly._  ✓ _One sentence that needs a frequency._  ? _What happened to it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the captions under the photographs on the wall. Walk round. **Which photograph do you want to ask a question about?** Find the person and ask.'));
out.push(hw('Write the caption your **mother or father** would write for the same photograph (40+ words): what **they** used to do, and what they didn\'t use to say.'));

// ======================= 16.2 =======================
out.push(pb());
out.push(h2('16.2  Did you use to play in the street?'));
out.push(p('**Function:** asking about somebody\'s childhood   ·   **Grammar:** _Did you use to…?_   ·   **Pronunciation:** _Did you use to_ /dɪdʒə ˈjuːstə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In ninety seconds, the class must produce **eight** questions beginning _Did you use to…?_ about childhood. Count them.'));
out.push(board('Did you use to play in the street?', 'Questions in 90 seconds: 8 ✓'));
out.push(p('**b**  Correct the question. **1** _Did you used to play?_  **2** _Do you use to live here?_  **3** _Did you use to liked it?_  **4** _You used to walk to school?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is asking Mrs Mona the questions?   **A** Lama   **B** Hiba   **C** a customer'));
out.push(p('**b**  Listen again. **1** How many bookshops did there use to be in that street?   **2** What did people use to do on a Thursday evening, according to Mrs Mona?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.3  Nine bookshops', [
  ['Lama', 'Mrs Mona, can I ask you something for my class? We\'re doing then and now.'],
  ['Mrs Mona', 'Then and now. I am the right age for that. Ask.'],
  ['Lama', 'Did you use to work here when you were young?'],
  ['Mrs Mona', 'I did. My father had the shop. I used to sit on a box behind that counter and watch the door.'],
  ['Lama', 'Did there use to be other bookshops in this street?'],
  ['Mrs Mona', 'There used to be nine. Nine, in four hundred metres. Now there are two, and one of them is really a stationery shop with a shelf.'],
  ['Lama', 'What happened?'],
  ['Mrs Mona', 'Everything and nothing. They closed one at a time over thirty years. Nobody noticed any of them closing. People noticed when there were three.'],
  ['Lama', 'Did people use to buy more books?'],
  ['Mrs Mona', 'No — and everybody expects me to say yes. They used to buy the same number of books. But they used to come in. On a Thursday evening this street used to be full of people walking slowly and looking in windows, and they didn\'t use to be in a hurry, and some of them used to buy a book.'],
  ['Lama', 'And now?'],
  ['Mrs Mona', 'Now people come in to buy a book they already know the name of. They are not wrong to. But a bookshop lives on the other kind.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – asking about the past with _use to_**',
  table(['question', 'short answer'], [
    ['**Did** you **use to** play in the street?', 'Yes, I **did**. / No, I **didn\'t**.'],
    ['**Did there use to be** a shop here?', 'Yes, there **did**. / There **used to be** three.'],
    ['**What did** you **use to do** in the summer?', '_I used to stay with my grandmother._'],
    ['**Where did** you **use to live**?', '_We used to live in Homs._'],
  ], [1.3, 1.3]),
  '⚠ **The d is only in the statement.** ~~Did you used to play?~~ → _**Did** you **use to** play?_ The _did_ already carries the past.',
  '⚠ ~~Did you use to played?~~ → _Did you use to **play**?_ — bare verb after _use to_, always.',
  '⚠ ~~Do you use to live here?~~ There is no present form. For now, use the present simple: _**Do** you **live** here?_',
  '**_there used to be_** is the one to drill: _**Did there use to be** a cinema here?_ – _There **used to be** two._ – _There **didn\'t use to be** a road at all._',
  '**Practise:** Make the question.  1 (you / play / in the street) ______?  2 (there / be / a cinema here) ______?  3 (what / you / do / in the summer) ______?  4 (your father / work / here) ______?  5 (people / buy / more books) ______?',
  '**Useful phrases:** Can I ask you something for my class? · I am the right age for that. · one at a time · Nobody noticed. · everybody expects me to say yes',
  '**Pronunciation.** 🔊 **Track 16.4** The whole question runs together and the stress lands late: _**Did** you **use to** **PLAY** in the street?_ /dɪdʒə ˈjuːstə pleɪ/. Listen and repeat, then ask your partner three questions at that speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A interviews B about the time on the card, with **six** questions — at least one _Did there use to be…?_ and at least one _What did you use to…?_ B answers in character. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Can I ask you about __________?'],
  ['B', 'Ask.'],
  ['A', 'Did you use to __________?'],
  ['B', 'I did. I used to __________.'],
  ['A', 'Did there use to be __________?'],
  ['B', 'There used to be __________. Now there __________.'],
  ['A', 'What did you use to __________?'],
  ['B', '__________.'],
  ['A', 'Did people use to __________?'],
  ['B', 'No — and everybody expects me to say yes. They used to __________.'],
]));
out.push(table(['Card A – you are a shopkeeper, 40 years in the same street', 'Card B – you are a teacher, 35 years in the same school'], [
  ['nine shops like yours → two', 'forty-five children in a class → thirty'],
  ['Thursday evenings: full of people walking slowly', 'everybody used to walk to school'],
  ['people used to come in without wanting anything', 'parents didn\'t use to come to the school at all'],
  ['the street used to be closed to cars', 'there didn\'t use to be a library'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** numbers you hear (then and now) and the **one** thing that surprised the interviewer.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Interview your partner about their childhood with **six** real questions. They must answer honestly, and **one** of their answers must be about something they didn\'t use to like. You must ask one follow-up about every answer.'));
out.push(p('**b**  Swap. Then both of you find the **one** question you were asked that nobody has ever asked you before, and say so.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour used to live on the ground floor of a building with no lift and twenty-two children in it. She used to play in the street until her mother shouted from the window, and she says there didn\'t use to be a single car parked in it, which is why they could play there at all. They didn\'t use to go anywhere in the summer. She says the thing she didn\'t use to like was being the oldest, because the oldest one is responsible for all the others and gets nothing for it. The question nobody has ever asked her is what her street smelled like._'));
out.push(p('**Listener task:** write down the best question you heard today. You will use it again in 16.6.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lama\'s write-up of the interview. Answer the questions.'));
out.push(model([
  '**NINE BOOKSHOPS** — an interview with Mrs Mona, Dar Al-Kalima, Shaalan',
  'I asked Mrs Mona six questions for the then-and-now wall. She said she is the right age for the subject.',
  '**Did you use to work here?** She did. Her father had the shop, and she used to sit on a box behind the counter and watch the door.',
  '**Did there use to be other bookshops in this street?** There used to be nine, in four hundred metres. There are now two, and one of them is a stationery shop with a shelf.',
  '**What happened?** They closed one at a time over thirty years. She says nobody noticed any of them closing, and that people only noticed when there were three left.',
  '**Did people use to buy more books?** No — and she says everybody expects her to say yes. People used to buy the same number of books. What has changed is that they used to **come in**. On a Thursday evening the street used to be full of people walking slowly, and some of them used to buy a book.',
  'Her last sentence is the one I keep thinking about: people now come in to buy a book they already know the name of, and a bookshop lives on the other kind.',
]));
out.push(item('1', 'Where did Mrs Mona use to sit when she was a child?'));
out.push(item('2', 'What does Lama say people only noticed when there were three shops left?'));
out.push(item('3', 'According to Mrs Mona, what has really changed?'));
out.push(writers([
  'An interview write-up: **who, where, why** → **each question in bold, the answer underneath** → **the sentence you keep thinking about**, at the end.',
  'Print the **question** as you asked it. An interview rewritten as a paragraph loses the thing that makes it an interview, and the reader can no longer tell what was asked and what was volunteered.',
  'Use _She said_ / _She says_ to report — and keep the numbers exactly: _nine, in four hundred metres_ · _thirty years_ · _two_.',
  '⚠ Do not correct what the person said, and do not improve it. Mrs Mona\'s _everything and nothing_ is better than anything you can write for her.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write up an interview with somebody older than you (35 words or more) — your partner from Stage 4, or somebody in your family.'));
out.push(p('**______________** — an interview with ______________   I asked ______________ ______________ questions about ______________.   **Did you use to ______________?** ______________.   **Did there use to be ______________?** There used to be ______________. Now ______________.   **What ______________?** ______________.   The sentence I keep thinking about is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, who you interviewed, where and when',
  '_Did … use to_ with **no d** in every question · _used to_ with the d in every answer',
  'At least two numbers, exactly as the person said them',
  'A last line with the one sentence you kept — in their words, not yours',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Interview somebody at least twenty years older than you — in this room or at home — and write it up (60 words or more). Six questions, their numbers, and their best sentence at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s write-up as **somebody who has never met that person**. ★ _The answer I did not expect._  ✓ _One question whose answer is missing._  ? _What did you want to ask and didn\'t?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three last sentences aloud, without the interviews. **Can the class guess who said each one — a shopkeeper, a teacher, a grandmother?** The best quotations carry the person in them.'));
out.push(hw('Write **six questions you would ask the oldest person you know** (40+ words), and mark the two you have never asked anybody.'));

// ======================= 16.3 =======================
out.push(pb());
out.push(h2('16.3  There used to be a cinema here'));
out.push(p('**Function:** describing how a place has changed   ·   **Grammar:** _there used to be_ / _there didn\'t use to be_   ·   **Pronunciation:** weak _there_ /ðə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your street, ten years ago. In pairs, make **five** sentences: three with _There used to be…_ and two with _There didn\'t use to be…_'));
out.push(board('There used to be a cinema here.', 'there used to be / there didn\'t use to be'));
out.push(p('**b**  _was_ or _used to be_? Which can you use for each one? **1** _There ______ a cinema here for forty years._  **2** _There ______ a very good film on last night._  **3** _There ______ three bakeries on this street._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are Omar and Rami looking at?   **A** a map   **B** two photographs of the same corner   **C** a building site'));
out.push(p('**b**  Listen again. **1** What used to be where the bank is now?   **2** What didn\'t use to be there at all?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.5  The same corner, twice', [
  ['Omar', 'Same corner. This one is 2011, this one is last month. Don\'t look at the buildings, look at the bottom of the picture.'],
  ['Rami', 'There used to be a tree.'],
  ['Omar', 'There used to be four. And there used to be a cinema, where the bank is now — you can just see the sign.'],
  ['Rami', 'I didn\'t know there was a cinema there.'],
  ['Omar', 'Nobody your age knows. It closed in about 2008 and it was a shop for six years before it was a bank.'],
  ['Rami', 'And this white thing?'],
  ['Omar', 'That is the thing that interests me. There didn\'t use to be a pavement on that side. None. People used to walk in the road and cars used to go round them, and it worked, in the way that things work when everybody knows the rule.'],
  ['Rami', 'So that is better now.'],
  ['Omar', 'That is better now. Not everything on this wall is going to be a sad story. There didn\'t use to be a pharmacy either, and there used to be one bus an hour instead of six.'],
  ['Rami', 'So what has actually got worse?'],
  ['Omar', 'The trees. Four to one. Everything else on this corner is either better or the same, and I have been looking at these two pictures for a week to be able to say that honestly.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing a place that has changed**',
  table(['+ there was something', '– there was nothing'], [
    ['_**There used to be** a cinema here._\n_**There used to be** four trees._',
     '_**There didn\'t use to be** a pavement._\n_**There didn\'t use to be** a pharmacy._'],
  ], [1.2, 1.2]),
  '**The question:** _**Did there use to be** a cinema here?_ – _Yes, there **did**. / No, there **didn\'t**._',
  '⚠ _there used to be_ does **not** change for singular and plural: _there used to be **a cinema**_ · _there used to be **four trees**_. One form for both.',
  '⚠ _there was_ or _there used to be_? Use _**used to**_ for a **long state that has ended**: _There **used to be** a cinema here_ (for years; it has gone). Use _**was**_ for **one occasion**: _There **was** a good film on last night._ ~~There used to be a film on last night.~~',
  '**Useful pairs for describing change:**  _a cinema → a bank_ · _four trees → one_ · _no pavement → a pavement_ · _one bus an hour → six_ · _a tea place → nothing_',
  '**Practise:** _there used to be_, _there didn\'t use to be_, or _there was_?  1 ______ a cinema on this corner until 2008.  2 ______ a very good concert last Friday.  3 ______ any shops on this side at all.  4 ______ three bakeries and now there is one.  5 ______ a pavement here, which is why people walked in the road.',
  '**Useful phrases:** Don\'t look at the buildings, look at… · Nobody your age knows. · in the way that things work when everybody knows the rule · What has actually got worse? · to be able to say that honestly',
  '**Pronunciation.** 🔊 **Track 16.6** _there_ at the start of this phrase is weak — /ðə/, not /ðeə/: _**There** used to be a cinema_ /ðə ˈjuːstə bi ə ˈsɪnəmə/. Listen and repeat until the first word nearly disappears.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes the place on the card as it used to be; B asks **three** questions about what has changed. Then swap cards. Use at least two _there didn\'t use to be_ sentences each.'));
out.push(dlg(null, [
  ['A', 'This is __________, about __________ years ago.'],
  ['B', 'What was here?'],
  ['A', 'There used to be __________, where __________ is now.'],
  ['B', 'And this?'],
  ['A', 'There didn\'t use to be __________ at all. People used to __________.'],
  ['B', 'So what has got better?'],
  ['A', '__________.'],
  ['B', 'And what has got worse?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – your corner, ten years ago', 'Card B – your school or workplace, ten years ago'], [
  ['a cinema → a bank', 'forty-five in a class → thirty'],
  ['four trees → one', 'no computers → a room full'],
  ['no pavement → a pavement', 'one entrance → three'],
  ['one bus an hour → six', 'no library → a library nobody uses'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **two** things that have got better and **one** that has got worse.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe a place you know well as it was ten years ago — your street, your school, a market, a station. **Five** sentences with _there used to be_ and _there didn\'t use to be_. Your partner must then ask the hard question: _"what has actually got worse?"_'));
out.push(p('**b**  Swap. This time your partner must find **one** change you called bad that is really just different, and argue with you about it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar\'s corner in Aleppo has a bank where there used to be a cinema, and one tree where there used to be four. But he was honest about the rest: there didn\'t use to be a pavement on that side at all, and there didn\'t use to be a pharmacy, and there used to be one bus an hour instead of six. He says the only thing that has really got worse is the trees, and that he looked at the two photographs for a week before he would say that out loud. I argued with him about the cinema and I lost, because he asked me when I last went to a cinema._'));
out.push(p('**Listener task:** write one change in this room\'s stories that everybody calls bad and that you are not sure about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the then-and-now wall. Answer the questions.'));
out.push(model([
  '**THE SAME CORNER, 2011 AND NOW** — Omar',
  'Two photographs of one corner, taken from the same three metres of pavement fourteen years apart. Don\'t look at the buildings. Look at the bottom.',
  '**Gone.** There used to be a cinema where the bank is — you can just see the sign in the 2011 picture. It closed in about 2008, was a shop for six years, and became a bank. There used to be four trees. There is one.',
  '**Arrived.** There didn\'t use to be a pavement on the north side at all. People used to walk in the road and the cars used to go round them, and it worked, in the way things work when everybody knows the rule. There didn\'t use to be a pharmacy. There used to be one bus an hour; there are six.',
  '**Honest.** I have looked at these two pictures for a week so that I could write this sentence properly: the only thing on this corner that is worse is the trees. Four to one. Everything else is better or the same.',
  'That is not the page I expected to write, and I am putting it up anyway.',
]));
out.push(item('1', 'What was in the bank\'s building between the cinema and the bank?'));
out.push(item('2', 'Why did the old system without a pavement work?'));
out.push(item('3', 'Why does Omar say it is not the page he expected to write?'));
out.push(writers([
  'A then-and-now page: **where you stood** → **Gone** → **Arrived** → **Honest**. Three headings and the work does itself.',
  'The **Arrived** section is the one everybody forgets. A page with only losses on it is a feeling, not a description — and the reader stops believing it halfway down.',
  'Count things. _Four trees → one._ _One bus an hour → six._ Two numbers beat a paragraph of _it was much nicer_.',
  '⚠ Write the **Honest** paragraph last and make yourself say what has actually got better, even when you do not want to. That paragraph is what makes the other two worth reading.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a then-and-now page about a place you know (35 words or more).'));
out.push(p('**______________, ______________ AND NOW**   ______________.   **Gone.** There used to be ______________, where ______________ is now. There used to be ______________.   **Arrived.** There didn\'t use to be ______________ at all. People used to ______________.   **Honest.** The only thing that is really worse is ______________. Everything else ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the place and the two dates, and your name',
  '_there used to be_ (same form for one thing and for four) · _there didn\'t use to be_ with no **d**',
  'At least two pairs of numbers, then and now',
  'All three headings — and the **Arrived** one is not empty',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full then-and-now page (60 words or more) for the place you know best. Gone, Arrived, Honest — and the Honest paragraph must contain something you did not want to write.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has never been there**. ★ _The change I can see most clearly._  ✓ _Your **Arrived** paragraph is shorter than the other two — what else came?_  ? _Would you live there now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the pages on the wall next to the photographs. **Count the class\'s Gone and Arrived sentences.** Which column is longer, and is that the city or is that us?'));
out.push(hw('Write the **Arrived** paragraph again (40+ words), twice as long, for the same place. It is harder, and that is the point.'));

// ======================= 16.4 =======================
out.push(pb());
out.push(h2('16.4  We don\'t do that any more'));
out.push(p('**Function:** saying what has stopped and what continues   ·   **Grammar:** _not … any more_ / _no longer_ / _still_   ·   **Pronunciation:** stress on _still_ and _any more_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Two columns on the board: **things this class still does** and **things we don\'t do any more**. _write letters · use cash · listen to the radio · learn things by heart · visit people without ringing first_.'));
out.push(board('We don\'t do that any more.', 'still ✓ / not … any more ✗'));
out.push(p('**b**  Rewrite with _still_ or _any more_. **1** _I used to walk to work and I walk to work now._  **2** _I used to smoke and I stopped._  **3** _The shop was open in 2015 and it is open now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Rami say he still does?   **A** drive to Damascus   **B** make the tea the same way   **C** write letters'));
out.push(p('**b**  Listen again. **1** Name **two** things that people in his street no longer do.   **2** What does he say still happens every Friday?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.7  Abu Rami comes to the club', [
  ['Ms Huda', 'Abu Rami, the class wants to know what has stopped and what hasn\'t.'],
  ['Abu Rami', 'That is a better question than "what was it like". Nobody can answer "what was it like".'],
  ['Hiba', 'So — what has stopped?'],
  ['Abu Rami', 'People don\'t visit without ringing first any more. That one changed in about ten years and nobody decided it. When I was your age, somebody arriving at the door at eight in the evening was normal. Now it means something is wrong.'],
  ['Hiba', 'And?'],
  ['Abu Rami', 'Nobody writes letters any more. I don\'t either — I am not going to pretend. And children no longer play in the street on our street, because there is nowhere to play, not because of anything else.'],
  ['Omar', 'Is there anything that hasn\'t changed?'],
  ['Abu Rami', 'Plenty. We still eat at the same time. The bread still comes out at the same hour and there is still a queue for it, the same queue, with different people in it. And every Friday my brother still comes, and he still sits in the same chair, and we still argue about the same thing, which we have been arguing about since 1979.'],
  ['Rami', 'He doesn\'t know what the argument is about any more.'],
  ['Abu Rami', 'I know exactly what it is about. He is still wrong.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – what has stopped and what continues**',
  table(['it has **stopped**', 'it **continues**'], [
    ['_We **don\'t** do that **any more**._\n_Nobody writes letters **any more**._\n_She **no longer** works here._ (more formal)',
     '_We **still** eat at the same time._\n_He **still** comes every Friday._\n_There **is still** a queue._'],
  ], [1.3, 1.2]),
  '**Where the words go.** _**still**_ goes **before** the main verb but **after** _be_: _I **still** work here._ · _It **is still** open._  _**any more**_ goes at the **end**: _I don\'t work here **any more**._',
  '⚠ _any more_ needs a **negative**: ~~I work here any more.~~ → _I **don\'t** work here any more._',
  '⚠ ~~I don\'t still work here.~~ → _I don\'t work here **any more**._  _still_ is for things that continue; the negative is _not … any more_.',
  '⚠ **_no longer_** is the formal one and it goes where _still_ goes, with a **positive** verb: _She **no longer** works here._ ~~She doesn\'t no longer work here.~~',
  '**Practise:** Rewrite with the word in brackets.  1 I used to smoke. I stopped. (any more)  2 The shop was open then and it is open now. (still)  3 People used to visit without ringing. They don\'t now. (any more)  4 He worked here in 2010 and he works here now. (still)  5 We used to write letters. We stopped. (no longer)',
  '**Useful phrases:** …any more · still · nobody decided it · I am not going to pretend. · Is there anything that hasn\'t changed? · He is still wrong.',
  '**Pronunciation.** 🔊 **Track 16.8** Both words carry heavy stress, because both are the point of the sentence: _We **STILL** eat at the same time._ · _Nobody writes letters **ANY MORE**._ Listen and repeat, then say each sentence flat and hear it lose its meaning.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the area on the card; B gives **two** things that have stopped and **two** that continue. A must then ask _"is there anything that hasn\'t changed at all?"_ Then swap cards.'));
out.push(dlg(null, [
  ['A', 'What has stopped, with __________?'],
  ['B', 'People don\'t __________ any more. And nobody __________ any more.'],
  ['A', 'Why?'],
  ['B', '__________. Nobody decided it.'],
  ['A', 'Is there anything that hasn\'t changed?'],
  ['B', 'Plenty. We still __________, and there is still __________.'],
  ['A', 'The same?'],
  ['B', 'The same __________, with different __________ in it.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [
  ['the way people visit each other', 'the way people buy things'],
  ['the way people travel in your city', 'the way people get their news'],
  ['what children do after school', 'what families do at a wedding'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **two** things that have stopped and **two** that are still the same. Underline the _still_ and the _any more_ in each.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner **three** things your family no longer does and **three** things your family still does, exactly as they were. Your partner must ask _"who decided?"_ about one of the stopped ones. Usually nobody did.'));
out.push(p('**b**  Swap. Then each of you name the **one** thing you would most like to start doing again, and say honestly whether you are going to.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In Hiba\'s family nobody writes letters any more, nobody sits on the balcony in the evening any more, and they don\'t eat together on a Tuesday any more because her brother\'s shifts changed and then it just never came back. Nobody decided any of those. What they still do: they still all go to her grandmother\'s on the last Friday of the month, her mother still makes too much food, and her uncle still arrives ninety minutes late and still says the traffic. The one she wants back is the balcony, and she says she is not going to, because the balcony needs four people and she can only produce herself._'));
out.push(p('**Listener task:** write down one thing from the room that stopped because **nobody decided** it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the club noticeboard. Answer the questions.'));
out.push(model([
  '**WHAT WE NO LONGER DO, AND WHAT WE STILL DO** — Abu Rami, 71, Homs',
  'The club asked me what it was like. Nobody can answer that. So I will answer the other question.',
  '**Stopped.** People don\'t visit without ringing first any more. That changed over about ten years and nobody decided it; somebody at your door at eight in the evening used to be an ordinary Tuesday, and now it means a death or a problem. Nobody writes letters any more, including me, and I am not going to pretend otherwise. And children no longer play in our street — not because of anything you are thinking, but because there is nowhere to put a foot down.',
  '**Still.** We still eat at the same time. The bread still comes out at the same hour and there is still a queue for it: the same queue, with different people in it. My brother still comes every Friday, still sits in the same chair, and we still argue about the same thing, which we started arguing about in 1979.',
  'He is still wrong, and he still thinks I am. That has not changed either, and I would not change it.',
]));
out.push(item('1', 'What does somebody at the door at eight in the evening mean now?'));
out.push(item('2', 'Why do children no longer play in his street?'));
out.push(item('3', 'What has not changed about his brother?'));
out.push(writers([
  'A "stopped and still" page: **the question you are answering** → **Stopped** → **Still** → **the last line that belongs to both**.',
  'The two halves must be the **same length**. A page where Stopped is four lines and Still is one is not a description of a place, it is a mood.',
  'For the stopped things, say **when** and **who decided**: _over about ten years, and nobody decided it_. That sentence is the truest thing in the whole unit.',
  '⚠ The _Still_ half is where the writing has to be exact: _the same queue, with different people in it_. "Things are still the same" tells the reader nothing at all.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "stopped and still" page about your family, your street or your work (35 words or more).'));
out.push(p('**WHAT WE NO LONGER DO, AND WHAT WE STILL DO** — ______________   ______________.   **Stopped.** People don\'t ______________ any more. That changed over ______________ and ______________ decided it. Nobody ______________ any more.   **Still.** We still ______________. There is still ______________: the same ______________, with different ______________. ______________ still ______________ every ______________.   ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and the person it belongs to',
  '_still_ before the verb (but after _be_) · _any more_ at the end, with a negative',
  'The two halves are about the same length',
  'At least one stopped thing with **when** and **who decided** it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) about the group you belong to — your family, your street, your office, this class. Stopped and Still, the same length, and one last line that belongs to both.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody from that family or that street**. ★ _The line that is exactly right._  ✓ _One half is shorter — what else belongs in it?_  ? _Did anybody decide?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **Still** halves aloud, without the Stopped halves. **Which group would you want to belong to?** It is always the one with the most exact detail in it.'));
out.push(hw('Write the **Still** half again for the same group (40+ words), with nothing general in it at all — every line an exact thing somebody still does, at a time, in a place.'));

// ======================= 16.5 =======================
out.push(pb());
out.push(h2('16.5  It\'s busier than it used to be'));
out.push(p('**Function:** comparing then and now   ·   **Grammar:** comparative + _than it used to be_   ·   **Pronunciation:** weak _than_ /ðən/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish five sentences about your city: _It\'s ______er than it used to be._ Your teacher collects them and the class votes on which is most true.'));
out.push(board('It\'s busier than it used to be.', 'comparative + than it used to be'));
out.push(p('**b**  Make the comparative: _busy → ______ · expensive → ______ · good → ______ · far → ______ · easy → ______ · crowded → _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do they disagree about?   **A** whether the city is better   **B** whether the class is harder than it used to be   **C** whether the bread is as good'));
out.push(p('**b**  Listen again. **1** What does Nour say is easier than it used to be?   **2** What does Lina say is worse, and what is her evidence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.9  Better or worse', [
  ['Ms Huda', 'One sentence each. Is life easier or harder than it used to be?'],
  ['Nour', 'Easier. Everything about information is easier than it used to be. I fixed a laptop last week using a video made by a man in Indonesia. Ten years ago I would have waited three weeks for a book.'],
  ['Lina', 'Everything about money is harder than it used to be. That is not a feeling, it is arithmetic. My mother ran a house of five people on one salary. Two of us work and it is tighter than it used to be.'],
  ['Omar', 'Both of those are true and they are not the same question.'],
  ['Ms Huda', 'Go on.'],
  ['Omar', 'Doing things is easier. Affording things is harder. Everybody argues about "is it better" and they are each holding a different half.'],
  ['Hiba', 'The city is louder than it used to be.'],
  ['Rami', 'It\'s cleaner, though. It is much cleaner than it was ten years ago and nobody ever says it.'],
  ['Lina', 'That is true, and it is the first time I have heard anybody say it.'],
  ['Ms Huda', 'Good. Now the harder one. Something that is **worse** than it used to be, where **you** are part of the reason.'],
  ['Omar', '(pause) I am a worse reader than I used to be. Much worse. And nobody did that to me.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – comparing now with then**',
  table(['the pattern', 'examples'], [
    ['comparative + **than it used to be**',
     '_It\'s **busier than it used to be**._\n_It\'s **more expensive than it used to be**._\n_I\'m a **worse reader than I used to be**._'],
    ['comparative + **than it was** (+ a time)',
     '_It\'s cleaner **than it was** ten years ago._'],
  ], [1.3, 1.6]),
  '**Making the comparative:** short words take **-er** (_busy → busier · cheap → cheaper · loud → louder_); longer words take **more** (_more expensive · more crowded · more difficult_). Three to learn by heart: _good → **better** · bad → **worse** · far → **further**_.',
  '⚠ ~~more busier~~ → _busier_.  ~~more good~~ → _better_.  ~~badder~~ → _worse_.',
  '⚠ ~~busier **that** it used to be~~ → _busier **than**_. One letter, and it is the commonest spelling mistake in the whole book.',
  '**To make it stronger or weaker:** _**much** busier_ · _**a lot** busier_ · _**a bit** busier_ · _**slightly** busier_ · _not **quite** as busy as it used to be_.',
  '**Practise:** Make one sentence with _than it used to be_.  1 the city / loud  2 food / expensive  3 the buses / good  4 my English / bad (careful)  5 information / easy to find  6 this street / clean',
  '**Useful phrases:** That is not a feeling, it is arithmetic. · Both of those are true. · they are each holding a different half · and nobody ever says it · nobody did that to me',
  '**Pronunciation.** 🔊 **Track 16.10** _than_ is almost never said in full. It is /ðən/, and it joins on to the word before: _busier\'n it used to be_. Listen and repeat — and then write **than** with an **a**, always.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a topic from the card; B makes **two** comparisons — one better, one worse — with evidence. A must disagree with one and give a reason. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________ — better or worse than it used to be?'],
  ['B', '__________ is __________er than it used to be.'],
  ['A', 'Why do you say that?'],
  ['B', 'Because __________.'],
  ['A', 'And the other side?'],
  ['B', 'But __________ is __________ than it used to be. That is not a feeling, it is __________.'],
  ['A', 'I don\'t agree about __________, because __________.'],
]));
out.push(table(['Card A – topics', 'Card B – topics'], [
  ['getting information', 'getting around the city'],
  ['the cost of living', 'the air and the streets'],
  ['learning a language', 'staying in touch with people'],
  ['your own reading', 'your own sleep'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** comparisons with evidence, and the **one** that was only an opinion.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your partner **four** comparisons about your own life now and ten years ago — two better, two worse — each with one piece of evidence. Your partner must ask for better evidence once.'));
out.push(p('**b**  Then the hard one, from the dialogue: name something that is **worse** than it used to be **where you are part of the reason**. Your partner may not comfort you; they must only ask one question.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour says everything about information is easier than it used to be, and her evidence is that she fixed a laptop last week with a video made by a man in Indonesia. Lina says money is harder, and she called that arithmetic rather than a feeling: her mother ran a house of five on one salary, and two of them work now and it is tighter. Rami said the city is cleaner than it was ten years ago and that nobody ever says it, and Lina said she has never heard anybody say it before. The sentence nobody expected was Omar\'s: that he is a much worse reader than he used to be, and that nobody did that to him._'));
out.push(p('**Listener task:** write the one comparison today that had real evidence behind it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the club noticeboard. Answer the questions.'));
out.push(model([
  '**EASIER OR HARDER?** — what the club said',
  'We asked eighteen members one question: is life easier or harder than it used to be? Fourteen said both, which is why this page has two halves.',
  '**Easier.** Everything about **information** is easier than it used to be, and nobody disagreed. One member fixed a laptop with a video made by a man in Indonesia; ten years ago she would have waited three weeks for a book. Getting around the city is easier too — six buses an hour on one route where there used to be one.',
  '**Harder.** Everything about **money** is harder, and the members who said so did not say it as a feeling. One of them put it as arithmetic: her mother ran a house of five people on one salary, and now two people work and it is tighter than it used to be.',
  '**The thing nobody says.** The streets are cleaner than they were ten years ago. One member said it, one member said she has never heard anybody say it before, and nobody in the room disagreed.',
  '**The hard question.** We asked for something that is worse where you are part of the reason. The room went quiet, and then one member said he is a much worse reader than he used to be, and that nobody did that to him. That is the sentence this page is really about.',
]));
out.push(item('1', 'How many members said "both"?'));
out.push(item('2', 'What evidence is given that getting around is easier?'));
out.push(item('3', 'Why does the page say the last sentence is what it is "really about"?'));
out.push(writers([
  'A then-and-now comparison page: **the question and the count** → **Easier** → **Harder** → **the thing nobody says** → **the hard question**.',
  'Every comparison needs a **piece of evidence** next to it, and the best evidence is a number or a story, not an adjective: _six buses where there used to be one_ · _a video made by a man in Indonesia_.',
  'Give the **count** in the first line — _eighteen members, fourteen said both_. It tells the reader how much to trust the page.',
  '⚠ The last section is what separates this from a complaint. A page that only compares the world to the past is nostalgia; a page that asks where **you** are part of it is writing.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "easier or harder" page (35 words or more) — about your city, your work, your family or your own life.'));
out.push(p('**EASIER OR HARDER?** — ______________   We asked ______________ people one question: ______________?   **Easier.** ______________ is ______________ than it used to be. ______________.   **Harder.** ______________ is ______________ than it used to be. That is not a feeling: ______________.   **The thing nobody says.** ______________.   **The hard question.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and a count in the first line',
  'Comparative + **than** (with an **a**) + _it used to be_ · no ~~more busier~~, no ~~more good~~',
  'Every comparison has evidence — a number or a story, not an adjective',
  'All four sections, including the hard question',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) about your own life now and ten years ago. Four comparisons with evidence, one thing nobody says, and one thing that is worse where you are part of the reason.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who knew them ten years ago**. ★ _The comparison with the best evidence._  ✓ _One comparison that is still only an adjective._  ? _Your hard question — what are you going to do about it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read only the **hard question** sentences aloud, anonymously. The room will be quiet. That is correct — do not fill it. Then ask: **how many of these are the same sentence?**'));
out.push(hw('Write **one page about the thing that is worse where you are part of the reason** (40+ words): what it used to be, what it is now, and the first small thing you could do.'));

// ======================= 16.6 =======================
out.push(pb());
out.push(h2('16.6  She says it was better then'));
out.push(p('**Function:** reporting what older people say about the past   ·   **Grammar:** _says_ / _said_ (+ _that_) at A2   ·   **Pronunciation:** reporting intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What does the oldest person you know say about the past? Give the class **one** sentence, in their words, and then report it: _She says that…_'));
out.push(board('She says it was better then.', 'He says (that)… · She said (that)…'));
out.push(p('**b**  Report these. **1** "I used to walk to school." → _He says ______._  **2** "There used to be nine bookshops." → _She says ______._  **3** "Nobody writes letters any more." → _He said ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who are the students reporting?   **A** each other   **B** the older people they interviewed   **C** Ms Huda'));
out.push(p('**b**  Listen again. **1** What does Mrs Mona say about Thursday evenings?   **2** What does Nour\'s grandmother say she does not miss?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.11  What they told us', [
  ['Ms Huda', 'You all interviewed somebody. One sentence from each, reported, not performed.'],
  ['Lama', 'Mrs Mona says there used to be nine bookshops in her street and that nobody noticed them closing. She says people still buy books but they no longer come in without a reason.'],
  ['Rami', 'My father says the thing that stopped was visiting without ringing first. He says nobody decided it and that it took about ten years.'],
  ['Nour', 'My grandmother said something I did not expect. She said she does not miss any of it.'],
  ['Ms Huda', 'Any of it?'],
  ['Nour', 'Any of it. She said that everybody her age tells you it was better, and that she will not, because she remembers carrying water up four floors and she remembers what it is like when a child is ill at night and there is no telephone in the building. She said: "They are remembering being young. I was young too, and I remember the stairs."'],
  ['Hiba', 'That is the best thing anybody has brought in.'],
  ['Nour', 'She also said the bread was better, so she is not completely reliable.'],
  ['Ms Huda', 'And that is exactly right. Both things are true at the same time, and a careful report keeps both.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – reporting what somebody says, at A2**',
  table(['they said it just now, or they always say it', 'they said it on one occasion'], [
    ['**says (that)** + what they said\n_She **says that** there used to be nine shops._\n_He **says** nobody decided it._',
     '**said (that)** + what they said\n_She **said that** she does not miss any of it._\n_He **said** it took about ten years._'],
  ], [1.3, 1.3]),
  '**_that_ is optional** and in speech it is usually dropped: _She says (that) it was better._ Both are correct.',
  '⚠ **Do not change _used to_ or the past simple.** _"There used to be nine."_ → _She says there **used to be** nine._ It is already past; it does not go further back.',
  '⚠ ~~She says me that…~~ → _She **tells me** that…_ / _She **says** that…_  You **say** something; you **tell somebody** something.',
  '⚠ ~~She said that is it better.~~ → after _said that_, use ordinary word order, not a question: _She said (that) it **was** better._',
  '**Quoting exactly:** when the sentence is too good to change, quote it — _She said: "I remember the stairs."_ Use it once in a report, never twice.',
  '**Practise:** Report each one with _says_ or _said_.  1 "I used to walk to school." (he, always says it)  2 "There used to be nine bookshops." (she, always)  3 "Nobody decided it." (he, on Thursday)  4 "I do not miss any of it." (she, on Thursday)  5 "The bread was better." (she, always)',
  '**Useful phrases:** She says that… · He said: "…" · something I did not expect · she is not completely reliable · Both things are true at the same time.',
  '**Pronunciation.** 🔊 **Track 16.12** Reporting is **flat and even** until the reported words, which carry the tune: _She said that she doesn\'t **MISS** any of it._ Listen and repeat — the reporting half should sound almost bored, so that the other half lands.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a quotation from the card; B reports it with _says_ or _said_, and then adds _"and he/she also says…"_ with something invented that fits. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________ said: "__________."'],
  ['B', 'So __________ says that __________.'],
  ['A', 'Exactly.'],
  ['B', 'And does __________ also say __________?'],
  ['A', '__________ says __________.'],
  ['B', 'Then __________ is / isn\'t completely reliable, because __________.'],
]));
out.push(table(['Card A – quotations', 'Card B – quotations'], [
  ['"There used to be nine bookshops in this street."', '"Nobody writes letters any more, including me."'],
  ['"People still buy books, but they don\'t come in."', '"We still argue about the same thing."'],
  ['"I do not miss any of it. I remember the stairs."', '"The bread still comes out at the same hour."'],
  ['"Everybody my age tells you it was better."', '"Children no longer play in our street."'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **two** reported sentences, exactly as you hear them. Check the word order after _that_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Report your Stage 4 interview from 16.2 to a **new** partner: **four** things that person says, and **one** sentence quoted exactly. Your new partner must ask whether you agree with any of it.'));
out.push(p('**b**  Swap. Then each of you report **one** thing the person said that you think is **not true**, and say so — carefully, the way Nour does about the bread.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour interviewed her grandmother and brought in the sentence nobody expected. She says her grandmother does not miss any of it. She says that everybody her grandmother\'s age tells you it was better and that her grandmother will not, because she remembers carrying water up four floors and she remembers what it is like when a child is ill at night and there is no telephone in the building. Her exact words were: "They are remembering being young. I was young too, and I remember the stairs." And then Nour said that her grandmother also says the bread was better, so she is not completely reliable, and Ms Huda said that keeping both of those is what a careful report is._'));
out.push(p('**Listener task:** which reported sentence today was the one the speaker did not expect to hear?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the then-and-now wall. Answer the questions.'));
out.push(model([
  '**WHAT THEY TOLD US** — four interviews, Room 12',
  '**Mrs Mona, bookshop, Shaalan.** She says there used to be nine bookshops in four hundred metres and that nobody noticed any of them closing. She says people still buy the same number of books, but that they no longer come in without a reason, and that a bookshop lives on the other kind of customer.',
  '**Abu Rami, 71, Homs.** He says the thing that stopped was visiting without ringing first. He says nobody decided it and that it took about ten years. He also says that he and his brother still argue every Friday about something they started arguing about in 1979, and that his brother is still wrong.',
  '**Umm Kinan, 83, Damascus.** She said something none of us expected. She said she does not miss any of it. She said that everybody her age tells you it was better and that she will not, because she remembers carrying water up four floors, and she remembers a child ill at night in a building with no telephone. Her words: "They are remembering being young. I was young too, and I remember the stairs."',
  'She also says the bread was better, so, as her granddaughter put it, she is not completely reliable. Both of those are in this report on purpose. A careful report keeps both.',
]));
out.push(item('1', 'What does Mrs Mona say people no longer do?'));
out.push(item('2', 'What two things does Umm Kinan say she remembers?'));
out.push(item('3', 'Why are both of Umm Kinan\'s opinions in the report?'));
out.push(writers([
  'A report of several interviews: **one person per paragraph** → **name, age, place** → **what they say** → **one exact quotation**, in the strongest paragraph only.',
  'Report with _says_ and _said_ and keep the **past forms as they were**: _She says there **used to be** nine._ Changing them makes it your sentence instead of theirs.',
  'Quote exactly **once**, where the words are better than yours. Four quotations in four paragraphs is a transcript, not a report.',
  '⚠ Keep the parts that **disagree with each other**. Umm Kinan does not miss anything and the bread was better. A report that tidies people up has stopped being about them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write up two of the interviews from your class (35 words or more).'));
out.push(p('**WHAT THEY TOLD US** — ______________   **______________, ______________, ______________.** She/He says that ______________. She/He says ______________ but that ______________.   **______________, ______________, ______________.** She/He said ______________. Her/His words: "______________."   She/He also says ______________, so ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One person per paragraph, with name, age and place',
  '_says_ / _said_ (+ optional _that_) · ordinary word order after _that_ · never ~~says me~~',
  '_used to_ and past forms **unchanged** inside the report',
  'Exactly one quotation, and one thing the person said that does not fit the rest',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full report (60 words or more) of the interviews done by this class. Three people, one paragraph each, one quotation, and at least one thing somebody said that contradicts something else.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s report as **one of the people in it**. ★ _You got me right._  ✓ _One place where you made me tidier than I am._  ? _Why did you leave that out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Pin the reports next to the photographs. The wall is now finished. **Read the whole wall from one end to the other** and then say one sentence about this city that you could not have said four weeks ago.'));
out.push(hw('Write up **the interview you have not done yet** (40+ words) — with the oldest person you know. Ask them the question from 16.4: what has stopped, and what still happens.'));

// ======================= 16.7 =======================
out.push(pb());
out.push(h2('16.7  Review & Mediate: What does the caption say?'));
out.push(p('**Function:** explaining old photographs and their captions   ·   **Recycling:** Units 1–16   ·   **Exam practice:** A2 Key Reading Part 3, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 16 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Did you used to play in the street?  **2** I didn\'t used to like coffee.  **3** There used to be a cinema and there was four trees.  **4** I don\'t still work there.  **5** It is more busier than it used to be.  **6** She says me that it was better then.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the page from an exhibition at the city library. The photographs are not printed here; only the captions are.'));
out.push(box(null, [
  '**DAMASCUS: ONE CITY, TWO CENTURIES** · City Library, Rooms 1–3 · until 30 April',
  '**Room 1 · 1890–1945.** Photographs by travellers and by the first Syrian studios. _Most of the people in these pictures were not asked for their names._',
  '**Room 2 · 1946–1990.** Family photographs given to the library by the public. _If you recognise anybody, please tell the desk. Eleven people have been named this way since January._',
  '**Room 3 · 1991–today.** Photographs taken by people who live here now. _This room changes every month._',
  '**Captions.** Each photograph has a short caption. Where we do not know something, the caption says **unknown**. We do not guess.',
  '**Entry free.** Open 09:00–17:00, closed Fridays. Last entry 16:30.',
  '**Photography** is allowed in Rooms 2 and 3 without flash. It is **not** allowed in Room 1.',
  '**Prints** of any photograph in Room 3 may be ordered at the desk — 15,000 SYP, ready in ten days.',
  '**Schools and groups** of more than eight must book. Ring the desk a week before.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Hiba explains the page to her grandmother, who does not read English. Which room does her grandmother want to go to first, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.13  Explaining the exhibition page', [
  ['Grandmother', 'Read it to me properly. Not the short version you do.'],
  ['Hiba', 'It\'s an exhibition at the city library, three rooms, and the rooms are by date. Room 1 is the oldest — 1890 to 1945. Room 2 is 1946 to 1990. Room 3 is from 1991 until now.'],
  ['Grandmother', 'Room 2.'],
  ['Hiba', 'You haven\'t heard what Room 2 is yet.'],
  ['Grandmother', 'I know what 1946 to 1990 is. It is me. What is in it?'],
  ['Hiba', 'Family photographs. People gave them to the library. And there is a line here you will like: if you recognise anybody, tell the desk. It says eleven people have been named that way since January.'],
  ['Grandmother', '(pause) Eleven.'],
  ['Hiba', 'Eleven. And where they don\'t know something, the caption says "unknown". It says: we do not guess.'],
  ['Grandmother', 'Good. Half of what people tell you about old photographs is invented. What does it cost?'],
  ['Hiba', 'Nothing. It\'s free, nine until five, closed on Fridays, and you can\'t go in after half past four.'],
  ['Grandmother', 'Can you photograph them?'],
  ['Hiba', 'In Rooms 2 and 3, yes, but with no flash. Not in Room 1 at all. And in Room 3 only, you can order a proper print at the desk — fifteen thousand, ten days.'],
  ['Grandmother', 'Then we go on a Thursday, early, and we start in Room 2, and if I recognise anybody we are going to the desk before we do anything else.'],
]));
out.push(sp());
out.push(box('Language box – explaining a page about an exhibition or a collection', [
  'Give the **organising principle** first — _three rooms, and the rooms are by date_ — and then the dates. Everything else hangs off that.',
  'Find the line the listener will **care about personally** and give it early: _if you recognise anybody, tell the desk — eleven people since January._',
  'Explain a rule by saying what it **protects**: _where they don\'t know, it says unknown; they do not guess._',
  'Separate what is allowed **where**: _photographs in Rooms 2 and 3, no flash; not in Room 1 at all._ A rule that changes from room to room is the one people get wrong.',
  'Turn opening times into a **plan**: _nine until five, closed Fridays, nothing after half past four_ → _so we go on a Thursday, early._',
  'Say the **price and the wait** together: _fifteen thousand, ten days._',
  '**Useful phrases:** It\'s organised by… · There is a line here you will like. · Where they don\'t know something… · In Rooms 2 and 3, yes, but… · Not at all in… · so we go on…',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the pages below and does **not** show it. A explains it to B and C, who ask about anything unclear and must each end by saying when they will go and what they will do first. Change roles with the other page.'));
out.push(table(['Page A – a photograph competition', 'Page B – a local history archive'], [
  ['THEN AND NOW — open to everybody', 'THE STREET ARCHIVE — Mezzeh'],
  ['Two photographs of the same place, 10+ years apart.', 'Open Tuesday and Saturday, 10:00–14:00 only.'],
  ['One entry each. Entry closes 30 April.', 'Bring any photograph of this district and we will copy it free.'],
  ['Prints must be 20×30 cm. Digital not accepted.', 'You keep the original. Always.'],
  ['Write the year on the back, or we cannot use it.', 'If you can name anybody, we write the name on the card.'],
  ['Winner\'s photograph goes in the library for a year.', 'We do not put anything online without asking you first.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the **one** thing you must do, the **one** thing you must not do, and the **one** thing that is free.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** page in your own life that explains a place and its rules — a museum, a clinic, a library, a club, a market, a government office. Explain it to your partner so completely that they could go there tomorrow on their own. They must ask: _how is it organised?_, _what is free?_, _what am I not allowed to do?_ and _when should I go?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Lama explained the page for the street archive in Mezzeh. It is only open on Tuesday and Saturday mornings, ten until two, which is the part that decides everything else. You can take any photograph of that district in and they will copy it free, and you keep the original — she said that word was underlined on the page and that it is underlined because people are afraid of exactly that. If you can name anybody in a photograph they write the name on the card, and they do not put anything online without asking you first. So I decided I would go on a Saturday with my mother and the box from under her bed, and that I would ask about the online part again at the desk, because a rule on a page and a rule at a desk are not always the same rule._'));
out.push(p('**Listener task:** did they tell you **how it is organised** before the details? What is the one rule you would have broken?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 3)', 7));
out.push(p('Read the text and choose **A**, **B** or **C** for each question.'));
out.push(model([
  '**THE BOX UNDER THE BED** · by Hiba Khalil',
  'My grandmother has a box under her bed and I used to think it was money. It is photographs. There are about two hundred of them and until this January I have looked at none of them properly.',
  'We took eleven of them to the library exhibition, because the sign says that if you recognise somebody you should tell the desk. My grandmother recognised four people in Room 2 in about nine minutes, which the woman at the desk told us was a record.',
  'What I did not expect was the argument. My grandmother says she does not miss any of it, and she will not say it was better, because she remembers carrying water up four floors. Her sister, who came with us, says the opposite about everything. They used to share a room. They remember the same years and they describe two different cities.',
  'The woman at the desk said this happens every week. She says the library writes "unknown" on a caption rather than guess, and that two sisters disagreeing is not a problem for them — they write both.',
  'My grandmother is now going back on Thursdays. She has decided it is her job. She has not told her sister.',
]));
[
  '**1**  What did Hiba use to think was in the box?     **A** photographs   **B** money   **C** letters',
  '**2**  How many photographs did they take to the library?     **A** eleven   **B** four   **C** about two hundred',
  '**3**  What was a record, according to the woman at the desk?     **A** the number of photographs   **B** how quickly her grandmother recognised four people   **C** the age of the photographs',
  '**4**  What do the two sisters disagree about?     **A** who is in the photographs   **B** whether the past was better   **C** which day to go',
  '**5**  What does the library do when two people disagree?     **A** it writes both   **B** it writes "unknown"   **C** it asks a third person',
  '**6**  What has the grandmother not done?     **A** gone back to the library   **B** recognised anybody   **C** told her sister',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend about the exhibition (35 words or more). Use the exhibition page and the story above.'));
out.push(p('Hi ______!   There\'s an exhibition at ______________. It\'s ______________ rooms and they\'re organised by ______________.   Room 2 is ______________ — and if you ______________, you can ______________. ______________ people ______________ since January.   It\'s ______________ and it\'s open ______________, but not on ______________ and nothing after ______________.   You can take photographs in ______________ but not ______________.   Come on ______________ — my grandmother ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, and two short paragraphs',
  '_used to_ / _didn\'t use to_ spelled correctly · _still_ and _any more_ in the right place',
  'At least two linkers (_and · but · because · so_)',
  'All three content points: what it is · what you can do there · when to go and what is not allowed',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** has asked what your town was like when you were a child.',
  'Write an email to Sam.  In your email:  •  say **one thing you used to do**  •  say **one thing that has changed**  •  tell him **one thing that is still the same**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 16 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ walk to school every day.   a) used to   b) use to   c) am used to',
  '2  She ___ like coffee.   a) didn\'t used to   b) didn\'t use to   c) not used to',
  '3  ___ there use to be a cinema here?   a) Did   b) Was   c) Does',
  '4  There ___ four trees on this corner.   a) used to be   b) used to were   c) was used to be',
  '5  Nobody writes letters ___.   a) still   b) no longer   c) any more',
  '6  We ___ eat at the same time.   a) still   b) any more   c) no more',
  '7  It\'s ___ than it used to be.   a) more busy   b) busier   c) more busier',
  '8  She ___ that it was better then.   a) says me   b) says   c) tells',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 16.14** Ms Huda says what each person brought to the then-and-now wall. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they brought'], [
  ['1  Omar ___', 'A  a photograph of a room they did not use to like'],
  ['2  Hiba ___', 'B  an interview with somebody who says the past was not better'],
  ['3  Rami ___', 'C  a photograph with something important in it by accident'],
  ['4  Lama ___', 'D  two photographs of the same place, years apart'],
  ['5  Nour ___', 'E  an interview with a shopkeeper about a street that has changed'],
  ['', 'F  a photograph of a school that has closed'],
  ['', 'G  a letter their grandfather used to write every month'],
], [1, 2]));
out.push(dlg('Track 16.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, let us look at what is on that wall. Omar brought the same corner of Aleppo twice — one from 2011 and one from last month, taken from the same three metres of pavement. Hiba brought her grandmother\'s kitchen in 2013, and she told us she used to spend every summer in that room and did not like it at all. Rami brought the road to Homs, which he said was not interesting, and the tea place his family used to stop at is in the corner of it by accident. Lama went to the bookshop in Shaalan and interviewed Mrs Mona, who told her there used to be nine bookshops in four hundred metres. And Nour interviewed her grandmother, who told her she does not miss any of it and will not say it was better, because she remembers carrying water up four floors.'],
]));
out.push(p('**C  Writing.** Write a caption for a photograph of a place you know, taken at least ten years ago (40+ words): when it was taken, two things you used to do there, one thing that is no longer there, and one thing that is still the same.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 16)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _used to_ and _didn\'t use to_ with the right spelling',
  '☐ ask _Did you use to…?_',
  '☐ say _there used to be_ and _there didn\'t use to be_',
  '☐ say what has stopped with _not … any more_',
  '☐ say what continues with _still_, in the right place',
  '☐ compare then and now with _…er than it used to be_',
  '☐ report what somebody says about the past',
  '☐ explain a page about an exhibition to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 17 – LEARNING AND TRAINING', [
  'Unit 16 was about what you used to do. Unit 17 is about what you are trying to do now: what you **want to** do, what you **enjoy doing**, and what you **find it hard to** do.',
  'Before the next lesson: write down **three** things you are trying to learn — one at work or at college, one at home, and one that nobody has asked you to learn.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 16 · Student\'s Book');
