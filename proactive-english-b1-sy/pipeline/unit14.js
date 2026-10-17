// Proactive English B1 · Syria Edition · Book 2 · Unit 14 — Student's Book
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

out.push(h1('Unit 14  Predictions and Probability'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**14.1**  predict',
  '**14.2**  hedge a prediction',
  '**14.3**  say how likely something is',
  '**14.4**  put the adverb in the right place',
  '**14.5**  say what you expect by a point in time',
  '**14.6**  write a forecast',
  '**14.7**  Review & Mediate: explain a forecast and say how far to trust it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The prediction board.** In **14.1** every student writes one prediction on a sheet that stays on the wall of Room 14: the prediction, the date it can be tested, and a name. Nothing is sealed and nothing is secret. It is read again in **18.7** and in **23.7**, and the question both times is not who was right — it is **what kind of thing this room is wrong about**.',
  '**Six ways to say how sure you are, and they are not interchangeable.** _It will · it won\'t · it may · it might · it could · it is likely to · there is a chance that._ A speaker who has only _maybe_ sounds unsure of everything, including the things they know.',
  '**And the thing that makes a prediction worth reading: the assumptions.** **14.6** writes a forecast — a number about the future with the three or four things it depends on written underneath it, so that a reader can see which of them to doubt. A forecast with no assumptions under it is a guess in a suit.',
  '**14.7 reads Rasha\'s September report** in front of two people who were not in the room, which is what every report eventually gets. The question is whether a stranger can tell the difference between a number and a hope.',
], C.lyellow, C.orange));

// ======================= 14.1 =======================
out.push(pb());
out.push(h2('14.1  The prediction board'));
out.push(p('**Function:** predicting   ·   **Grammar:** _will_ and _won\'t_ for predictions   ·   **Pronunciation:** the contracted _\'ll_ and the full _won\'t_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the prediction you brought — one you made out loud this year that turned out to be **wrong**. Your teacher writes the eleven on the board and then asks one question about each: _what would you have had to know, in order to get it right?_'));
out.push(board('It won\'t be the rota. By the end of October we will know.', 'will · won\'t + a test date'));
out.push(p('**b**  Prediction, intention or arrangement? **1** _They will refuse._  **2** _I am going to ask again._  **3** _It won\'t be finished by October._  **4** _I am seeing them on the fifteenth._  **5** _Nobody will read it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What goes on the wall of Room 14, and what are the three rules for it?   **A** predictions, with a date and a name   **B** results, with a mark   **C** the class\'s homework'));
out.push(p('**b**  Listen again. **1** What does Rasha predict about the committee, and what does she say she cannot predict?   **2** Why does Ms Huda say a prediction without a date on it is worthless?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.1  Write it on the wall', [
  ['Ms Huda', 'There is a sheet of paper on that wall and it will be there until June. Everybody writes one prediction on it: what you think will happen, the date it can be tested, and your name. Three rules. It has to be about something you will find out. It has to have a date. And nobody takes anything down.'],
  ['Omar', 'Why the name?'],
  ['Ms Huda', 'Because an unsigned prediction is a conversation and a signed one is a record, and this room has spent a year finding out what the difference is worth.'],
  ['Rasha', 'Mine is about the fifteenth, which has already happened, so I will give you the one after it. The committee had my report on the fifteenth. I predict that by the end of October they will extend the trial to the whole of nights and that they will not say the blocks are the cause — and the second half of that is the important half.'],
  ['Jad', 'Why will they extend it if they will not say why it works?'],
  ['Rasha', 'Because extending it costs them nothing and agreeing a cause costs them an argument with the people who wrote the old rota. A committee will nearly always do the thing that commits it to the least.'],
  ['Ms Huda', 'And what can you not predict?'],
  ['Rasha', 'The trolley. I cannot predict whether the second trolley stays, and it is the half of the answer that belongs to a different office. I will write that on the sheet too: _I do not know and I will not know by October._'],
  ['Umm Kinan', 'Mine is the twenty-seventh of October. I predict that the meeting will happen, because I have a date in writing, and that nothing will be decided at it.'],
  ['Nour', 'That is a very low prediction.'],
  ['Umm Kinan', 'It is an honest one. The scheme comes from the directorate and a department meeting cannot change a directorate\'s scheme, so what the meeting can produce is a letter. If it produces a letter with a date in it, I will have got more than I predicted, and I would rather be surprised upwards.'],
  ['Mazen', 'Mine is about the batch numbers. Issam Haddad asked me which batch my fifteen came from and I do not know, and the shops have the delivery notes. I predict that at least twelve of the fifteen are from one batch, and I will know by the end of the month, because I am going to the two shops on Friday.'],
  ['Ms Huda', 'And if it is nine out of fifteen?'],
  ['Mazen', 'Then it is not a batch, it is a model, which is a bigger problem and a worse letter to write.'],
  ['Tareq', 'I predict the Harasta road will be closed again before the end of November, and I am not guessing: it has been closed in November for three of the last four years, and the resurfacing on the south side has not been done.'],
  ['Ms Huda', 'Now notice what has happened to five predictions in nine minutes. Every one of them has a **date** on it, and every one of them has a **reason** underneath it, and two of them say what the speaker will not know. A prediction with no date is not a prediction; it is an opinion that cannot be tested, and we have a whole unit for opinions and it was Unit 12.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _will_ and _won\'t_ for predictions**',
  table(['you say', 'what it does'], [
    ['_They **will** extend the trial._', 'a prediction you are prepared to sign'],
    ['_They **won\'t** say the blocks are the cause._', 'a negative prediction — often the stronger half'],
    ['_It **will** be closed before November._', 'prediction from a pattern you can name'],
    ['_I **won\'t** know by October._', 'a prediction about your own knowledge'],
  ], [2.5, 2.1]),
  '**A prediction needs three things: a claim, a date it can be tested, and a reason.** _They will extend it_ is a remark. _They will extend it by the end of October, because extending costs them nothing and agreeing a cause costs them an argument_ is a prediction, and it can be wrong, which is what makes it worth writing down.',
  '**The negative prediction is usually the useful one.** _They won\'t say why_ · _nobody will read it_ · _it won\'t be finished by October._ It is also the one people avoid writing down, because it is the one that sounds like pessimism until the date arrives.',
  '**Say what you will not know.** _I cannot predict whether the trolley stays, and I will not know by October._ A forecast that marks its own blind half is trusted; one that covers everything is not.',
  '⚠ ~~It will be closed, I think so~~ → _I think it will be closed_ · _it will probably be closed_. One marker of doubt, not two (1.5, and 14.4).',
  '⚠ ~~They will to extend it~~ · ~~they will extending~~ → _will_ + bare infinitive.',
  '⚠ Do not use _will_ for something already arranged (13.1) or already decided (13.2). _Will_ here is about what you think the world will do, not about what you have planned.',
  '**Useful phrases:** an unsigned prediction is a conversation and a signed one is a record · a committee will nearly always do the thing that commits it to the least · I would rather be surprised upwards · I do not know and I will not know by October.',
  '**Practise:** Make each one a prediction with a date and a reason.  1 _They will refuse._  2 _Nobody will read it._  3 _The road will be closed._  4 _It will not be finished._  5 _Somebody will ask about the trolley._',
  '**Pronunciation.** 🔊 **Track 14.2** In a prediction _will_ contracts to /l/ and almost disappears — _they\'ll extEND it_ — and _won\'t_ is said in full and stressed, because it carries the whole meaning: _they WON\'T say why._ Students give _will_ full value and swallow _won\'t_, which is the wrong way round in both cases. Listen to eight and write _will_ or _won\'t_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the bare prediction from the card. B makes it a real one: a claim, a date it can be tested, and a reason. A then asks the hard question: _and what will you not know by then?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I predict __________ by __________, because __________.'],
  ['A', 'What will you not know by then?'],
  ['B', '__________.'],
  ['A', 'Would you sign it?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – bare predictions', 'Card B – bare predictions'], [
  ['They will refuse.', 'Nobody will read it.'],
  ['It will not be finished in time.', 'Somebody will ask about the trolley.'],
  ['The road will be closed again.', 'They will not give a reason.'],
  ['He will not answer.', 'It will cost more than they said.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight reasons and mark each one _a pattern_ (it has happened before, and how often) or _a judgement_ (this is what people like that do). Both are legitimate; a prediction built on a pattern can be checked afterwards and a prediction built on a judgement cannot, which is why the first kind is worth more on a wall.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your prediction for the board: the claim, the date, the reason, your name — and the sentence saying what you will **not** know by that date. Read it out as you pin it up.'));
out.push(p('**b**  Swap with a partner and each of you say which half of the other\'s prediction you would bet against.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda put a sheet of paper on the wall that will be there until June. Everybody writes one prediction on it — what they think will happen, the date it can be tested, and their name — and there are three rules: it has to be about something you will find out, it has to have a date, and nobody takes anything down. Omar asked why the name, and she said that an unsigned prediction is a conversation and a signed one is a record, and this room has spent a year finding out what the difference is worth. Rasha gave the prediction after the fifteenth: by the end of October the committee will extend the trial to the whole of nights, and they will not say the blocks are the cause — and the second half is the important half. Jad asked why they would extend it without saying why it works, and she said because extending costs them nothing and agreeing a cause costs them an argument with the people who wrote the old rota: a committee will nearly always do the thing that commits it to the least. What she cannot predict is the trolley, which belongs to a different office, so she is writing that on the sheet as well — I do not know and I will not know by October. Umm Kinan predicted that the meeting on the twenty-seventh will happen, because she has a date in writing, and that nothing will be decided at it; Nour said that is a very low prediction, and Umm Kinan said it is an honest one, because a department meeting cannot change a directorate\'s scheme, so what it can produce is a letter — and if it produces a letter with a date in it she will have got more than she predicted, and she would rather be surprised upwards. Mazen predicted that at least twelve of his fifteen handsets are from one batch and that he will know by the end of the month, because he is going to the two shops on Friday for the delivery notes; and if it is nine out of fifteen then it is not a batch but a model, which is a bigger problem and a worse letter to write. And Tareq predicted that the Harasta road will be closed again before the end of November, and said he is not guessing: it has been closed in November in three of the last four years and the resurfacing on the south side has not been done. Ms Huda said to notice that every one of the five has a date on it and a reason underneath it, and that two of them say what the speaker will not know — and that a prediction with no date is not a prediction, it is an opinion that cannot be tested, and we had a whole unit for opinions and it was Unit 12._'));
out.push(p('**Listener task:** write the prediction from this room that you would bet against, and why.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet that goes up on the wall. Answer the questions.'));
out.push(model([
  '**ROOM 14 · THE PREDICTION BOARD** · September · read again in February and in June',
  '**Rules.** One prediction each. It must be about something we will find out. It must have a date. Nobody takes anything down, including the person who wrote it.',
  '**R. Barakat · test date 31 October.** The committee will extend the three-night trial to all night staff, and will not accept that the blocks are the cause. _Reason:_ extending costs nothing; a cause costs an argument with whoever wrote the old rota. _What I will not know by then:_ whether the second trolley stays. That belongs to a different office.',
  '**S. Dibo · test date 27 October.** The meeting will take place and nothing will be decided at it. _Reason:_ the scheme is the directorate\'s and a department cannot alter it, so the most the meeting can produce is a letter. _What would surprise me upwards:_ a letter with a date in it.',
  '**M. Hariri · test date 30 September.** At least twelve of the fifteen handsets came from one batch. _Reason:_ all fifteen were bought from two shops in three months, and both shops take their stock from the same distributor. _If it is nine or fewer:_ it is the model and not the batch, and that is a bigger problem.',
  '**T. Ayoub · test date 30 November.** The Harasta road will be closed again before November is out. _Reason:_ closed in November in three of the last four years, and the south-side resurfacing has not been done.',
  '**J. Attar · test date 1 June.** I will not have telephoned anybody in English by June. _Reason:_ I wrote that in April of last year and it was the only one of four I got wrong, so I am writing it again to see whether I get it wrong twice.',
  '**And one from the teacher, because I am not standing outside this.** **H. Saleh · test date 1 June.** Eight of these eleven predictions will be wrong in the second half and right in the first — right about the event and wrong about the reason. _Reason:_ that is what happened on my own sheet for the last six years.',
]));
out.push(item('1', 'What are the three rules, and why is there a name on every line?'));
out.push(item('2', 'Which two predictions say what the writer will not know, and what do they say?'));
out.push(item('3', 'What does the teacher predict about the class\'s predictions?'));
out.push(writers([
  'A prediction worth pinning up: **the claim** → **the date it can be tested** → **the reason, which is a pattern or a judgement and says which** → **and what you will not know by then**.',
  'Write the **negative half** where you have one. _And will not accept that the blocks are the cause_ is the half that will be right, and the half nobody says out loud in September.',
  'Add the line that marks your own blind spot: _what I will not know by then · what would make me wrong · what would surprise me upwards_. Three different sentences, all of them worth more than the prediction.',
  '⚠ And do not predict something you cannot find out. _People will not change_ is untestable and therefore free. _The complaints will fall by a third by the thirty-first of December_ costs something to write.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write three predictions for your own wall, with everything each one needs (60 words or more).'));
out.push(p('**______________ · THE PREDICTION BOARD** · ______________   **1 · test date ______________.** ______________, and ______________ will not ______________. _Reason:_ ______________. _What I will not know by then:_ ______________.   **2 · test date ______________.** ______________. _Reason:_ ______________. _What would make me wrong:_ ______________.   **3 · test date ______________.** ______________. _Reason:_ ______________, and ______________ in ______ of the last ______ years. _What would surprise me upwards:_ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A date on every prediction, and it is a date you will reach',
  'A reason under each one, marked _pattern_ or _judgement_',
  'At least one negative prediction',
  'A line saying what you will not know, or what would make you wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their negative predictions only — the _won\'t_ half.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the prediction board for something you are inside — your department, your shift, your family, your trade, this city\'s traffic (140 words or more). Five or six predictions, each with a date, a reason and a blind half. Then write one line underneath saying which of them you most want to be wrong about.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s board as **somebody who will be shown it again in June**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Count the dates.** Then count the predictions with a **pattern** under them rather than a judgement, and write the two numbers at the top of the sheet. In February the room reads the sheet again, and the question will be whether the pattern predictions did better.'));
out.push(hw('Write the three predictions you would pin up at work (60+ words), each with a date, a reason and a blind half. Give one of them to somebody who will remember it, and write down what they said.'));

// ======================= 14.2 =======================
out.push(pb());
out.push(h2('14.2  It may be the afternoon run'));
out.push(p('**Function:** hedging a prediction   ·   **Grammar:** _may · might · could_   ·   **Pronunciation:** the stress that separates _may_ from _may not_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six flat predictions from the board — _they will refuse · nobody will read it_ — and the class hedges each one three ways: _they may refuse · they might refuse · they could refuse_. Then the question: is there any difference between the three, and if there is, what is it?'));
out.push(board('It may be the afternoon run. It might be the tube. It could be both.', 'may · might · could + bare infinitive'));
out.push(p('**b**  Hedged or flat? **1** _It will be the afternoon run._  **2** _It may be the afternoon run._  **3** _It could be the tube._  **4** _It might not be either._  **5** _It cannot be the tube._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Yara trying to explain, and why will she not say _it is_?   **A** a delay in the laboratory   **B** a fault in a machine   **C** a mistake she made'));
out.push(p('**b**  Listen again. **1** What are the three possible causes she gives, and which does she think most likely?   **2** What does Omar say happens when a technical person says _it may be_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.3  Three things it may be', [
  ['Yara', 'There is a question I was asked on Tuesday and I want to tell you what I said, because I think I said it badly.'],
  ['Ms Huda', 'Who asked it?'],
  ['Yara', 'A doctor on ward six, standing at our bench, about why his four samples from Monday afternoon came back a day later than the two from Monday morning.'],
  ['Jad', 'And why did they?'],
  ['Yara', 'I do not know. That is the whole point. There are three things it may be. It **may** be the afternoon run, because the three o\'clock loading means anything arriving after half past two waits. It **might** be the sample tubes — his ward has had the new tubes since August and they need a different rack. Or it **could** be the porters, because the afternoon round comes through the second corridor and I have twice found a bag left on the shelf by the lift.'],
  ['Omar', 'And what did you say to him?'],
  ['Yara', 'I said: it may be the afternoon run. And he said thank you and went away, and he has told his ward that the laboratory loses the afternoon samples, which is not what I said and is what he heard.'],
  ['Ms Huda', 'What do you think he heard?'],
  ['Yara', 'He heard a cause. In this room I have learnt what _may_ does — it offers one of several — but he is a doctor standing at a bench for forty seconds and what he wanted was an answer, and _may_ was the nearest thing to one that I gave him.'],
  ['Nour', 'That happens to us every week. We are told at TechCare to say the number: there are three things this can be and the commonest of the three is the cable. The customer still hears the cable, but they have been told there are three, and when the cable is not it they are not surprised.'],
  ['Yara', 'Say the number first.'],
  ['Nour', 'Say the number first, before any of the three. _There are three things it may be._ Then they are counting, and then whatever you say next is one of three and not an answer.'],
  ['Ms Huda', 'And the second half of it, Yara: which of the three do you actually think it is?'],
  ['Yara', 'The afternoon run, probably, because it explains the time exactly and the other two would not give you a whole day. But I have not looked at the porters\' round and I could look at it in twenty minutes, and I have been meaning to since August.'],
  ['Ms Huda', 'Then say that to him. _There are three things it may be, I think it is the first, and I have not checked the third._ That is one sentence longer than what you said on Tuesday, and it is the difference between a ward that believes you and a ward that believes the laboratory loses samples.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _may · might · could_ for a hedged prediction**',
  table(['you say', 'how it is heard'], [
    ['_It **may** be the afternoon run._', 'one real possibility among others'],
    ['_It **might** be the tubes._', 'the same; slightly less likely in careful use'],
    ['_It **could** be the porters._', 'possible — often used for the outside chance'],
    ['_It **may not** be either._', 'possibly not: the doubt is about the thing'],
    ['_It **cannot** be the tubes._', 'ruled out — this is 9.2, not a hedge'],
  ], [2.4, 2.2]),
  '**All three mean _possible_, and most of the time they are interchangeable.** Careful speakers use _may_ and _might_ for the real candidates and _could_ for the outside one, but nobody will misunderstand you. What matters is the next rule.',
  '**Say the number first.** _There are three things it may be._ Then every hedge that follows is heard as one of three. Without the number, a hedge is heard as an answer, and the person walks away and repeats it as one.',
  '**And say which you think it is, and what you have not checked.** _I think it is the first, and I have not looked at the third._ That single extra sentence is the whole cycle: a hedge with a ranking and an admission in it is information; a bare hedge is noise that will be quoted back at you.',
  '⚠ ~~It may to be the run~~ · ~~it might is the tubes~~ → _may/might/could_ + bare infinitive.',
  '⚠ ~~Maybe it is the run~~ in writing. _Maybe_ is spoken and informal; in a report use _it may be_, _possibly_, or _one possibility is_.',
  '**Useful phrases:** there are three things it may be · he heard a cause · say the number first, before any of the three · I think it is the first, and I have not checked the third.',
  '**Practise:** Hedge each one properly — the number, the three possibilities, the one you think it is, and the one you have not checked.  1 _Why is the result late?_  2 _Why has the batch failed?_  3 _Why was nobody told?_  4 _Why is the round late?_  5 _Why has he not answered?_',
  '**Pronunciation.** 🔊 **Track 14.4** In a hedge the modal is **unstressed** and the content word carries the weight: _it may be the afternoon RUN._ But in a negative hedge the weight moves to _not_: _it may NOT be either._ Students stress _may_, which makes a possibility sound like a decision. Listen to eight and mark the stressed word.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the question from the card as somebody standing at a counter with forty seconds. B answers with the number first, three possibilities, the one they think it is, and the one they have not checked. A then repeats back what they heard, in one sentence — which is the test. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________?'],
  ['B', 'There are three things it may be. It may be __________, it might be __________, or it could be __________. I think it is __________, and I have not checked __________.'],
  ['A', 'So what I will tell my ward is: __________.'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the questions', 'Card B – the questions'], [
  ['Why did my four samples come back a day late?', 'Why has this handset come back twice?'],
  ['Why was the round late on Tuesday?', 'Why has nobody answered my letter?'],
  ['Why is the second switch not working?', 'Why did the order go to the wrong post?'],
  ['Why are we always told ninety minutes?', 'Why was the yard rule changed in May?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write what A says they will tell their ward, office or customer. That sentence is the only thing that leaves the room, and in a first run three or four of the eight are a single cause that B never claimed — which is Yara\'s Tuesday, repeated in public.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a question you are asked at work and cannot answer with one cause. Give the number, the three possibilities, your ranking and your blind spot. Your partner then says it back as they would repeat it to somebody else.'));
out.push(p('**b**  Swap. Then each of you say how the other\'s answer was changed in the repeating.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara was asked on Tuesday by a doctor from ward six, standing at the bench, why his four samples from Monday afternoon came back a day later than the two from Monday morning — and she thinks she answered it badly. She does not know why, and that is the point: there are three things it may be. It may be the afternoon run, because the three o\'clock loading means anything arriving after half past two waits; it might be the sample tubes, since his ward has had the new ones since August and they need a different rack; or it could be the porters, because the afternoon round comes through the second corridor and she has twice found a bag left on the shelf by the lift. What she actually said was "it may be the afternoon run" — and he thanked her and went away and has told his ward that the laboratory loses the afternoon samples, which is not what she said and is what he heard. She said he heard a cause: in this room she has learnt what may does, but he was a doctor at a bench for forty seconds who wanted an answer, and may was the nearest thing to one she gave him. Nour said that at TechCare they are told to say the number: there are three things this can be and the commonest is the cable. The customer still hears the cable, but they have been told there are three, so when it is not the cable they are not surprised. Say the number first, before any of the three, and then the customer is counting and whatever comes next is one of three and not an answer. And Ms Huda asked Yara which of the three she thinks it is: the afternoon run, probably, because it explains the time exactly and the other two would not give you a whole day — but she has not looked at the porters\' round and could do it in twenty minutes and has been meaning to since August. So the sentence to say to him is: there are three things it may be, I think it is the first, and I have not checked the third — one sentence longer than Tuesday, and the difference between a ward that believes you and a ward that believes the laboratory loses samples._'));
out.push(p('**Listener task:** write the three-possibility answer somebody gave, and the one sentence it turned into.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Yara writes and leaves at the bench. Answer the questions.'));
out.push(model([
  '**WHY AN AFTERNOON SAMPLE MAY COME BACK A DAY LATER** · a note for the bench and for ward six · Y. Mansour · September',
  'A doctor asked me this at the bench last week and I gave him one answer out of three, and he has repeated it to his ward as a cause. This is the whole answer, and it is for anybody who is asked it when I am not here.',
  '**There are three things it may be.** Not one.',
  '**One — the afternoon run.** The analyser is loaded at three. Anything that reaches the bench after half past two waits for the next morning\'s run, which makes a sample eighteen hours slower than one that arrived at eleven. This explains a whole day exactly, and for that reason I think it is the commonest of the three.',
  '**Two — the tubes.** Ward six has had the new tubes since August. They need a different rack, and if the rack is in use the tubes are stood in the old one and the machine rejects the first read. That costs about two hours, not a day, so on its own it does not explain what the doctor saw.',
  '**Three — the porters\' afternoon round.** It comes through the second corridor and twice this summer I have found a bag of samples left on the shelf by the lift. I do not know how often that happens, because nobody counts it and the bag has no time on it. **I have not checked this one, and it would take twenty minutes to check.**',
  '**What I think, and what I would not say to a ward.** I think it is the first, most of the time. I would not say that to a ward as a cause, because if it is sometimes the third then a ward that believes the first will keep sending samples at twenty past two and blaming us, and the fault will be in a corridor where nobody is looking.',
  '**What would settle it.** Two weeks of writing the time on the bag when it reaches the bench, which is one line in a book we already keep. If the times are all after half past two it is the run. If some of them are before and still slow, it is the corridor or the rack.',
  '**And what I have done about it.** I have started the two weeks myself, from Monday. I will have the times by the end of the month and I will put them on this bench, whatever they say.',
]));
out.push(item('1', 'Why does she say the second possibility does not explain what the doctor saw?'));
out.push(item('2', 'Which possibility has she not checked, and how long would it take?'));
out.push(item('3', 'What would settle it, and what has she already done?'));
out.push(writers([
  'A note that hedges honestly: **say how many things it may be, in a line of its own** → **each possibility, with what it would explain and what it would not** → **what you think, and why you would not say it as a cause** → **what would settle it** → **and what you have already started**.',
  'Give each possibility its **size**: _that costs about two hours, not a day, so on its own it does not explain what the doctor saw._ A hedge with arithmetic in it cannot be repeated as a cause.',
  'Mark the unchecked one in bold and say what checking it would cost. _I have not checked this one, and it would take twenty minutes._ The sentence is embarrassing and it is the reason the note will be believed.',
  '⚠ End with the thing you have already started, with a date. A note full of possibilities and no action reads as a defence; the same note with two weeks of times beginning on Monday reads as work.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note for a question you are asked and cannot answer with one cause (60 words or more).'));
out.push(p('**WHY ______________** · a note for ______________ · ______________   ______________ asked me this ______________ and I gave ______________ out of ______________.   **There are ______ things it may be.** Not one.   **One — ______________.** ______________. This explains ______________, and for that reason I think ______________.   **Two — ______________.** ______________. That costs about ______________, not ______________, so on its own it does not explain ______________.   **Three — ______________.** ______________. **I have not checked this one, and it would take ______________ to check.**   **What I think, and what I would not say to ______________.** I think it is ______________. I would not say that as a cause, because ______________.   **What would settle it.** ______________. If ______________ it is ______________; if ______________, it is ______________.   **And what I have done about it.** I have started ______________ from ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The number said first, in a line of its own',
  '_may · might · could_ + bare infinitive, and no _maybe_ in writing',
  'Each possibility sized — what it would and would not explain',
  'The unchecked one named, and what would settle the question',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the possibility they have **not** checked, and say how long it would take.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more) for the question you are most often asked and cannot honestly answer with one cause. Three possibilities, sized; your ranking; the unchecked one; what would settle it; and what you have started. Then leave it where the question gets asked.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s note as **somebody who will be asked the question tomorrow while your partner is away**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who has an unchecked possibility that would take under an hour to check?** Nearly everybody, and most of them have known about it for months. Write the hours on the board and add them up. The total is usually under a day, and it is the cheapest thing anybody will see in this book.'));
out.push(hw('Answer the question you are most often asked, in writing, with the number first and three sized possibilities (60+ words). Then check the one you have never checked, and write down what you found.'));

// ======================= 14.3 =======================
out.push(pb());
out.push(h2('14.3  How likely is it?'));
out.push(p('**Function:** saying how likely something is   ·   **Grammar:** _be likely to · there is a chance that · the odds_   ·   **Pronunciation:** _likely_ against _unlikely_, and the sound of a number'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six of the predictions from the wall. For each one, the class puts a **number** on it: out of ten, how likely? Everybody writes a figure before anybody speaks, and then the figures go on the board. The spread is the interesting part.'));
out.push(board('It is likely to be extended. There is a chance they will say why.', 'likely to + verb · a chance that + clause'));
out.push(p('**b**  Order these from most likely to least: **a** _It is bound to happen._  **b** _There is a slight chance that it will._  **c** _It is likely to happen._  **d** _It is unlikely to happen._  **e** _It may well happen._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do Nour and Jad disagree about, and what does Nour do about it?   **A** how likely her projection is   **B** whether to make it at all   **C** who should be told'));
out.push(p('**b**  Listen again. **1** What number does Nour put on her own projection, and what three things is it built on?   **2** What does Jad say about a number with no range round it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.5  Out of ten', [
  ['Ms Huda', 'Nour, your prediction on the wall says that if replacements are booked at sixty minutes the lateness complaints will fall by a third. How likely is that, out of ten?'],
  ['Nour', 'Seven.'],
  ['Jad', 'Seven out of ten is very high for something nobody has tried.'],
  ['Nour', 'It is high, and I will tell you what it is built on. Three things. One: four replacements a day are booked as a half-day and finish by eleven, which I have timed forty-one times. Two: the complaints are logged at the desk with a reason, and for August the reason was "late" on thirty-one out of forty-four. Three: the engineer who does the north district has been booking his own replacements at sixty for about a year, quietly, and his lateness complaints are the lowest in the company.'],
  ['Jad', 'You did not have the third one on the wall.'],
  ['Nour', 'No, and it is the strongest of the three, and I left it out because he is not supposed to be doing it.'],
  ['Omar', 'So your seven is really an eight with a man\'s job inside it.'],
  ['Nour', 'It is a seven I can write down and an eight I cannot.'],
  ['Ms Huda', 'And what is the other three out of ten? What would hold the complaints up?'],
  ['Nour', 'Two things. The complaints may not be mostly about time at all — thirty-one out of forty-four say "late" and I have not read the other thirteen. And the desk may book the sixty and then put a fifth visit in the gap, in which case the day is the same length and the complaints do not move.'],
  ['Rasha', 'They will do that.'],
  ['Nour', 'They are likely to do that, and if they do, my projection is wrong for a reason that is nothing to do with my numbers.'],
  ['Jad', 'Then say so on the wall. A number with no range round it looks like a measurement, and that one is a judgement with three facts holding it up.'],
  ['Nour', 'So: the complaints are likely to fall, probably by between a quarter and a half, and there is a real chance of no change at all if a fifth visit goes into the gap.'],
  ['Ms Huda', 'Say the three forms again, slowly, because the class should hear the difference. _It is likely to fall._ _There is a chance that it will not change._ _It may well be that the complaints are not about time._'],
  ['Nour', 'And the one I was using on Tuesday was "I think it will fall by a third", which is a seven pretending to be a ten.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – saying how likely**',
  table(['you say', 'roughly'], [
    ['_It is **bound to** happen._', '9–10 out of 10; use it rarely'],
    ['_It **may well** happen._', '7–8 — likelier than _may_ on its own'],
    ['_It is **likely to** happen._ · _It will **probably**…_', '7 out of 10'],
    ['_**There is a chance that** it will._', '3–5, and the chance is real'],
    ['_It is **unlikely to** happen._ · _There is a **slight** chance._', '2 or less'],
  ], [2.4, 2.2]),
  '**_Likely_ is an adjective, not an adverb.** _It is likely to fall_ · _it is likely that it will fall_. ⚠ ~~It will likely fall~~ is American and is marked wrong in a Preliminary script; ⚠ ~~it is likely fall~~ has lost the _to_.',
  '**Put a range round a number.** _By between a quarter and a half_ is a forecast; _by a third_ is a measurement of something that has not happened. A number with no range looks exact and will be quoted exactly, and then you will be wrong by arithmetic rather than by judgement.',
  '**Say what the other three out of ten are.** Every likelihood has a remainder, and the remainder is where the useful information is: _there is a real chance of no change at all if a fifth visit goes into the gap._',
  '**And give the facts the number stands on, with their counts.** _Forty-one visits timed · thirty-one of forty-four complaints · one engineer, a year, quietly._ Three facts under a seven is a professional estimate; a seven with nothing under it is a feeling with a digit on it.',
  '⚠ ~~There is a chance to happen~~ → _there is a chance that it will happen_ · _a chance of it happening_.',
  '⚠ ~~It is possible that it may happen~~ — one marker of doubt, not two.',
  '**Useful phrases:** out of ten · it is a seven I can write down and an eight I cannot · a number with no range round it looks like a measurement · a seven pretending to be a ten.',
  '**Practise:** Put a likelihood, a range and a remainder on each.  1 _The trial will be extended._  2 _The road will be closed in November._  3 _Twelve of the fifteen are from one batch._  4 _Nothing will be decided on the twenty-seventh._  5 _I will not telephone anybody in English by June._',
  '**Pronunciation.** 🔊 **Track 14.6** _Likely_ and _unlikely_ differ by one unstressed syllable at the front and students lose it: /ˈlaɪkli/ against /ʌnˈlaɪkli/, where the **un-** is where the stress moves. And in _there is a chance that_, _chance_ carries the weight and _there is a_ is almost swallowed. Listen to eight and write **likely** or **unlikely**; three of them are negative.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the prediction from the card. B puts a number out of ten on it, names the facts it stands on, gives a range, and then says what the remainder is. A asks the last question: _what would move your number up by two?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Seven out of ten. It stands on __________, __________ and __________. It is likely to __________, probably by between __________ and __________.'],
  ['A', 'And the other three out of ten?'],
  ['B', 'There is a real chance that __________.'],
  ['A', 'What would move your number up by two?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – predictions', 'Card B – predictions'], [
  ['The trial will be extended to all night staff.', 'Twelve of the fifteen handsets are from one batch.'],
  ['The road will be closed again in November.', 'Nothing will be decided on the twenty-seventh.'],
  ['The complaints will fall by a third.', 'Nobody will answer the letter.'],
  ['The second trolley will stay on the ward.', 'The new tubes are the cause of the delay.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight numbers and the facts under each. Then mark the ones where the facts are **counts** and the ones where they are impressions. A seven with three counts under it and a seven with three impressions under it are not the same seven, and nothing in the wording tells you which you are being given.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own prediction from the wall. Put a number on it out of ten, name the facts it stands on with their counts, give a range, and say what the remainder is.'));
out.push(p('**b**  Swap. Then each of you say whether the other\'s number is a measurement or a judgement, and whether it is being presented as the other thing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Nour how likely her projection is, out of ten, and she said seven. Jad said seven is very high for something nobody has tried, and she agreed and said what it is built on: three things. One, four replacements a day are booked as a half-day and finish by eleven, which she has timed forty-one times. Two, the complaints are logged at the desk with a reason, and for August the reason was "late" on thirty-one out of forty-four. Three, the engineer who does the north district has been booking his own replacements at sixty for about a year, quietly, and his lateness complaints are the lowest in the company. Jad pointed out that the third one was not on the wall, and she said no — it is the strongest of the three and she left it out because he is not supposed to be doing it. Omar said so her seven is really an eight with a man\'s job inside it, and she said it is a seven she can write down and an eight she cannot. Then Ms Huda asked what the other three out of ten are, and Nour gave two things: the complaints may not be mostly about time, because thirty-one out of forty-four say "late" and she has not read the other thirteen; and the desk may book the sixty and then put a fifth visit in the gap, in which case the day is the same length and nothing moves. Rasha said they will do that, and Nour said they are likely to do that, and if they do her projection is wrong for a reason that has nothing to do with her numbers. Jad said then say so on the wall, because a number with no range round it looks like a measurement and hers is a judgement with three facts holding it up. So she restated it: the complaints are likely to fall, probably by between a quarter and a half, and there is a real chance of no change at all if a fifth visit goes into the gap. And she said the version she had been using on Tuesday was "I think it will fall by a third", which is a seven pretending to be a ten._'));
out.push(p('**Listener task:** write one number from this room and the facts under it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour puts on the appointments desk. Answer the questions.'));
out.push(model([
  '**IF REPLACEMENTS WERE BOOKED AT SIXTY MINUTES** · a projection, with what it stands on and what could be wrong with it · N. Sabbagh · September',
  '**What I am projecting.** That if replacement visits are booked at 60 minutes instead of 90 for one month, the lateness complaints for that month are **likely to fall by between a quarter and a half**. I would put it at seven out of ten.',
  '**The three things it stands on.**',
  '**1** Forty-one visits timed from the doorbell to the signature between March and August. A replacement takes a mean of 55 minutes, range 38 to 80. **2** The complaint log at the desk gives a reason: in August, 31 of 44 complaints were "late". **3** One engineer in the north district has been booking his own replacements at an hour for about a year and has the lowest lateness figures in the company. That is the strongest of the three facts and it is not mine to publish, so take it as hearsay unless he says otherwise.',
  '**The other three out of ten.** Two things, and either of them undoes the projection without touching the arithmetic. The complaints may not be mostly about time: 31 of 44 say "late" and I have not read the remaining 13. And the desk may book the hour and then put a fifth visit into the gap, which makes the day the same length and moves nothing — **this is the likelier of the two and I would put it at four out of ten on its own.**',
  '**What would make me wrong in a way I would not mind.** If the complaints fall by more than half, it was never about the booking at all and the real problem was the travel time between districts, which is 25 to 40 minutes inside a district and 45 to an hour between them against the 20 the desk allows.',
  '**What I am asking for.** One month. Replacements at 60, installations at 110, nothing else changed, and no fifth visit in the gap — and that last condition is the whole experiment, so if it cannot be held then the month is not worth running.',
  '**How it will be judged.** The complaint log, by reason, for October against August, counted by somebody at the desk and not by me.',
]));
out.push(item('1', 'What range does she give, and what number out of ten?'));
out.push(item('2', 'Which of the three supporting facts does she say is strongest, and why does she call it hearsay?'));
out.push(item('3', 'What is the one condition without which the month is not worth running?'));
out.push(writers([
  'A projection: **the claim with a range and a number out of ten** → **the facts it stands on, counted and numbered** → **the remainder, with the likelier of the two marked** → **what would make you wrong in a way you would not mind** → **the one condition the experiment needs** → **and who will judge it, which should not be you**.',
  'Give the number **and** the range. _Likely to fall by between a quarter and a half, seven out of ten_ cannot be quoted as a promise, and a single figure always is.',
  'Say which supporting fact is strongest and where it came from, even when that is awkward: _it is not mine to publish, so take it as hearsay unless he says otherwise._',
  '⚠ Name the condition that would wreck the experiment and say that the month is pointless without it. Every trial in a workplace is undone this way — the change is made and something else is changed in the same week — and the sentence that prevents it costs one line.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the projection for something you could ask for one month of (60 words or more).'));
out.push(p('**IF ______________** · a projection, with what it stands on and what could be wrong with it · ______________   **What I am projecting.** That if ______________ for one month, ______________ is **likely to ______________ by between ______________ and ______________**. I would put it at ______ out of ten.   **The things it stands on.** **1** ______________ — ______ times, mean ______________, range ______________. **2** ______________. **3** ______________, which is the strongest and which ______________.   **The other ______ out of ten.** ______________, and ______________ — **this is the likelier and I would put it at ______ out of ten on its own.**   **What would make me wrong in a way I would not mind.** If ______________, then ______________.   **What I am asking for.** One month. ______________, nothing else changed, and ______________ — and that last condition is the whole experiment.   **How it will be judged.** ______________, counted by ______________ and not by me.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A range and a number out of ten, not a single figure',
  '_likely to_ + verb · _there is a chance that_ + clause, formed correctly',
  'The remainder named, with the likelier half marked',
  'The one condition the trial needs, and a judge who is not you',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their remainder paragraph only — the other three out of ten.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full projection (140 words or more) for a change you could ask for one month of at work. Everything counted, a range, a remainder, a judge who is not you. Then write underneath what you would do if the month were refused.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s projection as **the person who would have to authorise the month**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Whose number is a measurement and whose is a judgement?** Hands for each, and then the question that matters: how many of the judgements are presented as measurements? In a first run it is most of them, and nobody did it on purpose — a single figure is simply shorter than a range, and shorter is what we all write.'));
out.push(hw('Write the projection for one change in your own work (60+ words): the range, the number out of ten, the counted facts, the remainder, and the judge. Then show it to one person and write down which number they argued with.'));

// ======================= 14.4 =======================
out.push(pb());
out.push(h2('14.4  Where the adverb goes'));
out.push(p('**Function:** putting the adverb in the right place   ·   **Grammar:** _probably · definitely · certainly · possibly_   ·   **Pronunciation:** the three-syllable _probably_, and why it is usually two'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says eight sentences with the adverb in the **wrong** place — _I will probably not go_ against _I probably will not go_, and worse. The class moves it, and then says whether the meaning changed or only the sound.'));
out.push(board('They will probably extend it. They probably will not say why.', 'after will · before won\'t'));
out.push(p('**b**  Put _probably_ in the right place. **1** _They will extend it._  **2** _They will not say why._  **3** _It is the afternoon run._  **4** _It is not the tubes._  **5** _I have read the other thirteen._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Tareq\'s complaint about the word _probably_?   **A** that it is in the wrong place in his notes   **B** that nobody at the depot believes it   **C** that it changes what a sentence means'));
out.push(p('**b**  Listen again. **1** What is the rule the class works out for _probably_ with a negative?   **2** What does Lubna say about _definitely_ in writing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.7  Probably not, or not probably', [
  ['Tareq', 'I wrote something to the depot on Tuesday and the answer I got back was about the wrong thing, and I think it was one word in the wrong place.'],
  ['Ms Huda', 'Read what you wrote.'],
  ['Tareq', '"The south side will probably not be resurfaced before the winter, so the road will probably be closed again in November."'],
  ['Omar', 'That looks right to me.'],
  ['Tareq', 'It is right. But what I wrote first, and what I sent, was: "The south side will not probably be resurfaced."'],
  ['Jad', 'Which means something else.'],
  ['Tareq', 'Which means nothing at all, and the man who answered me wrote back asking whether I had heard that the resurfacing had been cancelled. He read "not probably" as "definitely not".'],
  ['Ms Huda', 'Jad, give the class the rule.'],
  ['Jad', 'With a positive verb the adverb goes **after** _will_ — _they will probably extend it_. With a negative it goes **before** _will not_ — _they probably will not say why_. And with _is_ and _are_ it goes after: _it is probably the afternoon run_. But with _is not_ it goes before: _it probably is not the tubes_.'],
  ['Nour', 'So the adverb jumps in front of the negative.'],
  ['Jad', 'The adverb jumps in front of the negative, and that is the whole rule, and in speech people say the other one and are understood. In writing it is read exactly.'],
  ['Lubna', 'Can I say something about _definitely_? I have stopped using it in writing altogether.'],
  ['Ms Huda', 'Why?'],
  ['Lubna', 'Because in my own pages it always turns out to be a seven out of ten. "The render is definitely a different sand." I had not had it tested; I had looked at it. The word that belonged there was _clearly_, which is about what you can see, or _almost certainly_, which is about what you think. _Definitely_ is a word students use to sound sure, and the only people who should write it are people who have measured something.'],
  ['Mazen', 'I wrote "definitely one batch" on the wall and crossed it out before I pinned it up.'],
  ['Lubna', 'And wrote?'],
  ['Mazen', 'At least twelve of the fifteen. Which is a number and does not need an adverb at all, and that is the other half of this cycle: half the adverbs I use are standing where a number should be.'],
  ['Ms Huda', 'Say that again for the board, because it is the best sentence in the lesson.'],
  ['Mazen', 'Half the adverbs I use are standing where a number should be.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Where the adverb goes**',
  table(['the verb', 'the position'], [
    ['_will_ (positive)', '**after**: _they will **probably** extend it_'],
    ['_will not_', '**before**: _they **probably** will not say why_'],
    ['_is · are · was_', '**after**: _it is **probably** the run_'],
    ['_is not · are not_', '**before**: _it **probably** is not the tubes_'],
    ['a full verb (_read · answer_)', '**before**: _he **probably** read it and **certainly** did not answer_'],
  ], [1.9, 2.7]),
  '**The adverb jumps in front of the negative.** That is the rule in one line, and it is worth learning because ~~will not probably~~ is read as _definitely not_ by a careful reader, which is the opposite of what you meant.',
  '**The adverbs, in order of strength:** _possibly_ (3–5) · _probably_ (7) · _almost certainly_ (8–9) · _certainly · definitely_ (10). ⚠ And _definitely_ means **measured**: if you have looked at a thing rather than measured it, the word is _clearly_, and if you have thought about it, the word is _almost certainly_.',
  '**One adverb to a sentence.** ⚠ ~~It will probably possibly be closed~~ · ~~I think it will probably maybe happen~~. Two markers of doubt do not make a careful sentence; they make an anxious one.',
  '**And the other half of the cycle:** if you have a number, the number replaces the adverb. _At least twelve of the fifteen_ needs no _probably_ at all. Half the adverbs in a student\'s writing are standing where a number should be.',
  '⚠ ~~Probably they will extend it~~ is possible in speech and weak in writing; keep the adverb inside the verb phrase.',
  '⚠ ~~He answered probably~~ → _he probably answered_. An adverb of probability does not go at the end in English, however natural that feels from Arabic.',
  '**Useful phrases:** the adverb jumps in front of the negative · he read "not probably" as "definitely not" · _definitely_ is a word students use to sound sure · half the adverbs I use are standing where a number should be.',
  '**Practise:** Put the adverb in, and then take it out and put a number or an evidence word in its place.  1 _It will be closed._ (probably)  2 _They will not answer._ (probably)  3 _It is the render._ (definitely)  4 _She has read them._ (certainly)  5 _It is not the rack._ (possibly)',
  '**Pronunciation.** 🔊 **Track 14.8** _Probably_ has three syllables written and two in speech: /ˈprɒbli/. _Definitely_ has four written and three said: /ˈdefnətli/ — and the commonest student error is /defɪˈnaɪtli/ with the stress in the middle, which is the one thing in this cycle a listener notices immediately. Listen to six and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card with the adverb missing. B says it twice — once with the adverb in the right place, and once with the adverb **replaced** by a number or an evidence word. A says which version they would send. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________. (probably)'],
  ['B', 'With the adverb: __________.'],
  ['B', 'Without it: __________.'],
  ['A', 'Which would you send?'],
  ['B', '__________, because __________.'],
]));
out.push(table(['Card A – with the adverb', 'Card B – with the adverb'], [
  ['It will be closed before November. (probably)', 'They will not give a reason. (probably)'],
  ['It is the render. (definitely)', 'She has read the other thirteen. (certainly)'],
  ['It is not the rack. (possibly)', 'The complaints will fall. (almost certainly)'],
  ['He has not answered. (probably)', 'They will put a fifth visit in. (definitely)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight number-or-evidence versions. Then count how many of them are better than the adverb version. It is usually six or seven, and the two that are not are the sentences where no number exists — which is exactly where an adverb belongs.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a page of your own writing from Book 1 and find every _probably_, _definitely_, _certainly_ and _maybe_ in it. Read each sentence out, say whether the adverb is in the right place, and then say what number or evidence word could stand there instead.'));
out.push(p('**b**  Swap. Then each of you find one _definitely_ in the other\'s writing that has not been measured.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq wrote to the depot on Tuesday and got an answer about the wrong thing, and he thinks it was one word in the wrong place. What he meant was: the south side will probably not be resurfaced before the winter, so the road will probably be closed again in November. What he actually sent was "the south side will not probably be resurfaced" — and the man who answered wrote back asking whether he had heard that the resurfacing had been cancelled, because he read "not probably" as "definitely not". Jad gave the rule: with a positive verb the adverb goes after will, and with a negative it goes before will not; with is and are it goes after, and with is not it goes before. Nour said so the adverb jumps in front of the negative, and Jad said that is the whole rule — and that in speech people say the other one and are understood, and in writing it is read exactly. Then Lubna said she has stopped using "definitely" in writing altogether, because in her own pages it always turns out to be a seven out of ten: she had written "the render is definitely a different sand" and she had not had it tested, she had looked at it. The word that belonged there was "clearly", which is about what you can see, or "almost certainly", which is about what you think — and "definitely" is a word students use to sound sure, and the only people who should write it are people who have measured something. Mazen said he wrote "definitely one batch" on the wall and crossed it out before pinning it up, and wrote "at least twelve of the fifteen" instead, which is a number and needs no adverb — and that half the adverbs he uses are standing where a number should be._'));
out.push(p('**Listener task:** write one sentence from this room where a number replaced an adverb.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same four sentences before and after. Answer the questions.'));
out.push(model([
  '**FOUR SENTENCES, TWO VERSIONS** · L. Sweidan · from the survey report, rewritten in September',
  '**Before.** The render on the 1974 extension is definitely a different sand. The four floors are probably all as built. The partitions were definitely put in later. The south rooms are definitely hotter in summer and the windows have probably never been replaced.',
  '**After.** The render on the 1974 extension is **clearly** a different sand: it is coarser to the eye and to the hand, and it has weathered separately, and I have not had it tested. The four floors are as built **so far as I can see from the 1962 drawing and the door widths**, which is not the same as knowing. The partitions were put in **in 2009** — the year is in the conversion file. The south rooms run **4 to 5 °C hotter** than the north side on the three afternoons I measured in July, and the windows **have no putty line and no paint under the sill**, which is what an unreplaced window looks like after sixty years.',
  '**What changed.** Four _definitely_s and two _probably_s have gone. Two of them became evidence — _clearly, coarser to the eye and to the hand_ — two became numbers, one became a year out of a file, and one became an honest limit: _so far as I can see, which is not the same as knowing._',
  '**What it cost.** Sixty-one words instead of thirty-four. That is the price, and in a survey report it is worth paying, because every sentence in the second version can be checked by somebody standing in the building and not one sentence in the first version can.',
  '**And the one adverb I kept.** _The four floors are **probably** all as built._ There is no number available, the drawing is incomplete and the only way to know is to open a floor, which nobody is going to do for a student\'s report. An adverb is the right word when the evidence genuinely does not exist — and it is the wrong word when the evidence exists and you have not gone and got it.',
]));
out.push(item('1', 'What did the four _definitely_s become?'));
out.push(item('2', 'What does she say the rewriting cost, and why is it worth it?'));
out.push(item('3', 'Why does she keep one _probably_?'));
out.push(writers([
  'A rewriting that shows the work: **the four sentences as you wrote them** → **the same four with evidence, numbers, dates and limits in place of the adverbs** → **what changed, counted** → **what it cost in words** → **and the one adverb you kept, with the reason**.',
  'Replace an adverb with one of four things: **evidence** (_coarser to the eye and to the hand_), a **number** (_4 to 5 °C_), a **date out of a file** (_in 2009_), or an **honest limit** (_so far as I can see, which is not the same as knowing_).',
  'Count the cost. Sixty-one words for thirty-four is a real price and saying so is what makes the argument honest — in a message to a colleague it may not be worth paying, and in a report it always is.',
  '⚠ Keep the adverb where the evidence genuinely does not exist, and say so. _An adverb is the right word when the evidence does not exist, and the wrong word when it exists and you have not gone and got it._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take four adverb sentences from your own writing and rewrite them (60 words or more).'));
out.push(p('**FOUR SENTENCES, TWO VERSIONS** · ______________   **Before.** ______________. ______________. ______________. ______________.   **After.** ______________ **clearly** ______________: ______________, and I have not ______________. ______________ **so far as** ______________, which is not the same as knowing. ______________ **in ______________** — ______________. ______________ **______ to ______** ______________, on the ______ occasions I measured.   **What changed.** ______ adverbs have gone: ______ became evidence, ______ became numbers, ______ became ______________, and one became an honest limit.   **What it cost.** ______ words instead of ______.   **And the one adverb I kept.** ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The adverb after _will_ and _is_, and before _will not_ and _is not_',
  'One adverb to a sentence',
  'Every adverb that could be a number, replaced by the number',
  'One adverb kept, with the reason it is the right word',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the one adverb they kept and the reason for it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Take a whole page of your own writing (140 words or more in the rewrite) and do the same thing: every adverb of probability found, moved if it is in the wrong place, and replaced where a number or a piece of evidence exists. Then write the two word counts.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s two versions as **somebody who will have to act on one of them**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many adverbs went, and how many survived with a reason?** Both numbers on the board. Then the question for the room: of the adverbs that were replaced by numbers, how many of those numbers already existed in a book, a file or a drawer before today? Almost all of them, which is Mazen\'s sentence proved: half the adverbs we use are standing where a number should be.'));
out.push(hw('Find every adverb of probability in one page you have written at work (60+ words of rewriting). Move the ones in the wrong place, replace the ones where a number exists, and keep one with its reason.'));

// ======================= 14.5 =======================
out.push(pb());
out.push(h2('14.5  By the end of October'));
out.push(p('**Function:** saying what you expect by a point in time   ·   **Grammar:** _by then · by the end of · in two weeks\' time_   ·   **Pronunciation:** _by the end of_ said as one piece'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads the test dates off the prediction board — the thirtieth of September, the twenty-seventh of October, the end of November. For each date, the class says one thing that **will be known by then** and one thing that **will still not be known**.'));
out.push(board('By the end of October we will know. By then the trolley will still be a question.', 'by + a point · by then · still not'));
out.push(p('**b**  _By_ or _until_? **1** _I will have the dates ___ Friday._  **2** _Nothing will happen ___ the examinations are over._  **3** ___ the end of the month I will know._  **4** _We cannot do anything ___ October._  **5** _The sheet stays on that wall ___ June._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel have to put a date on, and what is the thing he will not know by then?'));
out.push(p('**b**  Listen again. **1** What is the difference between _by_ and _until_ that the class works out?   **2** What does Bassel say about the word _finished_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.9  By, and until', [
  ['Bassel', 'There is a second ministry order and they want a date. Not a price — a date. Twelve thousand copies of a sixty-four-page booklet, and the question on the form is one line: "date by which the work will be completed".'],
  ['Ms Huda', 'What have you written in the box?'],
  ['Bassel', 'Nothing yet, which is why I have brought it. In April I would have written the earliest date I could imagine, because that is how you get the order.'],
  ['Lubna', 'And now?'],
  ['Bassel', 'Now I know what that line costs, because the first order had the same box in it and I wrote the fourteenth of June in it, and we finished on the twenty-second, and the eight days are in a file with my name on them for ever.'],
  ['Nour', 'What is the honest date?'],
  ['Bassel', 'By the twentieth of November I will have twelve thousand booklets, **if** the paper arrives in the first week of October. The paper is the whole thing. It comes through an agent and the last three orders came between nine and twenty-three days late.'],
  ['Jad', 'So you cannot give a date at all.'],
  ['Bassel', 'I can give two. By the twentieth of November if the paper comes by the seventh of October, and by the fifth of December if it comes as late as it came last time. And that is what I am going to write in the box, in both halves, even though nobody has ever written two dates in that box.'],
  ['Ms Huda', 'Now the grammar, because there is a word in what you said that the class gets wrong every time. You said _by_ the twentieth of November.'],
  ['Bassel', 'By, not until. _By_ the twentieth means it is finished on or before it. _Until_ the twentieth means the work goes on, and then stops, and tells you nothing about whether it is finished.'],
  ['Omar', '"We cannot start until October" against "we will finish by October".'],
  ['Bassel', 'And the one that catches me is the negative. _Nothing will happen until the paper comes_ is right, because the waiting goes on; _I will not know anything by Friday_ is also right and means that the knowledge is not there yet at that point.'],
  ['Ms Huda', 'And there is a third thing you said that is worth marking. The word _finished_.'],
  ['Bassel', 'I said twelve thousand booklets, not finished. Because "finished" on that form means printed, folded, trimmed, boxed and out of the premises, and the premises includes the yard, which I know now and did not know in June. Three of those eight days in the file were the booklets sitting in the yard, finished, and me thinking the clock had stopped.'],
  ['Ms Huda', 'So a date needs a definition behind it.'],
  ['Bassel', 'A date needs a definition behind it, and the definition is on the page before the conditions, where it has been all along.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _by_, _until_ and the point in time**',
  table(['you say', 'what it means'], [
    ['_It will be finished **by** the twentieth._', 'on or before that date — the thing is complete'],
    ['_We cannot start **until** October._', 'the waiting continues up to then'],
    ['_**By then** the paper will have arrived._', '_by then_ refers back to a date already named'],
    ['_**By the end of** the month I will know._', 'a period, not a day'],
    ['_**In** two weeks\' time I will know._', 'two weeks from now — not _after_ two weeks_'],
  ], [2.6, 2.0]),
  '**_By_ is a deadline; _until_ is a duration.** _Finish by Friday_ · _wait until Friday_. The test: if the sentence is about something being **complete**, it takes _by_; if it is about something **going on**, it takes _until_.',
  '**_By then_ needs a _then_.** Name the date first and then use _by then_ — _the meeting is on the twenty-seventh; by then I will have the mark analysis_ — and never use it first, because a reader has to hold an empty reference.',
  '**Give the date a definition.** _By the twentieth of November I will have twelve thousand booklets_ is a different promise from _the work will be finished by the twentieth_, and the difference is three days in a yard. Say what the date is the date **of**.',
  '**And give two dates when there are two.** _By the twentieth if the paper comes by the seventh; by the fifth of December if it comes as late as last time._ One date with a condition under it is honest; one date with the condition in your head is the eight days in the file.',
  '⚠ ~~I will know until Friday~~ → _by Friday_. ⚠ ~~We cannot start by October~~ → _until October_.',
  '⚠ ~~After two weeks I will know~~ (meaning from now) → _in two weeks_ · _in two weeks\' time_.',
  '⚠ ~~Until the end of October we will know~~ → _by the end of October_.',
  '**Useful phrases:** the eight days are in a file with my name on them for ever · I can give two dates · a date needs a definition behind it.',
  '**Practise:** Finish each with a date, a condition and what you will not know by then.  1 _I will have the delivery notes…_  2 _Nothing can be decided…_  3 _The complaints figure will be in…_  4 _We cannot book the month…_  5 _I will know whether it is a batch…_',
  '**Pronunciation.** 🔊 **Track 14.10** _By the end of_ is said as one unstressed piece — /baɪðiˈendəv/ — with the weight on the month: _by the end of OCtober_. And _until_ is /ənˈtɪl_/ with nothing on the first syllable. Listen to eight and write **by** or **until**; four of each, and two of them are negative.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the half-sentence from the card. B finishes it with a date, the condition the date depends on, and one thing that will still not be known by then. A asks: _and what is the date the date of?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________'],
  ['B', '…by __________, if __________. By then I still will not know __________.'],
  ['A', 'What is the date the date of?'],
  ['B', '__________, which means __________ and not __________.'],
]));
out.push(table(['Card A – half-sentences', 'Card B – half-sentences'], [
  ['I will have the delivery notes…', 'Nothing can be decided…'],
  ['The complaints figure will be in…', 'We cannot book the month…'],
  ['I will know whether it is a batch…', 'The resurfacing will be done…'],
  ['The twelve thousand booklets will be ready…', 'The results will be released…'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight dates and, next to each, what the date is the date **of**. Three or four of the eight will turn out to mean something slightly different from what the listener assumed — _ready_ against _out of the premises_, _released_ against _reported_ — and every one of those gaps is somebody\'s eight days.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a date you have given somebody at work, or been asked for. Say it with the condition it depends on, with the definition of what the date is the date of, and with one thing you will not know by then.'));
out.push(p('**b**  Swap. Then each of you say what the other\'s date would mean to somebody who read it in a file in a year\'s time.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel has a second ministry order and they want a date — not a price, a date. Twelve thousand copies of a sixty-four-page booklet, and the question on the form is one line: the date by which the work will be completed. He has written nothing in the box yet, which is why he brought it: in April he would have written the earliest date he could imagine, because that is how you get the order. Now he knows what that line costs, because the first order had the same box and he wrote the fourteenth of June in it and they finished on the twenty-second, and the eight days are in a file with his name on them for ever. The honest date is: by the twentieth of November he will have twelve thousand booklets, if the paper arrives in the first week of October — and the paper is the whole thing, because it comes through an agent and the last three orders came between nine and twenty-three days late. Jad said then he cannot give a date at all, and Bassel said he can give two: by the twentieth of November if the paper comes by the seventh of October, and by the fifth of December if it comes as late as last time — and that is what he is going to write in the box, in both halves, even though nobody has ever written two dates in that box. Then the grammar: by and not until. By the twentieth means it is finished on or before it; until the twentieth means the work goes on and then stops and tells you nothing about whether it is finished. Then Ms Huda marked the third thing: the word finished. He had said twelve thousand booklets and not finished, because finished on that form means printed, folded, trimmed, boxed and out of the premises — and the premises includes the yard. Three of those eight days were the booklets sitting in the yard, finished, and him thinking the clock had stopped. So a date needs a definition behind it, and the definition is on the page before the conditions._'));
out.push(p('**Listener task:** write one date from this room and what it is the date of.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Bassel writes in the box, and the page he attaches to it. Answer the questions.'));
out.push(model([
  '**MINISTRY ORDER 2026/2 · DATE BY WHICH THE WORK WILL BE COMPLETED** · B. Tahhan, Dar al-Kutub Press · the box, and one attached page',
  '**In the box:** _By 20 November 2026 if paper is received by 7 October. By 5 December 2026 if paper is received after 20 October. See attached page._',
  '**The attached page.**',
  '**What I am putting a date on.** Twelve thousand copies, sixty-four pages, printed, folded, trimmed, boxed and **off the premises** — which, under definition 3 of the conditions, includes the yard. The first order I dated as "finished", and three of the eight days I was late were twelve thousand booklets standing in the yard while I thought the clock had stopped.',
  '**What the date depends on.** One thing: the paper. It comes through an agent and the last three orders arrived 9, 16 and 23 days after the date I was given. If it is here by the seventh of October, the twentieth of November is nine out of ten; if it comes on the twenty-third, the fifth of December is six.',
  '**What is not a risk, and I say so because the last form made me look as though everything was.** The machines are not a risk: both were serviced in August and the older one has run a sixty-four-page job twice this year. The folding is not a risk. The people are not a risk; the same three men have done every ministry job since 2019 and one of them is now named in writing to authorise work when I am not there.',
  '**What I will not know by either date.** Whether your own office will approve the proof inside the five working days the conditions allow. The first order took eleven. That is not mine to promise, so I am asking for one line in reply confirming who signs the proof and in how many days.',
  '**Why two dates and not one.** Because one date is a promise about somebody else\'s delivery lorry. In April I would have written the eighth of November, and in December there would be a second file with my name on it.',
]));
out.push(item('1', 'What exactly is he putting a date on, and why does he spell it out?'));
out.push(item('2', 'What does he say is not a risk, and why does he include that paragraph?'));
out.push(item('3', 'What will he not know by either date, and what does he ask for?'));
out.push(writers([
  'A date, written honestly: **the two dates with the condition between them, in the box** → **what the date covers, defined** → **what the date depends on, with the history of that thing** → **what is _not_ a risk** → **what you will not know by either date** → **and why two dates and not one**.',
  'Define the finish. _Printed, folded, trimmed, boxed and off the premises_ — because the gap between _ready_ and _gone_ is where the days go, and the definition is usually already written on a page somebody has not read.',
  'Give the dependency its **record**: _the last three orders arrived 9, 16 and 23 days late._ A condition with a history behind it is a reason; a condition with nothing behind it is an excuse written in advance.',
  '⚠ Say what is **not** a risk. A page that lists only dangers reads as a man covering himself; the same page with three things declared safe reads as a man who knows his shop.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the date, and the page that goes with it, for something you have to promise (60 words or more).'));
out.push(p('**In the box:** _By ______________ if ______________. By ______________ if ______________. See attached page._   **What I am putting a date on.** ______________, which means ______________ and not ______________.   **What the date depends on.** One thing: ______________. The last ______ arrived ______________. If ______________, I would put ______________ at ______ out of ten.   **What is not a risk.** ______________ is not a risk: ______________. ______________ is not a risk. ______________ is not a risk, because ______________.   **What I will not know by either date.** ______________. I have not put it in the box because ______________, and I am asking for ______________.   **Why two dates and not one.** Because one date is a promise about ______________. ______________, and it is also the thing I would want if I were reading it.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_by_ for the deadline and _until_ for the waiting, each in its place',
  'The finish defined — what the date is the date of',
  'The dependency with its own record behind it',
  'What is not a risk, and what you will not know by either date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what is not a risk" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) for a date you have to give somebody — a delivery, a report, a repair, a result, a decision. Two dates with the condition between them, the finish defined, the dependency with its history, what is not a risk, and what you will not know. Then write underneath the date you would have written a year ago.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person who has to put the date in their own plan**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who has given a single date this year for something that depended on somebody else\'s delivery?** Nearly everybody. Then: who was late, and by how much? Collect the days and total them. The total is this room\'s price for a habit that costs one extra line of writing.'));
out.push(hw('Write the two-date version of a promise you have already made (60+ words), with the finish defined and the dependency\'s history. Then give it to the person who is waiting, and write down what they said about the second date.'));

// ======================= 14.6 =======================
out.push(pb());
out.push(h2('14.6  A forecast with its assumptions under it'));
out.push(p('**Function:** writing a forecast   ·   **Grammar:** the whole probability system in one document   ·   **Pronunciation:** reading a forecast aloud without selling it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put the forecast you brought on the table — a budget, a projection, a schedule of works, a weather page, anything with a number about the future in it. Find the assumptions. In most of them there are none written down at all, and the question is then: _what must the writer have assumed?_'));
out.push(board('Twelve thousand by 20 November — if the paper comes by 7 October.', 'the number · and what it rests on'));
out.push(p('**b**  Which of these is a forecast, and which is a wish? **1** _Sales will grow by ten per cent._  **2** _Sales will grow by between five and twelve per cent if the second shop opens in March._  **3** _We expect improvement._  **4** _Lateness will fall by a quarter to a half if no fifth visit is added._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Whose forecast does the class take apart, and what is missing from it?'));
out.push(p('**b**  Listen again. **1** What are the three assumptions the class finds underneath the number?   **2** What does Ms Huda say the difference is between a forecast and a target?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.11  What is it standing on?', [
  ['Omar', 'I have brought the one from my own company and it is one line. "Service revenue is expected to grow by eighteen per cent in 2026."'],
  ['Ms Huda', 'Who wrote it?'],
  ['Omar', 'The commercial manager, in August, for the owner. It is the only sentence about next year in a nine-page document.'],
  ['Nour', 'Eighteen is a strange number. Not twenty, not fifteen.'],
  ['Omar', 'It is a strange number and that is the first thing I noticed after a year in this room. A round number is usually a hope and an odd number is usually arithmetic, so there is arithmetic somewhere and it is not on the page.'],
  ['Jad', 'What would it have to assume?'],
  ['Omar', 'Three things, and I have worked them out. One: that the two large contracts we have both renew, because between them they are a third of the service revenue. Two: that we keep all four engineers, and we lost two in eighteen months. Three: that the price goes up in January, which has been discussed and not decided.'],
  ['Lubna', 'So the eighteen per cent is really "if two contracts renew and nobody leaves and we raise the price".'],
  ['Omar', 'And if any one of those three does not happen, the number is wrong — and nobody reading the nine pages can see that, because the assumptions are in the commercial manager\'s head.'],
  ['Rasha', 'Is he hiding them?'],
  ['Omar', 'No. I think he has never written them down in his life and nobody has asked him to. He is not a dishonest man, he is a man with a number.'],
  ['Ms Huda', 'Here is the distinction the unit has been walking towards, and it is worth two minutes. A **forecast** is a number with its assumptions written under it, and its purpose is to let somebody else see which of the assumptions to doubt. A **target** is a number with nothing under it, and its purpose is to make people try harder. Both are legitimate documents and they are not the same document, and most of the trouble in offices comes from one being read as the other.'],
  ['Omar', 'The owner is reading a target as a forecast.'],
  ['Ms Huda', 'The owner is reading a target as a forecast, and in March, when one contract does not renew, somebody will be asked why the forecast was wrong — and the honest answer will be that it was never a forecast.'],
  ['Nour', 'What would you write instead?'],
  ['Omar', 'The same number, and four lines under it. Eighteen per cent **if** both large contracts renew, **if** we keep four engineers, and **if** the January price rise happens. Twelve per cent if one contract goes. Four per cent if we lose an engineer as well. And I would put a number out of ten on each of the three.'],
  ['Ms Huda', 'Which is a page instead of a line, and it is the page the owner is going to need in March.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A forecast, and what has to be under it**',
  table(['the part', 'what it does'], [
    ['**the number, with a range**', '_between five and twelve per cent_ — not a single figure'],
    ['**the assumptions, listed and numbered**', 'what must be true for the number to hold'],
    ['**a likelihood on each assumption**', '_eight out of ten · six out of ten_'],
    ['**the alternative numbers**', 'what happens if assumption 1, or 2, fails'],
    ['**the date it is tested**', 'and who will do the counting'],
  ], [2.3, 2.3]),
  '**A forecast is a number with its assumptions under it; a target is a number with nothing under it.** The first exists so that a reader can see which part to doubt; the second exists to make people try. Both are honest documents and they must not be confused, and most of the time the confusion is nobody\'s fault: the writer has simply never written the assumptions down.',
  '**A round number is usually a hope and an odd number is usually arithmetic.** _Eighteen per cent_ has a sum behind it somewhere. Ask for the sum, politely, and in writing.',
  '**Give each assumption a likelihood, and then the alternative numbers.** _Twelve per cent if one contract goes; four per cent if we lose an engineer as well._ Three numbers with their conditions beat one number every time, because a reader can plan against the worst of them.',
  '**And name the test.** _The complaint log, by reason, for October against August, counted at the desk and not by me._ A forecast nobody will ever check is a sentence, not a forecast.',
  '⚠ ~~It is expected to grow~~ with nobody doing the expecting. The passive is where assumptions go to hide; if a number is yours, write _I expect_ and then say what on.',
  '⚠ ~~We hope to achieve eighteen per cent~~ in a document headed _forecast_. A hope in a forecast is a target, and it should be labelled one.',
  '**Useful phrases:** a round number is usually a hope · the assumptions are in the commercial manager\'s head · he is not a dishonest man, he is a man with a number · the owner is reading a target as a forecast.',
  '**Practise:** Turn each target into a forecast with three numbered assumptions and two alternative numbers.  1 _Revenue will grow by eighteen per cent._  2 _The booklets will be delivered in November._  3 _Lateness will fall by a third._  4 _We will finish the survey by June._',
  '**Pronunciation.** 🔊 **Track 14.12** Reading a forecast aloud without selling it: the **number flat**, the **conditions slower and slightly louder**, and a real pause before each _if_. _Eighteen per cent ‖ **if** both contracts renew ‖ **if** we keep four engineers._ Read fast, a forecast sounds like a promise. Listen to four readings of the same forecast and mark the two that are read fairly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the target from the card. B turns it into a forecast out loud: the number with a range, three numbered assumptions with a likelihood on each, and two alternative numbers. A then names the assumption they would doubt first. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Between __________ and __________, if: one, __________ — eight out of ten; two, __________ — six; three, __________ — four.'],
  ['B', 'If two fails: __________. If three fails as well: __________.'],
  ['A', 'Which assumption would I doubt first?'],
  ['B', '__________, and so would I.'],
]));
out.push(table(['Card A – targets', 'Card B – targets'], [
  ['Revenue will grow by eighteen per cent.', 'The booklets will be delivered in November.'],
  ['Lateness will fall by a third.', 'We will finish the survey by June.'],
  ['The trial will be extended to all night staff.', 'The results will come back within 24 hours.'],
  ['The road will be resurfaced before the winter.', 'Twelve of the fifteen are from one batch.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the assumption you would doubt first for each of the eight. In six or seven of them the whole class doubts the same one — and in every case it is the assumption that depends on **somebody outside the room**, which is the most useful single thing to know about forecasting.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the forecast you brought in. Say the number, then the assumptions you think are under it, then which of them you would doubt — and say whether the document is a forecast or a target wearing a forecast\'s clothes.'));
out.push(p('**b**  Swap. Then each of you say what the other\'s document would have needed in order to be useful in March.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar brought in a forecast from his own company and it is one line: service revenue is expected to grow by eighteen per cent in 2026. It was written by the commercial manager in August for the owner, and it is the only sentence about next year in a nine-page document. Nour said eighteen is a strange number — not twenty, not fifteen — and Omar said that is the first thing he noticed after a year in this room: a round number is usually a hope and an odd number is usually arithmetic, so there is arithmetic somewhere and it is not on the page. He has worked out the three things it must assume: that the two large contracts both renew, because between them they are a third of the service revenue; that all four engineers stay, and they lost two in eighteen months; and that the price goes up in January, which has been discussed and not decided. Lubna said so the eighteen per cent is really "if two contracts renew and nobody leaves and we raise the price" — and Omar said yes, and if any one of the three does not happen the number is wrong, and nobody reading the nine pages can see that, because the assumptions are in the manager\'s head. Rasha asked whether he is hiding them, and Omar said no: he has probably never written them down in his life and nobody has asked him to — he is not a dishonest man, he is a man with a number. Then Ms Huda gave the distinction: a forecast is a number with its assumptions written under it, so that somebody else can see which of them to doubt, and a target is a number with nothing under it, whose purpose is to make people try harder. Both are legitimate and they are not the same document, and most of the trouble in offices comes from one being read as the other. Omar said the owner is reading a target as a forecast — and Ms Huda said that in March, when one contract does not renew, somebody will be asked why the forecast was wrong, and the honest answer will be that it was never a forecast. What Omar would write instead is the same number with four lines under it: eighteen per cent if all three hold, twelve if one contract goes, four if they lose an engineer as well, and a number out of ten on each._'));
out.push(p('**Listener task:** write one number from this room and the assumption under it that you would doubt first.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Omar\'s page. Answer the questions.'));
out.push(model([
  '**SERVICE REVENUE, 2026 · A FORECAST AND NOT A TARGET** · O. Darwish · September · one page, attached to the August document',
  'The August document contains one sentence about next year: _service revenue is expected to grow by eighteen per cent in 2026._ This page says what that number is standing on, because in March somebody will ask.',
  '**The number, with a range.** Between **four and eighteen per cent**, and eighteen only if all three assumptions below hold. My own figure is **nine to twelve**.',
  '**Assumption 1 — both large contracts renew.** A third of service revenue between them; one renews in February, the other in May. **Seven out of ten** for February — four years and nothing has gone wrong — and **five out of ten** for May, because in July they asked us two questions about price that they had never asked before.',
  '**Assumption 2 — we keep four engineers.** We lost two in the last eighteen months, both to companies that pay about a fifth more. **Six out of ten**, and it is the assumption I would doubt first if I were the owner.',
  '**Assumption 3 — the January price rise happens.** Discussed twice, not decided; the last rise was in 2024. **Five out of ten.**',
  '**The alternative numbers.** If the May contract goes: **twelve per cent**. If an engineer goes as well: **four per cent**. If both the May contract and two engineers go, revenue falls and I have not put a figure on that because I do not have the costings and should not invent them.',
  '**What is not an assumption.** The equipment, the premises and the two small contracts: nothing about next year depends on them, and I say so because a page of conditions reads as though everything were uncertain.',
  '**How this will be judged, and by whom.** The monthly service revenue figure the accounts office produces anyway, against the same month last year, not by me — and the first month that matters is March.',
  '**And what this page is not.** It is not a criticism of the August document: a target is a reasonable thing for a commercial manager to write. It is a criticism of reading it as a forecast, and the person doing that is the owner, because nobody has ever given him the page underneath.',
]));
out.push(item('1', 'What range does he give, and what is his own figure?'));
out.push(item('2', 'Which assumption would he doubt first if he were the owner, and why?'));
out.push(item('3', 'What does he say the page is not, and who does he say is making the mistake?'));
out.push(writers([
  'A forecast page: **the number with a range and your own figure inside it** → **the assumptions, numbered, each with a likelihood and the fact behind it** → **the alternative numbers** → **what is _not_ an assumption** → **who will judge it and when** → **and what the page is not**.',
  'Put a likelihood on each assumption and the **reason for the likelihood**: _five out of ten, because they asked us two questions about price in July that they had never asked before._ That clause is the whole value of the page.',
  'Refuse to invent the figure you do not have: _I have not put a figure on that because I do not have the costings and should not invent them._ One refusal makes every other number on the page believable.',
  '⚠ End by taking the blame off the person who wrote the original. _A target is a reasonable thing for a commercial manager to write._ A page that corrects a colleague is filed; a page that corrects a **reading** is used.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the forecast page for a number in your own work (60 words or more).'));
out.push(p('**______________ · A FORECAST AND NOT A TARGET** · ______________   The ______________ document contains one sentence: _______________._ This page says what that number is standing on.   **The number, with a range.** Between ______________ and ______________. My own figure is ______________.   **Assumption 1 — ______________.** ______________. **______ out of ten**, because ______________.   **Assumption 2 — ______________.** ______________. **______ out of ten**, and it is the one I would doubt first.   **Assumption 3 — ______________.** ______________. **______ out of ten.**   **The alternative numbers.** If ______________: ______________. If ______________ as well: ______________. If ______________, I have not put a figure on it because ______________.   **What is not an assumption.** ______________.   **How this will be judged, and by whom.** ______________, not by me, and the first month that matters is ______________.   **And what this page is not.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A range, and your own figure inside it',
  'Every assumption numbered, with a likelihood and the fact behind it',
  'The alternative numbers — and a refusal where you have no figure',
  'What is not an assumption, and who judges it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the assumption they would doubt first, with its number out of ten.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full forecast page (140 words or more) for a real number about the future in your own work — a volume, a date, a cost, a rate, a figure somebody has already published. Then write underneath whether the original was a forecast or a target.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person whose number it was in the first place**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the documents the room brought in had assumptions written down?** Count. In two years of running this cycle the answer has never been more than two out of eleven. Then the second question: how many of the numbers were round? The two counts together are the argument for the whole unit.'));
out.push(hw('Write the forecast page for one number somebody else has published in your workplace (60+ words). Give it to the person who published it, and write down which assumption they said was wrong.'));

// ======================= 14.7 =======================
out.push(pb());
out.push(h2('14.7  Review & Mediate: How far to trust a forecast'));
out.push(p('**Function:** explaining a forecast and saying how far to trust it   ·   **Recycling:** Units 1–14   ·   **Exam practice:** B1 Preliminary Reading Part 2, Writing Part 2, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 14 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It will likely fall by a third.  **2** They will not probably answer.  **3** It may to be the afternoon run.  **4** There is a chance to happen.  **5** I will know until Friday.  **6** It is possible that it may be the tubes.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the forecast that was in front of the rota committee on the fifteenth of September.'));
out.push(box(null, [
  '**WARD 4 · THE THREE-NIGHT TRIAL · REPORT AND FORECAST** _(R. Barakat, 12 September — two pages; this is the second)_',
  '**The forecast.** If three-night blocks are kept for the whole of nights from November, I expect errors on fourth and fifth nights to stay at **nil**, and round completion to be late on **between a quarter and a half** of nights rather than the **two-thirds** of February to July. I would put it at **seven out of ten**.',
  '**Assumption 1 — a second trolley on the ward.** Four weeks in August with two trolleys: late eleven times out of twenty-eight against twenty-six out of thirty-one in the four weeks before. **Nine out of ten that it matters; four out of ten that the trolley stays**, because it belongs to the equipment office and was lent.',
  '**Assumption 2 — the blocks themselves.** Seven errors in nine months, all on fourth or fifth nights, none since 1 June. **Six out of ten.** I cannot separate this from assumption 1 and I have said so on every page since April.',
  '**Assumption 3 — that the counting continues.** Two nurses are entering times. If either stops, there is no figure in March. **Seven out of ten.**',
  '**The alternative numbers.** If the trolley goes back and the blocks are kept: late on about half the nights, errors unknown. If the blocks go and the trolley stays: I do not know, and that is the experiment nobody has run.',
  '**What is not a claim.** That the fourteen years before this one were anybody\'s fault. Nobody counted, and a thing nobody counted is not a thing anybody got wrong.',
  '**Judged by.** The night sheet, by somebody other than me, in March.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Nour and Jad read the forecast cold, as two people who were not in the room. Which assumption do they say the committee will act on, and which number do they say will be quoted back wrongly?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.13  Two people who were not there', [
  ['Ms Huda', 'Nour, Jad — you were not in that meeting and you do not work in a hospital. Read it as a committee reads it. What is the first thing you see?'],
  ['Jad', 'The seven out of ten. It is the first number on the page with a judgement in it and it is the one I believe, because nobody writes seven when they want you to say yes. If she wanted the trial she would have written nine.'],
  ['Nour', 'What I see is assumption one, and I would act on it before anything else on the page. Nine out of ten that the trolley matters and four out of ten that it stays — that is not a nursing question at all, that is an equipment office with a lent trolley, and it is the only line here that somebody could fix on Thursday.'],
  ['Ms Huda', 'So what would you do if you were the committee?'],
  ['Nour', 'Write to the equipment office and ask for the trolley permanently. It costs nothing and it is the one thing on the page with a nine against it.'],
  ['Jad', 'Which she has not asked for.'],
  ['Nour', 'She has not asked for it anywhere on either page, and that is the only thing I would criticise. She has put a nine out of ten on the floor in front of them and left them to pick it up.'],
  ['Ms Huda', 'And the number that will be quoted back wrongly?'],
  ['Jad', 'The nil. Errors at nil. It is in the forecast as something she **expects to stay** at nil, and in four months somebody will say "she said there would be no errors" — and there will be one, because there is always one, and the nil will be the thing she is wrong about.'],
  ['Nour', 'She should have given it a range, and you cannot give a range below zero.'],
  ['Jad', 'Then she should have written it as a rate. Nil in three months is not nil; it is nil out of about ninety nights, and the sentence that survives March is "I expect fewer than one in ninety" and not "nil".'],
  ['Ms Huda', 'That is the best piece of reading this class has done in two years. Say the rule.'],
  ['Jad', 'Any forecast of **nothing** should be written as a rate, because nobody can be right about nothing and somebody will test it against one.'],
  ['Nour', 'And the last paragraph is the one I would keep out of a committee paper and she has kept in.'],
  ['Ms Huda', 'Go on.'],
  ['Nour', '_A thing nobody counted is not a thing anybody got wrong._ It protects a woman who is not in the room and who has no idea it is there. In my company that sentence would be taken out by somebody senior before the paper went up, for being about a person — and it is the only sentence on the page that is about a person.'],
]));
out.push(sp());
out.push(box('Language box – reading a forecast, and saying how far to trust it', [
  'Find the **judgement number** first — the seven out of ten — because it tells you what kind of document you are holding. A forecast that gives itself nine out of ten is usually asking for something; one that gives itself seven is usually trying to be right.',
  'Then find the assumption with the **highest likelihood and the lowest control** — _nine out of ten that it matters, four out of ten that it stays_ — because that is the line somebody reading it can actually act on, and it is often not the line the writer is arguing for.',
  'Ask what is **not asked for**. A page that puts a nine out of ten in front of a committee and makes no request leaves the decision to whoever reads it most carefully, which may be nobody.',
  'Find the number that will be **quoted back wrongly**: a round figure, a single figure with no range, and above all a **nothing**. ⚠ Any forecast of nil should be written as a **rate** — _fewer than one in ninety_ — because nobody can be right about nothing.',
  'And separate the claim from the **not-a-claim**. The sentence that says what the page does not allege is the sentence a reader checks the rest of the page against.',
  '**Useful phrases:** nobody writes seven when they want you to say yes · she has put a nine out of ten on the floor and left them to pick it up · nobody can be right about nothing · it is the only sentence on the page that is about a person.',
  '**Pronunciation.** 🔊 **Track 14.14** Explaining a forecast to somebody who has not read it: the **number, then a pause, then what it rests on**, and the likelihood said flat. _Seven out of ten ‖ and it rests on a lent trolley ‖ four out of ten that it stays._ Listen to four and write the number and the likelihood only.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the forecasts below and does **not** show it. A reads it once, then explains it: the number, the assumptions, the likelihoods, what is not asked for, and the figure that will be quoted back wrongly. B must say what they would do on Thursday. **Then, in two minutes together**, decide the two things the reader of this forecast should do first. You do not have to agree. Change roles with the other forecast.'));
out.push(table(['Forecast A – a printing works', 'Forecast B – a laboratory'], [
  ['12,000 booklets by 20 Nov, or 5 Dec. 8/10.', 'Routine results in 26–36 hours; urgent in 4. 8/10.'],
  ['Assumption 1: paper by 7 Oct. Last three deliveries 9, 16 and 23 days late. 4/10.', 'Assumption 1: the afternoon run is the cause. Explains a whole day exactly. 7/10.'],
  ['Assumption 2: proof approved in 5 working days. Last time 11. 5/10.', 'Assumption 2: the new tubes cost two hours, not a day. 8/10.'],
  ['Assumption 3: both machines run. Serviced in August. 9/10.', 'Assumption 3: the porters\' round is not a factor. Never checked. 3/10.'],
  ['Not asked for: who signs the proof, and in how many days.', 'Not asked for: two weeks of times written on the bag.'],
  ['Will be quoted wrongly: "November".', 'Will be quoted wrongly: "24 hours".'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the two decisions from each pair. In almost every run the first decision is to supply the thing the forecast did **not** ask for — the name of the proof-signer, the two weeks of times — which is the finding of the cycle: the most useful thing in a forecast is usually the request that is missing from it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring the forecast you have been carrying since 14.6 — somebody else\'s number about the future. Explain it to your partner **without showing it**: the number, the assumptions as you have reconstructed them, which you would doubt, what is not asked for, and the figure that will be quoted back wrongly. They must ask: _how sure is the writer, in their own words?_, _which line could I act on this week?_ and _what will you be blamed for in March?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Nour and Jad read Rasha\'s forecast as two people who were not in the meeting. The first thing Jad saw was the seven out of ten — the first number on the page with a judgement in it, and the one he believes, because nobody writes seven when they want you to say yes: if she had wanted the trial she would have written nine. What Nour saw was assumption one, and she would act on it before anything else: nine out of ten that the trolley matters and four out of ten that it stays is not a nursing question at all, it is an equipment office with a lent trolley, and it is the only line on the page that somebody could fix on Thursday. So if she were the committee she would write to the equipment office and ask for the trolley permanently, because it costs nothing and it is the one thing with a nine against it. Jad pointed out that Rasha has not asked for that anywhere on either page, and Nour said that is the only thing she would criticise: she has put a nine out of ten on the floor in front of them and left them to pick it up. Then the number that will be quoted back wrongly: the nil. Errors at nil is in the forecast as something she expects to stay at nil, and in four months somebody will say she said there would be no errors — and there will be one, because there is always one. Nour said she should have given it a range and you cannot give a range below zero, and Jad said then she should have written it as a rate: nil in three months is nil out of about ninety nights, and the sentence that survives March is "fewer than one in ninety" and not "nil". The rule he gave is that any forecast of nothing should be written as a rate, because nobody can be right about nothing and somebody will test it against one. And the sentence Nour would have expected to be taken out of a committee paper is the one Rasha kept in: a thing nobody counted is not a thing anybody got wrong — which protects a woman who is not in the room and does not know it is there, and is the only sentence on the page that is about a person. So I decided to go back to my own page from 14.6 and turn my nil into a rate._'));
out.push(p('**Listener task:** which number will be quoted back wrongly, and what should it have been?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 2)', 7));
out.push(p('The five people below all want help with a number about the future. Choose from the eight pages (**A–H**) the one page that suits each person. There are **three** pages you do not need.'));
[
  '**1**  Hala has been given one figure for next year by her manager and has to plan a department round it. She wants to know what to ask him for.',
  '**2**  Wael has to promise a delivery date that depends on a supplier who has been late three times running.',
  '**3**  Suad keeps being told "within twenty-four hours" by a department whose real figure everybody knows is longer, and she wants to write the real one down without making a complaint.',
  '**4**  Rami has to answer a question at a counter that has three possible causes, and he keeps being quoted afterwards as having named one.',
  '**5**  Dalia predicts that a change her office is considering will produce no faults at all, and she has been warned that the claim will be used against her.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box(null, [
  '**A**  **Two dates and the condition between them.** How to put a deadline in a box when it depends on somebody else\'s lorry, with the delivery history behind it and the finish defined.',
  '**B**  **Say the number first.** Why a possibility given on its own is repeated as a cause, and how to give three of them so that none of them is heard as an answer.',
  '**C**  **Never forecast nothing.** Why a prediction of nil should always be written as a rate, and what happens in the month when one occurs.',
  '**D**  **The schedule nobody owns.** Writing the real durations in the same shape as the printed sheet, with a mean and a range, and giving it to the person who would reprint it.',
  '**E**  **Ask for the arithmetic.** What to do with a single figure and no assumptions under it: the three questions to put, in writing, to the person whose number it is.',
  '**F**  **The itinerary somebody else can follow.** Warnings at the top, a person at every line, and what to do if nobody is there.',
  '**G**  **Reporting what was said.** Choosing the verb, and why the reporting verb is where your opinion goes.',
  '**H**  **The limits page.** Putting the strongest objection to your own case in front of the figures instead of after them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining somebody else\'s forecast to a person who has to act on it (60 words or more).'));
out.push(p('The ______________ came out on ______________ and the number in it is ______________.   **How sure the writer is, in their own words.** ______________ — which tells you ______________.   **What it rests on.** ______________ (______ out of ten) · ______________ (______ out of ten) · ______________ (______ out of ten).   **The line you could act on this week** is ______________, because it has ______ out of ten against it and it is not ______________.   **What is not asked for.** ______________. ______________ has been put in front of you without a request attached to it.   **The number that will be quoted back wrongly** is ______________, because ______________. It should have been written as ______________.   **And what the page does not claim.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The writer\'s own judgement number, quoted',
  'Each assumption with its likelihood and the fact behind it',
  'The line the reader could act on this week',
  'The number that will be quoted back wrongly, and what it should have been',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these two questions. Write **140 words or more**.',
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**Were you right?** Tell us about a prediction you made about your work or your life — what you predicted, what actually happened, and whether you were wrong about the event or about the reason. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"Nobody writes seven out of ten when they want you to say yes."_',
]));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 14 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The complaints are ___ to fall.   a) likely   b) likely that   c) like',
  '2  They ___ answer, but I would not count on it.   a) will probably not   b) probably will not   c) will not probably',
  '3  It ___ be the afternoon run — it is one of three things.   a) must   b) may   c) cannot',
  '4  There is a chance ___ nothing will change.   a) to   b) of   c) that',
  '5  I will have the figures ___ Friday.   a) until   b) by   c) in',
  '6  Nothing can be decided ___ the paper arrives.   a) by   b) until   c) for',
  '7  It is ___ a different sand: it is coarser to the eye and I have not had it tested.   a) definitely   b) clearly   c) certainly',
  '8  In two weeks\' ___ I will know.   a) time   b) later   c) after',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 2 style – matching).** 🔊 **Track 14.15** You will hear five people talking about a number they have had to deal with. For each speaker (**1–5**), choose from **A–H** what each one says the real problem was. There are **three** letters you do not need.'));
out.push(box(null, [
  '**A**  The number had no range round it, so it was quoted as a promise.',
  '**B**  The number depended on somebody outside the building.',
  '**C**  A possibility was repeated as a cause.',
  '**D**  A forecast of nothing was tested against one occurrence.',
  '**E**  The assumptions existed only in one person\'s head.',
  '**F**  The date meant something different from what the reader assumed.',
  '**G**  Nobody had ever counted the thing being argued about.',
  '**H**  The figure was correct and nobody acted on it.',
]));
[
  '**1**  Speaker 1 ______   **2**  Speaker 2 ______   **3**  Speaker 3 ______   **4**  Speaker 4 ______   **5**  Speaker 5 ______',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 14.15  Audio script (read after the check)', [
  ['Speaker 1', 'One line in nine pages: revenue is expected to grow by eighteen per cent. Eighteen is a strange number, so there is arithmetic somewhere, and it is not on the page. It assumes two contracts renew, four engineers stay and a price rise happens, and not one of those three is written down anywhere. The man is not dishonest. He has a number and nobody has ever asked him what it stands on.'],
  ['Speaker 2', 'I wrote the fourteenth of June in the box and we were ready on the eighteenth and the booklets left the premises on the twenty-second. Four of those days were the boxes standing in the yard while I thought the clock had stopped — and the yard is inside the premises, which is on the page before the conditions, where it had been all along.'],
  ['Speaker 3', 'I said it may be the afternoon run, and it is one of three things, and I think it is the likeliest of the three. He thanked me and went back to his ward and told them the laboratory loses the afternoon samples. I had not said that and it is what he heard, and the whole difference is that I did not say the number three first.'],
  ['Speaker 4', 'I wrote that there would be no faults. There was one, in the second month, and the one fault is now the whole conversation. I should have written fewer than one in ninety, which is what I meant and which that one fault would not have touched.'],
  ['Speaker 5', 'Nine out of ten that it matters, four out of ten that it stays, and it belongs to another office and it was lent. I put that on a page in front of four people and I did not ask for the thing. They would have written the letter if I had put it in one line, and I left them to see it for themselves, and they did not.'],
]));
out.push(p('**C  Writing.** Write a forecast page (140+ words) for one number about the future in your own work: the number with a range, three numbered assumptions each with a likelihood and the fact behind it, the alternative numbers, what is not an assumption, and who judges it and when.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 14)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ make a prediction with a date, a reason and a blind half',
  '☐ hedge honestly: say the number first, then the possibilities, then my ranking',
  '☐ say how likely something is with _likely to_, _a chance that_ and a number out of ten',
  '☐ put _probably_ and _definitely_ in the right place — and take them out where a number exists',
  '☐ use _by_ for a deadline and _until_ for the waiting, and define what the date is the date of',
  '☐ write a forecast with its assumptions, likelihoods and alternative numbers under it',
  '☐ tell a forecast from a target, and say which I am holding',
  '☐ find the number in somebody else\'s forecast that will be quoted back wrongly',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 15 – REGRET AND ALTERNATIVE PASTS', [
  '_should have done · would have happened · if I had known · I wish · if only._ Unit 14 was about what has not happened yet. **Unit 15** is about what did not happen and could have, which is the hardest grammar in the level and the easiest to use badly.',
  '**15.4 is the apology that names the thing**, and **15.6** is the honest report — an account of something that went wrong, written by the person it went wrong for. Both are built on the third conditional and both are ruined by it in a first draft, because a page of _I would have_ is a page of excuses.',
  '**Bring one thing you would do differently**, with the date it happened. Not a regret about a year or a decision about a career — one event, one day, one thing you did or did not do, and what you now know that you did not know then.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 14 · Student\'s Book');
