// Proactive English A2 · Syria Edition · Book 1 · Unit 8 — Student's Book
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

out.push(h1('Unit 8  The Past'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**8.1**  talk about last weekend',
  '**8.2**  ask questions about past events',
  '**8.3**  say where you were and what you were doing',
  '**8.4**  talk about important events in your life',
  '**8.5**  tell a story in order',
  '**8.6**  react to good news and bad news',
  '**8.7**  Review & Mediate: tell the class a friend\'s news',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Look back!', [
  'In Units 1–7 you learned some past forms as **phrases**: _I **bought** this last week · It **was** delicious · I **could** draw at school · He **said** yes._',
  'In this unit you learn **how the past works** – so you can say anything about yesterday, last week or twenty years ago.',
], C.lyellow, C.orange));

// ======================= 8.1 =======================
out.push(pb());
out.push(h2('8.1  What did you do at the weekend?'));
out.push(p('**Function:** talking about last weekend   ·   **Grammar:** past simple (+ / –), regular and irregular   ·   **Pronunciation:** -ed endings /t/ /d/ /ɪd/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do people do at the weekend in your city? Your teacher writes the class\'s ideas on the board.'));
out.push(board('I visited my parents.', 'Last weekend I went to Bludan.'));
out.push(p('**b**  Say these in the past: _visit → ______ · watch → ______ · study → ______ · stop → _______   And these are different: _go → ______ · have → ______ · see → ______ · eat → _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where did Rami go at the weekend?   **A** to Homs   **B** to Maaloula   **C** nowhere'));
out.push(p('**b**  Listen again. **1** What did Omar do on Friday?   **2** Why didn\'t Rami rest?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.1  Monday morning at the centre', [
  ['Omar', 'You look tired, Rami! What did you do at the weekend?'],
  ['Rami', 'I went to Homs to see my family. I arrived on Thursday night and I came back yesterday evening.'],
  ['Omar', 'Nice! Did you rest?'],
  ['Rami', 'Rest? No, I didn\'t! On Friday my mother cooked for twenty people. My sister and her children came, my uncle came…'],
  ['Omar', 'Ha! And on Saturday?'],
  ['Rami', 'On Saturday I painted my parents\' kitchen. My father wanted it blue, my mother wanted it white, so we painted it… white and blue.'],
  ['Omar', 'Of course you did. What about you – did you sleep all weekend?'],
  ['Rami', 'What did YOU do, Omar?'],
  ['Omar', 'On Friday I cooked for the photography club – they loved the kibbeh. Then on Saturday we walked in the Old City and took photos for four hours.'],
  ['Rami', 'Four hours! Did you get any good ones?'],
  ['Omar', 'I took two hundred photos and I liked three. That\'s photography!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – past simple (+ / –)**',
  table(['Regular verbs: + -ed', 'Irregular verbs: learn them!', 'Negative: didn\'t + base verb'], [
    ['cook → cook**ed** · visit → visit**ed** · walk → walk**ed**\nlive → live**d** · arrive → arrive**d** (just **-d**)\nstudy → stud**ied** · stop → stop**ped**',
    'go → **went** · have → **had** · see → **saw** · eat → **ate**\ncome → **came** · take → **took** · buy → **bought** · say → **said**\nget → **got** · make → **made** · do → **did** · be → **was / were**',
    'I **didn\'t rest**. · She **didn\'t go**.\n⚠ After **didn\'t**, use the **base verb**: _didn\'t **go**_, not ~~didn\'t went~~.'],
  ], [1.1, 1.2, 1]),
  '**Past time words:** yesterday · last night / week / month / year · two days **ago** · on Friday · in 2019',
  '**Same for everybody!** I / you / he / she / we / they **cooked**. No -s in the past. 😀',
  '**Practise:** Put the verb in the past simple.  1 I ______ (visit) my aunt on Friday.  2 We ______ (go) to the park.  3 She ______ (not / come) to the party.  4 They ______ (take) a lot of photos.  5 He ______ (study) all weekend.  6 I ______ (not / like) the film.',
  '**Useful phrases:** You look tired! · Nice! · Of course you did. · What about you? · That\'s photography!',
  '**Pronunciation.** 🔊 **Track 8.2** _-ed_ has **three** sounds: /t/ walk**ed**, cook**ed**, stopp**ed** · /d/ live**d**, arrive**d**, play**ed** · /ɪd/ (an extra syllable!) want**ed**, visit**ed**, paint**ed**. Listen and repeat. ⚠ Only verbs ending in **t** or **d** get /ɪd/.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Talk about the weekend on the card. Then swap.'));
out.push(dlg(null, [
  ['A', 'You look tired! What did you do at the weekend?'],
  ['B', 'I __________. I __________ on __________ and I __________.'],
  ['A', 'Nice! Did you __________?'],
  ['B', 'No, I didn\'t! On __________ I __________.'],
  ['A', 'And on __________?'],
  ['B', 'I __________. What about you?'],
]));
out.push(table(['Weekend card A', 'Weekend card B'], [[
  'Thu: travelled to Latakia · Fri: swam in the sea, ate fish with cousins · Sat: helped uncle in his shop, came back at night · didn\'t rest!',
  'Fri: cleaned the whole flat, washed all the clothes · Sat: studied English for three hours, watched two films · didn\'t go out at all']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **four** past verbs you hear. Are they regular or irregular?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about **your real weekend** (or last Friday). Say at least **five** things, and include **one thing you didn\'t do** (_I didn\'t study / I didn\'t go out_). Then change partners and tell it again – faster.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s weekend:  _Hiba went to her grandmother\'s house in Dummar on Friday. She helped her cook and they ate together. On Saturday she studied for her exam, but she didn\'t finish. She says she needs another weekend!_'));
out.push(p('**Listener task:** who had the busiest weekend? Who really rested?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Omar\'s message to his mother in Aleppo. Answer the questions.'));
out.push(model([
  'Hi Mum! Sorry I didn\'t call on Friday – it was a busy weekend.',
  'On Friday I cooked for the English club: fattoush, kibbeh and rice. Twelve people came to our flat! They finished everything and Lina asked for the kibbeh recipe – I told her it\'s your recipe, of course.',
  'On Saturday morning we walked in the Old City with the photography club. I took two hundred photos (and I liked three!). In the afternoon I slept for two hours, and in the evening Rami and I watched the match.',
  'I didn\'t clean the flat, I didn\'t wash my clothes and I didn\'t study my English homework. But I was happy!',
  'How was your weekend? Say hello to Dad.',
  'Omar',
]));
out.push(item('1', 'How many people came to the flat?'));
out.push(item('2', 'What did Omar do on Saturday afternoon?'));
out.push(item('3', 'Name two things he didn\'t do.'));
out.push(writers([
  'A weekend message: **greeting** (+ sorry, if you didn\'t call!) → **Friday** → **Saturday** (morning / afternoon / evening) → **what you didn\'t do** → **a question** → **greetings to the family** → your name.',
  'Start some sentences with the **time**: _On Friday… In the afternoon…_ – but not every sentence.',
  'Three negatives together (_I didn\'t…, I didn\'t…, I didn\'t…_) are a nice way to end a busy weekend!',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi ______! Sorry I ______________ – it was a ______ weekend.   On Friday I ______________. ______________. On Saturday morning ______________. In the afternoon I ______________, and in the evening ______________.   I didn\'t ______________ and I didn\'t ______________. But ______________!   How was your weekend? ______________.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Past simple: -ed or the irregular form', 'After _didn\'t_ → base verb (not _didn\'t went_)', 'All parts: the days in order, what you didn\'t do, a question']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a message to a family member or friend about **your real weekend** (60 words or more). Include **three** things you did and **two** things you didn\'t do.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _That sounds fun!_   ✓ _Can you add who you went with?_   ? _Did you…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. Whose weekend was the most relaxing? Whose was the hardest work?'));
out.push(hw('Write the **reply** from your partner\'s family member (25+ words): tell them about **your** weekend and ask **one** past question (_Did you…? What did you…?_).'));

// ======================= 8.2 =======================
out.push(pb());
out.push(h2('8.2  Where did you go?'));
out.push(p('**Function:** asking about past events   ·   **Grammar:** past simple questions (_Did you…? Where did you…?_)   ·   **Pronunciation:** _did you_ /dɪdʒə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your friend comes back from a holiday. What do you ask? Make a class list of **six** questions.'));
out.push(board('Where did you go?', 'How was your trip?'));
out.push(p('**b**  Make questions: (you / go / where?) · (you / stay / how long?) · (you / like / it?) · (you / go / who with?)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where did Maya go?   **A** to Latakia   **B** to Tartus   **C** to Aleppo'));
out.push(p('**b**  Listen again. **1** Who did she go with?   **2** What didn\'t she like?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.3  Back from the coast', [
  ['Lina', 'Maya! You\'re brown! Where did you go?'],
  ['Maya', 'To Latakia, for my father\'s birthday.'],
  ['Lina', 'Lovely! Who did you go with?'],
  ['Maya', 'With my sister Lama. We took the Thursday bus.'],
  ['Lina', 'How long did you stay?'],
  ['Maya', 'Four days. We came back on Monday morning.'],
  ['Lina', 'What did you do there?'],
  ['Maya', 'Everything and nothing! We swam every morning, we ate too much fish, and I slept nine hours a night.'],
  ['Lina', 'That\'s a real holiday. Did you see your old school friends?'],
  ['Maya', 'Yes, I did. We met at a café on Saturday – I didn\'t see some of them for three years!'],
  ['Lina', 'And the journey? Was it OK?'],
  ['Maya', 'The journey home was terrible. The bus didn\'t leave on time and it took five hours. But I don\'t care – look at my photos!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – past simple questions**',
  table(['Yes / no questions', 'Wh- questions', 'Short answers'], [
    ['**Did** you **rest**? · **Did** she **see** them?', '**Where did** you **go**? · **Who did** you **go** with? · **How long did** you **stay**? · **What did** you **do**?', 'Yes, I **did**. / No, I **didn\'t**.\nYes, she **did**. / No, she **didn\'t**.']], [1, 1.5, 1]),
  '⚠ After **did**, the verb is the **base form**: _Did you **go**?_, not ~~Did you went?~~  ·  _Where did she **buy** it?_, not ~~Where did she bought it?~~',
  '**But** with **be** there is no _did_: _**Was** it OK? **Were** you tired?_ (more in 8.3)',
  '**Common questions after a trip:** Where did you go? · Who did you go with? · How did you travel? · How long did you stay? · Where did you stay? · What did you do? · Did you like it? · How was the journey?',
  '**Practise:** Make past questions.  1 (where / you / go / last summer?)  2 (who / she / meet?)  3 (you / like / the film?)  4 (how long / they / stay?)  5 (what / he / buy?)',
  '**Useful phrases:** You\'re brown! · Lovely! · Everything and nothing! · That\'s a real holiday. · I don\'t care – look at my photos!',
  '**Pronunciation.** 🔊 **Track 8.4** _did you_ sounds like /dɪdʒə/: _Where did‿you go?_ · _What did‿you do?_ · _Did‿you like it?_ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B went on the trip on the card. A asks **six** questions. Then swap.'));
out.push(dlg(null, [
  ['A', 'Where did you go?'],
  ['B', 'To __________.'],
  ['A', 'Who did you go with?'],
  ['B', 'With __________.'],
  ['A', 'How long did you stay?'],
  ['B', '__________.'],
  ['A', 'What did you do there?'],
  ['B', 'We __________ and we __________.'],
  ['A', 'Did you __________?'],
  ['B', 'Yes, I did. / No, I didn\'t.'],
]));
out.push(table(['Trip card A', 'Trip card B'], [[
  'Palmyra · with two cousins · three days · walked in the old city, took photos, drank tea with a family there · didn\'t swim (no sea!) · the journey: long and hot',
  'Beirut · with your brother · five days · saw the sea, visited a friend, bought presents, ate in a famous restaurant · didn\'t sleep much · the journey: easy, two hours']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the six questions you hear. Then ask your partner **one** of them about a real trip.'));
out.push(stage('4', 'Your turn – the interview', 9));
out.push(p('Think of a **real** trip you made (a holiday, a visit to family, a work trip, a day out – even a small one). Your partner interviews you with **at least eight** past questions and writes short notes. Then swap. Then find a new partner and ask about **their** trip.'));
out.push(table(['Where?', 'When?', 'Who with?', 'How?', 'How long?', 'Best thing?', 'Problem?'], [['', '', '', '', '', '', '']], [1, 1, 1, 1, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s trip:  _Tareq went to Suwayda for his cousin\'s wedding. He travelled by bus with his wife and they stayed two nights. The best thing was the food – he ate mansaf three times! The problem was the journey home: the bus didn\'t come and they waited two hours._'));
out.push(p('**Listener task:** ask one more question about the trip you liked best.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lina\'s interview report for the class page. Answer the questions.'));
out.push(model([
  '**Our class holidays: Maya in Latakia**',
  'Last week Maya went to Latakia with her sister Lama. It was her father\'s birthday, and the family wanted everyone together.',
  'They took the Thursday bus and stayed four days. "We swam every morning and we ate too much fish," Maya told me. She slept nine hours every night – at home she sleeps five!',
  'On Saturday she met her old school friends at a café. She didn\'t see some of them for three years, so they talked until midnight.',
  'The only problem was the journey home. The bus didn\'t leave on time and it took five hours instead of three. But Maya says it was worth it: "Look at my photos!"',
]));
out.push(item('1', 'Why did the family want everyone together?'));
out.push(item('2', 'How is Maya\'s sleep different at home?'));
out.push(item('3', 'How long did the journey home take?'));
out.push(writers([
  'An interview report: write about the person as **he / she**, not _I_ → **what, where, when, who with** → **the details** → **one problem** → **a short quote** at the end.',
  'Use **quotation marks** for the person\'s own words: _"We swam every morning," Maya told me._',
  'The past simple is for the story; the **present simple** is for things that are still true: _at home she **sleeps** five hours_.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Our class holidays: ______ in ______________**   Last ______ ______ went to ______________ with ______________. ______________.   They ______________ and stayed ______. "______________," ______ told me. ______________.   The only problem was ______________. ______________.   But ______ says it was worth it: "______________."'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Past simple for the story (he / she – no -s!)', 'Questions and negatives with _did / didn\'t_ + base verb', 'All parts: where, who with, details, a problem, a quote']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an interview report about **your partner\'s** trip from Stage 4 (60 words or more). Use your notes and add **one** quote from them.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read the report about **you**. ★ _Good report!_  ✓ _Small correction: I stayed three days, not two._  ? _Why didn\'t you write about…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the reports together: this is our **Class 4B Travel Page**. Which trip do you want to make?'));
out.push(hw('Write five **questions** you want to ask another classmate about their trip, and give them to that person. Answer the five questions you receive (30+ words).'));

// ======================= 8.3 =======================
out.push(pb());
out.push(h2('8.3  Where were you?'));
out.push(p('**Function:** saying where you were   ·   **Grammar:** _was / were_; _ago_, _last_   ·   **Pronunciation:** weak _was_ /wəz/ and _were_ /wə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where were you yesterday at these times? 8 am · 1 pm · 6 pm · 10 pm. Tell the class.'));
out.push(board('I was at work.', 'Yesterday at six I was at home.'));
out.push(p('**b**  _was_ or _were_?  I ______ · you ______ · he ______ · we ______ · they ______ · the shop ______ · my parents ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** someone is ill   **B** something is missing   **C** someone is late'));
out.push(p('**b**  Listen again. **1** Where was Omar at seven?   **2** Who had the key?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.5  The missing camera', [
  ['Sara', 'Omar, the club camera isn\'t in the cupboard! Where is it?'],
  ['Omar', 'What? It was there on Monday – I put it back myself.'],
  ['Sara', 'Were you here on Tuesday?'],
  ['Omar', 'No, I wasn\'t. I was at work until eight. Why – was the cupboard open?'],
  ['Sara', 'Yes, it was. And the key wasn\'t in Mr Bassam\'s office.'],
  ['Omar', 'Hmm. Who was in the room on Tuesday evening?'],
  ['Sara', 'The cooking club. They were here until nine.'],
  ['Omar', 'Then let\'s ask them. Wait – two weeks ago Lina borrowed the camera for her niece\'s birthday…'],
  ['Sara', 'And did she bring it back?'],
  ['Omar', 'I think so. But she wasn\'t at the club last week, was she?'],
  ['Sara', 'No, she wasn\'t! She was ill. I\'ll call her.'],
  ['Omar', '(two minutes later) Well?'],
  ['Sara', 'The camera is in her car. It was there for two weeks!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – was / were (the past of _be_)**',
  table(['+', '–', '?'], [
    ['I / he / she / it **was** at home.', 'I **wasn\'t** (was not) here.', '**Was** she ill? – Yes, she was. / No, she wasn\'t.'],
    ['You / we / they **were** here.', 'They **weren\'t** (were not) late.', '**Were** you here on Tuesday? – Yes, I was. / No, I wasn\'t.'],
  ], [1, 1, 1.4]),
  '⚠ **No _did_ with _was / were_**: _**Were** you at home?_, not ~~Did you were at home?~~  And: _She **was** ill_, not ~~She did ill~~.',
  '**ago** and **last**: _two weeks **ago** · ten minutes **ago** · **last** night · **last** Tuesday · **last** year_  (⚠ not ~~the last year~~, not ~~before two weeks~~)',
  '**Practise:** Complete with _was, were, wasn\'t_ or _weren\'t_.  1 I ______ at the club yesterday – I was at home.  2 ______ you at work on Sunday?  3 They ______ very happy with the photos.  4 The shop ______ open, so we went home.  5 Where ______ your parents last night?',
  '**Useful phrases:** Where is it? · I put it back myself. · Who was in the room? · Wait – … · I think so. · Well? · It was there for two weeks!',
  '**Pronunciation.** 🔊 **Track 8.6** _was_ /wəz/ and _were_ /wə/ are **weak** in sentences: _I was‿at home_ /aɪ wəz ət/ · _They were‿here_. But in short answers they are **strong**: _Yes, I **was**._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Something is missing! A asks, B answers using the card. Then swap.'));
out.push(dlg(null, [
  ['A', '__________ isn\'t __________! Where is it?'],
  ['B', 'It was __________ on __________.'],
  ['A', 'Were you here on __________?'],
  ['B', 'No, I wasn\'t. I was __________.'],
  ['A', 'Who was __________?'],
  ['B', '__________ was / were __________.'],
  ['A', 'Let\'s ask them!'],
]));
out.push(table(['Card A – the office projector', 'Card B – your brother\'s bicycle'], [[
  'last seen: Sunday, meeting room · you: at a client\'s office all Monday · who was there: the training group, until six',
  'last seen: Friday, outside the building · you: at your sister\'s house all day Saturday · who was there: your cousin, he borrowed it']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write where the thing was and who had it.'));
out.push(stage('4', 'Your turn – the alibi game', 9));
out.push(p('**Something happened yesterday evening at eight o\'clock!** (Your teacher decides: all the sugar in the staff room disappeared…)'));
out.push(p('**a**  In pairs, agree your alibi: you were **together**. Where were you? What were you doing? Who else was there? Agree every detail – you have three minutes!'));
out.push(p('**b**  Now the pairs split. Another pair interviews you **separately**: _Where were you at eight? Who were you with? What were you wearing? Was the café busy?_ If your two stories are different, you\'re guilty!'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fadi said they were at the café in Shaalan, but Rasha said they were at the café in Mezzeh. Fadi said the café was busy and Rasha said it was empty. They\'re guilty!_'));
out.push(p('**Listener task:** which pair has the best alibi? Who is guilty?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Sara\'s report to Mr Bassam. Answer the questions.'));
out.push(model([
  '**REPORT – THE CLUB CAMERA**   **From:** Sara Hamdan   **Date:** 21 October',
  'On Tuesday evening the club camera wasn\'t in the cupboard. The cupboard was open and the key wasn\'t in your office.',
  'Omar wasn\'t at the centre on Tuesday – he was at work until eight. The cooking club was in the room until nine, but nobody there saw the camera.',
  'Then Omar remembered: two weeks ago Lina borrowed the camera for her niece\'s birthday. Lina wasn\'t at the club last week because she was ill, so nobody asked her.',
  'I called her this morning. The camera was in her car – it was there for two weeks! She is very sorry and she is bringing it back tomorrow.',
  '**My suggestion:** we need a book for borrowing: name, date and signature.',
]));
out.push(item('1', 'Where was the key?'));
out.push(item('2', 'Why didn\'t anybody ask Lina?'));
out.push(item('3', 'What does Sara suggest?'));
out.push(writers([
  'A short report: **title + from + date** → **the problem** (what wasn\'t there) → **who was and wasn\'t there** → **what you found out** → **the answer** → **your suggestion**.',
  'A report is **factual and calm**: no "It was terrible!" – just what happened.',
  'Use **was / were / wasn\'t / weren\'t** for the situation and the past simple for the actions.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**REPORT – ______________**   **From:** ______________   **Date:** ______________   On ______________ the ______________ wasn\'t ______________. ______________ was ______________.   ______ wasn\'t ______________ – he / she was ______________. ______________ were ______________ until ______.   Then ______________. ______________.   **My suggestion:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'was / were (no _did_ with _be_!)', 'wasn\'t / weren\'t for the negatives', 'All parts: problem, who was there, what you found, suggestion']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short report about **a real or invented problem**: something missing at work, a delivery that didn\'t arrive, a room that was double-booked, a machine that wasn\'t working (60 words or more). End with a suggestion.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s report as the **manager**. ★ _Clear report!_  ✓ _Can you add the exact time?_  ? _Who had the key?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two reports are read aloud. The class says: is the suggestion a good one?'));
out.push(hw('Write the **manager\'s reply** to your partner\'s report (25+ words): thank them, say what you will do, and accept or change their suggestion.'));

// ======================= 8.4 =======================
out.push(pb());
out.push(h2('8.4  I was born in Homs'));
out.push(p('**Function:** talking about life events   ·   **Grammar:** past simple + dates and years; _was born_   ·   **Pronunciation:** years: 1995, 2003, 2019'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What are the important years in a person\'s life? (born, school, university, first job, marriage, children, moving…) Make a class list.'));
out.push(board('I was born in 1996.', '2014 – started university'));
out.push(p('**b**  Say the years: 1987 · 1995 · 2001 · 2010 · 2019 · 2026'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Lina talking to?   **A** a new colleague   **B** a job interviewer   **C** her teacher'));
out.push(p('**b**  Listen again. **1** When did she move to Damascus?   **2** Why did she change jobs in 2022?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.7  A chat at the centre party', [
  ['Hani', 'So, Lina, are you from Damascus?'],
  ['Lina', 'No, I\'m not, actually. I was born in Homs. My family moved here in 2005, when I was seven.'],
  ['Hani', 'Ah! So you grew up here.'],
  ['Lina', 'Yes. I went to school in Shaalan, and then I studied accounting at Damascus University. I finished in 2019.'],
  ['Hani', 'And did you start work immediately?'],
  ['Lina', 'Almost. I worked in a small shop for a year – it wasn\'t my dream job, but I learned a lot. Then in 2020 I got a job at a trading company.'],
  ['Hani', 'Are you still there?'],
  ['Lina', 'No. In 2022 the company closed, so I moved to Medica Trading. I\'ve been there since then.'],
  ['Hani', 'And the English classes?'],
  ['Lina', 'I started in September. My company works with foreign suppliers now, so English is important. And honestly – I wanted to do something for myself.'],
  ['Hani', 'That\'s the best reason.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – talking about your life**',
  'I **was born** in Homs / in 1998 / on 3 May.  ⚠ Always **was born** – not ~~I born~~, not ~~I am born~~.',
  table(['Prepositions with time', 'Examples'], [['**in** + year, month, season', 'in 2005 · in September · in the summer'], ['**on** + day, date', 'on Friday · on 3 May 2005'], ['**at** + time', 'at six o\'clock'], ['**when** + a past sentence', 'when I **was** seven · when I **finished** school'], ['**for** + a period', 'I worked there **for** a year.'], ['**then / after that / so**', 'Then in 2020 I **got** a job. · The company closed, **so** I moved.']], [1, 1.6]),
  '**Life verbs:** be born · grow up · go to school · study · finish / leave school · start work · get a job · change jobs · move (to) · get married · have children · retire',
  '**Practise:** Complete with _in, on, when, for_ or _was born_.  1 I ______ in Latakia.  2 We moved to Damascus ______ 2015.  3 My sister got married ______ 12 June.  4 I lived in Aleppo ______ three years.  5 I started work ______ I finished university.',
  '**Useful phrases:** …, actually. · So you grew up here. · Almost. · It wasn\'t my dream job, but… · since then · honestly · That\'s the best reason.',
  '**Pronunciation.** 🔊 **Track 8.8** Years: 1987 = _nineteen eighty-seven_ · 1995 = _nineteen ninety-five_ · 2001 = _two thousand and one_ · 2019 = _twenty nineteen_ (or _two thousand and nineteen_) · 2026 = _twenty twenty-six_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B is the person on the card. A asks about their life. Then swap.'));
out.push(dlg(null, [
  ['A', 'Are you from __________?'],
  ['B', 'No, actually. I was born in __________. My family moved to __________ in __________.'],
  ['A', 'So you grew up there. Where did you go to school?'],
  ['B', '__________. Then I studied __________ at __________.'],
  ['A', 'And did you start work immediately?'],
  ['B', 'I worked __________ for __________. Then in __________ I __________.'],
  ['A', 'And now?'],
  ['B', 'Now I __________.'],
]));
out.push(table(['Life card A', 'Life card B'], [[
  'born in Deir ez-Zor, 1990 · family moved to Damascus 1999 · school in Mezzeh · studied pharmacy · worked in a hospital 2 years · 2016 opened own pharmacy · married, two sons',
  'born in Damascus, 1985 · grew up in Dummar · studied engineering in Aleppo · worked in Dubai 2010–2018 · came back in 2018 · now builds schools · not married']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **four** years you hear and what happened in each.'));
out.push(stage('4', 'Your turn – your timeline', 9));
out.push(p('Draw **your own timeline** with five or six important years (you can invent or leave things out – it\'s your choice what you share). Explain it to your partner. They ask **three** questions. Then swap. Then change partners and tell your life again, shorter and faster.'));
out.push(table(['Year', '', '', '', '', ''], [['What happened', '', '', '', '', '']], [1.4, 1, 1, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s life:  _Rasha was born in Damascus in 1993. She grew up in Jaramana and studied at the Faculty of Education. She started teaching in 2016 and she got married in 2018. In 2023 she moved to a new school near her house because she has two children now._'));
out.push(p('**Listener task:** who travelled the most? Who changed jobs the most?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the short biography on the centre\'s wall. Answer the questions.'));
out.push(model([
  '**OUR TEACHERS: Huda Saleh**',
  'Ms Huda was born in Damascus in 1979 and grew up in the Old City, near Bab Touma. She went to school there and studied English Literature at Damascus University.',
  'She finished in 2001 and started teaching in a secondary school the same year. "My first class had fifty-two students," she says. "I learned everything in that room."',
  'In 2008 she got a diploma in teaching English to adults, and in 2011 she joined Al-Yasmin Language Centre. She taught here for six years. Then in 2017 she moved to Dubai with her family and worked at an international school.',
  'She came back to Damascus in 2023 and she is now the head teacher of our adult programme. In her free time she reads poetry and makes a very good lentil soup.',
]));
out.push(item('1', 'Where did Ms Huda grow up?'));
out.push(item('2', 'What happened in 2017?'));
out.push(item('3', 'What does she do in her free time?'));
out.push(writers([
  'A short biography: **born + grew up** → **education** → **first job** (+ a quote) → **the next steps in order** (in 2008… then in 2017…) → **now** (present simple!) → **one personal detail** at the end.',
  'Use the **past simple** for the life story and the **present simple** for now: _She **is** now the head teacher._',
  'Years go **in order** – don\'t jump backwards and forwards.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________: ______________**   ______ was born in ______________ in ______ and grew up in ______________. He / She studied ______________ at ______________.   He / She finished in ______ and started ______________. "______________," he / she says.   In ______ he / she ______________, and in ______ he / she ______________. Then in ______ ______________.   He / She is now ______________. In his / her free time ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (names, places, months) and full stops', '_was born_ (not _born_ alone)', 'in + year, on + date', 'Past for the story, present for now; years in order']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short biography (60 words or more) of **your partner** (from Stage 4), **a person in your family**, or **a person you admire** in your city.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I like the detail about…_   ✓ _Can you add a quote?_   ? _What did he / she do between … and …?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two biographies are read aloud **without the name**. Can the class guess who it is?'));
out.push(hw('Write **your own** short biography (50+ words) for the class page – in the third person (_He / She was born…_). You choose what to share.'));

// ======================= 8.5 =======================
out.push(pb());
out.push(h2('8.5  First… then… in the end'));
out.push(p('**Function:** telling a story   ·   **Grammar:** sequencers (_first, then, after that, in the end_)   ·   **Pronunciation:** pausing after sequencers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a day that started badly and ended well (or the opposite!). What words do we use to tell a story in order?'));
out.push(board('First we took the bus…', 'In the end, everything was fine.'));
out.push(p('**b**  Put in order: _In the end · First · After that · Then · Finally_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How did the day end?   **A** badly   **B** well   **C** nobody knows'));
out.push(p('**b**  Listen again. **1** What was the first problem?   **2** Who helped them?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.9  The worst (best) day out', [
  ['Lama', 'How was your trip to Maaloula?'],
  ['Maya', 'Oh, it was a disaster! …But a beautiful disaster.'],
  ['Lama', 'What happened?'],
  ['Maya', 'Well, first we arrived at the garage at eight and the bus wasn\'t there. We waited for an hour.'],
  ['Lama', 'An hour!'],
  ['Maya', 'Then, when we finally arrived, it started to rain – and nobody had an umbrella. After that, Omar dropped his camera in the mud.'],
  ['Lama', 'Oh no! Was it broken?'],
  ['Maya', 'No, it was fine. But we were wet and cold and hungry, and all the restaurants were full.'],
  ['Lama', 'So what did you do?'],
  ['Maya', 'An old woman saw us outside her door and she invited us in! She gave us tea and bread and olives, and we sat in her kitchen for two hours.'],
  ['Lama', 'That\'s amazing.'],
  ['Maya', 'In the end, it was the best day of the month. We didn\'t see the monastery – but we made a new friend. Omar took a photo of her, and it\'s the best photo he took all year.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – telling a story in order**',
  '**First,** … → **Then** … → **After that,** … → **Suddenly,** … → **In the end,** … / **Finally,** …',
  '_**First** we arrived at eight. **Then** it started to rain. **After that,** Omar dropped his camera. **In the end,** it was the best day of the month._',
  '**Making a story interesting:** _It was a disaster! · Oh no! · What happened? · Suddenly… · You won\'t believe it… · And then?_',
  '**when** + past: _**when** we finally arrived, it started to rain_ · _**when** I was seven_',
  '⚠ _**In the end**_ = finally, after everything (a story).  _**At the end**_ = at the last part of something: _at the end of the film_.',
  '**Practise:** Put the story in order.  ___ After that, we walked to the café.  ___ First, I met Hiba at the bus stop.  ___ In the end, we were very late – but it was a great evening.  ___ Then we waited twenty minutes for the service.  ___ Suddenly, it started to rain.',
  '**Useful phrases:** What happened? · Oh no! · Was it broken? · So what did you do? · That\'s amazing. · You won\'t believe it!',
  '**Pronunciation.** 🔊 **Track 8.10** **Pause** after the sequencer – it helps the listener: _First, || we arrived at eight._ · _In the end, || it was the best day._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Tell the story from the pictures on the card. Use **all five** sequencers. Your partner reacts (_Oh no! What happened? And then?_). Then swap.'));
out.push(table(['Story card A – pictures', 'Story card B – pictures'], [
  ['1 A man leaves home with a big cake.', '1 A woman waits at the airport with flowers.'],
  ['2 He gets on a crowded minibus.', '2 The plane arrives – no sister.'],
  ['3 The minibus stops suddenly. The cake falls.', '3 She phones; her sister is at the other airport gate.'],
  ['4 Everybody helps him.', '4 They run to each other and the flowers fall.'],
  ['5 He arrives at the party with half a cake – everybody laughs.', '5 A child gives the flowers back; everybody is happy.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform their story. **Listener task:** tick the sequencers you hear. Which story was the funniest?'));
out.push(PHRASE_CARD(['First', 'Then', 'After that', 'Suddenly', 'In the end']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about **a real day** that didn\'t go as you planned – a journey, a day at work, a family event, a day at school. Use **all five** sequencers. Your partner must react at least **three** times and ask **two** questions. Then swap, and then change partners and tell it again.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s story:  _Tareq had a terrible morning last Sunday. First his alarm didn\'t ring. Then the water wasn\'t working, so he couldn\'t shower. After that, he ran to the bus and it left without him. In the end he arrived at the bank at ten – and the manager was late too!_'));
out.push(p('**Listener task:** whose story was the worst? Whose had the best ending?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Look at the four pictures and read Maya\'s story. Answer the questions.'));
out.push(table(['1', '2', '3', '4'], [[
  'Two friends get on a bus. It\'s sunny. They\'re smiling.',
  'They arrive. It\'s raining hard. They have no umbrella.',
  'A man drops his camera in the mud. They look at the restaurants – all full.',
  'An old woman invites them into her kitchen. Tea, bread, olives. Everybody is laughing.']], [1, 1, 1, 1]));
out.push(sp());
out.push(model([
  '**A day in Maaloula**',
  'Last Friday my friends and I took the bus to Maaloula. The morning was beautiful and we were very happy.',
  'But when we arrived, it started to rain and nobody had an umbrella. After that, my friend Omar dropped his camera in the mud, and all the restaurants were full. We were wet, cold and hungry.',
  'Then an old woman saw us outside her house. She invited us in and she gave us tea, bread and olives. We sat in her warm kitchen for two hours and she told us about the village.',
  'In the end, we didn\'t see the famous monastery – but it was the best day of the month.',
]));
out.push(item('1', 'How many paragraphs are there?'));
out.push(item('2', 'Which paragraph has the problems?'));
out.push(item('3', 'How does the writer make the ending interesting?'));
out.push(writers([
  '**A picture story (A2 Key Writing Part 7)** – write **35 words or more** about the pictures:',
  '**Picture 1** = the beginning (who, where, when) → **Pictures 2–3** = the problem → **Picture 4** = the end.',
  'Use the **past simple**, the **sequencers**, and **but / so / because** to join sentences.',
  'A good ending is a **surprise** or a **feeling**: _…but it was the best day of the month._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Look at the pictures in Stage 3, card B. Write the story.'));
out.push(p('Last ______, ______________ went to ______________ to ______________. She was ______________.   But ______________. After that, ______________.   Then ______________. ______________.   In the end, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Past simple throughout (and _was / were_)', 'Sequencers: First / Then / After that / In the end', 'The story matches all the pictures; 35+ words']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely – A2 Key Writing Part 7', 12));
out.push(p('Write the story of **your real day** from Stage 4 (60 words or more) – **or** invent a story from these three pictures: _1 A boy finds a wallet in the street. 2 He runs after a woman. 3 The woman gives him a box of sweets._'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I love the ending!_   ✓ _Can you add how you felt?_   ? _What happened after that?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two stories are read aloud. The class votes for the best ending.'));
out.push(hw('Write your story again with **a different ending** (40+ words): this time it ends badly – or much better!'));

// ======================= 8.6 =======================
out.push(pb());
out.push(h2('8.6  Really? That\'s great!'));
out.push(p('**Function:** reacting to news   ·   **Grammar:** exclamations; _That\'s + adjective_   ·   **Pronunciation:** wide intonation in reactions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Good news and bad news – what do you say in each case? Make two lists on the board.'));
out.push(board('That\'s great news!', 'Congratulations! 🎉'));
out.push(p('**b**  Good news or bad news? _I\'m sorry to hear that. · Congratulations! · Oh no! · That\'s wonderful! · Poor you! · Well done!_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many pieces of news are there?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** What happened to Hiba?   **2** What is Fadi\'s bad news?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.11  Before the lesson', [
  ['Hiba', 'Everyone – I passed my exam! I got 92!'],
  ['Rasha', 'Really? That\'s wonderful! Congratulations, Hiba!'],
  ['Tareq', 'Well done! You studied so hard.'],
  ['Hiba', 'Thank you! I couldn\'t sleep last night – and then the result came at seven this morning.'],
  ['Fadi', 'That\'s great news. I need some good news today, honestly.'],
  ['Rasha', 'Why? What happened?'],
  ['Fadi', 'My car broke down on the highway yesterday. I waited two hours and it cost me a fortune.'],
  ['Tareq', 'Oh no! I\'m sorry to hear that. Is it OK now?'],
  ['Fadi', 'It\'s in the garage. They said Thursday.'],
  ['Hiba', 'Poor you! Listen – I\'m buying sweets for everyone today, so at least you get baklava.'],
  ['Fadi', 'Ha! Now that IS good news.'],
  ['Rasha', 'And my news: my sister had a baby girl on Sunday!'],
  ['All', 'Congratulations! That\'s lovely! Mabrouk!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reacting to news**',
  table(['😀 Good news', '🙁 Bad news', 'Showing interest'], [
    ['Really? That\'s **wonderful / great / lovely**! · Congratulations! · Well done! · That\'s great news! · I\'m so happy for you!',
     'Oh no! · I\'m sorry to hear that. · Poor you! · That\'s terrible. · What a shame!',
     'Really? · What happened? · And then? · Is it OK now? · Tell me everything!'],
  ], [1.2, 1, 1]),
  '**Congratulations!** = for success (an exam, a wedding, a baby, a new job).  **Well done!** = for something the person worked hard for.',
  '⚠ _Congratulations_ always has an **s**. ⚠ _I\'m sorry to **hear** that_ – not ~~I\'m sorry for that~~.',
  '**That\'s + adjective:** That\'s **amazing / terrible / strange / interesting**.  **What a + noun:** What a **shame**! What a **surprise**!',
  '**Practise:** Choose a reaction.  1 "I got the job!" → ______  2 "My grandmother is in hospital." → ______  3 "We\'re getting married in June!" → ______  4 "I lost my phone." → ______  5 "I finished the book – 400 pages!" → ______',
  '**Useful phrases:** I need some good news today. · It cost me a fortune. · They said Thursday. · at least… · Now that IS good news.',
  '**Pronunciation.** 🔊 **Track 8.12** Reactions need a **big** voice – start high and fall: _**REAL**ly? That\'s **WON**derful!_ A flat voice sounds bored or even rude. Listen and repeat – then say them again, bigger!',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a piece of news from the card. B reacts and asks **two** questions. Then swap.'));
out.push(dlg(null, [
  ['A', 'I\'ve got some news – __________!'],
  ['B', 'Really? That\'s __________! __________!'],
  ['A', 'Thank you! __________.'],
  ['B', 'What happened exactly?'],
  ['A', '__________.'],
  ['B', '__________?'],
]));
out.push(table(['News card A', 'News card B'], [
  ['😀 Your brother got a job in Dubai.', '😀 You passed your driving test (third time!).'],
  ['🙁 Your laptop stopped working before an exam.', '🙁 Your flight was cancelled and you missed a wedding.'],
  ['😀 Your neighbours had twins.', '🙁 Someone took your bicycle from outside the building.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform – with **big** voices! **Listener task:** tick the reactions you hear. Did they sound real?'));
out.push(PHRASE_CARD(['Really?', 'That\'s wonderful!', 'Congratulations!', 'Oh no!', 'I\'m sorry to hear that.', 'Poor you!']));
out.push(stage('4', 'Your turn – the news circle', 9));
out.push(p('**a**  Write **two** pieces of news on a piece of paper: one **real** (something that happened to you or your family recently) and one **invented** (something big and surprising!).'));
out.push(p('**b**  Walk around. Tell your news to **four** classmates. React to their news, and ask two questions each time. At the end, guess: which of your partner\'s news was invented?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s news:  _Rasha told me her sister had a baby girl on Sunday – that was true. She also said she won a car in a competition. I didn\'t believe that one!_'));
out.push(p('**Listener task:** whose invented news was the most believable?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two replies. Answer the questions.'));
out.push(model([
  '**1 · Rasha → Hiba**',
  'Hiba!! Congratulations!! 🎉 92 is amazing – and you did it with a full-time job. I know how hard you studied: all those nights in the café with your books. Your mother must be so proud. Let\'s celebrate properly on Thursday – and this time I\'m paying!',
  '**2 · Tareq → Fadi**',
  'Fadi, I\'m really sorry to hear about the car. Two hours on the highway in this weather – what a terrible day. I hope the garage finishes it quickly and that it isn\'t too expensive. If you need a lift to work before Thursday, just call me – I pass your building every morning at a quarter to eight. Don\'t worry about asking; it\'s no problem at all.',
]));
out.push(item('1', 'What does Rasha remember about Hiba\'s studying?'));
out.push(item('2', 'What does Tareq offer?'));
out.push(item('3', 'Which reply is longer – and why?'));
out.push(writers([
  'A reply to **good news**: **react** (Congratulations!) → **say why it\'s special** (something you remember about them) → **a plan to celebrate**.',
  'A reply to **bad news**: **react** (I\'m sorry to hear that) → **show you understand** → **hope for the future** → **an offer of help** → _don\'t worry about asking_.',
  'For bad news, the **offer of help** is the most important part. A short "Sorry!" isn\'t enough.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Good news reply:** ______! Congratulations! ______________ is amazing – and ______________. I know ______________. Let\'s ______________!'));
out.push(p('**Bad news reply:** ______, I\'m really sorry to hear about ______________. ______________ – what a ______________. I hope ______________. If you need ______________, just ______________. Don\'t worry about asking.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'The right reaction for good / bad news', 'Something personal (what you remember or understand)', 'A plan to celebrate OR a real offer of help']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one reaction sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Choose **one**: write a reply to a classmate\'s **real** news from Stage 4, **or** write two short replies (one to good news, one to bad news) for people in your life (60 words or more in total).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read the reply written to **you**. ★ _This made me smile!_  ✓ _Can you add…?_  ? _Are you free on Thursday?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two replies are read aloud. Which one would make you feel better?'));
out.push(hw('Write a reply to the reply (25+ words): thank your classmate and accept their offer or their invitation.'));

// ======================= 8.7 =======================
out.push(pb());
out.push(h2('8.7  Review & Mediate: Sami says he…'));
out.push(p('**Function:** telling the class a friend\'s news   ·   **Recycling:** Units 1–8   ·   **Exam practice:** A2 Key Writing Part 7 (picture story), Reading Part 3, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** I go to Homs last week.  **2** Did you went to the party?  **3** She didn\'t came.  **4** Where you were yesterday?  **5** I born in 1995.  **6** I\'m sorry for that.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the message Omar received.'));
out.push(box(null, [
  '**From Sami (12 messages!)**',
  'Omar!! You won\'t believe my week. On Sunday I had my interview at the new company – the one in Mezzeh. There were four people in the room and I was so nervous I forgot my own phone number 😂',
  'Anyway, they called me on Tuesday… **I GOT THE JOB!** I start on the first of November. More money, and it\'s fifteen minutes from my house!',
  'The bad news: on Wednesday I went to tell my parents and my old car broke down – again. The mechanic says it needs a new engine. So now I have a new job and no car 🚗💀',
  'Tell everyone at the club. And tell Lina I\'m sorry – I can\'t come to the dinner on Friday because I\'m moving my things to the new office. Next time, I promise!',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Omar tells the class. What two things does he say about Sami\'s car?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.13  Telling the class', [
  ['Omar', 'Everyone, I\'ve got news from Sami – you remember Sami, he was in our class last year.'],
  ['Lina', 'Of course! How is he?'],
  ['Omar', 'He had an interview on Sunday at a company in Mezzeh, and on Tuesday they called him – he got the job!'],
  ['Rasha', 'That\'s wonderful! Congratulations to him!'],
  ['Omar', 'He starts on the first of November. More money, and it\'s only fifteen minutes from his house.'],
  ['Lina', 'He was so worried about that interview.'],
  ['Omar', 'He says he was so nervous he forgot his own phone number!'],
  ['Hiba', 'Ha! And is everything else OK?'],
  ['Omar', 'Not everything. On Wednesday his car broke down again – it needs a new engine. So he has a new job and no car.'],
  ['Hiba', 'Oh no! Poor Sami.'],
  ['Omar', 'And Lina – he\'s sorry, but he can\'t come to the dinner on Friday. He\'s moving his things to the new office.'],
  ['Lina', 'Never mind. Let\'s all call him tonight and say congratulations.'],
]));
out.push(sp());
out.push(box('Language box – telling someone else\'s news', [
  'Change **I** to **he / she** and keep the past simple:',
  '_"I had my interview on Sunday."_ → **He had his interview on Sunday.**   _"I got the job!"_ → **He got the job!**   _"My car broke down."_ → **His car broke down.**',
  'For things that are still true, use the **present**: _"I start on the first of November."_ → **He starts on the first of November.**',
  'Introduce the news: **I\'ve got news from… · He says… · He told me…**',
  'Pass on a message: **He\'s sorry, but he can\'t come. · He says hello to everyone.**',
  '⚠ _He **says**_ + -s (Unit 2!) and _He **said**_ (past) are both correct – but don\'t mix: ~~He say~~.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the message on the card (don\'t show it!). B listens and then tells it back as news: _She says she…_ Then swap.'));
out.push(table(['Message card A', 'Message card B'], [
  ['"I finished my thesis on Monday! I worked on it for two years."', '"We moved to the new flat on Saturday. The lift doesn\'t work!"'],
  ['"The defence is on the 20th and I\'m terrified."', '"My husband carried everything up five floors – twice."'],
  ['"Can you all come? It\'s at the university at 10."', '"Come and see it on Friday – but bring strong legs!"'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform the "telling back". **Listener task:** was everything correct? What did they forget?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **real news** from someone in your life (family, a friend, a colleague) from the last month – good or bad. Tell your partner. They react, ask **three** questions, and then tell **you** their news. Change partners and tell your partner\'s news to the new person – as _he / she_.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class the news you heard **from your second partner about their first partner**:  _Hiba told me about Rasha\'s news. Rasha\'s sister had a baby girl on Sunday in Jaramana. The baby\'s name is Jouri. Rasha visited them on Monday and she says the baby looks like her father!_'));
out.push(p('**Listener task:** did the news change on the way? That\'s how rumours start!   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 3)', 7));
out.push(p('Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(model([
  '**The day I became a photographer – by Omar Darwish**',
  'I bought my first camera eight years ago, in a second-hand shop in Aleppo. It was old and heavy and the man wanted too much money for it, but my mother said, "Buy it. You look at the world like a photographer." I was twenty-seven and I knew nothing about photography.',
  'For two years the camera stayed in its bag. Then in 2020 I moved to Damascus for work, and I didn\'t know anybody here. At the weekend the flat was very quiet, so I started walking in the Old City with the camera. I took terrible photos – dark, grey, boring. But I met people: a man who makes wooden boxes, a woman who sells spices, three boys who wanted to be in every picture.',
  'Last year I joined the photography club at my English centre. In the first lesson the teacher looked at my photos and said nothing for a long time. Then she said, "Your photos of buildings are bad. Your photos of people are good. Why?" I said I don\'t know. She said, "Because you like people, not buildings. Now stop photographing buildings."',
  'It was the best advice I ever got.',
]));
out.push(sp());
[
  '**1**  Why did Omar buy the camera?   **A** It was cheap.   **B** His mother encouraged him.   **C** He studied photography.',
  '**2**  What did he do with the camera for the first two years?   **A** nothing   **B** He photographed Aleppo.   **C** He sold it.',
  '**3**  Why did he start taking photos in Damascus?   **A** for his work   **B** because his weekends were empty   **C** because he joined a club',
  '**4**  What does he say about his first photos?   **A** They were good.   **B** They were bad, but he met people.   **C** He lost them.',
  '**5**  What did the teacher tell him?   **A** to photograph people   **B** to photograph buildings   **C** to leave the club',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to Lina telling her Sami\'s news (use the message in Stage 2).'));
out.push(p('Hi Lina,   I\'ve got news from Sami! He ______________ on Sunday at a company in Mezzeh, and on Tuesday ______________. He ______________ on the first of November – more money, and ______________.   The bad news: on Wednesday ______________, so ______________.   He says he\'s sorry, but ______________ on Friday because ______________. Let\'s ______________!   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['I → he / she throughout', 'Past simple for the events', 'Present for what is still true (he starts…)', 'The message to Lina is passed on']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 7)', 10));
out.push(box(null, [
  'Look at the three pictures and write the story. Write **35 words or more**.',
  '**1** A young woman waits at a bus stop in the rain with heavy bags.   **2** A car stops. An old neighbour opens the window and says something.   **3** The woman is in the car. They are both laughing. The bags are on the back seat.',
], C.grey, C.navy));
out.push(...lines(6));
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  We ___ to Homs last weekend.   a) go   b) went   c) goed',
  '2  She ___ come to the party.   a) didn\'t   b) doesn\'t   c) wasn\'t',
  '3  ___ you see Maya yesterday?   a) Did   b) Were   c) Do',
  '4  Where ___ you at eight o\'clock?   a) did   b) was   c) were',
  '5  I ___ in Latakia in 1994.   a) born   b) was born   c) am born',
  '6  I bought this car two years ___.   a) before   b) ago   c) last',
  '7  ___, we were very late – but it was a great evening.   a) In the end   b) At the end   c) At last end',
  '8  "I passed my exam!" – "___!"   a) Congratulation   b) Congratulations   c) Congratulate',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style).** 🔊 **Track 8.14** Listen to Lina talking about last week. What did she do on each day? Write a letter **A–F**. There are two extra letters.'));
out.push(table(['Days', 'Activities'], [
  ['1 Sunday ______', 'A visited her brother\'s family'], ['2 Monday ______', 'B went to the cinema'], ['3 Tuesday ______', 'C worked until six'],
  ['4 Wednesday ______', 'D stayed at home and cooked'], ['5 Thursday ______', 'E had her English class'], ['', 'F travelled to Homs'], ['', 'G cooked dinner for a guest'],
], [1, 2], { headFill: C.navy }));
out.push(dlg('Track 8.14  Audio script (read after the check)', [
  ['Lina', 'What a week! On Sunday evening I went to my brother\'s house – it was my niece Jana\'s birthday and she\'s three now. On Monday nothing special happened: I stayed at home and cooked for the whole week. Tuesday was the hard day – we had the end-of-month accounts, so I worked until six. On Wednesday my mother came, so I cooked dinner for her. And on Thursday I had my English class as usual. Friday? On Friday I slept all morning, and I\'m not sorry!'],
]));
out.push(p('**C  Writing.** Write a message to a friend (35+ words) about something that happened to you last month. Say when it happened, what happened, and how you felt.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 8)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ talk about last weekend with the past simple',
  '☐ ask questions about past events (_Did you…? Where did you…?_)',
  '☐ say where I was and where I wasn\'t',
  '☐ talk about the important years in my life',
  '☐ tell a story in order',
  '☐ react to good news and bad news',
  '☐ tell other people a friend\'s news',
  '☐ write a weekend message, an interview report, a short report, a biography, a picture story and replies to news',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 8 · Student\'s Book');
