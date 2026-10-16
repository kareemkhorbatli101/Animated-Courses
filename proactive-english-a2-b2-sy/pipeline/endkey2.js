// Proactive English A2 · Syria Edition · Book 2 — END-OF-BOOK TEST · Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('End-of-Book Test — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Marks:** Reading 30 · Writing 30 · Listening 20 · Speaking 20 = **100**.',
  '**The audio scripts are in this key only.** Play each listening part **twice**. If you have no audio, read each script aloud twice at normal speed — not slowly, and not louder than normal. Pause for ten seconds between questions in Part 2.',
  '**Before you mark the writing:** read the two samples given for each part. One shows a strong answer, one shows an answer that just passes, with the marks explained. Mark your students against those two, not against a perfect answer.',
  '**After the test:** give every student their four marks and the "what to do next" line for their band (last page). The band matters more than the number.',
  '**This is the last test of A2.** Several texts are about the people in the book, and some students will answer from the story rather than from the page. Say so before they start: every answer is in the text.',
], C.lblue, C.navy));

// READING
out.push(pb());
out.push(h2('Paper 1 · Reading   (30 marks — one mark per question)'));
out.push(S('Part 1 (6 marks)'));
out.push(A('**1 B**   **2 B**   **3 B**   **4 B**   **5 C**   **6 C**'));
out.push(A('_Why:_ **1** the cards are not ready, so your name goes in the book — you can still borrow. **2** "Would not say what about; I asked twice." **3** orders **under** 100,000 are unchanged. **4** "unchanged **at present**" is not a promise about next year, which is why **A** is wrong and the whole of 23.5 is in this item. **5** faulty work is twelve months and the box is not required. **6** the fourth thing is how to reach them, so a message without a number is not finished; **B** reverses the rule, which says _in their words, not yours_.'));
out.push(S('Part 2 (7 marks)'));
out.push(A('**7 B**  (Souad needs somebody to sit with her while she fills in the form.)'));
out.push(A('**8 A**  (Nour has given a date and said she may be asked in August.)'));
out.push(A('**9 C**  (The sisters can only come in the evening.)'));
out.push(A('**10 B**  (Souad has never written a formal letter in English.)'));
out.push(A('**11 A**  (Nour says listening is her weakest paper and she knows it.)'));
out.push(A('**12 C**  (Neither sister will speak in a room without the other.)'));
out.push(A('**13 C**  (One sister asked at work and was refused.)'));
out.push(S('Part 3 (5 marks)'));
out.push(A('**14 B**   **15 C**   **16 B**   **17 C**   **18 A**'));
out.push(A('_Why 17:_ the fear is not that her mother will be angry — "if she is angry I can argue" — but that she will simply agree. _Why 18:_ the question was kind because it was the only one that week Hiba could answer, and she had the answers ready.'));
out.push(S('Part 4 (6 marks)'));
out.push(A('**19 B** since   **20 B** already   **21 A** said   **22 A** to   **23 C** According to   **24 C** asking'));
out.push(NOTE('**21** is the one to go back over: _said **that**_ needs no person, and _told_ needs one — ~~three people told that~~. **23** must be _according to_, because _according_ alone cannot stand and _apparently_ cannot take _to_. **24** is _thank you for_ + **-ing**, which is 24.5 and should be automatic by now.'));
out.push(S('Part 5 (6 marks)'));
out.push(A('**25** for   **26** which (_accept_ that)   **27** are   **28** whether (_accept_ if)   **29** that (_accept_ it)   **30** to'));
out.push(NOTE('In Part 5 accept any word that is grammatically correct and makes sense, spelled correctly. Do not accept two words in one gap. **30** is a fixed phrase — _look forward **to** hearing_ — and it is the only place at A2 where _to_ + _-ing_ has to be learned as one piece.'));

// WRITING
out.push(pb());
out.push(h2('Paper 2 · Writing   (30 marks)'));
out.push(S('Part 6 — short message (10 marks)'));
out.push(box('How to mark Part 6', [
  '**Content (5 marks):** one mark for each of the three points (what has happened · when, **with one detail** · what Sam should do), plus two marks for writing 25 words or more and staying on the task.',
  '**Language (5 marks):** 5 = clear and accurate, good linking; 4 = clear, a few small mistakes; 3 = understandable, several mistakes; 2 = hard to follow in places; 1 = very hard to understand; 0 = not enough language to mark.',
  '**One error is worth watching for here and nowhere else:** a finished time inside a present perfect — _they have opened it in May_. Take one language mark for it the first time and not again; it is the error of Unit 23 and it is the one that will follow them into B1.',
], C.lteal));
out.push(SAMPLE([
  '**Strong (9/10 — 56 words)**',
  'Hi Sam! They\'ve reopened our library — it\'s been shut for eleven years. It opened again on the fourth of May, and one woman put fourteen thousand books back on the shelves by herself in nine weeks. If you come, bring your passport the first time, and go at about four o\'clock, when the light comes down the stairs.',
  '_All three points, each with a detail; present perfect for the news and past simple for the date, correctly separated; a real instruction at the end. One mark off only because "when the light comes down the stairs" assumes a little too much._',
]));
out.push(SAMPLE([
  '**Just passes (6/10 — 29 words)**',
  'Hi Sam. They have open the library in May after eleven years. Is very big and old. You must bring your passport. Come and see it.',
  '_Content 4/5: all three points are there and it is long enough, but "is very big and old" is the only detail and it would be true of any library. Language 2/5: **have open** → have **opened**; **in May** cannot sit in a present perfect at all, so it is either _they opened it in May_ or _they have opened the library_; **Is very big** → **It** is very big. Show the student the two correct versions of the second sentence side by side — that single comparison is worth more than the mark._',
]));
out.push(S('Part 7 — picture story (20 marks)'));
out.push(box('How to mark Part 7', [
  '**Content (10 marks):** the three pictures are all covered (3) · the events are in the right order (2) · the story has a beginning, a middle and an end, not three separate sentences (3) · 35 words or more (2).',
  '**Language (10 marks):** past simple used correctly for the events (3) · past continuous used at least once for the scene or the interrupted action (2) · linking words — _then, while, when, after that, in the end_ (2) · range of vocabulary (2) · spelling and punctuation (1).',
  'A story that uses only the present tense cannot score above 5 for language, however neat it is.',
], C.lteal));
out.push(SAMPLE([
  '**Strong (18/20 — 81 words)**',
  'Last September we went to my grandmother\'s village. It was raining at six in the morning and we were waiting at the bus station with four bags. My brother was asleep on a case and my mother was reading the timetable for the third time.',
  'After about an hour the bus stopped at the side of the road. The driver opened the engine and we all stood in the sun while he looked at it. One man was telephoning everybody he knew.',
  'In the end a smaller, older bus came, with boxes and two other families in it. We arrived at eleven, and we were still laughing about it in the evening.',
  '_All three pictures, in order, as one story. Past simple and past continuous used together and correctly; good linking (After about an hour, while, In the end); a closing line that is not in the pictures. Two marks off for small things only._',
]));
out.push(SAMPLE([
  '**Just passes (11/20 — 43 words)**',
  'The family wait in the bus station. It is raining and the boy sleep. After the bus is broken in the road and the people stand outside. One man speak in the telephone. After they are in other bus and all people laugh.',
  '_Content 7/10: all three pictures are covered in the right order and it is long enough, but it reads as a list of pictures rather than a story, and nothing is added at the end. Language 4/10: the whole story is in the **present** tense (_wait · sleep · stand · laugh_) — the single biggest thing to fix; also **the boy sleep** → the boy **was sleeping**, **the bus is broken** → the bus **broke down**, **speak in the telephone** → was speaking **on** the telephone. Mark it a pass, then rewrite the first two lines together on the board in the past._',
]));

// LISTENING
out.push(pb());
out.push(h2('Paper 3 · Listening   (20 marks — one mark per question)'));
out.push(S('Part 1 (5 marks)'));
out.push(A('**1 B**   **2 A**   **3 B**   **4 B**   **5 B**'));
out.push(dlg('Track ET-1  Audio script (play twice)', [
  ['1  Man', 'Eleven years that place has been shut.'],
  ['Woman', 'Eleven? I thought it was nine.'],
  ['Man', 'Two thousand and thirteen. I counted it on the way here.'],
  ['2  Woman', 'Can you tell him that I rang, and that I need the machine before Thursday?'],
  ['Man', 'Before Thursday. Shall I ask him to send it in writing as well?'],
  ['Woman', 'No — just ask him to ring me. Any time before six.'],
  ['3  Man', 'The parts are not coming.'],
  ['Woman', 'I rang the driver myself. He says the lorry is in Homs and he will be here tomorrow before twelve.'],
  ['Man', 'That is a completely different message.'],
  ['4  Woman', 'So — September. Are you coming?'],
  ['Man', 'Not this year. The second workshop opens in October and I am the one who will be standing in it.'],
  ['Woman', 'And after that?'],
  ['Man', 'September next year. You can ask me in August.'],
  ['5  Woman', 'They paid you for it?'],
  ['Man', 'Twenty-five thousand. For one photograph that took eleven minutes.'],
  ['Woman', 'I thought you said fifteen.'],
  ['Man', 'Twenty-five.'],
]));
out.push(S('Part 2 (5 marks)'));
out.push(A('**6** twenty-seventh (_accept_ 27th / 27)   **7** 6.30 (_accept_ half past six / 18.30)   **8** dish   **9** T-shirts (_accept_ shirts)   **10** twentieth (_accept_ 20th / 20)'));
out.push(dlg('Track ET-2  Audio script (play twice)', [
  ['Ms Huda', 'Right — the end-of-course evening. It is on Thursday the twenty-seventh. The twenty-seventh, a Thursday, and that is an arrangement and not a hope. The doors open at half past six and there is tea in the corridor from then. The certificates are at seven o\'clock, so if you are being given one, be here before seven. The evening is free, but every family brings one dish — one dish, please. Last year four people brought rice. Omar is bringing twenty T-shirts, which nobody asked him to do and which I am told are the right size this time. And tell me if you are coming by the twentieth, because I have to order the chairs. That is the twentieth. Thank you.'],
]));
out.push(S('Part 3 (5 marks)'));
out.push(A('**11 B**   **12 B**   **13 B**   **14 A**   **15 B**'));
out.push(dlg('Track ET-3  Audio script (play twice)', [
  ['Omar', 'So that is three of us in September and not you.'],
  ['Nour', 'Not me. And it is not the money — I asked, and Mr Fouad said yes before I finished the sentence.'],
  ['Omar', 'Then what?'],
  ['Nour', 'The second workshop opens in October and for six months I am the person who is there. Four days a week in a classroom is not possible.'],
  ['Omar', 'Then say when, not whether.'],
  ['Nour', 'September next year.'],
  ['Omar', 'Say it again with a date.'],
  ['Nour', 'The first week of September next year, and you are allowed to ask me in August.'],
  ['Omar', 'I am going to. Give me your number — I am putting it in with "ask about B1" next to it, because "keep in touch" is what people say when they are not going to.'],
  ['Nour', '(laughs) Fine. And has anybody booked the chairs for the twenty-seventh?'],
  ['Omar', 'Hiba said she would— no. Nobody has. Three of us each assumed one of the others did it.'],
  ['Nour', 'Then ring the hall now. And Omar — the T-shirts. Nobody asked you to do them and nobody is going to say so, so I am saying it.'],
]));
out.push(S('Part 4 (5 marks)'));
out.push(A('**16 B**  (Hiba – the teacher-training course)   **17 D**  (Omar – meeting somebody from a newspaper)   **18 A**  (Lina – B1, with an employer paying half)   **19 C**  (Nour – stopping for a year, with a date)   **20 E**  (Maysoun – opening a room that has been shut for years)'));
out.push(A('The two extra letters are **F** (leaving the city in the autumn) and **G** (taking the next group, whoever is in it).'));
out.push(dlg('Track ET-4  Audio script (play twice)', [
  ['Ms Huda', 'One sentence for each of you, and then I shall stop. Hiba is starting the teacher-training course in September — forty places and three hundred applications, and the hardest part was not the application, it was the Sunday in June when she told her mother. Omar is going on to B1, he has paid the first part, and he is meeting the man from the newspaper on the ninth, which he will tell you is the first time anybody has arranged to meet him about anything. Lina is going on as well, and the company is paying half, which she asked for herself in a letter she wrote without showing it to anybody. Nour is not coming in September, because the second workshop opens in October and she is the person who will be standing in it — but she is coming back the first week of September next year and she has given us a date, which in nine years has happened twice. And Maysoun, who some of you have met at the desk in Mezzeh, opens the children\'s room next month: eleven years shut, and fourteen thousand books back on the shelves to get to it.'],
]));

// SPEAKING
out.push(pb());
out.push(h2('Paper 4 · Speaking   (20 marks)'));
out.push(box('Mark scheme — four scales, 5 marks each', [
  '**Grammar and vocabulary (5):** 5 = good control of the A2 range of both books (present perfect, _for_/_since_, the three futures, reported requests, _so_/_such_/_too_/_enough_), with some variety · 3 = simple structures mostly correct, limited range · 1 = very basic, frequent errors that stop meaning.',
  '**Pronunciation (5):** 5 = easy to understand throughout, with sentence stress and natural rhythm · 3 = understandable with some effort from the listener · 1 = often hard to understand.',
  '**Interactive communication (5):** 5 = keeps the conversation going, asks the partner, reacts, agrees or disagrees with a reason · 3 = answers but rarely initiates · 1 = needs constant help from the examiner.',
  '**Task completion (5):** 5 = answers what was asked, gives reasons every time, and in Part 2 the pair reach a decision · 3 = answers briefly, few reasons · 1 = off task or silent.',
], C.lteal));
out.push(S('Part 1 — what a good answer sounds like'));
out.push(SAMPLE([
  '**Phase 1 (full marks).** "My name is Nour Sabbagh, S-A-B-B-A-G-H. I have been coming here for nine months — since September. I have lived in Damascus since 2011, so that is thirteen years. I work at TechCare; I am at the desk and I do some of the repairs. In September I am not going on, because the second workshop opens in October, but I am coming back the first week of September next year. That part is a plan. The workshop is arranged."',
  '**Phase 2 (full marks, "something that has changed where you live").** "They have reopened the library in Mezzeh. It was shut for eleven years and it opened again in May. They have painted it and they have put new windows in the back room, and they have moved the desk to the door so that somebody sees you come in. The children\'s room has not opened yet — it is still full of chairs. I have been twice and I have taken a book out, which I have not done since I was at school."',
  '_Three things make this full marks: it is **long enough** (about 30 seconds), it has **detail and numbers**, and the present perfect and the past simple are kept apart._',
]));
out.push(S('Part 2 — what a good discussion sounds like'));
out.push(SAMPLE([
  '**A:** I think you should ring them the same evening. If you wait a week they have already decided they are not coming back.',
  '**B:** I agree, but who rings? That is the real problem. Everybody thinks somebody else is going to do it, so nobody does.',
  '**A:** Then the person who notices first rings. Not the teacher — if the teacher rings it is about the fee.',
  '**B:** That is true. What would you say, though? I would not know how to start.',
  '**A:** I would not ask whether they were all right. I would ask what they were going to do about it. It is a different question and it is easier to answer.',
  '**B:** So: whoever notices first, that same evening, and ask what they are going to do rather than whether they are all right. Shall we agree on that?',
  '_Full marks for interaction: both ask questions, both give reasons, both react, and they reach a decision together — using the language of 24.6 and 22.1 without being asked to._',
]));
out.push(NOTE('**Weak-pair rescue.** If a pair stops after ten seconds, do not fill the silence yourself. Ask one of them: "And what do **you** think about number two?" — then wait. Mark what they produce after that, not the silence before it.'));

// BANDS
out.push(pb());
out.push(h2('Results — and what to do next'));
out.push(table(['Total', 'What it means', 'What to do next'], [
  ['**75–100**', 'Strong A2, and the whole of A2 — you can do everything in both books and you are ready for B1.',
   'Go into B1. Take one page with you: the list of things you avoid saying in English. At this level that list is the syllabus and nobody else can write it for you.'],
  ['**55–74**', 'A2 complete. You can communicate, with mistakes that rarely stop the listener.',
   'Go into B1, and take **two** things: the paper with your lowest mark, and the tense you lost most marks on. Five minutes a day on those two, not on everything.'],
  ['**40–54**', 'The second half of A2 is not secure yet — usually the present perfect, or listening at speed.',
   'Before B1, redo the **Review & Mediate** cycle (x.7) of Units 13, 19 and 23. They recycle the present perfect, relative clauses and reporting in 90 minutes each. Then take this test again.'],
  ['**Under 40**', 'The gap is in the basics, not in the last units.',
   'Go back to the **"I can…"** box at the end of every unit of Book 2 and mark 😐 honestly. Repeat Lesson A of those cycles only — speaking first, writing after. Book 1 does not need repeating; the cycles you marked 😐 do.'],
], [1, 2.2, 2.6], { headFill: C.navy }));
out.push(sp());
out.push(box('A note on the marks', [
  'The four papers are **not** equally easy. In most classes Listening is the lowest and Speaking is the highest — that is normal at A2 and it is not a reason to worry.',
  'If a student passes Speaking but fails Writing, they do not need "more English". They need the writing stages of each cycle (5, 6, 7) done properly, with the peer-review step not skipped.',
  'If a student fails Listening and passes everything else, the problem is usually **speed**, not vocabulary. Replay the audio scripts of Units 13–24 while they read them — that one habit moves the Listening mark more than anything else.',
  'And one that belongs only to this test: a student who loses marks on the present perfect in **three** different papers has one problem, not three. Teach it once more, in Unit 23\'s shape — the news in one tense, the detail in the other — and re-mark the papers you have.',
], C.lblue, C.navy));
out.push(sp());
out.push(box('End of Book 2 — and end of A2', [
  '**Book 2 is complete:** Units 13–24 · 84 cycles · a Mid-Book Test and an End-of-Book Test, with an answer or a full sample for every single task.',
  '**Both books together:** 24 units · 168 cycles · two years of Thursdays · four tests.',
  'Two things to do on the last evening, and neither is in the test. Give every student back the **envelope from Unit 13**, and have them read the Stage 7 they wrote in Unit 13 next to the one they wrote in Unit 24. And say the number of weeks out loud. Nobody counts it for themselves, and the students who most need to hear it are the ones who are not going on to B1.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · End-of-Book Test · Answer Key');
