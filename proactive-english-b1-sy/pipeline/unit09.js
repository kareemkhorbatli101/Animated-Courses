// Proactive English B1 · Syria Edition · Book 1 · Unit 9 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const photo = (title, paras) => box(title, paras, C.lyellow, C.orange);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 9  Deduction and Doubt'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**9.1**  say what must be true',
  '**9.2**  say what might be true',
  '**9.3**  say what cannot be true',
  '**9.4**  describe a photograph and speculate about it',
  '**9.5**  say how certain you are',
  '**9.6**  write a description of a scene',
  '**9.7**  Review & Mediate: say what you think is happening, with evidence',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**A photograph out of a drawer.** Ms Huda has found a photograph in the bottom of a cupboard in Room 14, left behind by the textile company. Eleven men outside a building in about 1963. Nobody knows who any of them are, and the class spends four cycles finding out what can and cannot be said about them.',
  '**The exam long turn, taught properly.** In **9.4** you learn B1 Preliminary **Speaking Part 2**: one minute, alone, about a photograph. It is the part candidates most often waste, and the whole of it is a shape you can learn in forty minutes.',
  '**Bring your photograph.** Unit 8 asked for one of a place or a group of people you do not know. 9.4 does not work without it.',
], C.lyellow, C.orange));

// ======================= 9.1 =======================
out.push(pb());
out.push(h2('9.1  It must have been taken in the summer'));
out.push(p('**Function:** saying what must be true   ·   **Grammar:** _must be_ · _must have been_   ·   **Pronunciation:** _must have_ reduced to /mʌstəv/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six things about the photograph on the next page. For each one the class says whether it is something you can **see** or something you have **worked out**. Three of each.'));
out.push(board('It must have been taken in the summer.', 'must be (now) · must have been (then)'));
out.push(p('**b**  Now or then? **1** _He must be the manager._  **2** _He must have been the manager._  **3** _They must be waiting for somebody._  **4** _They must have been waiting for somebody._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Look at the photograph.'));
out.push(photo('PHOTOGRAPH FROM THE CUPBOARD · Room 14 · found in April', [
  '_There is no image in this book. This is what the photograph shows, written down._',
  'Eleven men standing in two rows outside a four-storey building, on a pavement, with the building behind them. The building is the one this class is sitting in: the doors are narrow and they open outwards, and there are four rows of windows.',
  'Ten of the men are in suits with no jackets — white shirts, dark trousers, ties. The eleventh, at the end of the back row, is in a grey work coat with something in the breast pocket.',
  'All eleven are squinting, and the shadows of the men fall almost straight down and very short.',
  'There is a car at the left edge, half out of the frame, with a number plate that cannot be read. There is a hand-painted sign above the door of the building, in Arabic, of which the last three letters are visible.',
  'At the front, on the pavement, there is a line of eleven chairs, empty, facing the camera.',
  'On the back, in pencil, in one hand: _14/8_ — and nothing else.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. What does the class work out in the first two minutes?   **A** who the men are   **B** the time of year and the time of day   **C** what the sign says'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.1  Eleven men and eleven chairs', [
  ['Ms Huda', 'I found this in the bottom of the cupboard in the corner. Nobody knows who they are. What can we say?'],
  ['Lubna', 'It must have been taken in the summer and it must have been about midday. The shadows are straight down and very short, and all of them are squinting into the sun.'],
  ['Jad', 'And 14/8 on the back, in pencil. The fourteenth of August.'],
  ['Lubna', 'Which agrees with the shadows, so we have two pieces of evidence that say the same thing — and that is better than one piece of evidence twice.'],
  ['Mazen', 'The man at the end must be the one who works there. The others are visiting.'],
  ['Ms Huda', 'Why?'],
  ['Mazen', 'He is in a work coat and they are in shirts and ties with no jackets. Ten men take their jackets off because it is August; one man never had a jacket. And he has something in his breast pocket — I cannot see what it is and it must be pens or a rule.'],
  ['Omar', 'And the chairs?'],
  ['Lubna', 'The chairs must have been brought out of the building, because nobody keeps eleven chairs on a pavement. Eleven chairs and eleven men.'],
  ['Jad', 'Then somebody must have been going to speak to them. You do not put chairs on a pavement in August at midday for eleven men who are standing up in a photograph.'],
  ['Ms Huda', 'Stop there, because you have all just done the same thing and I want you to notice it. Every one of those sentences has _must_ in it, and every one of them is a conclusion and not a fact. What you can **see** is eleven men, a work coat, short shadows and eleven chairs. Everything else in the last four minutes is yours.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _must_ for what you have worked out**',
  table(['you say', 'what it means'], [
    ['_He **must be** the one who works here._', 'about **now**: the only explanation I can see'],
    ['_It **must have been** taken in August._', 'about **then**: the only explanation for the evidence'],
    ['_They **must have been** waiting for somebody._', 'then, and continuing at the time'],
    ['_It **must be** about midday._', 'now — and in a photograph, _now_ means in the picture'],
  ], [2.4, 2.2]),
  '**This is not the _must_ of Unit 6.** _You must sign it_ is an obligation. _He must be the manager_ is a **deduction**: it means I have no other explanation. The form is identical and the two uses have nothing to do with each other.',
  '**_must have_ + past participle** for the past: _must have been · must have come · must have brought · must have been waiting_.',
  '⚠ ~~It must be taken in August.~~ → _must **have been** taken_. ⚠ ~~He must to be the manager.~~ → _must **be**_. ⚠ ~~It must been~~ → _must **have** been_.',
  '⚠ _must_ is a conclusion, so it needs evidence **in the sentence or just before it**. _He must be the manager_ on its own is a guess wearing a deduction; _he must be the manager — he is the only one in a work coat_ is a deduction.',
  '**Two pieces of evidence that agree are worth far more than one piece twice.** The shadows and the pencil both say August, and they are independent. Say so when it happens; it is the strongest thing you can do with a photograph.',
  '**Useful phrases:** two pieces of evidence that say the same thing · one man never had a jacket · nobody keeps eleven chairs on a pavement · everything else in the last four minutes is yours.',
  '**Practise:** Give the deduction **and** the evidence for it.  1 the shadows  2 the work coat  3 the chairs  4 the jackets  5 the pencil on the back  6 the car at the edge',
  '**Pronunciation.** 🔊 **Track 9.2** _must have_ becomes /mʌstəv/ and sometimes /mʌstə/, and the **participle** takes the stress: _it mʌstəv been **TAK**en in August_. If you say _must have_ in full, it sounds like an argument. Listen to eight and write _must be_ or _must have been_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names one thing in the photograph from the card. B makes a deduction with _must_ **and** gives the evidence in the same breath. A then asks for a second piece of evidence that agrees. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It must __________, because __________.'],
  ['A', 'Is there a second thing that says the same?'],
  ['B', '__________.'],
  ['A', 'So how sure are you?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – things in the photograph', 'Card B – things in the photograph'], [
  ['the very short shadows', 'the ten men with no jackets'],
  ['the man in the work coat', 'the eleven empty chairs'],
  ['the pencil mark on the back', 'the car half out of the frame'],
  ['the hand-painted sign', 'the narrow doors that open outwards'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the deduction and both pieces of evidence. Then: which deductions had only one piece of evidence behind them? Those are the ones that will be taken away in 9.3.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Look at the photograph again on your own for one minute. Then give your partner **three** deductions with _must_, each with its evidence. They may only say _what makes you say that?_'));
out.push(p('**b**  Swap. Then each of you say which of your three you would still make if the pencil mark on the back were missing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda found a photograph in the bottom of the cupboard and nobody knows who the men are. Lubna said it must have been taken in the summer and must have been about midday, because the shadows fall straight down and are very short and all of them are squinting into the sun. Jad said there is 14/8 on the back in pencil — the fourteenth of August — and Lubna said that agrees with the shadows, so there are two pieces of evidence saying the same thing, which is better than one piece of evidence twice. Mazen said the man at the end must be the one who works there and the others are visiting, because he is in a work coat and they are in shirts and ties with no jackets: ten men take their jackets off because it is August and one man never had a jacket. And he has something in his breast pocket, which must be pens or a rule. Lubna said the chairs must have been brought out of the building, because nobody keeps eleven chairs on a pavement — eleven chairs and eleven men. Jad said then somebody must have been going to speak to them. And Ms Huda stopped us, because every one of those sentences has must in it and every one is a conclusion and not a fact: what we can see is eleven men, a work coat, short shadows and eleven chairs, and everything else in four minutes is ours._'));
out.push(p('**Listener task:** write the deduction you think will not survive, and why.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Lubna writes about the photograph. Answer the questions.'));
out.push(model([
  '**WHAT CAN BE SAID ABOUT ELEVEN MEN** · L. Sweidan · one page, in two halves',
  '**What is in the photograph.** Eleven men in two rows on a pavement. A four-storey building behind them with four rows of windows and doors that open outwards. Ten white shirts with ties and no jackets; one grey work coat with something in the breast pocket. Eleven empty chairs on the pavement, facing the camera. A car at the left edge, half out of frame. A hand-painted sign with three letters visible. On the back, in pencil: 14/8.',
  '**What must be true, and why.** It must have been taken in high summer and within about an hour of midday: the shadows fall almost vertically and are shorter than the men\'s shoes are long, and every one of the eleven is squinting. The pencil note says 14/8 and agrees with the shadows, which is two independent reasons for the same conclusion.',
  'The chairs must have been carried out of the building. Nobody keeps eleven chairs on a pavement, and there are exactly as many chairs as men.',
  'The man in the work coat must have worked in the building. He is the only one dressed for work rather than for being photographed, and a man who has taken his jacket off and a man who never had one do not look the same in a photograph: the ten have collars that have been loosened and he has none.',
  '**What I have had to take out of this page three times.** That somebody was about to make a speech. That the men were happy. That it was the day the building opened. All three of those were in my first version and not one of them is in the photograph; they are in me, and the chairs put them there.',
]));
out.push(item('1', 'What two independent reasons does she give for the date?'));
out.push(item('2', 'How does she tell a man who has taken his jacket off from a man who never had one?'));
out.push(item('3', 'What three things has she taken out, and where does she say they came from?'));
out.push(writers([
  'A page about evidence, in two halves: **what is in the photograph, listed flat, with no conclusions at all** → **what must be true, each with its evidence attached** → **and a last section of what you have taken out**.',
  'Keep the first half **completely free of deduction**. _Ten white shirts with ties and no jackets_ — not _ten office workers_. The moment a conclusion gets into the list, the second half cannot be checked.',
  'Attach the evidence to every _must_ in the same sentence. A page of deductions with the evidence in a separate paragraph reads as a story with footnotes.',
  '⚠ Write the last section. Everybody puts three or four things into a photograph that are not there, and they are nearly always the emotional ones — _they were happy_, _it was an important day_. Naming them is what makes the rest of the page trustworthy.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two halves about the photograph you brought (50 words or more).'));
out.push(p('**What is in the photograph.** ______________. ______________. ______________. ______________.   **What must be true, and why.** It must ______________: ______________, and ______________. ______________ must ______________. ______________, and ______________.   ______________ must have ______________. ______________ is the only ______________, and ______________.   **What I have had to take out.** That ______________. That ______________. That ______________. Not one of them is in the photograph; they are in me, and ______________ put them there.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_must be_ for now, _must have been_ + participle for then',
  'The first half with no conclusions in it at all',
  'Evidence attached to every _must_, in the same sentence',
  'A last section naming what you have taken out',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I have had to take out" section only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about your photograph. Then write underneath the one deduction you are least sure of, and say what would have to be in the picture for you to be sure.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has not seen the photograph**. ★ _The deduction with two independent reasons._  ✓ _One conclusion that has got into the first half._  ? _What makes you say that?_ — pick any _must_.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the things people have taken out.** Count how many are about **feelings** — they were happy, proud, nervous, poor. Nearly all. That is the finding of the cycle and the class will not forget it.'));
out.push(hw('Write the two halves about a photograph in your own house (50+ words) — and then show it to somebody who is in it, or who remembers it, and write down which of your deductions was wrong.'));

// ======================= 9.2 =======================
out.push(pb());
out.push(h2('9.2  It might be a batch fault'));
out.push(p('**Function:** saying what might be true   ·   **Grammar:** _might_ · _may_ · _could_ be   ·   **Pronunciation:** the flat tone of a maybe'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six of the class\'s own _must_ sentences from 9.1. For each one: is it really a _must_, or is it a _might_? Four of the six come down.'));
out.push(board('It might be pens. It could be a rule. It may be nothing.', 'might · may · could'));
out.push(p('**b**  Strength. **1** _It must be pens._  **2** _It might be pens._  **3** _It could be pens._  **4** _It may be pens._  **5** _It might well be pens._  Which is strongest and which weakest?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do they take down from _must_ to _might_?   **A** the date   **B** the chairs and the breast pocket   **C** the building'));
out.push(p('**b**  Listen again. **1** Why does the breast pocket come down?   **2** What does Mazen say about his own fifteen telephones?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.3  Four of the six come down', [
  ['Ms Huda', 'Six sentences from last week. Which of them is really a must?'],
  ['Lubna', 'The date is a must. Two independent reasons.'],
  ['Jad', 'The work coat is a must, or nearly. He is dressed differently from all ten of the others, and that is a fact about the photograph and not about me.'],
  ['Mazen', 'The pens come down. I said there must be pens in that pocket, and what is actually true is that there is something in the pocket about the size of pens. It might be pens. It could be a folded paper. It may be a spectacle case.'],
  ['Omar', 'Does it matter? It is a pocket.'],
  ['Mazen', 'It matters because I said "must" and a man listening to me would have taken the pens as given, and then everything I built on the pens would be mine and not the photograph\'s. I have done exactly this with telephones. I said fifteen of one model were badly made, and what I actually had was fifteen uneven glue lines. The glue line is a must. "Badly made" was a might and I wrote it as a must, in a letter, in October.'],
  ['Ms Huda', 'And the chairs?'],
  ['Lubna', 'The chairs must have been carried out — that holds. What comes down is what they were for. Somebody **might** have been going to speak. They **could** have been put out for a different group who came later. They **may** have been going back inside and somebody stopped to take a photograph.'],
  ['Jad', 'Three explanations and nothing to choose between them.'],
  ['Ms Huda', 'Which is what _might_ is for. It is not a weaker _must_; it is a different instrument. _Must_ says: I can see no other explanation. _Might_ says: here is one of several, and I am telling you it is one of several.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – one of several explanations**',
  table(['you say', 'how it is used'], [
    ['_It **might** be pens._', 'the ordinary one; one possibility among others'],
    ['_It **could** be a folded paper._', 'the same; good for offering an **alternative**'],
    ['_It **may** be a spectacle case._', 'slightly more formal, more common in writing'],
    ['_Somebody **might have been** going to speak._', 'about the past: _might have_ + participle'],
  ], [2.2, 2.4]),
  '**_might_ is not a weak _must_.** _Must_ says: I can see no other explanation. _Might_ says: here is one of several, **and I am telling you there are others**. The second half of that is the whole value of the word.',
  '**_could_ is the one to use when you are offering an alternative to somebody else\'s idea:** _it might be pens — or it could be a spectacle case._ Three _mights_ in a row sound like indecision; _might… could… may…_ sounds like a list.',
  '⚠ ~~It might to be pens.~~ → _might **be**_. ⚠ ~~It might been~~ → _might **have** been_. ⚠ ~~Maybe it must be~~ — choose one.',
  '⚠ _maybe_ (one word, adverb) and _may be_ (two words, verb): _**Maybe** it is pens_ · _It **may be** pens._ Both are correct and students write _maybe_ where the verb is needed.',
  '**And the reason it matters at work:** a _might_ written as a _must_ transfers your guess to the reader as a fact, and everything built on it is then yours. _Fifteen uneven glue lines_ is a must. _Badly made_ was a might, written as a must, in a letter, in October.',
  '**Useful phrases:** that is a fact about the photograph and not about me · three explanations and nothing to choose between them · it is not a weaker must, it is a different instrument.',
  '**Practise:** Give three explanations for each, using _might_, _could_ and _may_.  1 something in a breast pocket  2 eleven empty chairs  3 a car half out of the frame  4 a hand-painted sign with three letters showing  5 all eleven men squinting',
  '**Pronunciation.** 🔊 **Track 9.4** A _might_ sentence is said **flat**, with no emphasis and a slight fall at the end: _it might be pens._ Put stress on _might_ and it sounds like a disagreement; put stress on the noun and it sounds like a guess you have already decided. Listen to six and mark the flat ones.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the detail from the card. B gives **three** explanations — _might_, _could_, _may_ — and then says whether anything in the photograph chooses between them. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It might __________. It could __________. It may __________.'],
  ['A', 'Is there anything that chooses between them?'],
  ['B', '__________.'],
  ['A', 'So what is the honest sentence?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the details', 'Card B – the details'], [
  ['something the size of pens in a breast pocket', 'eleven empty chairs facing the camera'],
  ['a car half out of the frame', 'three letters of a hand-painted sign'],
  ['a number plate that cannot be read', 'two rows rather than one'],
  ['one man at the end of the back row', 'the pencil 14/8 and nothing else'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three explanations for each detail and mark the ones where **nothing in the photograph chooses**. That is most of them, and the honest sentence in those cases is always the same shape: _there is something about the size of X._'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take two of your own _must_ sentences from 9.1 and bring them down to _might_, giving the other explanations you had not said out loud. Then say which of the two you had been most confident about.'));
out.push(p('**b**  Swap. Then each of you find one thing in your own work or life that you have been calling a _must_ and is a _might_.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda read six of our sentences back and asked which are really musts. Lubna said the date is a must, because there are two independent reasons. Jad said the work coat is a must or nearly, because the man is dressed differently from all ten of the others, and that is a fact about the photograph and not about him. Mazen took the pens down: he had said there must be pens in the pocket, and what is actually true is that there is something in the pocket about the size of pens — it might be pens, it could be a folded paper, it may be a spectacle case. Omar asked whether it matters, since it is a pocket, and Mazen said it matters because he said "must", so a man listening to him would have taken the pens as given, and then everything built on the pens would be his and not the photograph\'s. He has done exactly that with telephones: he said fifteen of one model were badly made, and what he actually had was fifteen uneven glue lines. The glue line is a must; "badly made" was a might written as a must, in a letter, in October. And the chairs: that they were carried out holds, but what they were for comes down — somebody might have been going to speak, they could have been put out for a different group, they may have been going back inside. Jad said three explanations and nothing to choose between them, and Ms Huda said that is what might is for: it is not a weaker must, it is a different instrument._'));
out.push(p('**Listener task:** write the _must_ that somebody has been using where a _might_ belongs.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mazen adds to his own file. Answer the questions.'));
out.push(model([
  '**ONE WORD IN MY OWN LETTER** · M. Hariri · April, for my own file',
  'In October I wrote to two shops that a model was badly made. In April a class I go to took a photograph apart for an hour and I understood what I had done in October, which is the same thing I did with the pens in the photograph.',
  '**What I have.** Fifteen units of one model, bought from two shops, sold between January and March, with an uneven adhesive line visible under a lamp in fifteen out of fifteen. Three with adhesive in the earpiece. Two with none along the lower edge. Nine carried in a case.',
  '**What that must mean.** The adhesive on those fifteen was applied inconsistently. There is nothing else that produces a brush line that is different in every one of fifteen units.',
  '**What it might mean, and I have three.** It might be a batch — one week of one shift at one factory. It could be the way that model is assembled everywhere, in which case there are a hundred thousand of them. Or it may be the two shops: a storage problem, heat on a shelf, something I have not thought of at all.',
  '**What I wrote in October.** "The model is badly made." That is not one of the three. It is all three at once, decided, in four words, and it is why I was answered after seven months with eleven lines.',
  '**What I will write next time.** The must, then the three mights, then one sentence saying I cannot choose between them and that they can.',
]));
out.push(item('1', 'What does he say must be true, and why is there nothing else?'));
out.push(item('2', 'What are his three _mights_?'));
out.push(item('3', 'What does he say "badly made" actually was?'));
out.push(writers([
  'A page that separates the two: **what you have, listed** → **what that must mean, with the reason nothing else explains it** → **what it might mean, numbered, two or three of them** → **and one line saying you cannot choose between them and who can**.',
  'Say **how many** _mights_ you have: _what it might mean, and I have three_. A reader who is told there are three possibilities reads all three; a reader given one possibility reads it as your conclusion.',
  'Make the three genuinely different in **size**: one week of one shift, or a hundred thousand units, or two shops. Three possibilities of the same size are usually one possibility written out three times.',
  '⚠ End by handing the choice over: _I cannot choose between them and they can._ That sentence is what gets a letter answered by somebody with the information.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page for something you have been calling a _must_ (50 words or more).'));
out.push(p('**______________** · ______________   **What I have.** ______________. ______________. ______________.   **What that must mean.** ______________. There is nothing else that ______________.   **What it might mean, and I have ______________.** It might be ______________. It could be ______________. Or it may be ______________.   **What I have been saying.** "______________." That is not one of the ______________. It is ______________ at once, decided, and it is why ______________.   **What I will say next time.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_might_ / _could_ / _may_ + the bare verb · _might have_ + participle for the past',
  'The _must_ with the reason nothing else explains it',
  'Two or three _mights_, genuinely different in size',
  'One line handing the choice to whoever can make it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three _mights_ only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about something at work you have been explaining with one word. The evidence, the one thing that must be true, the two or three things that might be, and the line that hands the choice over.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who could choose between the three**. ★ _The _must_ I cannot argue with._  ✓ _Two _mights_ that are the same size._  ? _Which of the three would cost you most if it were true?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many people have written a _might_ as a _must_ in something that was read by somebody else?** Most of the room. Then: how many were answered? Very few, and that is not a coincidence.'));
out.push(hw('Find one sentence of your own — a message, a report, a form, a letter — where you wrote a _might_ as a _must_. Rewrite it properly (50+ words), with the _must_, the _mights_ and the line handing the choice over.'));

// ======================= 9.3 =======================
out.push(pb());
out.push(h2('9.3  That can\'t be the reason'));
out.push(p('**Function:** saying what cannot be true   ·   **Grammar:** _can\'t be_ · _couldn\'t have been_   ·   **Pronunciation:** the weight on _can\'t_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher offers six explanations of the photograph, three of which are impossible. The class rules out the three and must say, each time, **what in the photograph** rules it out.'));
out.push(board('It can\'t have been the opening day — the sign is weathered.', 'can\'t be · couldn\'t have been'));
out.push(p('**b**  Rule it out. **1** _It was a winter morning._  **2** _They are all from the same office._  **3** _It was the day the building opened._  **4** _The car belongs to one of them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Jad rule out, and with what?   **A** the date, with the shadows   **B** the opening day, with the sign   **C** the chairs, with the men'));
out.push(p('**b**  Listen again. **1** What three things does he say cannot be true?   **2** What does Ms Huda say ruling out is worth?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.5  Three things it cannot be', [
  ['Jad', 'I have been doing this the wrong way round. I have been trying to work out what the photograph is. What is easier is working out what it cannot be.'],
  ['Ms Huda', 'Go on.'],
  ['Jad', 'Three things. It cannot have been the day the building opened, because the sign above the door is hand-painted and it has run — you can see it has been rained on for years. A building does not open with a weathered sign.'],
  ['Lubna', 'That is a good one.'],
  ['Jad', 'It cannot have been a formal event with important visitors, because ten men are in their shirtsleeves. You do not stand in front of a camera with important visitors with no jacket on, in 1963, in this country, ever. So either nobody important was there or the photograph was not the point of the day.'],
  ['Mazen', 'And the third?'],
  ['Jad', 'The chairs cannot have been for them. There are eleven chairs and eleven men and they are all standing up. If the chairs were for the men, somebody had just told them to stand up for a photograph — which is possible — or the chairs were for somebody who had not arrived. Either way, the chairs are not evidence of a speech. I made them evidence of a speech last week and they are not.'],
  ['Ms Huda', 'What is the value of those three sentences?'],
  ['Jad', 'They are the only sentences we have made in two weeks that cannot be wrong.'],
  ['Ms Huda', 'That is it exactly. A _must_ can be wrong, because there may be an explanation you have not thought of. A _can\'t_ cannot be wrong unless the evidence itself is wrong, and you can check the evidence. Ruling out is slower and uglier than guessing, and it is the only part of this that lasts.'],
  ['Omar', 'So we know almost nothing.'],
  ['Jad', 'We know three things for certain and about nine things not at all, and last week we thought we knew nine.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – ruling things out**',
  table(['you say', 'what it means'], [
    ['_That **can\'t be** the reason._', 'about now: impossible, given what I can see'],
    ['_It **can\'t have been** the opening day._', 'about then: _can\'t have_ + participle'],
    ['_It **couldn\'t have been** a formal event._', 'the same; slightly more formal'],
    ['_They **can\'t have been** waiting for the car._', 'then, and continuing at the time'],
  ], [2.4, 2.2]),
  '**_can\'t_ is the opposite of _must_, not of _can_.** _It must have been August_ and _it can\'t have been January_ are the same kind of sentence pointing in opposite directions. ⚠ ~~It mustn\'t have been January~~ — _mustn\'t_ is a prohibition and belongs to Unit 6.',
  '⚠ ~~It cannot be taken in winter.~~ → _can\'t **have been** taken_. ⚠ ~~It couldn\'t been~~ → _couldn\'t **have** been_.',
  '**A _can\'t_ needs the thing that rules it out, in the same sentence:** _it can\'t have been the opening day, **because the sign has been rained on for years**_. Without that clause it is a contradiction, not a deduction.',
  '**Why ruling out is worth more.** A _must_ can be wrong, because there may be an explanation you have not thought of. A _can\'t_ can only be wrong if the **evidence** is wrong — and evidence can be checked. Three _can\'ts_ are worth nine _musts_.',
  '**The useful move at work:** when you cannot work out what happened, stop and list what **cannot** have happened. It is slower, it feels less clever, and it is the only part that survives.',
  '**Useful phrases:** I have been doing this the wrong way round · a building does not open with a weathered sign · they are the only sentences we have made in two weeks that cannot be wrong · last week we thought we knew nine.',
  '**Practise:** Rule each one out and say what rules it out.  1 the men all work in the building  2 it was taken in the morning  3 the car is in the photograph on purpose  4 the sign was new  5 the photographer was a professional',
  '**Pronunciation.** 🔊 **Track 9.6** All the weight falls on **can\'t**, which is said long: _it **CAAN\'T** have been the opening day_. The _have_ disappears entirely: /kɑːntəv/. Listen to eight and write _must have_ or _can\'t have_; they are opposites and they sound almost the same at speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the explanation from the card. B rules it out with _can\'t have been_ **and** names the thing in the photograph that rules it out. If B cannot, they must say _I cannot rule that out_ — which is the right answer twice on each card. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'That can\'t have been it, because __________.'],
  ['A', 'And this one?'],
  ['B', 'I cannot rule that out. ______ it might still be true.'],
  ['A', 'So what do we have?'],
  ['B', '__________ ruled out and __________ still open.'],
]));
out.push(table(['Card A – the explanations', 'Card B – the explanations'], [
  ['It was the day the building opened.', 'It was taken in the morning.'],
  ['It was a formal event with important visitors.', 'They all worked in the building.'],
  ['The chairs were for the eleven men.', 'The car belongs to one of them.'],
  ['The man in the coat was the manager.', 'The sign was newly painted.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write what was ruled out and what the pair had to admit they could not rule out. The honest answer _I cannot rule that out_ should appear at least twice per card, and a pair that ruled out everything was guessing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take something that has gone wrong at your work and list three explanations that **cannot** be true, each with the thing that rules it out. Not what happened — what cannot have happened.'));
out.push(p('**b**  Swap. Then each of you say whether the three _can\'ts_ leave fewer explanations than you started with, and what is left.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad said he had been doing it the wrong way round: he has been trying to work out what the photograph is, and what is easier is working out what it cannot be. Three things. It cannot have been the day the building opened, because the sign above the door is hand-painted and has run — you can see it has been rained on for years, and a building does not open with a weathered sign. It cannot have been a formal event with important visitors, because ten men are in their shirtsleeves, and you do not stand in front of a camera with important visitors with no jacket on, so either nobody important was there or the photograph was not the point of the day. And the chairs cannot have been for them: there are eleven chairs and eleven men and all of them are standing. If the chairs were for the men, somebody had just told them to stand up — which is possible — or the chairs were for somebody who had not arrived; either way the chairs are not evidence of a speech, and he made them evidence of a speech last week. Ms Huda asked what those three sentences are worth, and he said they are the only sentences we have made in two weeks that cannot be wrong. She said that is it exactly: a must can be wrong because there may be an explanation you have not thought of, and a can\'t can only be wrong if the evidence is wrong, and evidence can be checked. Omar said so we know almost nothing, and Jad said we know three things for certain and about nine not at all — and last week we thought we knew nine._'));
out.push(p('**Listener task:** write one thing that cannot be true about somebody else\'s problem, and what rules it out.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Jad writes. Answer the questions.'));
out.push(model([
  '**WHAT THE PHOTOGRAPH CANNOT BE** · J. Attar · one page, and it is shorter than the others',
  'Everybody in that room has been writing what the photograph is. This is what it cannot be, and it is three sentences long, and I think it is worth more than my two pages from last week.',
  '**It cannot have been the day the building opened.** The hand-painted sign above the door has run and faded unevenly down its right-hand side, which is weathering and takes years. Nothing opens with a weathered sign.',
  '**It cannot have been a formal occasion.** Ten of the eleven are in shirtsleeves with their ties still on. A man takes his jacket off because of the heat and puts it back on for a photograph if the photograph matters. Ten men did not put their jackets back on, so either nothing in that half-hour mattered very much, or the photograph was an afterthought.',
  '**It cannot be true that the chairs show a speech.** There are eleven chairs, eleven men, and all eleven men are standing. A speech has somebody sitting down.',
  '**What I cannot rule out, and there are five.** That the men worked there. That the car is theirs. That the man in the coat was in charge. That it was taken by somebody who did this for a living. That 14/8 is the date and not a reference number.',
  '**Why the second list is the useful one.** Last week I had nine things I was sure of. This week I have three I am sure of and five I know I do not know, and the five are the ones I would have to find somebody alive to answer. I did not know I needed them, because last week they were not on any list.',
]));
out.push(item('1', 'What rules out the opening day?'));
out.push(item('2', 'How many things can he not rule out, and give two of them?'));
out.push(item('3', 'What does he say the second list is for?'));
out.push(writers([
  'A page of ruling out: **one line saying what everybody else is doing** → **two or three things it cannot be, each with its evidence as a separate section** → **a list of what you cannot rule out** → **and a paragraph on why the second list is the useful one**.',
  'Give each _can\'t_ a **heading of its own** and keep the section to two sentences. A ruling-out page is short by nature and should look short.',
  'Write the _cannot rule out_ list and **number it**. It is the list of questions you would need somebody to answer, and until it exists you do not know what you are missing.',
  '⚠ The last paragraph is the point: _last week I had nine things I was sure of; this week I have three, and five I know I do not know._ A shorter list of certainties and a longer list of questions is progress, and it does not feel like it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the ruling-out page for your own photograph or your own problem (50 words or more).'));
out.push(p('**______________** · ______________   **It cannot ______________.** ______________, which ______________. ______________.   **It cannot ______________.** ______________. ______________, so ______________.   **It cannot be true that ______________.** ______________.   **What I cannot rule out, and there are ______________.** That ______________. That ______________. That ______________.   **Why the second list is the useful one.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_can\'t be_ for now · _can\'t have been_ / _couldn\'t have been_ + participle for then',
  'Never _mustn\'t_ for an impossibility',
  'The thing that rules it out, in the same section',
  'A numbered list of what you cannot rule out',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I cannot rule out" list only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) — about the photograph, or about something at work that nobody has explained. Three things it cannot be, the list of what you cannot rule out, and what the second list is for.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has to find the answer**. ★ _The _can\'t_ that saves me a week._  ✓ _One _can\'t_ with nothing ruling it out._  ? _Who is alive who could answer item one on your second list?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the second lists.** Then one question: for how many of those items is there a person alive who knows the answer? Most of them, usually, and nobody has asked.'));
out.push(hw('Write three things that cannot be true about something unexplained at your work, with the evidence for each (50+ words), and then write the list of what you cannot rule out and the name of one person who could answer item one.'));

// ======================= 9.4 =======================
out.push(pb());
out.push(h2('9.4  One minute, on your own'));
out.push(p('**Function:** describing a photograph and speculating about it   ·   **Exam skill:** B1 Preliminary **Speaking Part 2**   ·   **Pronunciation:** filling a minute without stopping'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Everybody puts their photograph face down. Your teacher times **one minute** and one student talks about the photograph from the cupboard without stopping. Then the class says what the hardest part of the minute was. It is always the second half.'));
out.push(board('In the foreground I can see… · They look as if they\'ve been…', 'the Part 2 shape'));
out.push(p('**b**  Put these in order for a one-minute turn. **1** _what might have just happened_  **2** _where it is_  **3** _what the people are doing_  **4** _what I can see first_  **5** _how it makes me feel_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Ms Huda explains Speaking Part 2. What are the two halves of the minute?'));
out.push(p('**b**  Listen again. **1** How long is the candidate alone, and what do they get?   **2** What does Ms Huda say candidates do wrong in the second half?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.7  The minute nobody uses', [
  ['Ms Huda', 'In the examination there is a part where you are alone with a photograph for about a minute. Nobody asks you anything. You get the photograph, you are told what it is of — "a photograph of people working" — and then you talk.'],
  ['Omar', 'A whole minute?'],
  ['Ms Huda', 'About a minute, and it is long. Most candidates use thirty seconds and then look up, and the examiner has to say "anything else?", which is the worst sentence in the examination.'],
  ['Rasha', 'What do you put in it?'],
  ['Ms Huda', 'Two halves. The first half is what you can **see** — and that is the half everybody does, and they do it in twenty seconds because they list things. _There is a man. There is a chair. There is a car._ Nine objects, twenty seconds, nothing left to say.'],
  ['Lubna', 'And the second half?'],
  ['Ms Huda', 'The second half is everything this unit has been about. _They look as if they have been waiting a long time. It must be about midday. It might be a lunch break. It can\'t be a formal occasion, because nobody has a jacket on._ That is thirty-five seconds of speculation and it is the half that the marks are actually in, because it is the only half where you can show any grammar.'],
  ['Omar', 'So the photograph does not matter very much.'],
  ['Ms Huda', 'The photograph does not matter at all. You are not being tested on what is in it. You are being tested on whether you can keep going for a minute and whether you can say _must_, _might_ and _can\'t_ about something you cannot possibly know. Which is why we have spent three weeks on eleven men nobody can identify.'],
  ['Jad', 'And what if you run out?'],
  ['Ms Huda', 'You will not, if you learn the order. Foreground, background, people, clothes, what has just happened, what is about to happen, how it would feel to be there. Seven doors, and nobody has ever run out of all seven.'],
]));
out.push(sp());
out.push(box('Language box – B1 Preliminary Speaking Part 2', [
  '**What happens.** You are given one photograph and told what it shows. You speak **alone** for about one minute. Your partner does not speak and the examiner asks nothing. Then your partner gets a different photograph.',
  '**The order — seven doors, and you will not use all of them:**',
  table(['the door', 'what you say'], [
    ['**1  Foreground**', '_In the foreground I can see… · The first thing I notice is…_'],
    ['**2  Background**', '_Behind them there is… · In the background…_'],
    ['**3  People**', '_There are about eleven men… · Most of them are…_'],
    ['**4  Clothes and details**', '_They\'re wearing… · One of them has… in his pocket._'],
    ['**5  What has just happened**', '_They look as if they\'ve been waiting. · Somebody must have brought the chairs out._'],
    ['**6  What is about to happen**', '_They might be going to… · I don\'t think anybody is about to…_'],
    ['**7  Being there**', '_It must be very hot. · If I were there I\'d be looking for shade._'],
  ], [1.4, 3.2]),
  '**The marks are in doors 5, 6 and 7.** Doors 1 to 4 are a list and anybody can do them in twenty seconds. The speculation is where _must_, _might_, _can\'t_, _look as if_ and the second conditional all appear, and that is what is being marked.',
  '⚠ Do not stop to think of a word. Say the nearest thing you have and go on: _a kind of coat · something like a ruler · the thing you put papers in_. Stopping costs more than an imperfect word.',
  '⚠ Do not describe what is **not** there — _there is no woman, there are no trees_ — beyond one sentence. It is a door that leads nowhere.',
  '**Useful phrases:** the first thing I notice is · they look as if they\'ve been · somebody must have · it might be · it can\'t be, because · if I were there I\'d.',
  '**Pronunciation.** 🔊 **Track 9.8** Listen to the same photograph described twice — once in thirty seconds of listing, once in a full minute using the seven doors. Note where the second speaker **pauses**: between doors, never inside a sentence. A pause between doors sounds like thinking; a pause inside a sentence sounds like failing.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, with a watch. A talks for **one full minute** about their own photograph, using the seven doors in order. B says nothing at all, times it, and writes down which doors A used. Then swap.'));
out.push(dlg(null, [
  ['A', 'In the foreground I can see __________. The first thing I notice is __________.'],
  ['A', 'In the background there is __________.'],
  ['A', 'There are about __________. Most of them are __________.'],
  ['A', 'They\'re wearing __________, and one of them has __________.'],
  ['A', 'They look as if they\'ve been __________. Somebody must have __________.'],
  ['A', 'They might be going to __________, but it can\'t be __________, because __________.'],
  ['A', 'It must be __________. If I were there I\'d __________.'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two students perform, one minute each, standing up. **Listener task:** write the doors used and the exact second at which each speaker ran out, if they did. Then: how many used doors 5, 6 and 7? Those are the marks.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Swap photographs with somebody you have not worked with, so that you are talking about a picture you have never seen. One minute, seven doors, no preparation. Then swap back.'));
out.push(p('**b**  Then each of you say which was harder — your own photograph or a stranger\'s — and why. The answer surprises most people.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda explained the part of the examination where you are alone with a photograph for about a minute. You get the photograph, you are told what it is of, and then you talk; nobody asks you anything. Omar said a whole minute, and she said about a minute and it is long — most candidates use thirty seconds and then look up, and the examiner has to say "anything else?", which is the worst sentence in the examination. The minute has two halves. The first is what you can see, and everybody does that half in twenty seconds because they list things: there is a man, there is a chair, there is a car — nine objects, twenty seconds, nothing left. The second half is everything this unit has been about: they look as if they have been waiting a long time, it must be about midday, it might be a lunch break, it can\'t be a formal occasion because nobody has a jacket on. That is the half the marks are in, because it is the only half where you can show any grammar. Omar said so the photograph does not matter very much, and she said it does not matter at all — you are not being tested on what is in it, but on whether you can keep going for a minute and say must, might and can\'t about something you cannot possibly know, which is why we have spent three weeks on eleven men nobody can identify. And if you run out: foreground, background, people, clothes, what has just happened, what is about to happen, how it would feel to be there. Seven doors, and nobody has ever run out of all seven._'));
out.push(p('**Listener task:** write the door that nobody in your group used.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read one minute, written down. Answer the questions.'));
out.push(model([
  '**ONE MINUTE, WRITTEN OUT** · a Part 2 turn on the cupboard photograph · 58 seconds',
  '**[1]** In the foreground I can see a line of empty chairs on the pavement — about eleven of them, wooden, facing the camera. **[2]** Behind them there are eleven men standing in two rows, and behind the men there is a four-storey building with four rows of windows and a hand-painted sign above the door.',
  '**[3]** There are eleven men and they are all standing, quite close together, and all of them are squinting. **[4]** Ten of them are wearing white shirts and dark ties with no jackets, and the eleventh one, at the end of the back row, has a grey work coat on with something in the breast pocket — pens, possibly, or a folded paper.',
  '**[5]** They look as if they have been standing there for a while, because they have stopped arranging themselves. Somebody must have carried those chairs out of the building, because nobody keeps eleven chairs on a pavement. And it must be the middle of a summer day: the shadows are very short and straight down.',
  '**[6]** They might be going to sit down and listen to somebody, or they might be going straight back inside. I do not think it can be a formal occasion, because nobody has put a jacket back on for the photograph, and in 1963 you would.',
  '**[7]** It must be extremely hot. If I were standing in that row I would be thinking about getting out of the sun, and I think that is what the man on the left is thinking, because he is the only one not quite looking at the camera.',
]));
out.push(item('1', 'How many sentences are in the first half (doors 1–4) and how many in the second (5–7)?'));
out.push(item('2', 'What word does the speaker use instead of stopping, when they are not sure what is in the pocket?'));
out.push(item('3', 'Which door produces the last sentence, and what does it add?'));
out.push(writers([
  'A Part 2 turn on paper: **four short sentences for what you can see** → **three or four longer ones for what you have worked out** → **and one at the end about being there**.',
  'Put the **numbers of the doors in the margin** while you are learning it. Students who can see which door they are in do not run out; students who cannot, stop at twenty seconds.',
  'Hedge rather than stop: _pens, possibly, or a folded paper_. One hedge keeps the minute running; one silence ends it.',
  '⚠ Door 7 — _if I were there_ — is the one almost nobody uses, and it is free marks: it is the second conditional, it cannot be wrong, and it works on every photograph ever taken.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write out one minute about your own photograph, with the door numbers in the margin (50 words or more).'));
out.push(p('**[1]** In the foreground I can see ______________. **[2]** Behind ______________ there is ______________.   **[3]** There are ______________ and they are all ______________. **[4]** They are wearing ______________, and one of them ______________ — ______________, possibly, or ______________.   **[5]** They look as if they have ______________, because ______________. Somebody must have ______________, because ______________.   **[6]** They might be going to ______________, or they might ______________. I do not think it can be ______________, because ______________.   **[7]** It must be ______________. If I were there I would ______________, and I think that is what ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All seven doors, in order, with the numbers marked',
  'Four or five sentences in the second half, not one',
  'A hedge instead of a stop, at least once',
  'Door 7 used, with a second conditional in it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read door 7 only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write out a full minute (100 words or more) for a different photograph — your partner\'s, or one from a newspaper. Then read it aloud to yourself with a watch and write how long it took.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s minute as **the examiner**. ★ _The sentence with _must_ and the evidence in it._  ✓ _One place where you are still listing._  ? _Did you use door 7, and how long did it take altogether?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who got past fifty seconds?** Count. Then: of those who did, how many used doors 5, 6 and 7? All of them, necessarily — which is the only thing the class needs to understand about Part 2.'));
out.push(hw('Find a photograph you have never seen — a newspaper, a wall, a street — and talk about it out loud for one full minute, with a watch, alone, twice. Then write out the second attempt (50+ words) and mark the doors.'));

// ======================= 9.5 =======================
out.push(pb());
out.push(h2('9.5  Definitely, probably, possibly'));
out.push(p('**Function:** saying how certain you are   ·   **Grammar:** _definitely_ · _probably_ · _possibly_ · _I doubt it_   ·   **Pronunciation:** where the adverb goes and what it does'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher makes eight statements about the photograph. For each one the class holds up a number of fingers: **4** definitely · **3** probably · **2** possibly · **1** I doubt it · **0** certainly not. Then your teacher asks the ones where the room disagreed most.'));
out.push(board('It was definitely summer. The chairs were possibly for somebody else.', 'definitely · probably · possibly · I doubt it'));
out.push(p('**b**  Where does the adverb go? **1** _It ___ was summer._  **2** _It was ___ summer._  **3** _They ___ worked there._  **4** _They have ___ gone._  **5** _It ___ wasn\'t summer._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do they build?   **A** a list of names   **B** a scale of five from the photograph   **C** a letter to the textile company'));
out.push(p('**b**  Listen again. **1** Which statement does the room disagree about most?   **2** What does Fares mention in passing, and what did he find out?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.9  Four fingers and one', [
  ['Ms Huda', 'Eight statements, and show me a number. "It was taken in summer."'],
  ['Lubna', 'Four. Definitely. Two independent reasons and no reason against.'],
  ['Ms Huda', '"The man in the coat worked in the building."'],
  ['Mazen', 'Three. Probably. It is the only explanation I have, and I can think of two others I cannot rule out — he could have been a driver, or he could have come from the building next door.'],
  ['Ms Huda', '"Somebody was going to make a speech."'],
  ['Jad', 'Two. Possibly. The chairs are the only thing pointing at it and I have already ruled out the chairs as evidence.'],
  ['Ms Huda', '"It was the day the building opened."'],
  ['Jad', 'One, and I would say I doubt it rather than certainly not, because I am relying on a sign I have only seen in a photograph.'],
  ['Ms Huda', 'That is the sentence of the evening. Say why.'],
  ['Jad', 'Because "certainly not" would mean the sign settles it, and all I actually have is a sign that **looks** weathered in a photograph I am holding sixty years later. I doubt it is honest. Certainly not is one step further than my evidence goes.'],
  ['Fares', 'Can I say one thing that is not about the photograph? I did the day in June. Six hours, twelve people, and two of them in a pharmacy in Mezzeh, because she said yes to the two hours.'],
  ['Rasha', 'And?'],
  ['Fares', 'And the four seconds after a pharmacist says "not today" — I could not explain it indoors in eleven years and I explained it in a doorway in about forty seconds. She has asked me about September.'],
  ['Ms Huda', '"Asked you about September" — four fingers or three?'],
  ['Fares', '…Two. She asked a question in a car park. I am not going to make that a four.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the scale, and where the word goes**',
  table(['you say', 'how sure'], [
    ['_It **definitely** was summer._ / _It was **definitely** summer._', '4 — no reason against it'],
    ['_He **probably** worked there._', '3 — the best explanation I have'],
    ['_Somebody was **possibly** going to speak._', '2 — one of several, and not the best'],
    ['_**I doubt it.** / It\'s **unlikely**._', '1 — I have a reason against it'],
  ], [2.6, 2.0]),
  '**Position:** these adverbs go **before** a one-word verb and **after** _be_ and after the first auxiliary. _He **probably** worked there_ · _It was **probably** summer_ · _They have **probably** gone_. ⚠ ~~He worked probably there.~~',
  '⚠ _definitely_ is spelt with an **i** in the middle: defin**i**tely. It is the most commonly misspelt word in B1 writing.',
  '**_I doubt it_ against _certainly not_.** _Certainly not_ claims that your evidence settles the matter. _I doubt it_ claims that your evidence leans one way. If your evidence is a photograph, a memory or one person\'s account, _I doubt it_ is the honest word — and it is the one almost nobody reaches for.',
  '**The adverbs pair with the modals:** _must_ ≈ definitely · _might_ ≈ possibly · _can\'t_ ≈ certainly not. The adverb version is softer and is what people actually say; the modal version is what gets written.',
  '⚠ ~~Maybe definitely~~ · ~~probably must~~ — do not stack them. One marker a sentence.',
  '**Useful phrases:** four fingers or three? · it is the only explanation I have, and I can think of two others I cannot rule out · "certainly not" is one step further than my evidence goes · she asked a question in a car park; I am not going to make that a four.',
  '**Practise:** Give each one a number and justify it.  1 the men worked in the building  2 the chairs came from inside  3 the photograph was taken by a professional  4 14/8 is a date  5 one of the men is still alive',
  '**Pronunciation.** 🔊 **Track 9.10** The adverb takes a **light** stress and the sentence carries on over it: _he **prob**ably worked there_. Stress it hard and you contradict somebody. _I doubt it_ is said on a falling tone with the weight on **doubt**. Listen to eight and write the number from 4 to 0.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the statement from the card. B gives it a number from 4 to 0, in words, and justifies it. A then tries to move it one step and B either accepts or refuses. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________ — I would say __________, because __________.'],
  ['A', 'Not a __________?'],
  ['B', '__________, because __________.'],
]));
out.push(table(['Card A – the statements', 'Card B – the statements'], [
  ['The men worked in the building.', 'The chairs came from inside.'],
  ['It was taken by a professional photographer.', '14/8 is a date.'],
  ['One of those eleven men is still alive.', 'The car belongs to one of them.'],
  ['Somebody in this building knows who they are.', 'The sign is the textile company\'s name.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the number for each statement. Then find the one where the two pairs most disagreed — and ask both pairs what evidence they are using. It is nearly always the same evidence, weighed differently.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Make four statements about something uncertain in your own work and give each one a number, with the reason. One of them must be a 1 — something you doubt and cannot rule out.'));
out.push(p('**b**  Swap. Then each of you find one statement the other has made a 4 that should be a 3.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda made eight statements and we held up numbers. "It was taken in summer" — Lubna said four, definitely, two independent reasons and nothing against. "The man in the coat worked in the building" — Mazen said three, probably: it is the only explanation he has and he can think of two others he cannot rule out, because the man could have been a driver or could have come from the building next door. "Somebody was going to make a speech" — Jad said two, possibly, because the chairs are the only thing pointing at it and he has already ruled out the chairs as evidence. "It was the day the building opened" — Jad said one, and said he would say "I doubt it" rather than "certainly not", because he is relying on a sign he has only seen in a photograph. Ms Huda said that is the sentence of the evening, and he explained: "certainly not" would mean the sign settles it, and all he has is a sign that looks weathered in a photograph he is holding sixty years later. I doubt it is honest; certainly not is one step further than his evidence goes. Then Fares said one thing that was not about the photograph: he did the day in June — six hours, twelve people, and two of the hours in a pharmacy in Mezzeh, because she said yes to the two hours. The four seconds after a pharmacist says "not today", which he could not explain indoors in eleven years, he explained in a doorway in about forty seconds. She has asked him about September. Ms Huda asked whether that was four fingers or three, and he said two: she asked a question in a car park, and he is not going to make that a four._'));
out.push(p('**Listener task:** write the 4 that somebody agreed to bring down to a 3.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note on the back of the photograph file. Answer the questions.'));
out.push(model([
  '**WHAT WE THINK, AND HOW SURE** · Room 14 · for whoever opens this cupboard next',
  '**Definitely.** The photograph was taken in high summer, within an hour of midday. The shadows are nearly vertical and shorter than a shoe, every man is squinting, and the pencil note on the back reads 14/8. Two independent reasons.',
  '**Definitely.** It was taken outside this building. Four storeys, four rows of windows, doors that are too narrow and open outwards.',
  '**Probably.** The man in the grey coat worked here and the other ten did not. He is the only one not dressed for a photograph. We cannot rule out that he was a driver, or that he came out of the building next door.',
  '**Possibly.** The eleven chairs were put out for a meeting of some kind. They came out of a building — nobody keeps chairs on a pavement — but nothing in the photograph says who they were for, and all eleven men are standing.',
  '**I doubt it.** That it was the day the building opened. The sign above the door looks weathered. We are relying on a sign in a photograph, so we will not say "certainly not".',
  '**We do not know at all, and these are the questions.** Who they are. Whether the car is theirs. Whether 14/8 is a date or a reference. Who took it. Whether anybody in it is alive.',
  '**One note on method.** We began with nine things we were sure of and we have ended with two. The other seven moved down, and nothing moved up. That is what three weeks of looking at one photograph does, and we think it is the right direction.',
]));
out.push(item('1', 'How many things are in the "definitely" section, and what makes the first one definite?'));
out.push(item('2', 'Why will they not say "certainly not" about the opening day?'));
out.push(item('3', 'What does the note on method say happened to the nine?'));
out.push(writers([
  'A page sorted by certainty: **sections headed _definitely_, _probably_, _possibly_, _I doubt it_** → **a section of what you do not know, written as questions** → **and one note on method saying which way things moved**.',
  'Put the **reason** in every section, in the same sentence, and say when two reasons are **independent**. That is the only thing that earns a _definitely_.',
  'Write the _we do not know_ section as **questions**, not as statements. A question has a person who could answer it; a statement of ignorance has nobody.',
  '⚠ The note on method is the part a stranger will read first in ten years. _We began with nine things we were sure of and we have ended with two, and nothing moved up._ Say which direction your certainty moved; it is the only way anybody can judge the rest.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the sorted page about something uncertain in your own work (50 words or more).'));
out.push(p('**______________** · ______________   **Definitely.** ______________. ______________, ______________, and ______________. ______________ independent reasons.   **Probably.** ______________. ______________ is the only ______________. We cannot rule out that ______________.   **Possibly.** ______________. ______________, but nothing ______________.   **I doubt it.** That ______________. ______________. We are relying on ______________, so we will not say "certainly not".   **We do not know at all, and these are the questions.** ______________. ______________. ______________.   **One note on method.** We began with ______________ and we have ended with ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The adverb in the right place — before a one-word verb, after _be_',
  '_definitely_ spelt with the middle **i**',
  'A reason in every section, and _independent_ said when it is true',
  '_I doubt it_ rather than _certainly not_ unless the evidence settles it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "I doubt it" section only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full sorted page (100 words or more) about something nobody at your work has settled. Then write underneath which way your own certainty has moved while you were writing it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who will act on it**. ★ _The _definitely_ with two independent reasons._  ✓ _One _definitely_ that is a _probably_._  ? _Which of your questions has somebody alive who could answer it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which way did everybody\'s certainty move?** Down, almost without exception. Say the one sentence that matters and then stop: an honest page has fewer certainties at the end than at the beginning, and that is not a failure of the page.'));
out.push(hw('Sort what you think about one unsettled thing at your work into the four levels, with reasons (50+ words), and write the questions you cannot answer. Then name one person who could answer the first question.'));

// ======================= 9.6 =======================
out.push(pb());
out.push(h2('9.6  Describing a scene on paper'));
out.push(p('**Function:** writing a description of a scene   ·   **Grammar:** the long turn, written   ·   **Pronunciation:** reading a description aloud at the right speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads a description of a room nobody has seen. The class draws it, badly, in two minutes. Then everybody holds up their drawing and the class finds out which sentence in the description nobody could use.'));
out.push(board('From the door: the window on the left, the bench along the back.', 'position before detail'));
out.push(p('**b**  Which of these can a reader actually use? **1** _It is a nice room._  **2** _The window is on the left as you come in._  **3** _It is quite big._  **4** _There are two tables, end to end, along the back wall._  **5** _It feels old._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Rasha describing, and who for?   **A** a ward, for an agency nurse   **B** a photograph, for the class   **C** her flat, for her mother'));
out.push(p('**b**  Listen again. **1** What does she say she has to describe first?   **2** What does Lubna say about the order she uses?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.11  Describing a place somebody has to work in', [
  ['Rasha', 'I have to write a description of the ward for agency staff, because they arrive at nine at night and there is nobody to show them anything.'],
  ['Ms Huda', 'Where do you start?'],
  ['Rasha', 'I thought I would start at bay one and work round. Then I tried it on my sister and she could not find anything.'],
  ['Lubna', 'Start where they will be standing.'],
  ['Rasha', 'That is what I did in the end. "You come in through the double doors from the lift. The station is directly ahead of you, about four metres. Bays one to three are on your left, bays four and five on your right, and bay five is the one you cannot see from the station."'],
  ['Lubna', 'That is the right order and it is the order architects use. Position before detail, and always from the position of the person who is in it. A plan is useless to somebody standing in a doorway; what they need is left, right, ahead.'],
  ['Jad', 'And the bay you cannot see.'],
  ['Rasha', 'The bay you cannot see is in the second sentence, because it is the only sentence in the whole page that will save anybody anything. Everything else they would find out in twenty minutes.'],
  ['Ms Huda', 'So the rule is not "describe everything in order".'],
  ['Rasha', 'The rule is: left, right, ahead — and then the thing that will cost them something if nobody tells them. On my ward there are three of those: bay five, the bell in bay four that rings in a cupboard, and the fact that the trolley has no board, so you cannot sign at the bed.'],
  ['Ms Huda', 'And how long is the whole page?'],
  ['Rasha', 'Eleven lines. It was two pages when I started. The two pages were me describing a ward I know very well, and the eleven lines are what somebody needs at nine o\'clock at night.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing a place in writing**',
  table(['do this', 'not this'], [
    ['_The station is directly ahead, about four metres._', '~~The ward is quite large.~~'],
    ['_Bays one to three on your left._', '~~There are five bays.~~'],
    ['_Bay five is the one you cannot see from the station._', '~~Bay five is at the far end.~~'],
    ['_The bell in bay four rings in a cupboard._', '~~The call system is old.~~'],
  ], [2.5, 2.1]),
  '**Position before detail, and always from where the reader will be standing.** _As you come in · directly ahead · on your left · behind you._ A reader in a doorway cannot use a plan and cannot use an adjective.',
  '**Then the thing that costs something.** Every place has two or three facts that a newcomer will not discover in twenty minutes and will pay for: the bay you cannot see, the bell that rings in a cupboard, the switch in the next room. Those belong in the **second** sentence, not the last.',
  '**Give distances and numbers:** _about four metres · two tables end to end · eleven chairs_. ⚠ ~~quite big · not very far · a few_ — a reader can do nothing with any of them.',
  '⚠ Leave out how you feel about the place. _It feels old_ is true and useless. If the age matters, say what it does: _the casements are 1962 and three of the four handles do not engage_.',
  '**Length:** shorter than you think. Eleven lines of what somebody needs beats two pages of what you know.',
  '**Useful phrases:** start where they will be standing · position before detail · the bay you cannot see from the station · the two pages were me describing a ward I know very well.',
  '**Practise:** Describe each one in four sentences, from the doorway, with one thing that costs something.  1 the room you are in now  2 your own workplace  3 a shop you know  4 a kitchen  5 a stairwell',
  '**Pronunciation.** 🔊 **Track 9.12** Read a description aloud **slowly, with the positions stressed**: _the station is **directly ahead** ‖ bays one to three on your **left**._ The stress goes on the direction, not on the noun. Listen to one description read twice and say which you could follow with your eyes shut.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A describes the place on the card from the doorway, in four sentences, including one thing that costs something. B draws it. Then B turns round and they compare. Swap cards.'));
out.push(dlg(null, [
  ['A', 'You come in through __________. __________ is directly ahead, about __________.'],
  ['A', '__________ on your left, __________ on your right.'],
  ['A', 'The thing nobody tells you is __________.'],
  ['B', 'So if I am standing in the door, __________?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – the places', 'Card B – the places'], [
  ['the room you are in now', 'a counter or shop you know well'],
  ['your own workplace, from the entrance', 'a stairwell or entrance hall'],
  ['a kitchen you know', 'a vehicle, from the driver\'s seat'],
  ['a classroom, from the door', 'a waiting area'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform and the class draws. **Listener task:** write the one thing that costs something for each place. Then: how many of the drawings had the right thing in the right place? The count is a measure of the description and not of the drawing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe the place you work, in writing, in no more than eight lines, from the doorway. Then read it to your partner and let them ask three questions.'));
out.push(p('**b**  Swap. Then each of you say which of the three questions should have been answered in your eight lines.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has to write a description of the ward for agency staff, because they arrive at nine at night and there is nobody to show them anything. She thought she would start at bay one and work round, and then she tried it on her sister, who could not find anything. Lubna said start where they will be standing, and that is what Rasha did: you come in through the double doors from the lift, the station is directly ahead of you about four metres, bays one to three are on your left, bays four and five on your right, and bay five is the one you cannot see from the station. Lubna said that is the order architects use — position before detail, always from the position of the person who is in it, because a plan is useless to somebody standing in a doorway and what they need is left, right, ahead. Rasha said the bay you cannot see is in the second sentence, because it is the only sentence on the page that will save anybody anything; everything else they would find out in twenty minutes. So the rule is not "describe everything in order" — it is left, right, ahead, and then the thing that will cost them something if nobody tells them. On her ward there are three of those: bay five, the bell in bay four that rings in a cupboard, and the trolley with no board, so you cannot sign at the bed. The whole page is eleven lines, and it was two pages when she started: the two pages were her describing a ward she knows very well, and the eleven lines are what somebody needs at nine o\'clock at night._'));
out.push(p('**Listener task:** write the thing that would cost somebody something in a place you have never been.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rasha pins inside the ward door. Answer the questions.'));
out.push(model([
  '**WARD 4 · IF YOU HAVE NOT BEEN HERE BEFORE** · eleven lines · pinned inside the double doors',
  'You come in through these doors from the lift. The nurses\' station is directly ahead, about four metres, with the drug cupboard behind it on the right.',
  'Bays one to three are on your left. Bays four and five are on your right. **Bay five cannot be seen from the station.** There is no mirror and no camera, so bay five has to be walked to, and on a quiet night that is the only reason anybody walks down there.',
  'The bell in bay four rings in the old station position, which has been a cupboard since 2004. From the station it sounds like a bell in the corridor and not like a bell in a bay. If you hear a bell and cannot place it, it is bay four.',
  'The medication trolley has no writing surface. There is nowhere to sign at the bed, which is where you are supposed to sign. Nobody has solved this and I have asked. Until there is a board, carry a clipboard; mine is behind the station door and you may use it.',
  'The linen is two floors down, not on this floor, whatever the sign by the lift says. The sign is wrong and has been wrong for years.',
  'If something is not where this page says it is, write it on the bottom of this page. Four people have, and all four were right.',
]));
out.push(item('1', 'How many things does the page say will cost a newcomer something?'));
out.push(item('2', 'What does she tell them to do about the trolley?'));
out.push(item('3', 'What is the last line for, and has it worked?'));
out.push(writers([
  'A description for somebody who has to use the place: **where they are standing, and what is ahead** → **left and right** → **the two or three things that will cost them something, in bold** → **a workaround for each where you have one** → **and a last line inviting corrections**.',
  'Say when a sign is **wrong**. _The linen is two floors down, whatever the sign by the lift says._ That is the single most useful kind of sentence in any description of a real place and nobody ever writes it.',
  'Give the **workaround**, not only the problem: _until there is a board, carry a clipboard; mine is behind the station door and you may use it._',
  '⚠ End with an invitation to correct the page, and say how many people have. _Four people have, and all four were right._ A page that can be corrected is a page people read.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page for somebody arriving at your workplace for the first time, alone (50 words or more).'));
out.push(p('**______________ · IF YOU HAVE NOT BEEN HERE BEFORE** · ______________ lines   You come in through ______________. ______________ is directly ahead, about ______________.   ______________ on your left. ______________ on your right. **______________.** ______________, so ______________.   ______________. From ______________ it ______________. If you ______________, it is ______________.   ______________ has no ______________. ______________. Until there is ______________, ______________.   ______________ is ______________, whatever ______________ says.   If something is not where this page says it is, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'From the doorway: ahead, left, right — before any detail',
  'Distances and numbers, not _quite big_ or _not far_',
  'The two or three things that cost something, marked',
  'A workaround for each, and an invitation to correct the page',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "the thing nobody tells you" sentences only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) for the place you know best, for somebody arriving alone at the worst hour. Then write underneath how long your first version was.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody arriving alone at nine at night**. ★ _The line that saves me twenty minutes._  ✓ _One adjective I can do nothing with._  ? _Where do I sign, and is there anywhere to write?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How long was everybody\'s first version, and how long is this one?** Collect both numbers. Then: is anybody going to pin theirs up? Two or three, and they are the only pages in this unit that will be read by a stranger.'));
out.push(hw('Pin your page where somebody arriving would see it, or give it to the next person who arrives. Write down what they said, or what they wrote on the bottom of it (50+ words).'));

// ======================= 9.7 =======================
out.push(pb());
out.push(h2('9.7  Review & Mediate: What do you think is happening?'));
out.push(p('**Function:** saying what you think is happening, with evidence   ·   **Recycling:** Units 1–9   ·   **Exam practice:** B1 Preliminary Reading Part 6, Writing Part 1, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It must be taken in August.  **2** He must to be the manager.  **3** It mustn\'t have been January.  **4** It might to be pens.  **5** It couldn\'t been a formal event.  **6** He worked probably there.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the second photograph, which Ms Huda brings in the following week.'));
out.push(photo('PHOTOGRAPH TWO · from the same cupboard', [
  '_Again, written down rather than printed._',
  'The same pavement and the same building, from almost the same place. The shadows are long and fall to the left.',
  'Four men, not eleven. Three of them are in overcoats. The fourth, on the right, is in a grey work coat with something in the breast pocket, and he is the only one of the four who appears in the first photograph.',
  'The hand-painted sign above the door has gone. In its place there is a metal plate with raised letters, of which two words can be read: the second is **TEXTILE**.',
  'Two of the eleven chairs are visible, stacked, just inside the open doorway.',
  'A different car, fully in frame, with a number plate that can be read but means nothing.',
  'On the back, in the same pencil and the same hand: _2/2_ — and underneath, in a different hand, in ink: three words that have been crossed out so heavily that nothing can be read.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. The class compares the two photographs. What can now be said that could not be said before, and what has become less certain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.13  Two photographs and three words', [
  ['Lubna', 'The second one is in winter. Long shadows falling to the left, three overcoats. And 2/2 on the back in the same pencil and the same hand.'],
  ['Jad', 'So the same person wrote both, and took both, probably. That is new.'],
  ['Mazen', 'And the man in the coat is in both. He is the only one in both. That moves him from probably working there to definitely working there — two photographs, months apart, same man, same coat, same pocket.'],
  ['Ms Huda', 'Which direction has that moved?'],
  ['Mazen', 'Up. The first thing in three weeks that has moved up.'],
  ['Lubna', 'And something has moved down. The hand-painted sign has been replaced by a metal plate. If the painted sign was weathered in August and there is a new metal plate by February, then the building was being done up — which means the painted sign might have been weathered and old and the building might still have been new to **them**. Jad ruled out the opening day on a weathered sign.'],
  ['Jad', '…Yes. My can\'t becomes a doubt it. The sign rules out the opening of the **building**; it does not rule out the opening of the **company\'s** time in it.'],
  ['Ms Huda', 'That is the most valuable sentence anybody has said in this unit, and I want everybody to see what happened. Jad did not make a mistake. He drew a correct conclusion from the evidence he had, and a new piece of evidence changed what the old piece meant.'],
  ['Rasha', 'And the three crossed-out words?'],
  ['Jad', 'Somebody wrote something on the back of a photograph in ink and then crossed it out so hard that the paper has gone furry. That is not a mistake being corrected. Nobody scratches out a wrong date eleven times.'],
  ['Omar', 'So what do we say about it?'],
  ['Jad', 'We say: three words in ink, crossed out heavily, unreadable. And nothing else, because that is all there is. I could write you a page about those three words and every line of it would be about me.'],
]));
out.push(sp());
out.push(box('Language box – saying what you think is happening, with evidence', [
  'Give the **evidence first and the conclusion second**, every time: _long shadows falling to the left and three overcoats, so it must be winter._ The other order invites your listener to argue with the conclusion before they have heard the reason.',
  'Say which way each conclusion has **moved** and why: _that moves him from probably to definitely — two photographs, months apart, same man._ A piece of evidence that moves something up is rare and should be named.',
  'When new evidence arrives, be ready to move a _can\'t_ back to an _I doubt it_. That is not being wrong: a correct conclusion from the evidence you had can be changed by evidence you did not have.',
  'Distinguish what the evidence rules out from what it **nearly** rules out: _the sign rules out the opening of the building; it does not rule out the opening of the company\'s time in it._',
  'And refuse to speculate where there is nothing: _three words in ink, crossed out heavily, unreadable — and nothing else._ The sentence _I could write you a page and every line of it would be about me_ is the end of the unit.',
  '**Useful phrases:** that is the first thing in three weeks that has moved up · my can\'t becomes a doubt it · he drew a correct conclusion and a new piece of evidence changed what the old piece meant · nobody scratches out a wrong date eleven times.',
  '**Pronunciation.** 🔊 **Track 9.14** Evidence first, conclusion second, with a **pause** before the conclusion and a fall on it: _long shadows, three overcoats ‖ so it must be winter. ↘_ Listen to four pairs said both ways round and say which one you believe.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the scenes below and does **not** show it. A describes it, then says what must, might and cannot be true, with the evidence before each conclusion. B and C must each name one thing that has moved **up** and one thing A cannot know. Change roles with the other scene.'));
out.push(table(['Scene A – a counter at closing time', 'Scene B – a classroom after a test'], [
  ['The shutter is half down and the light inside is on.', 'Thirty-one chairs, two of them turned to face the wall.'],
  ['Three telephones on the bench, two with their backs off.', 'One paper on the floor by the door, face down.'],
  ['A chair wedged with a folded card under one leg.', 'The window at the back open four centimetres in January.'],
  ['The till drawer open and empty.', 'A register on the desk, open, with one line in a different pen.'],
  ['A coat on a hook and a bag under the bench.', 'Two sets of gloves on a desk at the back.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write one conclusion that moved up and one thing the speaker cannot know. In Scene A the chair and the folded card move the sloping floor up to a definitely; in Scene B the gloves and the open window do the same for the cold, and in both scenes nobody can know **why** anything was left.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a place you can see right now, or your own photograph, and do the whole thing for your partner: what you can see, what must be true with the evidence, what might be, what cannot, and what you refuse to speculate about. They must ask: _what makes you say that?_, _has anything moved up?_ and _what are you refusing to guess?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner concluded and what you decided:  _Lubna did the second photograph. Long shadows to the left and three overcoats, so it is winter, and 2/2 on the back in the same pencil and the same hand — so the same person wrote both and probably took both, which is new. Mazen said the man in the grey coat is in both and is the only one in both, which moves him from probably working there to definitely: two photographs, months apart, same man, same coat, same pocket. That is the first thing in three weeks that has moved up. And something has moved down. The painted sign has been replaced by a metal plate, so the building was being done up between August and February — which means the painted sign might have been old while the building was still new to the company. Jad had ruled out the opening day on the strength of that weathered sign, and he said his can\'t becomes a doubt it: the sign rules out the opening of the building and not the opening of the company\'s time in it. Ms Huda said he did not make a mistake — he drew a correct conclusion from the evidence he had, and a new piece of evidence changed what the old piece meant. And about the three words crossed out in ink, Jad said we say three words in ink, crossed out heavily, unreadable, and nothing else, because he could write a page about them and every line of it would be about him. So I decided to go back to the thing at my own work that I have been explaining for two years and ask what one new piece of evidence would do to it._'));
out.push(p('**Listener task:** what moved up, what moved down, and what did they refuse to guess?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 6)', 7));
out.push(p('Read the text and write **one** word for each gap. Write only one word.'));
out.push(model([
  '**TWO PHOTOGRAPHS IN A CUPBOARD**',
  'A language centre in Damascus occupies a building that **(1)** ______ put up in 1962 as the offices of a textile company. In April a teacher found two photographs at the bottom of a cupboard in one of the upstairs rooms.',
  'The first shows eleven men on the pavement in high summer; the shadows are nearly vertical and there is a pencil note on the back **(2)** ______ reads 14/8. The second, taken from almost the same place, shows four men in winter, three of them in overcoats, with 2/2 on the back in the same hand.',
  'One man appears in both. He is the only one who does, and he is wearing a grey work coat in each, **(3)** ______ means that he almost certainly worked in the building rather than visiting it.',
  'The class that studied them spent three weeks and ended **(4)** ______ fewer certainties than it began with. Nine confident statements became two, and only one conclusion moved in the other direction. Their own note on method says that this is the right direction to move **(5)** ______ , although nobody enjoyed it.',
  'On the back of the second photograph, under the date, three words have been written in ink and then crossed out so heavily **(6)** ______ the paper has been damaged. Nobody has any idea what they said.',
]));
[
  '**1**  _a building that ___ put up in 1962_',
  '**2**  _a pencil note on the back ___ reads 14/8_',
  '**3**  _a grey work coat in each, ___ means that he almost certainly worked there_',
  '**4**  _ended ___ fewer certainties than it began with_',
  '**5**  _this is the right direction to move ____',
  '**6**  _crossed out so heavily ___ the paper has been damaged_',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message saying what you think is happening, with the evidence (50 words or more).'));
out.push(p('What I can see is ______________, ______________ and ______________.   ______________ and ______________, so it must ______________. ______________, so ______________ must have ______________.   It might ______________, or it could ______________. Nothing ______________ chooses between them.   It cannot ______________, because ______________.   One thing has moved up: ______________, because ______________. And one thing has moved down: ______________.   What I am not going to guess: ______________. I could write a page about it and every line would be ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Evidence first, conclusion second, every time',
  '_must_ / _might_ / _can\'t_ + the right form for now and then',
  'One thing that has moved up and one that has moved down',
  'One thing you refuse to guess about',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"I found two old photographs in my grandmother\'s house and nobody left alive knows anything about them. I\'ve been staring at them for a week and inventing things. How do you stop inventing? Sam"_',
  '**Your notes:**  •  _Tell him to separate what he can see from what he has worked out_  ·  _Explain why "it can\'t be" is worth more than "it must be"_  ·  _Tell him what two photographs can do that one cannot_  ·  _Warn him about one thing_',
  'Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The shadows are short. It ___ the middle of the day.   a) must be   b) must have been   c) must to be',
  '2  It ___ in August — there is a pencil note saying 14/8.   a) must take   b) must have been taken   c) must been taken',
  '3  There is something in his pocket. It ___ pens.   a) might be   b) might to be   c) might been',
  '4  It ___ the opening day — the sign is weathered.   a) mustn\'t have been   b) can\'t have been   c) couldn\'t been',
  '5  Somebody ___ going to speak to them.   a) might have been   b) might has been   c) must to be',
  '6  He ___ worked there — he is in both photographs.   a) probably   b) worked probably   c) probably has',
  '7  I ___ it was the opening day, but I cannot rule it out.   a) certainly not   b) doubt   c) possibly',
  '8  It is spelt ___ .   a) definately   b) definitely   c) definatly',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 1 style – three options).** 🔊 **Track 9.15** You will hear seven short extracts. For each one, choose **A**, **B** or **C**.'));
[
  '**1**  What is the speaker sure about?   **A** the time of year   **B** who the men are   **C** who took the photograph',
  '**2**  What does the speaker take back?   **A** the date   **B** the pens   **C** the building',
  '**3**  What does the speaker rule out, and with what?   **A** the opening day, with the sign   **B** the summer, with the shadows   **C** the chairs, with the men',
  '**4**  Which part of the examination is being described?   **A** a conversation with the examiner   **B** one minute alone with a photograph   **C** a discussion with a partner',
  '**5**  How certain is the speaker?   **A** definitely   **B** probably   **C** I doubt it',
  '**6**  What does the speaker say should come second on the page?   **A** the distances   **B** the thing that will cost somebody something   **C** how the place feels',
  '**7**  What has changed?   **A** one conclusion has moved up   **B** everything has been ruled out   **C** nothing at all',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(dlg('Track 9.15  Audio script (read after the check)', [
  ['1  Woman', 'The shadows fall almost straight down and they are shorter than a shoe, and every one of them is squinting, and there is a pencil note on the back that says fourteen stroke eight. Two independent reasons. It was high summer, about midday, and I would put four fingers on that.'],
  ['2  Man', 'I said there must be pens in that pocket. What is actually true is that there is something in the pocket about the size of pens. It might be pens. It could be a folded paper. It may be a spectacle case.'],
  ['3  Man', 'It cannot have been the day the building opened. The sign above that door is hand-painted and it has run and faded down one side, and that is weathering, and weathering takes years. Nothing opens with a weathered sign.'],
  ['4  Woman', 'You are given one photograph and told what it shows, and then you talk for about a minute. Nobody asks you anything and your partner says nothing. Most candidates use thirty seconds and then look up.'],
  ['5  Man', 'It is the only explanation I have, and I can think of two others I cannot rule out — he could have been a driver, or he could have come out of the building next door. So: probably. Three, not four.'],
  ['6  Woman', 'Left, right, ahead — and then, in the second sentence, the thing that will cost them something if nobody tells them. On my ward that is the bay you cannot see from the station. Everything else they would find out in twenty minutes anyway.'],
  ['7  Man', 'He is in both of them, months apart, the same coat and the same pocket, and he is the only one who is in both. That moves him from probably working there to definitely. It is the first thing in three weeks that has gone up instead of down.'],
]));
out.push(p('**C  Writing.** Write a description of a scene for somebody who cannot see it (100+ words): position before detail from the doorway, the two or three things that would cost a newcomer something, what must and might and cannot be true about it, and one thing you refuse to guess.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 9)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _must be_ and _must have been_ for a conclusion, with the evidence in the same sentence',
  '☐ use _might_, _could_ and _may_ for one of several explanations, and say that there are several',
  '☐ rule something out with _can\'t have been_, and say what rules it out',
  '☐ talk for one full minute about a photograph, using the seven doors',
  '☐ grade my certainty: definitely · probably · possibly · I doubt it',
  '☐ say _I doubt it_ instead of _certainly not_ when my evidence will not carry it',
  '☐ describe a place from the doorway, position before detail, with the thing that costs something',
  '☐ say when a conclusion has moved up or down, and refuse to guess where there is nothing',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 10 – REPORTING WHAT PEOPLE SAID', [
  'For nine units you have been doing a thing this course has never explained. Every **4R Report** stage in this book — all sixty-three of them — is reported speech, and nobody has taught you the rules. Unit 10 teaches them: _she said she had already written it · he asked whether the trolley was back · she told me to put it in writing._',
  'Before the next lesson: go back to **any** report you wrote in this book and copy out three sentences of it. Bring them. Unit 10 opens on your own sixty-three reports, and 10.5 asks the question the whole unit turns on: **what was said, and what was meant?**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 9 · Student\'s Book');
