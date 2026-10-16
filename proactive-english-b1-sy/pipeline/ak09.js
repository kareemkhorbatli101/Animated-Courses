// Proactive English B1 · Syria Edition · Book 1 · Unit 9 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 9  Deduction and Doubt — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One photograph, four cycles.** The whole unit runs on two photographs found in a cupboard in Room 14. There is no image in the book: each photograph is **written out** in a box, which is exactly what the class has to learn to do anyway, and it means the unit works in a room with no equipment and no photocopier.',
  '**The arc is deliberate and it goes downwards.** The class ends with fewer certainties than it began with: nine confident statements in 9.1 become two in 9.5, and only one thing moves up, in 9.7. Say so before you start, and say it again at the end. A class that is not told this is coming experiences it as failure.',
  '**9.4 is the exam cycle** and it is the one to protect. B1 Preliminary Speaking Part 2 is a one-minute solo turn that candidates routinely waste, and the whole of it is the seven-door order. It needs the photographs the Unit 8 NEXT box asked for; chase them, and bring four spares.',
  '**9.1–9.3 and 9.5 are 4.4 extended backwards.** In Unit 4 the class drew conclusions from evidence in the present. Here the same skill runs into the past with _must have_, _might have_ and _can\'t have_ — and 9.3 adds the one genuinely new idea in the unit: a _can\'t_ is worth more than a _must_.',
], C.lblue, C.navy));

// ===================== 9.1 =====================
out.push(pb());
out.push(h2('9.1  It must have been taken in the summer'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Things you can **see**: eleven men, a grey work coat, eleven chairs, short shadows, a car at the edge, three letters of a sign. Things you have **worked out**: that it is summer, that it is midday, that the man in the coat works there, that the chairs came from inside. Keep it to three and three and do not let the class argue yet; 9.2 and 9.3 are where the arguing belongs.'));
out.push(A('**b** Now: **1**, **3**. Then: **2**, **4**. In a photograph, "now" means _in the picture_, which confuses students for about a minute and is worth clearing up with one sentence.'));
out.push(A('**This is not the _must_ of Unit 6.** _You must sign it_ is an obligation and _he must be the manager_ is a deduction, and the two uses have nothing in common except the word. Say so in the first five minutes, because a class that has just spent a unit on obligation will hear the wrong one.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the time of year and the time of day.'));
out.push(A('**b** _(not asked in the Student\'s Book; use these if the class wants them)_ The shadows and the squinting give the time of day; the pencil 14/8 gives the date and agrees with the shadows. Everything after the first two minutes is conclusion.'));
out.push(NOTE('Ms Huda\'s interruption is the point of the cycle and it should be read sharply: _every one of those sentences has must in it, and every one of them is a conclusion and not a fact._ The class has done four minutes of excellent work and needs to be shown that nearly all of it is theirs rather than the photograph\'s. Do not soften it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 The shadows.** _It must have been within an hour of midday, because the shadows fall almost vertically and are shorter than the men\'s shoes._',
  '**2 The work coat.** _He must have worked in the building, because he is the only one of the eleven not dressed for being photographed._',
  '**3 The chairs.** _They must have been carried out of the building, because nobody keeps eleven chairs on a pavement._',
  '**4 The jackets.** _It must have been hot, because ten men have taken their jackets off and kept their ties on._',
  '**5 The pencil on the back.** _Somebody must have known the date, because 14/8 is written in pencil in one hand — and it agrees with the shadows, which is an independent reason._',
  '**6 The car at the edge.** _Nothing must be true about the car. It is half out of frame and the plate cannot be read, and there is nothing to deduce from it at all._',
]));
out.push(A('Item 6 is the one to collect. The honest answer to a piece of evidence is sometimes that it supports nothing, and students will not say so unless it is modelled.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The very short shadows.',
  '**B:** It must have been within an hour of midday, because the shadows fall almost straight down and are shorter than a shoe.',
  '**A:** Is there a second thing that says the same?',
  '**B:** Yes — all eleven of them are squinting, and 14/8 on the back is the middle of August.',
  '**A:** So how sure are you?',
  '**B:** As sure as it is possible to be about a photograph. Three reasons, and two of them are independent of each other.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The deductions with only one piece of evidence behind them are the pens, the chairs-as-speech, the car and the sign — and three of those four come down in 9.2 or are ruled out in 9.3. Mark them in the margin of the board now; the class will see them fall next week and the sequence is what teaches the lesson.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _It must have been high summer — vertical shadows, eleven men squinting. The chairs must have come out of the building — nobody keeps eleven chairs on a pavement. And the man in the coat must have worked there — he is the only one not dressed for a camera._',
  '**b** _Without the pencil mark I would still say summer, because the shadows and the squinting are enough. I would be less sure that it was August rather than June or July, and I had not noticed that I was using the pencil for the month rather than for the season._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda found a photograph in the bottom of the cupboard and nobody knows who the men are. Lubna said it must have been taken in the summer and must have been about midday, because the shadows fall straight down and are very short and all of them are squinting into the sun. Jad said there is 14/8 on the back in pencil, the fourteenth of August, and Lubna said that agrees with the shadows, so there are two pieces of evidence saying the same thing, which is better than one piece of evidence twice. Mazen said the man at the end must be the one who works there and the others are visiting, because he is in a work coat and they are in shirts and ties with no jackets: ten men take their jackets off because it is August and one man never had a jacket. He has something in his breast pocket, which must be pens or a rule. Lubna said the chairs must have been brought out of the building, because nobody keeps eleven chairs on a pavement — eleven chairs and eleven men. Jad said then somebody must have been going to speak to them. And Ms Huda stopped us, because every one of those sentences has must in it and every one is a conclusion and not a fact: what we can see is eleven men, a work coat, short shadows and eleven chairs, and everything else in four minutes is ours.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It must be taken in August. → ✓ must **have been** taken.   ✗ He must to be the manager. → ✓ must **be**.   ✗ It must been → ✓ must **have** been.   ✗ _He must be the manager_ with no evidence → ✓ a guess wearing a deduction; attach the reason or drop the _must_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The shadows _(nearly vertical, shorter than a shoe, everyone squinting)_ and the pencil note _(14/8)_ — and they are independent of each other.'));
out.push(A('**2** The ten have collars that have been **loosened** and he has none: a man who has taken his jacket off and a man who never had one do not look the same.'));
out.push(A('**3** That somebody was about to make a speech, that the men were happy, and that it was the day the building opened. All three were in her first version, none of them is in the photograph, and she says they are **in her** — and the chairs put them there.'));
out.push(A('The collar observation is the best single piece of reasoning in the unit, and it is worth stopping on because it is a model of the whole skill: a visible detail (loosened collars) supports a conclusion about a difference between two groups of men, and it is checkable by anybody holding the photograph. That is what "evidence" means, and students write pages without producing one of them.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**A PHOTOGRAPH FROM MY MOTHER\'S HOUSE** · R. Barakat',
  '**What is in the photograph.** Two women and a girl of about eight on a flat roof. A line of washing behind them, not full. A low wall, and beyond it the tops of three buildings of different heights. The girl is holding a metal jug with both hands. One of the women is looking at the girl and the other is looking at the camera. All three are in short sleeves. The roof surface is wet in patches.',
  '**What must be true, and why.** It must have been warm: all three are in short sleeves and the washing is out. The roof must have been washed down not long before: there are wet patches in the shade and dry ones in the sun, which is drying and not rain, because rain does not stop at the edge of a shadow.',
  'The jug must be heavy, or the girl would not be holding it with both hands and with her elbows in.',
  '**What I have had to take out.** That it was a feast day. That the woman looking at the girl is her mother. That they were poor. Not one of them is in the photograph; they are in me, and the jug and the roof put them there.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**ELEVEN CHAIRS** · M. Hariri',
  '**What is in the photograph.** Eleven men, two rows, on a pavement. A four-storey building behind, four rows of windows, doors that open outwards. Ten white shirts, dark trousers, ties, no jackets. One grey work coat, something in the breast pocket. Eleven empty wooden chairs facing the camera. A car at the left edge, part of a wing and a wheel. A hand-painted sign with three letters showing. On the back, in pencil: 14/8.',
  '**What must be true.** It must have been high summer within an hour of midday: shadows almost vertical and shorter than a shoe, eleven men squinting, and a pencil date that agrees. Two independent reasons.',
  'The chairs must have been carried out. Nobody keeps eleven chairs on a pavement and there are exactly as many chairs as men.',
  'The man in the coat must have been working that day and the other ten must not have been. He has no collar loosened because he has no jacket to have taken off.',
  '**What I have had to take out.** That a speech was about to be made. That the eleven are the whole staff. That the man in the coat was the one who mattered least.',
  '**The deduction I am least sure of** is the last of the three, about the coat. For me to be sure, I would need to see somebody else in the photograph in working clothes, or a second photograph with him in it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"He has no collar loosened because he has no jacket to have taken off." You have found a second reason for the coat and it is in the clothes, not in your head._   ✓ _"That the man in the coat was the one who mattered least" — that is in your taken-out list and it was never in your page, so it is really a confession rather than a deduction you removed._   ? _What makes you say that?_ — about the eleven chairs being as many as the men, which is the only coincidence in the picture.'));
out.push(S('Stage 7R · Share'));
out.push(A('Nearly all of the things taken out are about **feelings**: happy, proud, poor, nervous, important. Count them and say the number. It is the most memorable five seconds of the unit and it needs no comment afterwards.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I did it on a photograph of my father outside the shop in 1996 and then showed it to my uncle. Two of my four deductions were right. The third — that it was taken in the morning, from the shadow on the shutter — was right about the time and wrong about the day: he said it was taken at eight in the evening in June, and the light is from a street lamp on the other side, which I had taken for sun because I had decided it was sun. And the fourth was completely wrong: I said my father must have just opened, and my uncle said he was closing, for the last time that week, because of a curfew.']));

// ===================== 9.2 =====================
out.push(pb());
out.push(h2('9.2  It might be a batch fault'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Four of the six come down. The two that survive are the date and the work coat; the pens, the chairs-as-speech, the car and the sign all become _might_ or less.'));
out.push(A('**b** Strongest: **1** _must_. Weakest: **3** _could_. Order: must · might well · might · may · could. _(May and might are very close; accept either order.)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the chairs and the breast pocket.'));
out.push(A('**b** **1** Because what is actually true is that there is something in the pocket **about the size of pens**; it might be pens, could be a folded paper, may be a spectacle case.   **2** That he did exactly this with them: he wrote that fifteen were badly made, when what he had was fifteen uneven glue lines. The glue line is a _must_; _badly made_ was a _might_ written as a _must_, in a letter, in October.'));
out.push(NOTE('Mazen\'s connection between a photograph and his own letter is the reason this unit is in a course for working adults rather than a puzzle. The transferable sentence is: **a _might_ written as a _must_ transfers your guess to the reader as a fact, and everything built on it is then yours.** That is 7.5 and 8.3 arriving a third time, and the repetition is the design.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 Something the size of pens.** _It might be pens. It could be a folded paper. It may be a spectacle case._ Nothing chooses.',
  '**2 Eleven empty chairs.** _Somebody might have been going to speak. They could have been put out for a group who came later. They may have been going back inside when the photograph was taken._ Nothing chooses.',
  '**3 A car half out of frame.** _It might belong to one of them. It could belong to the photographer. It may be nothing to do with anybody and simply parked there._ Nothing chooses, and the third is the most likely and the least interesting.',
  '**4 Three letters of a sign.** _It might be the company\'s name. It could be the name of the building. It may be the name of a different business on the ground floor._',
  '**5 Eleven men squinting.** _They might be looking into the sun. They could all have poor eyesight, which is absurd. Or the photographer may have taken a long time, which is likely and would explain the stillness._',
]));
out.push(A('Item 3 is the useful one: the most probable explanation of the car is the dullest, and students systematically prefer the interesting possibility. Name that; it is the whole failure mode of the cycle.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Something the size of pens in a breast pocket.',
  '**B:** It might be pens. It could be a folded paper. It may be a spectacle case.',
  '**A:** Is there anything that chooses between them?',
  '**B:** No. The shape is about four centimetres wide and that is all.',
  '**A:** So what is the honest sentence?',
  '**B:** There is something in his breast pocket about the size of pens.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In six or seven of the eight nothing chooses, and the honest sentence is always the same shape: _there is something about the size of X_. That sentence feels like a failure to students and is in fact the only completely defensible thing on the page.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I said the chairs must have been for a speech. They might have been; they could have been for a group who came later; they may have been going back inside. And I said the man in the coat must have been the caretaker, which I had not said out loud — he might have been anything from the foreman to the driver._',
  '**b** _The one I was most confident about was the speech, and it is the one with the least behind it. I was confident because it was the most interesting._',
]));
out.push(A('_I was confident because it was the most interesting_ is the sentence to collect. Confidence tracks how satisfying an explanation is, not how well supported it is, and that is as true in a laboratory report as in a photograph. Students recognise it immediately and it does not need labouring.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda read six of our sentences back and asked which are really musts. Lubna said the date is a must, because there are two independent reasons. Jad said the work coat is a must or nearly, because the man is dressed differently from all ten of the others, and that is a fact about the photograph and not about him. Mazen took the pens down: he had said there must be pens in the pocket, and what is actually true is that there is something in the pocket about the size of pens — it might be pens, it could be a folded paper, it may be a spectacle case. Omar asked whether it matters, since it is a pocket, and Mazen said it matters because he said "must", so a man listening would have taken the pens as given, and then everything built on the pens would be his and not the photograph\'s. He has done exactly that with telephones: he said fifteen of one model were badly made, and what he had was fifteen uneven glue lines. The glue line is a must; "badly made" was a might written as a must, in a letter, in October. And the chairs: that they were carried out holds, but what they were for comes down. Jad said three explanations and nothing to choose between them, and Ms Huda said that is what might is for — it is not a weaker must, it is a different instrument.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It might to be pens. → ✓ might **be**.   ✗ It might been → ✓ might **have** been.   ✗ Maybe it must be → ✓ one or the other.   ✗ ~~maybe~~ where the verb is needed → _it **may be** pens_ (two words, verb) against _**maybe** it is pens_ (one word, adverb).'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the adhesive on those fifteen was applied **inconsistently** — because nothing else produces a brush line that is different in every one of fifteen units.'));
out.push(A('**2** A batch (one week of one shift at one factory); the way the model is assembled everywhere (a hundred thousand units); or the two shops (storage, heat on a shelf, something he has not thought of).'));
out.push(A('**3** All three at once, decided, in four words — and it is why he was answered after seven months with eleven lines.'));
out.push(A('The three possibilities are deliberately of wildly different **sizes** — one shift, a hundred thousand units, two shops. That is what makes them three possibilities rather than one written out three times, and it is the thing to mark in students\' own work: three _mights_ of the same size are a single idea with three coats on.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE FOUR LATE PIECES** · L. Sweidan · for my own file',
  '**What I have.** Eleven pieces of work this year with a date against each. Four handed in late. All four after 14 January. None before it.',
  '**What that must mean.** Something changed in the middle of January. There is nothing else that puts four late pieces in three months and none in four.',
  '**What it might mean, and I have three.** It might be the nine hours a week I added in January — the evening class and the Saturday office. It could be the fourth-year work itself getting harder in the second term, which it does. Or it may be that I stopped sleeping properly in January for a reason that has nothing to do with either, and I have not looked at that at all.',
  '**What I have been saying.** "Fourth year is harder than third year." That is not one of the three. It is the second one, decided, and it is also the only one of the three I cannot do anything about.',
  '**What I will say next time.** The must, then the three mights, then which one I can test — and the one I can test is the nine hours, because I can give one of them up for a month and count.',
]));
out.push(S('Stage 7 · Write freely (sample, 171 words)'));
out.push(SAMPLE([
  '**SEVEN ERRORS** · R. Barakat',
  '**What I have.** 118 night shifts between January and October. Seven recorded errors. All seven on a fourth or fifth night of a block. None on a first, second or third. None at all in the eleven weeks of three-night blocks before March.',
  '**What that must mean.** The position of a night within a block is associated with my errors. Nothing else in the record distinguishes the seven nights from the hundred and eleven.',
  '**What it might mean, and I have three.** It might be accumulated tiredness, which is what everybody assumes and what I assumed. It could be the stock delivery, which falls at the end of the month and therefore always on a fourth or fifth night, and which adds fifteen minutes because nothing is where it was. Or it may be that by the fourth night I have stopped reading the band and started recognising faces, which is a different failure and a worse one.',
  '**What I have been saying.** "Five nights in a row is too many." That is the first of the three, decided, in six words, and it is the one that needs the rota changed. The other two need a delivery moved and a habit broken, and both of those are mine.',
  '**What I will say next time.** The must, the three mights, and the fact that two of the three are things I could test this month without asking anybody for anything.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"two of the three are things I could test this month without asking anybody for anything." That changes what the page is for._   ✓ _The stock delivery and the blocks are not independent — the delivery always falls on a fourth or fifth night, so your evidence cannot tell them apart, and you should say so._   ? _Which of the three would cost you most if it were true?_ — the third, and the page knows it.'));
out.push(S('Stage 7R · Share'));
out.push(A('Most of the room has written a _might_ as a _must_ in something somebody else read, and very few of those were answered. Say the two counts next to each other; the connection is the finding and the class will make it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  'The sentence, from a note I sent in February: "The marks are entered carelessly."',
  '**What I have.** Thirty-one marks in my own class. Three entered wrongly. All three were a 5 for a 6 or a 6 for a 5.',
  '**What that must mean.** The error is in reading or typing a digit, not in arithmetic and not in collecting.',
  '**What it might mean.** It might be my handwriting — in my hand those two figures are nearly the same. It could be the typist, who works from eleven different hands. Or it may be that nothing is read back, so a small slip is never caught whoever makes it.',
  '**The line that hands it over:** I cannot tell which of the three it is from my own class, and whoever holds all eleven sheets can.',
]));

// ===================== 9.3 =====================
out.push(pb());
out.push(h2('9.3  That can\'t be the reason'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Three of the six are impossible. Use: _it was a winter morning_ (ruled out by shadows, squinting and shirtsleeves); _it was the day the building opened_ (ruled out by the weathered sign); _a speech was being made as the photograph was taken_ (ruled out by eleven men standing and eleven chairs empty). The other three cannot be ruled out, and saying so is half the exercise.'));
out.push(A('**b** Ruled out: **1** _winter_ — vertical shadows, squinting, no jackets; **3** _the opening day_ — a weathered hand-painted sign. **Cannot be ruled out: 2** _all from the same office_ and **4** _the car belongs to one of them_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the opening day, with the sign.'));
out.push(A('**b** **1** It cannot have been the opening day (the sign has been rained on for years); it cannot have been a formal event with important visitors (ten men in shirtsleeves); and the chairs cannot have been evidence of a speech (eleven chairs, eleven men, all standing).   **2** That they are the only sentences the class has made in two weeks that **cannot be wrong**.'));
out.push(NOTE('The argument is worth stating in full, because it is genuinely the most valuable transferable idea in the unit: a _must_ can be wrong, because there may be an explanation nobody thought of; a _can\'t_ can only be wrong if the **evidence** is wrong, and evidence can be checked. Ruling out is slower, feels less clever, and is the only part that survives. 9.7 then shows it surviving imperfectly, which is the honest ending.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 The men all work in the building.** _Cannot be ruled out. Nothing in the photograph says it either way._',
  '**2 It was taken in the morning.** _It can\'t have been taken in the morning, because the shadows fall almost straight down. In the morning they would fall to one side and be long._',
  '**3 The car is in the photograph on purpose.** _It can\'t have been there on purpose: it is cut in half by the edge of the frame, and nobody photographs a car they want in the picture with half of it missing._',
  '**4 The sign was new.** _It can\'t have been new. It has run and faded unevenly down one side, which is weathering._',
  '**5 The photographer was a professional.** _Cannot be ruled out, though the car at the edge is slightly against it._',
]));
out.push(A('Items 1 and 5 are the ones that matter: two of the five cannot be ruled out, and a class that rules out all five has started guessing again. The phrase to drill is _I cannot rule that out_, which students find much harder to say than any of the grammar.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** It was the day the building opened.',
  '**B:** That can\'t have been it, because the painted sign above the door has run and faded down one side, and that takes years.',
  '**A:** The chairs were for the eleven men.',
  '**B:** I cannot rule that out. Somebody may have told them to stand up for the photograph, in which case the chairs were theirs after all.',
  '**A:** So what do we have?',
  '**B:** Two ruled out and two still open, and I would rather have that than four guesses.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('_I cannot rule that out_ should appear at least twice on each card. A pair that ruled out all four was guessing, and the diagnosis is easy: ask what in the photograph rules out the fourth one and the answer is nothing.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The boy who stopped coming. It cannot have been that nobody noticed — four of us noticed and I can name them. It cannot have been that the register did not show it — it showed twenty-one absences in my own handwriting. And it cannot have been that nobody had his number: it is on the enrolment form, which I have looked at._',
  '**b** _Those three leave very few explanations. What is left is that four people each thought somebody else was doing it, and that is not an explanation of a system — it is the system._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad said he had been doing it the wrong way round: he has been trying to work out what the photograph is, and what is easier is working out what it cannot be. Three things. It cannot have been the day the building opened, because the sign above the door is hand-painted and has run — it has been rained on for years, and a building does not open with a weathered sign. It cannot have been a formal event with important visitors, because ten men are in their shirtsleeves, so either nobody important was there or the photograph was not the point of the day. And the chairs cannot have been evidence of a speech: there are eleven chairs and eleven men and all of them are standing; if the chairs were for the men, somebody had just told them to stand up, or the chairs were for somebody who had not arrived — and he made them evidence of a speech last week. Ms Huda asked what those three sentences are worth, and he said they are the only sentences we have made in two weeks that cannot be wrong. She said that is it exactly: a must can be wrong because there may be an explanation you have not thought of, and a can\'t can only be wrong if the evidence is wrong, and evidence can be checked. Omar said so we know almost nothing, and Jad said we know three things for certain and about nine not at all — and last week we thought we knew nine.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It mustn\'t have been January. → ✓ It **can\'t** have been January. _(mustn\'t is a prohibition — Unit 6)_   ✗ It cannot be taken in winter. → ✓ can\'t **have been** taken.   ✗ It couldn\'t been → ✓ couldn\'t **have** been.   ✗ a _can\'t_ with nothing ruling it out → ✓ a contradiction, not a deduction.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The hand-painted sign has run and faded **unevenly down its right-hand side**, which is weathering and takes years.'));
out.push(A('**2** Five. _(Any two of:)_ that the men worked there; that the car is theirs; that the man in the coat was in charge; that it was taken by a professional; that 14/8 is a date and not a reference number.'));
out.push(A('**3** It is the list of questions he would have to find somebody alive to answer — and he did not know he needed them, because last week they were not on any list.'));
out.push(A('_I did not know I needed them, because last week they were not on any list_ is the quiet point of the whole unit. Ruling things out does not produce answers; it produces a list of the questions you did not know you had. That is also exactly what a good incident report, a good diagnosis and a good complaint do, and it is worth saying so once.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT THE TROLLEY CANNOT BE** · R. Barakat',
  '**It cannot be that the trolley was never sent.** The workshop collection book has it, on 2 February, in somebody else\'s writing, and I have seen the entry.',
  '**It cannot be that it has been repaired and returned.** There are two trolleys on the inventory and one on the ward, and I have counted them every night for five weeks.',
  '**It cannot be true that nobody has asked.** I have asked four times verbally and once in writing, and I have the date of the written one.',
  '**What I cannot rule out, and there are four.** That it is in the workshop and waiting for a part. That it has been taken by another ward. That it has been written off and nobody has told us. That the collection entry is wrong and it went somewhere else altogether.',
  '**Why the second list is the useful one.** Each of those four has a different person who could answer it in about a minute, and until I wrote them down I had been asking one person the same question four times.',
]));
out.push(S('Stage 7 · Write freely (sample, 166 words)'));
out.push(SAMPLE([
  '**WHAT THE ELEVEN TELEPHONES CANNOT BE** · M. Hariri',
  'Everybody who comes to that counter wants to know what is wrong with the model. This is what cannot be wrong with it, and it is three sentences, and I think it is worth more than the letter I sent in October.',
  '**It cannot be how people treat them.** Nine of the fifteen were carried in a case, and the fault is in the same corner in all fifteen.',
  '**It cannot be the design of the frame.** The frame on that model is the same frame as two other models I handle, and I have had two failures between them in nine years.',
  '**It cannot be a single bad day at a factory.** The fifteen were sold across three months, so if it is a batch it is a batch that was being made for weeks, not for a shift.',
  '**What I cannot rule out, and there are four.** That it is the adhesive itself. That it is the person applying it. That it is the temperature where they are stored. That it is two shops doing something to them before they are sold.',
  '**Why the second list is the useful one.** Three of those four can only be answered by somebody at the factory, and one of them can be answered by me, this week, with a thermometer in a shop window.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"one of them can be answered by me, this week, with a thermometer in a shop window." The second list has produced a job._   ✓ _"It cannot be a single bad day at a factory" is a good _can\'t_ and the sentence then re-opens it as a longer batch; split the two._   ? _Who is alive who could answer item one?_ — nobody he can reach, which is why he still wants a name.'));
out.push(S('Stage 7R · Share'));
out.push(A('For most items on the second lists there **is** a person alive who knows, and nobody has asked. Collect three and ask when each person was last asked. The answers are usually never.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Three things that cannot be true about the welded second door on my bus. It cannot have been welded because the door was broken: the hinges are sound and I have looked. It cannot have been welded recently: the paint over the weld has the same four layers as the rest of the panel. And it cannot have been done by the company I work for: there is no entry in the vehicle file, and that file has every tyre since 2011 in it. What I cannot rule out: that it was done before the bus came to Syria. The person who could answer item one is Abu Khalil in the depot office, who has been there since 2009 and whom I have never asked.']));

// ===================== 9.4 =====================
out.push(pb());
out.push(h2('9.4  One minute, on your own'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The hardest part of the minute is always the second half, because the first half is a list and the list runs out. Say nothing until the minute is up, however long the silence; the silence is the teaching.'));
out.push(A('**b** The order: **4** what I can see first · **2** where it is · **3** what the people are doing · **1** what might have just happened · **5** how it makes me feel.'));
out.push(NOTE('This is the only explicitly exam-shaped cycle in the first nine units, and the arithmetic is worth giving the class: Speaking is a quarter of the Preliminary marks, Part 2 is a quarter of Speaking, and almost all of it is one learnable order. Forty minutes here is the best-value forty minutes in the book for anybody taking the examination.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** The first half is **what you can see**; the second half is **what you have worked out** — speculation. _(Not asked in the Student\'s Book as a lettered item.)_'));
out.push(A('**b** **1** About a minute, alone. They are given the photograph and told what it shows — _a photograph of people working_ — and nobody asks them anything.   **2** They skip it: they use thirty seconds on the list, look up, and the examiner has to say _anything else?_'));
out.push(S('Language box · Practise'));
out.push(A('No separate exercise: the seven doors **are** the practice, and Stage 3 runs them with a watch. Two things to drill before Stage 3. First, the opening phrases for each door, out loud, round the room, twice: _in the foreground · behind them · there are about · they\'re wearing · they look as if they\'ve been · they might be going to · if I were there I\'d_. Second, hedging instead of stopping: _a kind of · something like · the thing you put papers in_.'));
out.push(S('Stage 3 · Practise (sample – one full minute)'));
out.push(SAMPLE([
  '_(a student\'s own photograph: a market street)_',
  '**[1]** In the foreground I can see a stall with oranges on it, piled quite high, and a set of brass scales. **[2]** Behind the stall there is a narrow street with shops on both sides and some kind of cloth stretched across above it for shade. **[3]** There are about ten or twelve people and most of them are walking away from the camera. **[4]** They\'re wearing light clothes, and the man at the stall has a pencil behind his ear and an apron — or a kind of apron, the thing you tie at the waist. **[5]** The stall looks as if it has been open for a while, because the top of the pile has been taken off and nobody rebuilds a pile in the middle of the morning. Somebody must have hung that cloth up, because it is tied to a window on one side. **[6]** He might be about to weigh something, because his hand is on the scales, but I don\'t think he\'s serving anybody, because nobody is standing at the front. **[7]** It must be very noisy and quite hot under that cloth. If I were there I\'d be trying to get through without touching anybody, which is what the people walking away look as if they are doing.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Record the doors and the second at which each speaker ran out. The pattern is reliable: students who get past fifty seconds have used doors 5, 6 and 7, and students who stop at thirty have used 1 to 4 only. Show the two sets of notes side by side and the class needs no further argument about where the marks are.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**b** _A stranger\'s photograph was easier, which surprised both of us. With my own I kept stopping because I know what is actually happening in it and I wanted to say the true thing. With a photograph I had never seen I had nothing to be accurate about, so I just used the doors._',
]));
out.push(A('That answer comes up in nearly every class and it is the most useful thing in the cycle for examination purposes: **knowing the truth about a photograph makes Part 2 harder.** Candidates who are told that they are not being tested on the content stop trying to be right and start using the grammar. Say it plainly.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda explained the part of the examination where you are alone with a photograph for about a minute. You get the photograph, you are told what it is of, and then you talk; nobody asks you anything. Omar said a whole minute, and she said about a minute and it is long — most candidates use thirty seconds and then look up, and the examiner has to say "anything else?", which is the worst sentence in the examination. The minute has two halves. The first is what you can see, and everybody does that half in twenty seconds because they list things: there is a man, there is a chair, there is a car. The second half is everything this unit has been about: they look as if they have been waiting a long time, it must be about midday, it might be a lunch break, it can\'t be a formal occasion because nobody has a jacket on. That is the half the marks are in, because it is the only half where you can show any grammar. Omar said so the photograph does not matter very much, and she said it does not matter at all — you are not being tested on what is in it, but on whether you can keep going for a minute and say must, might and can\'t about something you cannot possibly know, which is why we have spent three weeks on eleven men nobody can identify. And the seven doors: foreground, background, people, clothes, what has just happened, what is about to happen, how it would feel to be there.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ stopping to find a word → ✓ _a kind of · something like_.   ✗ _There is a man. There is a chair. There is a car._ → ✓ join them: _behind the stall there is…_   ✗ listing what is **not** there, for more than one sentence → ✓ a door that leads nowhere.   ✗ _In the picture we can see…_ repeated eight times → ✓ one opening phrase per door.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four sentences in doors 1–4 and seven in doors 5–7. _(Accept four and six or seven.)_ The second half is longer than the first, which is the opposite of what candidates produce.'));
out.push(A('**2** _possibly_ — _pens, possibly, or a folded paper_. One hedge instead of one silence.'));
out.push(A('**3** Door 7, _being there_. It adds a second conditional, a judgement about one particular man, and a reason — and it is the only sentence in the turn that could not have been produced by looking at the photograph alone.'));
out.push(NOTE('Door 7 is free marks and almost nobody uses it. It contains a second conditional, it cannot be factually wrong, it works on every photograph ever taken, and it takes eight seconds. If a class remembers one thing from this cycle, make it door 7.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '_(a photograph of a hospital corridor at night, brought by a student)_',
  '**[1]** In the foreground I can see a floor that has just been washed — there is a yellow sign standing on it. **[2]** Behind the sign there is a long corridor with doors on the right and a window at the far end that is completely black.',
  '**[3]** There is one person, quite far away, pushing something. **[4]** She is in a pale uniform, and the thing she is pushing is some kind of trolley, the sort with two shelves.',
  '**[5]** The floor looks as if it has just been done, because the sign is still out and nobody leaves those signs out. She must have come from the far end, because the clean part is behind her.',
  '**[6]** She might be going to a room on the right, or she might be going out to the lift, which I think is nearer the camera. I don\'t think she is in a hurry, because the trolley is straight.',
  '**[7]** It must be very quiet. If I were there I would be able to hear the wheels, and I would be trying not to make a noise on a wet floor, which is a thing you cannot do.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words, read aloud in 63 seconds)'));
out.push(SAMPLE([
  '_(a newspaper photograph: four men on a flat roof with a water tank)_',
  '**[1]** The first thing I notice is a large plastic water tank, black, on a metal frame, and two of its four legs are standing on bricks rather than on the roof. **[2]** Behind it there is a view over a lot of other roofs, all about the same height, with a hill in the distance that is nearly the same colour as the sky.',
  '**[3]** There are four men and three of them are looking at the bottom of the tank. The fourth is looking away, over the wall. **[4]** They are all in ordinary clothes, not work clothes — one has a jacket on and another has sandals — so this is not their job.',
  '**[5]** Somebody must have put those bricks under the legs, and they must have done it after the frame was there, because you would not build a frame short on purpose. It looks as if they have been standing there for a few minutes, because nobody is holding a tool.',
  '**[6]** They might be about to move the tank, or they might be deciding whether they can. I don\'t think they are going to mend it today; nobody has brought anything up with them.',
  '**[7]** It must be hot on that roof. If I were there I would be worried about the two bricks, and I think the man looking away is the one who put them there.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I think the man looking away is the one who put them there." Door 7 and a conclusion in eleven words, and nothing in the photograph can contradict it._   ✓ _"all about the same height" in door 2 is doing nothing; door 2 wants one fact, not a survey._   ? _Did you use door 7, and how long did it take altogether?_ — sixty-three seconds, which is exactly right.'));
out.push(S('Stage 7R · Share'));
out.push(A('Everybody who got past fifty seconds used doors 5, 6 and 7, necessarily, because doors 1 to 4 cannot be stretched. Say that and the cycle is finished; the class does not need a conclusion from you.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Second attempt, 61 seconds, on a photograph in a newspaper of a bus station. [1] A row of buses at an angle, nose in. [2] Behind them a wall with a painted sign and the top of a minaret. [3] About twenty people, nearly all carrying something. [4] Mostly dark clothes, two or three in work overalls, one woman with a child on her hip and a bag in her other hand. [5] They look as if they have been waiting a while, because people have put their bags down, and nobody puts a bag down in the first five minutes. [6] They might be about to board, or they might be looking at a bus that is not theirs. [7] It must be loud and smell of diesel, and if I were there I would be counting the people in front of me, which is what I do.']));

// ===================== 9.5 =====================
out.push(pb());
out.push(h2('9.5  Definitely, probably, possibly'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The fingers are worth the small amount of silliness: a room that has to commit to a number in public argues about evidence instead of about wording. Expect the widest disagreement on _the men worked in the building_ and _somebody in this building knows who they are_.'));
out.push(A('**b** **1** _It **definitely** was summer_ — before a one-word verb _(and_ It was definitely summer _is equally good)_. **2** after _was_. **3** before _worked_. **4** after _have_. **5** before the negative auxiliary: _It **definitely** wasn\'t summer._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a scale of five from the photograph.'));
out.push(A('**b** **1** _It was the day the building opened_ — which Jad grades as 1, _I doubt it_, rather than 0.   **2** He did the day in June: six hours, twelve people, two of the hours in a pharmacy in Mezzeh, because she said yes to the two hours — and she has asked him about September.'));
out.push(NOTE('Jad\'s distinction between _I doubt it_ and _certainly not_ is the best piece of epistemology a B1 class will ever be offered and it takes four lines: _certainly not_ claims the evidence settles it; all he has is a sign that **looks** weathered in a photograph he is holding sixty years later. 9.7 then proves him right by taking the _can\'t_ away from him, and the sequence only works because he hedged here.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 The men worked in the building.** _Possibly — 2. One is probably; the other ten, nothing in the photograph says either way._',
  '**2 The chairs came from inside.** _Definitely — 4. Nobody keeps eleven chairs on a pavement, and the second photograph shows two of them stacked inside the doorway._',
  '**3 The photograph was taken by a professional.** _Possibly — 2. The composition is careful and the car is cut in half, which argues both ways._',
  '**4 14/8 is a date.** _Probably — 3. The second photograph says 2/2 in the same hand, and two numbers in that form months apart are far more likely to be dates than references._',
  '**5 One of those eleven men is still alive.** _Probably — 3. Eleven men in 1963, most of them apparently in their thirties; the arithmetic alone makes it likely._',
]));
out.push(A('Item 5 is the one worth doing out loud, because the evidence is **arithmetic** rather than anything in the picture — and that is a perfectly good reason for a 3. Students assume that evidence must be visible.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** One of those eleven men is still alive.',
  '**B:** Probably — I would say three, because most of them look about thirty and 1963 is sixty-odd years ago, and eleven men is enough that one of them being alive is more likely than not.',
  '**A:** Not a four?',
  '**B:** No, because I am guessing their ages off a photograph, and a photograph is a bad way to guess an age.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The widest disagreement is nearly always on _somebody in this building knows who they are_, and both pairs are using the same evidence — the building is the same building — weighed differently. Name that: most real disagreements are not about evidence but about how much weight the same fact will carry.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Four: the trolley is still in the workshop — 3. Somebody has written it off — 2. The collection entry is wrong — 1, I doubt it, because I have seen the entry and it is clear. And nobody in the workshop has thought about it since February — 4, because there is no form, and no form means no reminder._',
  '**b** _(from the partner)_ _Your 4 should be a 3. "No form means no reminder" is an argument, not evidence, and a man in a workshop might remember a trolley without a form._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda made eight statements and we held up numbers. "It was taken in summer" — Lubna said four, definitely: two independent reasons and nothing against. "The man in the coat worked in the building" — Mazen said three, probably, because it is the only explanation he has and he can think of two others he cannot rule out: the man could have been a driver or could have come from the building next door. "Somebody was going to make a speech" — Jad said two, possibly, because the chairs are the only thing pointing at it and he has already ruled out the chairs. "It was the day the building opened" — Jad said one, and said he would say "I doubt it" rather than "certainly not", because he is relying on a sign he has only seen in a photograph: certainly not would mean the sign settles it, and all he has is a sign that looks weathered in a photograph he is holding sixty years later. Then Fares said one thing that was not about the photograph: he did the day in June — six hours, twelve people, two of the hours in a pharmacy in Mezzeh, because she said yes to the two hours. The four seconds after a pharmacist says "not today", which he could not explain indoors in eleven years, he explained in a doorway in about forty seconds. She has asked him about September. Ms Huda asked whether that was four fingers or three, and he said two: she asked a question in a car park, and he is not going to make that a four.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He worked probably there. → ✓ He **probably** worked there.   ✗ definately · definatly → ✓ **definitely**.   ✗ Maybe definitely → ✓ one marker a sentence.   ✗ _certainly not_ on the strength of one photograph → ✓ **I doubt it**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Two. The first is definite because the shadows, the squinting and the pencil note give **two independent reasons**.'));
out.push(A('**2** Because they are relying on a sign in a photograph.'));
out.push(A('**3** Seven of the nine moved **down** and nothing moved up — and they say that is the right direction.'));
out.push(A('_Nothing moved up_ is true at the end of 9.5 and is contradicted in 9.7, on purpose. If you are teaching the unit over three weeks, let the class leave 9.5 believing that certainty only ever decreases; the second photograph then does something no amount of explanation could do.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE WELDED DOOR** · T. Ayoub · for the depot file',
  '**Definitely.** The second door of bus 7 has been welded shut. There is a bead of weld along the whole lower edge and the handle has been removed and the hole filled. Two things, and they are independent.',
  '**Definitely.** It was done before 2011, when the vehicle came to this depot. The paint over the weld has the same four layers as the rest of that panel, and the file records every repaint since 2011.',
  '**Probably.** It was done because of an accident rather than as a modification. The panel below the weld is not quite flat and the frame behind it has been pulled. I cannot rule out that it was done to stop passengers using that door.',
  '**Possibly.** It was done in this country. Nothing I can see says either way.',
  '**I doubt it.** That anybody in the depot knows. Four people have told me they do not, and the file has nothing — but Abu Khalil has been here since 2009 and I have never asked him, so I will not say "certainly not".',
  '**We do not know at all, and these are the questions.** Who welded it. Why. Whether there was an accident, and whether anybody was hurt. Whether the door could be opened again.',
  '**One note on method.** I started with one certainty — that the door is welded — and I have ended with two, which is the first time anything has gone up.',
]));
out.push(S('Stage 7 · Write freely (sample, 170 words)'));
out.push(SAMPLE([
  '**THE FOURTH-YEAR ORDER** · S. Dibo · for the department file',
  '**Definitely.** Chapter 7 content has appeared in the June paper in each of the last four years, worth between 8 and 14 marks. I have the four papers and the mark schemes, and anybody can check them.',
  '**Definitely.** The printed scheme places chapter 7 in the third term. The scheme is printed and dated.',
  '**Probably.** The two documents were produced by different committees that did not consult each other. Nothing else explains four consecutive years of the same mismatch, and a deliberate decision would have been written down somewhere.',
  '**Possibly.** Other schools teach it earlier anyway and nobody has mentioned the problem because nobody has it. I have not asked a single other school, which is the weakest point in this page.',
  '**I doubt it.** That the examination will change. I have heard nothing and the paper has looked the same for four years — but I have no information at all about what the directorate is planning, so I will not say certainly not.',
  '**We do not know, and these are the questions.** Who sets the chapter order. Who sets the paper. Whether the two are ever in the same room. Whether any other school has written about it.',
  '**One note on method.** I came into this with one sentence — "the syllabus is badly written" — and I have come out with two certainties, one probably, and four questions, and the original sentence has gone altogether.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the original sentence has gone altogether." Six years of a complaint, replaced by four questions._   ✓ _"a deliberate decision would have been written down somewhere" is an assumption doing the work of evidence in your _probably_; say that it is one._   ? _Which of your questions has somebody alive who could answer it?_ — the fourth, and it is a telephone call to one other school.'));
out.push(S('Stage 7R · Share'));
out.push(A('Down, almost without exception. One sentence to close: an honest page has fewer certainties at the end than at the beginning, and that is not a failure of the page. Then stop — 9.7 will complicate it next week and the complication is better if the class has believed this first.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '**Definitely.** The second trolley left this ward on 2 February. It is in the collection book in somebody else\'s hand and there is one trolley on a two-trolley inventory.',
  '**Probably.** It is still in the workshop. It is the only explanation I have and I cannot rule out two others.',
  '**Possibly.** It has been taken by another ward.',
  '**I doubt it.** That it has been written off. Nobody has told us anything, and silence is not evidence either way, so not "certainly not".',
  '**The questions:** where is it, who has it, is there a part on order, and is there a form I have never been shown? The person who could answer the first is the workshop clerk, and I have her number and have never used it.',
]));

// ===================== 9.6 =====================
out.push(pb());
out.push(h2('9.6  Describing a scene on paper'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and let the drawings be bad. The sentence nobody could use is always an adjective — _it is quite a big room_ — and the class discovers it by holding up eleven different rooms.'));
out.push(A('**b** Usable: **2** and **4** — a position and a countable arrangement. Unusable: **1**, **3**, **5**. _Quite big_ is the worst of the three, because it sounds like information.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – a ward, for agency staff.'));
out.push(A('**b** **1** Where the reader will be **standing** — the doorway — and then ahead, left, right.   **2** That it is the order architects use: position before detail, always from the position of the person who is in it, because a plan is useless to somebody standing in a doorway.'));
out.push(NOTE('Rasha\'s two pages becoming eleven lines is the arithmetic of the cycle: _the two pages were me describing a ward I know very well, and the eleven lines are what somebody needs at nine o\'clock at night._ Every student\'s first draft is the two pages. Make them write the second one in the same lesson or the point is lost.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 The room you are in now.** _You come in from the corridor. The board is directly ahead and the window is on your left. The tables are in rows unless somebody has moved them, which they have. The thing nobody tells you: the light switch for this room is in Room 13, so if the room is dark, go next door._',
  '**2 A counter.** _You come in under the shutter. The bench is along the back, about two metres. The till is on your right and the safe is under it. The thing nobody tells you: the floor slopes four centimetres to a drain in the middle, so nothing with wheels stays where you put it._',
  '**3 A kitchen.** _You come in from the hall. The sink is under the window, ahead. The cooker is on your right. The thing nobody tells you: the second ring does not light from the switch and has to be lit with a match, and there are matches in the drawer on the left._',
  '**4 A stairwell.** _You come in off the street and the stairs are immediately on your right. There is no light on the first landing. The thing nobody tells you: the second fire door stands eight centimetres open and swings, so do not let a child go up alone._',
]));
out.push(S('Stage 3 · Practise (sample – back to back)'));
out.push(SAMPLE([
  '**A:** You come in through the shop door. The counter is directly ahead, about three metres, and it runs the whole width.',
  '**A:** The shelves are on your left, floor to ceiling. The bench and the bags are behind the counter on your right.',
  '**A:** The thing nobody tells you is that the floor slopes to a drain in the middle, so my chair is wedged with a folded card.',
  '**B:** So if I am standing in the door, the chair is in the middle and not behind the counter?',
  '**A:** It is behind the counter and in the middle of the width. That is my sentence failing, not your drawing.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The count of correct drawings is a measure of the **description**. Say so when somebody blames the drawer; the exercise is unforgiving and that is why it works. The commonest failure is giving two positions relative to each other instead of both relative to the door.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**b** _Two of my partner\'s three questions should have been answered in my eight lines: where the keys are kept, and whether the back door locks from the inside. The third — what to do if nobody comes at seven — is not a description question and I am glad she asked it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha has to write a description of the ward for agency staff, because they arrive at nine at night and there is nobody to show them anything. She thought she would start at bay one and work round, and then she tried it on her sister, who could not find anything. Lubna said start where they will be standing, and that is what Rasha did: you come in through the double doors from the lift, the station is directly ahead about four metres, bays one to three are on your left, bays four and five on your right, and bay five is the one you cannot see from the station. Lubna said that is the order architects use — position before detail, always from the position of the person who is in it, because a plan is useless to somebody standing in a doorway and what they need is left, right, ahead. Rasha said the bay you cannot see is in the second sentence, because it is the only sentence on the page that will save anybody anything; everything else they would find out in twenty minutes. So the rule is left, right, ahead, and then the thing that will cost them something if nobody tells them — and on her ward there are three of those: bay five, the bell in bay four that rings in a cupboard, and the trolley with no board. The whole page is eleven lines, and it was two pages when she started.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It is quite a big room. → ✓ about four metres by six.   ✗ The sink is next to the cooker. _(both unplaced)_ → ✓ place both from the door.   ✗ It feels old. → ✓ say what the age **does**.   ✗ describing everything in order from one corner → ✓ ahead, left, right, then the thing that costs something.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Three: bay five cannot be seen from the station; the bell in bay four rings in a cupboard; the trolley has no writing surface. _(The wrong sign by the lift is a fourth and is in a class of its own.)_'));
out.push(A('**2** Carry a clipboard — and hers is behind the station door and may be used.'));
out.push(A('**3** It invites corrections. Yes: four people have written on it and all four were right.'));
out.push(A('The last line is the thing to copy. A page that invites correction is a page people read, and _four people have, and all four were right_ is the sentence that proves it has happened. Compare 6.2, where Bassel\'s notice works because he gives nine rules away; the mechanism is the same — a document that concedes something is believed.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ROOM 9 · IF YOU ARE COVERING FOR ME** · nine lines · inside the cupboard door',
  'You come in from the corridor. My desk is directly ahead, against the window wall. The board is on your left and the cupboard you are reading this in is on your right.',
  'The tables are in five rows of six, and they must stay in rows: the back row cannot be seen from the desk if they are in groups.',
  '**The light switch for this room is in Room 13.** If the room is dark, go next door and ask; there is a second switch by the door with the wire outside the wall and it only works some of the time.',
  '**The window at the back does not shut.** The handle turns without engaging. In January the two children who sit under it need to be moved to the front, and they know that, and nobody minds.',
  'The register is in the top drawer, not in the office, whatever the office says.',
  'If something is not where this page says it is, write it at the bottom. Two people have.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**THE SHAALAN COUNTER · IF YOU ARE OPENING UP WITHOUT ME** · eleven lines · taped inside the shutter',
  'You come in under the shutter. The counter is directly ahead, three metres, the whole width of the shop. Shelves on your left, floor to ceiling. The bench, the tools and the bags of waiting telephones are behind the counter on your right.',
  '**The floor slopes about four centimetres to a drain in the middle.** Nothing with wheels stays where you put it, and the chair is wedged with a folded card that lives under the back leg. Do not throw the card away.',
  '**The power board is behind the door and it kills the bench light as well as the bench.** If you switch off before you have cleared the bench you will be working in the dark, and three telephones have been shut in here overnight in nine years, all three because of that switch.',
  'The safe is under the till. The till key is on me; if I am not here, do not open.',
  'The spare adhesive is in the second drawer and it is the only thing in this shop that is not where you would expect it, because the first drawer is damp.',
  'If something is not where this page says, write it at the bottom. Nobody has yet, because nobody has ever opened up without me.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"three telephones have been shut in here overnight in nine years, all three because of that switch." The number is what makes me believe the warning._   ✓ _"the whole width of the shop" — I do not know how wide the shop is, so it places nothing._   ? _Where do I sign, and is there anywhere to write?_ — not asked and not answered, and there is no sign-in at all, which is itself worth a line.'));
out.push(S('Stage 7R · Share'));
out.push(A('First versions run from a page to three pages; second versions from eight to twelve lines. Collect both numbers and then ask who will pin theirs up. Two or three will, and those are the only pages in the unit that a stranger will ever read.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I pinned it inside the double doors on Monday and an agency nurse read it on Tuesday night. She wrote two things at the bottom. The first was that the clipboard was not behind the station door, because I had it in my bag — which is my fault and now there are two. The second was: "Where is the linen really?" I had written that it is two floors down and I had not written which end, and she spent eleven minutes on the wrong landing. Eleven lines, and the first stranger to read it found two faults in one night.']));

// ===================== 9.7 =====================
out.push(pb());
out.push(h2('9.7  Review & Mediate: What do you think is happening?'));
out.push(S('Stage 1 · Unit 9 quiz – corrections'));
out.push(A('**1** It **must have been** taken in August.   **2** He **must be** the manager.   **3** It **can\'t** have been January.   **4** It **might be** pens.   **5** It couldn\'t **have** been a formal event.   **6** He **probably** worked there.'));
out.push(A('Item **3** is the one to spend time on: _mustn\'t_ is a prohibition and belongs to Unit 6, and the opposite of a deduction with _must_ is a deduction with _can\'t_. Students who have both units fresh mix them for about a fortnight.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** **What can now be said:** that the same person wrote both notes and probably took both photographs (same pencil, same hand); and that the man in the grey coat **definitely** worked there — he is in both, months apart, same coat, same pocket, and he is the only one in both. That is the first conclusion in three weeks to move **up**.   **What has become less certain:** Jad\'s ruling-out of the opening day. The painted sign has been replaced by a metal plate by February, so the building was being done up — which means the painted sign may have been old while the building was new to the company. His _can\'t_ becomes an _I doubt it_.'));
out.push(NOTE('Ms Huda\'s sentence is the one the unit exists for: **Jad did not make a mistake. He drew a correct conclusion from the evidence he had, and a new piece of evidence changed what the old piece meant.** Students — and most adults — treat a revised conclusion as a confession of error. Nine cycles have been building to the alternative, and this is the one place in the book where it is said outright.'));
out.push(S('Language box – saying what you think is happening, with evidence'));
out.push(A('No exercises. Use it as the checklist for Stage 3. Three habits: **evidence first, conclusion second**; **say which way a conclusion has moved**; and **refuse to speculate where there is nothing** — _three words in ink, crossed out heavily, unreadable, and nothing else_.'));
out.push(S('Stage 3 · Practise (sample – Scene A, a counter at closing time)'));
out.push(SAMPLE([
  'What I can see: a shutter half down with the light on inside, three telephones on the bench with two of them opened, a chair wedged with a folded card under one leg, the till drawer open and empty, a coat on a hook and a bag under the bench.',
  'The till is open and empty and the light is on, so it must be closing time rather than the middle of the night — nobody leaves a till open and a light on and goes home. The folded card under the chair leg must mean the floor is not level, and the card is folded rather than a wedge, so somebody has done it with what was there and has been doing it for a while.',
  'The coat and the bag might mean somebody is still in the building, or they could have been left on purpose because they are coming back in the morning, or they may belong to a customer. Nothing chooses.',
  'It can\'t be that the shop has been locked up for the night, because the shutter is half down and the light is on.',
  'One thing has moved up: the floor. The chair and the card are two independent pieces of evidence for the same slope.',
  'What I am not going to guess: why two of the three telephones are open and one is not.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Scene A: the chair and the folded card move the sloping floor up to a certainty. Scene B: the open window in January and the two sets of gloves do the same for the cold. In both, nobody can know **why** anything was left where it is — the paper on the floor, the two chairs turned to the wall, the third telephone — and the honest answer is a refusal.'));
out.push(S('Stage 4R · Report – mediation'));
out.push(A('Mark four things: evidence before conclusion throughout; one thing that moved up; one that moved down; and one refusal. The model report has all four and ends with a decision of the reporter\'s own — _to go back to the thing at my own work that I have been explaining for two years and ask what one new piece of evidence would do to it_ — which is the question to ask the whole class at the end of the unit.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 6'));
out.push(A('**1** was   **2** which _(or_ that _)_   **3** which   **4** with   **5** in   **6** that'));
out.push(A('_Notes:_ **3** must be _which_ and not _that_: it comments on the whole clause before it, after a comma. **4** _ended **with** fewer certainties_. **5** _the right direction to move **in**_ — a dependent preposition at the end of the clause, which is the hardest item on the page. **6** _so heavily **that**_ — the Unit 7.3 structure arriving in a cloze.'));
out.push(NOTE('Reading Part 6 is four to six marks for words almost all of which are **grammatical** rather than lexical: auxiliaries, relatives, prepositions, _that_. Teach the habit of asking what **kind** of word the gap needs before trying to think of one. Item 5 is the standard trap: a preposition stranded at the end of a clause, which students read over.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'What I can see is a second photograph of the same pavement, four men instead of eleven, and long shadows falling to the left.',
  'Long shadows and three overcoats, so it must be winter. The pencil on the back says 2/2, in the same hand as the first, so the same person must have written both and probably took both.',
  'It might be a few months after the first, or it could be a year or several years later. Nothing in either photograph chooses between them.',
  'It cannot be the same occasion, because the chairs are stacked inside the doorway and the sign has been replaced.',
  'One thing has moved up: the man in the grey coat, who is in both, months apart, with the same coat and the same pocket — that is now a definitely. And one thing has moved down: the opening day, which I had ruled out on a weathered sign, and the sign turns out to have been replaced, so it was old while the company may have been new.',
  'What I am not going to guess: the three words crossed out in ink. I could write a page about them and every line would be about me.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 151 words)'));
out.push(SAMPLE([
  'Dear Sam,',
  'Make two lists and keep them apart. The first is only what you can see — two women, a jug, wet patches — and it must have no conclusions in it at all, not even "a kitchen". The second is what you have worked out, and every line of it has to carry the reason in the same sentence.',
  'Then do the harder half. "It must be" can always be wrong, because there may be an explanation you have not thought of; "it can\'t be" can only be wrong if the evidence is wrong, and you can check the evidence. So write three things it cannot be and what rules each one out. Those three sentences will outlive everything else you write.',
  'Two photographs do something one cannot: anything or anybody that appears in both is far more certain than anything in either, and a difference between them gives you an order of events.',
  'One warning. When you find a second photograph, expect something you were sure of to come down. That is not you having been wrong — it is new evidence changing what the old evidence meant.',
  'Send me what you cannot rule out. That list is the useful one.',
  'Yours, Jad',
]));
out.push(S('Unit 9 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** a   **4** b   **5** a   **6** a   **7** b   **8** b'));
out.push(A('_Notes:_ **4** _can\'t have been_, never _mustn\'t have been_. **5** _might have been_ + _-ing_ for a past intention nobody carried out. **7** _I doubt it_ is the only one of the three that fits _but I cannot rule it out_. **8** defin**i**tely.'));
out.push(S('Unit 9 check  ·  B  Listening (Part 1, three options) – Track 9.15'));
out.push(A('**1** A   **2** B   **3** A   **4** B   **5** B   **6** B   **7** A'));
out.push(A('Extract **5** is the one students lose: the speaker says _it is the only explanation I have_, which sounds like certainty, and then grades himself at three. Part 1 regularly puts the answer in the **last** clause of an extract.'));
out.push(S('Unit 9 check  ·  C  Writing (sample, 162 words)'));
out.push(SAMPLE([
  '**THE STAIRWELL AT NUMBER 14** · for anybody coming up after dark',
  'You come in off the street. The stairs are immediately on your right and they turn twice before the first floor. The post boxes are on your left, and there is nothing else in that hall at all.',
  '**There is no light on the first landing.** The switch at the bottom works and the bulb above the first landing has not, for about two years. Take a telephone.',
  '**The second fire door stands about eight centimetres open and swings.** You can push it shut with a foot and it opens again, so do not let a small child go up ahead of you.',
  'It must have been a single house once: the stairs are wide and the first-floor doors are in the wrong places for flats. The landings must have been lit at some point, because there are two fittings and one of them has been painted over.',
  'It might have been divided in the 1970s, or it could have been much later. Nothing in the stairwell chooses.',
  'It cannot have been built with those post boxes, because they are screwed through the moulding.',
  'What I am not going to guess: who painted over the fitting, or why.',
]));
out.push(S('I can… (Unit 9)'));
out.push(A('Self-assessment; no answers. The three that matter are the third, the fourth and the eighth: ruling something out with the evidence attached, filling a full minute with the seven doors, and saying when a conclusion has moved. A class that ticks _must_ and _might_ and not those three has learnt two modals and missed the unit.'));
out.push(box('Looking ahead to Unit 10', [
  'Unit 10 teaches something the class has been doing for nine units without being told the rules. Every **4R Report** stage in this book is reported speech — sixty-three of them — and the Unit 9 NEXT box asks each student to bring **three sentences copied out of any report they have written**. 10.1 opens on those sentences, and most students will find that they have been getting backshift right by ear and the reporting verbs wrong.',
  '**10.3 raises A2 Unit 22** (_ask / tell somebody to_) and **10.5** is the cycle the unit turns on: _what was said, and what was meant_ — which is 9.1 and 9.2 arriving in speech, where the evidence is words and the deduction is intention.',
  'Two threads to carry. **Fares and September** is one line in 11.2. And the **four envelopes** — the 3.3 and 3.6 homework pages, the pinned introductions from 1.1 and the sealed first-impressions notes from 1.4 — are opened in **12.6**. Make sure every student still has theirs.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 9 · Answer Key');
