// Proactive English B1 · Syria Edition · Book 2 · Unit 15 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review.** No stems. Write your partner **three sentences in English**: what worked, the one place you would change, and the question you are left with.';

out.push(h1('Unit 15  Regret and Alternative Pasts'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**15.1**  say what you should have done',
  '**15.2**  say what would have happened',
  '**15.3**  say how a past choice still affects now',
  '**15.4**  apologise properly for something you did',
  '**15.5**  say what you wish',
  '**15.6**  write an account that admits a mistake',
  '**15.7**  Review & Mediate: explain what went wrong and what you would do differently',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The hardest grammar in the level, and the easiest to use badly.** _I should have asked · if I had known, I would have written · I wish I had counted._ Three forms, all of them about a past that did not happen, and all of them capable of turning a page into a list of excuses.',
  '**The rule that keeps them honest.** A third conditional is a **claim about what would have happened**, and you can only make it where you know. _If somebody had counted, she would have known_ is a claim with a record behind it. _If they had listened to me, none of this would have happened_ is a claim about nothing at all.',
  '**And the two hardest pages in Book 2 are in here.** **15.4**, the apology that names the thing — which is not the same as the apology that explains it — and **15.6**, an account of something that went wrong written by the person it went wrong for. In both of them the third conditional belongs in the paragraph about **what you now know**, and nowhere near the paragraph about what happened.',
  '**The first test dates from the prediction board fall this month.** Three of them are read out in 15.1, and one of the three is wrong in a way nobody expected, which is where the unit starts.',
], C.lyellow, C.orange));

// ======================= 15.1 =======================
out.push(pb());
out.push(h2('15.1  I should have asked in April'));
out.push(p('**Function:** saying what you should have done   ·   **Grammar:** _should have done · shouldn\'t have done_   ·   **Pronunciation:** _should\'ve_ and the swallowed _have_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the one thing you brought — something you would do differently, with the date it happened. One event, one day. Your teacher writes the eleven dates on the board and nothing else, and the class looks at them: most of them are inside the last six months.'));
out.push(board('I should have asked for the delivery notes in April.', 'should have + past participle'));
out.push(p('**b**  Which is it? **1** _I should ask him._  **2** _I should have asked him._  **3** _I shouldn\'t have signed it._  **4** _I shouldn\'t sign it._  **5** _He should have been told._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened to Mazen\'s prediction, and what does he say he should have done?   **A** it was right   **B** it cannot be tested   **C** it was wrong in a way he had not predicted'));
out.push(p('**b**  Listen again. **1** What did he find at the two shops?   **2** What does Ms Huda say about the difference between _should have_ and _if I had_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.1  Eleven out of fifteen', [
  ['Ms Huda', 'Three test dates have fallen. Mazen, the thirtieth of September.'],
  ['Mazen', 'I predicted at least twelve of the fifteen from one batch. I went to both shops on the Friday and I cannot tell you whether I was right.'],
  ['Jad', 'Why not?'],
  ['Mazen', 'Because only eleven of the fifteen can be traced at all. The shop in Mezzeh keeps delivery notes in a box by date and the man let me photograph eight of them. The shop in Shaalan files nothing; the owner told me he throws the notes away when the stock is sold, and four of my fifteen came from him.'],
  ['Nour', 'And of the eleven?'],
  ['Mazen', 'Nine are from one batch and two are from the batch before it. Which is nine out of eleven, and I predicted twelve out of fifteen, and the honest answer is that my prediction cannot be tested and I did not see that coming.'],
  ['Ms Huda', 'So what should you have done?'],
  ['Mazen', 'I should have asked for the notes in April, when I first wrote to them. Not now — in April. The Shaalan shop sold that model until August and the notes for the March units would still have been in the box.'],
  ['Rasha', 'You did not know in April that you would need them.'],
  ['Mazen', 'I knew in April that I had fifteen of one model and I knew the shops had notes. What I did not know is that one of them throws them away, and I could have found that out in a four-minute conversation that I have now had six months late.'],
  ['Ms Huda', 'Say the sentence again in the two forms, because they are not the same sentence. First _should have_.'],
  ['Mazen', 'I should have asked for the notes in April.'],
  ['Ms Huda', 'And now _if I had_.'],
  ['Mazen', 'If I had asked in April, I would have had fourteen of the fifteen.'],
  ['Ms Huda', 'Notice what has happened. The first one is about **you** and it costs you something to say. The second one is a claim about **what would have happened**, and it is a claim you can defend, because the notes were in a box until August. Students use the second one when they mean the first, because the second one sounds like an argument and the first one sounds like an admission.'],
  ['Omar', 'And it is usually an argument about somebody else.'],
  ['Ms Huda', 'It usually is. _If they had answered my letter, none of this would have happened_ — which may be true and is not the sentence that will change what you do in April next year.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _should have_ and _shouldn\'t have_**',
  table(['you say', 'what it means'], [
    ['_I **should have asked** in April._', 'I did not, and I now think I ought to have'],
    ['_I **shouldn\'t have signed** it._', 'I did, and I now think I ought not to have'],
    ['_He **should have been told**._', 'passive — nobody tells us who failed to tell him'],
    ['_I **should ask** him._', 'present: I have not yet, and I still can'],
    ['_**Should** I have asked?_', 'a real question, and worth asking of somebody else'],
  ], [2.3, 2.3]),
  '**_Should have_ + past participle, always.** ⚠ ~~I should asked~~ · ~~I should have ask~~ · ~~I should of asked~~ — the last is what the contraction sounds like and it is never written.',
  '**It is about you, and it costs something.** That is the point of the form. A page of _should have_ sentences about your own decisions is an admission; the same page with _if they had_ in it is an argument, and the two do completely different work.',
  '**Be exact about the date.** _I should have asked in April_, not _I should have asked earlier_. The date is what makes the sentence usable: it tells you when the window was open, and whether there is a window open now.',
  '⚠ **The passive hides the person:** _he should have been told_. Sometimes that is right and kind; often it is a way of not writing _I should have told him_. Choose on purpose.',
  '⚠ Do not stack it: ~~I should have had to ask~~. And do not use it for things that were impossible — _I should have known_ is only honest if you could have.',
  '**Useful phrases:** I cannot tell you whether I was right · the honest answer is that my prediction cannot be tested · a four-minute conversation that I have now had six months late · the first one is about you and it costs you something to say.',
  '**Practise:** Say each one as _should have_ about yourself, and then as _if I had_ with a defensible consequence.  1 the delivery notes  2 a question you did not ask  3 a form you signed  4 a record you did not start  5 a person you did not tell',
  '**Pronunciation.** 🔊 **Track 15.2** _Should have_ is /ʃʊdəv/ — one piece, with the _have_ almost gone — and _shouldn\'t have_ is /ˈʃʊdəntəv/. The weight falls on the **main verb**: _I should\'ve ASKED in April._ Listen to eight and write _should_ or _shouldn\'t_; four of each, and the difference is one consonant.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B says what they should have done, **with a date**, and then says it again as _if I had_, with a consequence they can defend. A asks the test question: _how do you know that is what would have happened?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I should have __________ in __________.'],
  ['B', 'If I had __________ in __________, I would have __________.'],
  ['A', 'How do you know that is what would have happened?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the situations', 'Card B – the situations'], [
  ['A record you started later than you could have.', 'A question you did not ask for months.'],
  ['A form you signed without reading a page.', 'A person you did not tell something.'],
  ['A date you promised that you could not keep.', 'A number you estimated when you could have counted.'],
  ['An answer you accepted without a name on it.', 'A thing you were told and did not write down.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight _if I had_ consequences and mark each one **defensible** or **invented**. A defensible one has a fact behind it — _the notes were in a box until August_. An invented one is about what another person would have done, and in a first run half of them are.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the one thing you brought with its date. Say what you should have done, then the _if I had_ version, and then the test: how do you know? If you cannot answer the test, say so out loud — that is the correct answer and it is harder than the sentence.'));
out.push(p('**b**  Swap. Then each of you say whether the other\'s regret is about something **you** did or about something somebody else did.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Three test dates have fallen, and Mazen\'s was the thirtieth of September. He had predicted at least twelve of the fifteen from one batch, and after going to both shops on the Friday he cannot say whether he was right: only eleven of the fifteen can be traced at all. The shop in Mezzeh keeps delivery notes in a box by date and let him photograph eight of them; the shop in Shaalan files nothing and the owner throws the notes away when the stock is sold, and four of the fifteen came from him. Of the eleven, nine are from one batch and two from the batch before, which is nine out of eleven against a prediction of twelve out of fifteen — so the honest answer is that the prediction cannot be tested, and he did not see that coming. Ms Huda asked what he should have done, and he said he should have asked for the notes in April, when he first wrote: the Shaalan shop sold that model until August and the March notes would still have been in the box. Rasha said he did not know in April that he would need them, and he said he knew he had fifteen of one model and he knew the shops had notes — what he did not know is that one of them throws them away, and he could have found that out in a four-minute conversation he has now had six months late. Then Ms Huda made him say it twice: "I should have asked for the notes in April", and "if I had asked in April, I would have had fourteen of the fifteen". The first is about him and costs him something; the second is a claim about what would have happened, and it is defensible because the notes were in a box until August. Students use the second when they mean the first, because the second sounds like an argument. Omar said it is usually an argument about somebody else — and Ms Huda agreed: "if they had answered my letter none of this would have happened" may be true and is not the sentence that changes what you do next April._'));
out.push(p('**Listener task:** write one _should have_ from this room with its date, and say whether the date was inside the last six months.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Mazen writes on the back of the fault book. Answer the questions.'));
out.push(model([
  '**WHAT I SHOULD HAVE DONE IN APRIL** · written inside the cover of the fault book · M. Hariri · October',
  'This is for the next person who keeps this book, and for me in April next year.',
  '**What I did.** In April I had fifteen units of one model with the same fault and I wrote to the supplier asking for a name. I asked twice, got nothing, and in September I asked for the adhesive specification instead, which was answered in four days.',
  '**What I should have done, and the date.** I should have gone to the two shops in April and asked for the delivery notes. Not written to anybody — walked two hundred metres and asked.',
  '**What it would have cost me.** Twenty minutes and two conversations I did not want to have, because both shops sell me the stock I repair and I did not want to look as though I were investigating them.',
  '**What it would have got me.** Fourteen of the fifteen traced, instead of eleven. The Shaalan shop had the notes for the March units until August and then threw them away, and four of my fifteen are now untraceable for ever.',
  '**What I should not have done.** I should not have spent five months writing letters about a name. A name is a thing somebody has to decide to give you; a delivery note is a piece of paper in a box.',
  '**And the thing I could not have known.** That one of the two shops files nothing at all. I could have found that out in April by asking, and I did not ask, and that is a different sentence from not knowing.',
  '**For April next year.** When something comes back three times, go to the shop that week. The paper that will prove it is thrown away on somebody else\'s schedule and not on mine.',
]));
out.push(item('1', 'What does he say he should have done, and what would it have cost him?'));
out.push(item('2', 'What does he distinguish between at the end — not knowing, and what?'));
out.push(item('3', 'Who is the page written for?'));
out.push(writers([
  'A page about a mistake: **what you did** → **what you should have done, with the date** → **what it would have cost you** → **what it would have got you** → **what you should _not_ have done** → **and what you genuinely could not have known**.',
  'Write the **cost** of the right action. _Twenty minutes and two conversations I did not want to have_ is the real reason it was not done, and a page that pretends the right thing was free teaches nobody anything, least of all the writer.',
  'Separate _I did not know_ from _I did not ask_. The whole value of the page is in that distinction: the first is innocent and the second is a decision, and most of what we call not knowing is the second.',
  '⚠ Address it to somebody — _for the next person who keeps this book, and for me in April next year_. A regret written to nobody is read once; a regret written inside the cover of the book is read by the person who needs it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about one thing you should have done (60 words or more).'));
out.push(p('**WHAT I SHOULD HAVE DONE IN ______________** · written for ______________   **What I did.** ______________. I ______________, got ______________, and ______________.   **What I should have done, and the date.** I should have ______________ in ______________. Not ______________ — ______________.   **What it would have cost me.** ______________, because ______________.   **What it would have got me.** ______________ instead of ______________.   **What I should not have done.** I should not have ______________. ______________ is a thing ______________; ______________ is ______________.   **And the thing I could not have known.** ______________. I could have found that out by ______________, and I did not ask, and that is a different sentence from not knowing.   **For next ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_should have_ + past participle, with a date on it',
  'The cost of the right action, honestly stated',
  '_I did not know_ kept separate from _I did not ask_',
  'A reader named, and an instruction for next time',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what it would have cost me" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) about one thing you should have done, with the date, and leave it where the next person will find it — inside a book, on a file, in a drawer. Then write underneath who you have decided to show it to.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the next person who will do that job**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the regrets in this room are about something the writer did, and how many about something somebody else did?** Count both. Then the question that matters: of the ones about somebody else, how many had a four-minute conversation in them that nobody had?'));
out.push(hw('Write the page for one thing you should have done at work (60+ words), with the date and the cost, and put it where the next person will find it. Write down where you put it.'));

// ======================= 15.2 =======================
out.push(pb());
out.push(h2('15.2  If somebody had counted'));
out.push(p('**Function:** saying what would have happened   ·   **Grammar:** the third conditional   ·   **Pronunciation:** _if I\'d_ and _I\'d have_, both reduced'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six third conditionals collected from this class since Unit 8. For each one the class asks the only question that matters: _how do you know that is what would have happened?_ Two of the six can be answered. Four cannot.'));
out.push(board('If somebody had counted, she would have known in 2012.', 'if + had + -ed, would have + -ed'));
out.push(p('**b**  Defensible or invented? **1** _If I had asked in April, the notes would have been in the box._  **2** _If they had listened to me, none of this would have happened._  **3** _If somebody had counted, she would have seen the pattern._  **4** _If I had been there, it would not have happened._  **5** _If the sheet had been collected from the bus, the check would have been done._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Whose fourteen years are being talked about, and what does Rasha refuse to say?'));
out.push(p('**b**  Listen again. **1** What is the one third conditional Rasha says she is prepared to defend?   **2** What does Ms Huda say about the third conditional and blame?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.3  Fourteen years', [
  ['Ms Huda', 'Rasha, you have the figures for both sheets now. Say what you can say about the fourteen years.'],
  ['Rasha', 'Carefully, because this is the sentence I have been refusing to write since May. Sister Nasr made the same errors on the same nights for fourteen years and nobody counted them, including her.'],
  ['Lubna', 'And if somebody had?'],
  ['Rasha', 'If somebody had counted, she would have seen the pattern. That one I will defend, and I will tell you why: it took me nine months of counting to see it and I am not cleverer than she is. The pattern is in the numbers and it comes out of them in about an hour once they exist.'],
  ['Jad', 'And if she had seen it?'],
  ['Rasha', 'There I stop. I do not know what she would have done, I do not know what a rota committee would have done in 2014, and I am not going to put a sentence in a report about what a woman I work with would have done eleven years ago.'],
  ['Nour', 'Why not? It seems a fair thing to say.'],
  ['Rasha', 'Because it is the only part of it that is not a fact. Everything else I can show you: the nights, the errors, the sheet. _She would have asked for a change_ is me putting words in her mouth about a year she was living and I was not.'],
  ['Ms Huda', 'That is the rule for the whole cycle and I want it said again as a rule.'],
  ['Rasha', 'A third conditional is only as good as the thing you can show. If the consequence is in the numbers, say it. If the consequence is in somebody\'s head, you cannot.'],
  ['Omar', 'So what about the version that blames the hospital? If the hospital had counted, fourteen years of errors would not have happened.'],
  ['Rasha', 'That is the one I would have written in April and it is wrong twice. The errors would have happened — counting does not stop an error, it finds a pattern — and "the hospital" is not a person who counts anything. What is true is narrower and worse: if any one of us had written the dates down, the pattern would have been visible in a year.'],
  ['Ms Huda', 'Notice what the narrow version does. The wide one blames an institution and nothing follows from it. The narrow one blames the eleven of us who were there, which includes her, and the thing that follows from it is that somebody starts writing dates down tonight.'],
  ['Tareq', 'That is the difference between a third conditional and a complaint.'],
  ['Ms Huda', 'And the test is one question: **does anything follow from it?** If nothing follows, it is a complaint in the shape of a conditional, and this class has written about forty of them since Unit 8.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the third conditional**',
  table(['the form', 'the example'], [
    ['_If_ + past perfect, _would have_ + participle', '_If somebody **had counted**, she **would have seen** it._'],
    ['_might have_ for an uncertain consequence', '_She **might have** asked for a change._'],
    ['_wouldn\'t have_ for a negative one', '_It **wouldn\'t have** taken a year._'],
    ['either order, comma with _if_ first', '_She would have seen it if somebody had counted._'],
    ['contracted in speech', '_If I\'d asked, I\'d have had fourteen._'],
  ], [2.4, 2.2]),
  '**A third conditional is a claim about what would have happened, and it is only as good as the thing you can show.** If the consequence is in the numbers — _the notes were in the box until August_ — say it. If the consequence is in somebody\'s head, you cannot know it, and _might have_ is the most you are entitled to.',
  '**The test: does anything follow from it?** _If the hospital had counted, fourteen years of errors would not have happened_ blames an institution and produces nothing. _If any one of us had written the dates down, the pattern would have been visible in a year_ blames the people in the room and produces somebody writing dates down tonight.',
  '**Prefer the narrow version.** It is harder to say, it includes you, and it is the one with a next step in it.',
  '⚠ ~~If I would have asked~~ → _if I **had** asked_. The _would_ belongs in the other half only.',
  '⚠ ~~If I had asked, I had had fourteen~~ → _I would have had_.',
  '⚠ ~~If somebody counted, she would have seen~~ — mixing a second conditional _if_ with a third conditional result. Keep both halves in the past.',
  '**Useful phrases:** that one I will defend, and I will tell you why · there I stop · it is the only part of it that is not a fact · does anything follow from it? · a complaint in the shape of a conditional.',
  '**Practise:** Say each one and then test it. If the consequence is in somebody\'s head, change _would_ to _might_ or stop.  1 _If I had asked in April…_  2 _If the sheet had been collected from the bus…_  3 _If they had answered my letter…_  4 _If somebody had counted the nights…_  5 _If I had read the page before the conditions…_',
  '**Pronunciation.** 🔊 **Track 15.4** Both halves reduce: _if I\'d asked_ /ɪfaɪd/ and _I\'d have had_ /aɪdəvhæd/, which is three words and one beat. The weight goes on the two **main verbs**: _if I\'d ASKED, I\'d have HAD fourteen._ Listen to six and write the two verbs only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the half-sentence from the card. B finishes it with a consequence and then answers the test question. If the consequence is in somebody\'s head, B says it again with _might have_ or stops. Swap cards.'));
out.push(dlg(null, [
  ['A', 'If __________ had __________…'],
  ['B', '…__________ would have __________.'],
  ['A', 'How do you know that is what would have happened?'],
  ['B', '__________.'],
  ['A', 'Does anything follow from it?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the halves', 'Card B – the halves'], [
  ['If I had asked for the notes in April…', 'If the sheet had been collected from the bus…'],
  ['If somebody had counted the nights…', 'If I had read the page before the conditions…'],
  ['If the call had been put in writing…', 'If anybody had timed the round…'],
  ['If the tubes had come with the new rack…', 'If the owner had asked for a copy in September…'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each consequence and mark it **in the numbers** or **in somebody\'s head**. Then count how many of the second kind produced a next step. Almost none do, and that is the cycle in one number.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own regret from 15.1 and make the third conditional. Then do the hard half: say the **narrow** version, the one that includes you, and say what follows from it this week.'));
out.push(p('**b**  Swap. Then each of you find the wide version the other is still holding on to.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has the figures for both sheets now, and she said what she can say about the fourteen years carefully, because it is the sentence she has been refusing to write since May: Sister Nasr made the same errors on the same nights for fourteen years and nobody counted them, including her. Lubna asked what would have happened if somebody had, and Rasha said she will defend one sentence — if somebody had counted, she would have seen the pattern — because it took her nine months of counting to see it and she is not cleverer than Sister Nasr: the pattern is in the numbers and comes out of them in about an hour once they exist. Jad asked what she would have done then, and Rasha said there she stops: she does not know what Sister Nasr would have done, she does not know what a rota committee would have done in 2014, and she is not going to put a sentence in a report about what a woman she works with would have done eleven years ago. Nour asked why not, since it seems fair, and Rasha said because it is the only part of it that is not a fact — everything else she can show, and "she would have asked for a change" is putting words in her mouth about a year she was living and Rasha was not. So the rule: a third conditional is only as good as the thing you can show; if the consequence is in the numbers, say it, and if it is in somebody\'s head, you cannot. Omar asked about the version that blames the hospital, and Rasha said that is the one she would have written in April and it is wrong twice — the errors would have happened, because counting does not stop an error, it finds a pattern, and "the hospital" is not a person who counts anything. What is true is narrower and worse: if any one of us had written the dates down, the pattern would have been visible in a year. And Ms Huda said the wide version blames an institution and nothing follows from it, and the narrow one blames the eleven people who were there, including her, and what follows is that somebody starts writing dates down tonight. The test is one question: does anything follow from it?_'));
out.push(p('**Listener task:** write one narrow third conditional from this room and what follows from it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph Rasha writes about the fourteen years, and the two versions she rejected. Answer the questions.'));
out.push(model([
  '**THE FOURTEEN YEARS · THREE VERSIONS OF ONE PARAGRAPH** · R. Barakat · for the September report, and not sent in this form',
  '**Version 1, which I wrote in April and have not sent.** _If the hospital had counted night errors, fourteen years of avoidable mistakes would not have happened on this ward._',
  '**What is wrong with it.** Two things, and both are fatal. Counting does not prevent an error; it finds a pattern, which is a different claim. And "the hospital" is not a thing that counts: no person is named, nothing follows, and a reader can agree with it and do nothing, which is what a reader will do.',
  '**Version 2, which I wrote in July and have not sent.** _If somebody had counted, Sister Nasr would have seen the pattern and asked for a change._',
  '**What is wrong with it.** The first half I will defend: the pattern comes out of the numbers in about an hour once they exist, and it took me nine months only because I was making the numbers. The second half is a sentence about what a woman I work with would have done in a year I was not there for, and it is the only part of this report that is not a fact.',
  '**Version 3, which is in the report.** _No count of night errors by individual and block position existed on this ward before September last year. The pattern now visible in both sheets would have been visible in about a year of counting at any time in the last fourteen. Nobody counted, including the two of us._',
  '**Why that version.** Everything in it can be shown: the absence of the records, the pattern, the time it takes to appear. It names the two people who did not count and one of them is me. And something follows from it — if a year of counting makes this visible, then the ward should be counting now, which is the only sentence in nine months of work that asks the committee to do something for the future rather than to explain the past.',
  '**And what I have not written anywhere.** What she would have done. I asked her in September whether she wanted a sentence about it and she said no, and that it was the first time anybody had asked her about those years rather than telling her about them.',
]));
out.push(item('1', 'What two things are wrong with version 1?'));
out.push(item('2', 'Which half of version 2 will she defend, and which will she not?'));
out.push(item('3', 'What follows from version 3 that does not follow from the other two?'));
out.push(writers([
  'A paragraph built on a third conditional: **the wide version you first wrote** → **what is wrong with it, in two parts** → **the narrower version** → **what is still wrong with that** → **the version you will send** → **why** → **and what you have not written at all**.',
  'Show the drafts. A page that gives the two versions it rejected is believed, because the reader can see what the writer refused to claim.',
  'Make the final version **showable, named and consequential**: everything in it demonstrable, the people named — including yourself — and one thing that follows for the future.',
  '⚠ End with the sentence you have not written and why. _I asked her whether she wanted a sentence about it and she said no._ Asking the person your conditional is about is the whole of the ethics of this grammar, and it takes one question.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three versions of your own paragraph (60 words or more).'));
out.push(p('**______________ · THREE VERSIONS OF ONE PARAGRAPH** · ______________   **Version 1, which I wrote in ______________.** _If ______________ had ______________, ______________ would not have ______________._   **What is wrong with it.** ______________, and ______________. Nobody is named and nothing follows.   **Version 2.** _If ______________ had ______________, ______________ would have ______________._   **What is wrong with it.** The first half I will defend, because ______________. The second half is a sentence about ______________, and it is the only part that is not a fact.   **Version 3, which is the one I am sending.** ______________. ______________ would have been visible ______________. Nobody ______________, including ______________.   **Why that version.** Everything in it can be shown: ______________. It names ______________, and one of them is me. And something follows from it: ______________.   **And what I have not written anywhere.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The form correct: _if_ + past perfect, _would have_ + participle',
  'Every consequence either in the numbers, or marked _might have_',
  'The narrow version, with you named in it',
  'One thing that follows for the future',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read version 1 and version 3 only, one after the other, with nothing in between.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) on something that went wrong over a long period in your work, in three versions. Then write underneath whether you have asked the person it is about whether they want a sentence in it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person the conditional is about**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the room\'s version 1s blame an institution?** Nearly all of them. Then: how many of the version 3s have the writer\'s own name in them? Those two numbers, side by side, are the most honest thing this class will produce in Book 2.'));
out.push(hw('Write the three versions of one paragraph about something that went wrong where you work (60+ words). Then ask the person it is about whether they want a sentence in it, and write down what they said.'));

// ======================= 15.3 =======================
out.push(pb());
out.push(h2('15.3  If I had started it then, I would have it now'));
out.push(p('**Function:** saying how a past choice still affects now   ·   **Grammar:** the mixed conditional, lightly   ·   **Pronunciation:** the stress that marks the change of time'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one thing you do **not** have today because of something you did not do more than a year ago. Not a regret about the past — a sentence about today. _I do not have the figures for 2024 because I did not start the book until September._'));
out.push(board('If I had started the book in 2019, I would have six years of it now.', 'if + had + -ed → would + verb (now)'));
out.push(p('**b**  Past result or present result? **1** _If I had started it then, I would have six years of figures._  **2** _If I had started it then, I would have found the batch sooner._  **3** _If she had been told, she would not be on days now._  **4** _If she had been told, she would not have asked._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Umm Kinan say she would have today, and what happened on the twenty-seventh?'));
out.push(p('**b**  Listen again. **1** What is the difference between her two sentences?   **2** What does Lubna say about her two blanks?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.5  What I would have now', [
  ['Ms Huda', 'The twenty-seventh of October. Umm Kinan, your prediction was that the meeting would happen and nothing would be decided.'],
  ['Umm Kinan', 'The meeting happened and I was wrong. There is a line of minutes: the department will teach chapter seven in the second term in all third-year classes from next September, and the head of department is writing to the directorate to say so.'],
  ['Nour', 'That is everything you asked for.'],
  ['Umm Kinan', 'It is more than I asked for, because I asked for my own classes and they have given it to all of them. And I would like to say the sentence that has been in my head since Monday, which is not a happy sentence. If I had kept the mark analysis from the beginning, I would have eleven years of it now instead of four.'],
  ['Jad', 'Eleven?'],
  ['Umm Kinan', 'I have taught that chapter for twenty-four years and I have been analysing the June papers for four. If I had written the marks down from the year I first noticed — and I noticed in 2015, I can tell you the staff room I was standing in — I would have eleven years of figures today, and a department that argued with me for one meeting instead of a year.'],
  ['Rasha', 'But you got it.'],
  ['Umm Kinan', 'I got it with four years, and it took from June of last year to October of this one. With eleven I think it would have taken a term. That is the sentence: not what would have happened then — what I would **have**, now.'],
  ['Ms Huda', 'And the grammar is doing something the class has not met. Say the two sentences.'],
  ['Umm Kinan', 'If I had started in 2015, I would have had an easier meeting — that is about the meeting, and it is finished. If I had started in 2015, I would have eleven years of figures — that is about my drawer, this afternoon.'],
  ['Lubna', 'I have the same thing and mine is two blank spaces. If I had asked the university for the 1974 file in my second year, I would have it now, because the man who held that file retired in March and nobody knows what happened to the drawings.'],
  ['Omar', 'So your key has two blanks in it for ever.'],
  ['Lubna', 'My key has two blanks in it for ever, and the honest thing is that they are not blanks because the information does not exist. They are blanks because I waited two years to ask a man who was about to retire.'],
  ['Ms Huda', 'This is the one cycle in the unit that is not about regret at all. It is about **what you are carrying today** because of a decision whose date you can name — and the useful half of it is the next sentence, which is: what will somebody be carrying in 2030 because of what you are not starting this week?'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the mixed conditional (past cause, present result)**',
  table(['you say', 'what it is about'], [
    ['_If I had started it then, I **would have** six years now._', 'today: the figures in my drawer'],
    ['_If I had started it then, I **would have found** it sooner._', 'the past: what happened in April'],
    ['_If she had been told, she **wouldn\'t be** on days now._', 'today: where she is working'],
    ['_If I had asked in my second year, I **would have** the file._', 'today: what is in my hand'],
  ], [2.6, 2.0]),
  '**One half in the past, the other half in the present.** _If_ + past perfect, as in a normal third conditional — and then **_would_ + the bare verb**, not _would have_. The difference is one word and it moves the sentence from a finished story to the thing on your desk.',
  '**Use it where the consequence is still in the room.** Years of figures you do not have; a file nobody can find; a record that starts in September instead of 2019; a blank space on a drawing. Those are the sentences worth making, because the loss is countable today.',
  '**And then turn it round.** _What will somebody be carrying in 2030 because of what I am not starting this week?_ That question is the only reason to teach this form, and it is the reason 15.3 is in the middle of the unit and not at the end.',
  '⚠ ~~If I had started it then, I would have had six years now~~ — _would have had_ puts the result back in the past. For a present result: _I would have six years now_.',
  '⚠ ~~If I started it then~~ → _if I **had** started it_.',
  '⚠ Do not mix the other way round without a reason: _if I were cleverer, I would have seen it_ is possible and means something different again — a permanent present cause with a past result.',
  '**Useful phrases:** I can tell you the staff room I was standing in · not what would have happened then — what I would have, now · they are blanks because I waited two years to ask a man who was about to retire.',
  '**Practise:** Make the present-result version, and then ask the forward question.  1 a record you started late  2 a document you did not ask for in time  3 a conversation you did not have  4 a number you did not write down  5 a skill you did not begin',
  '**Pronunciation.** 🔊 **Track 15.6** The two versions differ by one syllable and the stress tells a listener which they are getting: _I\'d have HAD an easier meeting_ against _I\'d HAVE eleven years_. In the second, _have_ is a full verb and takes the weight. Listen to eight and write **then** or **now**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B makes both sentences — the past result and the present result — and then asks themselves the forward question out loud. A asks: _and what are you not starting this week?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'If I had __________, I would have __________ then. And if I had __________, I would have __________ now.'],
  ['A', 'What are you not starting this week?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the situations', 'Card B – the situations'], [
  ['A record you began later than you could have.', 'A document somebody held who has now left.'],
  ['A number nobody wrote down for years.', 'A conversation you have still not had.'],
  ['A skill you put off starting.', 'A file that was thrown away on somebody else\'s schedule.'],
  ['A measurement nobody took at the time.', 'A name nobody asked for while the person was there.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight answers to _what are you not starting this week?_ Then read them back at the end of the stage. In a first run six or seven of the eight are things that would take under an hour to start, and three or four are things somebody in the room is about to lose because a person is leaving.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say what you would have today if you had started something on a date you can name. Then say what you are not starting this week, and when the window closes on it.'));
out.push(p('**b**  Swap. Then each of you say which of the other\'s windows is closing soonest, and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The twenty-seventh of October has fallen and Umm Kinan was wrong: the meeting happened and something was decided. There is a line of minutes — the department will teach chapter seven in the second term in all third-year classes from next September, and the head of department is writing to the directorate to say so. Nour said that is everything she asked for, and Umm Kinan said it is more, because she asked for her own classes and they have given it to all of them. Then she said the sentence that has been in her head since Monday, which is not a happy one: if she had kept the mark analysis from the beginning, she would have eleven years of it now instead of four. She has taught that chapter for twenty-four years and has been analysing the June papers for four, and she noticed the problem in 2015 — she can name the staff room she was standing in. With eleven years of figures she thinks it would have taken a term instead of sixteen months. And the grammar is new: if I had started in 2015 I would have had an easier meeting is about the meeting and is finished; if I had started in 2015 I would have eleven years of figures is about her drawer this afternoon. Lubna said she has the same thing and hers is two blank spaces: if she had asked the university for the 1974 file in her second year she would have it now, because the man who held it retired in March and nobody knows what happened to the drawings. So her key has two blanks in it for ever — and the honest thing, she said, is that they are not blanks because the information does not exist, they are blanks because she waited two years to ask a man who was about to retire. And Ms Huda said this is the one cycle in the unit that is not about regret: it is about what you are carrying today because of a decision whose date you can name, and the useful half is the next question — what will somebody be carrying in 2030 because of what you are not starting this week?_'));
out.push(p('**Listener task:** write one present-result sentence from this room, and the window that is closing soonest.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Umm Kinan writes for the department file. Answer the questions.'));
out.push(model([
  '**CHAPTER SEVEN · WHAT FOUR YEARS OF FIGURES COST, AND WHAT ELEVEN WOULD HAVE DONE** · S. Dibo · 29 October · for the department file and for whoever teaches this chapter after me',
  'The minute of the twenty-seventh says that chapter seven moves to the second term in all third-year classes from next September. This page is not about that. It is about the four years.',
  '**What I have.** Mark analyses for June 2022, 2023, 2024 and 2025: my own classes, my own marking, about a hundred and ten pupils a year, and the chapter-seven questions marked separately.',
  '**What I would have if I had started when I first noticed.** Eleven years, from 2015. I noticed in the summer of 2015, standing in the old staff room looking at a set of June papers, and I said to a colleague that the chapter was always in the paper and always taught last. She agreed with me. Neither of us wrote anything down.',
  '**What the four years cost.** Sixteen months. I raised it in June of last year with four June papers and my own figures, and the answer was that the scheme comes from the directorate. With eleven years I think it would have taken one meeting, because eleven years is not one teacher\'s classes any more; it is a pattern that survives a change of teacher, a change of pupil and two changes of textbook, and nobody can say it is my marking.',
  '**What I am not claiming.** That four years was not enough. It was enough — it worked, in sixteen months. I am claiming that it was expensive in the one currency a school department has, which is meetings.',
  '**What anybody reading this should do on Monday.** Open a page in the back of your register. Write the date, the chapter and the marks, for one chapter, in your own classes, once a year. It takes about forty minutes every June. In eleven years somebody will be able to change a scheme of work with it in one meeting, and that somebody will probably not be you.',
  '**And the sentence I would rather not write.** I was given a projector in January and I used it four times. In 2036 somebody will write a page like this about 2026, and the thing they will not have is whatever I am not starting this week.',
]));
out.push(item('1', 'What does she say the four years cost, and in what currency?'));
out.push(item('2', 'Why would eleven years have taken one meeting?'));
out.push(item('3', 'What does she ask the reader to do on Monday, and how long does it take a year?'));
out.push(writers([
  'A page about a late start: **what you have** → **what you would have if you had started when you first noticed, with the year and the place** → **what the gap cost, in a currency your reader recognises** → **what you are _not_ claiming** → **what the reader should do on Monday** → **and the forward sentence about yourself**.',
  'Name the **moment you first noticed**. _The summer of 2015, standing in the old staff room._ A page that says "I should have started earlier" teaches nothing; a page with a staff room and a year in it is a page somebody believes.',
  'Give the instruction a **time cost**: _about forty minutes every June_. The reason nobody starts a record is that nobody has ever told them how long it takes.',
  '⚠ End on yourself, in the present. _The thing they will not have is whatever I am not starting this week._ Without that sentence the page is a reproach to the past; with it, it is a page about this Monday.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about something you started late, or have not started (60 words or more).'));
out.push(p('**______________ · WHAT ______ YEARS COST, AND WHAT ______ WOULD HAVE DONE** · ______________ · for ______________   **What I have.** ______________.   **What I would have if I had started when I first noticed.** ______ years, from ______________. I noticed in ______________, ______________, and I said to ______________. Neither of us wrote anything down.   **What the ______ years cost.** ______________. With ______ years I think ______________, because ______ years is not ______________ any more.   **What I am not claiming.** That ______________ was not enough. It was enough. I am claiming that ______________.   **What anybody reading this should do on Monday.** ______________. It takes about ______________ a year.   **And the sentence I would rather not write.** ______________ — and the thing they will not have is whatever I am not starting this week.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The mixed form: _if I had started_ → _I would have_ (not _would have had_)',
  'The year and the place you first noticed',
  'The cost in a currency the reader recognises',
  'An instruction with a time cost, and the forward sentence about you',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the "what anybody reading this should do on Monday" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) about something you would have today if you had started it on a date you can name — and end with what you are not starting this week. Then put a date on starting it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person who will do that job in 2030**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Collect the years.** How far back does the room\'s earliest "when I first noticed" go? Then the other count: how many of the things nobody is starting this week would take under an hour to start? The gap between those two numbers — twenty years and forty minutes — is the whole of this cycle.'));
out.push(hw('Start the thing you are not starting (60+ words). Open the page, write the first entry, date it, and write one paragraph saying what you will have in five years if you keep it and what you will not have if you stop in November.'));

// ======================= 15.4 =======================
out.push(pb());
out.push(h2('15.4  The apology that names the thing'));
out.push(p('**Function:** apologising properly for something you did   ·   **Grammar:** the apology that names the thing, and the third conditional kept out of it   ·   **Pronunciation:** saying a hard sentence at normal speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six apologies. For each one the class says what is actually being apologised **for** — and in four of the six it cannot be said, because the apology names a feeling, a misunderstanding or a situation instead of a thing somebody did.'));
out.push(board('I told you in May that leaving the building included the yard. I was wrong.', 'the thing · the date · and no but'));
out.push(p('**b**  Which of these names the thing? **1** _I am sorry if anything I said upset anybody._  **2** _I told you the wrong thing in May and I am sorry._  **3** _I am sorry that the situation developed as it did._  **4** _Mistakes were made and I apologise for them._  **5** _I made a rule stricter than the one the ministry wrote, and it cost you three Saturdays._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Bassel writing, and who asked him to?   **A** an apology, and nobody asked him to   **B** an apology, and the ministry asked for it   **C** a complaint'));
out.push(p('**b**  Listen again. **1** What are the four parts of the apology he ends up with?   **2** What does he say about the word _but_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.7  No but in it', [
  ['Bassel', 'I said it to the three of them in June, standing by the press, and it took about forty seconds. Now I want to write it, and I have found that I cannot.'],
  ['Ms Huda', 'Why write it, if you have said it?'],
  ['Bassel', 'Because one of them was not there in June. He was in the yard. The yard is the whole subject of it, and the man who was in the yard is the man I have not told.'],
  ['Nour', 'What have you got so far?'],
  ['Bassel', '"I am sorry about the confusion over the yard rule in May, but the conditions were unclear and I had not been given the definitions page at the time."'],
  ['Jad', 'There is a _but_ in it.'],
  ['Bassel', 'There is a _but_ in it and everything after the _but_ is true.'],
  ['Ms Huda', 'And what does a reader do with a sentence that has a _but_ in it?'],
  ['Bassel', 'Remembers the second half. I know that; it is 12.2. If I write that sentence, what the man in the yard will remember is that the conditions were unclear.'],
  ['Rasha', 'Was there a confusion?'],
  ['Bassel', 'No. That is the second thing wrong with it. There was no confusion — I made a decision. I stood in that shop in May and told three men that leaving the building included crossing the yard, and I was wrong, and the page that said so had been on my counter for five weeks.'],
  ['Ms Huda', 'Then say the whole thing with no _but_ in it, and nothing about the conditions.'],
  ['Bassel', 'In May I told you that leaving the building included the yard. That was wrong — the definitions page says the yard is inside the premises — and I had the page and had not read it. It cost you three Saturdays between May and August, and Ahmad two days of overtime he did not have to work.'],
  ['Omar', 'And now what? Do you offer them something?'],
  ['Bassel', 'I thought about that for a week. If I offer them money it becomes a transaction and the apology disappears into it. What I am going to do is the one thing that is actually mine to do: the definitions page goes on the wall by the press, and from now on the three of them see every page I am sent, including the ones I have not read.'],
  ['Ms Huda', 'Say what you are **not** going to put in it.'],
  ['Bassel', 'I am not going to put in that I would have read the page if the ministry had sent it with a covering letter. It is true, it is a third conditional, and it belongs in the part of my head where I keep the things that are not the man in the yard\'s problem.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four parts of an apology that works**',
  table(['the part', 'the example'], [
    ['**the thing, with a date**', '_In May I told you that leaving the building included the yard._'],
    ['**that it was wrong, flatly**', '_That was wrong._ — no adverb, no softener'],
    ['**what it cost, counted**', '_Three Saturdays, and two days of overtime._'],
    ['**what you are doing about it**', '_The page goes on the wall by the press._'],
  ], [1.9, 2.7]),
  '⚠ **No _but_.** A reader remembers the half after the _but_, so everything true that you put there — unclear conditions, no covering letter, a bad week — becomes what your apology said. If it needs saying, say it on a different day, in a different document, to a different person.',
  '⚠ **No _if_.** Keep the third conditional out. _I would have read it if they had sent a letter_ may be true and is not the reader\'s problem, and it turns an apology into a case.',
  '⚠ **Name the thing, not the feeling.** _I am sorry if anything I said upset anybody_ apologises for somebody else\'s reaction. _I am sorry about the confusion_ apologises for a thing that did not happen, because there was no confusion: there was a decision.',
  '**Count the cost.** _Three Saturdays_ · _two days of overtime_ · _six days in a file_. An apology with a number in it is believed; one with _any inconvenience_ in it is a formula and reads as one.',
  '**And do the one thing that is yours.** Not money, not a promise about other people, not a procedure you cannot control. The smallest thing you can actually do, done this week.',
  '**Useful phrases:** there is a _but_ in it and everything after the _but_ is true · there was no confusion — I made a decision · it belongs in the part of my head where I keep the things that are not his problem.',
  '**Practise:** Turn each into the four parts.  1 _Sorry about the mix-up with the dates._  2 _I apologise for any inconvenience caused._  3 _I am sorry you felt that way._  4 _Sorry — it was a difficult week._  5 _I am sorry about what happened with the form._',
  '**Pronunciation.** 🔊 **Track 15.8** A hard sentence said at **normal speed** and normal volume is heard as an apology; the same sentence said slowly and quietly is heard as a performance, and said fast is heard as a formula. _That was wrong_ — three words, flat, no pause after them. Listen to six and mark the two that are said properly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the formula apology from the card. B says the four-part version: the thing with a date, that it was wrong, what it cost, and what they are doing. A then listens for a _but_ or an _if_ and says where it was. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'In __________ I __________. That was wrong. It cost you __________. What I am doing about it is __________.'],
  ['A', 'Was there a _but_ or an _if_ in it?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – formula apologies', 'Card B – formula apologies'], [
  ['Sorry about the mix-up with the dates.', 'I apologise for any inconvenience caused.'],
  ['I am sorry you felt that way.', 'Sorry — it was a difficult week.'],
  ['I am sorry about the confusion over the form.', 'Apologies for the delay in replying.'],
  ['I am sorry if I was abrupt on Tuesday.', 'Sorry about what happened with the order.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four parts for each, and mark any apology that lost a part. The part that disappears first is **what it cost**, because counting it is the moment the apology becomes real — and the part that appears uninvited is the _but_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take something you did that cost somebody else something. Say the four parts out loud, with a date and a count. Then say the _but_ you have left out, to your partner, so that you have said it once and can leave it out of the writing.'));
out.push(p('**b**  Swap. Then each of you say whether the thing being apologised for is a **decision** or a **misunderstanding**, and whether the apology says which.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel said the apology to his three men in June, standing by the press, and it took about forty seconds. Now he wants to write it and has found that he cannot — because one of the three was not there in June: he was in the yard, and the yard is the whole subject of it. What he had written was: I am sorry about the confusion over the yard rule in May, but the conditions were unclear and I had not been given the definitions page at the time. Jad pointed out the _but_, and Bassel said there is a _but_ in it and everything after the _but_ is true. Ms Huda asked what a reader does with a sentence that has a _but_ in it, and he said remembers the second half — he knows that, it is 12.2 — and that what the man in the yard will remember is that the conditions were unclear. Then Rasha asked whether there had been a confusion, and Bassel said no, and that is the second thing wrong with it: there was no confusion, he made a decision. He stood in the shop in May and told three men that leaving the building included crossing the yard, and he was wrong, and the page that said so had been on his counter for five weeks. So the whole thing with no _but_ in it: in May I told you that leaving the building included the yard; that was wrong — the definitions page says the yard is inside the premises — and I had the page and had not read it; it cost you three Saturdays between May and August, and Ahmad two days of overtime he did not have to work. Omar asked whether he would offer them something, and Bassel said he thought about it for a week: money would turn it into a transaction and the apology would disappear into it. What he is going to do is the one thing that is actually his — the definitions page goes on the wall by the press, and the three of them see every page he is sent from now on, including the ones he has not read. And what he is not going to put in it is that he would have read the page if the ministry had sent it with a covering letter: true, a third conditional, and not the man in the yard\'s problem._'));
out.push(p('**Listener task:** write the cost somebody counted, and the _but_ somebody left out.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Bassel puts on the wall by the press. Answer the questions.'));
out.push(model([
  '**TO AHMAD, KHALED AND ABU MARWAN** · B. Tahhan · 3 November · a copy of this is on the wall by the press',
  '**What I did.** In May I told the three of you that leaving the building with finished work included crossing the yard, and that nothing was to go out of the building without a signed order in hand.',
  '**That was wrong.** The definitions page of the ministry conditions says that the premises includes any yard whose access is from the building. The yard is inside. Nothing needed a signed order to cross it, and the rule I gave you in May was stricter than the one the ministry wrote.',
  '**I had the page.** It came with the conditions in March and sat on my counter for five weeks and I did not read it, because it was headed Definitions and definitions are what you skip. A student in an English class asked me what the page before the conditions said, and I could not tell her.',
  '**What it cost you.** Ahmad: two Saturdays in June and one in July, waiting for me to come in and sign for work that was standing six metres from where it needed to be. Khaled: the same two Saturdays in June. Abu Marwan: four days in July and August when he could not move boxes across the yard after six because I was not here to sign, and two days of overtime he did not have to work. I am not going to pretend I know exactly what that was worth to the three of you.',
  '**What I am not going to say.** I am not going to say that the conditions were unclear, because the page that made them clear was on my counter. And I am not going to say what I would have done if the ministry had sent a covering letter with the order. Both of those are true and neither of them is yours.',
  '**What I am doing about it.** The definitions page is on the wall above this letter. From today the three of you see every page I am sent on a ministry order on the day it arrives, including the pages I have not read, and I have told the ministry office that the man who will authorise work when I am not here is Ahmad, in writing, which the same page allows and which I did not know for five weeks either.',
  '**And one more thing, which is not an apology.** Abu Marwan, you asked me in May whether the yard counted and I said yes without looking it up. You were the only one who asked.',
]));
out.push(item('1', 'What does he say the rule he gave in May was, and what was the rule the ministry wrote?'));
out.push(item('2', 'What does he refuse to say, and why?'));
out.push(item('3', 'What are the three things he is doing about it?'));
out.push(writers([
  'An apology in writing: **what you did, with the date and the words you used** → **that it was wrong, with the thing that shows it** → **what you had and did not use** → **what it cost, counted, person by person** → **what you are _not_ going to say** → **what you are doing about it** → **and one thing that is not an apology at all**.',
  'Count the cost **by person**. _Ahmad: two Saturdays in June and one in July._ A collective cost is a formula; a cost attached to a name is a thing somebody recognises, and the admission that you do not know what it was worth to them belongs there too.',
  'Write the paragraph of refusals. _I am not going to say that the conditions were unclear, because the page that made them clear was on my counter._ Saying what you are refusing to say is the only way to keep the _but_ out and still be honest.',
  '⚠ The last paragraph is the hardest and the one that makes the letter remembered: name the person who asked the question you got wrong. _You were the only one who asked._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the apology for something you did that cost somebody else something (60 words or more).'));
out.push(p('**TO ______________** · ______________ · ______________   **What I did.** In ______________ I ______________.   **That was wrong.** ______________. ______________, and what I told you was ______________ than ______________.   **What I had.** ______________ and I did not ______________, because ______________.   **What it cost you.** ______________: ______________. ______________: ______________. I am not going to pretend I know exactly what that was worth to you.   **What I am not going to say.** I am not going to say ______________, because ______________. And I am not going to say what I would have done if ______________. Both are true and neither of them is yours.   **What I am doing about it.** ______________. From today ______________.   **And one more thing, which is not an apology.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The thing named, with a date — not a feeling and not a situation',
  '_That was wrong_, flat, with no adverb and no _but_',
  'The cost counted, by person where you can',
  'One thing you are doing that is actually yours to do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I am not going to say" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full apology (140 words or more) to somebody your own decision cost something. Then write underneath whether you are going to give it to them, and when.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s letter as **the person it is addressed to, who has been waiting for it since May**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many apologies in this room have a number in them?** Count. Then: how many have a _but_ still in them somewhere, including in the last line? Read two of the _buts_ aloud, with the writer\'s permission — they are always true, and that is what makes them hard to delete.'));
out.push(hw('Write the apology (60+ words) and give it to the person. Write down what they said, and whether they mentioned the thing you apologised for or something else.'));

// ======================= 15.5 =======================
out.push(pb());
out.push(h2('15.5  I wish I had counted'));
out.push(p('**Function:** saying what you wish   ·   **Grammar:** _wish_ + past perfect · _if only_ · _wish_ + past   ·   **Pronunciation:** the flat _I wish I had_ against the pleading one'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room, one each, and nobody explains: _I wish I had…_ One sentence, no reason attached, no story. Your teacher writes them on the board and the class reads the eleven in silence.'));
out.push(board('I wish I had counted. I wish I knew who holds that file now.', 'wish + had (past) · wish + past (now)'));
out.push(p('**b**  Past or present? **1** _I wish I had counted._  **2** _I wish I knew._  **3** _I wish he had told me._  **4** _I wish I had the file._  **5** _If only somebody had written it down._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Yara wish, and what did she find on the shelf by the lift?'));
out.push(p('**b**  Listen again. **1** What is the difference between _I wish I had_ and _I wish I_?   **2** What does Ms Huda say a wish is good for, and what it is not good for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.9  The bag on the shelf', [
  ['Yara', 'I did the twenty minutes. The one I had not checked since August.'],
  ['Ms Huda', 'And?'],
  ['Yara', 'I stood by the lift on three afternoons. On the second one there was a bag on the shelf at ten past three with four samples in it, and nobody had taken it up. So it is not one of three things. It is at least two of them.'],
  ['Nour', 'What did the porter say?'],
  ['Yara', 'That he leaves bags there when the laboratory door is shut at three — which it is, because that is when we load. He has been doing it for about two years and he thought we knew.'],
  ['Jad', 'Two years.'],
  ['Yara', 'I wish I had checked it in August. I wish I had checked it the first time I found a bag there, which was in June of last year, and I have just worked out from my own diary that it was the fourteenth of June.'],
  ['Omar', 'And you said nothing.'],
  ['Yara', 'I put the bag on the bench and I ran the samples and I said nothing to anybody, because I had been in that laboratory for four months and I did not speak to people. And that is the sentence I have been avoiding for two weeks: it is not that I did not know, it is that I knew and could not say it.'],
  ['Ms Huda', 'Say the two forms, because they are different and the class needs to hear it.'],
  ['Yara', 'I wish I had checked it in August — about August, finished. And I wish I knew how many bags there have been — about now, because nobody counted and nobody can tell me.'],
  ['Rasha', 'There is a third one you have not said.'],
  ['Yara', 'There is. I wish he had told somebody. He has been leaving bags on a shelf for two years and he thought we knew, and he never once said it out loud to anybody in a white coat — and I understand exactly why, because I did not either.'],
  ['Ms Huda', 'And now the thing a wish cannot do. Yara, what does _I wish I had checked in August_ change?'],
  ['Yara', 'Nothing. It is August.'],
  ['Ms Huda', 'So what is it for?'],
  ['Yara', 'It is for saying out loud which of my three possibilities I was protecting. I ranked the afternoon run first in September and I had found a bag on a shelf in June of last year, and I did not put the bag in my ranking at all.'],
  ['Ms Huda', 'That is what a wish is good for: it finds the thing you knew and did not use. It is not good for anything else, and a page made of wishes is a page where nothing is going to happen on Monday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _wish_ and _if only_**',
  table(['you say', 'what it is about'], [
    ['_I wish I **had checked** it in August._', 'the past: I did not'],
    ['_I wish I **knew** how many there have been._', 'now: I do not know'],
    ['_I wish I **had** the file._', 'now: I have not got it'],
    ['_**If only** somebody had written it down._', 'the past, with more feeling'],
    ['_I wish he **would** tell somebody._', 'about somebody else\'s behaviour, now'],
  ], [2.5, 2.1]),
  '**_Wish_ + past perfect for the past; _wish_ + past for now.** _I wish I had counted_ (I did not) against _I wish I knew_ (I do not). The second is not about regret at all; it is a statement that the information does not exist, and it is often the more useful of the two.',
  '⚠ ~~I wish I would have counted~~ → _I wish I had counted_. ⚠ ~~I wish I know~~ → _I wish I knew_. ⚠ ~~I wish I would have the file~~ → _I wish I had the file_.',
  '**_If only_ is the same grammar with more weight on it** and is used sparingly in writing: once on a page, or it reads as self-pity.',
  '**What a wish is for.** It finds the thing you **knew and did not use** — the bag on the shelf in June, the pattern you noticed in 2015, the question somebody asked you that you answered without looking it up. Nothing else in the language does that job as quickly.',
  '**And what it is not for.** Changing anything. A page made of wishes is a page where nothing happens on Monday, and that is why 15.5 is followed immediately by 15.6, which is the same material written as a report.',
  '**Useful phrases:** it is not that I did not know, it is that I knew and could not say it · I did not put the bag in my ranking at all · a wish finds the thing you knew and did not use · and I understand exactly why, because I did not either.',
  '**Practise:** Say each as a past wish and then as a present one, and then say what you knew at the time.  1 a check you did not make  2 a question you did not ask  3 a thing somebody told you  4 a count nobody kept  5 a person you did not speak to',
  '**Pronunciation.** 🔊 **Track 15.10** _I wish I had_ is four words and two beats — /aɪwɪʃaɪd/ — and the weight goes on the **main verb**: _I wish I\'d CHECKED it._ Said slowly, with the weight on _wish_, it becomes a performance of regret, which is the one thing it must not be. Listen to six and mark the two that are said flatly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B says the past wish, the present wish, and then the hard sentence: _what I knew at the time was…_ A asks only one thing: _and why did you not say it?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I wish I had __________. I wish I knew __________.'],
  ['B', 'What I knew at the time was __________.'],
  ['A', 'Why did you not say it?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the situations', 'Card B – the situations'], [
  ['A check you kept meaning to make.', 'A question somebody asked you that you answered too fast.'],
  ['A thing you were told and did not pass on.', 'A count nobody kept.'],
  ['A person you did not speak to for months.', 'A page you were given and did not read.'],
  ['A pattern you noticed and did not write down.', 'A name you could have asked for while somebody was there.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight answers to _what I knew at the time was…_ They are the only sentences in the cycle that matter, and about half of them are things the speaker knew and could not say — not did not know, could not say — which is a different problem and is 4.6, 6.6 and 12.4 arriving together.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say your past wish, your present wish, and what you knew at the time. Then the forward sentence: what do you know now and are not saying?'));
out.push(p('**b**  Swap. Then each of you say whether the other\'s silence was about not knowing, not being sure, or not being able to speak — and which of the three is still true today.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara did the twenty minutes — the possibility she had not checked since August. She stood by the lift on three afternoons, and on the second one there was a bag on the shelf at ten past three with four samples in it and nobody had taken it up. So it is not one of three things, it is at least two of them. The porter said he leaves bags there when the laboratory door is shut at three, which it is, because that is when they load; he has been doing it for about two years and he thought they knew. Yara said she wishes she had checked it in August — and that she wishes she had checked it the first time she found a bag there, which was in June of last year, on the fourteenth, which she worked out from her own diary. Omar said so she said nothing, and she said she put the bag on the bench, ran the samples and said nothing to anybody, because she had been in that laboratory for four months and did not speak to people — and that is the sentence she has been avoiding for two weeks: it is not that she did not know, it is that she knew and could not say it. Then the two forms: I wish I had checked it in August, which is about August and finished, and I wish I knew how many bags there have been, which is about now, because nobody counted and nobody can tell her. Rasha said there was a third she had not said, and Yara said yes — I wish he had told somebody: he has been leaving bags on a shelf for two years and thought they knew and never said it out loud to anybody in a white coat, and she understands exactly why, because she did not either. And Ms Huda asked what "I wish I had checked in August" changes, and Yara said nothing, it is August — and that what it is for is saying out loud which of her three possibilities she was protecting: she ranked the afternoon run first in September, having found a bag on a shelf in June of last year, and she did not put the bag in her ranking at all. Ms Huda said that is what a wish is good for — it finds the thing you knew and did not use — and it is not good for anything else, and a page made of wishes is a page where nothing happens on Monday._'));
out.push(p('**Listener task:** write one _what I knew at the time was_ sentence from this room.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Yara writes for herself, and the three lines she puts on the bench. Answer the questions.'));
out.push(model([
  '**THE BAG ON THE SHELF** · Y. Mansour · a page for myself, and three lines for the bench',
  '**For myself.**',
  '**What I wish.** I wish I had checked the corridor in August, when I wrote in a note for a ward that I had not checked it. I wish I had checked it on the fourteenth of June last year, when I found a bag of four samples on the shelf by the lift and carried it to the bench and said nothing. And I wish I knew how many bags there have been in two years, which nobody can tell me, because nobody counted and the bags have no time on them.',
  '**What I knew at the time.** That a bag of samples had been left in a corridor. Not that it happened often, not why, not whose it was — but I knew the one thing that mattered, which is that it happens at all, and I had known it for sixteen months when I wrote a note ranking three possibilities and left it out of all three.',
  '**Why I said nothing in June of last year.** I had been there four months, I was the newest person on the bench, and I did not speak to the porters or to the doctors or to anybody except the two women I sat with. That is the true reason and it is not a good one.',
  '**And the thing that is not about me.** He has been leaving bags on that shelf for two years and he thought we knew. He has never said it to anybody in a white coat, and when I asked him he answered in about four words and looked as though he expected to be in trouble. I understand why he never said it, because I did not say it either, and I am the one who is paid to know what a delayed sample costs.',
  '**For the bench — three lines, and nothing about me.**',
  '**1** Bags are left on the shelf by the lift when the laboratory door is shut at three. This has been happening for about two years.',
  '**2** From Monday, write the time on the bag when it reaches the bench. Two weeks, then we will know how many and how late.',
  '**3** Somebody has to tell the porters when the door is shut and when it is not. I have asked for the loading time to go on the door and I will put it there myself on Monday if nobody else does.',
]));
out.push(item('1', 'What three wishes does she write, and which one is about now?'));
out.push(item('2', 'What does she say she knew at the time, and for how long?'));
out.push(item('3', 'What is on the bench, and what is deliberately not on it?'));
out.push(writers([
  'Two pages in one: **the wishes, with dates** → **what you knew at the time, and for how long** → **why you said nothing, honestly** → **the part that is not about you** → **and then, separately, the three lines for other people, with nothing about you in them**.',
  'Date the wish. _I wish I had checked it on the fourteenth of June last year_ — a wish with a date in it is a fact about what you knew, and a wish without one is a mood.',
  'Write _why I said nothing_ and let it be a bad reason. _I was the newest person on the bench and I did not speak to people. That is the true reason and it is not a good one._ Nobody believes a page where the reason is good.',
  '⚠ Keep the two pages apart. Everything about you goes on the first page, and the second page — the one other people will read — has three lines, no wishes, and a date. A wish on a shared page makes other people manage your feelings instead of the bags.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page for yourself and the three lines for everybody else (60 words or more).'));
out.push(p('**______________** · ______________   **For myself. What I wish.** I wish I had ______________ in ______________. I wish I had ______________ on ______________, when ______________. And I wish I knew ______________, which nobody can tell me because ______________.   **What I knew at the time.** ______________. Not ______________, not ______________ — but I knew ______________, and I had known it for ______________.   **Why I said nothing.** ______________. That is the true reason and it is not a good one.   **And the thing that is not about me.** ______________.   **For ______________ — three lines, and nothing about me.**   **1** ______________.   **2** From Monday, ______________.   **3** Somebody has to ______________, and I will ______________ if nobody else does.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_wish_ + past perfect for the past, _wish_ + past for now',
  'A date on every wish',
  'Why you said nothing, with a reason that is not a good one',
  'The second page: three lines, no wishes, a date and a name',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three lines only — the page other people will read.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write both pages in full (140 words or more) about something you knew and did not use. Then put the three lines where they belong, this week, and write down where you put them.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s three lines as **somebody who works there and has never been told any of it**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the room knew the thing and could not say it, rather than not knowing?** Hands. Then the question nobody expects: how many of you are the newest person somewhere, or were when it happened? That is the finding, and it is the argument for every cycle in this course that asks a student to say something out loud.'));
out.push(hw('Write both pages (60+ words), put the three lines where other people will read them, and write down who asked you about them.'));

// ======================= 15.6 =======================
out.push(pb());
out.push(h2('15.6  The honest report'));
out.push(p('**Function:** writing an account that admits a mistake   ·   **Grammar:** the whole unit in one document, with the conditionals in their place   ·   **Pronunciation:** reading your own mistake aloud without apologising twice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads two accounts of the same event: one written by the person it happened to, one written by the person who caused it. The class says which is which, and then the useful question: _which one would you act on?_'));
out.push(board('What happened. What I got wrong. What it cost. What changes.', 'the four headings, in that order'));
out.push(p('**b**  Where does each sentence belong? **1** _If I had checked in August I would have found it._  **2** _A bag was found on the shelf at 15.10 on 29 October._  **3** _From Monday the time goes on the bag._  **4** _I ranked three possibilities and left this one out._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say about where the third conditional goes in a report?'));
out.push(p('**b**  Listen again. **1** What are the four headings, and which one do students put first?   **2** What does Nour say happens to a report that has an _if_ in the second paragraph?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.11  Four headings', [
  ['Ms Huda', 'Yara has to write this up for the laboratory and she has a problem, which is the problem of the whole unit. Yara.'],
  ['Yara', 'Everything I write turns into an explanation. I start with the bag and by the third sentence I am writing about being new, and about the door, and about the porter not telling anybody, and all of it is true and none of it is a report.'],
  ['Nour', 'Put the facts first with no sentences about yourself in them at all.'],
  ['Yara', 'That is what I tried. Then the facts have no reason in them and the man reading it will say: why did nobody notice for two years?'],
  ['Ms Huda', 'Then the answer is four headings in a fixed order, and the order is the whole technique. **What happened.** **What I got wrong.** **What it cost.** **What changes.**'],
  ['Jad', 'And the conditionals?'],
  ['Ms Huda', 'In the second heading only, and once. _What I got wrong_ is the only paragraph where _if I had_ belongs, because that is the paragraph about what you now know. In the first paragraph it is an excuse, in the third it is a plea, and in the fourth it is nothing at all.'],
  ['Nour', 'And if there is an _if_ in the second paragraph of a report at TechCare, the whole page is read as a defence. I have seen it happen to a man who had nothing to defend.'],
  ['Yara', 'What order do students write them in?'],
  ['Ms Huda', 'Ask the room.'],
  ['Omar', 'Two. What I got wrong, first, because it is the thing you are afraid of.'],
  ['Rasha', 'Or three, if you are angry about what it cost.'],
  ['Ms Huda', 'And both of those make the reader distrust the facts, because the facts arrive after an argument has started. One, two, three, four. The facts, then what you got wrong, then the cost, then the change — and the one at the end is the only one the reader can do anything with.'],
  ['Yara', 'Then my first paragraph has no _I_ in it at all.'],
  ['Ms Huda', 'Your first paragraph has a shelf, a time, a date and four samples in it. The _I_ starts in the second paragraph and it finishes at the end of the third, and the fourth is about Monday.'],
  ['Lubna', 'That is the shape of every incident report I have ever been given to read, and I had never seen the order before.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The honest report: four headings, in order**',
  table(['heading', 'what goes in it'], [
    ['**1 What happened**', 'facts, times, dates, counts. No _I_ if you can manage it'],
    ['**2 What I got wrong**', 'your decision, and **one** third conditional — what you now know'],
    ['**3 What it cost**', 'counted, by person or by day, with no adjectives'],
    ['**4 What changes**', 'from Monday, by whom, and what you are doing yourself'],
  ], [1.9, 2.7]),
  '**The order is the technique.** Facts first, because a reader who is given an argument before a fact distrusts the fact. Students write heading 2 first, because it is the thing they are afraid of, or heading 3 first, because they are angry — and both make the page a defence.',
  '**One third conditional, in heading 2.** _If I had checked the corridor in August, I would have found this two months earlier._ That sentence is the whole value of the admission, and a second one turns the paragraph into a case.',
  '⚠ **No _if_ in heading 1.** The facts do not need a reason attached. ⚠ **No wish anywhere.** A wish on a page other people read makes them manage your feelings.',
  '**Count the cost without adjectives.** _Four samples delayed by eighteen hours; an unknown number of bags over two years._ ⚠ Not _serious delays_ and not _unacceptable_. And where the number is unknown, **say that it is unknown** and say why.',
  '**Heading 4 must contain something you are doing yourself, with a date.** A report that ends with what other people should do is a report that ends.',
  '**Useful phrases:** everything I write turns into an explanation · the facts arrive after an argument has started · your first paragraph has a shelf, a time, a date and four samples in it · the only one the reader can do anything with.',
  '**Practise:** Sort these into the four headings.  1 _I did not check it in August._  2 _A bag of four samples was on the shelf at 15.10._  3 _I ranked three possibilities and left this one out._  4 _From Monday the time goes on the bag._  5 _Four samples were eighteen hours late._  6 _The number of bags over two years is unknown._',
  '**Pronunciation.** 🔊 **Track 15.12** Reading your own mistake aloud: heading 2 is read at **the same speed and volume** as heading 1, with no pause before it and none after. A pause before an admission is an apology and the page has already made one. Listen to four readings and mark the one that is read straight through.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says which of the four headings it belongs under and why. Where it belongs under none, B says what is wrong with it. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Heading __________, because __________.'],
  ['A', 'And if it belongs nowhere?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the sentences', 'Card B – the sentences'], [
  ['If anybody had told me, this would not have happened.', 'A bag of four samples was on the shelf at 15.10 on 29 October.'],
  ['I wish I had checked it in August.', 'From Monday the time goes on the bag when it reaches the bench.'],
  ['The delays have been completely unacceptable.', 'I ranked three possibilities in September and left this one out.'],
  ['The number of bags over two years is unknown.', 'Four samples were released eighteen hours later than they should have been.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the sentences that belong **nowhere** — the wish, the adjective, the wide third conditional — and say what each one would do to a reader. Three of the eight belong nowhere, and all three would appear in a first draft of anybody\'s report.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing you have been writing about since 15.1 and say it under the four headings, out loud, in order, with one third conditional and no wishes. Your partner stops you the moment an argument arrives before a fact.'));
out.push(p('**b**  Swap. Then each of you say which heading the other found hardest, and which one they finished fastest.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara has to write the bag up for the laboratory and her problem is the problem of the whole unit: everything she writes turns into an explanation. She starts with the bag and by the third sentence she is writing about being new, and about the door, and about the porter not telling anybody — all true, and none of it a report. Nour said put the facts first with no sentences about yourself in them, and Yara said that is what she tried, and then the facts have no reason in them and the man reading it will ask why nobody noticed for two years. So Ms Huda gave four headings in a fixed order, and the order is the technique: what happened, what I got wrong, what it cost, what changes. Jad asked about the conditionals, and she said in the second heading only, and once — what I got wrong is the only paragraph where "if I had" belongs, because it is the paragraph about what you now know; in the first paragraph it is an excuse, in the third a plea, and in the fourth nothing at all. Nour said that at TechCare an "if" in the second paragraph makes the whole page read as a defence, and she has seen it happen to a man who had nothing to defend. Then Ms Huda asked the room what order students write them in: Omar said two first, because it is the thing you are afraid of, and Rasha said three first, if you are angry about what it cost — and both make the reader distrust the facts, because the facts arrive after an argument has started. One, two, three, four, and the fourth is the only one the reader can do anything with. Yara said then her first paragraph has no "I" in it at all, and Ms Huda said it has a shelf, a time, a date and four samples in it: the "I" starts in the second paragraph and finishes at the end of the third, and the fourth is about Monday. Lubna said that is the shape of every incident report she has ever been given to read, and she had never seen the order before._'));
out.push(p('**Listener task:** write the one sentence somebody moved from heading 1 to heading 2.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Yara\'s report. Answer the questions.'));
out.push(model([
  '**DELAYED AFTERNOON SAMPLES · REPORT** · Y. Mansour, laboratory · 2 November · copy to the pathology office and to the head porter',
  '**1 · What happened.** On 29 October at 15.10 a bag containing four samples from ward six was found on the shelf by the second-corridor lift. The samples had been collected at 14.35 and were released at 09.40 the following morning, eighteen hours after collection. The laboratory door is shut at 15.00 for the afternoon analyser run. The porter on that round states that he has left bags on that shelf when the door is shut for about two years and believed that the laboratory was aware of it. A bag was also found on that shelf by this writer on 14 June last year, and in August of this year.',
  '**2 · What I got wrong.** In September I wrote a note for ward six giving three possible causes of a day\'s delay on afternoon samples, ranked them, and marked the porters\' round as the one I had not checked. I had found a bag on that shelf myself sixteen months earlier and I did not include that fact in the note. If I had checked the corridor in August, when I wrote that I had not, the two years would have ended two months earlier.',
  '**3 · What it cost.** Four samples delayed by eighteen hours on 29 October. The number of bags left on that shelf in two years is **unknown and cannot be reconstructed**: the bags carry no time and no record was kept at either end. On the basis of three afternoons of observation in October, in which one bag was found, the figure is not negligible and I will not put a number on it.',
  '**4 · What changes.** From Monday 4 November the time is written on every bag as it reaches the bench — one line in the book we already keep — for two weeks, after which we will know how many and how late. The loading time of 15.00 goes on the laboratory door; I have asked the office for a sign and if it has not come by Monday I will write one and put it there myself. And the head porter is copied in on this report, which is the first time anybody in a white coat has written to him about this shelf.',
]));
out.push(item('1', 'How many facts are in heading 1 with no _I_ in them, and where does the first _I_ appear?'));
out.push(item('2', 'What does she refuse to put a number on, and why?'));
out.push(item('3', 'What are the three things in heading 4, and which one is hers?'));
out.push(writers([
  'The honest report: **1 what happened** (facts, times, counts, no _I_) → **2 what I got wrong** (your decision, and one third conditional) → **3 what it cost** (counted, and _unknown_ where it is unknown) → **4 what changes** (from a date, with one thing that is yours).',
  'Put the **other person\'s statement** in heading 1, not in heading 2. _The porter states that he has left bags there for about two years and believed the laboratory was aware._ In heading 1 it is a fact; moved into heading 2 it becomes a way of sharing the blame.',
  'Refuse the number you have not got, and say why you are refusing it: _unknown and cannot be reconstructed: the bags carry no time and no record was kept at either end._',
  '⚠ Copy in the person nobody writes to. _The head porter is copied in, which is the first time anybody in a white coat has written to him about this shelf._ That line does more for the problem than the rest of the page.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the report under the four headings (60 words or more).'));
out.push(p('**______________ · REPORT** · ______________ · copy to ______________   **1 · What happened.** On ______________ at ______________, ______________. ______________ states that ______________ and believed that ______________.   **2 · What I got wrong.** In ______________ I ______________. I had ______________ and I did not ______________. If I had ______________, ______________ would have ______________.   **3 · What it cost.** ______________. The number of ______________ is **unknown and cannot be reconstructed**: ______________. I will not put a number on it.   **4 · What changes.** From ______________ the ______________ — one line in ______________ — for ______________, after which we will know ______________. ______________; I have asked ______________ and if it has not come by ______________ I will ______________ myself. And ______________ is copied in on this report, which is the first time ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Heading 1 with facts, times and counts — and no _if_ and no _I_',
  'One third conditional, in heading 2, about what you now know',
  'The cost counted, and _unknown_ written where it is unknown',
  'Heading 4 with a date, and one thing that is yours to do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read heading 2 only — one paragraph each, at normal speed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full report (140 words or more) on something that went wrong where you work and where some part of it was yours. Four headings, one conditional, no wishes, and one thing in heading 4 that you are doing yourself. Then write underneath who you are going to copy in who has never been written to.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s report as **the person who has to file it**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the first sentences of heading 1.** Then count: how many of them have an _I_ in them, and how many have a time and a date? The reports with a time and a date and no _I_ are the ones a stranger will act on, and the room can hear the difference in eleven sentences.'));
out.push(hw('Write the report (60+ words) under the four headings and send it, with the copy to the person nobody writes to. Bring what came back, including nothing.'));

// ======================= 15.7 =======================
out.push(pb());
out.push(h2('15.7  Review & Mediate: What went wrong, and what I would do differently'));
out.push(p('**Function:** explaining what went wrong and what you would do differently   ·   **Recycling:** Units 1–15   ·   **Exam practice:** B1 Preliminary Reading Part 6, Writing Part 1, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 15 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I should asked in April.  **2** If I would have asked, I would have had them.  **3** I wish I would have counted.  **4** If I had started then, I would have had six years now.  **5** I should of read the page.  **6** I wish I know who holds the file.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the page that was pinned up in the corridor of a depot in Harasta. It is somebody else\'s honest report, and it is not a good one.'));
out.push(box(null, [
  '**DEPOT NOTICE · THE MORNING OF 12 MAY · A SUMMARY FOR ALL STAFF** _(unsigned, posted 3 June)_',
  '**1** Unfortunately, following the unexpected closure of the Harasta road on the morning of 12 May, a regrettable breakdown in communication occurred.',
  '**2** Although every effort was made, it was not possible to inform the depot in a timely manner, and four services were despatched that would not otherwise have been despatched.',
  '**3** If the correct procedures had been followed, this situation would not have arisen.',
  '**4** It is accepted that lessons must be learned, and staff are reminded of the importance of communication at all times.',
  '**5** Measures will be put in place to ensure that a similar situation does not recur in the future.',
  '**6** The management wishes to thank all staff for their patience and understanding during this difficult period.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Tareq and Lubna take the notice apart. How many facts are in it, and which sentence does Tareq say is the one that made him angry?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.13  Six sentences and no facts', [
  ['Ms Huda', 'Tareq brought this in. Read the first sentence and count the facts in it.'],
  ['Tareq', '"Unfortunately, following the unexpected closure of the Harasta road on the morning of 12 May, a regrettable breakdown in communication occurred." One fact. The road was closed on the twelfth of May.'],
  ['Lubna', 'And the rest of the notice?'],
  ['Tareq', 'Four services despatched, in sentence two. That is two facts in six sentences, and I know a third one which is not on there: the call was made at six minutes past six to an office with nobody in it.'],
  ['Nour', 'Who wrote it?'],
  ['Tareq', 'It is unsigned. That is the first thing I noticed and it took me three weeks to understand why it matters.'],
  ['Ms Huda', 'Go on.'],
  ['Tareq', 'Because every sentence in it is in the passive and there is nobody in any of them. A breakdown occurred. It was not possible to inform. Procedures had not been followed. Measures will be put in place. Six sentences, four passives, no person — and the one place where there is a person is sentence four, where it is us: _staff are reminded of the importance of communication._'],
  ['Lubna', 'Which is the sentence that made you angry.'],
  ['Tareq', 'That is the sentence that made me angry, and it took me a month to work out that I was not angry about being blamed. I was angry because I had made the call and nobody had asked me what time I made it.'],
  ['Ms Huda', 'Now the third conditional. Sentence three.'],
  ['Tareq', '"If the correct procedures had been followed, this situation would not have arisen." It is the wide version, it is in the first half of the page, and it names nobody. And what it says is not true: I followed the procedure exactly. The procedure is to telephone the depot, and I telephoned the depot, and the procedure does not say anything about what to do when the telephone is answered by an empty room.'],
  ['Nour', 'So the conditional is wrong on the facts as well as in the wrong place.'],
  ['Tareq', 'The conditional is doing the whole work of the notice. It puts the fault on a procedure that was followed, in the passive, in the third sentence, before anybody has been given a single fact — and then sentence five promises measures and sentence six thanks us for our patience.'],
  ['Ms Huda', 'Rewrite sentence one and sentence three, out loud, as heading 1 and heading 2 of an honest report.'],
  ['Tareq', 'One: the Harasta road was closed at 06.00 on 12 May. A call was made to the depot at 06.06 and was not answered; the office is unstaffed before 06.30. Four services were despatched and the first report reached the depot at 09.40. Two: the procedure requires a telephone call and does not provide for the call being unanswered. I made the call and I did not send anything in writing, and if I had sent one line that morning, the depot would have had it at 06.30 with the staff who arrived.'],
  ['Ms Huda', 'That is six lines and it has eight facts in it, and the person who wrote the notice could have had every one of them by asking you one question.'],
]));
out.push(sp());
out.push(box('Language box – reading somebody else\'s account of what went wrong', [
  '**Count the facts.** Times, dates, counts, names. A page of six sentences with two facts in it is not an account; it is a position. Do the counting first and nothing else, and do it before you decide whether you are angry.',
  '**Find the people, by counting the passives.** _A breakdown occurred · it was not possible to inform · procedures had not been followed · measures will be put in place._ Four sentences with nobody in them, and then watch for the one sentence where a person **does** appear — it is usually the reader.',
  '**Look for the wide third conditional in the first half.** _If the correct procedures had been followed, this situation would not have arisen._ It is doing the work of the whole page: it puts the fault somewhere unnamed before the reader has a single fact, and it is often not even true.',
  '**Then ask what nobody asked.** The writer of a notice like this nearly always had one telephone call available to them that would have produced four facts. _Nobody had asked me what time I made the call._',
  '**And rewrite two sentences, not six.** Heading 1 with the facts and the times; heading 2 with the decision and one narrow conditional. Two sentences, and the page becomes something a stranger can act on.',
  '**Useful phrases:** it is unsigned, and it took me three weeks to understand why that matters · six sentences, four passives, no person · I was not angry about being blamed, I was angry because nobody asked me what time I made the call · the conditional is doing the whole work of the notice.',
  '**Pronunciation.** 🔊 **Track 15.14** Reading somebody else\'s bad notice aloud without sneering: flat, at normal speed, with no weight on _unfortunately_ or _regrettable_. The page condemns itself if it is read plainly, and a reader who performs it loses the room. Listen to four and mark the two that are read plainly.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the notices below and does **not** show it. A reads it once, then explains it: how many facts, how many passives, where the wide conditional is, and what nobody asked. B must say what the page would look like under the four headings. **Then, in two minutes together**, decide the two questions you would ask the person who wrote it. You do not have to agree. Change roles with the other notice.'));
out.push(table(['Notice A – a laboratory circular', 'Notice B – a school letter to parents'], [
  ['Regrettably, delays in the issuing of results have occurred.', 'Unfortunately, a number of pupils did not receive their results on the expected date.'],
  ['It was not possible to process all samples within the stated time.', 'Every effort was made to issue the results promptly.'],
  ['Had the samples been submitted correctly, the delays would not have arisen.', 'Had the forms been returned on time, this would not have occurred.'],
  ['Staff are reminded of the importance of correct labelling.', 'Parents are reminded to check the school diary daily.'],
  ['Steps are being taken to address the matter.', 'The matter is being looked into.'],
  ['Thank you for your understanding at this busy time.', 'Thank you for your continued support.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the two questions each pair decided to ask. In almost every run one of the questions is **what time did it actually happen**, and the other is **who wrote this** — and both are questions the page has been written to prevent.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring, or write out from memory, a notice, circular or summary somebody has posted about something that went wrong where you work. Explain it to your partner **without showing it**: the facts, the passives, the conditional, the sentence where a person appears, and what nobody asked. They must ask: _how many facts?_, _who is in it?_ and _what would you have told them if they had asked you?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Tareq brought in a notice that was posted in the depot corridor on the third of June about the morning of the twelfth of May, unsigned. Six sentences. He counted the facts: the road was closed on the twelfth of May, and four services were despatched. Two facts in six sentences — and he knows a third that is not on it, which is that the call was made at six minutes past six to an office with nobody in it. The notice is unsigned, which was the first thing he noticed and which took him three weeks to understand, because every sentence is in the passive and there is nobody in any of them: a breakdown occurred, it was not possible to inform, procedures had not been followed, measures will be put in place. Four passives, no person — except in sentence four, where the person is the staff: staff are reminded of the importance of communication. That is the sentence that made him angry, and he said it took him a month to work out that he was not angry about being blamed: he was angry because he had made the call and nobody had asked him what time he made it. Then sentence three: if the correct procedures had been followed, this situation would not have arisen — the wide version, in the first half of the page, naming nobody, and not true, because he followed the procedure exactly. The procedure is to telephone the depot and he telephoned the depot, and it says nothing about what to do when the telephone is answered by an empty room. So the conditional is doing the whole work of the notice: it puts the fault on a procedure that was followed, in the passive, before the reader has a single fact. Ms Huda made him rewrite two sentences as headings one and two, and his version has eight facts in six lines — and the person who wrote the notice could have had every one of them by asking him one question. So I decided to ask the person who posted ours what time the thing happened, because there is no time on it anywhere._'));
out.push(p('**Listener task:** how many facts, and what did nobody ask?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 6)', 7));
out.push(p('Write **one** word in each gap (**1–6**).'));
out.push(box(null, [
  '**WHY MOST NOTICES ABOUT MISTAKES ARE USELESS**',
  'A notice posted after something has gone wrong is read **(1)** ______ the people it is about, and they read it for one thing: a time. If there is no time in it, they know within four seconds what kind of page they are holding.',
  'The commonest fault is not dishonesty. It is the passive. _A breakdown occurred_ and _measures will be put in place_ are sentences with nobody in them, **(2)** ______ that a reader cannot tell who did what, or who is now doing anything. Four such sentences in a row, **(3)** ______ by one sentence in which a person finally appears — and that person is the reader, who is reminded of the importance of something.',
  'The second fault is a conditional in the wrong place. _Had the forms been returned on time, this would not have occurred_ arrives before the reader has been given a single fact, **(4)** ______ puts the fault somewhere unnamed — and it is frequently untrue, **(5)** ______ nobody has checked it with the person who returned the forms.',
  'The remedy takes two sentences. Facts first, with times and counts and no excuses; then one sentence about what the writer got wrong, with **(6)** ______ most one conditional in it. Everything else on the page can go.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining somebody else\'s notice to a person who has to answer it (60 words or more).'));
out.push(p('The notice went up on ______________ and it is ______ sentences long.   **The facts in it.** ______ of them: ______________ and ______________. The fact that is not in it is ______________.   **The people in it.** ______ passives with nobody in them — ______________, ______________, ______________ — and one sentence where a person appears, which is ______________, and the person is ______________.   **The conditional.** ______________. It is in sentence ______, before any fact, it names nobody, and ______________.   **What nobody asked.** ______________. ______________ could have had ______________ by asking ______________ one question.   **The two sentences I would write instead.** ______________. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The facts counted, and the missing fact named',
  'The passives counted, and the one sentence with a person in it',
  'The conditional located, and said to be wide, early or untrue',
  'Two replacement sentences — facts, then what the writer got wrong',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"Something went wrong at work and it was partly my fault. My manager has asked me to write a short account of it. I have written three versions and they all sound like excuses, and the last one has four sentences beginning \'if\'. What should the thing actually look like? Sam"_',
  '**Your notes:**  •  _Give him the four headings, in order_  ·  _Tell him where the one _if_ sentence goes, and why_  ·  _Tell him what to do about a number he has not got_  ·  _Give him one example of your own, with a date in it_',
  'Write your email to Sam using **all four** notes. Write **140 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 15 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ for the notes in April.   a) should asked   b) should have asked   c) should of asked',
  '2  If I ___ in April, I would have had fourteen of them.   a) had asked   b) would have asked   c) asked',
  '3  If I had started it in 2015, I ___ eleven years of figures now.   a) would have had   b) had   c) would have',
  '4  I wish I ___ it in August.   a) had checked   b) would have checked   c) have checked',
  '5  I wish I ___ how many there have been.   a) know   b) knew   c) had known',
  '6  She ___ have seen the pattern if anybody had counted.   a) will   b) had   c) would',
  '7  ___ only somebody had written it down.   a) If   b) Had   c) When',
  '8  That was wrong, ___ the page was on my counter for five weeks.   a) but   b) and   c) although',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 3 style – note completion).** 🔊 **Track 15.15** You will hear a woman reporting something that went wrong in a laboratory. Write **one or two words or a number** in each gap.'));
out.push(box('DELAYED AFTERNOON SAMPLES', [
  'Date the bag was found: **(1)** ______ October',
  'Number of samples in the bag: **(2)** ______',
  'Hours between collection and release: **(3)** ______',
  'The laboratory door is shut at **(4)** ______ for the analyser run',
  'The porter has been leaving bags there for about **(5)** ______ years',
  'From Monday the **(6)** ______ goes on every bag',
], C.lyellow, C.orange));
out.push(dlg('Track 15.15  Audio script (read after the check)', [
  ['Yara', 'On the twenty-ninth of October, at ten past three, I found a bag on the shelf by the second-corridor lift with four samples in it from ward six. They had been collected at twenty-five to three and they were released at twenty to ten the next morning, which is eighteen hours after collection. The laboratory door is shut at three o\'clock for the afternoon analyser run, and the porter on that round has been leaving bags on that shelf when the door is shut for about two years, and believed we knew. I had found a bag on that shelf myself in June of last year and I said nothing. In September I wrote a note for a ward giving three possible causes and I left this one out of all three, which is the part that is mine. From Monday the time goes on every bag as it reaches the bench, for two weeks, and then we will know how many and how late. The number of bags in two years is unknown and cannot be reconstructed, because the bags carry no time and nobody kept a record at either end.'],
]));
out.push(p('**C  Writing.** Write the honest report (140+ words) on something that went wrong where some part of it was yours: the four headings in order, facts with times and counts in heading 1, one third conditional in heading 2, the cost counted in heading 3 with _unknown_ where it is unknown, and one thing in heading 4 that you are doing yourself, with a date.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 15)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I should have done, with a date on it',
  '☐ make a third conditional I can defend, and stop where the consequence is in somebody\'s head',
  '☐ say what I would have today if I had started something then',
  '☐ apologise by naming the thing, counting the cost, and leaving the _but_ out',
  '☐ say what I wish, and use it to find what I knew and did not use',
  '☐ write the four headings of an honest report in the right order',
  '☐ keep the one conditional in heading 2 and the wishes off the page altogether',
  '☐ read somebody else\'s notice and count the facts, the passives and the people',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 16 – COMPARING AND EVALUATING', [
  '_not as … as · far more · slightly less · one of the best · by far the · the more … the more · in terms of._ Unit 15 was about one past event. **Unit 16** is about putting two things side by side and reaching a verdict — which is the other half of what a decision is made of.',
  '**16.6 writes a comparison that reaches a verdict**, and **16.7** takes apart a comparison table and asks what has been left out of the columns. The exam practice is Reading Part 3 and Listening Part 4.',
  '**Bring a comparison somebody else has made:** two quotations, two suppliers, two schools, two machines, two routes, two candidates — anything where somebody has put two things side by side on paper and recommended one of them. And bring one comparison of your own that you have never written down.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 15 · Student\'s Book');
