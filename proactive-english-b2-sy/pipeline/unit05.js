// Proactive English B2 · Syria Edition · Book 1 · Unit 5 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band.** Name the criterion, then **copy the line you are marking** — the line itself and not a summary of it — and then say what you found. Three sentences, three criteria, three quoted lines.';

out.push(h1('Unit 5  Not Only, But'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Units 1 to 4 were about **what** goes in a sentence. This unit is about **where** — which part a reader meets first, and what that does to the part they remember a fortnight later.',
  '**5.1** fronts the thing you want read first.   **5.2** is inversion after a negative adverbial, which is the one piece of B2 syntax an examiner notices in a single sentence.   **5.3** does the opposite and delays the point on purpose.   **5.4** takes the cleft from last year and adds the other three shapes.   **5.5** is the test that decides between them: **what will the reader quote?**   **5.6** writes the paragraph whose **first six words** carry the argument.   **5.7** explains why one version of a sentence was quoted and the other was not.',
  '**Exam practice in 5.7:** B2 First **Reading and Use of English Part 5** (multiple choice on a long text), **Writing Part 1** (the essay) and **Listening Part 1** (eight short extracts).',
  '⚠ **Bring two sentences of your own.** One that **somebody quoted back to you** — in a meeting, an email or a minute. And one you **expected** to be quoted and that nobody noticed. **5.5 is built on the pair and it does not work with invented examples.**',
  '**And keep the 1.7 essay.** It is not wanted until Unit 12, and the Mid-Book Test after Unit 6 is the last time anybody will remind you.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 5.1 =====================
out.push(pb());
out.push(h2('5.1  Of the eleven, nine'));
out.push(p('**Function:** fronting the part of the sentence you want read first   ·   **Grammar:** fronting · _of the eleven, nine_ · _what matters here is_   ·   **Pronunciation:** the comma you can hear after a fronted phrase'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the sentence somebody quoted back to you. Then read out the one nobody noticed. Say nothing about either of them yet — the class is collecting, not explaining.'));
out.push(board('Nine of the eleven sites have the old sheet.', 'Of the eleven sites, nine still have the old sheet.'));
out.push(p('**b**  What has been moved to the front, and what does the reader now meet first? **1** _Of the forty-one calls, thirty-four involved a promise._  **2** _What matters here is the date field._  **3** _In six of nine, there was nothing._  **4** _Eleven degrees it was, on arrival._  **5** _The one thing I need is the lot number._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a reader does with the first six words, and what did Nour discover about the sentence that was quoted?   **A** reads them twice; that it was the shortest   **B** decides what the sentence is about and does not revise it; that the quoted one had the figure at the front and the ignored one had it in the middle   **C** skips them; that it was the longest'));
out.push(p('**b**  Listen again. **1** What does Dima say happens to a noun that is not in the first six words?   **2** What does Ms Huda say about the comma after a fronted phrase?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.1  The first six words', [
  ['Ms Huda', 'Two sentences each: one that was quoted back to you and one that nobody noticed. Mrs Sabbagh, both of yours.'],
  ['Nour', 'Quoted: _Of the forty-one calls, thirty-four involved a promise that is in no note of ours._ Ignored: _I have been looking again at the escalation calls and I think there is a difficulty about the promises, because thirty-four of the forty-one involved one that is not recorded._'],
  ['Omar', 'The second one has the same figure in it.'],
  ['Nour', 'It has the same figure in it. It is in the twenty-second word.'],
  ['Ms Huda', '⚠ **And that is the whole unit.** A reader decides what a sentence is about from **the first six words**, and does not revise it. Not because they are careless — because that is what reading is: you build the shape and then you fill it in. **A figure in the twenty-second word arrives in a shape that has no room for it.**'],
  ['Dima', 'In copy I would say worse than that. A noun that is not in the first six words is not in the sentence, as far as a summary is concerned. I summarise nine contributors a fortnight and I summarise from the front.'],
  ['Ms Huda', 'Which is the practical argument for the whole of Unit 5. Now the move itself, and tonight it is the simplest of the four. **Fronting**: take the thing you want met first and put it there. _Of the eleven sites, nine still have the old sheet._'],
  ['Jad', 'Is that not just changing the word order?'],
  ['Ms Huda', 'It is exactly changing the word order, and English allows it in more places than students believe. ⚠ But it is not free: **a fronted phrase is a promise that the sentence is about that thing**, and if the rest of the sentence is about something else the reader feels cheated. _Of the eleven sites, the weather has been difficult_ is a broken sentence and it is grammatical.'],
  ['Hiba', 'What can be fronted?'],
  ['Ms Huda', 'Four kinds, and they cover almost everything you will need. **A quantity phrase:** _of the eleven, nine…_ **A place or time phrase:** _in six of nine, there was nothing._ **A _what_ clause:** _what matters here is the date field._ And **the object itself**, which is the strongest and the rarest: _eleven degrees it was, on arrival._'],
  ['Adnan', 'The last one sounds like poetry.'],
  ['Ms Huda', 'It sounds like speech, which is why it is rare in writing and worth one use in a page. ⚠ Use it twice and you have a style; use it once and you have an emphasis.'],
  ['Rim', 'And the comma?'],
  ['Ms Huda', 'Obligatory after a fronted phrase of more than about three words, and **audible**: _of the eleven sites ‖ nine still have the old sheet._ A fronted phrase run into the clause behind it is the commonest reason a good sentence is misread aloud — the listener takes _the eleven sites_ as the subject and then has to start again.'],
  ['Mazen', 'Mine is the other way round. The one that was quoted was the long one.'],
  ['Ms Huda', 'Then read us the first six words of it, and we shall find out why.'],
  ['Mazen', '_Nine drafts, fourteen months, eleven minutes._ Six words.'],
  ['Ms Huda', '**Six words, three figures and no verb.** That is fronting at its most extreme and it is the best sentence anybody has brought tonight.'],
]));
out.push(sp());
out.push(box('Language box – fronting', [
  '**The fact the whole unit rests on.** A reader decides what a sentence is about from **the first six words** and does not revise it. Not carelessness — that is what reading is: you build the shape and then fill it in. **A figure in the twenty-second word arrives in a shape with no room for it.**',
  '**Four kinds of fronting, and they cover almost everything.** **A quantity phrase:** _Of the eleven sites, nine still have the old sheet._ **A place or time phrase:** _In six of nine, there was nothing._ **A _what_ clause:** _What matters here is the date field._ **The object itself:** _Eleven degrees it was, on arrival._',
  '⚠ **A fronted phrase is a promise.** The sentence must then be **about** that thing. _Of the eleven sites, the weather has been difficult_ is grammatical and broken, and a reader who has been promised the sites and given the weather stops trusting the next sentence as well.',
  '**The object-fronted shape is worth exactly one use in a page.** _Eleven degrees it was._ Once and it is an emphasis; twice and it is a style; three times and the reader is listening to you instead of to the figure.',
  '**What _cannot_ be fronted, which saves time later.** Not the main verb. Not an indirect object without rewriting (_to the eleven managers I sent it_ is possible and heavy). And not a subordinate clause that the reader needs the main clause to understand — _although the dispatch list has seven entries_ at the front of a long sentence makes the reader hold a condition with nothing to attach it to.',
  '**How many in a page, since this will be asked.** Fronting is the cheapest of the four shapes in this unit and the only one you may use repeatedly: a quantity or a time phrase at the front of three paragraphs in a row is ordinary prose and nobody notices it. ⚠ The object-fronted shape is the exception, and there the limit is one. And fronting is **not** the same as a topic sentence: a topic sentence tells the reader what the **paragraph** is about, a fronted phrase tells them what **this sentence** is about, and a paragraph can need both.',
  '**And the summary argument, which is Mrs Khoury\'s.** _A noun that is not in the first six words is not in the sentence, as far as a summary is concerned._ Nine contributors a fortnight, summarised from the front, and that is what happens to everything any of you writes.',
  '**Pronunciation.** 🔊 **Track 5.2** The comma after a fronted phrase of more than about three words is **obligatory and audible**: _of the eleven sites ‖ nine still have the old sheet._ ⚠ Run together, the listener takes _the eleven sites_ as the subject and has to start the sentence again — which is the commonest reason a well-built sentence is misread aloud.',
  '**Practise:** Front the thing you want met first, and say which of the four kinds you have used. **1** a count  **2** a date  **3** a place  **4** the thing you need  **5** a figure you want remembered',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a flat sentence from the card. B fronts something and names which of the four kinds. A says what the sentence is now **promising** to be about. B then fronts something **else** from the same sentence, and A says which version they would quote. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(kind: __________)_ __________.'],
  ['A', 'That promises the sentence is about __________.'],
  ['B', '_(fronting something else)_ __________.'],
  ['A', 'I would quote the __________ one, because __________.'],
]));
out.push(table(['Card A – the flat sentence', 'Card B – the flat sentence'], [
  ['_Nine of the eleven sites still have the old sheet._', '_Thirty-four of the forty-one calls involved a promise._'],
  ['_There was nothing actionable in six of the nine openings._', '_Nineteen of the thirty-one lot boxes were empty._'],
  ['_I need the lot number and nothing else._', '_The catch has been loose since August._'],
  ['_Five of the seven errors happened on a fourth night._', '_Two of the four sites were never sent a pad._'],
  ['_Four pallets were eleven degrees over on arrival._', '_Eleven of the fifteen handsets came back._'],
  ['_It took nine drafts and fourteen months._', '_The joint is not as drawn in the 1974 detail._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight fronted versions and which kind each used. Then the count: **quantity phrases** are six or seven of the eight, because that is what everybody in this room has — figures. ⚠ And the finding: in the pairs where both versions were offered, the listener chose the one with **the figure at the front** almost every time, including when the other version was shorter.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the sentence of yours that **nobody noticed** and front the thing you wanted read first. Count the words before the figure in both versions.'));
out.push(p('**b**  Swap. Then each of you read only the **first six words** of your partner\'s two versions, and say what you expect each sentence to be about.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Two sentences each, one quoted back and one ignored. Nour\'s quoted sentence was: of the forty-one calls, thirty-four involved a promise that is in no note of ours. Her ignored one was twice as long and said the same thing, and Omar noticed that the figure is in both — in the twenty-second word of the second one. Which is the whole unit: a reader decides what a sentence is about from the first six words and does not revise it, not because they are careless but because that is what reading is, and a figure in the twenty-second word arrives in a shape that has no room for it. Dima put it more strongly from the copy side: a noun that is not in the first six words is not in the sentence as far as a summary is concerned, and she summarises nine contributors a fortnight from the front. Then the move, which is the simplest of the four in this unit: fronting — take the thing you want met first and put it there. Jad asked whether that is not just changing the word order, and Ms Huda said it is exactly that, and English allows it in more places than students believe — but it is not free, because a fronted phrase is a promise that the sentence is about that thing. "Of the eleven sites, the weather has been difficult" is grammatical and broken. Hiba asked what can be fronted, and the answer is four kinds: a quantity phrase, a place or time phrase, a what-clause, and the object itself, which is the strongest and the rarest. Adnan said the last sounds like poetry, and Ms Huda said it sounds like speech, which is why it is worth one use in a page: once and it is an emphasis, twice and it is a style. Then Mazen said his was the other way round — the sentence that was quoted was the long one — and was asked for its first six words. Nine drafts, fourteen months, eleven minutes. Six words, three figures and no verb, which is fronting at its most extreme._'));
out.push(p('**Listener task:** write the number of words before the figure in each of your two versions.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Dima sends the nine contributors about first sentences. Answer the questions.'));
out.push(model([
  '**THE FIRST SIX WORDS** · D. Khoury · 30 October',
  'This is for the nine of you and it is about the first six words of a paragraph. I have counted something and the figure is worse than I expected, and it is partly my doing.',
  '**What I counted.** The last six issues: sixty-one paragraphs of contributed copy. In how many of the sixty-one does a **figure, a date or a name** appear in the first six words? **Nine.**',
  '**What I do with the other fifty-two, and I had never written it down.** I summarise them from the front for the contents page, in about four words each. Which means that for fifty-two of sixty-one paragraphs, **the contents page describes the first six words and not the paragraph.**',
  '**One of the fifty-two, with no name on it.** _"There has been some discussion recently about the question of supply in the northern governorates, and it appears that pharmacies in several districts have been affected."_ My contents line for it was _supply discussion continues_. The paragraph\'s actual finding — nine of eleven pharmacies offered stock in the same week — is in the fourth sentence.',
  '**The same paragraph, fronted.** _"Of the eleven pharmacies contacted, nine had been offered stock in the same week."_ Thirteen words, and my contents line would have been _nine of eleven offered in one week_, which is the finding and not the subject.',
  '**What I am not asking for.** Shorter paragraphs. The fifty-two are not too long; they are **loaded at the wrong end**, and the repair is a reordering and not a cut. Three of the fifty-two are the best writing in the six issues.',
  '**One of the nine, with the name on it because she asked me to use it.** Lubna Sweidan\'s September paragraph begins _There is no picture of the joint._ Six words, and my contents line for it was _no picture of the joint_, which is her own sentence. It is the only contents line in six issues that is a quotation and not a summary, and I had not noticed that until I counted.',
  '**And what is partly my doing.** I have been writing the contents page from the front for four years and I have never told any of you that I do it. **Nine of you have been writing openings for a reader who exists, and the reader is me, and I summarise from the first six words.**',
  '**What I am asking for, and it is one thing.** A figure, a date or a name in the first six words. Not in the first sentence — in the first six words, which you can count on your fingers.',
]));
out.push(item('1', 'How many of the sixty-one paragraphs have a figure, date or name in the first six words?'));
out.push(item('2', 'What does she say the fifty-two are not, and what is the repair?'));
out.push(item('3', 'What is partly her doing, and why does it matter to the nine?'));
out.push(writers([
  'A page about first sentences: **say who it is for and what you counted** → **the figure, worse than expected** → **what you do with the rest, which you had never written down** → **one example with no name, and your own summary of it** → **the same thing fronted, with the summary it would have had** → **what you are not asking for** → **what is partly your doing** → **and the one request, in a countable form**.',
  '**Count the thing nobody has counted and give the figure early.** _Nine of sixty-one._ A page about openings that opens with a general observation has failed its own argument before the second line.',
  '⚠ **Print your own summary of the bad example beside it.** _My contents line for it was_ supply discussion continues. That is the evidence: not that the paragraph is poor, but that **your own summary of it describes its first six words**, which is a fact about you and therefore unarguable.',
  '**Say what you are not asking for, and mean it.** _Shorter paragraphs. The fifty-two are not too long; they are loaded at the wrong end._ Nine contributors told to be shorter will be shorter and no clearer, and three of them will write worse.',
  '⚠ And admit the part that is yours. _Nine of you have been writing openings for a reader who exists, and the reader is me._ A page that asks nine people to change without saying what the asker has been doing invisibly for four years will be obeyed and resented.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about first sentences (80 words or more).'));
out.push(p('**THE FIRST SIX WORDS** · ______________ · ______________   This is for ______________ and it is about ______________. I have counted something and ______________.   **What I counted.** ______________. In how many does ______________ appear in the first six words? **______.**   **What I do with the others.** ______________. Which means that for ______ of ______, ______________.   **One of them, with no name on it.** "______________" My summary of it was _______________. The actual finding is ______________.   **The same thing, fronted.** "______________" ______ words, and my summary would have been _______________.   **What I am not asking for.** ______________. The repair is ______________ and not ______________.   **And what is partly my doing.** ______________.   **What I am asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A count, given before any explanation',
  'The writer\'s own summary of the bad example, printed beside it',
  'What the writer is **not** asking for, in one sentence',
  'The part that is the writer\'s own doing, admitted',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their count.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): who it is for, the count, what you do with the rest, one example with your own summary of it, the fronted version, what you are not asking for, your own part in it, and the countable request.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a count given early, your own summary printed beside the example, what you are not asking for.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the first six words of your own page.** The room says what it expects the page to be about, and in about a third of cases they will be wrong. Then the sentence to leave the cycle on, which is Dima\'s: **the contents page describes the first six words and not the paragraph** — fifty-two times out of sixty-one, for four years, and nobody had been told.'));
out.push(hw('Write the page (80+ words). Then count: in the last five things you sent, how many had a **figure, a date or a name** in the first six words? Write the two numbers down.'));

// ===================== 5.2 =====================
out.push(pb());
out.push(h2('5.2  At no point did anybody ask'));
out.push(p('**Function:** inverting after a negative adverbial   ·   **Grammar:** _not only … but also_ · _at no point_ · _rarely_ · _under no circumstances_   ·   **Pronunciation:** the fall on the negative adverbial'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing that **never** happened at your work and that should have. Then say it again beginning with the words **at no point**. The second version is harder to say and you will hear why.'));
out.push(board('Nobody ever asked me about it.', 'At no point did anybody ask me about it.'));
out.push(p('**b**  Which are inverted correctly? **1** _At no point anybody asked._  **2** _Rarely have I seen a sheet signed twice._  **3** _Not only the figure was wrong but the date._  **4** _Under no circumstances is the box optional._  **5** _At no time did I say that._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say the inversion is **not** a trick, and what does Adnan notice about the register?   **A** because it is easy; that it is informal   **B** because the negative is what the sentence is about, so it goes first and the grammar follows; that it is the one B2 structure his own office already uses   **C** because examiners like it; that nobody uses it'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say happens if you front the negative and do **not** invert?   **2** What does Omar say about _not only … but also_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.3  The negative goes first and the grammar follows', [
  ['Ms Huda', 'Tonight looks like a trick and is not. Mr Barghouti, say the thing that never happened.'],
  ['Adnan', 'In nineteen years nobody has ever asked me for my own opinion in a meeting.'],
  ['Ms Huda', 'Now begin with _at no point_.'],
  ['Adnan', '_At no point in nineteen years… has anybody asked me…_ — and I have had to turn the verb round.'],
  ['Ms Huda', 'You have, and that is the whole grammar. **Front a negative adverbial and the clause inverts**: the auxiliary comes before the subject, exactly as in a question. _At no point **did** anybody ask._ _Rarely **have** I seen it._ _Under no circumstances **is** the box optional._'],
  ['Jad', 'Why? There is no question in it.'],
  ['Ms Huda', 'There is no question and there is a reason, and it is not arbitrary. ⚠ **The negative is what the sentence is about** — that is why you fronted it — and English marks a fronted element of that weight by moving the auxiliary. It is the same instinct as the question: the clause has stopped being a plain statement and the word order says so before the reader reaches the content.'],
  ['Hiba', 'And if you front it and do not invert?'],
  ['Ms Huda', 'Then you have written something that is wrong in a way an examiner notices in half a second. _At no point anybody asked_ is not a small error. ⚠ **It is the one error in this book that is visible from across a room**, which cuts both ways: get it right once in an essay and the range has been demonstrated; get it wrong once and the accuracy has been.'],
  ['Adnan', 'The strange thing is that we already write this. _Under no circumstances is the form to be returned unsigned._ That is the directorate house style and I have written it a thousand times.'],
  ['Ms Huda', '**And that is the discovery of the cycle.** You have had this structure for nineteen years and you have never used it for anything of your own. _Under no circumstances_ for the form, and _nobody has ever asked me_ for yourself.'],
  ['Omar', 'What about _not only … but also_? That one I was taught at school.'],
  ['Ms Huda', 'And taught half-way, which is the usual. Two things. **It inverts when it is fronted**: _Not only **was** the figure wrong, but the date was too._ And — this is the half nobody is taught — **the two halves must be the same kind of thing.** _Not only was the figure wrong but also the date_ is correct. _Not only was the figure wrong but also I was tired_ is not: those are not two of anything.'],
  ['Dima', 'I take out about one of those a fortnight.'],
  ['Ms Huda', 'Everybody does. Now the three that are worth having, and I would rather you had three than eight. **_At no point_** for a thing that never happened. **_Rarely_** for a thing that almost never does. **_Not only … but_** for two of a kind. ⚠ And one warning: **these are expensive.** A page with four inversions in it is a page by somebody performing, and the fourth one makes the reader doubt the first.'],
  ['Rim', 'How many in a page?'],
  ['Ms Huda', '**One.** Two if the page is long and they are far apart. And it goes where the page turns — not in the opening, which is Unit 5.1\'s business, and not in the conclusion, where it reads as a flourish.'],
  ['Mazen', 'Where, then?'],
  ['Ms Huda', 'At the point where the reader has the facts and has not yet drawn the conclusion. ⚠ _At no point in eleven months did anybody ask for the figure_ — placed there, it does the work of a paragraph.'],
]));
out.push(sp());
out.push(box('Language box – inversion after a negative adverbial', [
  '**The rule, and it is mechanical.** Front a negative adverbial and the clause **inverts**: the auxiliary comes before the subject, as in a question. _At no point **did** anybody ask._ · _Rarely **have** I seen it._ · _Under no circumstances **is** the box optional._ · _Not only **was** the figure wrong, but the date was too._',
  '**Why, which is not arbitrary.** The negative is **what the sentence is about** — that is why you fronted it — and English marks a fronted element of that weight by moving the auxiliary. The word order says the clause has stopped being a plain statement before the reader reaches the content. It also explains the limit: the inversion belongs to the **fronted** negative and to nothing else. _Nobody asked_ needs no inversion, because nothing has been moved, and there is no version of the rule that applies to a negative sitting in its ordinary place.',
  '⚠ **Front it and fail to invert and you have made the one error in this book that is visible from across a room.** _At no point anybody asked_ ✗. It cuts both ways: right once in an essay and the range is demonstrated; wrong once and the accuracy is.',
  '**The three worth having, and three is better than eight.** **_At no point_** — a thing that never happened. **_Rarely_** — a thing that almost never does. **_Not only … but (also)_** — two of a kind. ⚠ And one that is **not** worth having at B2: _little did I know_, which is fixed, faintly literary and almost always wrong in a report. **Three structures used accurately beat eight used bravely**, and the three are what an examiner credits.',
  '⚠ **_Not only … but also_ is usually taught half-way. The two halves must be the same kind of thing.** _Not only was the figure wrong but also the date_ ✓. _Not only was the figure wrong but also I was tired_ ✗ — those are not two of anything, and it is the commonest fault in the structure.',
  '**They are expensive. One in a page.** Two if the page is long and they are far apart. A page with four is a page by somebody performing, and the fourth makes the reader doubt the first.',
  '**And where it goes.** Not in the opening (5.1\'s business) and not in the conclusion (where it reads as a flourish), but **at the point where the reader has the facts and has not yet drawn the conclusion**. _At no point in eleven months did anybody ask for the figure_ — placed there, it does the work of a paragraph.',
  '**Pronunciation.** 🔊 **Track 5.4** The fall goes **on the negative adverbial and not on the verb**: _at **NO** point ‖ did anybody ask._ ⚠ Stress the verb — _at no point did anybody **ASK**_ — and the sentence becomes about asking rather than about never, which is the opposite of why it was inverted.',
  '**Practise:** Say it flat, then with the negative fronted and inverted. **1** nobody asked  **2** it has almost never happened  **3** two things were wrong  **4** it is never optional  **5** I did not say it at any time',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a flat negative sentence from the card. B fronts the negative and inverts. A checks the auxiliary. B then says **where in a page** the sentence would go, and why not the opening. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(fronted and inverted)_ __________.'],
  ['A', 'The auxiliary is __________, and it is / is not before the subject.'],
  ['B', 'In a page it would go __________, because __________.'],
]));
out.push(table(['Card A – the flat sentence', 'Card B – the flat sentence'], [
  ['_Nobody asked for the figure in eleven months._', '_The box has almost never been filled in._'],
  ['_I have hardly ever seen a sheet signed twice._', '_Nobody told the night staff about the trial._'],
  ['_The form must never be returned unsigned._', '_The timetable has not been corrected since 2021._'],
  ['_The figure was wrong and the date was wrong._', '_The joint was not measured and not photographed._'],
  ['_It has almost never come back a second time._', '_Nobody has turned one of the sheets over._'],
  ['_I did not say that at any time._', '_No decision has been recorded either way._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight inverted sentences and mark the auxiliary in each. Then the count: **the uninverted error appears in two or three of the eight** on a first run, and in every case it is with _at no point_ or _rarely_ — never with _under no circumstances_, because that one is a phrase people have met in official prose and learnt whole.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **one** inverted sentence about your own work — the thing that never happened — and say where in a page of yours it would go.'));
out.push(p('**b**  Swap. Then each of you check your partner\'s auxiliary, and say whether their sentence is about **never** or about the verb. If it is about the verb, the stress is wrong and the inversion is wasted.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tonight looks like a trick and is not. Adnan said the thing that never happened: in nineteen years nobody has ever asked him for his own opinion in a meeting. Asked to begin with "at no point", he got as far as "at no point in nineteen years" and then had to turn the verb round — which is the whole grammar. Front a negative adverbial and the clause inverts: the auxiliary comes before the subject, exactly as in a question. Jad asked why, since there is no question in it, and Ms Huda said the negative is what the sentence is about — that is why you fronted it — and English marks a fronted element of that weight by moving the auxiliary, so the word order says the clause has stopped being a plain statement before the reader reaches the content. Hiba asked what happens if you front it and do not invert, and the answer is that "at no point anybody asked" is not a small error: it is the one error in this book that is visible from across a room, which cuts both ways — right once in an essay and the range has been demonstrated, wrong once and the accuracy has been. Then Adnan said the strange thing is that his office already writes this: under no circumstances is the form to be returned unsigned, which is the directorate house style and he has written it a thousand times. Which is the discovery of the cycle — he has had the structure for nineteen years and has never used it for anything of his own. Under no circumstances for the form, and nobody has ever asked me for himself. Omar asked about not only, but also, which he was taught at school, and Ms Huda said taught half-way: it inverts when it is fronted, and the half nobody is taught is that the two halves must be the same kind of thing. And the last thing, which matters more than the grammar: these are expensive. One in a page, two if the page is long, and it goes at the point where the reader has the facts and has not yet drawn the conclusion._'));
out.push(p('**Listener task:** write your own inverted sentence and the place in a page where it would go.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Adnan writes to the directorate, with one inversion in it. Answer the questions.'));
out.push(model([
  '**THE FOUR PARAGRAPHS · a note on where they came from** · A. Barghouti · 31 October',
  'This is for the head of section and it is one page. I have been through four store and establishment paragraphs that this office uses, and I can tell you where one of them came from and not the other three.',
  '**The figures first.** Four paragraphs. One agent found — the works-office instruction of 2 March, minute 11/0342. Three unrecoverable, two of them on unsigned schedules. Nineteen years in this office, and a fortnight of looking.',
  '**What I am asking for is not a search.** I have stopped looking and I am not asking anybody else to start. What I am asking for is a bracket: five words in each paragraph saying what is known, including the words _no originating office is recorded_ where that is the truth.',
  '**And the thing I should like on the record, because it has taken me nineteen years to notice it.** _At no point in that time has anybody asked where one of these paragraphs came from._ Not a clerk, not a section head, not an applicant, and not me. They are quoted, applied and appealed against, and the question of their origin has never been put in writing by anybody in this building.',
  '**Why that is not an accusation.** Nobody asks because the paragraphs do not look as though they came from anywhere. A sentence with no person in it reads as a condition of the world, and you do not ask where the weather came from. **The form of the sentence is what suppressed the question**, and the form is the form.',
  '**What it has cost, so far as I can measure it.** One applicant in September, whose submission was late and who asked for an exception. There is no one to ask for an exception from a paragraph that says _it has been decided_, so she did not ask, and the practice she was asking about had in fact never stopped.',
  '**What I am proposing, and it is four lines of work.** The bracket on all four, and on the fourth — which is mine, from 2019 — the date and the room: _decided on 24 October 2019, in the directorate office_. That names nobody and answers the only question anybody has.',
  '**What the bracket would say on the three I cannot trace.** _Originating office not recorded; in use since at least 1998._ Eleven words, and they are the eleven words that would have let the September applicant ask somebody.',
  '**And one sentence about myself.** I wrote the fourth one to protect a colleague and I would do it again. What I would not do again is leave it for four years without the date.',
]));
out.push(item('1', 'How many agents has he found, and what is he **not** asking for?'));
out.push(item('2', 'What does he say suppressed the question, and why is it not an accusation?'));
out.push(item('3', 'What would he do again, and what would he not?'));
out.push(writers([
  'A page with one inversion in it: **the figures first** → **what you are not asking for** → **the inverted sentence, placed where the reader has the facts** → **why it is not an accusation** → **what it has cost, measured** → **what you propose, in units of work** → **and one sentence about yourself**.',
  '**The inversion goes in the middle and does the work of a paragraph.** _At no point in that time has anybody asked where one of these paragraphs came from._ Before it, four figures; after it, the explanation. ⚠ Put the same sentence in the opening and it is a complaint; put it in the conclusion and it is a flourish.',
  '⚠ **Follow an inversion immediately with _why that is not an accusation_.** A fronted negative is the strongest sentence shape available at B2 and the reader braces for a charge. One paragraph of exoneration — _nobody asks because the paragraphs do not look as though they came from anywhere_ — converts it into a finding.',
  '**Measure the cost in one person.** _One applicant in September, whose submission was late and who asked for an exception._ A cost expressed as a principle will be agreed with and forgotten; a cost expressed as one person in one month is acted on.',
  '⚠ And price the proposal in **work** and not in importance. _Four lines of work._ A proposal with no unit on it is read as large, and the reader\'s first question — how much of my time is this? — must be answered first.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with one inversion in it (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   This is for ______________ and it is one page.   **The figures first.** ______________. ______________. ______________.   **What I am asking for is not ______________.** ______________. What I am asking for is ______________.   **And the thing I should like on the record.** _At no point ______________ has ______________._ Not ______________, not ______________, and not me.   **Why that is not an accusation.** ______________. **______________ is what suppressed the question**, and ______________.   **What it has cost.** ______________.   **What I am proposing, and it is ______________ of work.** ______________.   **And one sentence about myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Figures before any argument',
  'One inversion, correctly inverted, in the middle of the page',
  'A paragraph of exoneration immediately after it',
  'The proposal priced in units of work',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their inverted sentence and say where in the page it sits.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the figures, what you are not asking for, **one** inversion placed in the middle, the exoneration, the cost in one person, the proposal in units of work, and the sentence about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: one inversion, correctly inverted and correctly placed; the exoneration after it; the cost measured in one person.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your inverted sentence twice: once with the fall on the negative and once with it on the verb.** The room says which version is about _never_. Then the sentence to leave the cycle on, which is Adnan\'s: **_under no circumstances_ for the form, and _nobody has ever asked me_ for himself** — nineteen years with the structure in his hand.'));
out.push(hw('Write the page (80+ words). Then find **one** inversion in something your workplace has sent you — a notice, a form, a circular — and write down whether it is about a thing or about a person.'));

// ===================== 5.3 =====================
out.push(pb());
out.push(h2('5.3  It was not until June that anybody counted'));
out.push(p('**Function:** delaying the main point to the end of the sentence on purpose   ·   **Grammar:** _it was not until … that_ · end-weight   ·   **Pronunciation:** holding the voice up until the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing that took far longer to happen than it should have. Then say it again so that the **time** comes first and the **thing** comes last. Say which version you would use in a meeting and which in a letter.'));
out.push(board('Somebody counted them in June, finally.', 'It was not until June that anybody counted them.'));
out.push(p('**b**  What is being held back to the end? **1** _It was not until September that he asked._  **2** _What nobody had done was turn one over._  **3** _Only after the fourth night did the errors appear._  **4** _Not one of the fourteen shows the joint._  **5** _It was the storeman, in the end, who counted._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say delay is the opposite of 5.1 and not a contradiction of it, and what does Yara find she has been doing?   **A** it is not; putting the figure last   **B** because fronting decides what the sentence is **about** and delay decides what it **ends on**, which are two different jobs; putting the most important thing in the middle of every sentence   **C** because 5.1 was wrong; nothing'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the middle of a sentence is?   **2** What does Lubna say about reading a delayed sentence aloud?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.5  The middle is where things go to be forgotten', [
  ['Ms Huda', 'Last week we put the important thing first. Tonight we put it last, and I want somebody to object.'],
  ['Omar', 'I object. Those cannot both be right.'],
  ['Ms Huda', 'They are both right and they are not the same question. ⚠ **Fronting decides what a sentence is _about_. Delay decides what it _ends on_.** A sentence has two strong positions — the front and the end — and **one weak one, which is the middle.** The middle is where things go to be forgotten.'],
  ['Yara', 'That is where I put everything.'],
  ['Ms Huda', 'Say one.'],
  ['Yara', '_The June calibration record, which shows a discrepancy of nought point four that has not been reconciled, was signed by the morning bench._ The discrepancy is the whole point and it is in the middle, between two commas, where I put the things I am least sure about.'],
  ['Ms Huda', 'And where is it now?'],
  ['Yara', '_The June calibration record was signed by the morning bench, and it shows a discrepancy of nought point four that nobody has reconciled._ At the end.'],
  ['Dima', 'And it is now the thing I would quote.'],
  ['Ms Huda', 'Which is 5.5 arriving early and is the right instinct. Now the structure itself, because there is a shape built for this. **_It was not until … that …_** — and notice what it does: it puts a **time** at the front, which is 5.1, and holds the **event** to the end, which is tonight. _It was not until June that anybody counted them._'],
  ['Jad', 'Both at once.'],
  ['Ms Huda', 'Both at once, which is why it is the most useful single sentence shape in the unit. ⚠ And there are three others in the same family. **_Only after …_** with inversion — _only after the fourth night did the errors appear._ **_Not one of …_** — _not one of the fourteen shows the joint._ And **_what … was_**, which is 5.4 and we come to it next week.'],
  ['Hiba', 'What goes at the end, then — the figure or the finding?'],
  ['Ms Huda', '**The thing you want argued with.** That is the test and it is the only one you need. A figure at the end invites a check; a judgement at the end invites a disagreement; **a courtesy at the end invites nothing, and most people end on a courtesy.**'],
  ['Lubna', 'Reading one aloud is difficult. You have to hold your voice up.'],
  ['Ms Huda', 'You do, and that is the pronunciation of the cycle. _It was not until June ‖ that anybody counted them._ The voice stays level through the middle and falls **only** at the end. ⚠ A speaker who falls in the middle has given away the delay, and the listener relaxes before the point arrives.'],
  ['Rim', 'Is it not a trick, making people wait?'],
  ['Ms Huda', 'It is a trick if there is nothing at the end. ⚠ **Delay is a promise, exactly as fronting is**: you have told the reader to wait, and if what arrives is not worth the wait they will not wait again. The cost of a bad delayed sentence is paid on the **next** one.'],
  ['Mazen', 'So the two strong positions are for the two things.'],
  ['Ms Huda', 'The front for what it is about, and the end for what you want argued with. And nothing of value in the middle, ever — which is, I am afraid, where most of us have been putting it.'],
]));
out.push(sp());
out.push(box('Language box – delay and end-weight', [
  '**The two strong positions and the weak one.** A sentence is strong at the **front** and at the **end**, and weak in the **middle**. ⚠ **Fronting decides what the sentence is _about_; delay decides what it _ends on_.** They are two different jobs, and 5.1 and 5.3 do not contradict each other.',
  '**The structure built for both at once: _It was not until … that …_** It puts a **time** at the front and holds the **event** to the end. _It was not until June that anybody counted them._ — the most useful single sentence shape in this unit.',
  '**Three others in the same family.** _**Only after** the fourth night **did** the errors appear._ _(with inversion — 5.2)_ · _**Not one of** the fourteen shows the joint._ · _**What** nobody had done **was** turn one over._ _(5.4)_',
  '**What goes at the end: the thing you want argued with.** A figure at the end invites a check. A judgement at the end invites a disagreement. ⚠ **A courtesy at the end invites nothing — and most people end on a courtesy.** And one thing that must **never** go at the end: a name you are protecting. The end is the position a reader quotes from, so a person placed there is the person who gets quoted — which is 5.2\'s accusation problem arriving by accident.',
  '⚠ **Delay is a promise, exactly as fronting is.** You have told the reader to wait. If what arrives is not worth the wait, **the cost is paid on the next sentence**, which they will not wait for.',
  '**And the practical rule for the middle, which is the whole cycle in one line.** Nothing of value between two commas. _…which shows a discrepancy of nought point four…_ in the middle of a long sentence is the place a writer puts the thing they are least sure about, and it is where a reader puts the things they will not remember.',
  '**One point about length.** End-weight only works if the sentence is long enough to have a middle. In a sentence of nine words the end and the front are the same place, and the structure is wasted on it — which is why _it was not until_ sentences run to about twenty words and should not be trimmed. ⚠ Nor does the structure work twice in succession: after two delayed sentences the reader stops waiting, because the second promise is made by somebody who has already asked them to wait once.',
  '**Pronunciation.** 🔊 **Track 5.6** The voice stays **level through the middle and falls only at the end**: _it was not until June ‖ that anybody counted them._ ⚠ A speaker who falls in the middle has given the delay away, and the listener relaxes before the point arrives — which wastes the one effect the structure exists for.',
  '**Practise:** Say it flat, then with the time first and the event last. **1** a count that came late  **2** a question nobody asked until recently  **3** an error that appeared after a fourth night  **4** a sheet nobody turned over  **5** a figure nobody had until June',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a flat sentence from the card. B rebuilds it with the time at the front and the event at the end, in one of the four shapes. A says what the sentence now **ends on** and whether it is a thing anybody could argue with. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(shape: __________)_ __________.'],
  ['A', 'It ends on __________, which **is / is not** something anybody could argue with.'],
  ['B', 'And the thing I have moved out of the middle is __________.'],
]));
out.push(table(['Card A – the flat sentence', 'Card B – the flat sentence'], [
  ['_Somebody finally counted them in June._', '_He asked the question in September and not before._'],
  ['_The errors only appeared after the fourth night._', '_Nobody turned one of the sheets over._'],
  ['_The figure was not available until August._', '_The catch was reported twice and nothing happened._'],
  ['_Only two of the nine paragraphs were answered._', '_Nobody noticed the date field until June._'],
  ['_It took fourteen months to get the specification._', '_Not one of the fourteen photographs shows it._'],
  ['_The dispatch list was checked in October._', '_The field was requested four times since December._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write what each of the eight sentences ends on, and mark it **arguable** or **not**. Then the count: on a first run **five or six of the eight end on something arguable** — which is higher than in the class\'s own writing, because the card sentences already contain a figure. ⚠ The finding: the ending is a **choice**, and in their own pages almost nobody has made it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the longest sentence you have written this month and say what is in its **middle**. Then rebuild it so that the thing in the middle is at the end.'));
out.push(p('**b**  Swap. Then each of you read your partner\'s rebuilt sentence aloud, holding the voice up, and say whether the delay was worth it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Last week the important thing went first; tonight it goes last, and Ms Huda asked somebody to object. Omar objected: those cannot both be right. And they are both right and are not the same question — fronting decides what a sentence is about, and delay decides what it ends on. A sentence has two strong positions, the front and the end, and one weak one, which is the middle, and the middle is where things go to be forgotten. Yara said that is where she puts everything, and gave one: the June calibration record, which shows a discrepancy of nought point four that has not been reconciled, was signed by the morning bench. The discrepancy is the whole point and it is in the middle, between two commas, where she puts the things she is least sure about. Rebuilt, it ends on the discrepancy — and Dima said that is now the thing she would quote. Then the structure built for both jobs at once: it was not until June that anybody counted them. A time at the front and the event at the end, which is why it is the most useful single shape in the unit. Hiba asked what goes at the end, the figure or the finding, and Ms Huda said the thing you want argued with — a figure at the end invites a check, a judgement invites a disagreement, and a courtesy invites nothing, which is how most people end. Lubna said reading one aloud is difficult because you have to hold your voice up, and that is the pronunciation of the cycle: level through the middle and falling only at the end, because a speaker who falls in the middle has given the delay away. And Rim asked whether it is not a trick to make people wait, and Ms Huda said it is a trick if there is nothing at the end — delay is a promise exactly as fronting is, and the cost of a bad delayed sentence is paid on the next one._'));
out.push(p('**Listener task:** write what was in the middle of your longest sentence, and where it is now.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Yara writes about the June calibration. Answer the questions.'));
out.push(model([
  '**THE JUNE CALIBRATION · nought point four** · Y. Mansour · 1 November',
  'This is for the laboratory manager and for the morning bench, and it is one page. The sentence I want read is the last one in each paragraph, and I have put it there on purpose.',
  '**What the record says.** The instrument was calibrated on 14 June and the record was signed by the morning bench. The stated range is nought point three. **The figure recorded is nought point four.**',
  '**What has happened since.** The afternoon run has been reported seventeen times from that instrument, and the morning run about ninety. Both benches have worked from the same record and neither has queried it. **It was not until I was asked, in a classroom, what two photographs did not show that I looked at the record at all.**',
  '**Where the disagreement is, now that there is one.** The morning bench reads nought point four as within the stated range, on the ground that the range is a guide and the fourth decimal is noise. I read it as outside, on the ground that nought point three is a number and not a guide. **Neither of us has moved, and neither of us had noticed that we disagreed until last week.**',
  '**What I am not claiming.** That any result is wrong. One hundred and seven runs, and I am not suggesting that one of them needs repeating. **What I am saying is narrower and worse: for five months, two benches have been applying two different standards to the same instrument and reporting the results in one voice.**',
  '**What would settle it.** One line from whoever wrote the stated range, saying whether it is a limit or a guide. **Not a recalibration, not a review of the results, and not a conversation between the two benches — one line from the person who wrote the number.**',
  '**What I have done since Thursday, in case it is asked.** Nothing to the instrument and nothing to the record. I have written down the two readings of the stated range as the two benches read them, on one sheet, side by side, and I have shown that sheet to neither bench. It is one page, it is in my drawer, and it is the only document in five months on which the disagreement is visible.',
  '**And the thing about this page.** Every paragraph of it ends on the sentence I want argued with. I have been writing for four years with the arguable thing in the middle, between two commas, in the place I keep for whatever I am least sure of — **which is exactly where a reader is least likely to find it, and I had never once wondered why nobody replied.**',
]));
out.push(item('1', 'What did she not do until last week, and what made her do it?'));
out.push(item('2', 'What is she not claiming, and what does she say is narrower and worse?'));
out.push(item('3', 'What does she notice about her own four years of writing?'));
out.push(writers([
  'A page in which every paragraph ends on the arguable sentence: **say that each paragraph\'s last sentence is the one to read** → **what the record says, ending on the figure** → **what has happened since, ending on the delay** → **where the disagreement is, ending on how long it was unnoticed** → **what you are not claiming, ending on what you are** → **what would settle it, ending on the refusals** → **and the thing about the page itself**.',
  '**Say at the top that the last sentence of each paragraph is the one to read.** One line, and it tells the reader how to read the page.',
  '⚠ **The _it was not until_ sentence is the one to place most carefully.** _It was not until I was asked, in a classroom, what two photographs did not show that I looked at the record at all._ It ends on the admission, which is what the reader will quote.',
  '**End the _what I am not claiming_ paragraph on what you _are_ claiming.** _What I am saying is narrower and worse: for five months, two benches have been applying two different standards._ A refusal that ends on the refusal leaves the reader nothing; ending on the narrower claim leaves them the page.',
  '⚠ Put the refusals at the **end** of the request paragraph, not before it. _Not a recalibration, not a review, and not a conversation — one line from the person who wrote the number._ Three refusals in the strong position make the request look as small as it is.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page whose paragraphs end on the arguable sentence (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   The sentence I want read is the last one in each paragraph.   **What the record says.** ______________. **______________.**   **What has happened since.** ______________. **It was not until ______________ that ______________.**   **Where the disagreement is.** ______________. **Neither of us ______________.**   **What I am not claiming.** ______________. **What I am saying is narrower and worse: ______________.**   **What would settle it.** ______________. **Not ______________, not ______________, and not ______________ — ______________.**   **And the thing about this page.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every paragraph ends on a sentence somebody could argue with',
  'One _it was not until … that …_ sentence, placed where it does most',
  'The refusal paragraph ends on what **is** being claimed',
  'Nothing of value between two commas anywhere on the page',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the **last sentence** of each of their paragraphs, one after the other.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), with every paragraph ending on the sentence you want argued with, one _it was not until_ structure, and nothing of value in any middle.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every paragraph ending on something arguable, one _it was not until_ sentence, nothing of value between two commas.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the last sentences of your paragraphs, in order, and nothing else.** If the page makes sense from those alone, it is built right. Then the sentence to leave the cycle on, which is Yara\'s: **for four years I put the arguable thing in the middle, where a reader is least likely to find it, and I never once wondered why nobody replied.**'));
out.push(hw('Write the page (80+ words). Then take one long sentence you sent last month, find what is between its commas, and write down whether it was the most or the least important thing in it.'));

// ===================== 5.4 =====================
out.push(pb());
out.push(h2('5.4  What nobody had done was turn one over'));
out.push(p('**Function:** using a cleft when the emphasis has to survive a summary   ·   **Grammar:** _what … is_ · _all … is_ · _the reason … is_ · _it is … that_   ·   **Pronunciation:** the cleft read without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the sentence that **was** quoted back to you. Then say it with a stress on a different word, three times over, and say whether the meaning changed. Then write it down and read it flat: the stress has gone.'));
out.push(board('I answer the escalation calls.', 'What I actually do is find out what we promised.'));
out.push(p('**b**  Which cleft, and what is it emphasising? **1** _What nobody had done was turn one over._  **2** _All I need is the lot number._  **3** _The reason nothing happened is that there was nobody to ask._  **4** _It was the storeman who counted them._  **5** _What matters is not the box but who is standing nearest to it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say a cleft is worth more in writing than in speech, and which of the four shapes does she say is the most under-used?   **A** it is shorter; _it is … that_   **B** because a stress cannot survive being written down or summarised, and the cleft puts the emphasis in the structure; _all … is_   **C** it is more polite; _the reason … is_'));
out.push(p('**b**  Listen again. **1** What does Nour say happened to her cleft in the minutes?   **2** What does Ms Huda say _all … is_ does that the others do not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.7  A stress cannot be written down', [
  ['Ms Huda', 'Last year, in 22.2, you learnt one of these. Tonight you get the other three, and the argument for all four is one sentence. Mrs Sabbagh, your cleft went into a minute. What happened to it?'],
  ['Nour', 'It survived. The minute of 14 October says: _Mrs Sabbagh said that what the calls are for is finding out what the company has promised._ Which is almost my words, and the emphasis is still in it.'],
  ['Ms Huda', 'And in September, before the cleft?'],
  ['Nour', 'The minute said _Mrs Sabbagh reported on the escalation calls._'],
  ['Omar', 'Which is nothing.'],
  ['Nour', 'Which is nothing, and it is accurate. I did report on the escalation calls. I also said, with my voice, that the calls were not the point — and a voice does not go into a minute.'],
  ['Ms Huda', '⚠ **And that is the argument for the whole cycle, in one sentence: a stress cannot be written down and cannot be summarised.** You can stress a word in a room and the stress dies at the first retelling. A cleft puts the emphasis **in the grammar**, where it survives being quoted, minuted, forwarded and read by somebody who has never heard your voice.'],
  ['Jad', 'And the four shapes?'],
  ['Ms Huda', '**_What … is …_** — the general-purpose one, and the one you have. _What nobody had done was turn one over._ **_All … is …_** — which does something the others cannot. **_The reason … is that …_** — for causes. And **_It is … that/who …_** — for singling out a person or a thing.'],
  ['Hiba', 'What does _all … is_ do?'],
  ['Ms Huda', '**It makes a thing small.** _All I need is the lot number._ _All that was required was a date._ It says: this is the whole of it, and anybody who makes it bigger is adding something. ⚠ It is the most under-used of the four and the most useful when you are asking for something, because the commonest reason a small request is refused is that the reader has sized it themselves.'],
  ['Adnan', 'And it cannot be used for something large.'],
  ['Ms Huda', 'It cannot, and a candidate who writes _all we need is a complete review of the establishment schedule_ has made the reader\'s objection for them. **_All … is_ is a claim about size and it is checkable.**'],
  ['Dima', 'The _it is … that_ one I take out constantly.'],
  ['Ms Huda', 'Because it is the easiest to overuse and the only one of the four that can sound evasive — _it was the storeman who counted them_ invites the question of who is being kept out of the sentence. ⚠ Use it when the **identity** is the point and not otherwise.'],
  ['Rim', 'And the stress when you say one aloud?'],
  ['Ms Huda', '**Flat.** That is the counter-intuitive part: a cleft is already emphatic, so you read it with no emphasis at all. _What I actually do ‖ is find out what we promised._ ⚠ Stress it as well and you have said the same thing twice, and the listener hears somebody insisting rather than somebody explaining.'],
  ['Mazen', 'Does the agreement change?'],
  ['Ms Huda', 'It does and it is the error to watch: **the verb agrees with the noun after _is_ and not with the _what_ clause.** _What matters **is** the figures_ — some books allow _are_, and _is_ is safe. But _what I need **are** the two dates_ with a plural after it is the natural form, and students who have learnt _is_ as a rule will get that one wrong.'],
]));
out.push(sp());
out.push(box('Language box – the four clefts', [
  '**The argument for all four, in one sentence.** **A stress cannot be written down and cannot be summarised.** You can stress a word in a room, and the stress dies at the first retelling; a cleft puts the emphasis **in the grammar**, where it survives being quoted, minuted, forwarded and read by somebody who has never heard your voice.',
  '**_What … is …_** — the general-purpose one, and the one from B1 22.2. _What nobody had done was turn one over._ · _What I actually do is find out what we promised._ ⚠ When the thing emphasised is an **action**, the verb after _is_ is the bare infinitive: _what nobody had done was **turn** one over_, not _was turning_. That one detail is the commonest error in the shape.',
  '**_All … is …_** — **it makes a thing small**, and it is the most under-used of the four. _All I need is the lot number._ · _All that was required was a date._ ⚠ The commonest reason a small request is refused is that the reader has **sized it themselves**, and this is the shape that stops them. It is a claim about size and it is checkable: _all we need is a complete review of the schedule_ makes the reader\'s objection for them.',
  '**_The reason … is that …_** — for causes, and it forces you to name one. _The reason nothing happened is that there was nobody to ask._ ⚠ It will not carry two causes: _the reason nothing happened is that there was nobody to ask and the sheet was out of date_ has named one cause and then withdrawn it. If there are two, the shape is wrong and a plain sentence is right.',
  '**_It is … that / who …_** — for singling out a person or a thing, and the easiest of the four to overuse. ⚠ It is also the only one that can sound evasive: _it was the storeman who counted them_ invites the question of who is being kept **out** of the sentence. Use it when the **identity** is the point.',
  '⚠ **The agreement error to watch.** The verb agrees with what follows _is_, not with the _what_ clause: _what matters **is** the figures_ (safe) but _what I need **are** the two dates_ (natural). Students who have learnt _is_ as a rule produce _what I need is the two dates_, and it sounds foreign. The safe habit is to read the clause **after** _is_ first and let that clause choose the verb.',
  '**And one structural point.** A cleft is **longer** than the sentence it replaces, always. _What I actually do is find out what we promised_ is eleven words for five. You are buying survival through a summary, and paying in words — which is why one or two in a page, in the places that matter, and not four.',
  '**Pronunciation.** 🔊 **Track 5.8** A cleft is read **flat**: _what I actually do ‖ is find out what we promised._ ⚠ It is already emphatic, so stressing it as well says the same thing twice, and the listener hears somebody insisting rather than somebody explaining.',
  '**Practise:** Say it flat, then as each of the four clefts, and say which survives a summary best. **1** what you actually do  **2** the one thing you need  **3** why nothing happened  **4** who did it  **5** what matters here',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a flat sentence from the card. B says it as **two** of the four clefts and names them. A then **summarises** each version in about five words, as a minute would, and says which emphasis survived. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(cleft one: __________)_ __________. _(cleft two: __________)_ __________.'],
  ['A', '_(as a minute)_ The first summarises as __________. The second as __________.'],
  ['B', 'So the one that survives is __________, because __________.'],
]));
out.push(table(['Card A – the flat sentence', 'Card B – the flat sentence'], [
  ['_I find out what we promised._', '_Nobody turned one of the sheets over._'],
  ['_I only need the lot number._', '_There was nobody to ask about an exception._'],
  ['_The storeman counted them, not me._', '_Two of the four never had a pad._'],
  ['_The date field matters, not the sheet._', '_The catch is the problem, not the night shift._'],
  ['_A date would have been enough._', '_The position of the carton decides it._'],
  ['_Nothing happened for eleven months._', '_One line from the right person would settle it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the eight, the five-word summary of both versions. Then the finding, and it is the point of the cycle: **the cleft version survives the summary in seven or eight of the eight**, and the flat version loses its emphasis in all of them. ⚠ Note also which shape survives best — it is usually **_the reason … is that_**, because a summariser keeps a cause.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the sentence of yours that **nobody noticed** and build it as the cleft that fits it. Then summarise it yourself in five words and see whether the emphasis is still there.'));
out.push(p('**b**  Swap. Then each of you summarise your partner\'s cleft in five words, as a minute would, and say what has survived and what has gone.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Last year the class learnt one of these in 22.2; tonight they got the other three, and the argument for all four is one sentence. Nour\'s cleft went into a minute and survived: the minute of 14 October says that what the calls are for is finding out what the company has promised — almost her words, with the emphasis still in it. In September, before the cleft, the minute said that Mrs Sabbagh reported on the escalation calls. Omar said which is nothing, and Nour said which is nothing, and it is accurate: she did report on the escalation calls, and she also said with her voice that the calls were not the point — and a voice does not go into a minute. Which is the argument for the whole cycle: a stress cannot be written down and cannot be summarised. A cleft puts the emphasis in the grammar, where it survives being quoted, minuted, forwarded and read by somebody who has never heard your voice. Then the four shapes. What-is, the general-purpose one and the one they have. All-is, which makes a thing small. The reason-is-that, for causes. And it-is-that, for singling out a person or thing. Hiba asked what all-is does, and the answer is that it makes a thing small: all I need is the lot number says this is the whole of it, and anybody who makes it bigger is adding something. It is the most under-used of the four and the most useful when asking for something, because the commonest reason a small request is refused is that the reader has sized it themselves. Adnan said it cannot be used for something large, and it cannot — a candidate who writes "all we need is a complete review of the establishment schedule" has made the reader\'s objection for them. And Rim asked about the stress, and the answer is flat: a cleft is already emphatic, so reading it with emphasis says the same thing twice. Then the last question of the night was Lubna\'s and it was the useful one: which of the four would she use for the photograph that does not exist? The it-is-that, singling the thing out — it is the joint that has never been photographed — because the reason-is-that would turn an absence into an explanation, and an absence needs no explanation until somebody has agreed that it is there. And Ms Huda said that choosing between the four is the whole of the next cycle, and that the test is not which version is most emphatic but which one the reader will quote._'));
out.push(p('**Listener task:** write your cleft and your own five-word summary of it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes with the four clefts in it. Answer the questions.'));
out.push(model([
  '**THE PROMISE FIELD · four sentences that have to survive a summary** · N. Sabbagh · 2 November',
  'This goes to the two who own the template and it will be minuted, forwarded and summarised before it reaches whoever decides. Four sentences in it are built to survive that. The rest can be lost.',
  '**The first.** _What the escalation calls are actually for is finding out what this company has promised somebody._ Eleven words for five, and the five-word version — _I answer the escalation calls_ — is what a minute said about me in September. The long one survived October.',
  '**The second.** _All that is needed is one field with a date in it._ I have asked four times since December and three of those four asked for it in a sentence that did not say how small it was. ⚠ **A reader who is not told the size of a request will size it themselves, and they will size it large.**',
  '**The third.** _The reason the promises are lost is that there is nowhere on the form to put them._ Not carelessness, not training, not the free-text box. A cause named in the structure cannot be replaced by a different cause in somebody else\'s summary, and it has been replaced twice.',
  '**The fourth.** _It is the thirty-four, and not the forty-one, that the October release has to deal with._ The only one of the four where the identity is the point, and I have used it once because that is the one place where somebody has written the wrong figure into a minute.',
  '**What I am not doing in this page.** Explaining the figures again. They are in the attachment and they have been in four notes. **What is new here is not the evidence but where the emphasis sits**, which I would not have thought was worth a page until last month.',
  '**The one of the four I am least sure of.** The _it is … that_ sentence. It is the right shape for the thirty-four, and it is also the shape that reads as though somebody were being kept out of it — and the person it might appear to keep out is the colleague who wrote the forty-one into the October minute. ⚠ **I have left it in and I have put her name in the line after it**, which is the only way I know of using that shape without its doing something I did not intend.',
  '**And the thing I shall say about the four years before this.** I had been putting the emphasis in my voice, in rooms, to people who then wrote it down without it. **Every one of those sentences was true when I said it and nothing when it arrived.**',
]));
out.push(item('1', 'What did a minute say about her in September, and what survived in October?'));
out.push(item('2', 'What does she say a reader does if not told the size of a request?'));
out.push(item('3', 'What does she say is new in this page, and what is not?'));
out.push(writers([
  'A page built on four clefts: **say that it will be minuted and that four sentences are built to survive** → **the _what … is_ one, with the five-word version beside it** → **the _all … is_ one, with the size argument** → **the _the reason … is that_ one, with what it is _not_** → **the _it is … that_ one, used once** → **what you are not doing in the page** → **and the thing about the years before it**.',
  '**Print the five-word summary beside the long sentence.** _I answer the escalation calls_ against _what the escalation calls are actually for is…_ The comparison is the argument, and no amount of explanation does what those two lines do side by side.',
  '⚠ **Use _all … is_ for the request and say why.** _A reader who is not told the size of a request will size it themselves, and they will size it large._ That sentence is the most practically useful thing in the cycle, and it explains four refusals she had not understood.',
  '**On the _reason_ cleft, name what the cause is _not_.** _Not carelessness, not training, not the free-text box._ A named cause survives a summary; a named cause **with the alternatives refused** survives a summary written by somebody who disagrees with you.',
  '⚠ And keep _it is … that_ to **one** use, in the one place where the identity is the point. Four of them in a page reads as a writer who distrusts the reader, and the fourth makes the first one look like a habit.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page built on four clefts (80 words or more).'));
out.push(p('**______________ · four sentences that have to survive a summary** · ______________ · ______________   This goes to ______________ and it will be ______________.   **The first.** _What ______________ is ______________._ ______ words for ______, and the short version — _______________ — is what ______________.   **The second.** _All that is needed is ______________._ ⚠ A reader who is not told the size of a request ______________.   **The third.** _The reason ______________ is that ______________._ Not ______________, not ______________, and not ______________.   **The fourth.** _It is ______________ that ______________._ Used once, because ______________.   **What I am not doing in this page.** ______________.   **And the thing about the years before it.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The five-word summary printed beside the _what … is_ sentence',
  '_All … is_ used for the request, with the size named',
  'The cause named, with two or three alternatives refused',
  '_It is … that_ used **once**, where the identity is the point',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _all … is_ sentence, and the room says whether the thing is actually that small.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more) with the four clefts, the five-word comparison, the refused alternatives, and the thing about the years before it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the five-word summary printed beside the cleft, _all … is_ with the size named, _it is … that_ used once.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your _all … is_ sentence and let the room size it.** If anybody in the room thinks the thing is bigger than you have said, the sentence is a liability and not a help. Then the sentence to leave the cycle on, which is Nour\'s: **every one of those sentences was true when I said it and nothing when it arrived.**'));
out.push(hw('Write the page (80+ words). Then find one minute, email or summary in which **somebody else** wrote down what you had said, and write down what survived and what did not.'));

// ===================== 5.5 =====================
out.push(h2('5.5  Three ways, and what the reader will quote'));
out.push(p('**Function:** saying the same thing three ways and choosing by what the reader will quote   ·   **Grammar:** the summary test, applied to your own sentence   ·   **Pronunciation:** reading three versions without favouring one'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing about your work three ways: **flat**, **fronted** and as a **cleft**. Then your partner says which of the three they would repeat to somebody else — and they answer before you tell them which you prefer.'));
out.push(board('Which one is best?', 'Which one will they quote?'));
out.push(p('**b**  Which would a summariser keep? **1** _Thirty-four of forty-one calls involved an unrecorded promise._  **2** _There is an issue regarding the recording of promises._  **3** _What the calls find out is what we promised._  **4** _I have been looking at the calls again._  **5** _All that is needed is one field with a date in it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the test is, and why does she say it is better than asking which version is best?   **A** which is shortest; because short is better   **B** which version a reader will quote; because _best_ is a question about the writer and _quoted_ is a question about the reader, and only the second can be checked   **C** which is most formal; because formality is marked'));
out.push(p('**b**  Listen again. **1** What does Dima say she can do that nobody else in the room can?   **2** What does Ms Huda say about a sentence that is quoted wrongly?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.9  Not which is best — which will they quote', [
  ['Ms Huda', 'Four cycles of shapes and no way of choosing between them. Tonight is the choosing, and the test is one question. **Not which version is best. Which version will the reader quote?**'],
  ['Omar', 'Why is that different?'],
  ['Ms Huda', '⚠ Because _best_ is a question about **you** and _quoted_ is a question about **them** — and only the second one can be checked. You can be wrong about which of your sentences is best for ever, and nobody will tell you. You find out which one is quoted within a fortnight.'],
  ['Dima', 'I can do it now. I summarise for a living and I will tell any of you which of three sentences I would keep, in about two seconds, and I will not be being kind.'],
  ['Ms Huda', 'Which makes Mrs Khoury the most useful person in this room for the next forty minutes. Mr Darwish, three versions.'],
  ['Omar', '_Flat:_ four of the eleven sites still return the old sheet. _Fronted:_ of the eleven sites, four still return the old sheet. _Cleft:_ what four of the eleven sites are still returning is the old sheet.'],
  ['Dima', 'The fronted one. Two seconds.'],
  ['Omar', 'Why not the cleft? That is the newest thing I have learnt.'],
  ['Dima', 'Because the cleft puts the emphasis on **the old sheet**, and the old sheet is not the news. The news is **four of eleven**. Your cleft is well built and it is pointing at the wrong noun.'],
  ['Ms Huda', '⚠ **And that is the finding of the cycle: the shape is not the choice. The choice is which noun you want carried out of the room, and then the shape follows.** A beautifully built cleft on the wrong noun is worse than a flat sentence, because it is emphatic about the wrong thing and the reader believes you meant it.'],
  ['Hiba', 'How do you know which noun?'],
  ['Ms Huda', 'Ask what the reader will **do**, and the noun is in the answer. If they are going to send pads, the noun is the four sites. If they are going to redesign the sheet, the noun is the sheet. **The same facts produce different sentences for different readers, and that is not spin — it is the ordinary business of writing to somebody.**'],
  ['Rim', 'And if it gets quoted wrongly?'],
  ['Ms Huda', 'Then the sentence was wrong, not the reader. ⚠ **A sentence that is reliably mis-quoted has been mis-built**, and the commonest cause is two nouns in the strong positions — one at the front and one at the end — with nothing to tell the reader which of the two you meant.'],
  ['Jad', 'So you can have only one.'],
  ['Ms Huda', 'One per sentence. You may have two in a paragraph if you want the reader to carry two things, and three in a paragraph is the point at which they carry none.'],
  ['Mazen', 'Mine was quoted. Nine drafts, fourteen months, eleven minutes.'],
  ['Ms Huda', 'Three nouns and all three are figures of the same kind, which is why it works: it is **one** noun in three instalments. ⚠ Read it flat, by the way — three figures in a row, no emphasis on any of them. Stress one and you have broken the set.'],
]));
out.push(sp());
out.push(box('Language box – the summary test', [
  '**The test, and it replaces every other test in this unit.** Not _which version is best_ — **which version will the reader quote?** ⚠ _Best_ is a question about **you** and can never be checked; _quoted_ is a question about **them** and is answered within a fortnight.',
  '⚠ **The finding: the shape is not the choice.** The choice is **which noun you want carried out of the room**, and the shape follows from it. A beautifully built cleft on the wrong noun is worse than a flat sentence, because it is emphatic about the wrong thing and the reader believes you meant it.',
  '**How to find the noun.** Ask what the reader is going to **do**, and the noun is in the answer. Going to send pads → the noun is **the four sites**. Going to redesign the sheet → the noun is **the sheet**. **The same facts make different sentences for different readers, and that is not spin; it is writing to somebody.** ⚠ And if you cannot say what the reader is going to do, you are not ready to choose a shape at all: write the flat sentence, send it, and find out.',
  '**One strong noun per sentence.** Two nouns in the two strong positions — one fronted, one at the end — with nothing to say which you meant is the commonest cause of a sentence being **reliably mis-quoted**. ⚠ And a sentence that is reliably mis-quoted has been **mis-built**: the reader is not at fault.',
  '**Two per paragraph if you want two things carried. Three per paragraph and they carry none.** This is the one figure in the unit worth memorising, because it also decides how long a paragraph should be: a paragraph is as long as the two things it is carrying, and a third fact that matters as much is the beginning of the next paragraph and not the end of this one.',
  '**The exception worth knowing: a set of figures of the same kind counts as one noun.** _Nine drafts, fourteen months, eleven minutes._ Three figures in three instalments of one thing, read flat, with no stress on any of them. ⚠ Stress one and the set is broken and the reader keeps that one.',
  '**And the four shapes, with what each puts the emphasis on.** **Flat** — the subject. **Fronted** — the fronted phrase. **_What … is_** — the noun after _is_. **_All … is_** — the smallness. ⚠ Check the shape against the noun before you check the grammar: most of the class\'s mistakes in this unit will be well-built sentences pointing at the wrong thing.',
  '**Pronunciation.** 🔊 **Track 5.10** Three versions of one sentence read **without favouring any of them**, which is harder than it sounds: a speaker who prefers one reads the other two faster. ⚠ In Stage 3 the partner has to choose, and a speaker who has given away their own preference has spoiled the test.',
  '**Practise:** Say it three ways and have your partner choose before you say which you prefer. **1** a count  **2** a request  **3** a cause  **4** an absence  **5** a figure that has changed',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says one thing three ways — flat, fronted, cleft — reading all three at the same speed. B chooses the one they would quote, **before** A says anything, and names the noun it carries. A then says which they had expected. Swap.'));
out.push(dlg(null, [
  ['A', '_(flat)_ __________. _(fronted)_ __________. _(cleft)_ __________.'],
  ['B', 'I would quote the __________ one, and the noun it carries is __________.'],
  ['A', 'I had expected the __________ one, because __________.'],
  ['B', 'And the reader would be going to __________, which is why.'],
]));
out.push(table(['Card A – say three ways…', 'Card B – say three ways…'], [
  ['_a count that surprised you_', '_a request you have made four times_'],
  ['_a cause nobody has named_', '_an absence you have found_'],
  ['_a figure that has changed_', '_a date that was missed_'],
  ['_a thing that is smaller than it looks_', '_a thing that is bigger than it looks_'],
  ['_a disagreement_', '_a decision that was not recorded_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the eight, which version was chosen and which the speaker had expected. Then the count: **in half the cases they differ** — and in almost every one of those the speaker had chosen the shape they had most recently learnt rather than the noun the reader needed. ⚠ That is the cycle, and it cannot be told; it has to be counted.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the sentence of yours that **was** quoted back to you and work out **which noun** it carried. Then say whether that was the noun you meant.'));
out.push(p('**b**  Swap. Then each of you say what your partner\'s reader was going to **do**, and whether the noun in the quoted sentence was the one that reader needed.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Four cycles of shapes and no way of choosing between them, so tonight was the choosing, and the test is one question: not which version is best, but which version the reader will quote. Omar asked why that is different, and Ms Huda said because "best" is a question about you and "quoted" is a question about them — and only the second can be checked: you can be wrong about which of your sentences is best for ever and nobody will tell you, and you find out which one is quoted within a fortnight. Then Dima said she can do it now, because she summarises for a living and will tell anybody which of three sentences she would keep in about two seconds, and she will not be being kind. So Omar gave three versions of the four sites and the old sheet — flat, fronted and cleft — and Dima chose the fronted one in two seconds. Omar asked why not the cleft, which is the newest thing he has learnt, and Dima said because the cleft puts the emphasis on the old sheet, and the old sheet is not the news: the news is four of eleven. His cleft is well built and it is pointing at the wrong noun. Which is the finding of the cycle: the shape is not the choice — the choice is which noun you want carried out of the room, and the shape follows. A beautifully built cleft on the wrong noun is worse than a flat sentence, because it is emphatic about the wrong thing and the reader believes you meant it. Hiba asked how you know which noun, and the answer is to ask what the reader is going to do, because the noun is in the answer: if they are going to send pads the noun is the four sites, and if they are going to redesign the sheet the noun is the sheet. The same facts produce different sentences for different readers, and that is not spin but the ordinary business of writing to somebody._'));
out.push(p('**Listener task:** write the noun your quoted sentence carried, and whether it was the one you meant.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar writes after the fortnight in which both of his sentences came back. Answer the questions.'));
out.push(model([
  '**TWO SENTENCES AND WHAT CAME BACK** · O. Darwish · 3 November',
  'This is a page about two sentences of mine and about what happened to each of them in a fortnight. I did not plan the experiment and I am not sure I would have had the courage to.',
  '**The first, which I expected to be quoted.** _"What the four sites are still returning is the pre-March sheet."_ A cleft, built on purpose, and I was pleased with it. It has not been quoted by anybody. The sheet is not the news; everybody has known about the sheet since March.',
  '**The second, which I wrote in a hurry at the end of the same note.** _"Of the eleven sites, four are still on the old sheet and two of the four have never been sent a new one."_ Fronted, written in about nine seconds, and the words _two of the four_ came back to me three times in a fortnight: from the printer, from Mr Saqqal, and in a minute I was not at.',
  '**What the three of them were going to do.** Send pads. ⚠ **Not redesign a sheet, not train anybody and not change a procedure — send pads to two sites.** The noun they needed was the **sites**, and my careful sentence was pointing at the **sheet**.',
  '**What I had done wrong, and it was not the grammar.** The cleft is correctly built. I chose the shape I had most recently learnt and then found a noun to put in it. **The order is the other way round: you choose the noun the reader needs, and the shape follows.**',
  '**What it cost, which is nothing and is worth saying anyway.** Nothing. The fast sentence did the work. But I have been writing careful sentences for five years and fast ones for ten, and **until this fortnight I had no way of knowing which of them had ever done anything**.',
  '**What I checked before writing this, because one fortnight is one fortnight.** The last six notes I have sent, and what came back out of each of them. Four of the six produced a quotation of some kind. In all four it was a sentence with a figure in the first eight words, and in three of the four it was a sentence I had not worked on. **The ones I worked on are the ones with the right grammar and the wrong noun in them**, which is a pattern and not an accident.',
  '**And the thing I shall do differently, which is one question.** Before the shape: **what is this reader going to do?** If I cannot answer it, the sentence is not ready, however well built it is.',
]));
out.push(item('1', 'Which of the two sentences was quoted, and how long did it take him to write?'));
out.push(item('2', 'What were the three readers going to do, and what noun did they need?'));
out.push(item('3', 'What does he say he had done wrong, and what is the right order?'));
out.push(writers([
  'A page about two sentences and what came back: **say the experiment was not planned** → **the one you expected to be quoted, with the shape named** → **the one that was, with how long it took** → **what the readers were going to do** → **what you did wrong, and that it was not the grammar** → **what it cost** → **and the one question you will ask first**.',
  '**Print both sentences and name the shape of each.** _A cleft, built on purpose, and I was pleased with it._ The page is a comparison and it needs both halves quoted; a description of the two will not do it.',
  '⚠ **Say what the readers were going to _do_, in the shortest possible form.** _Send pads._ Two words, and they are the explanation of everything else on the page — including why a well-built sentence did nothing.',
  '**Separate the fault from the grammar explicitly.** _The cleft is correctly built._ A reader who thinks the lesson is _my grammar was wrong_ will take the wrong lesson, and so will the writer in a month.',
  '⚠ And end on the question and not on the rule. _What is this reader going to do?_ A rule is forgotten in a week; a question that has to be answered before writing is a habit, and it is the only thing in this cycle that transfers.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about two sentences and what came back (80 words or more).'));
out.push(p('**TWO SENTENCES AND WHAT CAME BACK** · ______________ · ______________   **The first, which I expected to be quoted.** "______________" A ______________, built on purpose. It has ______________.   **The second, which I wrote ______________.** "______________" ______________, written in about ______________, and the words _______________ came back ______________.   **What the readers were going to do.** ______________. ⚠ Not ______________, not ______________ and not ______________. The noun they needed was ______________.   **What I had done wrong, and it was not the grammar.** ______________. **The order is the other way round: ______________.**   **What it cost.** ______________.   **And the thing I shall do differently, which is one question.** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both sentences quoted, with the shape of each named',
  'What the readers were going to do, in as few words as possible',
  'The fault separated from the grammar in one sentence',
  'The page ends on a question, not on a rule',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students say what their reader was going to do, in under five words.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): both sentences with their shapes, what the readers were going to do, the fault separated from the grammar, what it cost, and the question you will ask first.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both sentences quoted with their shapes, what the reader was going to do, the fault told apart from the grammar.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say what your reader was going to do, in under five words, and then say which noun your sentence carried.** The two will not match in about half the room. Then the sentence to leave the cycle on, which is Omar\'s: **I chose the shape I had most recently learnt and then found a noun to put in it** — and the order is the other way round.'));
out.push(hw('Write the page (80+ words). Then before you send **anything** this week, write at the top of the draft, for yourself, what the reader is going to **do**. Then check which noun your first sentence carries.'));

// ===================== 5.6 =====================
out.push(pb());
out.push(h2('5.6  Six words, and the sentence that pays for them'));
out.push(p('**Function:** writing the paragraph whose first six words carry the argument   ·   **Grammar:** the loaded opening, and the sentence that pays for it   ·   **Pronunciation:** the loaded opening read without ceremony'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the first six words of the last thing you wrote at work — exactly six, counted on your fingers — and then stop. Your partner says what they expect the rest of it to be about. In about half the cases they will be wrong, and in about a quarter they will have no idea.'));
out.push(board('I am writing with reference to the escalation rota…', 'Thirty-four of forty-one. Thirty-one were reasonable.'));
out.push(p('**b**  Which six words carry an argument? **1** _I am writing with reference to…_  **2** _Of the eleven sites, four are…_  **3** _Further to our conversation of last…_  **4** _Nineteen of thirty-one boxes were empty._  **5** _There are a number of matters…_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a loaded opening must be followed by, and what does Rim find about her own six words?   **A** nothing; that they were fine   **B** a sentence that pays for it — the context the opening skipped; that her first six words have been the same for three years and contain no information   **C** a question; that they were too short'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the paying sentence is **not**?   **2** What does Jad say happens on the forum when a post opens with a figure?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.11  Load it, and then pay for it', [
  ['Ms Huda', 'Six words, counted — and then tell us what they tell a reader. Mrs Shaaban.'],
  ['Rim', '_We regret to advise that the…_ Six words. And what they tell a reader is that it is a letter from our office. That is all. And they have been the first six words of every refusal I have signed for three years — about two hundred and seventy letters, and the same six words at the top of all of them.'],
  ['Ms Huda', '⚠ **Which is the arithmetic of the cycle: two hundred and seventy openings and one opening.** Now load it. Six words, with the argument in them.'],
  ['Rim', '_Four pallets, eleven degrees over, returned._ Six words. And it is rude.'],
  ['Omar', 'It is not rude. It is just fast.'],
  ['Ms Huda', 'It is fast and it is **unpaid**, which is the point of tonight. ⚠ **A loaded opening skips the context, and the context has to arrive in the sentence immediately after it.** That sentence is the one that pays, and without it a loaded opening reads as a telegram from somebody who has decided not to explain.'],
  ['Hiba', 'So you put the context second.'],
  ['Ms Huda', 'You put the context second **and you make it do something**. ⚠ The paying sentence is **not** an apology for being brief and it is **not** a restatement. It is the fact the reader needs in order to make sense of the six words. _Four pallets, eleven degrees over, returned. The probe reading was taken in front of your driver on 2 September and signed by both of us._'],
  ['Rim', 'Which is not rude at all.'],
  ['Ms Huda', 'And it is nineteen words shorter than what you have been sending. **Speed and courtesy are not opposites; speed and _unexplained_ speed are different things.**'],
  ['Jad', 'On the forum a post that opens with a figure gets read. I can see the numbers. A post that opens with _I have been thinking about_ gets about a third of the reads, and it is the same people writing both.'],
  ['Ms Huda', 'Which is the best evidence anybody has brought this term, because Mr Attar can **count** it. And what happens after the figure?'],
  ['Jad', 'If there is nothing after it, people argue with the figure and the thread goes nowhere. If the next line says where the figure comes from, they argue about the thing.'],
  ['Ms Huda', '⚠ **That is the paying sentence, measured.** The opening buys attention and the second sentence spends it on the subject instead of on itself.'],
  ['Dima', 'And the length of the two?'],
  ['Ms Huda', '**Short then long.** Six words and then twenty-five or thirty. A loaded opening followed by another six-word sentence reads as a list of accusations, and the reader braces instead of reading.'],
  ['Adnan', 'The directorate will not accept _four pallets, eleven degrees over, returned_ at the top of a letter.'],
  ['Ms Huda', 'It will not, and that is a real constraint and not an excuse. ⚠ **The loaded opening is for the first sentence of the _body_, which is where a reader actually begins** — after the salutation, the reference and whatever the house requires. The house form costs you a line; the six words are the line after it.'],
  ['Mazen', 'And read aloud?'],
  ['Ms Huda', '**Without ceremony.** Flat, quick, and straight into the paying sentence with no pause for effect. A loaded opening read slowly is a performance, and the reader hears somebody who thinks their figure is remarkable.'],
]));
out.push(sp());
out.push(box('Language box – the loaded opening, and this unit\'s two declared sets', [
  '**The loaded opening: six words, with the argument in them.** _Four pallets, eleven degrees over, returned._ · _Nineteen of thirty-one boxes were empty._ · _Thirty-four of forty-one. Thirty-one were reasonable._ ⚠ Not a subject line and not a summary — **the argument itself, in the space most people spend saying that they are writing.**',
  '⚠ **And then the sentence that pays for it.** A loaded opening **skips the context**, and the context must arrive immediately after. _…returned. The probe reading was taken in front of your driver on 2 September and signed by both of us._',
  '**What the paying sentence is not.** Not an apology for being brief. Not a restatement of the opening. **It is the one fact the reader needs in order to make sense of the six words** — usually where the figure came from, or who was present, or when. ⚠ And it is **not a second loaded sentence**. Two loaded openings in a row is the commonest failure in this cycle: the reader has been handed two things to carry and will carry neither.',
  '**Short then long.** Six words, then twenty-five or thirty. ⚠ A loaded opening followed by another six-word sentence reads as a list of accusations and the reader braces instead of reading.',
  '**Where it goes in a formal letter.** Not instead of the house form — **the first sentence of the _body_**, after the salutation and the reference. The house form costs a line; the six words are the line after it. And the two sit together better than people expect: a reference line, a salutation, and then six words is a letter that looks ordinary at the top and is unmistakable one line later — which is the point, because the reader who matters begins at the body.',
  '**And the measured evidence, which is Mr Attar\'s.** On a forum he can count, a post opening with a figure is read; one opening _I have been thinking about_ gets about a third of the reads, from the same writers. And **a figure with nothing after it gets argued with; a figure with its source after it gets the subject argued about.**',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _single out · lead with · hold over · get across · stand out · play down · bring forward · latch on to · gloss over · tail off · front up · round off_.',
  '**This unit\'s word-formation set** _(Reading Part 5 in 5.7 draws on this)_: _emphasise → **emphasis** · quote → **quotation** · summarise → **summary** · invert → **inversion** · precede → **precedence** · repeat → **repetition** · select → **selection** · weigh → **weight** · prominent → **prominence**._',
  '**Pronunciation.** 🔊 **Track 5.12** The loaded opening read **without ceremony** — flat, quick, and straight into the paying sentence with no pause for effect. ⚠ Read slowly it is a performance, and the listener hears somebody who thinks their own figure is remarkable, which costs more than the figure buys.',
  '**Practise:** Six words with the argument in them, then the sentence that pays. **1** a count  **2** a refusal  **3** a request  **4** an absence  **5** a date that was missed',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their **real** first six words from something they have sent. B says what they expect. A then gives a **loaded** six words and the **paying** sentence. B says whether the paying sentence is a fact or an apology. Swap.'));
out.push(dlg(null, [
  ['A', '_(the real six)_ __________.'],
  ['B', 'I expect this to be about __________.'],
  ['A', '_(loaded six)_ __________. _(paying sentence)_ __________.'],
  ['B', 'The paying sentence is **a fact / an apology**, because __________.'],
]));
out.push(table(['Card A – load six words about…', 'Card B – load six words about…'], [
  ['_a count you have made_', '_a refusal you are sending_'],
  ['_a request you have made before_', '_an absence you have found_'],
  ['_a date that was missed_', '_a figure that has changed_'],
  ['_a disagreement_', '_a decision nobody recorded_'],
  ['_a thing that is smaller than it looks_', '_a thing nobody has turned over_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the eight loaded openings and whether each paying sentence was a fact or an apology. Then the count: on a first run **three or four of the eight pay with an apology** — _I hope you will forgive the abruptness_ — which spends the attention the opening bought on the writer. ⚠ And the second finding: the real openings were, on average, about **nine words longer** and contained nothing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the loaded six words and the paying sentence for something you have to send this week. Count the six on your fingers; seven is not six.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s paying sentence supplies **the** missing context or **some** context — and if it is _some_, say what the reader will still have to ask.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Six words, counted. Rim\'s were: we regret to advise that the. And what they tell a reader is that it is a letter from her office, and nothing else — and they have been the first six words of every refusal she has signed for three years, about two hundred and seventy letters with the same opening. Which is the arithmetic of the cycle: two hundred and seventy openings and one opening. So she loaded it: four pallets, eleven degrees over, returned. Six words. And she said it is rude. Omar said it is not rude, it is just fast, and Ms Huda said it is fast and it is unpaid, which is the point — a loaded opening skips the context, and the context has to arrive in the sentence immediately after it. That sentence is the one that pays, and without it a loaded opening reads as a telegram from somebody who has decided not to explain. Hiba said so you put the context second, and Ms Huda said you put it second and you make it do something: the paying sentence is not an apology for being brief and not a restatement, but the fact the reader needs in order to make sense of the six words. The probe reading was taken in front of your driver on 2 September and signed by both of us. Rim said that is not rude at all, and it is nineteen words shorter than what she has been sending — because speed and courtesy are not opposites, and speed and unexplained speed are different things. Then Jad brought the best evidence of the term, because he can count it: on the forum a post that opens with a figure gets read, and one that opens with "I have been thinking about" gets about a third of the reads from the same writers. And what happens after the figure matters as much: with nothing after it, people argue with the figure and the thread goes nowhere; with the source after it, they argue about the thing._'));
out.push(p('**Listener task:** write your real six words and your loaded six words, one above the other.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the refusal Rim sends in November, loaded. Answer the questions.'));
out.push(model([
  '**CONSIGNMENT 4471 · REFUSAL** · R. Shaaban · 4 November',
  '_Dear Sirs, Your consignment 4471 of 2 September refers._',
  '**Four pallets, eleven degrees over, returned.** The probe reading was taken in front of your driver at 07.20 on 2 September, recorded on the gate copy, and signed by both of us; the specified maximum is in clause 4 of the agreement and the reading was eleven degrees above it.',
  '**What I am not claiming, and I have had to learn to say this.** That the pallets stood anywhere. In September I wrote that they had stood at Homs overnight, you sent me the gate log, and I was wrong — and I withdrew the whole of that letter, which was a second mistake, because the eleven degrees was in it and the eleven degrees was never in doubt.',
  '**What is left, and it is narrower than what I wrote then.** Not a claim about your yard. A probe reading on one date, signed by two people, eleven degrees above a figure in clause 4.',
  '**What it has cost both of us since September, so far as I can count it.** Nine letters, four of them mine. Two telephone calls that ended in an agreement to write. One consignment held eleven days at this end, which I authorised and which the agreement does not provide for. And a driver who has now been asked the same question at the gate on three separate mornings by three different people, none of whom had read the previous answer.',
  '**All that is needed to close it.** The loading temperature, if it was taken. One figure, from your own sheet.',
  '**And if it was not taken.** Then we are both looking at one reading and a gap, and that is a shorter conversation than the one we have been having since September. _It was not until I had withdrawn a whole letter that I learnt to withdraw half of one._',
  '_Yours faithfully, R. Shaaban_',
  '**_(A note to myself, not sent.)_** Two hundred and seventy letters have begun _we regret to advise that the_. I counted them on Sunday, three years of them in one folder, and the counting took about forty minutes and told me more than the three years had. This one begins with the four pallets. Of the two hundred and seventy, **two** were ever written back to — and in both of those the figure happened to fall in the first line, because the house form had been filled in short. **What I am no longer going to do is put my six best words at the end of the second paragraph.**',
]));
out.push(item('1', 'What does the paying sentence supply, and how many facts are in it?'));
out.push(item('2', 'What does she say was her second mistake, and why?'));
out.push(item('3', 'What does the unsent note say she is no longer going to do?'));
out.push(writers([
  'A loaded letter: **the house form, in one line** → **six loaded words** → **the paying sentence, with the facts the opening skipped** → **what you are not claiming** → **what is left, named as narrower** → **_all that is needed_ — the request, sized** → **and the line for the case where the answer is nothing**.',
  '**The six words go first in the _body_ and the house form keeps its line above them.** _Your consignment 4471 of 2 September refers._ Then the four pallets. ⚠ A writer who fights the house form loses the letter; a writer who gives it one line keeps everything after it.',
  '⚠ **The paying sentence should carry three or four facts, not one.** _Taken in front of your driver at 07.20, recorded on the gate copy, signed by both of us, and clause 4._ The opening skipped all of the context, so the paying sentence has to be **long** — short then long, and this is where the length goes.',
  '**Use _all that is needed_ for the request** (5.4) and keep it to one figure. _One figure, from your own sheet._ A request that names its own size cannot be re-sized by the reader.',
  '⚠ And provide for the answer being nothing. _Then we are both looking at one reading and a gap, and that is a shorter conversation._ A letter that only works if the reader has what you asked for will get no reply at all when they have not.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the loaded letter (80 words or more).'));
out.push(p('_______________ ______________ refers._   **______________, ______________, ______________.** _(six words)_ ______________ was taken ______________, recorded ______________, and ______________; ______________.   **What I am not claiming.** ______________.   **What is left, and it is narrower.** Not ______________. ______________.   **All that is needed to close it.** ______________. One ______________, from ______________.   **And if ______________.** Then we are both looking at ______________, and that is ______________.   **_(A note to myself, not sent.)_** ______ letters have begun ______________. This one begins with ______________. **What I am no longer going to do is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Exactly six words in the loaded opening, counted',
  'A paying sentence with three or four facts in it',
  '_All that is needed_ for the request, with one figure',
  'A line for the case where the answer is nothing',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their six words, and the room says what it expects next.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more): the house line, the six loaded words, the long paying sentence, what you are not claiming, the narrower claim, the sized request, and the line for a nil answer.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: six words exactly, a paying sentence with three or four facts, a request that names its own size.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your six words and then your paying sentence, and nothing else.** The room says whether the second one pays. Then the arithmetic to leave the cycle on, which is Rim\'s: **two hundred and seventy letters, two replies** — and the six best words at the end of the second paragraph every time.'));
out.push(hw('Write the letter (80+ words) and send it. Then write down the first six words of the **reply**, if one comes, and whether they contain anything.'));

// ===================== 5.7 =====================
out.push(pb());
out.push(h2('5.7  Review & Mediate: Why that one and not the other'));
out.push(p('**Function:** explaining why one version of a sentence was quoted and the other was not   ·   **Recycling:** Unit 5   ·   **Exam practice:** B2 First Reading and Use of English Part 5 · Writing Part 1 · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** At no point anybody asked for the figure.  **2** Not only the figure was wrong but also I was tired.  **3** Of the eleven sites, the weather has been difficult.  **4** That nobody had done was turn one of the sheets over.  **5** It was not until June when anybody counted them.  **6** All what is needed is one field with a date in it.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the pairs the class brought, set out as they were sorted.'));
out.push(box(null, [
  '**QUOTED AND NOT QUOTED** _(six pairs, 5 November)_',
  '**Nour.** Quoted: _Of the forty-one calls, thirty-four involved a promise that is in no note of ours._ Not: the same figure in the twenty-second word of a thirty-word sentence.',
  '**Mazen.** Quoted: _Nine drafts, fourteen months, eleven minutes._ Not: _I had been working on it for some time before the meeting._',
  '**Omar.** Quoted: _two of the four have never been sent a new one_ — written in nine seconds. Not: a cleft he was pleased with, built on the sheet.',
  '**Dima.** Quoted: _four of forty-one_. Not: _the word is being used more loosely than it used to be._',
  '**Lubna.** Quoted: _there is no picture of the joint_. Not: _the documentation of the first-floor condition is incomplete in certain respects._',
  '**Rim.** Quoted: nothing, in two hundred and seventy letters, twice.',
  '⚠ **Five of the six quoted sentences contain a figure. The sixth is three figures.**',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What do all six quoted sentences have in common besides the figures, and what does Ms Huda say the unit has actually been about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.13  Six pairs on one board', [
  ['Ms Huda', 'Six pairs on the board, and I want somebody to find the thing that is not the figures.'],
  ['Dima', 'They are all short.'],
  ['Ms Huda', 'Mrs Sabbagh\'s is thirteen words and the one that was not quoted is thirty. Is that short?'],
  ['Dima', 'Shorter. Not short.'],
  ['Hiba', 'The figure is near the front in all of them.'],
  ['Ms Huda', 'Nearer the front. In Mr Hariri\'s it is **the** front. Keep going.'],
  ['Lubna', 'They can all be said in one breath.'],
  ['Omar', 'Mine cannot. Mine is nineteen words.'],
  ['Jad', 'They can all be said **without the rest of the sentence**. That is the thing. You can lift any of those six out and they still mean something. The ones that were not quoted cannot be lifted — you have to bring the sentence with them.'],
  ['Ms Huda', '**That is it, and it is the best answer anybody has given this term.** ⚠ **A quotable sentence is one that survives being removed from its paragraph.** Which is not the same as being short, and it is not the same as being emphatic. _The documentation of the first-floor condition is incomplete in certain respects_ cannot be lifted, because it does not say what documentation or in what respects, and the reader would have to go back.'],
  ['Adnan', 'So the test is: could somebody quote this to a third person who has not read the page?'],
  ['Ms Huda', 'That is the test, and it is the test the whole unit has been building. ⚠ Fronting, inversion, delay and the clefts are **four ways of making a sentence liftable** — of putting the thing that matters where it can be picked up without the rest.'],
  ['Rim', 'Mine is the one with nothing in it.'],
  ['Ms Huda', 'Yours is the most useful line on the board and I have left it last on purpose. Two hundred and seventy letters, two replies. What was liftable in them?'],
  ['Rim', 'Nothing. _We regret to advise that the consignment has been found not to conform_ cannot be lifted, because it does not say which consignment or what the matter was. There is nothing in it for anybody to carry anywhere.'],
  ['Ms Huda', '⚠ **And that is what the unit has been about, and it has not been about word order at all.** Word order is the instrument. **What you have been learning is how to write a sentence that somebody else can repeat** — in a minute, in a corridor, to a person who was not there and will decide.'],
  ['Mazen', 'Which is 22.2 from last year.'],
  ['Ms Huda', 'It is 22.2 with four more shapes and one test. Last year you learnt that everything you say about your own work is summarised by somebody else before it reaches whoever decides anything. **This year you learnt what to do about it.**'],
]));
out.push(sp());
out.push(box('Language box – the liftability test', [
  '⚠ **The test, and it is what the whole unit has been building.** **Could somebody quote this sentence to a third person who has not read the page?** A quotable sentence is one that **survives being removed from its paragraph** — which is not the same as being short and not the same as being emphatic.',
  '**Why the unquoted ones fail.** _The documentation of the first-floor condition is incomplete in certain respects_ cannot be lifted: it does not say **what** documentation or **in what** respects, so the reader must go back. ⚠ A sentence that sends the reader back cannot be carried forward. **And the repair is not a shape.** _In certain respects_ cannot be fronted, inverted or clefted into anything worth carrying, because there is nothing in it to put in a strong position.',
  '**What the four shapes are actually for.** Fronting, inversion, delay and the clefts are **four ways of making a sentence liftable** — of putting the thing that matters where it can be picked up without the rest.',
  '**The three things a liftable sentence almost always contains.** **A figure, a date or a name.** **A noun that identifies itself** — _the four pallets_, not _the consignment_. And **a verb that says what happened**, not what is the case.',
  '**How to test it without a second person, which is how you will usually have to do it.** Copy the sentence on to a line of its own, with nothing above it and nothing below it, and read it as though somebody else had sent it to you. ⚠ Every question you find yourself asking — **which** sheet, **what** respects, **whose** decision, **how many** — is a question your reader will ask, and they will ask it of the paragraph and not of you. A sentence that raises no question when it stands alone is liftable; one that raises a question is not, and the repair is almost always a **noun** and almost never a shape.',
  '**And the one place liftability is a danger.** A liftable sentence can be lifted by somebody who disagrees with you, and it will be: it is the sentence that goes into the minute, into the forwarded message and into the summary that reaches whoever decides. ⚠ So the test has a second half — **would you be content to be quoted on this, out of its paragraph, by somebody who is not on your side?** If not, the sentence is not too liftable; it is **not true enough yet**, and the repair is in the fact and not in the grammar.',
  '⚠ **And the unit\'s real subject, which is not word order.** Word order is the instrument. **What you have learnt is how to write a sentence somebody else can repeat** — in a minute, in a corridor, to a person who was not there and who will decide. That is B1 22.2 with four more shapes and one test.',
  '**Pronunciation.** 🔊 **Track 5.14** Six quoted sentences and their six unquoted twins, read in pairs, flat, with no comment between them. ⚠ Listen for what the unquoted ones make you do: in four of the six you reach for the beginning of the sentence again, and that reaching is the thing a reader will not do twice.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the sets below and does **not** show it. A reads the four sentences once. B must say which **two** are liftable and, for each of the other two, what the reader would have to go back for. Change roles with the other set.'));
out.push(table(['Set A – four sentences from a hospital report', 'Set B – four sentences from a depot report'], [
  ['_1 "Nineteen of the thirty-one October sheets have an empty lot box."_', '_1 "On forty-one of the sixty-two mornings the first service left at 06.20."_'],
  ['_2 "The documentation of the handover process is incomplete in certain respects."_', '_2 "There are a number of outstanding matters relating to the printed schedule."_'],
  ['_3 "It was not until the October question that anybody looked at the box."_', '_3 "The catch was reported on 14 August and again on 9 September."_'],
  ['_4 "Appropriate arrangements should be in place for the recording of batch information."_', '_4 "Adherence to the published times is expected of all drivers at all times."_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two liftable sentences in each set, and what the reader would have to go back for in the other two. ⚠ On **both** sets the liftable pair is **1 and 3** and the unliftable pair is **2 and 4** — and the reason is the same in all four failures: **no figure, and a noun that does not identify itself.** _The handover process_, _outstanding matters_, _appropriate arrangements_, _the published times_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **your** pair — the sentence that was quoted and the one that was not. Give both to your partner, who has not seen either. Your partner must say which was quoted, and why, **without being told**. Then swap. ⚠ If your partner cannot tell, your quoted sentence was quoted for a reason outside the writing, and that is worth knowing too.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the six pairs had in common and what your partner could not tell:  _Six pairs on the board, and Ms Huda asked for the thing that is not the figures. Dima said they are all short, and was told that Nour\'s is thirteen words and the unquoted one is thirty — so shorter, and not short. Hiba said the figure is near the front in all of them, and in Mazen\'s it is the front. Lubna said they can all be said in one breath, and Omar said his cannot, because his is nineteen words. Then Jad found it: they can all be said without the rest of the sentence. You can lift any of those six out and they still mean something, and the ones that were not quoted cannot be lifted — you have to bring the sentence with them. Which is the best answer anybody has given this term: a quotable sentence is one that survives being removed from its paragraph, which is not the same as being short and not the same as being emphatic. "The documentation of the first-floor condition is incomplete in certain respects" cannot be lifted, because it does not say what documentation or in what respects, and the reader would have to go back. Adnan said so the test is whether somebody could quote this to a third person who has not read the page, and that is the test the whole unit has been building: fronting, inversion, delay and the clefts are four ways of making a sentence liftable. Then Rim\'s pair, which was left till last. Two hundred and seventy letters, two replies, and nothing liftable in any of them — because "we regret to advise that the consignment has been found not to conform" does not say which consignment or what the matter was, so there is nothing in it for anybody to carry anywhere. And the unit turns out not to have been about word order at all: word order is the instrument, and what the class has learnt is how to write a sentence somebody else can repeat, to a person who was not there and who will decide. Which is 22.2 from last year with four more shapes and one test — last year they learnt that everything you say about your own work is summarised before it reaches anybody who decides, and this year they learnt what to do about it._'));
out.push(p('**Listener task:** write whether your partner could tell which of your two sentences was quoted, and the reason they gave.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 5)', 7));
out.push(p('Read the text and then answer questions **1–6**. For each question choose the answer (**A**, **B**, **C** or **D**) which you think fits best.'));
out.push(box(null, [
  '**THE SENTENCES THAT TRAVEL**',
  'Anybody who has ever had their own words read back to them in a meeting will know the particular discomfort of recognising the sentence and not the emphasis. The words are yours; the weight has moved. What has happened is not usually dishonesty on anybody\'s part. It is that a person repeating a sentence keeps whatever they can carry, and what they can carry is decided by how the sentence was built rather than by what the speaker thought was important about it.',
  'This has a consequence that most writers never examine. A sentence has, at most, one thing in it that will survive being lifted out of its paragraph, and that thing is almost never chosen. It is whatever sits in a position of prominence — at the front, or at the end, or inside a structure that holds it there — and if the writer has not decided which that is, the sentence decides for them.',
  'The usual advice is to be brief, and it is poor advice because it is not what is wrong. A thirteen-word sentence from which nothing can be lifted travels no better than a thirty-word one. What is needed is not shortness but **selection**: a reader cannot be given three things to remember and will not be given none. The practical consequence is uncomfortable for anybody who takes pride in completeness, since it means that a paragraph containing four equally important facts has failed, not because four is too many to write but because four is too many to carry.',
  'There is a second consequence, less often admitted. A writer who has learnt to build a liftable sentence has acquired an instrument that can be pointed anywhere, and the same figure can be made to carry a different conclusion depending on which noun is given prominence. This is not an abuse of the technique; it is the technique. The honest practice is not to avoid prominence but to decide what the reader is going to **do**, and to give prominence to the thing they will need.',
  '',
  '**1** In the first paragraph, the writer says the discomfort comes from   **A** being misquoted deliberately.   **B** recognising the words but not the emphasis.   **C** being quoted at all.   **D** hearing one\'s own voice repeated.',
  '**2** What does the writer say decides what a listener carries away?   **A** what the speaker thought was important   **B** the length of the sentence   **C** how the sentence was built   **D** the listener\'s own interests',
  '**3** What does _that thing_ refer to in the second paragraph?   **A** the one element that survives being lifted out   **B** the paragraph   **C** the writer\'s intention   **D** the advice to be brief',
  '**4** Why does the writer call the usual advice poor?   **A** because brevity is difficult   **B** because short sentences are less formal   **C** because readers prefer longer sentences   **D** because it does not address what is actually wrong',
  '**5** What does the writer say about a paragraph with four equally important facts in it?   **A** it is too long   **B** it has failed, because four cannot be carried   **C** it should be divided   **D** it is acceptable in formal writing',
  '**6** What is the writer\'s attitude to the technique in the last paragraph?   **A** it should be used sparingly   **B** it is open to abuse and should be avoided   **C** it is unavoidable, so the honest course is to aim it deliberately   **D** it works only for figures',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the explanation of your own pair (80 words or more).'));
out.push(p('**WHY THAT ONE AND NOT THE OTHER** · ______________   **The one that was quoted.** "______________" _(______ words)_   **The one that was not.** "______________" _(______ words)_   **What is liftable in the first.** ______________.   **What the second sends the reader back for.** ______________.   **The shape of each.** The first is ______________. The second is ______________.   **And the noun each carries.** The first carries ______________. The second carries ______________ — which was not what my reader was going to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both sentences quoted with their word counts',
  'What is liftable in the first, named as a thing',
  'What the second sends the reader back for',
  'The noun each carries, against what the reader was going to do',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The third essay of the course, and the one to use the unit on.** The shape is Unit 3 — four paragraphs, four lines of plan, one conceded point. **What Unit 5 adds is the first six words of each paragraph and the last sentence of the essay.**',
  'In your English class you have been talking about how people remember what they are told. Your teacher has asked you to write an essay.',
  '_"The way something is said matters more than what is said."_ Do you agree?',
  'Write an essay using **all the notes** and giving **reasons** for your point of view. Write **180–220 words**.',
  'Notes — write about: **1** in writing   **2** in a meeting   **3** ______________ _(your own idea)_',
], C.lorange, C.orange));
out.push(...lines(8));
out.push(pb());
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  At no point ___ anybody ask for the figure.   a) did   b) does   c) was',
  '2  Rarely ___ I seen a sheet signed twice in nineteen years.   a) had   b) has   c) have',
  '3  Not only ___ the figure wrong, but the date was too.   a) it was   b) was   c) were',
  '4  Of the eleven sites, ___ still on the old sheet.   a) four are   b) are four   c) four is',
  '5  ___ nobody had done was turn one of the sheets over.   a) That   b) Which   c) What',
  '6  All ___ is one field with a date in it.   a) what is needed   b) that is needed   c) which is needed',
  '7  It was not until June ___ anybody counted them.   a) when   b) which   c) that',
  '8  Under no circumstances ___ the box optional.   a) it is   b) is   c) being',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 1 style – eight short extracts).** 🔊 **Track 5.15** You will hear eight short extracts. For each question (**1–8**), choose the correct answer **A**, **B** or **C**.'));
[
  '**1**  How many letters does the woman say began with the same six words?   **A** two   **B** two hundred and seventy   **C** forty-one',
  '**2**  What does the man say a reader decides from the first six words?   **A** what the sentence is about   **B** whether to read on   **C** who wrote it',
  '**3**  What had the woman never used the inversion for?   **A** official forms   **B** meetings   **C** anything of her own',
  '**4**  Where does the man say the weak position in a sentence is?   **A** at the front   **B** in the middle   **C** at the end',
  '**5**  What does the woman say a stress cannot survive?   **A** being written down   **B** a long sentence   **C** a noisy room',
  '**6**  Which version does the sub-editor say she would keep?   **A** the cleft   **B** the flat one   **C** the fronted one',
  '**7**  What does the man say happens to a post that opens with a figure?   **A** it is read   **B** it gets about a third of the reads   **C** it is ignored',
  '**8**  What does the woman say is liftable in her two hundred and seventy letters?   **A** the figure   **B** nothing   **C** the register',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 5.15  Audio script (read after the check)', [
  ['1  Woman', 'I counted them on Sunday, which I had never thought to do. Two hundred and seventy refusals in three years, and every single one of them begins _we regret to advise that the_. The same six words at the top of all of them, and two replies in three years.'],
  ['2  Man', 'A reader decides what a sentence is about from the first six words, and then fills in the rest without revising that decision. They are not being careless — that is what reading is. So a figure in the twenty-second word arrives in a shape that has no room for it, and it is simply not there as far as anybody\'s memory of the sentence is concerned.'],
  ['3  Woman', 'I have written _under no circumstances is the form to be returned unsigned_ about a thousand times. It is the house style and I learnt it in my first month. And in nineteen years I have never once used that structure for anything of my own — not for a figure, not for an opinion, not for a thing that had never happened to me.'],
  ['4  Man', 'There are two strong places in a sentence and one weak one, and the weak one is the middle. Which is where most of us put the thing we are least sure about, between two commas, and it is also where a reader puts the things they are not going to remember. Nothing of value between two commas, ever.'],
  ['5  Woman', 'You can stress a word in a room and it works, and then somebody writes the sentence down and the stress is gone, because a stress cannot be written down. It cannot be minuted and it cannot be summarised. So you put the emphasis into the grammar instead, where it survives being repeated by somebody who never heard you say it.'],
  ['6  Woman', 'All three were grammatical and the fronted one is the one I would keep. His cleft was well built and it was pointing at the wrong noun: it emphasised the old sheet, and the old sheet is not the news. The news is four of eleven. I would not have been being kind about it either.'],
  ['7  Man', 'I can see the numbers, which is the useful part. A post that opens with a figure gets read. A post that opens _I have been thinking about_ gets about a third of the reads, and it is the same people writing both kinds. And if there is nothing after the figure, people argue with the figure; if the next line says where it came from, they argue about the thing itself.'],
  ['8  Woman', 'Nothing. That is the honest answer. _We regret to advise that the consignment has been found not to conform_ — you cannot lift anything out of it, because it does not say which consignment or what was wrong, so there is nothing in it that anybody could carry to anybody else. Three years of letters that could not be quoted.'],
]));
out.push(p('**C  Writing.** Write the loaded letter (180+ words): the house line, six loaded words, the long paying sentence, the narrower claim, and a request that names its own size.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 5)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ front a quantity phrase, a time phrase, a _what_ clause or the object',
  '☐ invert after a negative adverbial, and keep the auxiliary in front of the subject',
  '☐ use _not only … but also_ with two things of the same kind',
  '☐ delay the point to the end, and put nothing of value between two commas',
  '☐ build all four clefts, and use _all … is_ to size a request',
  '☐ choose between three versions by asking which one the reader will quote',
  '☐ write six loaded words and the sentence that pays for them',
  '☐ tell a liftable sentence from one that sends the reader back',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 6 – DECIDING, AND SAYING SO', [
  'Unit 5 was about one sentence. **Unit 6** is about a decision: narrowing five options to two out loud, disagreeing without stopping the task, and recording the result so that somebody who was not there can act on it.',
  '**6.3 teaches B2 Speaking Part 3** — the two-part discussion: three minutes with your partner on a set of options, and then **one minute on a separate question**, decided together. It is the longest piece of interaction in the examination and the one where a polite candidate loses most.',
  '⚠ **And after Unit 6 comes the Mid-Book Test** — Reading 20, Writing 15, Listening 15, Speaking 10, in sixty minutes of paper and about twelve minutes of speaking. **All four Speaking parts are in it**, which is why Part 2 was taught in Unit 4 and Part 3 is taught in Unit 6.',
  '**Bring one decision you were not at** and have had to carry out, and **one you were at** that was never written down. 6.4 and 6.6 are built on the pair.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
