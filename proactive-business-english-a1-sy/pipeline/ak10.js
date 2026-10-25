// Proactive Business English A1 · Syria Edition · Book 2 · Unit 10 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 10  Safety and the Word NO'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This unit exists for one sentence:** ***I cannot do it alone. I need help.*** **Seven words, and most of the people in front of you have never said them at work.** **Everything else in the unit is around that sentence.**',
  '⚠ **Say the thing that makes it sayable, and say it early:** **nobody in this book is ever punished for saying it.** **Not once in twelve units.** **That is not an accident of plotting** — **a learner who believes the sentence is dangerous will not use it, and the book has to show them otherwise before the cycle arrives.**',
  '⚠ **10.3 is the only page in this course where RUDE IS RIGHT.** **STOP, shouted, flat, loud, and not _excuse me_.** **Make the class shout it. If it feels wrong to them, say that the feeling is correct and the word is still right** — **one second buys one word.**',
  '⚠ **And 10.4 is the cycle that undoes a habit rather than teaching one.** **_Be careful_ is not wrong; it is worn out.** **A man who says it every morning about everything has made it mean nothing and can no longer warn anybody about anything.** **A warning needs WHERE and WHAT TO DO INSTEAD.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 10.1 =====================
out.push(h2('10.1  The six signs'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Ask the second question properly and wait for an honest answer:** **can you read all of them?** **In most rooms somebody cannot, and in a workplace class somebody will say so only if you ask directly.**'));
out.push(p('**b**  Open. ⚠ **Drawing is the right task here and not a soft one.** **A sign is a picture with words on it, and a learner who can draw their own workplace\'s signs has noticed them** — **which half the room has not.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — six.   **b**  **1** FLAMMABLE.  **2** FIRE EXIT.'));
out.push(p('⚠ **The ending is the content and it is worth reading twice:** _Five signs stop you. One saves you. Learn that one first._ ⚠ **Ask the class, before you read it, which sign they think is the important one.** **Most will say DANGER. Nobody says FIRE EXIT.** **That gap is the cycle.**'));
out.push(p('⚠ **And FLAMMABLE is in the dialogue because it is the sign nobody can read.** **It is a long Latin word on a door and it means _this will burn_.** **A learner who leaves this cycle knowing one new sign should know that one.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'This one. What does it mean?'],
  ['B', 'FLAMMABLE. It means it burns.'],
  ['A', 'And what kind is it?'],
  ['B', 'It stops you.'],
  ['A', 'Which of the six is the important one?'],
  ['B', 'FIRE EXIT. Five stop you. One saves you.'],
]));
out.push(note("The last line is the drill and it should be said by every learner in the room, out loud, once. Five stop you, one saves you. It is six words and it reorders a wall full of signs that most of them have walked past for years without ranking."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **All six, from memory, then check.** ⚠ **Expect four or five.** **The two that go missing are FLAMMABLE, because it is unfamiliar, and HARD HATS MUST BE WORN, because it is long.** **Both are worth a second round.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — every sign at my work', [
  '**The sign:** NO SMOKING   **Means:** do not smoke   **Stops/saves:** stops   **Everybody can read it:** ⚠ **yes — it is in Arabic too**',
  '**The sign:** FIRE EXIT   **Means:** the way out   **Stops/saves:** ⚠ **saves**   **Everybody can read it:** ⚠ **no — English only**',
  '**The sign:** STAFF ONLY   **Means:** customers do not come in   **Stops/saves:** stops   **Everybody can read it:** no',
  '**The sign:** _(the cold room has nothing on it at all)_   **Means:** —   **Stops/saves:** —   **Everybody can read it:** ⚠ **there is no sign**'],
));
out.push(note("The fourth row is the one to look for and most learners find one: a dangerous place with no sign on it at all. A missing sign cannot be read by anybody, in any language, and it is a bigger gap than an untranslated one. If a learner's table has four signs and no gap, ask about the cold room, the fuse box and the roof."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _At my work there are three signs. Three stop you. None saves you. My fire exit is the back door and there is no sign on it._'));
out.push(p('⚠ **Count how many people know where their fire exit is, and say the number out loud.** ⚠ **Then ask the harder question: how many have a SIGN on it?** **The two numbers are usually different and the gap is the most useful fact produced in this cycle.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Two — NO SMOKING and KEEP OUT.  **2** Four.  **3** FIRE EXIT — it is the one that saves you and the one a man needs to read alone, in a hurry, possibly in smoke.'));
out.push(p('⚠ **Question 3 wants the reason as well as the sign.** **The five that stop you can be explained once by a colleague and remembered.** **The one that saves you has to be readable by a man on his own who has no time to ask** — **and that is the whole argument for which translation to pay for first.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (25 words)', [
  '**EVERY SIGN IN THIS SHOP — AND WHO CANNOT READ IT**',
  table(['Sign', 'Where', 'Who can read it'], [
    ['NO SMOKING', 'the door, the store', 'everybody — Arabic too'],
    ['STAFF ONLY', 'the back door', 'the three of us'],
    ['FIRE EXIT', 'nowhere', '⚠ **there is no sign**'],
    ['_(the fuse box)_', 'under the stairs', '⚠ **nothing on it at all**'],
  ], [2.2, 2, 2]),
  '⚠ **4 signs needed. 2 up. 1 in Arabic. The fire exit has nothing on it. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **A column saying WHO CAN READ IT** — **the column nobody writes and the whole point of the sheet.** **A fire exit on the list, even if the answer is that there is no sign.** ⚠ **And credit a learner who lists a sign that SHOULD be there and is not.** **That is harder than listing what is on the wall.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "NO SMOKING — everybody". ⚠ **Everybody? Is it in Arabic?**',
  '**(scanning)** four signs. ⚠ **Where is your fire exit on this list?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their fire exit line and the class answers one question: could everybody at that workplace find it?** **Not _is there a sign_** — **could everybody find it.** **A learner whose answer is _they would follow me_ has described a plan that depends on one man being there.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**There are two signs in our shop and both are in English. The fire exit has nothing on it. If there were a fire the two new girls would go to the front, into the street, past the gas.**',
]));
out.push(p('⚠ **That last clause is why this cycle is first in the unit.** ⚠ **Do not dramatise it and do not let the lesson become a fire drill** — **the class is here for the English.** **But a learner who has written that sentence has found something to change, and the homework asks them to write the list for a real wall.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Has anybody ever asked for a sign in Arabic?_ — **_No. Nobody thought of it._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many workplaces have a sign nobody can read?** ⚠ **And: how many have a danger with no sign at all?** **The second number is usually bigger, which is the finding** — **an unreadable sign is at least a sign, and a missing one is not even a question.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**NO SMOKING — door and store — Arabic too, everybody. STAFF ONLY — back door — English, three of us. FIRE EXIT — nowhere, needs one. FUSE BOX — under the stairs, nothing on it.**',
]));

out.push(pb());
// ===================== 10.2 =====================
out.push(h2('10.2  Must and must not'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Three each, and take them fast.** **_must_ is easy and the class will produce it immediately** — **the work in this cycle is not the grammar.**'));
out.push(p('**b**  Open. ⚠ **Listen for whether the _must nots_ are real.** **A learner who says _I must not be late_ has given you a rule; a learner who says _I must not touch the mixer when it runs_ has given you the three.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A — three.   **b**  **1** No standing on a carton; no walking behind a reversing lorry; no opening the paint store with a cigarette.  **2** _The other six are good advice. Nobody has died of the other six._'));
out.push(p('⚠ **The content is Abu Yasser\'s explanation and it is counter-intuitive:** _If I shout about all nine, nobody believes me about the three._ ⚠ **Nine rules nobody enforces are WEAKER than three rules nobody is ever allowed to break.** **Put that on the board.**'));
out.push(p('⚠ **And the last line is the price he pays for it:** _I choose three and I never once let one go._ **The strategy only works if the three are enforced every single time, including on a busy Thursday and including on a man he likes.** **Ask the class whether that happens where they work.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The paper on the wall has nine rules.'],
  ['B', 'Nine rules. I enforce three.'],
  ['A', 'Three?'],
  ['B', 'You must not stand on a carton. You must not walk behind a reversing lorry. You must not open the paint store with a cigarette.'],
  ['A', 'And the others?'],
  ['B', 'The others are good advice. Nobody has died of the others.'],
]));
out.push(note("The fourth line is three must nots in one breath and it is the only drill in the cycle that matters. Make them say all three without pausing — a supervisor who has to think between his own rules does not sound like a man who enforces them."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How many, and which.** ⚠ **The number first.** **A listener who writes three rules has heard the content; a listener who writes nine has written down the wall.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — rules on paper against rules enforced', [
  '**1** _Wash your hands before handling bread._ — **on paper:** yes — **enforced:** ⚠ **yes, every time**',
  '**2** _Wear the apron._ — **on paper:** yes — **enforced:** yes',
  '**3** _Do not carry trays on the wet floor._ — **on paper:** ⚠ **no** — **enforced:** ⚠ **no, and two people have fallen**',
  '**4** _Keep the fire door clear._ — **on paper:** yes — **enforced:** no — the bread racks live there',
  '**5** _No mobile telephones at the counter._ — **on paper:** yes — **enforced:** no',
]));
out.push(note("Row three is the finding and nearly every class produces one: the rule that is not on paper, is not enforced, and is the only one that has actually hurt anybody. That inversion is the argument for this cycle — the paper and the danger are two different lists, and nobody has compared them."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _At my work there are five rules on paper. Two are enforced. The one that matters most is not on the paper at all: you must not carry trays on the wet floor._'));
out.push(p('⚠ **Add up all the rules in the class and all the enforced ones, and put both numbers on the board.** **The ratio is usually about one in three.** ⚠ **Then ask the question the cycle is built for: which of the UNENFORCED ones has hurt somebody?** **That one belongs on the short list.**'));
out.push(p('**Board clinic:** four lines, two with _musts_ or _must to_. ⚠ **Correct them, then say the rule in the 4.6 form:** **_must_ takes no -s and the verb after it is bare, exactly like _can_.** **Second time.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Nine on A, three on B.  **2** A reason — and a reason that is a real event.  **3** Rule nine, _follow all instructions_.'));
out.push(p('⚠ **Question 3 is the sharpest item in the unit.** **_Follow all instructions_ is rule nine on the old paper and it means nothing at all** — **it is a sentence that covers everything and therefore forbids nothing.** **Ask the class what a man would do differently on Monday because of it.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (39 words)', [
  '**THE SHOP — THREE RULES**',
  '**1 You must not carry a full tray across the wet floor.** ⚠ **Two people have gone over on it. Hala in April, me in February. Put the tray down and walk round.**',
  '**2 You must not put the bread racks in front of the fire door.** ⚠ **It is the only way out of the back. Six people work behind that door.**',
  '**3 You must not open the gas with the oven lit.** ⚠ **The whole shop, not just the oven.**',
  '⚠ **Three rules. Each one has nearly hurt somebody here. I enforce all three, every time. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **THREE rules, not nine.** **A reason on every one** — ⚠ **and the reason must be a thing that happened or can happen, not a word.** **_Two people have gone over on it_ is a reason. _For safety_ is not.** **And the promise at the bottom.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "You must not be careless". ⚠ **What is the thing? And what happened?**',
  '**(counting)** seven rules. ⚠ **Which three would you shout about? Cross out four.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read ONE rule with its reason and the class answers one question: would the reason stop you?** **A reason that names a person who fell stops people.** **A reason that says _it is dangerous_ does not** — **and the class is immediately good at telling the two apart.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**We have eleven rules on the wall from the old owner. Nobody has read them for years. The one that matters is not on the list, and the manager says it every morning instead.**',
]));
out.push(p('⚠ **_The manager says it every morning instead_ is a real finding and it connects straight to 10.4:** **a rule that has to be said every morning is a rule that is not written where it needs to be** — **and a man who says it every morning is on his way to being ignored, like _be careful_.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Has anybody ever been hurt by that one?_ — **_Two. One went to hospital._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many rules in this class have hurt somebody?** ⚠ **And of those, how many are written down?** **The second number is smaller.** **That inversion is the unit and the class finds it itself.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (28 words)', [
  '**1 No full trays across the wet floor — two have fallen. 2 Nothing in front of the fire door — six work behind it. 3 No gas with the oven lit — the whole shop.**',
]));

out.push(pb());
// ===================== 10.3 =====================
out.push(h2('10.3  STOP'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **One word, and refuse a sentence.** **A learner who offers _excuse me, there is a man behind you_ should be timed saying it** — **about two seconds, in which a reversing lorry travels a metre.**'));
out.push(p('**b**  ⚠ **Do this and do not skip it.** **Everybody, together, loud, once.** **Most adults in a classroom have never shouted a word in a foreign language in front of other people, and the first time has to happen somewhere safe.** **Then they have done it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — Abu Raed.   **b**  **1** _STOP! STOP!_  **2** _Abu Raed is behind you. He was picking up a nail._'));
out.push(p('⚠ **Abu Raed\'s line is the one to read twice and it is fifty years of experience in two sentences:** _I heard him shout and I did not move. When a man shouts, you stop. You do not look round._ ⚠ **Looking round is the instinct and it is the thing that kills people.** **The notice in Lesson B has a line for it.**'));
out.push(p('⚠ **And Ammar\'s honesty:** _I did not know the English for "there is a man behind you". So I shouted STOP._ **He did the right thing BECAUSE he did not have the sentence, not in spite of it.** **Say that to a class that is frightened of its own English.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'STOP! STOP!'],
  ['B', '_(brakes)_ What? What?'],
  ['A', 'Abu Raed is behind you. He was picking up a nail.'],
  ['B', 'I did not see him. There is nothing in the mirror.'],
  ['A', 'He was low down. On the ground.'],
  ['C', 'I heard him shout and I did not move.'],
]));
out.push(note("Threes, and the shout must be real — a quiet STOP teaches the opposite of the cycle. Warn the class next door. And rotate all three roles, because the man on the ground who hears a shout and does not move is the hardest part to play and the one that matters most: standing still while somebody shouts at you is not an instinct."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How long between the shout and the explanation — and was there an explanation at all?** ⚠ **The explanation is the half that gets dropped**, **and a driver who is shouted at and not told why will ignore the next shout.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four times I wanted to stop somebody', [
  '**What was happening:** a customer walked towards the wet floor with a baby   **Did I shout:** ⚠ **no**   **What I said:** nothing   **What happened:** she did not slip',
  '**What was happening:** the bread man reversed towards the gas bottles   **Did I shout:** yes   **What I said:** _STOP!_   **What happened:** he stopped, then swore, then thanked me',
  '**What was happening:** a boy put his hand near the slicer   **Did I shout:** yes   **What I said:** _NO!_   **What happened:** he took it away',
  '**What was happening:** Hala carried two trays down the broken step   **Did I shout:** ⚠ **no — I did not want to startle her**   **What happened:** ⚠ **she went over. Nothing broken.**',
]));
out.push(note("Rows one and four are the useful ones and they are honest: twice the learner said nothing, once because it felt rude and once because startling her seemed worse than letting her fall. Both reasons are real and both were wrong. Do not lecture. Read row two aloud — he stopped, then swore, then thanked me — and let the class notice the order."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Hala was about to carry two trays down the broken step. I said nothing, because I did not want to startle her. She went over._'));
out.push(p('⚠ **Count the times somebody said NOTHING, and then ASK WHY.** **The answers are the cycle:** _it felt rude · I did not want to startle him · I did not know the words · it was not my place._ ⚠ **Write all four reasons on the board and leave them there.** **Then read Abu Raed\'s line.**'));
out.push(p('**Board clinic:** ⚠ **do this one as written and do it standing up.** **Walk backwards across the room with your back turned and let four learners shout STOP at the moment they choose.** **Then discuss who was loud enough and who waited too long.** **It takes two minutes and it is the only rehearsal they will get.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Stand still — and not look round.  **2** Nine seconds.  **3** Because Abu Raed was on the ground picking up a nail and Ammar shouted.'));
out.push(p('⚠ **Question 1 is the one most learners get half right.** **_Stand still_ is half; _do not look round_ is the other half and it is the instinct being overridden.** ⚠ **And question 3 matters because the notice names a real event** — **a notice with a story in it is read once and remembered.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (38 words)', [
  '**THE SLICER — WHAT TO DO AND WHAT TO SHOUT**',
  '**If you are USING it:** stand square to it, both hands on the guard. ⚠ **Never clear it while it runs.**',
  '**If you SEE somebody reach into it:** ⚠ **SHOUT "STOP". One word. As loud as you can. In any language.**',
  '**If somebody shouts at YOU:** ⚠ **freeze. Do not pull your hand back fast and do not look round.**',
  '**If you are the OWNER:** stop the machine at any shout, every time, even if it turns out to be nothing.',
  '⚠ **Why this notice exists: a boy put his hand in while it ran in March and I shouted. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **A line for EVERY PERSON involved** — **four lines that fit together.** **A notice that tells the user what to do and leaves the onlooker not knowing whether to shout has left out the person who can actually prevent it.** ⚠ **One word to shout, in capitals.** **And a real story at the bottom.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at two lines. ⚠ **What about the man who SEES it? Does he shout or not?**',
  '**(pointing)** at the bottom. **(reading)** "in the interests of safety". ⚠ **What actually happened? Write that.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their notice and the class checks that every person in it knows what to do.** **Count the people, then count the lines.** **If the numbers differ, somebody in that yard is going to stand still and watch.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**In March a boy reached into the slicer while it was running. I shouted NO and he took his hand away. Nothing changed. There is still no guard and no notice on it.**',
]));
out.push(p('⚠ **_Nothing changed_ is the commonest ending to a near-miss paper and it is the reason 7R asks the question it does.** **A near miss with no consequence teaches nobody anything** — **and the homework in this cycle is the smallest possible consequence: one word, written down, and the name of who needs to hear it.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did anything change afterwards?_ — **_No. We talked about it for a day._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: after how many near misses did something change?** **Very few.** ⚠ **Then the useful half: what was the SMALLEST thing that changed in the cases where something did?** **Usually a card, a chair moved, or one sentence said to one person** — **which is within reach of everybody in the room.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (21 words)', [
  '**My word is STOP. The people who need to hear it: the bread man when he reverses, and whoever is using the slicer.**',
]));

out.push(pb());
// ===================== 10.4 =====================
out.push(h2('10.4  The floor is wet'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Three each, and push for the specific one.** **_The machine is dangerous_ is a sentence; _the blade guard is loose_ is a warning.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask why the first does not work, and let the class answer.** **Somebody will say _because he says it all the time_**, **which is the cycle, arriving from the room before the dialogue.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — nobody fell, but Nour nearly did.   **b**  **1** Because Majd says it every morning about everything.  **2** _The floor by the door is wet. Walk round by the shelf._'));
out.push(p('⚠ **The diagnosis is Nour\'s and it is brutal:** _He says be careful every morning. About everything. — So nobody hears it._ ⚠ **_Be careful_ is not wrong. It is worn out**, **and the man who wore it out can no longer warn anybody about anything.** **That is a real cost and most classes have somebody like Majd.**'));
out.push(p('⚠ **And the last line adds the thing a sentence cannot do:** _I put a chair on the wet part so they can see it as well as hear it._ **Second time in Book 2 that the answer is furniture** — **the pen by the telephone in 6.3 was the first.** **Point back at it.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The floor by the door is wet. I nearly went over.'],
  ['B', 'Majd said be careful to everybody this morning.'],
  ['A', 'He says be careful every morning. About everything.'],
  ['B', 'So nobody hears it.'],
  ['A', 'I will say it differently. The floor by the door is wet. Walk round by the shelf.'],
  ['B', 'That I would hear. Because it says where and what to do.'],
]));
out.push(note("The fifth line is the drill and it is two sentences, not one. Learners produce the first half — the floor by the door is wet — and stop, because it feels complete. It is not: a warning with no alternative in it leaves the other man standing at the door with nowhere to go, and he will walk across it anyway."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Did the real warning have BOTH halves?** ⚠ **Where, and what to do instead.** **Count the pairs that gave only the where** — **it is usually most of them on a first run.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four real warnings', [
  '**The danger:** the wet floor   **Where exactly:** by the door, first two metres   **Instead:** come in past the bread rack',
  '**The danger:** the broken step   **Where exactly:** the back door, bottom step   **Instead:** use the front, or hand the trays down',
  '**The danger:** the slicer with no guard   **Where exactly:** the blade side   **Instead:** ⚠ **do not use it at all — use the knife**',
  '**The danger:** the gas bottle by the oven   **Where exactly:** behind the oven, left side   **Instead:** ⚠ **nothing. It must be moved. Tell the manager.**',
]));
out.push(note("Rows three and four are the honest ones. Sometimes the instead is do not use it, and sometimes there is no instead at all and the only answer is to tell somebody — which is 10.5, one cycle away. A learner who writes nothing. It must be moved has understood that a warning is sometimes a report in disguise."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The floor by the door is wet, the first two metres. Come in past the bread rack instead._'));
out.push(p('⚠ **Count the warnings with a WHAT TO DO INSTEAD.** **That is the half that gets obeyed.** ⚠ **A warning with only a where is a warning that makes a man stop, look, and then do the dangerous thing carefully** — **which is not what you wanted.**'));
out.push(p('**Board clinic:** ⚠ **say _be careful_ eight times in a row, about eight different things, in one minute.** **Then ask the class when it stopped meaning anything.** **Usually by the third.** **That is the whole clinic and it needs no explanation afterwards.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Until about 10.00 every morning.  **2** It is ice from the cold room, melting and running under the door.  **3** It says when the notice comes down.'));
out.push(p('⚠ **Question 1 is the item that teaches.** **_Wet until about 10.00 every morning_ is believable because it is limited** — **a notice that says the floor is always wet is walked past at four in the afternoon when it is dry, and then walked past at nine the next morning too.**'));
out.push(p('⚠ **And question 3 is the honest line:** _this card comes down when somebody fixes the drain._ **A warning notice is a repair that has not happened yet, and saying so stops it becoming part of the wall** — **which is what happened to notice A for two years.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (36 words)', [
  '**THE BOTTOM STEP AT THE BACK DOOR IS BROKEN.**',
  '**Why:** the concrete has gone at the edge. It looks whole from above.',
  '⚠ **USE THE FRONT DOOR, or hand the trays down to somebody standing at the bottom.**',
  '**It has already happened to:** Hala, in January, with two trays. Nothing broken.',
  '⚠ **This notice comes down when the step is mended. I asked on 14 January and again on 2 February. H.M.**',
]));
out.push(p('**What to credit.** **Where, exactly.** ⚠ **WHEN — and not _always_.** **What to do instead.** ⚠ **And a line saying when the notice comes down**, **with the dates it has been asked for if there are any.** **That last detail turns a warning into a record of a request.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "the floor is wet". ⚠ **When? All day? I came in at four and it was dry.**',
  '**(pointing)** at the bottom. **(reading)** nothing. ⚠ **When does this card come down? Who is going to fix it?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _comes down when_ line and the class answers one question: is anybody actually going to do it?** **A line that says _when it is fixed_ with no name and no date is a notice that will be there in two years** — **like notice A.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**There is a yellow CAUTION sign in the corner that has been there since before I started. Nobody knows what it was for. It is in front of the fuse box now.**',
]));
out.push(p('⚠ **That sample is the perfect end state of a warning nobody wrote properly:** **a sign whose danger nobody remembers, standing in front of a real one.** ⚠ **It is also 10.1 and 10.4 in one sentence** — **a sign that cannot be read, and a warning that has become furniture.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _How long has it been there?_ — **_Longer than me. Four years at least._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then ADD UP how long these notices have been on the wall and put the total in YEARS on the board.** **A class of sixteen usually produces thirty or forty years of unread notices.** **Say the number and nothing else.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(p('⚠ **This homework asks the learner to PUT A CARD UP.** **Ask next lesson whether it is still there and whether anybody said anything.**'));
out.push(sample('Sample answer (24 words)', [
  '**THE BOTTOM STEP IS BROKEN. Use the front door or hand the trays down. Hala fell here in January. This card comes down when it is mended.**',
]));

out.push(pb());
// ===================== 10.5 =====================
out.push(h2('10.5  There is a light and it does not work'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Ask for the HOW LONG and write the numbers on the board.** **Weeks and months, usually.** **The length is the thing that makes the room angry, and the anger is useful here.**'));
out.push(p('**b**  ⚠ **Insist on a NAME, not a job title.** **_The office_ is not a person. _The manager_ is nearly a person.** **_Nour_ is a person.** **A learner who cannot name one has found their real problem.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A — Abu Yasser, this morning.   **b**  **1** He had written it three times and told nobody.  **2** He told a person.'));
out.push(p('⚠ **The whole cycle is in one exchange:** _You wrote it on the sheet. Did you TELL anybody? — The sheet is for telling. — The sheet is for the record. A person is for telling._ ⚠ **Put that distinction on the board.** **Samih did the paperwork perfectly three times and told the wall.**'));
out.push(p('⚠ **And _I told the wall three times_ is the line the class will remember.** ⚠ **Then: _Unit six. The slip AND the telling._** **Second time the book has needed 6.6, and Samih names it himself** — **which is the book saying that a thing learned three units ago is supposed to come back.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Samih. The light over the loading door.'],
  ['B', 'Three nights. I wrote it on the sheet three times.'],
  ['A', 'You wrote it on the sheet. Did you TELL anybody?'],
  ['B', 'The sheet is for telling.'],
  ['A', 'The sheet is for the record. A person is for telling.'],
  ['B', 'I told the wall three times.'],
]));
out.push(note("The third line is the one to drill hard and it belongs to the person asking, not the person reporting — because the supervisors in the room are the ones who need it. Did you tell anybody? is four words that would have saved three nights of unloading in the dark."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **The thing, how long, and who was told.** ⚠ **Three answers, and the third is often _nobody_.** **Let it be said out loud.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four unsafe things, and a NAME for each', [
  '**The thing:** the broken step   **How long:** 5 weeks   **Means:** somebody carries trays down it eight times a day   **Will tell:** ⚠ **Nour, today**',
  '**The thing:** no guard on the slicer   **How long:** since March   **Means:** nobody uses it, so we cut everything by hand   **Will tell:** ⚠ **the manager, Monday — in writing as well**',
  '**The thing:** gas bottle behind the oven   **How long:** always   **Means:** ⚠ **I do not know what it means. That is why I am telling somebody.**   **Will tell:** the manager, today',
  '**The thing:** the fire exit has no sign   **How long:** always   **Means:** the two new girls would go the wrong way   **Will tell:** Nour, today',
]));
out.push(note("The third row is the most honest thing a learner can write in this cycle: I do not know what it means, that is why I am telling somebody. Reporting does not require you to have diagnosed it — 7.2 said say what you see and let the man with twenty years do the thinking, and this is the same rule applied to danger."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _There is a step at the back door and it is broken. Five weeks. Somebody carries trays down it eight times a day. I will tell Nour today._'));
out.push(p('⚠ **Two counts: how many named a PERSON, and how many said _the office_ or _somebody_.** **Put both up.** ⚠ **A report addressed to _the office_ is a report addressed to the wall**, **and the cycle has just spent ten minutes on what that costs.**'));
out.push(p('**Board clinic:** four reports with no person named. ⚠ **The class puts a REAL NAME on each** — **from their own workplaces, out loud.** **A learner who hesitates has learned something about their workplace rather than about English.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Three days — Tuesday, Wednesday and Thursday sheets, told to nobody until Friday.  **2** The wet floor — told to Majd every morning and the drain is still not fixed.  **3** The saw — nothing written, nobody told, and nobody has used it since March.'));
out.push(p('⚠ **Question 3 is the hardest idea in the cycle.** **A dangerous thing that everybody is quietly avoiding LOOKS like a solution and is not** — **it is a danger waiting for a new man who does not know to avoid it.** ⚠ **And the book\'s own arithmetic is in the last line:** **written and not told took three days; told and not written is still not fixed; BOTH took one day.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (33 words)', [
  '**UNSAFE THINGS — REPORTED, TOLD, AND DONE**',
  table(['The thing', 'Written on', 'Told to, and when', 'Done?'], [
    ['broken back step', 'Jan + Feb sheets', '⚠ **nobody until 14 April**', '✗ **asked twice, not mended**'],
    ['wet floor by the door', 'nothing', 'Hala, every morning', '✗ **the drain is not fixed**'],
    ['fire exit has no sign', 'nothing', 'Nour, 14 April', '✓ **sign up 16 April**'],
    ['no guard on the slicer', 'nothing', 'nobody', '⚠ **✗ — and nobody has used it since March**'],
  ], [1.8, 1.6, 2.2, 2.4]),
  '⚠ **Written and not told: three months. Told and not written: nothing. Both: two days. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **Written and told in SEPARATE columns** — **they are different actions and the book proves it with its own figures.** **A NAME and a DATE in the told column.** ⚠ **And at least one line that is a quiet avoidance rather than a fix.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "told the office". ⚠ **Who in the office? And when?**',
  '**(pointing)** at four lines. ⚠ **Which one is everybody just avoiding? There is always one.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their quiet-avoidance line and the class answers: what happens when a new person arrives?** **The answer is always the same and the class says it quickly** — **which is the point.** **An avoided danger is a danger with a date on it, and the date is the next new man\'s first week.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**The slicer has had no guard since March. All of us cut by hand instead and nobody has written it down. A new girl started last week and nobody has told her about it yet.**',
]));
out.push(p('⚠ **_Nobody has told her about it yet_ is the sentence this cycle exists to produce**, **and in a real class it is said with a change of expression.** ⚠ **The homework asks for four unsafe things with a NAME and a DATE** — **and that is the smallest useful action available to anybody in the room.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Does the new man get told?_ — **_Somebody usually mentions it. Usually._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many does a new person get TOLD?** **_Usually somebody mentions it_ does not count.** ⚠ **A danger that is passed on by chance is a danger that will not be passed on once** — **and once is all it takes.** **Say that and stop.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**Broken step — Nour — today. Slicer guard — the manager — Monday, in writing. Gas bottle — the manager — today. Fire exit sign — Nour — today. Four things, four names, three dates.**',
]));

out.push(pb());
// ===================== 10.6 =====================
out.push(h2('10.6  I cannot do it alone'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Note the shape of the question: a thing you cannot do alone AND HAVE DONE ALONE.** **That is deliberate.** **Nearly everybody has one, and naming it is what makes the cycle personal rather than theoretical.**'));
out.push(p('**b**  ⚠ **Together first, then alone to a partner.** **The chorus takes the edge off and the second time is the real one.** **Seven words, said twice, in a room where nothing can go wrong** — **and then they have said them.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — yes, with Ammar, at eleven.   **b**  **1** He had moved a paint pallet alone.  **2** _You did not say no. You said you need help. They are different sentences._'));
out.push(p('⚠ **This is the most important dialogue in Book 2 and the content is in two lines.** **First:** _You did not say no. You said you need help. They are different sentences._ **Second, and it is the one that makes it usable:** _in nine years I have never once been angry with a man who said the second one._'));
out.push(p('⚠ **And Samih\'s honesty about why he did it alone last Thursday:** _you were busy and I did not want to say no._ ⚠ **He did not confuse the two sentences out of ignorance.** **He confused them under pressure, which is the only way anybody ever confuses them.** **Say so: _they felt the same last Thursday. — They always do._**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The paint pallet. Move it to row four.'],
  ['B', 'I cannot do it alone. I need help.'],
  ['A', 'All right. Ammar is back at eleven.'],
  ['B', 'Then I will do it at eleven.'],
  ['A', 'Good. Last Thursday you moved one alone.'],
  ['B', 'I did.'],
]));
out.push(note("The fourth line is the half that makes the whole thing work and it is the half learners drop. Then I will do it at eleven. Without it the exchange ends on a refusal and the supervisor has a job and no time for it. With it, the job is done at eleven and nobody has lost anything. Drill line two and line four together as one unit."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Did the speaker say WHEN they could do it?** ⚠ **That is the half that makes it work**, **and a pair who ended on _I need help_ have performed a refusal.** **The class should say so.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four two-man jobs', [
  '**The job:** carrying the 50kg flour in   **Why two:** the step, and the weight   **Done it alone:** ⚠ **yes, many times**   **Next time I will say:** _I cannot do it alone. I will do it when Samih comes at seven._',
  '**The job:** the big trays down the broken step   **Why two:** you cannot see your feet   **Done it alone:** ⚠ **yes, and I fell**   **Next time:** _I cannot do it alone. Stand at the bottom and I will hand them down._',
  '**The job:** moving the gas bottle   **Why two:** it tips   **Done it alone:** no   **Next time:** _I cannot do it alone and I will not try._',
  '**The job:** closing up with the night takings   **Why two:** ⚠ **nobody should carry money out alone**   **Done it alone:** yes, every Friday   **Next time:** _I cannot do it alone. Come to the door with me._',
]));
out.push(note("The fourth row is the one teachers do not expect and it comes up in nearly every shop class: carrying money out of a building at night. It is a two-man job for a reason that is not about weight at all, and the sentence works for it unchanged. That generality is worth pointing out — seven words that cover a pallet and a cash bag."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Carrying the flour in needs two because of the step. I have done it alone many times. Next time I will say I cannot do it alone and I will do it when Samih comes._'));
out.push(p('⚠ **Count the jobs people have done alone.** ⚠ **Then the question the cycle is built on: in how many would the seven words have WORKED?** **Almost all of them.** **Put both numbers up side by side and leave them there for the rest of the lesson.**'));
out.push(p('**Board clinic:** four refusals — two are bare _no_ and two have no WHEN. ⚠ **Fix all four, then read the fixed versions aloud in a row.** **Four good ones in sequence is what makes the shape audible.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** It tips.  **2** The paint store — nobody goes in alone at all.  **3** That nobody has been in trouble for saying any of these.'));
out.push(p('⚠ **Question 2 is a distinction worth drawing out:** **three of the four jobs can be done later with help; the paint store cannot be done alone ever, help or no help.** ⚠ **And question 3 is the supervisor\'s half of the deal.** **A two-man list without that line is a list of ways to look weak.** **With it, it is permission in writing.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (40 words)', [
  '**TWO-MAN JOBS IN THIS SHOP — AND WHAT TO SAY**',
  table(['The job', 'Why two', 'What to say'], [
    ['50kg flour in from the van', 'the step, and the weight', '_I cannot do it alone. I need help. I will do it when Samih comes at seven._'],
    ['big trays down the back step', 'you cannot see your feet', '_I cannot do it alone. Stand at the bottom and I will hand them down._'],
    ['moving the gas bottle', '⚠ **it tips, and it is gas**', '_I cannot do it alone and I will not try. Who is coming with me?_'],
    ['the takings, after dark', '⚠ **nobody carries money out alone**', '_I cannot do it alone. Come to the door with me._'],
  ], [1.6, 1.8, 3.4]),
  '⚠ **Four jobs. Nobody here has ever been in trouble for saying any of these. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **THE SENTENCE WRITTEN OUT IN FULL on every line** — **not _ask for help_, the actual words, so a man can read them off the card and say them.** **A WHEN in every sentence.** **A reason in the middle column.** ⚠ **And the line at the bottom.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at the third column. **(reading)** "ask for help". ⚠ **Write the words. What do I actually SAY?**',
  '**(pointing)** Here. **(reading)** "I cannot do it alone". ⚠ **And when CAN you? Put the when in.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read one sentence from their third column OUT LOUD AND FLAT, and the class says whether it sounded like an excuse or like information.** ⚠ **This is the only stage in the course where delivery is marked**, **and it belongs here: the same seven words said apologetically get a different answer from the same seven words said flat.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**I carried the flour in alone for two months because the manager was always on the telephone when the van came. My back went in November and I was off for nine days.**',
]));
out.push(p('⚠ **_Because the manager was always on the telephone_ is the real reason people do two-man jobs alone, and it is not stubbornness or pride** — **it is that asking requires finding somebody.** ⚠ **Which is why the 6P check insists on a WHEN:** _I will do it when Samih comes at seven_ **does not require anybody to be found now.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _What would have happened if you had asked?_ — **_She would have said wait. That is all._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many would asking have cost NOTHING AT ALL?** **Nearly all.** ⚠ **Say that number and then say nothing for four seconds** — **9.5\'s silence, used on purpose, in the last cycle of the unit.** **It is the most useful quiet moment in this book.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(p('⚠ **This homework asks for a NAME and a week.** **Ask about it next lesson, quietly, and do not make a learner who did not do it say so in front of the room.**'));
out.push(sample('Sample answer (23 words)', [
  '**I cannot do it alone. I need help. I will say it to Samih on Sunday, when the flour van comes at seven.**',
]));

out.push(pb());
// ===================== 10.7 =====================
out.push(h2('10.7  Review: the safety notice'));
out.push(stage('1', 'Get ready – Unit 10 quiz'));
out.push(table(['', 'The answer'], [
  ['**10.1**', '_NO SMOKING · DANGER · KEEP OUT · FIRE EXIT._ ⚠ **FIRE EXIT saves you.**'],
  ['**10.2**', '_You must not ______._ ⚠ **Three, with a reason on each.**'],
  ['**10.3**', '_STOP!_ ⚠ **Shouted, not said.**'],
  ['**10.4**', '_The floor by the door is wet. Walk round by the shelf._ ⚠ **Both halves.**'],
  ['**10.5**', '_There is a ___ and it ___. Three weeks. I will tell [a NAME] today._'],
  ['**10.6**', '_I cannot do it alone. I need help. I will do it at eleven._'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **10.3 must be SHOUTED to count** — **a quiet STOP is not the thing the cycle taught.** **And 10.6 must have the WHEN on it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — everybody, including Abu Yasser.   **b**  **1** Rule two: nobody walks behind a reversing lorry.  **2** That Abu Raed was on the ground and the driver did not look.'));
out.push(p('⚠ **This is the only mediation in the whole course where the SUPERVISOR is in the wrong and says so out loud:** _I have enforced that rule on four men and broken it myself a hundred times._ ⚠ **It is the hardest sentence anybody says in this book.** **Read it twice and let the room sit with it.**'));
out.push(p('⚠ **And Fouad\'s arithmetic is correct and must be respected:** **nine seconds, twenty times a day, is three minutes a day for a thing that has never happened.** **Samih is right too — the drivers do know them and do look.** ⚠ **And Ammar\'s question is the one that breaks it open:** _Is it? Or is it the only time somebody happened to be watching?_'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Fouad is not lazy and must not be played as lazy.** **He has done the sum and the sum is right.** ⚠ **And Ammar is not a new man being pious** — **he is the one who shouted, and he saw what the driver did not.** **A pair who play this as careful-against-careless have missed it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **_Both._** **Then: what did Abu Yasser admit?** **That he has enforced a rule on four men and broken it a hundred times himself.** ⚠ **Ask the class whether they have ever heard a supervisor say anything like it.** **Usually not** — **and the fact that it is remarkable is part of the lesson.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — a rule everybody breaks, including the enforcer', [
  '**The rule:** nothing in front of the fire door.   **Why people break it:** the bread racks have nowhere else to go on a Thursday.   **What obeying it would cost:** ⚠ **moving forty racks twice a week, or buying a shelf.**',
  '**The rule:** no mobile telephones at the counter.   **Why people break it:** the manager rings us on them.   **What obeying it would cost:** ⚠ **nothing — but then the manager cannot reach us.**',
]));
out.push(note("The second sample is the commonest shape and it is the same as the lorry: a rule that conflicts with how the work is actually done, enforced by somebody who also breaks it. In both cases the rule is not being failed — it was written without counting the cost of obeying it. That is the finding and the class gets there from its own examples."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Fouad**', '⚠ **nine seconds twenty times a day is three minutes, every day, for a thing that has never happened** — **and the drivers do know them and do look**', '**the habit.** ⚠ **Two seconds and a nod, every time, including when he is in a hurry.**'],
  ['**Ammar**', '⚠ **Abu Raed was on the ground and the driver did not look** — **a rule broken a hundred times with no harm is not a safe rule, it is a rule that has not been tested yet**', '**the nine seconds.** ⚠ **He stops asking for the walk round the front.**'],
  ['**Abu Yasser**', '**he has enforced the rule on four men, and he says out loud that he has broken it himself a hundred times**', '⚠ **the old rule, and the position of being obeyed by nobody including himself.**'],
], [1.4, 4.6, 3.2]));
out.push(p('**Report (sample):**  _Fouad is right because nine seconds twenty times a day is three minutes for a thing that has never happened. Ammar is right because Abu Raed was on the ground and the driver did not look. So the rule changes: walk behind a reversing lorry only when the driver has seen you and nodded. Two seconds, not nine, and everybody will do it._'));
out.push(p('⚠ **The words to keep:** _either the rule is wrong or we are. One of the two._'));
out.push(p('⚠ **And the finding, which is the only one in twelve units that changes a RULE and not a procedure.** **A rule that everybody breaks, including the man who enforces it, is not a rule people are failing.** **It is a rule that was written wrong.** ⚠ **Nine seconds was too much to ask twenty times a day, and asking for it bought NOTHING — because it was broken anyway and could not be enforced.** **Two seconds obeyed is worth more than nine seconds ignored.**'));
out.push(p('⚠ **Say the other half too, because the class will not.** **The new rule is only possible because Abu Yasser admitted he broke the old one.** **A supervisor who had defended it would have kept a rule that protected nobody** — **and the sentence that cost him most is the one that made the fix available.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'B', 'B', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 5 is this cycle\'s own resolution as an exam item:** _REVERSING? WAIT FOR THE DRIVER TO NOD_ **→** _make sure the driver has seen you_. **Option B — _never walk behind_ — is the OLD rule, and a learner who chooses it has read the unit and not the mediation.**'));
out.push(p('⚠ **A2 Key Reading Part 1, tenth time.** **By now the class should need no instructions at all.** **Hand it out and time it.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**To:** Nour',
  '**There is a step at the back door and it is broken. Five weeks now. The bread man nearly went over with a full tray on Tuesday. Please have it mended this week.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**the thing AND where**'],
  ['**1**', '⚠ **how long**'],
  ['**1**', '**what it means or nearly caused**'],
  ['**1**', '**what you want done**'],
  ['**1**', '⚠ **a TIME on what you want done**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **Tenth unit running.** ⚠ **Plus one check for this unit only: is the message addressed to a NAME?** **_To: the office_ scores nothing in the first mark** — **10.5 spent a whole cycle on it.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, to a NAMED person, with a time on the ask.**'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**Hala, the slicer has had no guard since March. Nobody uses it and we cut by hand. The new girl has not been told. Please tell her today and ask for a guard.**',
]));
out.push(note("That model does two things at once and is worth showing after the mediation: it reports the unsafe thing and it names the person who has not been told. Two asks in one sentence, and the second one — tell her today — is free and immediate, while the guard will take weeks. A learner who separates the free ask from the slow one has understood 10.5."));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'c', 'a', 'b', 'b', 'c', 'b', 'a', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Question 3 is _he **must** wear_ against _musts_ and _must to_** — **the same shape as _can_ in 4.6, and a learner who got that one right two books ago should get this one.** ⚠ **Question 5 is the whole of 10.4:** _the floor by the door is wet_ **against** _be careful_ **and** _watch out_, **both of which are real English and neither of which works.** ⚠ **And question 8 is 10.6\'s second half** — **after the seven words you say WHEN YOU CAN DO IT.** **A learner who chose _sorry_ has the sentence and not the cycle.**',
  '**B  Listening — 6 marks**, one each. **The broken step at the back door (1) · five weeks, accept "since January" (1) · the bread man nearly went over with a full tray (1) · Nour now, and the sheet in January — BOTH needed (1) · STOP (1) · _I cannot carry the big trays down that step alone. I need help._ accept any form with _alone_ and _help_ (1).** ⚠ **Item 4 needs both halves because the whole of 10.5 is that written and told are different actions.**',
  '**C  Reading — 3 marks:** **three days, Tuesday to Friday (1) · the saw — nothing written, nobody told, nobody uses it, and that is a danger waiting for a new man (2).** ⚠ **The second answer is worth two: it is the hardest idea in the unit and a learner who can state it has understood that quiet avoidance is not a fix.**',
  '**D  Writing — 8 marks:** **four sentences (2) · addressed to a NAME (1) · the thing and where (1) · how long (1) · what it nearly caused (1) · what you want (1) · a time on the ask (1).**',
  '**Total 25.** ⚠ **The profile to expect: A high except 5 and 8; B split on item 4; C split on the two-mark answer; D high.** ⚠ **If a paper gets full marks and the learner has never said the seven words at work, the paper is not the point.** **This is the one unit where the mark and the outcome are different things, and it is worth saying so when you hand it back.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Six things. First, the sentence. This unit exists for I cannot do it alone, I need help — seven words that most of the people in front of you have never said at work. Everything else in the unit is scaffolding round it. And the thing that makes it sayable has to be said early and plainly: nobody in this book is ever punished for saying it, not once in twelve units, and that is deliberate. A learner who believes the sentence is dangerous will not use it. Second, the when. The seven words on their own are a refusal; the seven words plus and I will do it at eleven are a plan. Learners drop the second half and it is the half that works, because it does not require anybody to be found right now. That is the real reason people do two-man jobs alone — not pride, but that asking means finding somebody while a van waits. Third, 10.3 and shouting. It is the only page in the course where rude is right. Make them shout STOP together, once, and if it feels wrong to them say that the feeling is correct and the word is still right. Then run the walking-backwards clinic standing up; two minutes, and it is the only rehearsal anybody gets. And teach Abu Raed's half too, which is harder: when a man shouts, you stand still and you do not look round. Looking round is the instinct. Fourth, 10.4 undoes a habit instead of teaching one. Be careful is not wrong, it is worn out, and the man who wore it out can no longer warn anybody about anything. Say it eight times in a minute about eight things and ask the class when it stopped meaning anything — usually by the third. A warning needs where and what to do instead, and twice in Book 2 the real answer has been furniture: the pen by the telephone in 6.3, the chair on the wet floor here. Fifth, 10.5's distinction, which is the most quotable thing in the unit: the sheet is for the record, a person is for telling. Samih did the paperwork perfectly three times and told the wall. Insist on a name, not a job title; a learner who cannot name one has found their real problem. Sixth, 10.7, and it is the only mediation in twelve units where a supervisor is in the wrong and says so. I have enforced that rule on four men and broken it myself a hundred times. Let the room sit with that. Fouad's arithmetic is right — nine seconds twenty times a day is three minutes — and so is Ammar, because a rule broken a hundred times with no harm is a rule that has not been tested yet. The resolution changes the rule rather than the men, which happens nowhere else in this book, and it is only available because Abu Yasser admitted the hundred times. Say that part out loud, because the class will not."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 10 · Answer Key');
module.exports = out;
