// Proactive Business English A1 · Syria Edition · Book 2 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'sign · no smoking · keep out · danger · must · must not · stop · do not · dangerous · careful · wet floor · to reverse · light (a lamp) · to report · hazard · help · alone · hard hat · gloves · accident · exit · guard';
const AHEAD_AT_A2 = 'hazard · accident · guard';

out.push(h1('Unit 10  Safety and the Word NO'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**10.1**  read the six signs in this yard',
  '**10.2**  say _must_ and _must not_',
  '**10.3**  stop somebody — in one word',
  '**10.4**  say something is dangerous',
  '**10.5**  report something unsafe, to a person',
  '**10.6**  say you cannot do it alone',
  '**10.7**  Review: the safety notice — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ This unit exists for one sentence', [
  '**_I cannot do it alone. I need help._** ⚠ **Seven words, and most of the people reading this book have never said them at work.**',
  '⚠ **Everything else in the unit is around that sentence.** **The signs, the _must nots_, the word STOP, the wet floor, the light over the loading door.** **They are all ways of saying the same thing: something here will hurt somebody, and I am saying so.**',
  '⚠ **Nobody in this book is ever punished for saying it.** **Not once, in twelve units.** **That is not an accident.**',
], C.lyellow, C.orange));

// ======================= CYCLE 10.1 =======================
out.push(pb());
out.push(h2('10.1  The six signs'));
out.push(p('**You can:** read a safety sign   ·   **Grammar:** the fixed words on signs   ·   **Sound:** the sign, read aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many English signs are there at your work? **Say it.** Can you read all of them?'));
out.push(p('**b**  Draw one sign from your work on a piece of paper. Your partner says what it means.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many signs are in the yard?   **A** four   **B** six   **C** eleven'));
out.push(p('**b**  Listen again.   **1** Which sign does Ammar not know?   **2** Which one does Abu Yasser say is the important one?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 10.1  Six signs, and one that matters', [
  ['Abu Yasser', 'Six signs in this yard. Walk round with me and read them.'],
  ['Ammar', 'NO SMOKING. That one I know.'],
  ['Abu Yasser', 'Next.'],
  ['Ammar', 'KEEP OUT. DANGER. And… FLAMMABLE? I do not know that one.'],
  ['Abu Yasser', 'Flammable. It burns. That is the paint store.'],
  ['Ammar', 'And HARD HATS MUST BE WORN. And… FIRE EXIT.'],
  ['Abu Yasser', 'Six. Now. Which one is the important one?'],
  ['Ammar', 'DANGER?'],
  ['Abu Yasser', 'FIRE EXIT. The other five tell you not to do something. That one tells you where to go.'],
  ['Ammar', 'I had not thought of it like that.'],
  ['Abu Yasser', 'Five signs stop you. One saves you. Learn that one first.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The six signs, and what each one does**',
  table(['The sign', 'What it means', 'What kind'], [
    ['**NO SMOKING**', 'do not smoke here', 'stops you'],
    ['**KEEP OUT**', 'do not go in', 'stops you'],
    ['**DANGER**', 'something here can hurt you', 'stops you'],
    ['**FLAMMABLE**', 'it burns', 'stops you'],
    ['**HARD HATS MUST BE WORN**', 'you must wear a hard hat', 'stops you'],
    ['**FIRE EXIT**', '⚠ **the way out — GO this way**', '⚠ **saves you**'],
  ], [2.2, 2.4, 1.4]),
  '⚠ **Signs are in CAPITAL LETTERS and they have no _the_, no _a_ and often no verb.** **NO SMOKING, not _you must not smoke here_.** **Learn them as pictures with words on, not as sentences.**',
  '⚠ **Five of these six stop you. One tells you where to go.** **Learn FIRE EXIT first and know where yours is.** **This is the only page in the book where the order matters that much.**',
  '**Practise:** Write what each one means.',
  '1 KEEP OUT = ______________   2 FLAMMABLE = ______________   3 FIRE EXIT = ______________   4 DANGER = ______________',
  '**Useful words:**  NO SMOKING  ·  KEEP OUT  ·  DANGER  ·  HARD HATS MUST BE WORN  ·  FIRE EXIT',
  '**Sound — the sign, read aloud.** 🔊 **Track 10.2** Listen. **Each word separate, loud, with a stop:** _NO … SMOKING. KEEP … OUT. FIRE … EXIT._ **A sign is shouted across a yard, not spoken.** Say all six four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One points at a sign on the page. One says what it means and what kind it is. Then change places.'));
out.push(dlg(null, [
  ['A', 'This one. What does it mean?'],
  ['B', '__________. It means __________.'],
  ['A', 'And what kind is it?'],
  ['B', 'It __________ you.'],
  ['A', 'Which of the six is the important one?'],
  ['B', '__________. Five __________ you. One __________ you.'],
]));
out.push(table(['Card 1', 'Card 2'], [['FLAMMABLE · it burns · stops · FIRE EXIT · stop · saves', 'KEEP OUT · do not go in · stops · FIRE EXIT · stop · saves']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the six signs from memory. **Six. Then check.**'));
out.push(PHRASE_CARD(['NO SMOKING', 'KEEP OUT', 'DANGER', 'HARD HATS MUST BE WORN', 'FIRE EXIT']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Walk round your own workplace in your head. **Write it.** Every sign, and what it means.'));
out.push(table(['The sign', 'What it means', 'Stops me / saves me', 'Can everybody read it?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.6, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _At my work there are ______ signs. ______ stop you. ______ save you. Where my fire exit is: ______._'));
out.push(p('**Listener task:** how many people know where their fire exit is? **Count them. Say the number out loud.**'));
out.push(p('**Board clinic:** your teacher writes six signs. The class says which ones stop you and which save you.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet on the office wall. Then answer.'));
out.push(box(null, [
  '**EVERY SIGN IN THIS YARD — AND WHO CANNOT READ IT**',
  table(['Sign', 'Where', 'In Arabic too?'], [
    ['NO SMOKING', 'the gate, the store, the office', '✓ all three'],
    ['KEEP OUT', 'the paint store door', '✓ yes'],
    ['DANGER', 'the loading door', '⚠ **no**'],
    ['FLAMMABLE', 'the paint store', '⚠ **no**'],
    ['HARD HATS MUST BE WORN', 'the yard gate', '⚠ **no**'],
    ['FIRE EXIT', 'the back door', '⚠ **no — and this is the one that matters**'],
  ], [2.2, 2, 2]),
  '⚠ **Six signs. Two in Arabic. Four men here read no English at all. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many signs are in Arabic as well?'));
out.push(item('2', 'How many men cannot read the English ones?'));
out.push(item('3', 'Which missing translation is the worst one, and why?'));
out.push(box('Writer\'s box', [
  '**A sign sheet has three columns:** the sign → **where it is** → **who can read it**.',
  '⚠ **The third column is the one nobody writes and it is the whole sheet.** **A sign in a language four of your men cannot read is a decoration.**',
  '⚠ **And the FIRE EXIT line is the one to put in a language everybody reads, first, before any of the others.** **The five that stop you can be explained once by a colleague.** **The one that saves you has to be readable in the dark, by a man on his own, in a hurry.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a sign sheet for your own work (**15 words or more**).'));
out.push(table(['Sign', 'Where', 'Who can read it'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [2.2, 2, 2]));
out.push(p('⚠ **______ signs. ______ everybody can read. ______ cannot.** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A place for every sign', ''],
  ['A column saying who can read it', ''],
  ['A fire exit on the list', ''],
  ['The numbers added up at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their fire exit line. The class says if everybody at that workplace could find it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the signs at your work (**20 to 35 words**). Which can everybody read? Which cannot? What would you change first?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Has anybody ever asked for a sign in Arabic?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many workplaces have a sign nobody can read? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** every sign at your work and whether everybody can read it (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.2 =======================
out.push(pb());
out.push(h2('10.2  Must and must not'));
out.push(p('**You can:** say what people must and must not do   ·   **Grammar:** _must · must not_   ·   **Sound:** MUST NOT, both words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three things you must do at your work. **Say it:** _I must ______._'));
out.push(p('**b**  Say three things you must not do. **Say it:** _I must not ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many rules does Abu Yasser actually enforce?   **A** three   **B** nine   **C** all of them'));
out.push(p('**b**  Listen again.   **1** What are the three?   **2** What does he say about the other six?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 10.3  Three rules, not nine', [
  ['Ammar', 'The paper on the wall has nine rules.'],
  ['Abu Yasser', 'Nine rules. I enforce three.'],
  ['Ammar', 'Three?'],
  ['Abu Yasser', 'You must not stand on a carton. You must not walk behind a reversing lorry. You must not open the paint store with a cigarette.'],
  ['Ammar', 'And the other six?'],
  ['Abu Yasser', 'The other six are good advice. Nobody has died of the other six.'],
  ['Ammar', 'Is that not dangerous? Having nine and meaning three?'],
  ['Abu Yasser', 'It is. If I shout about all nine, nobody believes me about the three.'],
  ['Ammar', 'So you choose.'],
  ['Abu Yasser', 'I choose three and I never once let one go. In nine years nobody has stood on a carton twice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_must_ and _must not_**',
  table(['You must', 'You must not'], [
    ['**You must** wear a hard hat.', '**You must not** stand on a carton.'],
    ['**You must** sign in.', '**You must not** walk behind a reversing lorry.'],
    ['**I must** tell the supervisor.', '**I must not** open it alone.'],
  ], [2.2, 2.8]),
  '⚠ **_must_ and _must not_ + the BARE verb.** _You must **wear**_, **not** ~~must to wear~~. **And no -s:** _he **must** wear_, **not** ~~he musts~~. **Same as _can_ in 4.6.**',
  '⚠ **_must not_ is much stronger than _do not_.** **_Do not_ is an instruction. _Must not_ is a rule somebody will be in trouble for breaking.** **Use _must not_ for the three that matter and _do not_ for the rest.**',
  '⚠ **And the hard thing in this cycle, which is not grammar:** **nine rules nobody enforces are weaker than three rules nobody is ever allowed to break.** **_If I shout about all nine, nobody believes me about the three._**',
  '**Practise:** Write _must_ or _must not_.',
  '1 You ______ wear a hard hat in the yard.   2 You ______ stand on a carton.   3 You ______ sign in at the gate.   4 You ______ walk behind a reversing lorry.',
  '**Useful words:**  you must…  ·  you must not…  ·  I enforce three  ·  good advice  ·  I never let one go',
  '**Sound — MUST NOT, both words.** 🔊 **Track 10.4** Listen. _You MUST NOT stand on a carton.↘_ **Both words loud and separate.** ⚠ **Never _mustn\'t_ at work** — **it disappears across a yard and then you have said _must_.** **Same reason as _did not_ in 9.4.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One has a paper with nine rules. One says which three matter. Then change places.'));
out.push(dlg(null, [
  ['A', 'The paper on the wall has __________ rules.'],
  ['B', '__________ rules. I enforce __________.'],
  ['A', '__________?'],
  ['B', 'You must not __________. You must not __________. You must not __________.'],
  ['A', 'And the others?'],
  ['B', 'The others are good advice. Nobody has __________ of the others.'],
]));
out.push(table(['Card 1', 'Card 2'], [['nine · nine · three · stand on a carton · walk behind a reversing lorry · open the paint store with a cigarette · died', 'eleven · eleven · two · touch the mixer when it runs · carry trays on the wet floor · — · been hurt']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the rules that are enforced. **How many, and what are they?**'));
out.push(PHRASE_CARD(['you must…', 'you must not…', 'I enforce three', 'good advice', 'I never let one go']));
out.push(stage('4', 'Your turn', 9));
out.push(p('How many rules are on paper at your work, and how many are enforced? **Write it.**'));
out.push(table(['', 'The rule', 'On paper?', 'Enforced?'], [['**1**', '', '', ''], ['**2**', '', '', ''], ['**3**', '', '', ''], ['**4**', '', '', ''], ['**5**', '', '', '']], [0.6, 3.2, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _At my work there are ______ rules on paper. ______ are enforced. The one that matters most is: you must not ______._'));
out.push(p('**Listener task:** add up all the rules in this class, and all the enforced ones. **Two numbers on the board.**'));
out.push(p('**Board clinic:** your teacher writes four lines. Two say _musts_ or _must to_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two papers on the wall. Then answer.'));
out.push(box(null, [
  '**A — THE OLD PAPER (nine rules, 2019)**',
  '_1 Keep the yard tidy. 2 Wear suitable footwear. 3 Report all hazards. 4 Do not stand on cartons. 5 Use the correct lifting technique. 6 Do not smoke. 7 Keep walkways clear. 8 Do not operate machinery without training. 9 Follow all instructions._',
  '**B — WHAT ABU YASSER PUT UP INSTEAD (three rules, 2024)**',
  '**1 You must not stand on a carton, a pallet or a chair.** ⚠ **A man on a carton is a man in hospital. Two men have fallen here.**',
  '**2 You must not walk behind a reversing lorry.** ⚠ **The driver cannot see you. Walk round the front. It takes nine seconds.**',
  '**3 You must not open the paint store with a cigarette.** ⚠ **FLAMMABLE. The whole store, not just the paint.**',
  '⚠ **Three rules. Each one has killed or nearly killed somebody. I enforce all three, every time. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many rules are on each paper?'));
out.push(item('2', 'What does each rule on paper B have that paper A does not?'));
out.push(item('3', 'Which rule on paper A is the vaguest?'));
out.push(box('Writer\'s box', [
  '**A safety paper that works has THREE rules, and ⚠ a REASON on every one.**',
  '⚠ **The reason must be a thing that happened or can happen, not a word.** _Two men have fallen here._ _The driver cannot see you._ **_Follow all instructions_ is rule nine on the old paper and it means nothing at all.**',
  '⚠ **And the last line is the promise:** _I enforce all three, every time._ **A rule nobody enforces makes every other rule weaker** — **which is why three real ones beat nine written ones, and why the number is part of the writing.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a three-rule safety paper for your own work (**15 words or more**). A reason on every rule.'));
out.push(p('**______________ — THREE RULES**   **1 You must not ______________.** ⚠ **______________**   **2 You must not ______________.** ⚠ **______________**   **3 You must not ______________.** ⚠ **______________**   ⚠ **______________** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Three rules — not nine', ''],
  ['A reason on every one', ''],
  ['The reason is a thing that happened, not a word', ''],
  ['A promise at the bottom about enforcing them', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one rule and its reason. The class says if the reason would stop them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the rules at your work (**20 to 35 words**). How many are there? How many matter? Which one would you put first?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Has anybody ever been hurt by that one?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many rules in this class have hurt somebody? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the three rules at your work that you would enforce, with a reason on each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.3 =======================
out.push(pb());
out.push(h2('10.3  STOP'));
out.push(p('**You can:** stop somebody, in one word   ·   **Grammar:** _Stop! · Don\'t!_   ·   **Sound:** one word, loud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody is about to walk into danger and you have one second. **Say it.** One word.'));
out.push(p('**b**  Say _STOP_ as loudly as you can. **Everybody, together, once.** Now you have said it in English in front of people.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What was behind the lorry?   **A** a pallet   **B** Abu Raed   **C** nothing'));
out.push(p('**b**  Listen again.   **1** What did Ammar shout?   **2** What did he say AFTER?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 10.5  One word, and then the sentence', [
  ['Ammar', 'STOP! STOP!'],
  ['Driver', '_(brakes)_ What? What?'],
  ['Ammar', 'Abu Raed is behind you. He was picking up a nail.'],
  ['Driver', 'I did not see him. There is nothing in the mirror.'],
  ['Ammar', 'He was low down. On the ground.'],
  ['Abu Raed', 'I heard him shout and I did not move. I thought: a man is shouting, I will stay still.'],
  ['Driver', 'If you had moved I would have hit you.'],
  ['Abu Raed', 'I know. Fifty years at a gate. When a man shouts, you stop. You do not look round.'],
  ['Ammar', 'I did not know the English for _there is a man behind you_. So I shouted STOP.'],
  ['Abu Yasser', 'STOP was the right word. You had one second. One word is what one second buys.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Stopping somebody**',
  table(['Time you have', 'What you say'], [
    ['**one second**', '⚠ **STOP!** — **one word, as loud as you can**'],
    ['**one second**', '**DON\'T!** · **WAIT!**'],
    ['**three seconds**', '**STOP! There is a man behind you.**'],
    ['**afterwards**', '**He was picking up a nail. I did not see him either, at first.**'],
  ], [1.4, 4]),
  '⚠ **ONE WORD FIRST.** **Not a sentence.** **A sentence takes two seconds and a reversing lorry travels a metre in two seconds.** **STOP, then the sentence.**',
  '⚠ **And it does not have to be in English.** **Shout in Arabic if that is what comes out.** **A loud noise from a man who means it stops a driver in any language.** **The English word is for the people who do not share your Arabic** — **and in Syria now, that is more people than it used to be.**',
  '⚠ **Then say WHY, afterwards, calmly.** **A driver who has been shouted at and not told why will ignore you the next time.**',
  '**Practise:** What do you say?',
  '1 One second, somebody is behind a lorry. ______________   2 Three seconds. ______________   3 Afterwards. ______________',
  '**Useful words:**  STOP!  ·  DON\'T!  ·  WAIT!  ·  There is a man behind you.  ·  I did not see him either.',
  '**Sound — one word, loud.** 🔊 **Track 10.6** Listen. _STOP!_ ⚠ **Short, flat and LOUD.** **Not a question, not polite, and not _excuse me_.** **Shout it four times. If it feels rude, that is correct** — **it is the one place in this book where rude is right.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in threes. One shouts. One is the driver. One is the man behind. Then change places.'));
out.push(dlg(null, [
  ['A', 'STOP! STOP!'],
  ['B', '_(brakes)_ What? What?'],
  ['A', '__________ is behind you. He was __________.'],
  ['B', 'I did not see him. There is nothing in the __________.'],
  ['A', 'He was __________. On the __________.'],
  ['C', 'I heard him shout and I did not move.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Abu Raed · picking up a nail · mirror · low down · ground', 'Hala · carrying a tray · mirror · behind the van · path']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two threes perform for the class — **books closed, and really shout**.'));
out.push(p('**Listener task:** how long between the shout and the explanation? **And was there an explanation at all?**'));
out.push(PHRASE_CARD(['STOP!', 'DON\'T!', 'WAIT!', 'There is a man behind you.', 'I did not see him either.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four times you have wanted to stop somebody at work. **Write it.** Did you? What did you say?'));
out.push(table(['What was happening', 'Did I shout?', 'What I said', 'What happened'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1, 1.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ was about to ______. I shouted ______ / I said nothing. Then ______._'));
out.push(p('**Listener task:** count the times somebody said NOTHING. **And then ask why.** The answers are the cycle.'));
out.push(p('**Board clinic:** your teacher stands with their back turned and walks backwards. **Four students shout STOP at the right moment.** Then discuss who was loud enough.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice by the loading door. Then answer.'));
out.push(box(null, [
  '**REVERSING LORRIES — WHAT TO DO AND WHAT TO SHOUT**',
  '**If you are WALKING:** go round the front. ⚠ **Nine seconds. The driver cannot see the ground behind him.**',
  '**If you SEE somebody behind a reversing lorry:** ⚠ **SHOUT "STOP". One word. As loud as you can. In any language.**',
  '**If you are the man BEHIND:** ⚠ **when you hear a shout, STAND STILL. Do not look round.**',
  '**If you are the DRIVER:** stop at any shout, every time, even if it turns out to be nothing.',
  '⚠ **We have had one near miss. Abu Raed was on the ground picking up a nail and Ammar shouted. That is why this notice exists. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What must the man behind the lorry do when he hears a shout?'));
out.push(item('2', 'How long does walking round the front take?'));
out.push(item('3', 'Why does this notice exist?'));
out.push(box('Writer\'s box', [
  '**A shouting notice has one line for EVERY PERSON involved:** the walker, the one who sees, the one behind, the driver.',
  '⚠ **Four people, four lines, and they fit together.** **A notice that only tells the walker what to do leaves the man who SEES him not knowing whether to shout.**',
  '⚠ **And the last line names the real event that caused it.** _Abu Raed was on the ground picking up a nail and Ammar shouted._ **A notice with a story in it is read once and remembered.** **A notice that starts _in the interests of safety_ is not read at all.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a shouting notice for one danger at your own work (**15 words or more**). One line for every person involved.'));
out.push(p('**______________ — WHAT TO DO AND WHAT TO SHOUT**   **If you are ______________:** ______________   **If you SEE ______________:** ⚠ **SHOUT "______". ______________**   **If you are ______________:** ______________   **If you are ______________:** ______________   ⚠ **Why this notice exists:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A line for every person involved', ''],
  ['One word to shout, in capitals', ''],
  ['A line for the person who is in danger', ''],
  ['A real story at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their notice. The class says whether every person in it knows what to do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a near miss at your work (**20 to 35 words**). What happened? Did anybody shout? What changed afterwards?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did anything change afterwards?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. After how many near misses did something change? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the one word you would shout at your work, and who would need to hear it (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.4 =======================
out.push(pb());
out.push(h2('10.4  The floor is wet'));
out.push(p('**You can:** say something is dangerous   ·   **Grammar:** _it is dangerous · be careful_   ·   **Sound:** the warning that is heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three dangerous things at your work. **Say it:** _The ______ is dangerous._'));
out.push(p('**b**  Read the two lines. Which one makes somebody look down? _Be careful · The floor by the door is wet._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who fell?   **A** Nour   **B** nobody   **C** Majd'));
out.push(p('**b**  Listen again.   **1** Why did nobody listen to _be careful_?   **2** What did Ammar say instead?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 10.7  Be careful means nothing', [
  ['Nour', 'The floor by the door is wet. I nearly went over.'],
  ['Ammar', 'Majd said _be careful_ to everybody this morning.'],
  ['Nour', 'He says be careful every morning. About everything.'],
  ['Ammar', 'So nobody hears it.'],
  ['Nour', 'Nobody hears it. I did not know he meant the floor.'],
  ['Ammar', 'I will say it differently. _The floor by the door is wet. Walk round by the shelf._'],
  ['Nour', 'That I would hear.'],
  ['Ammar', 'Because it says where, and it says what to do instead.'],
  ['Nour', 'Say it to everybody who comes in, for an hour.'],
  ['Ammar', 'For an hour. And I put a chair on the wet part so they can see it as well as hear it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying something is dangerous — so that somebody hears it**',
  table(['Nobody hears this', 'People hear this'], [
    ['**Be careful.**', '**The floor by the door is wet.**'],
    ['**Watch out.**', '**That pallet is broken. Do not stand on it.**'],
    ['**It is dangerous.**', '**Walk round by the shelf.**'],
  ], [1.8, 3.6]),
  '⚠ **A warning needs TWO things: WHERE and WHAT TO DO INSTEAD.** _The floor by the door is wet. Walk round by the shelf._ **_Be careful_ has neither.**',
  '⚠ **_Be careful_ is not wrong. It is worn out.** **A man who says it every morning about everything has made it mean nothing**, **and then he cannot warn anybody about anything.** **Save it.**',
  '⚠ **And say it to EVERYBODY, for as long as it lasts** — **and put something there so they can see it as well as hear it.** **A chair on the wet part works. A word does not.**',
  '**Practise:** Make it a real warning.',
  '1 Be careful. → ______________.   2 Watch out. → ______________.   3 It is dangerous. → ______________.',
  '**Say it. Write it. Check it** — read your warning back and point at the WHERE and the WHAT TO DO INSTEAD.',
  '**Useful words:**  The floor is wet.  ·  by the door  ·  Walk round by…  ·  Do not stand on it.  ·  for an hour',
  '**Sound — the warning that is heard.** 🔊 **Track 10.8** Listen. _The floor by the DOOR is WET.↘ Walk round by the SHELF.↘_ **Two sentences, the place loud in both.** **The place is what makes a man look down.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One gives a worn-out warning. One makes it a real one. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________ is __________. I nearly __________.'],
  ['B', '__________ said _be careful_ to everybody this morning.'],
  ['A', 'He says be careful every morning. About everything.'],
  ['B', 'So nobody hears it.'],
  ['A', 'I will say it differently. _The __________ is __________. __________._'],
  ['B', 'That I would hear. Because it says __________ and __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['floor by the door · wet · went over · Majd · floor by the door · wet · Walk round by the shelf · where · what to do', 'step at the back · broken · fell · Hala · step at the back · broken · Use the front door · where · what to do']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the real warning have BOTH halves? **Where, and what to do instead.**'));
out.push(PHRASE_CARD(['The floor is wet.', 'by the door', 'Walk round by…', 'Do not stand on it.', 'for an hour']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four dangerous things at your work. **Write a real warning for each** — where, and what to do instead.'));
out.push(table(['The danger', 'Where exactly', 'What to do instead'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.6, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ is ______. ______. ______ instead._'));
out.push(p('**Listener task:** how many warnings had a WHAT TO DO INSTEAD? **That is the half that gets obeyed.**'));
out.push(p('**Board clinic:** your teacher says _be careful_ eight times in a row. The class says when it stopped meaning anything. **Usually by the third.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two notices. Then answer.'));
out.push(box(null, [
  '**A — the notice that was there for two years**',
  '_CAUTION. SLIPPERY WHEN WET. BE CAREFUL._',
  '**B — what Ammar wrote on a piece of card**',
  '**THE FLOOR BY THE DOOR IS WET UNTIL ABOUT 10.00 EVERY MORNING.**',
  '**It is the ice from the cold room. It melts and runs under the door.**',
  '⚠ **WALK ROUND BY THE SHELF. It is four steps longer.**',
  '**Two people have gone over here. Nour in April, me in February.**',
  '⚠ **This card comes down when somebody fixes the drain. A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'When is the floor wet?'));
out.push(item('2', 'Why is it wet?'));
out.push(item('3', 'What does the last line of notice B do that notice A does not?'));
out.push(box('Writer\'s box', [
  '**A real warning notice has five things:** **where** → **when** → **why** → **what to do instead** → **who it has already happened to**.',
  '⚠ **_When_ is the one people leave out and it is what makes a notice believable.** _Wet until about 10.00 every morning._ **A notice that says the floor is always wet is a notice people walk past at four in the afternoon when it is dry** — **and then they walk past it at nine the next morning too.**',
  '⚠ **And the last line is the honest one:** _this card comes down when somebody fixes the drain._ **A warning notice is a repair that has not happened yet, and saying so keeps it from becoming part of the wall.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a real warning notice for your own work (**15 words or more**). All five things.'));
out.push(p('**______________ IS ______________ ______________.**   **Why:** ______________   ⚠ **______________ INSTEAD.** ______________   **It has already happened to:** ______________   ⚠ **This notice comes down when ______________.** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Where, exactly', ''],
  ['When — not _always_', ''],
  ['What to do instead', ''],
  ['A line saying when the notice comes down', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _comes down when_ line. The class says if anybody is going to do it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a warning notice at your work that nobody reads (**20 to 35 words**). What does it say? Why does nobody read it? What would work instead?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _How long has it been there?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. **Add up how long these notices have been on the wall.** Put the total in years on the board.'));
out.push(box('Homework', ['Finish your writing. Then **write** a real warning card for one danger at your work and **put it up** (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.5 =======================
out.push(pb());
out.push(h2('10.5  There is a light and it does not work'));
out.push(p('**You can:** report something unsafe, to a person   ·   **Grammar:** _there is a… and it…_   ·   **Sound:** the flat report'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one unsafe thing at your work that nobody has fixed. **Say it.** How long?'));
out.push(p('**b**  Who would you tell? **Say the person\'s name**, not their job.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who does Samih tell in the end?   **A** Abu Yasser   **B** Nour   **C** both, and the electrician'));
out.push(p('**b**  Listen again.   **1** How many times had he told somebody before?   **2** What did he do differently this time?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 10.9  I told the wall', [
  ['Nour', 'Samih. The light over the loading door.'],
  ['Samih', 'Three nights. I wrote it on the sheet three times.'],
  ['Nour', 'You wrote it on the sheet. Did you TELL anybody?'],
  ['Samih', 'The sheet is for telling.'],
  ['Nour', 'The sheet is for the record. A person is for telling.'],
  ['Samih', 'I told the wall three times.'],
  ['Nour', 'You told the wall three times. This morning you told Abu Yasser, and by ten the electrician was booked.'],
  ['Samih', 'So I should have told him on Tuesday.'],
  ['Nour', 'On Tuesday. And written it. Both.'],
  ['Samih', 'Both. Unit six.'],
  ['Nour', 'Unit six. The slip AND the telling. Three units ago and you had it in your hand.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reporting something unsafe**',
  table(['', 'What you say'], [
    ['**1 the thing**', '**There is a light over the loading door and it does not work.**'],
    ['**2 how long**', '**Three nights. Since Tuesday.**'],
    ['**3 what it means**', '**We unloaded forty cartons in the dark.**'],
    ['**4 to a PERSON**', '⚠ **and you say it to a NAME, not to a sheet**'],
  ], [1.4, 4]),
  '⚠ **_There is a ______ and it ______._** **The thing, then what is wrong with it.** **It is the shape from 5.6 — _there is no note_ — turned round.**',
  '⚠ **And the whole cycle is in the fourth line.** **A sheet is for the RECORD. A person is for TELLING.** **Samih wrote it correctly three times and told the wall.**',
  '⚠ **Say BOTH, the same day.** **That is Unit 6.6 — the slip and the telling — and this is the second time the book has needed it.** **Write it so it exists. Tell somebody so it happens.**',
  '**Practise:** Report it in three parts.',
  '1 The thing: ______________.   2 How long: ______________.   3 What it means: ______________.',
  '**Useful words:**  There is a… and it…  ·  since Tuesday  ·  three nights  ·  I told the wall.  ·  Both.',
  '**Sound — the flat report.** 🔊 **Track 10.10** Listen. _There is a light over the loading door↘ and it does not work.↘_ **Flat, no complaint in it.** **A report said as a complaint gets answered as a complaint.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One reports. One asks the hard question. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. The __________.'],
  ['B', '__________ nights. I wrote it on the sheet __________ times.'],
  ['A', 'You wrote it on the sheet. Did you TELL anybody?'],
  ['B', 'The sheet is for telling.'],
  ['A', 'The sheet is for the record. A __________ is for telling.'],
  ['B', 'I told the __________ __________ times.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Samih · light over the loading door · Three · three · person · wall · three', 'Hala · water in the morning · Three · three · person · sheet · three']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the thing, how long, and who was told. **Three answers.**'));
out.push(PHRASE_CARD(['There is a… and it…', 'since Tuesday', 'three nights', 'I told the wall.', 'Both.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four unsafe things at your work. **Write it.** And **write the NAME** of the person you will tell.'));
out.push(table(['The thing', 'How long', 'What it means', 'Who I will tell — a NAME'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There is a ______ and it ______. ______ weeks. It means ______. I will tell ______._'));
out.push(p('**Listener task:** how many reports named a PERSON? **How many said _the office_ or _somebody_?** Two numbers.'));
out.push(p('**Board clinic:** your teacher writes four reports with no person named. The class puts a real name on each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the book Nour started. Then answer.'));
out.push(box(null, [
  '**UNSAFE THINGS — REPORTED, TOLD, AND DONE**',
  table(['The thing', 'Written on', 'Told to, and when', 'Done?'], [
    ['light over loading door', 'Tue, Wed, Thu sheets', '⚠ **nobody until Friday**', '✓ Friday — electrician booked by 10.00'],
    ['wet floor by the door', 'nothing', 'Majd, every morning', '✗ **nobody has fixed the drain**'],
    ['broken step at the back', 'Jan sheet', 'A.Y., January', '✓ February'],
    ['no guard on the saw', 'nothing', 'nobody', '⚠ **✗ — and nobody has used the saw since March**'],
  ], [1.8, 1.6, 2.2, 2.4]),
  '⚠ **Written and not told: three days. Told and not written: nothing fixed. Both: fixed in a day. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long was the light written down before anybody was told?'));
out.push(item('2', 'Which thing was told to somebody every morning and still not fixed?'));
out.push(item('3', 'Which line is the most dangerous, and why?'));
out.push(box('Writer\'s box', [
  '**An unsafe-things book has four columns:** the thing → **written on** → **told to, and when** → **done?**',
  '⚠ **The two middle columns must be SEPARATE.** **Written and told are different actions and the book proves it:** **written and not told took three days; told and not written is still not fixed; both took one day.**',
  '⚠ **And the saw line is the one to read twice.** **Nothing written, nobody told, and nobody has used it since March** — **which looks like a solution and is not.** **A dangerous thing that everybody is quietly avoiding is a dangerous thing waiting for a new man who does not know.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an unsafe-things book for your own work (**15 words or more**). Four lines, with written and told in separate columns.'));
out.push(table(['The thing', 'Written on', 'Told to, and when', 'Done?'], [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
], [1.8, 1.6, 2.2, 2.4]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Written and told in separate columns', ''],
  ['A NAME in the told column, not _the office_', ''],
  ['A date in the told column', ''],
  ['At least one line that is a quiet avoidance, not a fix', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their quiet-avoidance line. The class says what happens when a new person arrives.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an unsafe thing at your work that everybody avoids (**20 to 35 words**). What is it? How do people get round it? What would happen to a new person?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Does the new man get told?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many does a new person get told? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four unsafe things at your work, with a NAME and a date for each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.6 =======================
out.push(pb());
out.push(h2('10.6  I cannot do it alone'));
out.push(p('⚠ **This cycle is why the book exists.**'));
out.push(p('**You can:** say you cannot do it alone   ·   **Grammar:** _I cannot… alone · I need help_   ·   **Sound:** the sentence said flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing at your work you cannot do alone — and have done alone. **Say it.**'));
out.push(p('**b**  Say _I cannot do it alone. I need help._ **Everybody, together, once.** Then say it again, alone, to your partner.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does Samih do the job?   **A** yes, alone   **B** no   **C** yes, with Ammar, an hour later'));
out.push(p('**b**  Listen again.   **1** What had he done the week before?   **2** What does Abu Yasser say about that?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 10.11  The seven words', [
  ['Abu Yasser', 'The paint pallet. Move it to row four.'],
  ['Samih', 'I cannot do it alone. I need help.'],
  ['Abu Yasser', 'All right. Ammar is back at eleven.'],
  ['Samih', 'Then I will do it at eleven.'],
  ['Abu Yasser', 'Good. Last Thursday you moved one alone.'],
  ['Samih', 'I did.'],
  ['Abu Yasser', 'Why?'],
  ['Samih', 'Because you asked me to move it and you were busy and I did not want to say no.'],
  ['Abu Yasser', 'You did not say no. You said you need help. They are different sentences.'],
  ['Samih', 'They felt the same last Thursday.'],
  ['Abu Yasser', 'They always do. And in nine years I have never once been angry with a man who said the second one.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The seven words, and the three that come after them**',
  table(['', 'What you say'], [
    ['**the sentence**', '⚠ **I cannot do it alone. I need help.**'],
    ['**then, always**', '⚠ **and WHEN you can do it:** _I will do it at eleven._'],
    ['**if they push**', '**It needs two men. I will do it when Ammar is back.**'],
  ], [1.4, 4]),
  '⚠ **_I cannot do it alone_ is not _no_.** **They are different sentences and they feel the same.** **_No_ ends the job. _I need help_ moves it to eleven o\'clock.**',
  '⚠ **ALWAYS say when you CAN do it.** **The second half is what turns a refusal into a plan** — **and it is the same shape as 4.6 (_I can put them on shelf three and move them later_) and 8.4 (_the no, the when, the instead_).** **Third time.**',
  '⚠ **And the sentence nobody in this book has ever been punished for saying.** **Twelve units. Not once.** **That is not an accident and it is the one thing to take away from this page.**',
  '**Practise:** Say both halves.',
  '1 You cannot lift it alone. ______________. ______________.   2 You cannot reach it alone. ______________. ______________.',
  '**Useful words:**  I cannot do it alone.  ·  I need help.  ·  It needs two men.  ·  I will do it at eleven.  ·  when ___ is back',
  '**Sound — the sentence said flat.** 🔊 **Track 10.12** Listen. _I cannot do it alone.↘ I need help.↘_ ⚠ **Flat. Not apologetic, not angry, not quiet.** **Said quietly it sounds like an excuse; said flat it sounds like information.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One gives a two-man job. One says the seven words AND when. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________. Move it to __________.'],
  ['B', 'I cannot do it alone. I need help.'],
  ['A', 'All right. __________ is back at __________.'],
  ['B', 'Then I will do it at __________.'],
  ['A', 'Good. Last __________ you moved one alone.'],
  ['B', 'I did.'],
]));
out.push(table(['Card 1', 'Card 2'], [['paint pallet · row four · Ammar · eleven · Thursday', 'flour pallet · the back · Hani · two · Monday']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the speaker say WHEN they could do it? **That is the half that makes it work.**'));
out.push(PHRASE_CARD(['I cannot do it alone.', 'I need help.', 'It needs two men.', 'I will do it at eleven.', 'when ___ is back']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four two-man jobs at your work. **Write it.** Have you done each one alone?'));
out.push(table(['The job', 'Why it needs two', 'Done it alone?', 'What I will say next time'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.6, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ needs two men because ______. I have / have not done it alone. Next time I will say ______._'));
out.push(p('**Listener task:** count the jobs people have done alone. ⚠ **Then count how many said the seven words would have worked.** Two numbers.'));
out.push(p('**Board clinic:** your teacher writes four refusals. Two are _no_ and two have no WHEN. Fix all four together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list by the bench. Then answer.'));
out.push(box(null, [
  '**TWO-MAN JOBS IN THIS YARD — AND WHAT TO SAY**',
  table(['The job', 'Why two', 'What to say'], [
    ['a full pallet', 'it tips', '_I cannot do it alone. I need help. I will do it when Ammar is back._'],
    ['shelf four', 'the ladder needs holding', '_I cannot do it alone. Shelf three now, shelf four at eleven._'],
    ['the paint store', '⚠ **flammable, and nobody goes in alone**', '_I cannot do it alone. Who is coming with me?_'],
    ['a forty-carton lorry at night', '⚠ **in the dark, with one torch**', '_I cannot do it alone. I will wait for Hani._'],
  ], [1.6, 1.8, 3.4]),
  '⚠ **Four jobs. In nine years nobody has been in trouble for saying any of these. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does a full pallet need two men?'));
out.push(item('2', 'Which job must nobody do alone at all, even with help offered later?'));
out.push(item('3', 'What does the line at the bottom promise?'));
out.push(box('Writer\'s box', [
  '**A two-man list has three columns:** the job → **why two** → ⚠ **THE SENTENCE, written out in full**.',
  '⚠ **The third column is the whole list.** **Not _ask for help_ — the actual words, written out, so that a man can read them off the card and say them.** **A sentence you have read is a sentence you can say.**',
  '⚠ **And the line at the bottom is the supervisor\'s half of the deal:** _nobody has been in trouble for saying any of these._ **A two-man list without that line is a list of ways to look weak.** **With it, it is permission in writing.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a two-man list for your own work (**15 words or more**). The sentence written out in full on every line.'));
out.push(table(['The job', 'Why two', 'What to say'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.6, 1.8, 3.4]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The sentence written out in full, not _ask for help_', ''],
  ['A WHEN in every sentence', ''],
  ['A reason in the middle column', ''],
  ['A line at the bottom about nobody being in trouble', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one sentence from their third column **out loud, flat**. The class says if it sounded like an excuse or like information.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you did a two-man job alone (**20 to 35 words**). What was it? Why did you not ask? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _What would have happened if you had asked?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. ⚠ **In how many would asking have cost nothing at all?** **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the seven words, and the name of the person you will say them to this week (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.7 =======================
out.push(pb());
out.push(h2('10.7  Review: the safety notice'));
out.push(p('⚠ **This is the fourth unit of this book.** Signs, _must not_, STOP, dangerous, reporting and the seven words — and now a problem for the class to talk about together.'));
out.push(p('**You can:** write a safety notice   ·   **Review:** Units 10.1 to 10.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**10.1**  Four signs, and which one saves you.', ''],
  ['**10.2**  Three _must nots_ from your own work.', ''],
  ['**10.3**  One word. Shout it.', ''],
  ['**10.4**  Warn somebody about a wet floor — both halves.', ''],
  ['**10.5**  Report something unsafe in three parts.', ''],
  ['**10.6**  The seven words, and the when.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who breaks the rule?   **A** the new men   **B** everybody, including Abu Yasser   **C** nobody'));
out.push(p('**b**  Listen again.   **1** Which rule is it?   **2** What does Ammar point out?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 10.13  The rule everybody breaks', [
  ['Abu Yasser', 'Rule two. Nobody walks behind a reversing lorry. Everybody knows it.'],
  ['Ammar', 'Abu Yasser. You walked behind one on Tuesday.'],
  ['Abu Yasser', '_(pause)_ I did.'],
  ['Ammar', 'And Fouad does it every delivery. And Samih.'],
  ['Fouad', 'Round the front is nine seconds. Twenty times a day is three minutes.'],
  ['Samih', 'And the drivers know us. They look.'],
  ['Ammar', 'Abu Raed was on the ground and the driver did not look.'],
  ['Fouad', 'Abu Raed was LOW. That is different.'],
  ['Ammar', 'Is it? Or is it the only time somebody happened to be watching?'],
  ['Abu Yasser', '_(pause)_ I have enforced that rule on four men and broken it myself a hundred times.'],
  ['Nour', 'So either the rule is wrong or we are. One of the two.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**10.1**', '_NO SMOKING · KEEP OUT · DANGER · FIRE EXIT._ **Five stop you, one saves you.**'],
    ['**10.2**', '_You must not stand on a carton._ **Three rules, not nine.**'],
    ['**10.3**', '_STOP!_ **One word. Then the sentence.**'],
    ['**10.4**', '_The floor by the door is wet. Walk round by the shelf._'],
    ['**10.5**', '_There is a light and it does not work. Three nights._ **To a person.**'],
    ['**10.6**', '_I cannot do it alone. I need help. I will do it at eleven._'],
  ], [1, 5]),
  '⚠ **The new thing here: the supervisor who enforces the rule breaks it himself, and he says so.** **Fouad is right that nine seconds twenty times a day is three minutes. Samih is right that the drivers know them and look.** **And Abu Raed was on the ground and one driver did not look.**',
  '**Useful words:**  everybody knows it  ·  nine seconds  ·  three minutes  ·  the drivers know us  ·  either the rule is wrong or we are',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Fouad. One is Ammar. Say why you are right.'));
out.push(table(['Fouad says', 'Ammar says'], [[
  'Nine seconds, twenty times a day, three minutes. ⚠ **And the drivers know us and they look.**',
  'Abu Raed was on the ground and the driver did not look. ⚠ **Once is all it takes, and somebody happened to be watching.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_. **Then: what did Abu Yasser admit?**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a rule at your work that everybody breaks, including the person who enforces it. Tell your partner. **Write it.**'));
out.push(table(['The rule', 'Why people break it', 'What it would cost to obey it'], [['', '', ''], ['', '', '']], [1.6, 1.8, 1.8]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Rule two says nobody walks behind a reversing lorry. Everybody breaks it, including the supervisor who has enforced it on four men. Going round the front costs nine seconds, twenty times a day. And one driver did not see Abu Raed on the ground.'));
out.push(table(['Fouad is right', 'Ammar is right', 'So we do this'], [[
  'Three minutes a day, every day, for a thing that has never happened. ⚠ **And the drivers do know them and do look.**',
  'Abu Raed was on the ground and the driver did not look. ⚠ **A rule broken a hundred times with no harm is not a safe rule — it is a rule that has not been tested yet.**',
  '⚠ **The rule changes to match what men will actually do, and then it is enforced.** **New rule two: _walk behind a reversing lorry only when the driver has seen you and nodded._** ⚠ **It costs two seconds, not nine. Everybody will do it. And Abu Yasser can enforce it without being a hypocrite.**',
]], [1, 1, 1.5]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _either the rule is wrong or we are. One of the two._ ⚠ **And the finding, which is the only one in this book that changes a RULE instead of a procedure:** **a rule that everybody breaks, including the man who enforces it, is not a rule that people are failing.** **It is a rule that was written wrong.** **Nine seconds was too much to ask twenty times a day, and asking for it bought nothing** — **because the rule was broken anyway and nobody could enforce it.**'));
out.push(p('⚠ **The new rule asks for two seconds and will actually be obeyed.** **Two seconds obeyed is worth more than nine seconds ignored.** **And the honest half: Abu Yasser had to say out loud that he had enforced a rule on four men and broken it himself a hundred times** — **which is the hardest thing anybody says in this book.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _FIRE EXIT — KEEP CLEAR_   **A** Do not use this door.   **B** Do not put anything in front of this door.   **C** This door is locked.',
  '**2**  _HARD HATS MUST BE WORN_   **A** Hard hats are available.   **B** You must wear a hard hat here.   **C** Hard hats are not needed.',
  '**3**  _WET FLOOR UNTIL 10.00 — WALK ROUND BY THE SHELF_   **A** The floor is always wet.   **B** The floor is wet in the morning; use the other way.   **C** Do not come in.',
  '**4**  _TWO-MAN JOB. SAY SO._   **A** Do this job alone.   **B** Ask for a second man.   **C** Do not do this job.',
  '**5**  _REVERSING? WAIT FOR THE DRIVER TO NOD._   **A** Walk behind when you like.   **B** Never walk behind.   **C** Make sure the driver has seen you.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message about something unsafe, the THING and WHERE go in the first sentence.**',
  '⚠ **And HOW LONG goes in the second.** _Three nights._ **How long is what turns a nuisance into a job, and 9.3 said so.**',
  '**The shape:** the thing and where → how long → what it means or nearly caused → what you want done, with a time.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message about something unsafe (**four sentences, about 30 words**). The thing and where, how long, what it means, and what you want done.'));
out.push(p('**To:** ______________   _There is a ______________ and it ______________. ______________. ______________. Please ______________ by ______._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message to your supervisor about something unsafe (**four sentences, about 30 words**). The thing, how long, what it nearly caused, and what you want done by when.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then **give it to the person named in it** (20 words or more). Then write down what they said.'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  Which sign tells you where to GO?   a) DANGER   b) KEEP OUT   c) FIRE EXIT',
  '2  You ___ stand on a carton.   a) must not   b) must   c) do not must',
  '3  He ___ wear a hard hat in the yard.   a) musts   b) must   c) must to',
  '4  One second. You shout: ___   a) Excuse me   b) STOP   c) Be careful please',
  '5  Which warning works?   a) Be careful   b) Watch out   c) The floor by the door is wet',
  '6  ___ a light over the door and it does not work.   a) It is   b) There is   c) There are',
  '7  I cannot do it alone. I ___ help.   a) need   b) needs   c) am needing',
  '8  After the seven words, you say ___.   a) sorry   b) when you CAN do it   c) nothing',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 10.15** Listen. Write the answer.   **1** The unsafe thing: ______   **2** How long: ______   **3** What it nearly caused: ______   **4** Who she told, and when: ______   **5** What she shouted: ______   **6** The seven words she used: ______'));
out.push(p('**C  Reading.** Read the unsafe-things book at 10.5 again. How long was the light written down before anybody was told? Which line is the most dangerous, and why?'));
out.push(p('**D  Writing.** Write four sentences to your supervisor about something unsafe (**about 30 words**). The thing, how long, what it nearly caused, and what you want by when.'));
out.push(...lines(4));
out.push(dlg('Track 10.15  Audio script (read after the check)', [
  ['Hala', 'Nour. There is a step at the back door and it is broken.'],
  ['Nour', 'How long?'],
  ['Hala', 'Since January. Five weeks.'],
  ['Nour', 'Has anybody gone over?'],
  ['Hala', 'The bread man nearly went over with a full tray on Tuesday. I shouted STOP and he stopped on the top step.'],
  ['Nour', 'Who have you told?'],
  ['Hala', 'I told you now, and I wrote it on the sheet in January. Both, this time.'],
  ['Nour', 'And the trays?'],
  ['Hala', 'I cannot carry the big trays down that step alone. I need help. I will do it when Samih comes at seven.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 10)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**10.1**  read the signs at my work, and say which one saves me',
  '**10.2**  say _must_ and _must not_, and say which rules are really enforced',
  '**10.3**  stop somebody in one word, and explain afterwards',
  '**10.4**  warn somebody so that they hear it — where, and what to do instead',
  '**10.5**  report something unsafe to a PERSON, and write it as well',
  '**10.6**  say _I cannot do it alone. I need help._ — and say when I can',
  '**10.7**  write a safety notice, and say why a rule everybody breaks was written wrong',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business, in the safety unit.**',
  '**hazard** — here it is a thing you report. **At A2 it is a word on a form with a box to tick.**',
  '**accident** — here it is what nearly happened. **At A2 you write the report afterwards.**',
  '**guard** — here it is the thing missing from the saw. **At A2 it is part of a check you sign for.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 10 · Student\'s Book');
module.exports = out;
