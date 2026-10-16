// Proactive English A2 · Syria Edition · Book 2 · Unit 21 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 21  Quality and Complaints'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**21.1**  say how much you liked something',
  '**21.2**  say how much, with an adjective',
  '**21.3**  say what is wrong with something',
  '**21.4**  say what is not enough',
  '**21.5**  complain politely',
  '**21.6**  ask for a refund or an exchange',
  '**21.7**  Review & Mediate: explain a returns policy to a friend',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The T-shirts.** The class ordered twenty for the end of the course — 420,000 SYP, paid — and twenty arrived in the wrong size, all of them, from **Al-Rayyan Printing**.',
  '**Maya is taking back a kettle** she bought three weeks ago. She has the receipt. She has not kept the box.',
  '**Mr Peter Lang is coming in April** — the German visitor from Book 1 — and the class would like the T-shirts to exist by then.',
], C.lyellow, C.orange));

// ======================= 21.1 =======================
out.push(pb());
out.push(h2('21.1  It was such a good evening'));
out.push(p('**Function:** saying how much you liked something   ·   **Grammar:** _such a_ / _such_ + noun   ·   **Pronunciation:** stress on _such_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Something you really liked this year — a meal, a day, a film, a person. One sentence each, beginning _It was such a…_ Your teacher collects six.'));
out.push(board('It was such a good evening.', 'such a + adjective + singular noun'));
out.push(p('**b**  _such a_ or _such_? **1** It was ______ good day.  **2** They were ______ kind people.  **3** It was ______ hard work.  **4** She\'s ______ a good teacher.  **5** We had ______ nice weather.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they remembering?   **A** the end-of-course evening last year   **B** a wedding   **C** Mr Lang\'s last visit'));
out.push(p('**b**  Listen again. **1** Why does Hiba say the class should do it again?   **2** What does Omar remember about Mr Lang?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.1  It was such a good evening', [
  ['Hiba', 'Can we do the evening again this year? Last year was such a good evening.'],
  ['Lina', 'It was. And it was such hard work.'],
  ['Hiba', 'It was four hours of work for an evening we still talk about in March. That is a good exchange.'],
  ['Omar', 'What I remember is Mr Lang. He came for an hour and stayed for four, and he said it was such a strange thing to be in a room where everybody was speaking his third language to each other.'],
  ['Nour', 'He said such nice things about the food that my mother has asked about him twice since.'],
  ['Lina', 'So: the same evening, and T-shirts this time.'],
  ['Hiba', 'T-shirts?'],
  ['Lina', 'Twenty. One each, with the class on them. I have the money from everybody and I have found a printer.'],
  ['Omar', 'That is such a good idea that I am suspicious of it.'],
  ['Lina', 'Why?'],
  ['Omar', 'Because twenty T-shirts is twenty chances for something to go wrong, and in my experience it goes wrong in the size.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _such_ before a noun**',
  table(['the pattern', 'examples'], [
    ['**such a** + adjective + **singular** noun', '_It was **such a good** evening._ · _She\'s **such a kind** woman._'],
    ['**such** + adjective + **plural** noun', '_They were **such kind** people._'],
    ['**such** + adjective + **uncountable** noun', '_It was **such hard** work._ · _We had **such nice** weather._'],
  ], [1.4, 1.6]),
  '⚠ The **a** goes after _such_ and only with a **singular countable** noun: ~~such kind a woman~~ ~~such a hard work~~ ~~such a nice people~~.',
  '**For a result, add _that_:** _It was **such a good** idea **that** I am suspicious of it._ · _He said **such nice** things **that** my mother has asked about him twice._',
  '**Practise:** _such a_, _such an_ or _such_?  1 It was ______ long day.  2 They are ______ good neighbours.  3 It was ______ interesting evening.  4 We had ______ bad luck.  5 She is ______ honest person.  6 It was ______ hard work that nobody spoke.',
  '**Useful phrases:** It was such a good evening. · That is a good exchange. · in my experience · That is such a good idea that I am suspicious of it.',
  '**Pronunciation.** 🔊 **Track 21.2** The stress goes on **such**, not on the adjective: _It was **SUCH** a good evening._ Said flat it is just a sentence; said with that stress it is a compliment. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the thing on the card; B answers with **three** _such_ sentences — one singular, one plural, one uncountable — and one of them must have _that_ and a result. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'How was __________?'],
  ['B', 'It was such a __________ __________.'],
  ['A', 'Really?'],
  ['B', 'They were such __________ __________, and it was such __________ __________.'],
  ['A', 'Would you do it again?'],
  ['B', 'It was such a __________ __________ that __________.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [
  ['the end-of-course evening last year', 'a wedding you went to'],
  ['a journey you remember', 'the day you started a job'],
  ['a meal somebody cooked for you', 'a place you went to once'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **three** _such_ sentences and check the _a_ in each.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about the best thing that has happened to you this year, using _such_ at least three times. Your partner must ask what made it so, and may not accept "everything".'));
out.push(p('**b**  Swap. Then each of you say one thing somebody else did for you that you have never properly thanked them for.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba wants the end-of-course evening again, because last year was such a good evening that the class still talks about it in March. Lina said it was also such hard work — four hours for one evening — and Hiba said that is a good exchange. What Omar remembers is Mr Lang, who came for an hour and stayed for four and said it was such a strange thing to be in a room where everybody was speaking his third language. The new part is twenty T-shirts, which Omar says is such a good idea that he is suspicious of it, because twenty T-shirts is twenty chances for something to go wrong in the size._'));
out.push(p('**Listener task:** write the best _such_ sentence you heard today.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the thank-you message from last year. Answer the questions.'));
out.push(model([
  '**To:** Ms Huda and class 4B   **Subject:** Thank you — from Peter',
  'Dear all,',
  'I came for an hour and I stayed for four, which I did not plan and which I would not change.',
  'It was such a strange evening, in the best way. I have been in a lot of rooms where people practise English on me. This was the first room where everybody was speaking English **to each other** and I was the one who was not needed. That is such an unusual thing that I did not know what to do with my face for the first ten minutes.',
  'They were such generous people. Somebody\'s mother sent food for twenty-two and I was given a bag to take to the hotel, which I ate at eleven at night, standing up, and which was better than anything I ate in the following four days.',
  'And it was such hard work for you — I could see it. Four hours of an evening that somebody spent a week preparing.',
  'Thank you. If I am in Damascus in the spring, I would like to come again, and this time I will not be surprised.',
  'Peter Lang',
]));
out.push(item('1', 'What did Peter not plan?'));
out.push(item('2', 'Why was the room unusual for him?'));
out.push(item('3', 'What does he say about the food he was given?'));
out.push(writers([
  'A thank-you message that is worth reading: **what you did not expect** → **the thing that was unusual, with _such_** → **one exact detail** → **what you noticed that nobody mentioned** → **what you would like next time**.',
  'The detail is the gift. _Which I ate at eleven at night, standing up_ is worth more than three sentences of _it was delicious_.',
  'Notice the **work** behind the thing: _it was such hard work for you — I could see it_. Almost nobody thanks anybody for the preparation, and it is the part people remember being thanked for.',
  '⚠ _such_ carries a lot of feeling. Three in a message is warm; eight is a performance and the reader stops believing it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a thank-you message for something somebody did for you (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   I ______________, which I did not plan and which ______________.   It was such a ______________ ______________. ______________ is such an unusual thing that ______________.   They were such ______________ ______________. ______________.   And it was such ______________ ______________ for you — I could see it.   Thank you. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, a subject line and a name at the end',
  '_such a_ + singular · _such_ + plural or uncountable · the **a** in the right place',
  'At least one exact detail, not an adjective',
  'One line noticing the work behind the thing',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (60 words or more) to somebody you have never properly thanked. Three _such_ sentences, one exact detail, and one thing you noticed that they do not know you noticed.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person it is for**. ★ _The line I would keep._  ✓ _One _such_ sentence with nothing behind it._  ? _Are you going to send this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Nobody reads anybody\'s aloud. Instead: **how many of you are going to send it?** Count the hands, and then ask the ones who said no what is stopping them.'));
out.push(hw('Send it. Then write **two lines** about what happened (40+ words) — or, if you did not send it, two lines about why not. Both are honest answers.'));

// ======================= 21.2 =======================
out.push(pb());
out.push(h2('21.2  They\'re so small'));
out.push(p('**Function:** saying how much, with an adjective   ·   **Grammar:** _so_ + adjective; _so much_ / _so many_   ·   **Pronunciation:** lengthening on _so_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Two columns on the board: **so** + adjective, and **such a** + noun. The class turns five sentences from one into the other: _It was such a long day._ → _The day was so long._'));
out.push(board('They\'re so small.', 'so + adjective · such a + noun'));
out.push(p('**b**  _so_, _so much_ or _so many_? **1** They\'re ______ small.  **2** There are ______ people.  **3** There\'s ______ noise.  **4** It costs ______ money.  **5** She was ______ kind.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has arrived?   **A** the wrong colour   **B** the wrong size   **C** the wrong number'));
out.push(p('**b**  Listen again. **1** How small are they?   **2** What does Lina say she is going to do first?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.3  Twenty of them', [
  ['Hiba', 'Open it.'],
  ['Lina', '…They\'re so small.'],
  ['Hiba', 'Hold one up.'],
  ['Lina', 'That is not a large. That is not even a medium. I ordered twenty larges and this would be tight on Jana, and Jana is four.'],
  ['Omar', 'Is it all of them?'],
  ['Lina', 'All twenty. Every one the same, so it is not a mistake in the packing — somebody printed the wrong size, twenty times, without stopping once to think.'],
  ['Hiba', 'The printing is good, though.'],
  ['Lina', 'The printing is beautiful. That is what makes it so annoying. If they were badly printed I would feel better.'],
  ['Nour', 'How much was it?'],
  ['Lina', 'Four hundred and twenty thousand. Everybody\'s money.'],
  ['Omar', 'Right. What are you going to do?'],
  ['Lina', 'Nothing today. I am so angry that anything I said this afternoon would be the wrong thing. Tomorrow morning I am going to ring them, and I am going to have the order number, the date, and one sentence.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _so_, _so much_, _so many_**',
  table(['the pattern', 'examples'], [
    ['**so** + adjective', '_They\'re **so small**._ · _She was **so kind**._'],
    ['**so much** + uncountable', '_**so much** noise_ · _**so much** money_'],
    ['**so many** + plural', '_**so many** people_ · _**so many** problems_'],
  ], [1.3, 1.7]),
  '**_so_ and _such_ say the same thing in two shapes:**  _It was **such a long** day._ = _The day was **so long**._  _such_ goes with a **noun**; _so_ goes with an **adjective** on its own.',
  '⚠ ~~It was so a long day.~~ ~~They are such small.~~ ~~so much people~~ ~~so many noise~~.',
  '**For a result, add _that_:** _I am **so angry that** anything I said today would be the wrong thing._',
  '**Practise:** _so_, _so much_, _so many_, _such a_ or _such_?  1 They\'re ______ small.  2 It was ______ small T-shirt.  3 There was ______ noise.  4 There were ______ problems.  5 He is ______ careful man.  6 I was ______ tired that I went to bed at eight.',
  '**Useful phrases:** That is what makes it so annoying. · If they were badly printed I would feel better. · I am so angry that anything I said today would be wrong. · the order number, the date, and one sentence',
  '**Pronunciation.** 🔊 **Track 21.4** _so_ is **lengthened**, not just stressed: _They\'re **sooo** small._ The length is the feeling. Listen to the short version and the long one, and say both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A opens the delivery on the card; B asks three questions. A must use _so_, _so much_ or _so many_ at least three times and finish with a _so … that_ sentence. Then swap cards.'));
out.push(dlg(null, [
  ['A', '…They\'re so __________.'],
  ['B', 'Is it all of them?'],
  ['A', 'All __________. Every one the same.'],
  ['B', 'How much was it?'],
  ['A', '__________. __________.'],
  ['B', 'What are you going to do?'],
  ['A', 'Nothing today. I am so __________ that __________.'],
]));
out.push(table(['Card A – what arrived', 'Card B – what arrived'], [
  ['20 T-shirts, all the wrong size, 420,000, beautifully printed', '60 chairs for a hall, all with one short leg, 900,000'],
  ['a delivery of books, all the same title, 140,000', '40 meals for an event, all without the meat, paid in full'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** _so_ sentences and the _so … that_ one. Which one told you most?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about something that went wrong where the annoying part was that **one thing about it was good** — like the printing. Use _so_ three times. Your partner must ask what would have made it easier to accept.'));
out.push(p('**b**  Swap. Then each of you say what you did **on the day** and whether you would do that again.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _All twenty T-shirts came in the wrong size — so small that one would be tight on Lina\'s four-year-old niece. Every single one is the same, so it is not a packing mistake: somebody printed the wrong size twenty times without stopping once. The printing itself is beautiful, which Lina says is what makes it so annoying, and that if they were badly printed she would feel better. It was four hundred and twenty thousand and it is everybody\'s money. She is not ringing them today, because she is so angry that anything she said today would be the wrong thing. Tomorrow she will ring with the order number, the date, and one sentence._'));
out.push(p('**Listener task:** write down what the "one sentence" should be.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lina writes that evening and does **not** send. Answer the questions.'));
out.push(model([
  '**DRAFT — not sent, 8.40 p.m.**',
  'To Al-Rayyan Printing.',
  'Twenty T-shirts arrived today and every single one is the wrong size. Not one. Twenty. They are so small that a four-year-old would find them tight, and I ordered large.',
  'I do not understand how so many identical mistakes can be made without one person stopping to look. There are so many points at which somebody could have noticed — printing, folding, packing, loading — and nobody did.',
  'This was four hundred and twenty thousand pounds of other people\'s money. It was such an easy order. One size. One design. Twenty times.',
  'I would like to know what you are going to do about it, and I would like to know today.',
  '**Written underneath, next morning:** I am glad I did not send this. Everything in it is true and all of it is about how I feel. There is not one sentence in it that tells them what I want, and if I send it they will answer the anger and not the T-shirts.',
]));
out.push(item('1', 'How many of the T-shirts are wrong?'));
out.push(item('2', 'What does Lina say about the message the next morning?'));
out.push(item('3', 'What is missing from the draft, according to her?'));
out.push(writers([
  'This is a model of what **not** to send — and the note underneath is the lesson: _everything in it is true and all of it is about how I feel_.',
  'An angry draft is worth writing. Write it, keep it, and do not send it — it gets the _so_ and _such_ sentences out of you so that the real message can be short.',
  'Test any complaint with one question: **does it say what I want?** If the answer is no, it is not a complaint, it is a feeling with a stamp on it.',
  '⚠ _so many_ and _such an easy order_ are doing real work here — they are accurate. The problem is not the language. The problem is that the reader will answer the tone instead of the order.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the angry draft you would not send about something that has gone wrong (35 words or more). Then write two lines underneath about it.'));
out.push(p('**DRAFT — not sent**   To ______________.   ______________ arrived today and ______________. They are so ______________ that ______________.   I do not understand how so many ______________. There are so many ______________ and nobody ______________.   This was ______________. It was such ______________.   **Written underneath, next morning:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A heading saying it is a draft, and who it was for',
  '_so_ + adjective · _so much_ / _so many_ · _such a_ + noun — all used correctly',
  'At least one _so … that_ sentence',
  'Two lines underneath saying what is wrong with it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full draft (60 words or more) about something that really went wrong for you, with everything you felt in it. Then, underneath, write what is missing from it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s draft as **the person it is addressed to**. ★ _The sentence I could not argue with._  ✓ _The sentence that would make me defensive._  ? _What do you actually want me to do?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Nobody reads a draft aloud. Read only the **two lines underneath**. **How many of you found the same thing missing?**'));
out.push(hw('Write the **short version** (40+ words): the same complaint in five sentences, with no adjectives at all, ending with what you want.'));

// ======================= 21.3 =======================
out.push(pb());
out.push(h2('21.3  They\'re too small for us'));
out.push(p('**Function:** saying what is wrong with something   ·   **Grammar:** _too_ + adjective; _too much_ / _too many_   ·   **Pronunciation:** weak _for_ /fə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher names six things in the room. For each one the class must say what is wrong with it using _too_: _this chair is too low · the board is too far away_.'));
out.push(board('They\'re too small for us.', 'too + adjective (+ for me)'));
out.push(p('**b**  _so_ or _too_? **1** They\'re ______ small — nobody can wear them.  **2** They\'re ______ small that I laughed.  **3** It\'s ______ expensive for me.  **4** She was ______ kind.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Khaled tell Lina to do?   **A** say how she feels   **B** say what is wrong, exactly   **C** accept the T-shirts'));
out.push(p('**b**  Listen again. **1** What is wrong with "they\'re so small"?   **2** What **three** facts does he tell her to put first?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.5  Too small for what?', [
  ['Lina', 'I\'ve written it four times.'],
  ['Mr Khaled', 'Read me the first sentence.'],
  ['Lina', '"The T-shirts are so small that nobody can wear them."'],
  ['Mr Khaled', 'And what will he say back?'],
  ['Lina', '"They are the size we printed."'],
  ['Mr Khaled', 'Exactly. "So small" is how you feel. Try "too small".'],
  ['Lina', 'Is there a difference?'],
  ['Mr Khaled', 'There is all the difference. "So small" is a complaint about the T-shirts. "**Too small for us**" is a statement about the **order** — too small for what was agreed. One of those he can argue with and one of them he cannot.'],
  ['Lina', 'So: "The shirts delivered are too small for the order."'],
  ['Mr Khaled', 'Better. Now three facts first, before any adjective. Order number. Date. What was ordered and what arrived.'],
  ['Lina', 'Order 1184, the third of April, twenty in large, twenty delivered in what looks like a child\'s size.'],
  ['Mr Khaled', 'Now you have a letter. The first version was a feeling and this one is a problem, and people answer problems.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _too_: more than is acceptable**',
  table(['the pattern', 'examples'], [
    ['**too** + adjective', '_It\'s **too small**._ · _It\'s **too expensive**._'],
    ['**too** + adjective + **for** somebody', '_It\'s **too small for me**._ · _**too expensive for us**_'],
    ['**too** + adjective + **to** + verb', '_It\'s **too small to wear**._ · _**too late to change** it_'],
    ['**too much** / **too many**', '_**too much** noise_ · _**too many** mistakes_'],
  ], [1.4, 1.6]),
  '⚠ **_so_ and _too_ are not the same.** _so_ = a lot (and it can be good): _She was **so** kind._ _too_ = more than is acceptable, and it is **never** good: ~~She was too kind.~~ means she was kinder than she should have been.',
  '⚠ ~~too much small~~ → _**too** small_. _too much_ is only for nouns you cannot count.',
  '**Why Mr Khaled is right:** _too small **for us**_ / _**for the order**_ names the standard it fails. _So small_ only says how you feel about it.',
  '**Practise:** _so_ or _too_?  1 It\'s ______ small for me — I can\'t wear it.  2 She was ______ helpful.  3 There were ______ many mistakes to count.  4 It was ______ kind of you.  5 It\'s ______ late to change the order.',
  '**Useful phrases:** Read me the first sentence. · And what will he say back? · There is all the difference. · Three facts first, before any adjective. · The first version was a feeling and this one is a problem.',
  '**Pronunciation.** 🔊 **Track 21.6** _for_ in _too small for me_ is weak — /fə/: _too small f\'me_. The stress is on **too** and on the adjective. Listen and repeat five phrases.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their first sentence from the card, which uses _so_; B asks _"and what will they say back?"_ and makes A rewrite it with _too_ + _for_ and three facts. Then swap cards.'));
out.push(dlg(null, [
  ['A', '"__________ are so __________ that __________."'],
  ['B', 'And what will they say back?'],
  ['A', '"__________."'],
  ['B', 'Exactly. Try "too".'],
  ['A', '"__________ are too __________ for __________."'],
  ['B', 'Better. Now three facts first.'],
  ['A', '__________, __________, and __________.'],
  ['B', 'Now you have a letter.'],
]));
out.push(table(['Card A – what went wrong', 'Card B – what went wrong'], [
  ['T-shirts: ordered 20 large, delivered child size, order 1184, 3 April', 'chairs: ordered 60, delivered with one short leg, order 77, 12 March'],
  ['a flat: the room is smaller than the photograph, seen 2 May', 'a course: 40 people in a room for 25, started 8 March'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the first version and the second. Which one could the company argue with?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a real complaint you have. Say it first the way you would say it to a friend, with _so_. Then your partner makes you say it again with _too_ + _for_ and three facts first.'));
out.push(p('**b**  Swap. Then each of you say which version you would actually have used, and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Khaled made Lina rewrite her first sentence. She had "the T-shirts are so small that nobody can wear them", and he asked what the printer would say back, which is "they are the size we printed". He says "so small" is how you feel and "too small for us" is a statement about the order — too small for what was agreed — and one of those can be argued with and the other cannot. Then he made her put three facts before any adjective: order 1184, the third of April, twenty ordered in large and twenty delivered in a child\'s size. He said the first version was a feeling and the second one is a problem, and people answer problems._'));
out.push(p('**Listener task:** write the sentence from today that a company could **not** argue with.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lina actually sends. Answer the questions.'));
out.push(model([
  '**To:** Al-Rayyan Printing   **Subject:** Order 1184 — wrong size delivered',
  'Dear Sir,',
  '**Order 1184**, placed on 3 April and paid in full — 420,000 SYP.',
  '**Ordered:** 20 T-shirts, size **large**, one design, as on the order form.',
  '**Delivered on 14 April:** 20 T-shirts, correctly printed, in a size that measures 42 cm across the chest. A large measures 54 cm. They are too small for every person they were ordered for.',
  'The printing is good and I want to say so. The problem is only the size, and it is the same on all twenty, so it is not a packing error.',
  'I would like them reprinted in large, from the same file. If that is not possible before 30 April, I would like the order refunded in full.',
  'Could you tell me by Thursday which of the two it will be?',
  'Yours faithfully,',
  'Lina Haddad · for class 4B, Al-Yasmin Centre · 0991 205 734',
]));
out.push(item('1', 'What two measurements does she give?'));
out.push(item('2', 'What does she say is good?'));
out.push(item('3', 'What are the two things she would accept?'));
out.push(writers([
  'A complaint that works: **the reference and the date** → **what was ordered** → **what arrived, with a measurement** → **what is good** → **the two things you would accept** → **a date for the answer**.',
  'Replace every adjective you can with a **number**. _Too small_ becomes unarguable when it is _42 cm against 54 cm_.',
  'Say what is **good**. It costs you nothing, it is true, and it tells the reader you are describing rather than attacking.',
  '⚠ Offer **two** acceptable outcomes and a **date**. A complaint with one demand invites a no; a complaint with no date gets filed.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a complaint about something that was wrong (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________ — ______________   Dear ______________,   **______________**, placed on ______________ and ______________.   **Ordered:** ______________.   **Delivered on ______________:** ______________. It is too ______________ for ______________.   ______________ is good and I want to say so. The problem is only ______________.   I would like ______________. If that is not possible before ______________, I would like ______________.   Could you tell me by ______________ which of the two it will be?   Yours faithfully, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A subject line with the reference number and the problem in six words',
  '_too_ + adjective + _for_ — not _so_ · _too much_ / _too many_ with nouns',
  'At least one measurement or number instead of an adjective',
  'Two acceptable outcomes, and a date for the answer',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real complaint (60 words or more) about something that has gone wrong for you. Reference, dates, numbers instead of adjectives, one thing that was good, two acceptable outcomes, and a date.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s complaint as **the company**. ★ _The line I cannot argue with._  ✓ _One adjective that should be a number._  ? _Which of your two outcomes would you prefer?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read two complaints aloud. **Which would get an answer this week?** Then: **who is going to send theirs?**'));
out.push(hw('Write the **reply you expect** (40+ words) — the one the company will actually send, not the one you want. It is a useful thing to have read before it arrives.'));

// ======================= 21.4 =======================
out.push(pb());
out.push(h2('21.4  It isn\'t big enough'));
out.push(p('**Function:** saying what is not sufficient   ·   **Grammar:** _not_ + adjective + _enough_; _enough_ + noun   ·   **Pronunciation:** stress on _enough_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the same complaint two ways: _It\'s too small._ = _It isn\'t big enough._ The class does five: _too expensive · too short · too slow · too dark · too late_.'));
out.push(board('It isn\'t big enough.', 'too + adj = not + opposite + enough'));
out.push(p('**b**  Put _enough_ in the right place. **1** It isn\'t ______ big ______.  **2** We haven\'t got ______ chairs ______.  **3** There isn\'t ______ time ______.  **4** He isn\'t ______ old ______.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the printer\'s answer?   **A** he will reprint them   **B** he offers money back on part of it   **C** he says the size is correct'));
out.push(p('**b**  Listen again. **1** Why does he say he cannot reprint before the 30th?   **2** What does Lina say is not enough, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.7  Not good enough', [
  ['Mr Rayyan', 'I have your letter. You are right, and I am sorry. The size on the machine was wrong.'],
  ['Lina', 'Thank you for saying so.'],
  ['Mr Rayyan', 'I cannot reprint before the thirtieth. I have not got enough plain shirts in large — I have eleven — and the next delivery is the fifth of May.'],
  ['Lina', 'Eleven is not enough. We need twenty.'],
  ['Mr Rayyan', 'I know. So what I can do is this: eleven now, nine on the sixth of May, or all twenty on the sixth.'],
  ['Lina', 'Our evening is on the twenty-eighth.'],
  ['Mr Rayyan', '…Then neither of those is any good to you.'],
  ['Lina', 'No. And I want to be fair to you: you answered in one day and you did not argue, which is more than I expected. But eleven shirts for a class of twenty is not good enough, and nine people standing in a photograph without one is worse than nobody having one.'],
  ['Mr Rayyan', 'Then it is the money back, and I would rather it was not.'],
  ['Lina', 'So would I. Is there anything else you can do?'],
  ['Mr Rayyan', '(pause) Give me until tomorrow. There is a man in Jaramana who may have twenty, and if he has, you will have them on Monday and I will pay the difference.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _enough_: as much as is needed**',
  table(['the pattern', 'examples'], [
    ['adjective + **enough**', '_It isn\'t **big enough**._ · _He isn\'t **old enough**._'],
    ['**enough** + noun', '_We haven\'t got **enough chairs**._ · _There isn\'t **enough time**._'],
    ['**enough** + **to** + verb', '_It isn\'t **big enough to wear**._ · _**old enough to drive**_'],
  ], [1.4, 1.6]),
  '⚠ **The position is the whole rule:** _enough_ goes **after** an adjective and **before** a noun. ~~enough big~~ ~~chairs enough~~.',
  '**_too_ and _not … enough_ say the same thing from opposite ends:**  _It\'s **too small**._ = _It **isn\'t big enough**._  _It\'s **too expensive**._ = _I **haven\'t got enough money**._',
  '**The useful phrase for a complaint:** _That isn\'t **good enough**._ It is strong, it is polite, and it names a standard without naming a person.',
  '**Practise:** Say it again with _enough_.  1 It\'s too small. 2 It\'s too expensive for me. 3 He\'s too young to drive. 4 There are too few chairs. 5 It\'s too dark to read.',
  '**Useful phrases:** You are right, and I am sorry. · Eleven is not enough. · I want to be fair to you. · That isn\'t good enough. · Is there anything else you can do?',
  '**Pronunciation.** 🔊 **Track 21.8** _enough_ is /ɪˈnʌf/ — the stress is on the **second** syllable and it ends in /f/, not /g/. _not good e**NOUGH**_. Listen and repeat six phrases.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the problem on the card; B is the supplier and offers something that is **not enough**. A must say so, fairly, and ask the last question: _is there anything else you can do?_ Then swap cards.'));
out.push(dlg(null, [
  ['B', 'You are right, and I am sorry. __________.'],
  ['A', 'Thank you for saying so.'],
  ['B', 'I cannot __________ before __________. I haven\'t got enough __________ — I have __________.'],
  ['A', '__________ is not enough. We need __________.'],
  ['B', 'So what I can do is __________.'],
  ['A', 'Our __________ is on __________. I want to be fair to you: __________. But __________ is not good enough.'],
  ['B', 'Then it is __________.'],
  ['A', 'Is there anything else you can do?'],
]));
out.push(table(['Card A – the problems', 'Card B – the problems'], [
  ['20 T-shirts needed by the 28th; he has 11', '60 chairs needed Friday; he can bring 35'],
  ['a room for 25 needed; they offer one for 15', '40 meals needed; they can do 24 and the rest cold'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write what was offered, why it was not enough, and what the last question produced.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a time somebody offered you something that was **not enough**. Tell your partner what was offered, why it was not enough, and what you said. Your partner asks whether you said the last question.'));
out.push(p('**b**  Swap. Then practise the whole exchange for something you may have to say soon, until you can say _"that isn\'t good enough"_ without your voice changing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The printer rang back and said Lina was right and that he was sorry, and that the size on the machine was wrong. But he has not got enough plain shirts in large — eleven — and the next delivery is the fifth of May, and the evening is on the twenty-eighth. Lina said eleven is not enough and that nine people standing in a photograph without a shirt is worse than nobody having one. She also said she wanted to be fair to him, because he answered in a day and did not argue. When she asked whether there was anything else he could do, he said give me until tomorrow: there is a man in Jaramana who may have twenty, and if he has, they will come on Monday and he will pay the difference._'));
out.push(p('**Listener task:** write what the last question produced today. It is worth noticing how often it produces something.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lina\'s reply to the printer. Answer the questions.'));
out.push(model([
  '**To:** Al-Rayyan Printing   **Subject:** Order 1184 — thank you, and where we are',
  'Dear Mr Rayyan,',
  'Thank you for ringing back the same day and for saying straight away that the size was wrong. I have complained about things four times in my life and this is the first time anybody has done either.',
  'Where we are:',
  'Eleven shirts is not enough. We are twenty, and the evening is on 28 April, which is why 6 May does not help us.',
  'I am not asking for anything beyond the order. If you can get twenty in large by Monday 25 April, we will take them and we will be glad. If you cannot, the money back is the right answer and neither of us will have done anything wrong.',
  'Could you let me know by Friday either way? If I know by Friday, I have long enough to do something else.',
  'And whichever it is, I will tell this class that you answered in a day and did not argue, because that is rarer than it should be.',
  'Yours sincerely,',
  'Lina Haddad',
]));
out.push(item('1', 'What two things does she thank him for?'));
out.push(item('2', 'Why does she need to know by Friday?'));
out.push(item('3', 'What will she tell the class either way?'));
out.push(writers([
  'A reply that keeps the other side working for you: **thank them for what they did right** → **why the offer is not enough, with the number** → **what you would accept** → **a deadline, with the reason for it** → **something you will say about them either way**.',
  'Give the **reason for your deadline**: _if I know by Friday, I have long enough to do something else_. A deadline with a reason is a request; one without is a threat.',
  'The last line is the most useful sentence in the unit: say what you will tell people **whichever way it goes**. It costs nothing and it changes what happens next.',
  '⚠ _not enough_ needs the **number**: _eleven is not enough; we are twenty_. Without it you are saying "I am not satisfied", which anybody can disagree with.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reply to somebody who has offered you something that is not enough (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   Thank you for ______________ and for ______________.   Where we are:   ______________ is not enough. We ______________, and ______________, which is why ______________ does not help us.   I am not asking for ______________. If you can ______________ by ______________, ______________. If you cannot, ______________.   Could you let me know by ______________? If I know by then, I have long enough to ______________.   And whichever it is, ______________.   Yours sincerely, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, the reference, and a name at the end',
  '_adjective + enough_ · _enough + noun_ — in the right order every time',
  'A number next to every _not enough_',
  'A deadline **with its reason**, and one line saying what you will say about them either way',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real reply (60 words or more) to an offer that was not enough — at work, in a shop, from an office, from a landlord. Thanks first, the number, two outcomes, a deadline with its reason, and the last line.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s reply as **the person who made the offer**. ★ _The line that makes me want to find a way._  ✓ _One _not enough_ with no number._  ? _What will you say about me if I cannot?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **last lines** aloud. **Which one would make you work harder for that customer?** This is the sentence most people never write.'));
out.push(hw('Write the **message to the twenty people** (40+ words) explaining where things are: what went wrong, what is being done, and what you need them to decide.'));

// ======================= 21.5 =======================
out.push(pb());
out.push(h2('21.5  I\'m afraid there seems to be a problem'));
out.push(p('**Function:** complaining politely   ·   **Grammar:** _I\'d like to make a complaint_; _I\'m afraid…_; _There seems to be…_   ·   **Pronunciation:** calm, polite intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  The same complaint, four ways, from rude to very polite: _This is wrong. · There\'s a mistake here. · I\'m afraid there\'s a mistake. · I\'m afraid there seems to be a mistake._ Which would you use in which shop?'));
out.push(board('I\'m afraid there seems to be a problem.', 'I\'m afraid… · There seems to be…'));
out.push(p('**b**  Soften these. **1** _You charged me twice._  **2** _This is broken._  **3** _You said Tuesday._  **4** _I want my money back._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with Maya\'s kettle?   **A** it does not switch off   **B** it leaks   **C** it is the wrong colour'));
out.push(p('**b**  Listen again. **1** What does the assistant say at first?   **2** What does Maya say that changes it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.9  I\'m afraid', [
  ['Maya', 'Good morning. I\'m afraid there seems to be a problem with this kettle. I bought it here three weeks ago.'],
  ['Assistant', 'Have you got the box?'],
  ['Maya', 'I\'m afraid I haven\'t. I have the receipt.'],
  ['Assistant', 'We usually need the box.'],
  ['Maya', 'I understand. May I show you what it does first? It boils, and then it doesn\'t switch off — it keeps boiling until you unplug it. It has done that from the first week.'],
  ['Assistant', '(pause) It should switch off.'],
  ['Maya', 'That is what I thought. I\'m not asking for anything today — I\'d just like to know what happens next, because I have been boiling water with one eye on it for three weeks and I don\'t want to do that for three more.'],
  ['Assistant', 'Leave it with me. What is the name?'],
  ['Maya', 'Maya Nasser. And can I say — I know the box matters and I know I should have kept it. I\'m not going to pretend that is your fault.'],
  ['Assistant', '(writing) Most people pretend it is my fault. Come back on Saturday and ask for me.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Complaining politely — the four phrases that do the work**',
  table(['you say', 'what it does'], [
    ['_**I\'m afraid** there\'s a problem…_', 'warns the listener before the bad news — the single most useful phrase'],
    ['_There **seems to be** a problem…_', 'says it without accusing anybody of anything'],
    ['_I\'d **like to make a complaint** about…_', 'formal, for an office or a letter'],
    ['_**I understand**, but…_ · _**May I** show you…?_', 'keeps the other person on your side'],
  ], [1.4, 1.6]),
  '⚠ _I\'m afraid_ has nothing to do with being frightened. It means _I am sorry to tell you_ and it goes at the **front**: _**I\'m afraid** I haven\'t got the box._',
  '⚠ ~~There seems a problem.~~ → _There **seems to be** a problem._',
  '**The three moves in the dialogue, and they are the lesson:** describe what it **does** (Unit 18) · say what you are **not** asking for · **admit your own part** (_I should have kept the box_).',
  '**Practise:** Make it polite.  1 You charged me twice. 2 This doesn\'t work. 3 You said it would be ready. 4 Nobody told me. 5 I want to speak to the manager.',
  '**Useful phrases:** I\'m afraid… · There seems to be… · I understand. · May I show you? · I\'m not asking for anything today. · I\'m not going to pretend that is your fault.',
  '**Pronunciation.** 🔊 **Track 21.10** A polite complaint is **slower and lower** than ordinary speech, and it falls at the end: _I\'m afraid there seems to be a problem._ ↘ Said fast and high it sounds like an accusation. Listen to both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A complains about the thing on the card; B says no the first time. A must use _I\'m afraid_, describe what it does, say what they are **not** asking for, and admit their own part. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Good morning. I\'m afraid there seems to be a problem with __________.'],
  ['B', 'Have you got __________?'],
  ['A', 'I\'m afraid I haven\'t. I have __________.'],
  ['B', 'We usually need __________.'],
  ['A', 'I understand. May I show you what it does? It __________, and then it __________.'],
  ['B', '(pause) It should __________.'],
  ['A', 'I\'m not asking for anything today. I\'d just like to know __________.'],
  ['A', 'And I know __________. I\'m not going to pretend that is your fault.'],
]));
out.push(table(['Card A – the problems', 'Card B – the problems'], [
  ['a kettle that does not switch off; no box, receipt only', 'a bill charged twice; you have one receipt and a message'],
  ['shoes that came apart in a week; worn outside', 'a course you paid for and cannot attend; you told them late'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the sentence that changed the assistant\'s mind. Was it the complaint or the admission?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a complaint you have never made because you did not want a row. Say it to your partner, politely, with all four moves. Your partner is unhelpful at first.'));
out.push(p('**b**  Swap. Then both of you decide: is there one of these you could actually make this month?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Maya took the kettle back without the box and the assistant said they usually need it. What changed it was not the complaint. She asked to show him what it does — it boils and then does not switch off until you unplug it — and he said, after a pause, that it should switch off. Then she said she was not asking for anything that day and only wanted to know what happens next. And at the end she said she knows the box matters and she should have kept it, and that she was not going to pretend that was his fault. He said most people pretend it is his fault, and told her to come back on Saturday and ask for him._'));
out.push(p('**Listener task:** write the sentence from today that you would not have thought of saying.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter of complaint. Answer the questions.'));
out.push(model([
  '**To:** The Manager, Al-Nahda Electrical   **Subject:** Kettle purchased 21 March — receipt 0773',
  'Dear Sir or Madam,',
  'I would like to make a complaint about a kettle I bought from your shop on 21 March. Receipt number 0773 is attached.',
  'I\'m afraid there seems to be a fault with the switch. The kettle boils normally and then does not switch itself off; it continues boiling until it is unplugged. It has done this since the first week and it does it every time.',
  'I should say two things. I have not kept the box, and I know that makes this harder for you. And your assistant on Saturday could not have been more helpful — he took the kettle, wrote everything down, and told me to come back and ask for him, which I did.',
  'I am not asking for anything beyond a working kettle. I would be glad to have this one repaired, or exchanged for the same model. If neither is possible, I would like a refund.',
  'Could you let me know within a week which it will be?',
  'Yours faithfully,',
  'Maya Nasser · 0933 427 815',
]));
out.push(item('1', 'What exactly does the kettle do?'));
out.push(item('2', 'What two things does she say she "should say"?'));
out.push(item('3', 'What three outcomes does she offer, in order?'));
out.push(writers([
  'A formal letter of complaint: **_I would like to make a complaint about…_** → **the fault, described by what it does** → **the two things you should say** → **the outcomes in order of preference** → **a deadline**.',
  'The two things to say are always the same two: **what weakens your case** (no box) and **who behaved well** (the assistant). Both make the letter harder to dismiss.',
  'Give the outcomes in **order**: repair, exchange, refund. It shows you are not trying to get something better than you paid for.',
  '⚠ Describe the fault by what it **does**, not what you think is broken. _It continues boiling until it is unplugged_ cannot be argued with; _the thermostat is broken_ can.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a formal letter of complaint about something you have bought (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear Sir or Madam,   I would like to make a complaint about ______________ I bought ______________ on ______________. ______________ is attached.   I\'m afraid there seems to be ______________. It ______________ and then it ______________. It has done this since ______________.   I should say two things. ______________. And ______________.   I am not asking for ______________. I would be glad to ______________, or ______________. If neither is possible, ______________.   Could you let me know within ______________?   Yours faithfully, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A subject line with what and when, and a receipt or reference number',
  '_I would like to make a complaint_ · _I\'m afraid_ · _There seems to be_ — all three used properly',
  'The fault described by what it **does**, not by what you think is wrong',
  'Three outcomes in order, and a deadline',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real letter (60 words or more) about something you have actually bought or paid for that was not right. All five parts, including the two things you should say.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the manager**. ★ _The line that made me want to help._  ✓ _One place where you accused me._  ? _Which outcome do you actually want?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **"I should say two things"** paragraphs aloud. **Which writer would you believe?** It is always the one who weakened their own case first.'));
out.push(hw('Write the **complaint you have never made** (40+ words) — the one you decided was not worth it. You do not have to send it.'));

// ======================= 21.6 =======================
out.push(pb());
out.push(h2('21.6  Could I exchange it?'));
out.push(p('**Function:** asking for a refund or an exchange   ·   **Grammar:** _Could I…?_ + first conditional   ·   **Pronunciation:** rising intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is the difference between a **refund**, an **exchange**, a **credit note** and a **repair**? The class puts them in order from best to worst for the customer, and then from best to worst for the shop.'));
out.push(board('Could I exchange it?', 'Could I…? + If…, I\'ll…'));
out.push(p('**b**  Finish with a conditional. **1** _Could I exchange it? If you haven\'t got the same one, I\'ll ______._  **2** _Could I have a refund? If you\'d rather, I\'ll ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Maya get in the end?   **A** a refund   **B** the same kettle   **C** a different kettle and some money back'));
out.push(p('**b**  Listen again. **1** What does she offer that makes it easy?   **2** What is the shop\'s rule about the box?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.11  Could I exchange it?', [
  ['Assistant', 'I\'ve spoken to the manager. The switch has gone and it is three weeks old, so you are covered.'],
  ['Maya', 'Thank you. Could I exchange it for the same one?'],
  ['Assistant', 'We haven\'t got the same one. We have two others — one is more expensive and one is cheaper.'],
  ['Maya', 'Could I take the cheaper one and have the difference back?'],
  ['Assistant', 'Normally we give a credit note, not money.'],
  ['Maya', 'I understand. If a credit note is easier for you, I\'ll take that — I come here anyway. But if you can give the difference, I\'d rather have it, because it is about four thousand and I would spend a credit note on something I don\'t need.'],
  ['Assistant', '(laughs) That is the most honest thing anybody has said to me this week. I\'ll give you the money.'],
  ['Maya', 'And about the box — what is the actual rule?'],
  ['Assistant', 'Fourteen days with the box for anything. After that, only if it is faulty, and then the box does not matter. Nobody tells anybody that and I have stopped knowing why.'],
  ['Maya', 'Could I write that down and put it on our building\'s board?'],
  ['Assistant', 'Please do.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for a refund or an exchange**',
  table(['you say', 'you are asking for'], [
    ['_**Could I exchange** it?_', 'another one of the same thing'],
    ['_**Could I have** a refund?_ · _**Could I have** my money back?_', 'the money'],
    ['_**Could I take** the cheaper one **and have the difference**?_', 'part of the money'],
    ['_**Would you** repair it?_', 'a repair, which the shop usually prefers'],
  ], [1.5, 1.5]),
  '**Make it easy — add a conditional:** _**If** a credit note **is** easier for you, **I\'ll take** that._ · _**If** you haven\'t got the same one, **I\'ll have** a refund._  You offer a way out, and most people take the other one.',
  '⚠ _Could I…?_ + **bare verb**: ~~Could I to exchange it?~~  ⚠ ~~Can I have back my money?~~ → _Could I have **my money back**?_',
  '**Words worth knowing:** _a refund · an exchange · a credit note · a repair · faulty · within 14 days · proof of purchase · the receipt_',
  '**Practise:** Ask, and add a conditional.  1 exchange it 2 money back 3 the cheaper one and the difference 4 a repair instead 5 to speak to the manager',
  '**Useful phrases:** Could I…? · Normally we give… · If … is easier for you, I\'ll… · I\'d rather have it, because… · What is the actual rule?',
  '**Pronunciation.** 🔊 **Track 21.12** _Could I…?_ **rises**: _Could I exchange it?_ ↗ A falling version is a demand. And the conditional half falls: _If it\'s easier, I\'ll take that._ ↘ Listen and repeat the pair.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A wants to return the thing on the card; B offers the shop\'s normal answer, which is not what A wants. A must ask twice more, each time with a conditional that gives B a way out. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Could I __________?'],
  ['B', 'We haven\'t got __________. We have __________.'],
  ['A', 'Could I __________ and __________?'],
  ['B', 'Normally we give __________.'],
  ['A', 'I understand. If __________ is easier for you, I\'ll __________. But if you can __________, I\'d rather, because __________.'],
  ['B', '__________.'],
  ['A', 'And what is the actual rule about __________?'],
]));
out.push(table(['Card A – you want…', 'Card B – you want…'], [
  ['a kettle exchanged; they have a cheaper one and a dearer one', 'a coat refunded; they offer a credit note'],
  ['20 T-shirts reprinted; he can do 11 now', 'a course fee back; they offer a place next term'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **conditional** that made it work. What was the way out it offered?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Something you have at home that you should have taken back and did not. Tell your partner what it is, why you did not, and what you would say if you went tomorrow. Your partner plays the shop and refuses once.'));
out.push(p('**b**  Swap. Then both of you find out the **actual rule** for one shop you use — and agree to ask next time you are in it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Maya was told she was covered, so she asked to exchange the kettle for the same one, and they have not got it. She asked whether she could take the cheaper one and have the difference, and they said they normally give a credit note. What worked was the conditional: if a credit note is easier for you I will take it, because I come here anyway — but if you can give the difference I would rather, because it is four thousand and I would spend a credit note on something I don\'t need. The assistant said that was the most honest thing anybody has said to him this week and gave her the money. And then she asked the actual rule, which is fourteen days with the box for anything, and after that only if it is faulty — and then the box does not matter at all, which nobody tells anybody._'));
out.push(p('**Listener task:** write the rule somebody found out today that you did not know.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card Maya puts on her building\'s board. Answer the questions.'));
out.push(model([
  '**WHAT THE SHOPS ACTUALLY ALLOW** — asked, not guessed. Maya, flat 4.',
  'I have been told all my life that you cannot take anything back without the box. Last week I asked four shops what the rule really is, and three of them told me immediately and one did not know.',
  '**Al-Nahda Electrical.** Fourteen days with the box for anything, including if you have simply changed your mind. After fourteen days, only if it is **faulty** — and then the box does not matter at all. The assistant said nobody tells anybody this.',
  '**The clothes shop in Al-Hamra.** Seven days, with the receipt, unworn. No exchange on anything reduced, which is written very small.',
  '**The pharmacy.** Nothing can be returned, and that is the law and not meanness. The pharmacist said she is asked about ten times a week and nobody believes her.',
  '**The shoe shop by the bridge.** Did not know. The young man asked somebody by telephone and the answer was "it depends who is here", which I am writing down because it is true of more places than anybody admits.',
  '**Two things I have learned.** Ask before you buy, not after. And the word that changes everything is **faulty** — if a thing is faulty, almost every rule about boxes and days stops applying.',
]));
out.push(item('1', 'How many shops did she ask, and how many knew?'));
out.push(item('2', 'What is the rule at Al-Nahda after fourteen days?'));
out.push(item('3', 'What word does she say changes everything?'));
out.push(writers([
  'A page of rules you have asked for: **what you were always told** → **what you did** → **one place per paragraph with the real rule** → **the one that did not know** → **what you have learned**.',
  'Record the **one that did not know** honestly. _"It depends who is here"_ is the most useful line on the page precisely because it is not a rule.',
  'Quote the person: _the assistant said nobody tells anybody this_ · _nobody believes her_. It turns a list of rules into something people read.',
  '⚠ End with the **word or the habit**, not a summary. _Ask before you buy_ and _faulty_ are the two things a reader will still have next month.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Ask three places near you what their real rule is, and write it up (35 words or more).'));
out.push(p('**WHAT ______________ ACTUALLY ______________** — asked, not guessed. ______________.   I have been told all my life that ______________. Last week I asked ______________ and ______________ told me immediately and ______________ did not know.   **______________.** ______________. ______________ said ______________.   **______________.** ______________.   **______________.** Did not know. ______________.   **Two things I have learned.** ______________. And the word that changes everything is **______________**.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title saying these were asked, not guessed, and your name',
  '_Could I…?_ and conditionals used correctly where they appear',
  'One place per paragraph, with the **exact** rule and any small print',
  'The one that did not know, written down honestly',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) of real rules you have asked for — shops, offices, a clinic, a school, a landlord, a bank. Four places, one that did not know, and the two things you have learned.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has never asked anybody anything**. ★ _The rule I did not know._  ✓ _One rule that sounds like a guess._  ? _Did they mind being asked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the pages together as one class sheet and **put it up somewhere real** — the entrance hall, a building board, a family group. This is the only page in Book 2 that is worth money to the people who read it.'));
out.push(hw('Ask **one** place you use what their real rule is, and write down the answer in their words (40+ words), including anything they could not answer.'));

// ======================= 21.7 =======================
out.push(pb());
out.push(h2('21.7  Review & Mediate: What does the returns policy say?'));
out.push(p('**Function:** explaining a returns policy to a friend   ·   **Recycling:** Units 1–21   ·   **Exam practice:** A2 Key Reading Part 3, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 21 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It was so a good evening.  **2** They are such small.  **3** There were so much people.  **4** It isn\'t enough big.  **5** She was too kind to me. _(what does this say?)_  **6** There seems a problem.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the returns policy printed on the back of Al-Nahda\'s receipt.'));
out.push(box(null, [
  '**AL-NAHDA ELECTRICAL · RETURNS**',
  '**1.** Goods may be returned within **14 days** with the receipt **and the original box**, for an exchange or a credit note. We do not give cash in this case.',
  '**2.** **Faulty goods** may be returned within **12 months**. The box is **not** required. Proof of purchase is required.',
  '**3.** A fault reported in the **first 30 days** is replaced or refunded, at the customer\'s choice. After 30 days we will repair first.',
  '**4.** Reduced items: exchange only, **7 days**, with the box.',
  '**5.** We do not accept goods that have been opened and used unless they are faulty.',
  '**6.** Refunds are made by the same method as the payment, within **5 working days**.',
  '**⚠ This policy does not affect your rights if the goods are faulty.**',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Maya explains the policy to her neighbour. Which rule applies to the neighbour, and what does Maya say is the word that decides everything?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.13  It depends on one word', [
  ['Neighbour', 'It\'s a month old and they will say I am too late.'],
  ['Maya', 'They may, and they would be wrong, and there is one word that decides it. Is it **faulty**, or have you changed your mind?'],
  ['Neighbour', 'It doesn\'t heat properly. It is supposed to be a heater.'],
  ['Maya', 'Then it is faulty, and almost nothing you are worried about applies to you. Look — rule one is the fourteen days and the box, and that is for people who changed their mind. You are not that person.'],
  ['Neighbour', 'But I have not got the box.'],
  ['Maya', 'Rule two: faulty goods, twelve months, and the box is **not** required. You need proof that you bought it, which is the receipt.'],
  ['Neighbour', 'A month old.'],
  ['Maya', 'And here is the part that matters: rule three. A fault in the first thirty days is replaced **or** refunded, and **you** choose which. After thirty days they repair first. So the only real question is whether it is thirty days or thirty-two.'],
  ['Neighbour', 'The twenty-sixth of last month.'],
  ['Maya', 'Then go tomorrow, not Saturday. And do not say "I\'m not happy with it". Say "it is faulty — it does not heat", and say the date.'],
  ['Neighbour', 'And if they say no?'],
  ['Maya', 'Then point at the last line, which says the policy does not affect your rights if the goods are faulty. That line is on there because they have to put it on there.'],
]));
out.push(sp());
out.push(box('Language box – explaining a returns policy', [
  'Find the **one word the whole thing turns on** and ask about it first: _is it **faulty**, or have you changed your mind?_ Every returns policy has two completely different halves and people read the wrong one.',
  'Rule out what does **not** apply to the listener, by number: _rule one is for people who changed their mind — you are not that person._',
  'Give the **deadline as a date**, not a number of days, and work it out for them: _the twenty-sixth — then go tomorrow, not Saturday._',
  'Point out where the customer **chooses**: _replaced **or** refunded, and **you** choose which_. People accept whatever is offered because they do not know there is a choice.',
  'Translate the small print at the bottom: _that line is on there because they have to put it on there._',
  'End with the **exact words to use**: _don\'t say "I\'m not happy with it" — say "it is faulty, it does not heat", and say the date._',
  '**Useful phrases:** There is one word that decides it. · You are not that person. · the box is not required · and you choose which · go tomorrow, not Saturday · Say it like this.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the policies below and does **not** show it. A explains it to B and C, who each describe a different problem and must be told which rule applies, by number, and exactly what to say. Change roles.'));
out.push(table(['Policy A – a clothes shop', 'Policy B – a phone shop'], [
  ['1. 7 days, with the receipt, unworn — exchange or credit note.', '1. 14 days, unopened, for a full refund.'],
  ['2. Faulty goods: 6 months, receipt required, box not required.', '2. Opened but not used: 14 days, 15% charge.'],
  ['3. Reduced items: exchange only, 3 days.', '3. Faulty: 12 months, repair first after 30 days.'],
  ['4. No returns on underwear or earrings.', '4. Water damage is never covered.'],
  ['5. Refunds by the original payment method only.', '5. Your data is your responsibility. We do not keep copies.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the **rule number** that applied, the **deadline**, and the **exact words** they were told to say.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find a **real** returns policy, guarantee or set of conditions — on a receipt, a card, a website, the back of a ticket. Explain it to your partner for a problem they invent. They must ask: _which rule is mine?_, _what is my deadline?_, _do I get a choice?_ and _what exactly should I say?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Omar explained the policy on the back of a phone shop receipt. He started with the question that decides everything, which is whether the thing is faulty or whether you have changed your mind, because the two halves of the policy have nothing to do with each other. My problem was a charger that stopped working after five weeks, so I am rule three, not rule one — twelve months, and they repair first after thirty days, and five weeks is after thirty days. He also showed me rule five, which says my data is my responsibility, and that one is not about the charger but it is the one I should have read a year ago. So I decided I would take it in tomorrow and say "it is faulty — it stopped charging on the ninth" and nothing else, because he says the moment you say you are not happy with something, you have moved yourself into the wrong half of the page._'));
out.push(p('**Listener task:** did they ask the one deciding question first? Which rule turned out to be yours?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 3)', 7));
out.push(p('Read the text and choose **A**, **B** or **C** for each question.'));
out.push(model([
  '**TWENTY T-SHIRTS**  · by Lina Haddad',
  'We ordered twenty T-shirts for the end of the course. I collected the money from everybody — four hundred and twenty thousand — and I found a printer, and on the fourteenth of April twenty T-shirts arrived in a size that would be tight on a four-year-old.',
  'My first letter was four paragraphs long and I did not send it. My manager read the first sentence — "they are so small that nobody can wear them" — and asked what the printer would say back. The answer is "they are the size we printed". He told me that "so small" is how I feel and "too small for the order" is a fact, and that people answer facts.',
  'So the second letter had the order number, the date, what was ordered, and a measurement: 42 centimetres across the chest, where a large is 54. It also said that the printing was good, which was true and which I nearly left out.',
  'He rang back the same day, said the size on the machine was set wrongly, and said he was sorry. Then he said he has eleven plain shirts in large and the next delivery was the fifth of May, and our evening is the twenty-eighth of April.',
  'Eleven is not enough. I said so, and I also said I wanted to be fair to him, because he answered in a day and did not argue, which is rarer than it should be. Then I asked whether there was anything else he could do.',
  'There was. He found twenty in Jaramana, paid the difference himself, and they came on the Monday. I have thought about that last question a great deal since. It cost nothing to ask and I nearly did not.',
]));
[
  '**1**  How much money had Lina collected?     **A** 42,000   **B** 420,000   **C** 54,000',
  '**2**  Why did she not send the first letter?     **A** it was too long   **B** it said how she felt, not what was wrong   **C** it was rude',
  '**3**  What did she nearly leave out of the second letter?     **A** the measurement   **B** the date   **C** that the printing was good',
  '**4**  What did the printer say was wrong?     **A** the design   **B** the machine setting   **C** the delivery',
  '**5**  Why was eleven shirts not enough?     **A** they are twenty   **B** they cost too much   **C** they were the wrong colour',
  '**6**  What does Lina say she has thought about since?     **A** the measurement   **B** the money   **C** the last question she asked',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend who wants to take something back (35 words or more). Use the returns policy above.'));
out.push(p('Hi ______!   One question first: is it ______________, or have you ______________? It makes all the difference.   If it\'s ______________, you\'ve got ______________ and you **don\'t** need ______________. You need ______________.   And because it\'s less than ______________ old, they have to ______________ — and **you** choose which. After ______________ they ______________ first.   So go ______________. Don\'t say "______________". Say "______________" and say ______________.   If they say no, point at ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, and two short paragraphs',
  '_so_ / _such_ / _too_ / _enough_ — each one in its own place',
  'At least two linkers (_and · but · because · so_)',
  'All three content points: which rule applies · what the deadline is · the exact words to say',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** has bought something in your city and it does not work.',
  'Write an email to Sam.  In your email:  •  ask **what exactly is wrong with it**  •  tell him **what he should take with him**  •  say **what he should ask for**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 21 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  It was ___ good evening.   a) so a   b) such a   c) such',
  '2  They were ___ kind people.   a) such   b) such a   c) so',
  '3  There was ___ noise that I couldn\'t think.   a) so many   b) so much   c) such many',
  '4  They\'re ___ small for me.   a) so   b) too   c) too much',
  '5  It isn\'t ___.   a) enough big   b) big enough   c) enough bigger',
  '6  We haven\'t got ___.   a) chairs enough   b) enough chairs   c) enough of chairs',
  '7  ___ there seems to be a problem.   a) I\'m afraid   b) I\'m afraid of   c) I fear',
  '8  ___ exchange it?   a) Could I   b) Could I to   c) I could',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 21.14** Ms Huda says what each person did about something that was wrong. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they did'], [
  ['1  Lina ___', 'A  asked the shop what their real rule is and wrote it down'],
  ['2  Maya ___', 'B  wrote an angry letter and did not send it'],
  ['3  Mr Rayyan ___', 'C  admitted their own part before asking for anything'],
  ['4  Mr Khaled ___', 'D  found another supplier and paid the difference'],
  ['5  Omar ___', 'E  made somebody replace a feeling with a measurement'],
  ['', 'F  asked to speak to the manager'],
  ['', 'G  decided it was not worth complaining about'],
], [1, 2]));
out.push(dlg('Track 21.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish — this fortnight has been about things going wrong, so let us say what each of you did. Lina wrote four paragraphs on the evening the T-shirts came and sent none of them, and she says that was the most useful thing she did, because everything in it was true and all of it was about how she felt. Maya took a kettle back without its box, and what changed the assistant\'s mind was not the complaint; it was that she said she knew she should have kept the box and was not going to pretend it was his fault. Mr Rayyan, the printer, could not reprint in time, and rather than leave it at a refund he found twenty shirts in Jaramana and paid the difference out of his own pocket. Mr Khaled read Lina\'s first sentence and made her turn "they are so small" into forty-two centimetres against fifty-four. And Omar has been round four shops asking what their returns rules actually are, and has put the answers on his building\'s board.'],
]));
out.push(p('**C  Writing.** Write a complaint about something that was wrong (40+ words): the reference and the date, what you ordered and what arrived, one measurement or number instead of an adjective, one thing that was good, and two outcomes you would accept.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 21)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _such a_ with a singular noun and _such_ with plural and uncountable',
  '☐ use _so_ with an adjective, and _so much_ / _so many_ with nouns',
  '☐ tell _so_ from _too_, and know that _too_ is never good',
  '☐ use _enough_ after an adjective and before a noun',
  '☐ complain politely with _I\'m afraid_ and _There seems to be_',
  '☐ ask for a refund or an exchange, and offer a way out with a conditional',
  '☐ replace an adjective with a number in a complaint',
  '☐ explain a returns policy to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 22 – MESSAGES AND REQUESTS', [
  'Unit 21 was about saying what is wrong. Unit 22 is about passing things on: _she asked me to tell you…_, _he said he would ring…_',
  'Before the next lesson: write down **three** messages somebody has asked you to pass on to somebody else — at work, at home, in this class. Bring them exactly as you were given them.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 21 · Student\'s Book');
