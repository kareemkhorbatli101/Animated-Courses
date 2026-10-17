// Proactive English B2 · Syria Edition · Book 1 · Unit 8 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band 2.** Name the criterion and **copy the line** — the line itself, not a summary — and say what you found. Then **one thing to keep, and why it works.** Then **rank the slip you were given**: most useful criterion first, least useful last.';

out.push(h1('Unit 8  Reviews'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Unit 7 explained why something happens. This unit **judges** it — and the whole of it rests on one fact: **a verdict without a reader is not a verdict.** _It is good_ is an opinion about you. _For anybody who takes readings at a gate in winter, this is the one to buy_ is a review.',
  '**8.1** gives the verdict in one sentence and names its reader.   **8.2** supports it with the **one** detail that changed your mind.   **8.3** writes about what is wrong with something you still recommend.   **8.4** compares two things **without ranking them**.   **8.5** ends on the sentence a reader will act on.   **8.6** writes the review to the examination shape.   **8.7** mediates between two reviews of the same thing that disagree.',
  '**Exam practice in 8.7:** B2 First **Reading and Use of English Part 3** (word formation), **Writing Part 2** (a review) and **Listening Part 4** (multiple choice).',
  '⚠ **Bring two things you have recommended to somebody** — a tool, a shop, a method, a book, a way of doing something at work. **One that worked for them and one that did not.** 8.1 and 8.2 run on the pair, and **the one that did not work is the more useful of the two**, so do not bring two successes.',
  '**And the slip stays in band 2.** From this unit **the rankings go on the board**: the class will see which three criteria the room found most useful, which is the first time anybody\'s feedback has been compared with anybody else\'s.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 8.1 =====================
out.push(pb());
out.push(h2('8.1  The verdict and its reader'));
out.push(p('**Function:** giving a verdict in one sentence and saying who it is for   ·   **Grammar:** _for anybody who …, this is …_ · _for anybody who …, it is not_   ·   **Pronunciation:** the verdict said once, and not repeated'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the thing you recommended that **worked** for the person, and then the thing that **did not**. One sentence each, and no explaining. ⚠ Then say, for the second one: **who would it have worked for?** Most of the room will have an answer, and that answer is the whole cycle.'));
out.push(board('It is a very good probe. Everybody should have one.', 'For anybody taking readings at a gate in winter, this is the one. For a cold store, it is not.'));
out.push(p('**b**  Which of these is a verdict? **1** _It is excellent._  **2** _For anybody who reads at a gate, this is the one to buy._  **3** _I was very pleased with it._  **4** _For a cold store it is the wrong instrument._  **5** _It has a lot of good features._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a verdict without a reader is, and what did Rim discover about the depot that disliked her probe?   **A** a lie; that they were careless   **B** an opinion about the writer and not about the thing — and the depot that disliked it was using it in a cold store, where the probe is the wrong instrument, so neither of them was wrong about anything   **C** too short; nothing'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the two halves of a verdict sentence do?   **2** What does Dima say happens to a review with no reader in it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.1  For anybody who, this is', [
  ['Ms Huda', 'Mrs Shaaban, the thing you recommended that worked, and the thing that did not — and then what was said against it.'],
  ['Rim', 'The same thing. I recommended the same probe to two depots in March: one wrote to thank me and the other told me in September that it was useless, because it takes about forty seconds to settle and the reading drifts. Which is true. It does both of those things.'],
  ['Ms Huda', '**Then the pair is one object and two readers, which is better than anything I had prepared.** And where are they using it?'],
  ['Rim', 'In a cold store. They are walking into the store with it and reading the air. ⚠ **It is a gate probe. You push it into a pallet at a gate and you stand there for a minute anyway, because the driver is signing.**'],
  ['Ms Huda', '**So neither of them is wrong about the probe.** One is a reader for whom forty seconds is free, because they are standing still already; the other is a reader for whom forty seconds is the whole job. ⚠ **And the fault is not in either depot. It is in the recommendation**, which had no reader in it.'],
  ['Omar', 'What did the recommendation say?'],
  ['Rim', 'It said it is a very good probe and everybody should have one.'],
  ['Ms Huda', '⚠ **Which is not a verdict. It is a verdict-shaped opinion about Mrs Shaaban**, and that is the fact this whole unit rests on. _It is good_ tells a reader how you felt. **_For anybody who …, this is …_ tells them what to do.**'],
  ['Hiba', 'So the sentence has two halves.'],
  ['Ms Huda', '**Two halves and they do different jobs.** The first half names the reader: _for anybody who takes readings at a gate in winter…_ The second gives the verdict: _…this is the one to buy._ ⚠ And then the move that costs nothing and buys most: **a second sentence naming the reader it is _not_ for.** _For a cold store it is the wrong instrument._'],
  ['Jad', 'Why does the second sentence buy anything? It only subtracts.'],
  ['Ms Huda', 'Because **it is the sentence that makes the first one checkable.** A review that recommends something to everybody cannot be wrong and cannot be used. One that recommends it to one kind of reader and refuses it to another has told you where it stands, and you can test it in a fortnight.'],
  ['Dima', 'And in print it is the difference between a review and an advertisement. I take out about three _everybody should_ sentences a month.'],
  ['Ms Huda', 'Say what happens to the ones you leave in.'],
  ['Dima', '⚠ **Nothing happens. Nobody writes back about them, nobody acts on them, and nobody disagrees with them**, which is how I know they were not read. The ones that get letters are the ones that say who should not buy the thing.'],
  ['Mazen', 'How long should the verdict be?'],
  ['Ms Huda', '**One sentence, and said once.** ⚠ A verdict repeated in the last paragraph is a verdict the writer did not trust, and the reader hears the doubt and not the repetition. Say it at the top, support it in the middle, and let the last line do a different job — which is 8.5.'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **Flat, and once.** _For anybody who takes readings at a gate in winter ‖ this is the one to buy._ The pause falls between the reader and the verdict. ⚠ And no rise at the end: a verdict read with a rise is a question, and the room will answer it instead of acting on it.'],
]));
out.push(sp());
out.push(box('Language box – the verdict and its reader', [
  '⚠ **A verdict without a reader is not a verdict: it is an opinion about the writer.** _It is a very good probe and everybody should have one_ tells a reader how you felt. **_For anybody who …, this is …_ tells them what to do.**',
  '**The sentence has two halves and they do different jobs.** **The reader:** _for anybody who takes readings at a gate in winter…_ **The verdict:** _…this is the one to buy._ One sentence, and the reader comes first, because a reader who is not addressed in the first six words does not know whether the rest is for them — which is 5.1.',
  '**Then the move that costs nothing and buys most: name the reader it is _not_ for.** _For a cold store it is the wrong instrument._ ⚠ **That second sentence is what makes the first one checkable.** A review that recommends something to everybody cannot be wrong and cannot be used.',
  '**And Mrs Khoury\'s evidence, which is worth more than the argument.** She takes out about three _everybody should_ sentences a month. ⚠ **The ones she leaves in produce nothing** — no letters, no action, no disagreement, which is how she knows they were not read. **The reviews that get letters are the ones that say who should not buy the thing.**',
  '**Two readers can disagree completely about one object and neither of them be wrong.** Forty seconds to settle is **free** for somebody standing at a gate while a driver signs, and it is **the whole job** for somebody walking into a cold store. ⚠ When that happens the fault is not in either reader: **it is in the review, which had no reader in it.**',
  '**One sentence, and said once.** A verdict repeated in the last paragraph is a verdict the writer did not trust, and the reader hears the doubt and not the repetition. ⚠ Say it at the top, support it in the middle, and give the last line a different job — which is 8.5.',
  '**Three ways of naming a reader, in rising order of usefulness.** By **task**: _for anybody who reads at a gate_. By **condition**: _for anybody working below freezing_. By **constraint**: _for anybody who cannot stand still for a minute_. The third is the best, because a constraint is something the reader already knows about themselves.',
  '**Pronunciation.** 🔊 **Track 8.2** **Flat, and once**, with the pause between the reader and the verdict: _for anybody who takes readings at a gate in winter ‖ this is the one to buy._ ⚠ No rise at the end. A verdict read with a rise is a question, and the room will answer it instead of acting on it.',
  '**Practise:** A verdict with its reader, and the reader it is not for. **1** a tool  **2** a shop  **3** a method  **4** a book  **5** something you were given and would not choose',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing from the card and one fact about it. B gives the verdict in two sentences: the reader and the verdict, then the reader it is **not** for. A says which of the three ways of naming a reader B used — task, condition or constraint. B then names the reader by **constraint** instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the thing, and one fact)_ __________.'],
  ['B', 'For anybody who __________, this is __________. For __________, it is not.'],
  ['A', 'You named the reader by **task / condition / constraint**.'],
  ['B', '_(by constraint)_ For anybody who cannot __________, this is __________.'],
]));
out.push(table(['Card A – the thing, and one fact', 'Card B – the thing, and one fact'], [
  ['_A probe that takes forty seconds to settle._', '_A fault book with a column for a batch number._'],
  ['_A form with a lot-number field on the second line._', '_A rota board that has to be written on in pencil._'],
  ['_A style sheet that says open with the subject._', '_A queue that marks a request urgent only with a name attached._'],
  ['_A pen torch that will not stay in a top pocket._', '_A drawing pen that needs two hands to cap._'],
  ['_A dictionary with no example sentences in it._', '_A handset that is easy to open and hard to seal._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the eight verdicts, with the reader marked **task**, **condition** or **constraint**. Then the count: **six or seven of the eight name the reader by task**, which is the easiest and the least useful. ⚠ And the _not for_ sentence is left out in about half of them on a first run, and in every one of those the verdict sounds like an advertisement.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing you recommended that **did not** work, and write the two sentences: the reader it **is** for and the reader it is **not** for. ⚠ Then answer the hard question in writing: **which of the two was the person you recommended it to?**'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s two readers are genuinely different kinds of reader, or the same reader described twice. If they are the same, the verdict has no edge and nobody can act on it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim\'s pair turned out to be one object and two readers, which is better than anything Ms Huda had prepared. She recommended the same probe to two depots in March: one wrote to thank her and the other told her in September that it was useless. What the second said was wrong with it is that it takes about forty seconds to settle and that the reading drifts — and both of those are true. But they are using it in a cold store, walking in with it and reading the air, and it is a gate probe: you push it into a pallet at a gate and you stand there for a minute anyway, because the driver is signing. So neither depot is wrong about the probe. One is a reader for whom forty seconds is free, because they are standing still already, and the other is a reader for whom forty seconds is the whole job. And the fault is not in either depot: it is in the recommendation, which had no reader in it. Omar asked what the recommendation had said, and it said that it is a very good probe and everybody should have one — which is not a verdict but a verdict-shaped opinion about Mrs Shaaban. Which is the fact the whole unit rests on: "it is good" tells a reader how you felt, and "for anybody who, this is" tells them what to do. Hiba said so the sentence has two halves, and it has: the first names the reader and the second gives the verdict, and then there is the move that costs nothing and buys most — a second sentence naming the reader it is not for. Jad asked why that buys anything when it only subtracts, and the answer is that it is the sentence that makes the first one checkable: a review that recommends something to everybody cannot be wrong and cannot be used. Dima added the evidence from the other side of the desk: she takes out about three everybody-should sentences a month, and the ones she leaves in produce nothing at all — no letters, no action and no disagreement, which is how she knows they were not read. The reviews that get letters are the ones that say who should not buy the thing. And the last question was about length: one sentence, said once, because a verdict repeated in the last paragraph is a verdict the writer did not trust._'));
out.push(p('**Listener task:** write your partner\'s two readers, and whether they are genuinely different.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the review Rim writes for the other eleven depots. Answer the questions.'));
out.push(model([
  '**THE GATE PROBE · for whom, and for whom not** · R. Shaaban · 24 November',
  '**For anybody who takes a reading at a gate while a driver is signing, this is the probe to buy. For anybody who has to walk a cold store with it, it is the wrong instrument.** I recommended it to two depots in March and I should have written those two sentences then.',
  '**What it does.** A stainless probe on a half-metre lead, a reading to one decimal, and a hold button that keeps the figure on the screen after you have pulled the probe out. **It takes about forty seconds to settle and the reading drifts for the first fifteen of those.**',
  '**Why forty seconds is free at a gate.** You are standing at the vehicle anyway: the driver is signing, the gate copy is being stamped, and nothing is waiting for you. ⚠ **The forty seconds is time you already had, which is the only reason this instrument is any good.**',
  '**Why it is the wrong instrument in a store.** In a store you are walking, you have eleven readings to take and a door that is open while you take them. Forty seconds each is twenty-five minutes of open door, and the drift means the first reading of a run is the one you least want to trust. **The depot that told me it was useless was right about their own job and I had not asked what their job was.**',
  '**What I got wrong in March, and it was not the probe.** I sent one sentence to two depots: _it is a very good probe and everybody should have one._ **Eleven words, no reader, and six months of a depot believing I had sold them the wrong thing** — which, for their purposes, I had.',
  '**The one thing I would check before buying.** Whether the person using it will be **standing still** when the reading is taken. Not the temperature range, not the lead, not the accuracy — **standing still.**',
  '**What it costs, since somebody always asks.** About four times the price of the dial thermometer it replaced, and about a third more than the probe the second depot went back to. ⚠ **The price is not the reason I am writing, and I mention it only because a review that leaves the price out is read as an advertisement** — which is what my March sentence was.',
  '**And what I am not claiming.** That it is the best probe made. I have used two others and I cannot compare them on drift, because I have never timed the other two. ⚠ **I am claiming that it is the right instrument for one job, and I can say exactly which job.**',
]));
out.push(item('1', 'Who is the probe for, and who is it not for?'));
out.push(item('2', 'Why is forty seconds free at a gate and expensive in a store?'));
out.push(item('3', 'What does she say she got wrong in March, and what is she not claiming?'));
out.push(writers([
  'A review with a reader in it: **the two verdict sentences first — for whom, and for whom not** → **what the thing does, including the fault** → **why the fault is free for your reader** → **why it is expensive for the other reader** → **what you got wrong when you recommended it without a reader** → **the one thing to check before buying** → **and what you are not claiming**.',
  '**Put both verdict sentences in the first two lines, before anything is described.** _For anybody who …, this is …; for anybody who …, it is not._ ⚠ A review that describes first and judges last is read as a description, and the verdict at the end is taken as a summary.',
  '⚠ **Print the fault in the paragraph that describes the thing, not in a later paragraph of criticism.** _It takes about forty seconds to settle._ A fault held back until the fourth paragraph reads as a concession; the same fault stated in the description reads as a specification.',
  '**Then explain why the fault is free for your reader.** _The forty seconds is time you already had._ That sentence is the review: it is the reason the verdict and the fault can both be true, and without it the reader has to choose between them.',
  '⚠ And **name the one thing to check before buying** — one thing, not four. _Whether the person using it will be standing still._ A review ending in a list of considerations has handed the decision back; one that names a single test has made it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the review with a reader in it (80 words or more).'));
out.push(p('**______________ · for whom, and for whom not** · ______________ · ______________   **For anybody who ______________, this is ______________. For anybody who ______________, it is not.**   **What it does.** ______________. **______________** _(the fault, stated here)_.   **Why ______________ is free for my reader.** ______________.   **Why it is expensive for the other.** ______________.   **What I got wrong when I recommended it.** ______________. ______ words, no reader.   **The one thing I would check before buying.** ______________. Not ______________, not ______________ — **______________.**   **And what I am not claiming.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both verdict sentences in the first two lines',
  'The fault stated in the description and not held back',
  'Why the fault is free for the named reader',
  'One thing to check before buying, and only one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their two verdict sentences.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full review (180 words or more), to the shape in the writer\'s box: the two verdicts, the fault in the description, why it is free for your reader and expensive for the other, and the one thing to check.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both verdict sentences early, the fault in the description, one thing to check.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your _not for_ sentence, and nothing else.** The room says what the thing is, and in about half the cases they can. ⚠ Where the room cannot, ask the writer who the thing is **not** for and let them answer in one sentence. Then the sentence to leave the cycle on, which is Rim\'s: **the depot that told me it was useless was right about their own job, and I had not asked what their job was.**'));
out.push(hw('Write the review (80+ words). Then find **one** review of anything — a tool, a book, a shop — that names the reader it is **not** for, and write down who that reader is. If you cannot find one in four, write that instead.'));

// ===================== 8.2 =====================
out.push(pb());
out.push(h2('8.2  The one detail that changed my mind'));
out.push(p('**Function:** supporting a verdict with the single decisive detail   ·   **Grammar:** _what decided it was_ · _the detail that changed my mind_ · _and nothing else did_   ·   **Pronunciation:** the detail given without build-up'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Give your verdict again in one sentence. Then give **one** detail — the one that decided it — and stop. ⚠ Your partner times you: a student who gives three details has taken about forty seconds and told the room nothing it can use.'));
out.push(board('There are a lot of things I like about it.', 'What decided it was the hold button. Nothing else did.'));
out.push(p('**b**  Which is a decisive detail? **1** _It is well made._  **2** _The hold button keeps the figure on the screen after you pull the probe out._  **3** _It has many useful features._  **4** _The cap needs two hands._  **5** _I have been very happy with it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say one detail is better than three, and what does Mazen find when he looks for his?   **A** because it is shorter; nothing   **B** because a reader can carry one detail and will carry none of three — and Mazen finds that the detail that decided it for him is not one he had ever mentioned, and that the three he always mentions are the ones in the catalogue   **C** because three is too many to remember; a better tool'));
out.push(p('**b**  Listen again. **1** What test does Ms Huda give for a decisive detail?   **2** What does Lubna say about the detail that decided hers?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.3  What decided it, and nothing else did', [
  ['Ms Huda', 'Mr Hariri, the verdict, and then one detail.'],
  ['Mazen', 'For anybody who opens handsets at a counter all day, this screwdriver set is the one. And the detail — it is well made, the handles are comfortable, and the case is a good case.'],
  ['Ms Huda', '**That is three details and none of them is a detail.** _Well made_, _comfortable_ and _a good case_ could be said of any set in the shop without opening the box. ⚠ **The test is one question: what would I have to tell somebody for them to make the same decision I made?**'],
  ['Mazen', '_(a pause)_ The bits do not round off.'],
  ['Ms Huda', 'Go on.'],
  ['Mazen', 'The cross-head bits on the cheap sets round off after about thirty handsets and then they slip in the screw and mark the case. These have done about four hundred and they still bite. ⚠ **That is what decided it. And I have never once said it to anybody, because it sounds like nothing.**'],
  ['Ms Huda', '**It sounds like nothing and it is the whole review.** A man who opens handsets all day knows exactly what a rounded bit costs him, and the three things you were saying — well made, comfortable, good case — are the three things printed on the box.'],
  ['Omar', 'Why is one better than three? Three is more evidence.'],
  ['Ms Huda', '⚠ **Because a reader can carry one and will carry none of three.** Which is Unit 5: three strong things in a paragraph and the reader takes none of them. **And because the one you choose tells the reader what kind of user you are**, which is 8.1 arriving from the other direction: _the bits do not round off_ tells them you are somebody who does this four hundred times.'],
  ['Lubna', 'Mine is a drawing pen and the detail that decided it is that the cap needs two hands.'],
  ['Ms Huda', 'Which is a fault.'],
  ['Lubna', 'It is a fault, and it is why I bought the second one. ⚠ **With a one-handed cap I lose the pen about once a week, because I cap it without looking and put it down somewhere. The two-handed cap makes me look at it.** Nobody would put that in a review.'],
  ['Ms Huda', '**And it is the best detail anybody has given tonight, because it is a fault doing the work of a feature** — which is 8.3, and it arrives a week early. Keep it.'],
  ['Dima', 'The detail is also the thing I cannot cut. I can cut a paragraph of praise from a review and nothing is lost; if I cut the detail, the piece stops being a review.'],
  ['Ms Huda', 'Say what is left when you do.'],
  ['Dima', '⚠ **A verdict and a tone of voice.** Which is what most reviews are, and it is why a reader reads three and buys nothing.'],
  ['Jad', 'How do you find yours? I do not think I know what decided mine.'],
  ['Ms Huda', '**Ask what you would miss if it were taken away.** Not what you like — what you would **miss**. ⚠ Most people cannot name what decided a purchase and can name at once what they would miss if it were removed, and those two questions have the same answer.'],
  ['Rim', 'And aloud?'],
  ['Ms Huda', '🔊 **No build-up.** _What decided it was the hold button._ ⚠ A detail introduced with _and I think the most important thing of all is probably_ has been announced for four seconds before it arrives, and a reader who has been told that something is important stops judging it for themselves.'],
]));
out.push(sp());
out.push(box('Language box – the one decisive detail', [
  '**The test, and it is one question: _what would I have to tell somebody for them to make the same decision I made?_** ⚠ _Well made_, _comfortable_, _a good case_ fail it — they could be said of anything in the shop without opening the box. **_The bits do not round off_** passes it.',
  '**One detail, not three.** A reader can carry one and will carry none of three — which is Unit 5 arriving in a new genre. ⚠ **And the one you choose tells the reader what kind of user you are:** _the bits do not round off_ says you are somebody who does this four hundred times, which is 8.1 from the other direction.',
  '**How to find yours, when you cannot name what decided it.** Ask **what you would miss if it were taken away** — not what you like. Most people cannot answer the first question and answer the second at once, **and the two questions have the same answer.**',
  '⚠ **A decisive detail is often a fault.** Miss Sweidan buys the drawing pen whose cap needs two hands, because a one-handed cap means she caps it without looking and loses it about once a week. **A fault doing the work of a feature is the strongest detail available to a reviewer**, and nobody puts it in a review.',
  '**And Mrs Khoury\'s test, from the other side of the desk.** She can cut a paragraph of praise from a review and lose nothing. **Cut the detail and the piece stops being a review** — what is left is _a verdict and a tone of voice_, which is what most reviews are, and it is why a reader reads three and buys nothing.',
  '**Three phrases, and the first is the plainest and the best.** **_What decided it was…_** · **_The detail that changed my mind was…_** · **_And nothing else did_** — which is worth adding, because it stops the reader waiting for a second reason.',
  '⚠ **Never give the detail from the box.** If it is printed on the packaging, the reader already has it and your having repeated it tells them you did not use the thing long enough to find anything else. **The detail you own is the one that took you four hundred handsets to notice.**',
  '**And the detail decides who the review is believed by.** A detail about the handles is believed by anybody; a detail about what happens at four hundred handsets is believed by the people who do four hundred — ⚠ **and those are the only people whose opinion of your review will ever reach a third person.** A review is passed on by the readers it was aimed at and by nobody else.',
  '**Pronunciation.** 🔊 **Track 8.4** **No build-up.** _What decided it was the hold button._ ⚠ _And I think the most important thing of all is probably…_ announces the detail for four seconds before it arrives, and a reader who has been told that something is important stops judging it for themselves.',
  '**Practise:** The verdict, then one detail, then _and nothing else did_. **1** a tool  **2** a form  **3** a book  **4** a shop  **5** a detail that is a fault',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the verdict and **three** details from the card, in any order. B names which one is the decisive one and why the other two came off the box. A then answers the other question — **what would you miss if it were taken away?** — and B says whether the answer is the same. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(verdict)_ __________. _(three details)_ __________, __________, __________.'],
  ['B', 'The decisive one is __________, because __________. The other two are off the box.'],
  ['A', 'What I would miss if it were taken away is __________.'],
  ['B', 'Which is **the same / not the same**, so your detail is __________.'],
]));
out.push(table(['Card A – verdict and three details', 'Card B – verdict and three details'], [
  ['_A screwdriver set: well made · comfortable handles · the bits do not round off_', '_A probe: accurate · good lead · a hold button that keeps the figure on screen_'],
  ['_A fault book: hard covers · a ribbon · a column for a batch number_', '_A rota board: large · magnetic · it has to be written on in pencil_'],
  ['_A dictionary: well printed · many entries · no example sentences_', '_A form: clear · one page · a lot-number field on the second line_'],
  ['_A pen torch: bright · light · it will not stay in a top pocket_', '_A drawing pen: fine line · good ink · the cap needs two hands_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the decisive detail in each of the eight, and whether the _would miss_ answer matched it. Then the count: **in six or seven of the eight the two answers are the same**, which is the test worth having. ⚠ And in three or four of the eight **the decisive detail is a fault** — the pencil, the two-handed cap, the missing examples — each doing a job.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own decisive detail, and then the test: **what would I have to tell somebody for them to make the same decision?** If your detail could be read off the box, find another.'));
out.push(p('**b**  Swap. Then each of you say what kind of user your partner\'s detail reveals them to be. ⚠ If it reveals nothing, the detail is still off the box however true it is.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen gave the verdict and then three details — it is well made, the handles are comfortable, and the case is a good case — and Ms Huda said that is three details and none of them is a detail, because all three could be said of any set in the shop without opening the box. The test is one question: what would I have to tell somebody for them to make the same decision I made? He thought, and then said: the bits do not round off. The cross-head bits on the cheap sets round off after about thirty handsets and then they slip in the screw and mark the case, and these have done about four hundred and still bite. That is what decided it, and he had never once said it to anybody, because it sounds like nothing. It sounds like nothing and it is the whole review: a man who opens handsets all day knows exactly what a rounded bit costs him, and the three things he had been saying are the three things printed on the box. Omar asked why one is better than three, since three is more evidence, and the answer is that a reader can carry one and will carry none of three — which is Unit 5 — and that the one you choose tells the reader what kind of user you are. Then Lubna gave hers, which is a drawing pen whose cap needs two hands. It is a fault, and it is why she bought the second one: with a one-handed cap she loses the pen about once a week, because she caps it without looking, and the two-handed cap makes her look at it. Which is the best detail anybody gave, because it is a fault doing the work of a feature. And Dima said the detail is the thing she cannot cut: she can cut a paragraph of praise and lose nothing, and if she cuts the detail the piece stops being a review — what is left is a verdict and a tone of voice, which is what most reviews are and why a reader reads three and buys nothing. Then Jad asked how you find your own detail when you do not know what decided it, and the answer is to ask what you would miss if it were taken away — not what you like, what you would miss. Most people cannot name what decided a purchase and can name at once what they would miss, and the two questions have the same answer._'));
out.push(p('**Listener task:** write your partner\'s detail and what kind of user it reveals.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the review Mazen writes for the three other counters in Shaalan. Answer the questions.'));
out.push(model([
  '**THE BITS DO NOT ROUND OFF** · M. Hariri · 25 November',
  '**For anybody who opens twenty handsets a week or more, this set is the one. For anybody who opens one a month, it is three times the price of a set that will do.**',
  '**What decided it, and nothing else did.** The cross-head bits do not round off. ⚠ **On the sets I used before, a bit rounds after about thirty handsets**; it then slips in the screw head, and a slipped bit marks the case beside the screw, which the customer sees and nobody forgets. **These have done about four hundred and they still bite.**',
  '**Why that is the whole of it for my reader.** A rounded bit costs me a marked case and about four minutes, and it costs the customer their confidence in a repair they cannot inspect. **Four hundred against thirty is not a convenience; it is the difference between a counter that marks cases and one that does not.**',
  '**What I am not going to tell you.** That it is well made, that the handles are comfortable, or that the case is a good case. All three are true and all three are printed on the box, **and if that is all I could tell you after six months, I should not be writing this.**',
  '**What is wrong with it.** The case is too big for a counter drawer and I keep it on a shelf behind me, which costs me about three seconds a repair. **I have counted that and I would still buy it again.**',
  '**And the fault that is not a fault.** The handles are heavier than the cheap ones. In the first fortnight I thought that was wrong; it is why the bit stays square in the screw, and **a light handle is how you round a bit without noticing.**',
  '**What it costs against the cheap set.** Three times the price, and the cheap set comes with eleven bits against this one\'s six. ⚠ **Six bits that bite are worth more than eleven that round**, and the arithmetic that matters is not the price of the set but the price of a marked case — which is a repair done again for nothing and a customer who tells two people.',
  '**The one thing I would check before buying.** How many handsets a week you open. Not the price, not the number of bits — **how many a week**, and if the answer is under five, buy the cheap set and expect to replace the bits.',
]));
out.push(item('1', 'What decided it, and what does a rounded bit cost him?'));
out.push(item('2', 'What is he not going to tell the reader, and why?'));
out.push(item('3', 'What does he say about the heavier handles?'));
out.push(writers([
  'A review built on one detail: **the two verdict sentences** → **what decided it, and nothing else did** → **why that detail is the whole of it for your reader, with its cost** → **what you are _not_ going to tell them, and why** → **what is wrong with it, measured** → **the fault that turns out not to be one** → **and the one thing to check before buying**.',
  '**Give the detail in the second paragraph and give it flat.** _The cross-head bits do not round off._ ⚠ A detail that arrives after a paragraph of preparation has been announced, and an announced detail stops being judged.',
  '⚠ **Cost the detail in your reader\'s own currency.** _A rounded bit costs me a marked case and about four minutes._ A detail with no cost attached is a fact; with a cost it is a reason, and only reasons are acted on.',
  '**Say what you are refusing to tell them.** _That it is well made, that the handles are comfortable, that the case is a good case — all three are printed on the box._ ⚠ It clears the catalogue away and tells the reader you used the thing long enough to find something the box does not say.',
  '⚠ And print **the fault you have measured and would still accept**. _About three seconds a repair. I have counted that and I would still buy it again._ A review with no measured fault in it reads as a recommendation from somebody who has never used the thing in anger.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the review built on one detail (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **For anybody who ______________, this is ______________. For anybody who ______________, ______________.**   **What decided it, and nothing else did.** ______________. ⚠ ______________. **______________.**   **Why that is the whole of it for my reader.** ______________ costs me ______________ and costs ______________ ______________.   **What I am not going to tell you.** That ______________, that ______________, or that ______________ — **all printed on the box.**   **What is wrong with it.** ______________, which costs me ______________. **I have counted that and I would still ______________.**   **And the fault that is not a fault.** ______________.   **The one thing I would check before buying.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One detail, in the second paragraph, given flat',
  'The detail costed in the reader\'s own currency',
  'A paragraph refusing the things printed on the box',
  'A measured fault the writer would still accept',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their detail and the cost of it, and nothing else.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full review (180 words or more), to the shape in the writer\'s box: the two verdicts, the one detail flat, its cost, what you refuse to tell them, and the measured fault.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: one detail and not three, the detail costed, the box paragraph refused.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your detail and let the room say what kind of user you are.** ⚠ Where they cannot, the detail is off the box however true it is, and the writer goes back for another. ⚠ Keep a count of the details that came off the box; it is usually two or three in twelve, and those three writers go back for another. Then the line to leave the cycle on, which is Mazen\'s: **it sounds like nothing, and I had never once said it to anybody.**'));
out.push(hw('Write the review (80+ words). Then take the last thing you bought for work and answer the question in writing: **what would you miss if it were taken away?** Then check whether that is what you would have said decided it.'));

// ===================== 8.3 =====================
out.push(h2('8.3  What is wrong with it, and I still recommend it'));
out.push(p('**Function:** writing about the weakness of something you recommend   ·   **Grammar:** _its weakness is real and I would still_ · _that does not touch the reason_   ·   **Pronunciation:** the weakness read without hurrying past it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the worst thing about the thing you recommend — **in its strongest form, as the person who dislikes it would say it.** Then stop. ⚠ Do not add _but_. The sentence has to be allowed to stand on its own for about three seconds, and most of the room will not manage it.'));
out.push(board('It is perhaps a little expensive, but it is worth it.', 'The cap needs two hands, and in a lift with a drawing in the other hand you cannot cap it at all.'));
out.push(p('**b**  Which is a real weakness? **1** _It is perhaps a little expensive._  **2** _The case is too big for a counter drawer._  **3** _It is not for everybody._  **4** _You cannot cap it with one hand._  **5** _There are one or two small things._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What test does Ms Huda give for a real weakness, and what does she say happens to a review with no weakness in it?   **A** whether it is true; it is shorter   **B** whether it could change somebody\'s mind — and a review with no weakness in it is not believed and should not be, because the reader knows that everything has one and concludes that the writer has not used it   **C** whether the writer minds it; nothing'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about answering the weakness in the same sentence?   **2** What does Lubna say the two-handed cap costs her?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.5  Let it stand for three seconds', [
  ['Ms Huda', 'Miss Sweidan. The worst thing about the pen, as the person who dislikes it would say it.'],
  ['Lubna', 'You cannot cap it with one hand, so in a lift, holding a drawing, you cannot cap it at all — and an uncapped drawing pen in a coat pocket is a ruined coat.'],
  ['Ms Huda', '_(three seconds of silence)_ **Thank you. That is the first weakness anybody in this class has said without a _but_ on the end of it.** Now say the second sentence.'],
  ['Lubna', 'Its weakness is real and I would still buy it, because the reason I buy it is that I do not lose it.'],
  ['Ms Huda', '⚠ **And notice what the second sentence does not do: it does not answer the first.** The cap is still awkward in a lift. **What it says is that the weakness does not touch the reason** — which is a different claim and a much stronger one.'],
  ['Omar', 'Why not answer it? If there is an answer.'],
  ['Ms Huda', 'Because an answer in the same breath takes the weakness away, and the reader notices. ⚠ _It is a little awkward to cap, but of course you soon get used to it_ — **that sentence has told the reader that the writer cannot bear to be disagreed with**, and everything else in the review is then read as a defence.'],
  ['Dima', 'There is also a kind of weakness that is not one.'],
  ['Ms Huda', 'Name it.'],
  ['Dima', '_It is perhaps a little expensive._ _It is not for everybody._ _There are one or two small things._ ⚠ **I take out about five of those a month and I have never once had a writer object**, which tells you they knew.'],
  ['Ms Huda', '**And the test for the difference is one question: could this weakness change somebody\'s mind?** _Expensive_ could, if it had a figure on it. _A little expensive_ could not, because nobody can act on it. **A weakness that could not change anybody\'s mind is decoration, and a reader who has met two of them stops reading.**'],
  ['Jad', 'Is there a danger the other way? A weakness so strong that nobody buys the thing?'],
  ['Ms Huda', 'There is, and it is the right danger to be in. ⚠ **If the strongest form of the weakness would stop your reader buying it, then it should**, and you have learnt something about your own recommendation. Mr Hariri found one of those last week and kept it.'],
  ['Mazen', 'The case on the shelf. Three seconds a repair, about four hundred repairs — twenty minutes a year.'],
  ['Ms Huda', '**Which is a weakness with a figure on it that does not change the verdict, and that is the ideal shape.** Measured, named, and then the separation: _I have counted that and I would still buy it again._'],
  ['Hiba', 'And why does a review with no weakness in it fail? Some things are good.'],
  ['Ms Huda', '⚠ **Because the reader knows that everything has one.** A review with nothing wrong in it does not read as praise; it reads as a review by somebody who has not used the thing. **The weakness is not a courtesy to the manufacturer. It is the evidence that you own one.**'],
  ['Rim', 'And aloud?'],
  ['Ms Huda', '🔊 **Slowly, and without hurrying past it.** A speaker who says the weakness quickly and the _but_ loudly has told the room which half to believe. ⚠ Say the weakness at the speed you would say a figure, then **stop**, and let the three seconds happen.'],
]));
out.push(sp());
out.push(box('Language box – the weakness you keep', [
  '⚠ **A review with no weakness in it is not believed and should not be**, because the reader knows that everything has one. It does not read as praise; it reads as a review by somebody who has not used the thing. **The weakness is not a courtesy to the manufacturer: it is the evidence that you own one.**',
  '**State it in its strongest form — as the person who dislikes it would say it — and then stop.** _You cannot cap it with one hand, so in a lift, holding a drawing, you cannot cap it at all._ ⚠ **No _but_ on the end**, and about three seconds of nothing.',
  '**Then the second sentence, which does _not_ answer the first.** **_Its weakness is real and I would still buy it, because…_** The cap is still awkward. **What the sentence says is that the weakness does not touch the reason** — a different claim, and a much stronger one.',
  '⚠ **An answer in the same breath takes the weakness away and the reader notices.** _It is a little awkward to cap, but of course you soon get used to it_ tells the reader that the writer cannot bear to be disagreed with, **and everything else in the review is then read as a defence.**',
  '**The test for a real weakness is one question: could it change somebody\'s mind?** _Expensive_ could, with a figure on it. _A little expensive_ could not. ⚠ **A weakness that could change nobody\'s mind is decoration** — _it is not for everybody_, _there are one or two small things_ — **and a reader who has met two of them stops reading.**',
  '**Measure it where you can.** _Three seconds a repair, about four hundred repairs — twenty minutes a year. I have counted that and I would still buy it again._ A measured weakness that does not move the verdict is the ideal shape of this paragraph, **because the reader can do the arithmetic for their own case.**',
  '⚠ **And the danger worth being in.** If the strongest form of the weakness would stop **your reader** buying the thing, **then it should** — and you have learnt something about your own recommendation that no amount of rewriting would have told you.',
  '**Where the weakness goes, and it is not in a paragraph of its own at the end.** Put it **third of the four moves**, after the detail and before the last line. ⚠ A weakness at the very end competes with the last line and usually wins, so the reader leaves with the fault and no instruction; a weakness in the middle is **passed through** on the way to the test.',
  '**Pronunciation.** 🔊 **Track 8.6** The weakness is read **slowly and without hurrying past it**, at the speed you would say a figure — and then you **stop**. ⚠ A speaker who says the weakness quickly and the _but_ loudly has told the room which half to believe.',
  '**Practise:** The weakness in its strongest form, three seconds, then the separation. **1** a tool  **2** a method  **3** a book  **4** a shop  **5** something you were given',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the thing from the card and the weakness as the card gives it — in its **weak** form. B restates the weakness in its strongest form, stops for three seconds, and then gives the separation: _its weakness is real and I would still …, because …_ A says whether the separation answered the weakness or left it standing. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the thing, and the weak form)_ __________ — it is perhaps a little __________.'],
  ['B', '_(strongest form)_ __________. _(three seconds)_'],
  ['B', 'Its weakness is real and I would still __________, because __________.'],
  ['A', 'That **answered it / left it standing**, because __________.'],
]));
out.push(table(['Card A – the thing, and the weak form', 'Card B – the thing, and the weak form'], [
  ['_The screwdriver set — the case is perhaps a little large._', '_The gate probe — it is perhaps a little slow._'],
  ['_The drawing pen — the cap is perhaps a little stiff._', '_The fault book — it is perhaps a little bulky._'],
  ['_The rota board — the pencil is perhaps a little inconvenient._', '_The dictionary — it has perhaps one or two gaps._'],
  ['_The one-page form — it is perhaps a little tight for space._', '_The urgent queue — it is perhaps a little slow to set up._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the strongest form of each weakness, and whether the separation answered it. Then the count: **in four or five of the eight the separation answers the weakness** on a first run — _but you get used to it_ — and in each of those the weakness has been taken back. ⚠ Time the silences: almost nobody manages three seconds, and the room hears it when somebody does.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own weakness in its strongest form, with a figure on it if you can get one. Then the separation sentence, which must **not** answer it.'));
out.push(p('**b**  Swap. Then each of you ask the test question of your partner\'s weakness: **could this change somebody\'s mind?** ⚠ If it could not, it is decoration and goes out, however true it is.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna gave the worst thing about the pen as the person who dislikes it would say it: you cannot cap it with one hand, so in a lift holding a drawing you cannot cap it at all, and an uncapped drawing pen in a coat pocket is a ruined coat. Then three seconds of silence, and Ms Huda said it was the first weakness anybody in the class had said without a but on the end of it. The second sentence was: its weakness is real and I would still buy it, because the reason I buy it is that I do not lose it. And notice what the second sentence does not do — it does not answer the first. The cap is still awkward in a lift. What it says is that the weakness does not touch the reason, which is a different claim and a much stronger one. Omar asked why not answer it if there is an answer, and the reason is that an answer in the same breath takes the weakness away and the reader notices: "it is a little awkward to cap, but of course you soon get used to it" tells the reader that the writer cannot bear to be disagreed with, and everything else is then read as a defence. Dima named the kind of weakness that is not one — it is perhaps a little expensive, it is not for everybody, there are one or two small things — and said she takes out about five a month and has never had a writer object, which tells you they knew. And the test for the difference is one question: could this weakness change somebody\'s mind? Expensive could, with a figure on it; a little expensive could not, because nobody can act on it. Then Jad asked whether there is a danger the other way, a weakness so strong that nobody buys the thing, and Ms Huda said there is and it is the right danger to be in: if the strongest form would stop your reader buying it, then it should, and you have learnt something about your own recommendation. Mazen gave the ideal shape of the paragraph from his own page: the case on the shelf, three seconds a repair, about four hundred repairs, twenty minutes a year — measured, named, and then the separation, I have counted that and I would still buy it again. And Hiba asked why a review with nothing wrong in it fails, since some things are good, and the answer is that the reader knows everything has one: a review with no weakness does not read as praise but as a review by somebody who has not used the thing._'));
out.push(p('**Listener task:** write your partner\'s weakness and whether it could change anybody\'s mind.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the review Lubna writes for the two other site architects. Answer the questions.'));
out.push(model([
  '**THE PEN THAT NEEDS TWO HANDS** · L. Sweidan · 26 November',
  '**For anybody who works off a clipboard and loses pens, this is the one. For anybody who draws seated at a desk, there is no reason to pay for it.**',
  '**What is wrong with it, said as the man in the shop said it to me.** You cannot cap it with one hand. In a lift, with a drawing in the other hand, you cannot cap it at all — and an uncapped drawing pen in a coat pocket is a ruined coat, which has happened to me once, in October, with a coat I liked.',
  '**Its weakness is real and I would still buy it.** ⚠ **And not because you get used to it.** You do not get used to it; I still cannot cap it in a lift. **I would buy it because the reason I buy it is that I do not lose it**, and the two things are not connected.',
  '**The detail that decided it, and nothing else did.** With a one-handed cap I cap the pen without looking at it, put it down on a window ledge or a joist, and lose it — about one a week on the first-floor job, which is four pens a month and a drawing I cannot finish until somebody lends me one. **The two-handed cap makes me look at the pen**, and in seven weeks I have not lost this one.',
  '**What that is worth, measured.** Four pens a month at the old rate; one pen in seven weeks at the new one. ⚠ **And the coat, which I am counting, because a weakness with no cost against it is not a weakness that has been thought about.**',
  '**What I am not claiming.** That it draws a better line. It draws the same line as the cheap one, in the same width, and anybody who tells you otherwise is describing the price and not the line. ⚠ **I have put the two side by side on tracing paper and I cannot tell which is which**, and I am the person who paid four times as much for one of them.',
  '**What I would say to somebody who draws at a desk.** Buy the cheap one, and buy two. ⚠ **At a desk you put a pen down in the same place every time and the cap stops mattering**, and everything I have written above is about a pen that lives in a coat pocket on a site with no desk in it.',
  '**The one thing I would check before buying.** Whether you work standing up. **Not the nib, not the ink, not the barrel — whether you are standing**, because everything in this review follows from that.',
]));
out.push(item('1', 'How does she state the weakness, and what happened in October?'));
out.push(item('2', 'What reason does she refuse to give for keeping it?'));
out.push(item('3', 'What is she not claiming, and what is the one thing to check?'));
out.push(writers([
  'A two-sided review: **the two verdict sentences** → **the weakness, as the person who dislikes it would say it** → **the separation, which refuses the easy reason** → **the decisive detail** → **what it is worth, measured** → **what you are not claiming** → **and the one thing to check**.',
  '**Attribute the weakness to somebody who dislikes the thing.** _Said as the man in the shop said it to me._ ⚠ That attribution stops the paragraph being a softened version: a weakness in your own words shrinks as you write it, and one in somebody else\'s does not.',
  '⚠ **Refuse the easy reason by name.** _And not because you get used to it. You do not get used to it._ The reader has that sentence ready and is waiting for you to use it; refusing it in advance **costs one line and is worth more than any argument.**',
  '**Put a figure on the weakness and on the thing that beats it.** _Four pens a month at the old rate; one pen in seven weeks at the new one._ A reader with those two figures can do the arithmetic for their own job, which is the only thing a review can do for a stranger.',
  '⚠ And **refuse the claim that would have been easiest to make**. _That it draws a better line. It draws the same line as the cheap one._ A reviewer who gives up the one claim everybody expects is believed about the claim they keep.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two-sided review (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **For anybody who ______________, this is ______________. For anybody who ______________, ______________.**   **What is wrong with it, said as ______________ said it.** ______________. ______________, which has happened to me ______________.   **Its weakness is real and I would still ______________.** ⚠ **And not because ______________.** ______________. **I would ______________ because ______________**, and the two things are not connected.   **The detail that decided it.** ______________.   **What that is worth, measured.** ______________. ______________.   **What I am not claiming.** ______________.   **The one thing I would check.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The weakness in its strongest form, attributed to somebody who dislikes it',
  'A separation that does **not** answer the weakness',
  'The easy reason refused by name',
  'A figure on the weakness and on the thing that beats it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their weakness and then stop for three seconds, counted by the room.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full review (180 words or more), to the shape in the writer\'s box: the weakness attributed and unanswered, the separation, the decisive detail, the two figures, and the refused claim.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the weakness in its strongest form, a separation that does not answer it, a figure on the weakness.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your weakness, stop for three seconds, then read your separation.** ⚠ The room\'s only job is to say whether the separation answered the weakness, and the answer is yes in about half the cases. Then the sentence to leave the cycle on, which is Lubna\'s: **and not because you get used to it. You do not get used to it.**'));
out.push(hw('Write the review (80+ words). Then find **one** review that contains a weakness you could act on, and write the weakness down. ⚠ If you read four reviews and find none, write that instead, because that figure is the finding.'));

// ===================== 8.4 =====================
out.push(h2('8.4  Where this is, that is'));
out.push(p('**Function:** comparing two things without ranking them   ·   **Grammar:** _where X is …, Y is …_ · _the difference is not better and worse but_   ·   **Pronunciation:** the two halves at the same weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name two things that do the same job at your work — two forms, two tools, two methods, two books. Say which is better. ⚠ Then answer the harder question: **name a person for whom the other one is right.** If you cannot, say so out loud.'));
out.push(board('The first one is better. The second is not as good.', 'Where the first is quick to fill in, the second is quick to search.'));
out.push(p('**b**  Which compares without ranking? **1** _Both have their merits._  **2** _Where the first is quick to fill in, the second is quick to search._  **3** _The first is better overall._  **4** _The difference is not better and worse but how often you look things up._  **5** _They are much the same really._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say _both have their merits_ does, and what is the test she gives for a comparison that is not a ranking?   **A** it is polite; whether it is fair   **B** it tells nobody anything and is the ranking the writer did not dare to make — and the test is whether you can **name a reader for whom each of the two is right**   **C** it is accurate; whether both are good'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about comparing on more than one dimension at a time?   **2** What does Hiba say about the two grammar books?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.7  Not better and worse, but', [
  ['Ms Huda', 'Mrs Nasser, two things that do the same job.'],
  ['Hiba', 'Two grammar references. One is the big one everybody has, and the other is a thin one from 1986 that I was given by the woman who trained me.'],
  ['Ms Huda', 'Which is better?'],
  ['Hiba', 'The big one. _(a pause)_ Except that I use the thin one about four times as often.'],
  ['Ms Huda', '⚠ **Which is the whole of this cycle in one answer: the one you said was better is not the one you use.** Now say what the difference actually is, and do not say _better_.'],
  ['Hiba', 'Where the big one is complete, the thin one is **findable**. The big one has everything and a page of it takes four minutes to read. The thin one has about a third of the grammar in it and I can find a thing in twenty seconds, standing up, between two lessons.'],
  ['Ms Huda', '**Where X is …, Y is …** — and notice what has happened. **Neither of them is better.** One is right for somebody preparing a lesson on Sunday evening with time, and the other is right for somebody who has ninety seconds between a bell and a door.'],
  ['Omar', 'What is wrong with saying both have their merits?'],
  ['Ms Huda', '⚠ **It tells nobody anything, and it is almost always the ranking the writer did not dare to make.** _Both have their merits_ is the sentence of somebody who has a preference and will not own it. **A reader cannot act on it, and a reader who has met it twice stops trusting the writer\'s judgement about anything.**'],
  ['Dima', 'And the test? There must be one, or everything becomes _it depends_.'],
  ['Ms Huda', '**The test is one question: can you name a reader for whom each of the two is right?** If you can name two readers, you have a comparison. ⚠ **If you can only name one, it _is_ a ranking, and you should say so plainly** — _the second one is worse and I would not buy it_ is a perfectly good sentence and a much better one than _both have their merits_.'],
  ['Jad', 'So _it depends_ is sometimes false.'],
  ['Ms Huda', '**_It depends_ is false whenever only one of the two has a reader**, which is more often than people pretend. Half the comparisons in print are rankings in the clothes of a choice.'],
  ['Mazen', 'And if there are four differences, not one?'],
  ['Ms Huda', '⚠ **Then take them one at a time and name the dimension each time.** _On speed, where X is …, Y is …. On searching, where X is …, Y is …._ **A comparison that moves between dimensions inside one sentence cannot be followed** — the reader does not know whether the second half is answering the first or changing the subject.'],
  ['Lubna', 'How many dimensions in a review?'],
  ['Ms Huda', '**Two, named, and the second one shorter than the first.** Three and the reader is reading a table in prose. ⚠ And choose the two your reader will **act** on and not the two that are easiest to describe — which is the same discipline as 5.5, and the class has met it before.'],
  ['Rim', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **The two halves at the same weight and the same speed**, with the pause in the middle: _where the big one is complete ‖ the thin one is findable._ ⚠ A speaker who leans on the second half has ranked them with their voice, and the listener hears the ranking and not the difference.'],
]));
out.push(sp());
out.push(box('Language box – comparing without ranking', [
  '**The frame.** **_Where X is …, Y is …_** — _where the big one is complete, the thin one is findable._ And the sentence that names what you are doing: **_the difference is not better and worse but how often you look things up._**',
  '⚠ **The test, and it is one question: can you name a reader for whom each of the two is right?** Two readers and you have a comparison. **One reader and it _is_ a ranking** — and then say so plainly, because _the second one is worse and I would not buy it_ is a good sentence and a much better one than _both have their merits_.',
  '⚠ **_Both have their merits_ tells nobody anything and is almost always the ranking the writer did not dare to make.** It is the sentence of somebody who has a preference and will not own it, and a reader who has met it twice stops trusting the writer\'s judgement about anything.',
  '**_It depends_ is false whenever only one of the two has a reader**, which is more often than people pretend. **Half the comparisons in print are rankings in the clothes of a choice.**',
  '**One dimension at a time, and name it.** _On speed, where X is …, Y is …. On searching, where X is …, Y is …._ ⚠ A comparison that moves between dimensions inside one sentence cannot be followed: the reader cannot tell whether the second half answers the first or changes the subject.',
  '**Two dimensions in a review, named, the second shorter than the first.** Three and the reader is reading a table in prose. ⚠ And choose the two your reader will **act** on, not the two that are easiest to describe — which is 5.5 in a new genre.',
  '**And the finding worth keeping from Mrs Nasser.** _The big one is better. Except that I use the thin one about four times as often._ ⚠ **The thing you would call better is often not the thing you use**, and a comparison that cannot explain that gap has not found the dimension that matters.',
  '**One more shape, for the case where you own both.** _I keep both and I use them for different things_ is a verdict and not a refusal to give one — **provided you say which for which, in one clause each.** ⚠ Without that, it is _both have their merits_ with a longer coat on, and the reader who owns neither has been told nothing about which to buy first.',
  '**Pronunciation.** 🔊 **Track 8.8** **The two halves at the same weight and the same speed**, with the pause in the middle: _where the big one is complete ‖ the thin one is findable._ ⚠ A speaker who leans on the second half has ranked them with their voice, and the listener hears the ranking and not the difference.',
  '**Practise:** Compare two things on one named dimension, and name a reader for each. **1** two forms  **2** two tools  **3** two books  **4** two ways of recording something  **5** two things where one is simply worse',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the two things from the card and says which is better. B refuses the ranking and gives the frame on **one named dimension**, then names a reader for each. A says whether both readers are real. ⚠ If only one is, B says the ranking plainly instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(two things)_ __________ and __________. The better one is __________.'],
  ['B', 'On __________: where __________ is __________, __________ is __________.'],
  ['B', 'The first is right for __________. The second is right for __________.'],
  ['A', 'Both readers are **real / not real** — so it is a **comparison / a ranking**.'],
]));
out.push(table(['Card A – the two things', 'Card B – the two things'], [
  ['_The big grammar reference and the thin one from 1986._', '_The one-page form and the two-page form with a lot-number field._'],
  ['_A gate probe and a store probe._', '_A pencil rota board and a printed weekly sheet._'],
  ['_A fault book and a card index._', '_A free-text box and a field with a date in it._'],
  ['_A cheap screwdriver set and an expensive one._', '_A dictionary with examples and one without._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the named dimension and the two readers for each of the eight. Then the count: **in two or three of the eight only one reader can be named**, and those are the rankings — the cheap screwdriver set and the dictionary without examples are usually among them. ⚠ And watch for the pair that moves dimension in mid-sentence: it happens about three times in eight and the listener always loses it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own two things and write the frame on **one** named dimension, then a second dimension in a shorter sentence. Then name a reader for each thing — by **constraint** if you can, which is 8.1.'));
out.push(p('**b**  Swap. Then each of you answer Mrs Nasser\'s question about your partner\'s pair: **which one do they actually use, and is it the one they called better?** ⚠ Where it is not, the gap is the dimension the comparison has missed.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba\'s two things are grammar references: the big one everybody has, and a thin one from 1986 that she was given by the woman who trained her. Asked which is better she said the big one — and then, after a pause, that she uses the thin one about four times as often. Which is the whole of the cycle in one answer: the one you said was better is not the one you use. Asked what the difference actually is, without the word better, she said: where the big one is complete, the thin one is findable. The big one has everything and a page of it takes four minutes to read; the thin one has about a third of the grammar in it and she can find a thing in twenty seconds, standing up, between two lessons. Where X is, Y is — and neither of them is better: one is right for somebody preparing a lesson on Sunday evening with time, and the other for somebody who has ninety seconds between a bell and a door. Omar asked what is wrong with saying both have their merits, and the answer is that it tells nobody anything and is almost always the ranking the writer did not dare to make. Dima asked for the test, because otherwise everything becomes "it depends", and the test is one question: can you name a reader for whom each of the two is right? Two readers and you have a comparison; one reader and it is a ranking, and you should say so plainly — the second one is worse and I would not buy it is a perfectly good sentence and a much better one than both have their merits. And Mazen asked about four differences rather than one: take them one at a time and name the dimension each time, because a comparison that moves between dimensions inside one sentence cannot be followed — the reader cannot tell whether the second half is answering the first or changing the subject. Lubna asked how many dimensions belong in a review, and the answer is two, named, with the second shorter than the first: three and the reader is reading a table in prose. And the two should be the two the reader will act on and not the two that are easiest to describe, which is 5.5 arriving in a new genre. And the finding to keep from the cycle is Hiba\'s own: the big one is better, and she uses the thin one about four times as often — which means the thing you would call better is often not the thing you use, and a comparison that cannot explain that gap has not found the dimension that matters._'));
out.push(p('**Listener task:** write which of your partner\'s two things they actually use, and whether it is the one they called better.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the comparison Hiba writes for the four other teachers on the course. Answer the questions.'));
out.push(model([
  '**TWO GRAMMAR REFERENCES · and which of us each is for** · H. Nasser · 27 November',
  '**For anybody who prepares on a Sunday evening with two hours, the big reference is the one. For anybody who has ninety seconds between a bell and a door, the thin one from 1986 is the one, and nothing else will do.**',
  '**On completeness.** Where the big one is complete, the thin one has about a third of the grammar in it. There are whole structures missing from the thin one — the passive is four lines and the conditionals are a table with no examples under it — **and I am not going to pretend that does not matter.**',
  '**On findability, which is the dimension that decides it for me.** Where the big one takes about four minutes a page, the thin one takes twenty seconds. ⚠ **That is not a comparison of speed; it is a comparison of whether the thing gets opened at all.** I have had the big one for eleven years and I open it about twice a term.',
  '**The difference is not better and worse but _when you are standing up_.** Seated, with time, the big one is a better book by any measure I can think of. **Standing, with a class behind a door, it is not a book at all** — it is a thing I shall look at later and then not look at.',
  '**The thing I would not have predicted.** The thin one is wrong about two things I know of — it calls the present perfect a past tense, and its advice on _used to_ is from 1986 and sounds like it. **I use it anyway, and I correct those two in my head, which I can do because I know they are there.** ⚠ A reader who did not know would be misled twice a term, and that is a real cost and not a quibble.',
  '**Which of us each is for.** Anybody who teaches four hours a week and prepares properly: the big one. Anybody who teaches eighteen hours and prepares between lessons: the thin one, and buy it second-hand, because it has not been printed since 1991. ⚠ **And anybody in a first year: the big one, whatever their timetable** — a teacher who does not yet know which parts of a book to distrust needs one that is right throughout.',
  '**What I would not do, having said all that.** Give the thin one to anybody in their first year. ⚠ **A teacher who does not yet know which parts of a reference book to distrust needs the one that is right throughout**, even if it is opened twice a term — and that is an argument about the reader and not about the books.',
  '**And the one thing I would check.** How many hours a week you teach. **Not the grammar coverage, not the index — the hours**, because everything above follows from the hours.',
]));
out.push(item('1', 'What are the two dimensions, and which decides it for her?'));
out.push(item('2', 'What does she say the findability difference is really a comparison of?'));
out.push(item('3', 'What is wrong with the thin one, and why can she use it anyway?'));
out.push(writers([
  'A comparison without a ranking: **the two verdict sentences, one for each reader** → **the first dimension, with the weaker thing\'s weakness admitted** → **the second dimension, which is the one that decides it** → **_the difference is not better and worse but …_** → **the thing you would not have predicted** → **which reader each is for** → **and the one thing to check**.',
  '**Give each of the two things its own verdict sentence, with its own reader.** ⚠ A comparison with one verdict at the end is a ranking however it is worded; two at the top make the page a pair of explanations and not a competition.',
  '⚠ **Admit the weaker thing\'s weakness on the first dimension and do not soften it.** _The passive is four lines and the conditionals are a table with no examples. I am not going to pretend that does not matter._ A comparison that protects the thing you use reads as loyalty, and loyalty is not evidence.',
  '**Name the dimension that decides it and say why it is not the obvious one.** _That is not a comparison of speed; it is a comparison of whether the thing gets opened at all._ ⚠ A reader who has that sentence can apply the comparison to things you have never seen.',
  '⚠ And print **the thing you would not have predicted**, with a real cost to somebody who is not you. _A reader who did not know would be misled twice a term._ A comparison whose writer\'s choice costs nobody anything has left something out.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the comparison (80 words or more).'));
out.push(p('**______________ and ______________ · and which of us each is for** · ______________   **For anybody who ______________, ______________ is the one. For anybody who ______________, ______________ is the one.**   **On ______________.** Where ______________ is ______________, ______________ is ______________. **And I am not going to pretend ______________.**   **On ______________, which is the dimension that decides it for me.** Where ______________, ______________. ⚠ **That is not a comparison of ______________; it is a comparison of ______________.**   **The difference is not better and worse but ______________.**   **The thing I would not have predicted.** ______________. **______________, and that is a real cost and not a quibble.**   **Which of us each is for.** ______________. ______________.   **And the one thing I would check.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two verdict sentences, one reader each',
  'The weaker thing\'s weakness admitted on the first dimension',
  'The deciding dimension named, with why it is not the obvious one',
  'A real cost to somebody who is not the writer',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _the difference is not better and worse but…_ sentence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full comparison (180 words or more), to the shape in the writer\'s box: two verdicts, two named dimensions, the not-better-and-worse sentence, the unpredicted thing with its cost, and the one check.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: two verdicts with two readers, one dimension at a time, a real cost to somebody else.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your two verdict sentences and let the room name the two readers back to you.** ⚠ Where the room can name only one, the comparison was a ranking and the writer says so plainly. Then ask: **which would you buy first if you could buy only one?** Then the sentence to leave the cycle on, which is Hiba\'s: **the big one is better, and I use the thin one about four times as often.**'));
out.push(hw('Write the comparison (80+ words). Then find **one** comparison of two things — in print, on a forum, anywhere — and decide whether it is a comparison or a ranking in the clothes of a choice. Write down which, and how you can tell.'));

// ===================== 8.5 =====================
out.push(pb());
out.push(h2('8.5  The last line'));
out.push(p('**Function:** ending a review with the sentence a reader will act on   ·   **Grammar:** the test · the threshold · the smallest trial   ·   **Pronunciation:** the last line read slower than the rest'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the last line of your review — the one you would end on. Then your partner says what they would **do** on Monday because of it. ⚠ In most cases they will say _nothing_, and that is the cycle.'));
out.push(board('Overall, I would recommend it.', 'Count how many a week you open. Under five, buy the cheap set.'));
out.push(p('**b**  Which last line could be acted on? **1** _Overall, I would recommend it._  **2** _Count how many you open in a week; under five, buy the cheap one._  **3** _It is well worth considering._  **4** _Borrow one for a day and try capping it in a lift._  **5** _On balance, a good buy._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the last line is **not**, and what did Jad count on the forum?   **A** not short; the number of words   **B** not a summary and not a repetition of the verdict — and Jad counted that posts ending in a test or a figure were acted on, while posts ending _overall I would recommend it_ produced nothing he could measure   **C** not important; the replies'));
out.push(p('**b**  Listen again. **1** What are the three kinds of actionable last line?   **2** What does Ms Huda say the last line must be, besides actionable?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.9  What will they do on Monday?', [
  ['Ms Huda', 'Mr Attar, you have figures for this, which nobody else in the room has. What happens to a review that ends _overall I would recommend it_?'],
  ['Jad', 'Nothing measurable. I went back through forty reviews on the forum — mine and other people\'s — and sorted them by their last line. **The ones ending in a test or a figure got replies saying _I tried it_ or _mine came out at eleven_. The ones ending in a recommendation got agreement, which is not the same thing.**'],
  ['Ms Huda', 'How many of the forty ended in a recommendation?'],
  ['Jad', 'Twenty-six. ⚠ **And of the twenty-six, four produced a reply that showed anybody had done anything. Of the other fourteen, eleven did.**'],
  ['Ms Huda', '**Four of twenty-six against eleven of fourteen**, and that is as close to proof as this class is going to get about anything. ⚠ **The last line is not a summary and not a repetition of the verdict.** It is the thing the reader does next, and if there is nothing for them to do, the review has ended on a courtesy — which is 5.3, and the class has had this lesson before in a different form.'],
  ['Dima', 'There are three kinds that work, in my experience.'],
  ['Ms Huda', 'Name them.'],
  ['Dima', '**The test** — _borrow one for a day and try capping it in a lift._ **The threshold** — _under five a week, buy the cheap set._ And **the smallest trial** — _buy one, not six._'],
  ['Ms Huda', '**And the third is the most under-used.** A reader who is told to buy one instead of six has been given permission to find out cheaply, ⚠ **and a reviewer who says _buy one, not six_ is trusted on everything else in the page**, because nobody selling anything has ever said it.'],
  ['Omar', 'What makes a test a good test?'],
  ['Ms Huda', '**That the reader can do it this week, by themselves, without you.** _Try capping it in a lift_ costs nothing and takes four seconds. ⚠ A test that needs the reviewer\'s help, or a month, or somebody else\'s permission, is not a last line — it is an invitation to correspond.'],
  ['Hiba', 'And the threshold? Mine would be hours a week.'],
  ['Ms Huda', '**Then the number has to be in it.** _Eighteen hours or more: the thin one._ ⚠ A threshold with no number on it is the same sentence as _it depends_, and it is the commonest way a good review ends badly: _if you teach a lot, the thin one might suit you better._ **A lot is not a number.**'],
  ['Mazen', 'Can the last line be the weakness?'],
  ['Ms Huda', 'It can, and it is a strong ending when the weakness is the test: _if you cannot keep the case on the counter, do not buy it._ ⚠ **What the last line must never be is the verdict again.** Said twice, a verdict is a verdict the writer did not trust.'],
  ['Dima', 'There is one more kind and it is the one I ask for most often, which is a **figure the reader can compare themselves against**. _Mine came out at eleven seconds; see what yours does._'],
  ['Ms Huda', '**Which is the test and the threshold in one sentence, and it is the most economical ending there is.** ⚠ It also does something the other three do not: **it tells the reader what counts as a good result**, so they can do the test and know what the answer means. A test with no figure beside it sends somebody off to measure something and then wonder.'],
  ['Rim', 'And aloud?'],
  ['Ms Huda', '🔊 **Slower than the rest, and nothing after it.** ⚠ A review that ends and then adds a sentence of thanks or a general remark has thrown the last line away: whatever is last is the last line, whether you meant it to be or not.'],
]));
out.push(sp());
out.push(box('Language box – the last line', [
  '⚠ **The last line is not a summary and not a repetition of the verdict. It is the thing the reader does next** — and if there is nothing for them to do, the review has ended on a courtesy. _A courtesy at the end invites nothing_, which is 5.3 arriving in a new genre.',
  '**Mr Attar\'s figures, which are as close to proof as this book gets.** Forty forum reviews sorted by last line. **Twenty-six ended in a recommendation and four of those produced a reply showing anybody had done anything. Fourteen ended in a test or a figure, and eleven of those did.**',
  '**The three kinds that work.** **The test** — _borrow one for a day and try capping it in a lift._ **The threshold** — _under five a week, buy the cheap set._ **The smallest trial** — _buy one, not six._',
  '⚠ **The smallest trial is the most under-used and the most trusted.** A reader told to buy one instead of six has been given permission to find out cheaply, **and nobody selling anything has ever said it.**',
  '**What makes a test a good test: the reader can do it this week, by themselves, without you.** _Try capping it in a lift_ costs nothing and takes four seconds. ⚠ A test needing your help, or a month, or somebody\'s permission is not a last line — **it is an invitation to correspond.**',
  '**And a test has to have a result the reader can read off.** _See how long it takes you to find a word_ is a test; _see whether you get on with it_ is not, because there is no moment at which the reader knows the answer. ⚠ The clearest tests are the ones with a **clock, a count or a place** in them, which is the same three things that make a prediction checkable in 7.5.',
  '**A threshold must have a number in it.** _Eighteen hours or more: the thin one._ ⚠ _If you teach a lot, the thin one might suit you better_ is the same sentence as _it depends_: **a lot is not a number**, and this is the commonest way a good review ends badly.',
  '**The last line can be the weakness, and that is a strong ending when the weakness is the test:** _if you cannot keep the case on the counter, do not buy it._ ⚠ **What it must never be is the verdict again** — said twice, a verdict is a verdict the writer did not trust.',
  '**Pronunciation.** 🔊 **Track 8.10** **Slower than the rest, and nothing after it.** ⚠ A review that ends and then adds a sentence of thanks or a general remark has thrown the last line away: **whatever is last is the last line**, whether the writer meant it to be or not.',
  '**Practise:** Three last lines for one thing — a test, a threshold, a smallest trial. **1** a tool  **2** a book  **3** a form  **4** a method  **5** something expensive',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the verdict from the card and ends on the courtesy printed with it. B supplies the three kinds of last line — a test, a threshold and a smallest trial. A chooses one and says what they would do on Monday because of it. B says whether the chosen one needs the reviewer\'s help. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(verdict)_ __________. _(the courtesy)_ Overall, I would recommend it.'],
  ['B', 'Test: __________. Threshold: __________. Smallest trial: __________.'],
  ['A', 'I would take the __________ one, and on Monday I would __________.'],
  ['B', 'That **needs / does not need** me, so it **is / is not** a last line.'],
]));
out.push(table(['Card A – the verdict, ending on a courtesy', 'Card B – the verdict, ending on a courtesy'], [
  ['_The screwdriver set is the one for a busy counter. Overall, I would recommend it._', '_The gate probe is right for a gate. On balance, a good buy._'],
  ['_The thin grammar reference suits a full timetable. It is well worth considering._', '_The two-page form with a lot field is the better form. I would recommend it._'],
  ['_The drawing pen is for anybody who loses pens. A good purchase on the whole._', '_The fault book with a batch column earns its place. Worth a look._'],
  ['_The urgent queue has been an improvement. I would say it is worthwhile._', '_The pencil rota board works for a changing week. Recommended._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three last lines for each of the eight, and which the partner chose. Then the count: **the smallest trial is chosen in only one or two of the eight** and is the one nobody arrives with. ⚠ And about a third of the thresholds offered have **no number in them** — _if you are busy_, _if you use it a lot_ — which is _it depends_ with a full stop.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write three last lines for your own review — a test, a threshold with a number, and a smallest trial. Then choose one and cross the other two out.'));
out.push(p('**b**  Swap. Then each of you say what you would do on Monday because of your partner\'s chosen line, in words. ⚠ If the answer is _think about it_, the line is a courtesy wearing a test\'s clothes.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad has figures for this that nobody else in the room has. He went back through forty reviews on the forum, his own and other people\'s, and sorted them by their last line. The ones ending in a test or a figure got replies saying "I tried it" or "mine came out at eleven"; the ones ending in a recommendation got agreement, which is not the same thing. Twenty-six of the forty ended in a recommendation, and of those twenty-six, four produced a reply showing that anybody had done anything. Of the other fourteen, eleven did. Four of twenty-six against eleven of fourteen, which is as close to proof as this class is going to get about anything. So the last line is not a summary and not a repetition of the verdict: it is the thing the reader does next, and if there is nothing for them to do then the review has ended on a courtesy — which is 5.3 in a new genre. Dima named the three kinds that work: the test, borrow one for a day and try capping it in a lift; the threshold, under five a week buy the cheap set; and the smallest trial, buy one and not six. And the third is the most under-used, because a reader told to buy one instead of six has been given permission to find out cheaply, and nobody selling anything has ever said it. Omar asked what makes a test a good test, and the answer is that the reader can do it this week, by themselves, without you: a test that needs the reviewer\'s help, or a month, or somebody else\'s permission is not a last line but an invitation to correspond. And Hiba asked about thresholds, and the number has to be in it, because a lot is not a number: a threshold with no figure on it is the same sentence as it depends, and it is the commonest way a good review ends badly. Mazen asked whether the last line can be the weakness, and it can, and it is a strong ending when the weakness is the test — if you cannot keep the case on the counter, do not buy it. What the last line must never be is the verdict again, because said twice a verdict is a verdict the writer did not trust. And the three kinds to have by heart are the test, the threshold with a number, and the smallest trial — of which the smallest trial is the most under-used and the most trusted, because a reader told to buy one instead of six has been given permission to find out cheaply, and nobody selling anything has ever said it._'));
out.push(p('**Listener task:** write your partner\'s chosen last line and what you would do on Monday.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the post Jad writes about last lines, with his figures in it. Answer the questions.'));
out.push(model([
  '**FORTY REVIEWS, SORTED BY THEIR LAST LINE** · J. Attar · 28 November',
  '**For anybody who writes reviews that nobody acts on, this post is the one piece of evidence I have. For anybody who writes reviews nobody reads at all, it is the wrong problem and 5.1 is the cycle you want.**',
  '**What I counted.** Forty reviews on the forum between March and November — nineteen of mine and twenty-one by five other people. I sorted them by **last line only** and then counted the replies that showed somebody had **done** something: _I tried it_, _mine came out at eleven_, _I borrowed one_.',
  '**The figures.** Twenty-six ended in a recommendation — _overall I would recommend it_, _a good buy_, _worth a look_. **Four of the twenty-six produced a reply of that kind.** Fourteen ended in a test, a threshold or a smallest trial. **Eleven of the fourteen did.**',
  '**What I am not claiming.** That the last line caused it. ⚠ **The reviews ending in a test are probably better reviews throughout**, and I cannot separate the two things with forty posts. **What I can say is that the two groups are not close**, and that nothing else I sorted them by — length, author, subject — produced a difference at all.',
  '**The thing I did not expect.** The three posts with the **smallest trial** as their last line — _buy one, not six_ — produced seven replies between them, which is the highest rate of any group I made. **I have written nineteen reviews and I have never once used it.**',
  '**And the line of mine that produced nothing, which I am printing because it is mine.** _"All in all, a sound piece of equipment that I think most people would be happy with."_ Sixteen words, four months ago, no replies. ⚠ **I wrote it to be fair, and what it actually was is a sentence with nobody in it.** _Most people_ is the emptiest phrase in the sentence and it is the one I thought was doing the work.',
  '**What I have changed since Sunday, in case anybody wants to count their own.** Every review I have posted this week ends in a threshold with a number in it, and I have written the number down each time before writing the sentence. ⚠ **Three posts, eleven replies, and six of those eleven contain a figure of somebody else\'s** — which is a smaller sample than forty and is pointing the same way.',
  '**What to do with this, and it is one thing.** Before you post, read your last line and ask what the reader does on Monday. **If the answer is _agree with you_, write a different line.**',
]));
out.push(item('1', 'What exactly did he sort the forty reviews by, and what did he count?'));
out.push(item('2', 'What is he not claiming, and what can he say?'));
out.push(item('3', 'What did he not expect, and what does he say about his own line?'));
out.push(writers([
  'A page with figures about writing: **the two verdict sentences** → **what you counted, and what counted as a result** → **the figures, in two groups** → **what you are not claiming, and what you can say** → **the thing you did not expect** → **your own worst example, printed** → **and the one thing to do about it**.',
  '**Say what counted as a result before you give the figures.** _Replies that showed somebody had done something: I tried it, mine came out at eleven._ ⚠ A figure whose criterion arrives afterwards can be argued with for ever; one whose criterion comes first can only be checked.',
  '⚠ **Refuse the causal claim and say why you cannot make it.** _The reviews ending in a test are probably better reviews throughout, and I cannot separate the two things with forty posts._ That paragraph makes the figures worth printing, and it is 7.2 and 7.3 in a page that is not about causes.',
  '**Print your own worst example and name it as yours.** _All in all, a sound piece of equipment that I think most people would be happy with. Sixteen words, four months ago, no replies._ ⚠ A page about other people\'s bad endings is a complaint; the same page with the writer\'s own is a finding.',
  '⚠ And **end on the one thing to do**, which in a page about last lines had better be a good last line. _Read your last line and ask what the reader does on Monday. If the answer is agree with you, write a different line._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with figures about your own writing (80 words or more).'));
out.push(p('**______ ______________, sorted by ______________** · ______________ · ______________   **For anybody who ______________, this is ______________. For anybody who ______________, ______________.**   **What I counted.** ______________. I sorted them by ______________ and counted ______________.   **The figures.** ______ ended in ______________. **______ of the ______ produced ______________.** ______ ended in ______________. **______ of the ______ did.**   **What I am not claiming.** ______________. ⚠ **What I can say is ______________.**   **The thing I did not expect.** ______________.   **And my own worst example.** _"______________"_ ______ words, ______________, ______________.   **What to do with this, and it is one thing.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What counted as a result, stated before the figures',
  'Two groups, with a figure for each',
  'The causal claim refused, with the reason',
  'The writer\'s own worst example, printed and named as theirs',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their own worst last line, from before this cycle.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the criterion before the figures, the two groups, the refused causal claim, your own worst example, and the one thing to do.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the criterion before the figures, the causal claim refused, the writer\'s own worst example printed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your chosen last line, slower than the rest, and then say nothing.** ⚠ The room\'s only job is to say what they would do on Monday. Then the arithmetic to leave the cycle on, which is Jad\'s: **four of twenty-six against eleven of fourteen** — and the three smallest-trial endings that produced seven replies between them.'));
out.push(hw('Write the page (80+ words). Then take the last thing you wrote that recommended anything — a note, a message, a review — and write its last line down. ⚠ Then write what the reader could have done on Monday because of it.'));

// ===================== 8.6 =====================
out.push(h2('8.6  The review, to the shape'));
out.push(p('**Function:** writing the review to the examination shape   ·   **Grammar:** a verdict · a reader · a weakness · a last line, in 180–220 words   ·   **Pronunciation:** reading a review aloud against a clock'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a watch. **Four sentences in forty seconds**: the verdict with its reader, the detail that decided it, the weakness in its strongest form, and the last line. Then stop. ⚠ Nobody manages it the first time, and the four sentences are the whole of the examination task.'));
out.push(board('There are many things to say about this book.', 'Four sentences: reader, detail, weakness, last line.'));
out.push(p('**b**  Which of the four moves is missing? **1** _For anybody who reads on a bus, this is the one. The print is large. Overall, recommended._  **2** _The index is thin. I would still buy it. Borrow a copy and look up one word._  **3** _For anybody learning alone, this is the one. The answers are at the back with explanations. Buy the first volume only._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the four moves are worth in the examination, and what does Dima say about the length?   **A** nothing; it should be longer   **B** they are the task — the examiner is marking content, communicative achievement, organisation and language, and the four moves answer the first three; and Dima says 180 to 220 words is about four sentences a move and no room for an introduction   **C** half the marks; 300 words'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about the introduction?   **2** What does Dima say she can tell from the first line of a review?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.11  Four moves and no introduction', [
  ['Ms Huda', 'Forty seconds, four sentences. Mrs Khoury, you first, and the class times you.'],
  ['Dima', 'For anybody who reads standing up on a bus, this is the one — the print is large enough to read at arm\'s length. What decided it was that the glossary is at the front and not the back. The binding is poor and mine came apart in a month. Borrow a copy, open it at the glossary, and see how long it takes you to find a word.'],
  ['Ms Huda', '**Thirty-one seconds, four moves, and a complete review.** Now the examination arithmetic, because this is a Writing Part 2 task and the shape is worth marks. ⚠ **A hundred and eighty to two hundred and twenty words is about four sentences a move.** Four moves, four sentences each, and the thing is written.'],
  ['Omar', 'And an introduction?'],
  ['Ms Huda', '**There is no room for one and no reason for one.** ⚠ _In this review I am going to look at…_ is twelve words that tell the examiner you have read the instructions, **and the examiner wrote them.** The first line is the verdict with its reader, and it is also the thing that makes the examiner put you in a band in the first four seconds.'],
  ['Dima', 'I can tell from the first line whether a review is going to be any good, and I am right about it nine times in ten.'],
  ['Ms Huda', 'Say what you are reading for.'],
  ['Dima', '⚠ **Whether there is a person in it.** _For anybody who reads on a bus_ has a person in it. _This is an excellent book which I enjoyed very much_ has nobody in it but the writer, and in ten years I have never once read on and been surprised.'],
  ['Hiba', 'What are the four things the examiner marks?'],
  ['Ms Huda', '**Content, communicative achievement, organisation and language.** ⚠ The four moves answer the first three almost entirely: **content** is the verdict, the detail and the weakness; **communicative achievement** is whether it reads as a review to a reader; **organisation** is the order of the four. **Language is the only one you have to do separately**, and it is the one the class has been doing since Unit 1.'],
  ['Mazen', 'So the order is fixed?'],
  ['Ms Huda', 'The order is **verdict, detail, weakness, last line**, and the only move with any freedom in it is the weakness, which can go third or can be folded into the detail. ⚠ **What cannot move is the verdict**: it is first, because a reader who does not know what you think has no way of reading the detail.'],
  ['Lubna', 'And the register? A review of a book is not a letter to a depot.'],
  ['Ms Huda', '**One step down from a letter and two up from speech.** Contractions are acceptable in the examination review and nowhere else in this book — ⚠ and I would still not use them, because a review that sounds written is read more slowly, and a review read slowly is marked more generously.'],
  ['Jad', 'What goes wrong under time, in your experience? I have forty minutes and I always use them.'],
  ['Dima', 'The first line goes wrong. People write their way into the review instead of starting it — two sentences of scene-setting, and then the verdict in the third. ⚠ **Under time, write the verdict first even if you cross it out afterwards**, because you will not cross it out: you will find that the rest of the page follows from it.'],
  ['Ms Huda', '**And the one minute to keep back.** Four minutes for the four moves in note form, thirty minutes to write, and ⚠ **one minute at the end to read the last line and ask what the reader does on Monday** — which is 8.5, and it is the minute candidates give away.'],
  ['Rim', 'And reading it aloud against a clock?'],
  ['Ms Huda', '🔊 **Read your own review aloud at the speed you would read it to somebody who had asked.** ⚠ Two hundred words takes about seventy seconds. **If it takes you more than ninety, the sentences are too long for the genre**, and in a review that costs you the organisation mark before anybody reads the content.'],
]));
out.push(sp());
out.push(box('Language box – the review to the shape, and this unit\'s two declared sets', [
  '**The four moves, in order.** **1 The verdict, with its reader** _(8.1)_. **2 The one detail that decided it** _(8.2)_. **3 The weakness, in its strongest form** _(8.3)_. **4 The last line the reader will act on** _(8.5)_. ⚠ **The verdict cannot move**: a reader who does not know what you think has no way of reading the detail.',
  '**The arithmetic of the examination task.** **180–220 words is about four sentences a move.** Four moves, four sentences each, and the thing is written. ⚠ **There is no room for an introduction and no reason for one** — _in this review I am going to look at…_ is twelve words telling the examiner you have read instructions **the examiner wrote.**',
  '**What the examiner marks: content · communicative achievement · organisation · language.** The four moves answer the first three almost entirely. ⚠ **Language is the only one you have to do separately**, and it is what the class has been doing since Unit 1.',
  '**And Mrs Khoury\'s first-line test, which she is right about nine times in ten: _is there a person in it?_** _For anybody who reads on a bus_ has a person in it. _This is an excellent book which I enjoyed very much_ has nobody in it but the writer.',
  '**Two things the examination task does that the real genre does not.** It **tells you the readership** — _an English-language magazine_ — so the register is fixed before you start; and it **lists its requirements in the announcement**, which means the announcement is the content mark. ⚠ **Underline the requirements in the question and tick them off in the margin before you read your own review back**: a candidate who misses one of four named requirements cannot reach the top band, however good the English is.',
  '**Register: one step down from a letter and two up from speech.** Contractions are acceptable in an examination review and nowhere else in this book. ⚠ And they are still not worth using: **a review that sounds written is read more slowly, and a review read slowly is marked more generously.**',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _live up to · turn out · put up with · make up for · do without · fall short of · win over · warm to · stack up against · get round · pay off · set against_.',
  '**This unit\'s word-formation set** _(Reading Part 3 in 8.7 is built on it)_: _judge → **judgement** · weak → **weakness** · strong → **strength** · durable → **durability** · value → **invaluable** · improve → **improvement** · disappoint → **disappointment** · compare → **comparison** · satisfy → **satisfaction**._',
  '**Pronunciation.** 🔊 **Track 8.12** Read your own review aloud at the speed you would read it to somebody who had asked for it. **Two hundred words takes about seventy seconds.** ⚠ More than ninety and the sentences are too long for the genre — **which costs the organisation mark before anybody has read the content.**',
  '**Practise:** Four sentences in forty seconds, on each of these. **1** a book  **2** a place to eat  **3** a course  **4** a tool  **5** something you were disappointed by',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **with a watch**. A has forty seconds and four sentences on the subject from the card: verdict with reader, detail, weakness, last line. B times it and then says which move was weakest. A does it again on the same subject in thirty seconds. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(1 verdict + reader)_ For anybody who __________, this is __________.'],
  ['A', '_(2 detail)_ What decided it was __________.'],
  ['A', '_(3 weakness)_ __________.'],
  ['A', '_(4 last line)_ __________.'],
  ['B', '_(time: ______ seconds)_ The weakest move was __________, because __________.'],
]));
out.push(table(['Card A – the subject', 'Card B – the subject'], [
  ['_A book you have used for work_', '_A place near your work where people eat_'],
  ['_A course or a class you have been on_', '_A tool you use every day_'],
  ['_A shop you send people to_', '_A website or an application you use_'],
  ['_Something you were disappointed by_', '_Something cheap that turned out well_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed, the class marking the four moves. **Listener task:** which move was missing or weakest in each of the eight. Then the count: **the last line is the weakest move in five or six of the eight** and the weakness is second. ⚠ And the finding about speed: the second attempt at thirty seconds is better than the first at forty in almost every case, because the introduction goes.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the four moves for the subject you will use in 8.7, in four sentences, and count the words. ⚠ Then multiply by four: if your four sentences come to ninety words, your review will come to three hundred and sixty, and the task allows two hundred and twenty.'));
out.push(p('**b**  Swap. Then each of you read your partner\'s four sentences aloud and time them. **Over twenty-five seconds for four sentences means the sentences are too long for the genre.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima went first and took thirty-one seconds for four moves and a complete review: for anybody who reads standing up on a bus this is the one, because the print is large enough to read at arm\'s length; what decided it was that the glossary is at the front and not the back; the binding is poor and hers came apart in a month; and borrow a copy, open it at the glossary, and see how long it takes you to find a word. Then the examination arithmetic, because this is a Writing Part 2 task and the shape is worth marks: a hundred and eighty to two hundred and twenty words is about four sentences a move, so four moves of four sentences each and the thing is written. Omar asked about an introduction, and there is no room for one and no reason for one — "in this review I am going to look at" is twelve words that tell the examiner you have read the instructions, and the examiner wrote them. Dima said she can tell from the first line whether a review will be any good and is right about nine times in ten, and what she is reading for is whether there is a person in it: "for anybody who reads on a bus" has a person in it, and "this is an excellent book which I enjoyed very much" has nobody in it but the writer. Hiba asked what the examiner marks, and it is content, communicative achievement, organisation and language — and the four moves answer the first three almost entirely, which leaves language as the only one to do separately. And the order is fixed: verdict, detail, weakness, last line, with the verdict first because a reader who does not know what you think has no way of reading the detail. Lubna asked about register, and the answer is one step down from a letter and two up from speech: contractions are acceptable in an examination review and nowhere else in this book, and they are still not worth using, because a review that sounds written is read more slowly and a review read slowly is marked more generously. And the figure to take away is the clock: two hundred words read aloud takes about seventy seconds, and over ninety means the sentences are too long for the genre. Dima\'s own attempt took thirty-one seconds for four moves and a complete review, which the class timed, and the second attempt at thirty seconds was better than the first at forty in almost every pair afterwards — because what goes, under pressure, is the introduction._'));
out.push(p('**Listener task:** write your partner\'s four sentences in figures — the word count of each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the review Dima writes for the magazine, to the examination shape. Answer the questions.'));
out.push(model([
  '**A DICTIONARY FOR PEOPLE WHO ARE STANDING UP** · D. Khoury · 29 November',
  '**For anybody who looks words up while doing something else — on a bus, at a counter, between two lessons — this is the dictionary to own. For anybody who sits down with a dictionary and reads around the entry, it is a poor buy and the big one is better.**',
  'What decided it was the glossary of about four hundred common confusions at the **front**, before the A, with the pairs people actually look up facing each other on one page: _effect_ and _affect_, _principal_ and _principle_, _its_ and _it\'s_. ⚠ **I have timed myself at eleven seconds from closed book to answer**, standing, holding something in the other hand. In the big dictionary the same question takes me about fifty, because the two words are a hundred pages apart and I have to decide which to look up first.',
  '**The binding is poor.** Mine came apart along the spine inside a month and it now lives in a rubber band, which is not a small complaint about a book you carry. ⚠ **Its weakness is real and I would still buy it**, and not because the price makes up for it — **because the glossary is at the front, and that is a decision about the book and not about the paper it is printed on.**',
  'The entries themselves are shorter than the big dictionary\'s and there are no example sentences in about a third of them, which will matter to anybody who is learning the word rather than checking it. **I am not claiming it is a better dictionary. I am claiming it is the better one to be holding when you have one hand and eleven seconds.**',
  'It is also about a third of the price of the big dictionary, and a third of the weight, which I mention because both of those are the reasons people give for buying it and **neither of them is a reason**: a cheap light book you do not open is worse value than an expensive heavy one you do. ⚠ **I have owned the big one for eleven years and opened it about twice a term**, and I have never thought of that as a waste of money until I wrote this sentence.',
  '**Borrow somebody\'s copy, stand up, and look up _principal_ against the clock.** If it takes you under fifteen seconds, buy it; if you find yourself sitting down to read the entry, buy the other one.',
]));
out.push(item('1', 'Who is the dictionary for, and who is it not for?'));
out.push(item('2', 'What are the two figures she gives for looking a word up?'));
out.push(item('3', 'What is the last line, and what are its two outcomes?'));
out.push(writers([
  'The review to the examination shape, in four moves and about 200 words: **the verdict with its reader, and the reader it is not for** → **the one detail, with a figure** → **the weakness, in its strongest form, with the separation** → **what you are not claiming** → **and the last line, which is a test with a threshold in it**.',
  '**Put a figure inside the detail.** _Eleven seconds from closed book to answer, against about fifty in the big one._ ⚠ A detail with a figure in it does two moves at once — the decisive detail **and** the evidence — and in a 200-word task that economy is worth more than any sentence you could add.',
  '⚠ **Refuse the easy separation.** _And not because the price makes up for it._ The reader has that sentence ready; refusing it by name costs one clause and buys the whole paragraph, which is 8.3 and is the move most candidates leave out under time.',
  '**Keep _what I am not claiming_ to one sentence under examination conditions.** _I am not claiming it is a better dictionary. I am claiming it is the better one to be holding when you have one hand and eleven seconds._ The sentence an examiner underlines.',
  '⚠ And make the last line **a test with a threshold inside it**: _under fifteen seconds, buy it; if you find yourself sitting down, buy the other one._ **Two outcomes, both named**, so the reader cannot do the test and still not know what to do.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the review to the shape (80 words or more now, and the full 180–220 in Stage 7).'));
out.push(p('**______________** · ______________ · ______________   **For anybody who ______________, this is ______________. For anybody who ______________, ______________.**   What decided it was ______________, with ______________. ⚠ **I have ______________ at ______________**, against ______________.   **______________** _(the weakness, strongest form)_. ⚠ **Its weakness is real and I would still ______________**, and not because ______________ — **because ______________.**   ______________ will matter to anybody who ______________. **I am not claiming ______________. I am claiming ______________.**   **______________** _(the last line: a test with a threshold)_. If ______________, ______________; if ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The four moves, in order, with no introduction',
  'A figure inside the decisive detail',
  'The weakness with its separation, and the easy reason refused',
  'A last line with a test and two named outcomes',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first line only, and the room says whether there is a person in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full review (**180–220 words**, to the examination length) in the four moves, and write the word count at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the four moves in order with no introduction, a figure inside the detail, a last line with two named outcomes.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your review aloud and have your partner time it.** ⚠ Two hundred words should take about seventy seconds; over ninety and the sentences are too long for the genre. Then the test to leave the cycle on, which is Dima\'s: **is there a person in the first line?** — right nine times in ten, in ten years.'));
out.push(hw('Write the review (180–220 words) and count the words. Then read your first line to somebody who is not in this class and ask them who the review is for. ⚠ If they cannot say, the first move has failed, whatever the rest of the page does.'));

// ===================== 8.7 =====================
out.push(pb());
out.push(h2('8.7  Review & Mediate: Two reviews that disagree'));
out.push(p('**Function:** mediating between two reviews of the same thing   ·   **Recycling:** Unit 8   ·   **Exam practice:** B2 First Reading and Use of English Part 3 · Writing Part 2 (a review) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** To anybody who reads at a gate, this is the one.  **2** Where the big one is complete, the thin one being findable.  **3** The difference is not better and worse than how often you look things up.  **4** What decided it were the hold button.  **5** The cheap set did not lived up to the price.  **6** Borrow one and see how it stands up against yours.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two reviews as they were sent, and the one line neither of them contains.'));
out.push(box(null, [
  '**TWO REVIEWS OF ONE PROBE** _(sent to eleven depots, March and September)_',
  '**From the first depot, March.** _"An excellent instrument. Accurate to a tenth, well made, and the hold button is a real improvement on anything we have had. We have ordered two more."_',
  '**From the second depot, September.** _"Useless for our purposes. It takes the best part of a minute to settle and the reading drifts while you wait. We have put it in a drawer and gone back to the old one."_',
  '⚠ **Both reviews are accurate. Neither contains a reader.**',
  '**What each depot does with it.** The first: pushes the probe into a pallet at a gate and stands there while the driver signs. The second: walks a cold store with eleven readings to take and the door open.',
  '**And the line neither review has.** _For anybody who …_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say happens to the disagreement when the readers are named, and what is the one case in which two reviews really do contradict each other?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.13  The disagreement that is not one', [
  ['Ms Huda', 'Two reviews of one instrument, six months apart, and they contradict each other flatly. Mr Darwish, which of them is wrong?'],
  ['Omar', 'Neither. We did this in 8.1 — they are different readers.'],
  ['Ms Huda', '**Then do the mediation, which is three moves and is not the mediation of 7.7.** One: quote both verdicts. Two: name what **neither** review contains. Three — and this is the move of this unit — **supply the missing first line of each review** and read them again.'],
  ['Omar', '_"For anybody who takes a reading at a gate while a driver is signing, this is an excellent instrument."_ And: _"For anybody walking a cold store with eleven readings to take, it is useless."_'],
  ['Ms Huda', '⚠ **And now read them one after the other and tell me what has happened to the disagreement.**'],
  ['Omar', 'There is not one. They agree. They are two sentences about two different jobs.'],
  ['Ms Huda', '**Which is the finding of the cycle and it is worth more than it looks: most disagreements between two honest reviews are not disagreements at all.** They are two verdicts with the readers left out, and **the readers were the only things that differed.**'],
  ['Dima', 'I see about two of those a month and I used to write to both reviewers.'],
  ['Ms Huda', 'And now?'],
  ['Dima', 'Now I write to one of them and ask what they were doing with it. ⚠ **Nobody has ever been offended by that question**, and it has never once failed to explain the contradiction.'],
  ['Hiba', 'But there must be real disagreements.'],
  ['Ms Huda', '**There are, and the test for them is exact. Two reviews really contradict each other only when both reviewers used the thing for the same task, under the same conditions, and still disagree.** ⚠ That is rarer than anybody expects — **and when it happens, the two reviews together are worth more than either alone**, because the disagreement has to rest on something neither of them has thought to mention.'],
  ['Jad', 'Such as?'],
  ['Ms Huda', '**Such as a thing that varies between units of the same product**, which is Unit 7: one reviewer has a good one and the other has a bad one, and neither knows that is possible. Or a skill nobody mentioned. ⚠ **A real contradiction is a mechanism nobody has looked for yet.**'],
  ['Mazen', 'And the mediator does not decide which review is right?'],
  ['Ms Huda', '**There is nothing to decide, and that is the fourth time this book has said so**, in four different ways. In 4.7 both parties had overclaimed. In 6.7 the record was silent. In 7.7 the document was defective. ⚠ **Here both reviews are true and both are incomplete, and what is missing is the same thing in each: six words at the front.**'],
  ['Lubna', 'Which is 5.1.'],
  ['Ms Huda', '**Which is 5.1, and it is the last time this book will say it.** The first six words decide what a sentence is about — and in a review they decide **whose** sentence it is.'],
  ['Rim', 'And the mediation aloud?'],
  ['Ms Huda', '🔊 **Read the two original verdicts at the same speed, then the two repaired ones at the same speed.** ⚠ The whole effect is in hearing the second pair, and a mediator who reads the repaired version of their own side more warmly has destroyed it: the room then hears a preference instead of two sentences that agree.'],
]));
out.push(sp());
out.push(box('Language box – two reviews that disagree', [
  '**The three moves, and they are not the moves of 7.7.** **1** Quote both verdicts. **2** Name what **neither** review contains. **3** **Supply the missing first line of each** — _for anybody who …_ — and read them again.',
  '⚠ **And then the finding: most disagreements between two honest reviews are not disagreements at all.** They are two verdicts with the readers left out, and **the readers were the only things that differed.** Read the two repaired sentences one after the other and the contradiction is gone.',
  '**The test for a real contradiction, and it is exact.** Two reviews contradict each other **only when both reviewers used the thing for the same task, under the same conditions, and still disagree.** That is rarer than anybody expects.',
  '**And when it does happen, the two reviews together are worth more than either alone** — because the disagreement has to rest on something **neither of them has thought to mention**: a thing that varies between units of the same product, or a skill nobody named. ⚠ **A real contradiction is a mechanism nobody has looked for yet**, which is Unit 7 arriving inside Unit 8.',
  '**Mrs Khoury\'s one question, which has never failed.** _What were you doing with it?_ ⚠ **Nobody has ever been offended by it**, and it has never once failed to explain a contradiction between two reviews in her own pages.',
  '**The fourth mediation of the course, and the fourth kind.** **4.7** both parties had overclaimed. **6.7** the record was silent. **7.7** the document was defective. ⚠ **8.7: both reviews are true and both are incomplete, and what is missing is the same thing in each — six words at the front.**',
  '**Which is 5.1, and the last time this book says it.** The first six words decide what a sentence is about; **in a review they decide whose sentence it is.**',
  '**And the practical use of all this, which is not mediation at all.** When two reviews of something you are thinking of buying contradict each other, **do not average them and do not pick the one you like**: ask what each reviewer was doing with the thing, and then decide which of the two is doing what **you** will be doing. ⚠ In most cases one of the two is describing your job and the other is not, **and the useless review is the one you would have agreed with.**',
  '**One warning about repairing somebody else\'s review.** You are supplying a first line they did not write, from evidence about what they were doing — which is an inference, and 7.1 applies to it. ⚠ **Mark it as one:** _on the face of it, the second depot is reading air in a store_ is honest; _the second depot is reading air in a store_ is a sentence you cannot support, and if you are wrong the whole mediation collapses.',
  '**Pronunciation.** 🔊 **Track 8.14** Read the two original verdicts at the same speed, then the two repaired ones at the same speed. ⚠ The whole effect is in hearing the second pair — **and a mediator who reads their own side\'s repaired version more warmly has destroyed it**, because the room then hears a preference instead of two sentences that agree.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the pairs below and does **not** show it. A reads the two reviews and what each reviewer was doing with the thing. B makes the three moves and then says whether this is a real contradiction. ⚠ **One of the two pairs is a real one**, and B must say which and name what neither reviewer has mentioned. Change roles with the other pair.'));
out.push(table(['Pair A – the dictionary', 'Pair B – the screwdriver set'], [
  ['_Review one: "indispensable — I use it every day."_', '_Review one: "the bits last for ever; four hundred handsets and still biting."_'],
  ['_Review two: "thin and disappointing; a third of the words I wanted were not in it."_', '_Review two: "two bits rounded off in the first fortnight and the set is useless to me."_'],
  ['_What each was doing: one checks spellings at a counter; one was reading a technical article._', '_What each was doing: both open the same handsets, about twenty a week, at a counter._'],
  ['_Already in existence: the publisher\'s word count, printed on the back._', '_Already in existence: nothing — and that is the point._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair, and which pair is the real contradiction. ⚠ **Pair B is the real one**: both used the set for the same task in the same conditions, so one of them has a different set — a batch, a bad bit, a counterfeit — and **neither mentions which shop they bought it from.** About half the pairs repair Pair B instead of recognising it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find somebody in the room whose verdict on **your** thing would differ from yours, or whose thing you have used. Write both verdicts, supply both missing first lines, and read the pair aloud. ⚠ **Then apply the test:** if you were doing the same job in the same conditions and still disagree, stop repairing and start looking for what neither of you has mentioned.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what happened to the disagreement when the readers were named:  _Two reviews of one instrument, six months apart, contradicting each other flatly. Asked which of them is wrong, Omar said neither — they are different readers, which the class had done in 8.1. So he did the mediation, which is three moves and not the moves of 7.7: quote both verdicts, name what neither review contains, and then supply the missing first line of each and read them again. For anybody who takes a reading at a gate while a driver is signing, this is an excellent instrument. For anybody walking a cold store with eleven readings to take, it is useless. And read one after the other, there is no disagreement at all: they agree, and they are two sentences about two different jobs. Which is the finding of the cycle and is worth more than it looks — most disagreements between two honest reviews are not disagreements, but two verdicts with the readers left out, and the readers were the only things that differed. Dima said she sees about two a month and used to write to both reviewers; now she writes to one and asks what they were doing with it, and nobody has ever been offended by that question or failed to explain the contradiction. Hiba said there must be real disagreements, and there are, and the test is exact: two reviews really contradict each other only when both reviewers used the thing for the same task, under the same conditions, and still disagree. That is rarer than anybody expects, and when it happens the two reviews together are worth more than either alone, because the disagreement has to rest on something neither of them has thought to mention — a thing that varies between units of the same product, or a skill nobody named. A real contradiction is a mechanism nobody has looked for yet — a thing that varies between units of the same product, or a skill nobody named. And Mazen asked whether the mediator decides which review is right, and there is nothing to decide, which is the fourth time this book has said so in four different ways: in 4.7 both parties had overclaimed, in 6.7 the record was silent, in 7.7 the document was defective, and here both reviews are true and both are incomplete, and what is missing is the same thing in each — six words at the front, which is 5.1. Lubna said so, and Ms Huda said it is the last time this book will make the point: the first six words decide what a sentence is about, and in a review they decide whose sentence it is._'));
out.push(p('**Listener task:** write the two repaired first lines from your own pair, and whether the contradiction survived them.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 3)', 7));
out.push(p('Read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (**0**).'));
out.push(box(null, [
  '**WHY TWO HONEST REVIEWS DISAGREE**',
  'Anybody who has read two reviews of the same thing and found them flatly opposed will have wondered which reviewer to trust. The question is usually the wrong one. Before dismissing either **(0)** _**judgement**_, it is worth asking what each reviewer was doing with the thing — because a **(1)** ______________ between two reviews is only possible once both have named their reader.   **JUDGE** · **COMPARE**',
  'Consider a probe that takes forty seconds to settle. For a reviewer standing at a gate while a driver signs, that delay is not a **(2)** ______________ at all. For a reviewer walking a cold store with eleven readings to take, it is the only thing about the instrument that matters, and no **(3)** ______________ elsewhere in the design makes up for it.   **WEAK** · **STRONG**',
  'Neither reviewer is careless. Both have given a verdict with no reader in it, and a verdict with no reader cannot be compared with anything. The same is true of **(4)** ______________: a binding that fails in a month is a scandal in a book you carry about and an irrelevance in one that stays on a shelf.   **DURABLE**',
  'There is one case in which the **(5)** ______________ of one reviewer really does contradict the enthusiasm of another, and it is worth knowing: where both have used the thing for the same task, under the same conditions, and still disagree. That is rare, and when it happens the two reviews together give a **(6)** ______________ that neither gives alone, because the disagreement must rest on something neither has thought to mention.   **DISAPPOINT** · **SATISFY**',
  'For the rest, the **(7)** ______________ needed is not in the reviewing at all but in the first line. A reviewer who names the reader will find that their **(8)** ______________ with other reviewers disappears, and that what looked like a contradiction was two people describing two jobs.   **IMPROVE** · **AGREE**',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of two reviews (80 words or more).'));
out.push(p('**TWO REVIEWS OF ONE ______________** · ______________   **What ______________ says.** "______________"   **What ______________ says.** "______________"   **What neither review contains.** A reader. ______________.   **What each of them was doing with it.** ______________. ______________.   **The two reviews, with their first lines supplied.** **"For anybody who ______________, ______________."** **"For anybody who ______________, ______________."**   **And read one after the other, ______________.**   **The test, applied.** They were doing **the same / different** jobs in **the same / different** conditions, so this **is / is not** a real contradiction. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both verdicts quoted as they were sent',
  'What neither review contains, named',
  'Both missing first lines supplied, in the same frame',
  'The test applied, with the answer said plainly',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a review)', 10));
out.push(box(null, [
  '⚠ **The examination review, and the shape is 8.6: verdict with reader · one detail · weakness · last line.** 180–220 words, no introduction, and the first line decides the band.',
  'You see this announcement in an English-language magazine.',
  '_"**Reviews wanted.** Tell us about something you use for your work or your studies — a tool, a book, an application, a place. Say **who it is for** and **who it is not for**, say what decided it for you, and say what is wrong with it. We will print the most useful reviews."_',
  'Write your **review** in **180–220 words**.',
  '⚠ **Note what the announcement asks for**, because an examination task that names its requirements is marking them: **who it is for, who it is not for, what decided it, and what is wrong with it.** All four, or the content mark goes.',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  ___ anybody who takes a reading at a gate, this is the probe to buy.   a) For   b) To   c) With',
  '2  Where the big one is complete, the thin one ___ findable.   a) being   b) is   c) to be',
  '3  The difference is not better and worse ___ how often you look things up.   a) than   b) as   c) but',
  '4  What decided it ___ the hold button, and nothing else did.   a) were   b) was   c) have been',
  '5  The cheap set did not ___ up to the price.   a) lived   b) living   c) live',
  '6  It is slow to settle, but the hold button makes ___ for it.   a) over   b) out   c) up',
  '7  Borrow one and see how it ___ up against the set you have.   a) stacks   b) sets   c) puts',
  '8  The ___ of two reviews is only possible once both have named a reader.   a) compare   b) comparison   c) comparative',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 4 style – multiple choice).** 🔊 **Track 8.15** You will hear an interview with a woman who sends consignments between depots. For questions **1–7**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**1**  What does she say was wrong with her recommendation in March?   **A** the probe itself   **B** that it had no reader in it   **C** the price she quoted',
  '**2**  Why is the settling time free at a gate?   **A** the driver is signing anyway   **B** the probe is more accurate there   **C** the gate is warmer',
  '**3**  What does the second depot do with the probe?   **A** it is left in a drawer   **B** pallets are read at a gate   **C** the air is read in a cold store',
  '**4**  What does she say about the second depot\'s complaint?   **A** it was unfair   **B** it was right about their own job   **C** it was exaggerated',
  '**5**  What has she changed about the way she recommends things?   **A** she names who it is not for   **B** she has stopped recommending things   **C** she asks the maker first',
  '**6**  What does the hold button do?   **A** it speeds up the reading   **B** it records the time   **C** it keeps the figure on the screen',
  '**7**  What is the one thing she now checks before recommending it?   **A** the temperature range   **B** whether the user will be standing still   **C** the price',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 8.15  Audio script (read after the check)', [
  ['Interviewer', 'You recommended the same instrument to two depots and got two opposite answers.'],
  ['Rim', 'I did, and the fault was mine and not the instrument\'s. What I sent in March was eleven words: it is a very good probe and everybody should have one. There is no reader in that sentence, and six months later one depot had ordered two more and the other had put theirs in a drawer.'],
  ['Interviewer', 'The complaint was about the settling time.'],
  ['Rim', 'About forty seconds, and the reading drifts for the first fifteen of them. Both of those are true. At a gate it costs you nothing, because you are standing at the vehicle while the driver signs and the gate copy is being stamped — the forty seconds is time you already had.'],
  ['Interviewer', 'And the second depot?'],
  ['Rim', 'They are walking a cold store with it and reading the air, eleven readings with the door open. Forty seconds each is twenty-five minutes of open door. They told me it was useless and they were right about their own job, and I had never asked them what their job was.'],
  ['Interviewer', 'So what do you do differently now?'],
  ['Rim', 'Two sentences instead of one. Who it is for, and who it is not for. The second sentence is the one that does the work, and it is the one nobody writes, because it looks as though you are arguing against your own recommendation.'],
  ['Interviewer', 'What is good about the instrument, in your own job?'],
  ['Rim', 'The hold button, and nothing else did it. You pull the probe out of the pallet and the figure stays on the screen, so you can write it on the gate copy without holding the probe in the other hand. I did not notice that in the shop and I would not buy one without it now.'],
  ['Interviewer', 'And if somebody asks you about it tomorrow?'],
  ['Rim', 'I ask one question before I answer. Not the temperature range and not the price — will the person using it be standing still when the reading is taken? Everything follows from that, and it takes four seconds to ask.'],
]));
out.push(p('**C  Writing.** Write the review (180–220 words) in the four moves: the verdict with its reader and the reader it is not for, the one detail that decided it, the weakness in its strongest form, and a last line with a test in it.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 8)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ give a verdict in one sentence and name the reader it is for',
  '☐ name the reader it is **not** for, which is what makes the verdict checkable',
  '☐ support a verdict with one detail that could not be read off the box',
  '☐ state a weakness in its strongest form and let it stand',
  '☐ separate the weakness from the reason without answering it',
  '☐ compare two things on one named dimension, with a reader for each',
  '☐ end on a test, a threshold with a number, or a smallest trial',
  '☐ show that two reviews which contradict each other are two verdicts with the readers left out',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 9 – CONCESSION THAT COSTS SOMETHING', [
  'Unit 8 judged things. **Unit 9** concedes — and it is the unit in which 6.2 is taken as far as it goes: **conceding the strongest point against you, in its strongest form, and then naming what the concession does not concede.**',
  '**9.3 concedes and names the exchange in the same sentence** — _in return for_ — which is B1 21.3 at argument scale. **9.5 is the cycle that will change how the class reads everything**: telling a real concession from a rhetorical one in somebody else\'s writing, by one test — **what did it cost the writer?**',
  '⚠ **Bring one thing somebody has said against something you believe** — an argument, not an insult — **and the strongest form of it you can write.** 9.1 runs on it, and a weak version of the objection makes the whole unit impossible.',
  '**And the rankings stay on the board.** The class has now seen which criteria the room finds useful; from Unit 9 the slip you give is marked on whether its _one thing to keep_ was kept.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 8 · Student\'s Book');
