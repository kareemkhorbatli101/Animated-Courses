// Proactive English A2 · Syria Edition · Book 1 — END-OF-BOOK TEST · Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('End-of-Book Test — Answer Key'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Marks:** Reading 30 · Writing 30 · Listening 20 · Speaking 20 = **100**.',
  '**The audio scripts are in this key only.** Play each listening part **twice**. If you have no audio, read each script aloud twice at normal speed — not slowly, and not louder than normal. Pause for ten seconds between questions in Part 2.',
  '**Before you mark the writing:** read the two samples given for each part. One shows a strong answer, one shows an answer that just passes, with the marks explained. Mark your students against those two, not against a perfect answer.',
  '**After the test:** give every student their four marks and the "what to do next" line for their band (last page). The band matters more than the number.',
], C.lblue, C.navy));

// READING
out.push(pb());
out.push(h2('Paper 1 · Reading   (30 marks — one mark per question)'));
out.push(S('Part 1 (6 marks)'));
out.push(A('**1 B**   **2 A**   **3 B**   **4 B**   **5 C**   **6 B**'));
out.push(A('_Why:_ **1** urgent medicine is available at the clinic during the lunch closure. **2** eight o\'clock is earlier than half past eight. **3** the notice says write your name and the date **before** taking a book out. **4** "If Friday is difficult, tell me today and we will keep Thursday." **5** the charge is for staying in the **room**, not for the bags. **6** "Anything left on Thursday morning goes in the bin."'));
out.push(S('Part 2 (7 marks)'));
out.push(A('**7 A**  (Friday is Samir\'s only free day.)'));
out.push(A('**8 A**  (He learns by speaking and hates written homework.)'));
out.push(A('**9 B**  (Dalia is very shy and never speaks in a big group.)'));
out.push(A('**10 B**  (She has no money.)'));
out.push(A('**11 C**  (The family needs shopping, the doctor, the school, the neighbours.)'));
out.push(A('**12 C**  (They can only study together in the evening, after the children eat.)'));
out.push(A('**13 B**  (Three hours every day; Samir works six days and the family has evenings only.)'));
out.push(S('Part 3 (5 marks)'));
out.push(A('**14 B**   **15 C**   **16 A**   **17 B**   **18 C**'));
out.push(A('_Why 16:_ she promised Sunday although she thought Friday — a later day than she expected, so the customer is never disappointed. _Why 18:_ "Nothing in my hands. Everything in my mouth." — her repair skills were always good; what changed is her speaking.'));
out.push(S('Part 4 (6 marks)'));
out.push(A('**19 B** on   **20 A** included   **21 C** From   **22 A** sunset   **23 B** book   **24 B** to'));
out.push(S('Part 5 (6 marks)'));
out.push(A('**25** like   **26** to   **27** are   **28** a (_accept_ per)   **29** if (_accept_ whether)   **30** by'));
out.push(NOTE('In Part 5 accept any word that is grammatically correct and makes sense, spelled correctly. Do not accept two words in one gap.'));

// WRITING
out.push(pb());
out.push(h2('Paper 2 · Writing   (30 marks)'));
out.push(S('Part 6 — short message (10 marks)'));
out.push(box('How to mark Part 6', [
  '**Content (5 marks):** one mark for each of the three points (weather · a place to visit **with a reason** · a question about the journey), plus two marks for writing 25 words or more and staying on the task.',
  '**Language (5 marks):** 5 = clear and accurate, good linking; 4 = clear, a few small mistakes; 3 = understandable, several mistakes; 2 = hard to follow in places; 1 = very hard to understand; 0 = not enough language to mark.',
  'Mistakes that do **not** stop the reader (a missing article, a wrong preposition) should not take a mark below 3 on their own.',
], C.lteal));
out.push(SAMPLE([
  '**Strong (9/10 — 54 words)**',
  'Hi Sam! Great news that you\'re coming. Next week is going to be warm and sunny, about twenty-six degrees, but take a jacket for the evening. You should visit the old market in the morning, because it\'s cooler then and the sellers have time to talk to you. What time does your bus arrive? I\'ll meet you at the station.',
  '_All three points, each with detail; a reason for the place; a real question; natural linking (but, because). One mark off only for "Great news that you\'re coming" being slightly awkward._',
]));
out.push(SAMPLE([
  '**Just passes (6/10 — 28 words)**',
  'Hi Sam. The weather is good next week, maybe hot. You should visit the old city because is beautiful. When you come? See you.',
  '_Content 4/5: all three points are there and it is long enough, but "the weather is good, maybe hot" gives the reader nothing to pack for. Language 2/5: **because is beautiful** → because **it** is beautiful; **When you come?** → When **are** you coming?; and the future is missing throughout (**is going to be** warm). Show the student that answering all three points and writing well are two different things._',
]));
out.push(S('Part 7 — picture story (20 marks)'));
out.push(box('How to mark Part 7', [
  '**Content (10 marks):** the three pictures are all covered (3) · the events are in the right order (2) · the story has a beginning, a middle and an end, not three separate sentences (3) · 35 words or more (2).',
  '**Language (10 marks):** past simple used correctly for the events (3) · past continuous used at least once for the scene or the interrupted action (2) · linking words — _then, while, when, after that, suddenly_ (2) · range of vocabulary (2) · spelling and punctuation (1).',
  'A story that uses only the present tense cannot score above 5 for language, however neat it is.',
], C.lteal));
out.push(SAMPLE([
  '**Strong (18/20 — 76 words)**',
  'Last month we went to my cousin\'s wedding. At eight o\'clock everybody was eating and talking in the big hall, and my uncle was making a speech.',
  'Suddenly the lights went out. The whole hall was dark and we could not see anything, so people held up their phones. My uncle stopped in the middle of a sentence.',
  'Then an old woman started to sing, and everybody joined in. When the lights came back, we were all laughing and clapping, and a young man was taking her photograph. Nobody forgot that evening.',
  '_All three pictures, in order, as one story. Past simple and past continuous used correctly together; good linking (Suddenly, Then, When); a closing line. Two marks off for small things only — "we could not see anything" is a little heavy, and "joined in" is the only risky phrase._',
]));
out.push(SAMPLE([
  '**Just passes (11/20 — 41 words)**',
  'The people are in a wedding. They eat and talk. After the light is off and the people use the phone for light. One man speak before. After the light come back and all people laugh and one woman sing.',
  '_Content 7/10: all three pictures are covered in the right order and it is long enough, but it reads as a list of pictures, not a story. Language 4/10: the whole story is in the **present** tense (_are · eat · speak · come_) — this is the single biggest thing to fix; also **one man speak** → one man **was speaking**, **the light is off** → the lights **went** off. Mark it a pass, then rewrite the first two lines together on the board in the past._',
]));

// LISTENING
out.push(pb());
out.push(h2('Paper 3 · Listening   (20 marks — one mark per question)'));
out.push(S('Part 1 (5 marks)'));
out.push(A('**1 B**   **2 B**   **3 A**   **4 B**   **5 A**'));
out.push(dlg('Track ET-1  Audio script (play twice)', [
  ['1  Man', 'Is the bus still at half past seven?'],
  ['Woman', 'No, they changed it. It leaves at eight now – but be there at a quarter to.'],
  ['2  Woman', 'I\'m visiting my neighbour\'s new baby tomorrow. Flowers or a photo frame?'],
  ['Man', 'Honestly? Take sweets. Everybody shares them and the mother doesn\'t have to find a place for them.'],
  ['Woman', 'You\'re right. Sweets it is.'],
  ['3  Receptionist', 'I have a room on the third floor with a sea view, or one on the ground floor at the back.'],
  ['Man', 'My mother is with me and there\'s no lift, so we\'ll take the one downstairs, please.'],
  ['4  Woman', 'Shall we take the children to the park tomorrow?'],
  ['Man', 'Have you seen the sky? Look at those clouds – it\'s going to rain all day. Let\'s go to the museum instead.'],
  ['5  Woman', 'Mr Yusuf hasn\'t answered my email about the order.'],
  ['Man', 'Do you want me to write again?'],
  ['Woman', 'No, email is too slow now. Could you phone him this morning and ask him directly?'],
]));
out.push(S('Part 2 (5 marks)'));
out.push(A('**6** December   **7** 5.30 (_accept_ half past five / 17.30)   **8** dish   **9** behind   **10** 12 (_accept_ the 12th / twelfth)'));
out.push(dlg('Track ET-2  Audio script (play twice)', [
  ['Mr Bassam', 'Good evening, everybody. A few words about our end-of-year evening. It is on Thursday the nineteenth of December – the nineteenth, a Thursday. The doors open at half past five and there is tea and coffee in the corridor. The certificates for level A2 start at a quarter past six, so if that is your level, come at six. The evening is free, but every family brings one dish for the dinner at eight – one dish, please, not three; last year we had forty plates of rice. One more thing: there is no parking in front of the building, so please use the street behind. And tell me if you are coming by the twelfth of December, because I have to order the chairs. That\'s the twelfth. Thank you.'],
]));
out.push(S('Part 3 (5 marks)'));
out.push(A('**11 B**   **12 B**   **13 B**   **14 A**   **15 C**'));
out.push(dlg('Track ET-3  Audio script (play twice)', [
  ['Maya', 'Lina? It\'s Maya. Listen – about Saturday.'],
  ['Lina', 'Don\'t tell me it\'s cancelled.'],
  ['Maya', 'No, no. But my aunt says four o\'clock is too early, because they\'re cooking until three. Can we make it half past four?'],
  ['Lina', 'Half past four is better for me too, honestly. I finish at three.'],
  ['Maya', 'Good. Half past four, then.'],
  ['Lina', 'And what should I bring? I was going to buy something for the children.'],
  ['Maya', 'Please don\'t. There are seven children and they have enough. Bring sweets – we can all eat those.'],
  ['Lina', 'Sweets. Fine. Are you taking the car?'],
  ['Maya', 'There\'s nowhere to park in their street, so I thought the bus. It stops two minutes from the door and it goes every ten minutes.'],
  ['Lina', 'The bus is fine. Meet at the stop at four?'],
  ['Maya', 'Perfect. Oh – and take a jacket. It\'s warm now but it\'s going to be cold when we come home in the evening.'],
  ['Lina', 'Noted. See you at four.'],
]));
out.push(S('Part 4 (5 marks)'));
out.push(A('**16 F**  (Samir – ask more questions in class)   **17 A**  (Nour – the telephone)   **18 E**  (Lina – past tenses)   **19 B**  (Omar – shorter sentences)   **20 G**  (Hiba – read something every day)'));
out.push(A('The two extra letters are **C** (an evening class) and **D** (speak more slowly).'));
out.push(dlg('Track ET-4  Audio script (play twice)', [
  ['Ms Huda', 'Before the holiday, one sentence for each of you. Samir: your English is better than you think, but you sit and wait. In the next book I want to hear you asking the questions, not only answering them. Nour: everything is good except the telephone – that is where you lose your confidence, so take every call you can at work, even the difficult ones. Lina: your writing is lovely, but when you tell me about last week, half the verbs are in the present. Go back over your past tenses and you jump a level. Omar: you have the biggest vocabulary in this class and the longest sentences in Syria. Cut them in half – two short sentences are stronger than one long one. And Hiba: nothing is wrong, you simply need more English in your eyes. Ten minutes of reading every day – anything, a leaflet, a message, a page.'],
]));

// SPEAKING
out.push(pb());
out.push(h2('Paper 4 · Speaking   (20 marks)'));
out.push(box('Mark scheme — four scales, 5 marks each', [
  '**Grammar and vocabulary (5):** 5 = good control of the A2 range of this book (tenses, comparatives, should, going to), with some variety · 3 = simple structures mostly correct, limited range · 1 = very basic, frequent errors that stop meaning.',
  '**Pronunciation (5):** 5 = easy to understand throughout, with sentence stress and natural rhythm · 3 = understandable with some effort from the listener · 1 = often hard to understand.',
  '**Interactive communication (5):** 5 = keeps the conversation going, asks the partner, reacts, agrees or disagrees with a reason · 3 = answers but rarely initiates · 1 = needs constant help from the examiner.',
  '**Task completion (5):** 5 = answers what was asked, gives reasons every time, and in Part 2 the pair reach a decision · 3 = answers briefly, few reasons · 1 = off task or silent.',
], C.lteal));
out.push(S('Part 1 — what a good answer sounds like'));
out.push(SAMPLE([
  '**Phase 1 (full marks).** "My name is Samir Haddad, H-A-D-D-A-D. I live in Jaramana with my wife and my parents. I work in a shop in the centre – I sell phones and I repair the small problems. I come here by bus. It takes about half an hour, or forty minutes if the traffic is bad."',
  '**Phase 2 (full marks, "a celebration in your family").** "My favourite is the olive harvest in my village. It isn\'t really a celebration, but it feels like one. Before it starts, all the family comes from the city, even the cousins. When we arrive, everybody works – the children carry the small boxes. After the day in the field we eat outside together, and somebody always plays music. I look forward to it all year."',
  '_Note the three things that make this full marks: it is **long enough** (about 30 seconds), it has **detail**, and it uses the language of the book (before / when / after + present simple)._',
]));
out.push(S('Part 2 — what a good discussion sounds like'));
out.push(SAMPLE([
  '**A:** Let\'s start with the old city and the market. I think it\'s the best one, because the visitor sees normal life, not only buildings.',
  '**B:** I agree, but it takes a whole day if you walk, and in July it\'s too hot. What about the park by the river? It\'s free and it\'s cooler.',
  '**A:** It\'s cooler, yes, but you can see a park in any country. What do you think about the old building outside the city?',
  '**B:** It\'s beautiful, but it\'s expensive – the car, the entrance, the lunch – and it takes four hours with the road.',
  '**A:** So, for one day only: the old city in the morning, when it\'s cool, and then lunch with the family?',
  '**B:** Yes. The lunch is the thing they remember. Let\'s agree on that: the market in the morning and a long lunch after it.',
  '_Full marks for interaction: both ask questions, both give reasons, both react to the other, and they reach a decision together._',
]));
out.push(NOTE('**Weak-pair rescue.** If a pair stops after ten seconds, do not fill the silence yourself. Ask one of them: "And what do **you** think about number two?" — then wait. Mark what they produce after that, not the silence before it.'));

// BANDS
out.push(pb());
out.push(h2('Results — and what to do next'));
out.push(table(['Total', 'What it means', 'What to do next'], [
  ['**75–100**', 'Strong A2. You can do everything in Book 1 and you are ready for the second half of the level.',
   'Go straight into Book 2. Keep a notebook of the phrases you avoid using — those are your next ten lessons.'],
  ['**55–74**', 'Solid A2 in progress. You can communicate, with mistakes that rarely stop the listener.',
   'Go into Book 2, and take **two** things with you: the tense you lost most marks on, and the paper with your lowest mark. Five minutes a day on those two, not on everything.'],
  ['**40–54**', 'The language is there but it isn\'t secure yet, usually in writing or listening.',
   'Before Book 2, redo the **Review & Mediate** cycle (x.7) of three units you found hard. They recycle the whole unit in 90 minutes each.'],
  ['**Under 40**', 'The gap is in the basics, not in the last units.',
   'Go back to the **"I can…"** box at the end of every unit and mark 😐 honestly. Repeat Lesson A of those cycles only — speaking first, writing after. Then take this test again.'],
], [1, 2.2, 2.6], { headFill: C.navy }));
out.push(sp());
out.push(box('A note on the marks', [
  'The four papers are **not** equally easy. In most classes Listening is the lowest and Speaking is the highest — that is normal at A2 and it is not a reason to worry.',
  'If a student passes Speaking but fails Writing, they do not need "more English". They need the writing stages of each cycle (5, 6, 7) done properly, with the peer-review step not skipped.',
  'If a student fails Listening and passes everything else, the problem is usually **speed**, not vocabulary. Replay the audio scripts of Units 1–12 while they read them — that one habit moves the Listening mark more than anything else.',
], C.lblue, C.navy));
out.push(sp());
out.push(box('End of Book 1', [
  '**Book 1 is complete:** 12 units · 84 cycles · a Mid-Book Test and an End-of-Book Test, with an answer or a full sample for every single task.',
  '**Book 2** takes the second half of A2: Units 13–24, the same seven-stage cycle, the same cast, and the same two tests.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · End-of-Book Test · Answer Key');
