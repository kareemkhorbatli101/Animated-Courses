// Proactive English B1 · Syria Edition · Book 1 · Unit 5 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 5  Describing Processes'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**5.1**  say how something is made',
  '**5.2**  say how something was built',
  '**5.3**  say who does it and what with',
  '**5.4**  describe a process in order',
  '**5.5**  say why the passive is the right choice',
  '**5.6**  describe a change that has been made',
  '**5.7**  Review & Mediate: explain a notice written in the passive',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The sentence with nobody in it.** _The seal is replaced every two years._ Who replaces it? The sentence does not say, and for four cycles that is exactly right. In **5.5** you find out when it is not.',
  '**Your four steps go on the wall.** The homework from Unit 4 — four steps with no people in them — opens 5.1 and is handed back in 5.6 with the people put in. Keep it.',
  '**Mazen gets an answer.** The letter he sent in 3.5 has been replied to, after seven months, by one of the two shops. The reply is eleven lines long, it is entirely in the passive, and it says nothing. It is taken apart in 5.6.',
], C.lyellow, C.orange));

// ======================= 5.1 =======================
out.push(pb());
out.push(h2('5.1  How it is made'));
out.push(p('**Function:** saying how something is made   ·   **Grammar:** the present passive   ·   **Pronunciation:** the weak _is_ and the strong participle'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out your four steps from the homework. Your teacher writes six sets of four on the long sheet down the side of the room. Then one question: can you tell, from any of them, **who does it**?'));
out.push(board('The sheets are cut before they are folded.', 'is / are + past participle'));
out.push(p('**b**  Active or passive? **1** _We cut the sheets._  **2** _The sheets are cut._  **3** _Somebody checks the oil._  **4** _The oil is checked every morning._  Which two tell you who?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Bassel describing?   **A** how a machine is repaired   **B** how a book is printed   **C** how paper is made'));
out.push(p('**b**  Listen again. **1** How many steps does he give before anybody is mentioned?   **2** What does Jad notice about Bassel\'s own voice when he describes it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.1  Before anybody is mentioned', [
  ['Ms Huda', 'Bassel. How is a book printed?'],
  ['Bassel', 'The text is set first, on the computer. Then it is checked — twice, by two different people, and that is where most of the mistakes are caught. A proof is printed on ordinary paper and read. When it is signed off, the plates are made. The paper is loaded, the machine is set up and run, the sheets are printed on both sides, and then they are left to dry. After that they are folded, gathered in order, sewn or glued, and trimmed on three sides.'],
  ['Jad', 'Eleven steps and you have not said "I" once.'],
  ['Bassel', 'Have I not?'],
  ['Jad', 'Not once. And you do all of it.'],
  ['Bassel', 'I do all of it, with two men. But that is not how you describe it. If I say "I load the paper and then I set up the machine", I am telling you about my evening. Nobody wants my evening; they want the process.'],
  ['Ms Huda', 'Say that again in the words you just used.'],
  ['Bassel', 'The process does not care who does it. It is the same eleven steps if it is me, or my son, or a factory in Aleppo with forty men in it.'],
  ['Lubna', 'And that is why the sentences have nobody in them.'],
  ['Bassel', 'That is why. The paper is loaded. It does not matter by whom, because it is always loaded, by somebody, in that order, or you have no book.'],
  ['Jad', 'Your voice changes when you describe it. You slow down.'],
  ['Bassel', 'Nineteen years. I could say those eleven in my sleep and I have never written them down in my life.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present passive: _am / is / are_ + past participle**',
  table(['active — somebody does it', 'passive — it is done'], [
    ['_We **cut** the sheets._', '_The sheets **are cut**._'],
    ['_Somebody **checks** the oil._', '_The oil **is checked** every morning._'],
    ['_They **do not** sell it here._', '_It **is not sold** here._'],
    ['_Do they test every batch?_', '_**Is** every batch **tested**?_'],
  ], [2.2, 2.4]),
  '**Use it when the process matters and the person does not.** _The paper is loaded_ is the same instruction whoever loads it. That is not vagueness; it is the right level of detail.',
  '**The participle is the same form you learnt in Unit 3** — _cut · checked · printed · made · loaded · sewn · trimmed · left · given · taken · written · built_. If you know the third form, you can already make the passive.',
  '⚠ ~~The sheets are cutted.~~ → _are **cut**_. ⚠ ~~It is sell here.~~ → _is **sold**_. ⚠ ~~The oil checks every morning.~~ → _**is checked**_ — this last one is the commonest of all and it reverses the meaning.',
  '⚠ **Some verbs cannot be passive at all**, because nothing is done to anything: ~~an accident was happened~~ → _an accident **happened**_. Also ~~was arrived · was died · was slept~~.',
  '**_every morning · twice · on both sides · in order_** — a process description is full of these. They carry the information that the person would have carried.',
  '**Useful phrases:** that is where most of the mistakes are caught · nobody wants my evening, they want the process · the process does not care who does it · or you have no book.',
  '**Practise:** Turn each one into the passive.  1 _They print the sheets on both sides._  2 _Somebody checks the proof twice._  3 _We do not use that machine any more._  4 _They trim it on three sides._  5 _Do they test every batch?_',
  '**Pronunciation.** 🔊 **Track 5.2** _is_ and _are_ almost disappear and the **participle** takes everything: _the sheets rə **PRINT**ed_ · _the oil ɪz **CHECKED**_. Listen to eight and write only the participle — it is the whole sentence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing on the card. B describes how it is made or done in **four steps**, in the passive, with no people. A then asks the one question that is not answerable from the four. Swap cards.'));
out.push(dlg(null, [
  ['A', 'How is __________ done?'],
  ['B', 'First __________ is __________. Then it is __________. After that __________ are __________. Finally it is __________.'],
  ['A', 'And who __________?'],
  ['B', '__________ — and it does not matter, because __________.'],
]));
out.push(table(['Card A – the processes', 'Card B – the processes'], [
  ['bread, in a bakery', 'a telephone screen, when it is replaced'],
  ['a prescription, in a pharmacy', 'a blood sample, at a laboratory'],
  ['a bus, before the morning shift', 'a class register, every evening'],
  ['tea, the way it is made at your work', 'a parcel, from the counter to the lorry'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four participles. Then say which process had a step that was really **two** steps — there is nearly always one, and it is where the describer does something so automatically that they cannot see it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe the process you know best, in the passive, in no more than eight steps. Your partner may stop you once to say _that was two steps_.'));
out.push(p('**b**  Swap. Then each of you say how long you have done it and whether you have ever written the steps down.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Bassel how a book is printed. The text is set, then checked twice by two different people, which is where most of the mistakes are caught. A proof is printed on ordinary paper and read, and when it is signed off the plates are made. The paper is loaded, the machine is set up and run, the sheets are printed on both sides and left to dry; then they are folded, gathered in order, sewn or glued, and trimmed on three sides. Jad said that was eleven steps without saying "I" once, and that Bassel does all of it. Bassel said he does, with two men, but that is not how you describe it: if he says "I load the paper and then I set up the machine", he is telling you about his evening, and nobody wants his evening — they want the process. The process does not care who does it; it is the same eleven steps if it is him, or his son, or a factory in Aleppo with forty men in it. Lubna said that is why the sentences have nobody in them, and Bassel said the paper is loaded and it does not matter by whom, because it is always loaded, by somebody, in that order, or you have no book. Jad said his voice slows down when he describes it, and Bassel said nineteen years — he could say those eleven in his sleep and has never written them down in his life._'));
out.push(p('**Listener task:** write the process somebody in this room has done for years and has never written down.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Bassel writes for the wall of his own shop. Answer the questions.'));
out.push(model([
  '**HOW A BOOK LEAVES THIS SHOP** · pinned above the folding table',
  '**Before the machine.** The text is set. The file is then checked twice, by two people, on two different days. A proof is printed on ordinary paper, read on paper and not on a screen, and signed. Nothing goes to plate until the proof is signed, and nothing is ever signed by the person who set it.',
  '**On the machine.** The plates are made. The paper is loaded and counted. The machine is set up, and the first forty sheets are printed and thrown away; they are never counted in the job. The sheets are then printed on one side, left to dry, and printed on the other.',
  '**After the machine.** The dry sheets are folded, gathered in order, and checked against the proof one last time. They are sewn if the book is to be kept and glued if it is not. The block is trimmed on three sides. The cover is attached last.',
  '**Three things that are not steps and matter more than the steps.** The forty wasted sheets are not a mistake and are not to be saved. The gathering is checked by somebody who did not do the gathering. And no proof is ever signed by the person who set the text, because a person cannot read their own mistake — I have proved that eleven times in nineteen years and four of them were expensive.',
]));
out.push(item('1', 'What two things are never done by the same person?'));
out.push(item('2', 'What happens to the first forty sheets?'));
out.push(item('3', 'Which part of the page does he say matters most?'));
out.push(writers([
  'A process on a wall: **the stages, grouped under three or four headings** → **each step in the passive, in order** → **and then a short section of the things that are not steps**.',
  'Group the steps. Eleven steps in a row is a list; _before the machine · on the machine · after the machine_ is a page somebody can find their place in.',
  'Say what is **never** done, as well as what is done: _nothing goes to plate until the proof is signed · nothing is ever signed by the person who set it._ A negative rule in the passive is the strongest sentence on any process page.',
  '⚠ The last section is the one worth writing. Every process has two or three things that are not steps — a waste that is not a mistake, a check that must be done by a different person, a thing that must never be saved — and they are what is lost when the person who knows the process leaves.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the process you know best as a page for a wall (50 words or more).'));
out.push(p('**______________** · ______________   **Before ______________.** ______________ is ______________. ______________ is then ______________, by ______________. Nothing is ______________ until ______________.   **During ______________.** ______________ are ______________. ______________ is ______________ and ______________. The first ______________ are ______________.   **After ______________.** ______________ are ______________ and ______________. ______________ is ______________ last.   **Things that are not steps.** ______________. ______________. And ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_is / are_ + the **third form**, not the past simple',
  'No people in any step',
  'Steps grouped under three or four headings',
  'A section of the things that are not steps',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one "thing that is not a step" only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) for a process in your work, your building or your kitchen that somebody would have to be taught if you were away for a month. Group the steps, put nobody in them, and finish with what is not a step.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who has to do this on Monday without them**. ★ _The thing that is not a step and that I would have got wrong._  ✓ _One step that is really two._  ? _What happens if this one is done out of order?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Whose process would stop if they were away for a month?** Most hands. Then: whose process is written down anywhere? Two, perhaps. That gap is the whole of Lesson B and it is worth naming in one sentence and no more.'));
out.push(hw('Write the process you know best in no more than eight passive steps, and give it to somebody who does not do it. Write down the first question they ask (50+ words). Their question is the step you cannot see.'));

// ======================= 5.2 =======================
out.push(pb());
out.push(h2('5.2  How it was built'));
out.push(p('**Function:** saying how something was built   ·   **Grammar:** the past passive   ·   **Pronunciation:** _was_ and _were_ reduced'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher names four things in this building — the door, the window, the second room, the stairs. For each one: when was it put there, and does anybody know?'));
out.push(board('This room was added in 1974.', 'was / were + past participle'));
out.push(p('**b**  Put it in the past. **1** _The sheets are printed._  **2** _The room is used for storage._  **3** _The windows are not opened._  **4** _Is the lift checked?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What was this building before?   **A** a school   **B** a textile company\'s offices   **C** a hospital'));
out.push(p('**b**  Listen again. **1** What was done to the building in 2009, and what was not done?   **2** What does Lubna say you can read off a wall?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.3  This was not built for us', [
  ['Lubna', 'Can I say something about this room? It was not built to be a classroom.'],
  ['Ms Huda', 'Go on.'],
  ['Lubna', 'The building was put up in 1962 as the offices of a textile company. You can see it from the corridor: the doors are too narrow and they open outwards, which offices do and classrooms are not supposed to. It was converted in 2009 — the partitions were taken out, the big rooms were divided, and the two rooms at the end, this one and Room 13, were made out of one accounts office.'],
  ['Umm Kinan', 'How can you possibly know that?'],
  ['Lubna', 'Because the floor is one piece and the skirting board runs behind that wall. The wall was built after the floor was laid. And the light switch for this room is on the other side of it, in Room 13, which is why somebody has had to put a second one in by the door with the wire on the outside.'],
  ['Ms Huda', 'That switch has been like that since the room was given to me.'],
  ['Lubna', 'It was never finished, is what I am saying. The room was divided and the electricity was not re-done, because re-doing electricity is expensive and a second switch is forty minutes. And nothing about that is written anywhere, so in twenty years somebody will take that wall down and be surprised.'],
  ['Mazen', 'You have been in this room four times.'],
  ['Lubna', 'Six. You can read most of a building off a wall if you know what was laid first. Buildings are honest; the drawings are not.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the past passive: _was / were_ + past participle**',
  table(['you say', 'and it means'], [
    ['_The building **was put up** in 1962._', 'one finished action, a date, nobody named'],
    ['_The partitions **were taken out**._', 'plural subject → _were_'],
    ['_The electricity **was not re-done**._', 'what was **not** done is often the point'],
    ['_**Was** the floor **laid** first?_', 'the question form'],
  ], [2.3, 2.3]),
  '**A date makes it past.** _The seal is replaced every two years_ (a process, present) against _the seal was replaced on 17 April_ (one event, past). Unit 3 made the same distinction for the perfect; it works the same way here.',
  '**Order, with the passive:** _the wall **was built** after the floor **was laid**_. Two past passives in one sentence, joined by _after_, _before_ or _when_ — and that is how a history of anything is written.',
  '⚠ ~~The wall was build.~~ → _was **built**_. ⚠ ~~It was happened in 2009.~~ → _It **happened**_. ⚠ ~~The rooms was divided.~~ → _the rooms **were** divided_ — agreement goes wrong far more often in the past than in the present.',
  '**_by_ is optional and usually absent.** _The building was put up in 1962_ is complete. You add _by_ only when the agent is surprising or important, which is 5.3.',
  '**Useful phrases:** it was not built to be a classroom · the wall was built after the floor was laid · it was never finished, is what I am saying · buildings are honest; the drawings are not.',
  '**Practise:** Say each one in the past passive, with a date or a time.  1 the partitions / take out  2 the rooms / divide  3 the electricity / not re-do  4 the second switch / put in  5 the floor / lay',
  '**Pronunciation.** 🔊 **Track 5.4** _was_ becomes /wəz/ and _were_ becomes /wə/, almost nothing: _the wall wəz **BUILT**_ · _the rooms wə **DIV**ided_. The only way to hear past from present is the vowel in that tiny word. Listen to eight and write **now** or **then**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing on the card. B gives three past-passive sentences about how it came to be as it is — and one sentence about what was **not** done. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It was __________ in __________. Then __________ were __________, and __________ was __________.'],
  ['A', 'And what was not done?'],
  ['B', '__________ was not __________, because __________.'],
]));
out.push(table(['Card A – the things', 'Card B – the things'], [
  ['the room you are sitting in', 'the street you live in'],
  ['the building where you work', 'a machine or vehicle you use'],
  ['your home, or a room in it', 'a shop or counter you know'],
  ['the road you travel most', 'something in this building that is broken'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the thing that was **not** done in each case, and the reason. In three out of four it is money, and in the fourth it is that nobody asked.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe how something you use every day came to be the way it is. Three past-passive sentences, one date, and one thing that was never finished.'));
out.push(p('**b**  Swap. Then each of you say whether anybody alive still knows the full story of the thing you described.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna said this room was not built to be a classroom. The building was put up in 1962 as the offices of a textile company — you can see it from the corridor, because the doors are too narrow and they open outwards, which offices do and classrooms are not supposed to. It was converted in 2009: the partitions were taken out, the big rooms were divided, and this room and Room 13 were made out of one accounts office. Umm Kinan asked how she could know, and Lubna said because the floor is one piece and the skirting board runs behind that wall — so the wall was built after the floor was laid — and because the light switch for this room is on the other side of it in Room 13, which is why somebody has had to put a second one by the door with the wire on the outside. Ms Huda said that switch has been like that since the room was given to her. Lubna said that is the point: it was never finished. The room was divided and the electricity was not re-done, because re-doing electricity is expensive and a second switch is forty minutes, and none of it is written anywhere, so in twenty years somebody will take that wall down and be surprised. Mazen said she has been in this room four times; she said six, and that you can read most of a building off a wall if you know what was laid first — buildings are honest and the drawings are not._'));
out.push(p('**Listener task:** write the thing in your own building that was never finished.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Lubna writes and pins up in the corridor. Answer the questions.'));
out.push(model([
  '**WHAT THIS BUILDING WAS, AND WHAT WAS DONE TO IT** · L. Sweidan, fourth year · April',
  '**1962.** Built as the offices of a textile company. Four storeys, one staircase, no lift. The doors were made 76 cm wide and hung to open outwards, which is right for an office and wrong for a room with thirty people in it.',
  '**1974.** The fourth floor was extended over the yard. The extension can be seen from the street because a different sand was used in the render and it has weathered differently. Nothing was done to the staircase, which is why the top floor is still served by stairs built for twelve people a floor.',
  '**2009.** Converted to a language centre. The partitions were removed, four large rooms were divided into nine, and a lift shaft was begun in the old stairwell and abandoned. It is now a store cupboard with a steel door and no handle on the inside.',
  '**What was not done in 2009, and what it costs now.** The electricity was not re-wired when the rooms were divided. Rooms 13 and 14 share one circuit and one switch, and the second switch in Room 14 was added later with the wire on the outside of the wall. The windows were not changed, so the rooms on the south side are 4 or 5 degrees hotter than the rooms on the north, which is why the afternoon classes are always in 7, 8 and 9.',
  '**Why this is pinned up.** None of the above is written anywhere in this building. It was all read off the walls, the floors and the render in about six visits, and anybody could read it. In twenty years somebody will be asked to take down the wall between 13 and 14, and they will find a circuit they were not told about.',
]));
out.push(item('1', 'How can the 1974 extension be seen from the street?'));
out.push(item('2', 'What two things were not done in 2009, and what does each cost now?'));
out.push(item('3', 'Why does she say she has pinned it up?'));
out.push(writers([
  'A history in the passive: **dated sections, newest last** → **what was done, in the past passive** → **what was not done, and what it costs now** → **and a last paragraph saying why you have written it down**.',
  'Give each date its own heading and keep the sections short. A building, a machine, a department or a family can all be written this way, and it is the most useful shape in the unit for work.',
  'Put the **evidence** in the sentence: _a different sand was used in the render and it has weathered differently_. A history in the passive with no evidence is a rumour in the passive.',
  '⚠ The section that earns the page is _what was not done, and what it costs now_. Everything before it is history; that section is the reason anybody should read it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the history of something in the past passive (50 words or more).'));
out.push(p('**______________** · ______________   **______________.** ______________ was ______________. ______________ were ______________ ______________, which is right for ______________ and wrong for ______________.   **______________.** ______________ was ______________. It can be seen ______________ because ______________. Nothing was done to ______________, which is why ______________.   **What was not done, and what it costs now.** ______________ was not ______________ when ______________. ______________ was ______________ later, with ______________.   **Why this is written down.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_was / were_ + third form, and agreement right in the plural',
  'A date on every section',
  'Evidence inside the sentence, not asserted',
  'A section on what was not done, with its cost today',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what was not done" sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full history (100 words or more) of a building, a room, a machine, a street, a shop or a department — in dated sections, in the passive, with the evidence in the sentences and a section on what was never finished.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s history as **somebody who will have to work on this thing in ten years**. ★ _The sentence that would have saved me a day._  ✓ _One claim with no evidence in it._  ? _Who told you that, and how do you know?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which of these histories exists anywhere else in writing?** Almost none of them. Then: who is the oldest person who knows the rest of it, and how old are they? That is the real question and the room goes quiet for it.'));
out.push(hw('Write the history of one thing in the place you work or live (50+ words), in dated sections and in the passive, and ask the oldest person there one question you cannot answer yourself. Write down their answer.'));

// ======================= 5.3 =======================
out.push(pb());
out.push(h2('5.3  By hand, with a blade'));
out.push(p('**Function:** saying who does it and what with   ·   **Grammar:** _by_ + agent · _with_ + instrument   ·   **Pronunciation:** the stress that arrives with _by_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six passive sentences. For each one the class decides: does it need a _by_? Four of the six do not, and saying why not is the exercise.'));
out.push(board('It\'s glued by hand, with a brush.', 'by + who · with + what'));
out.push(p('**b**  _by_ or _with_? **1** The screen is held on ___ four clips.  **2** It was written ___ a pencil.  **3** It is checked ___ two different people.  **4** The glue is put on ___ hand.  **5** The report was signed ___ a man who left in March.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Mazen explaining?   **A** why a screen comes loose   **B** how a telephone is sold   **C** why a repair is expensive'));
out.push(p('**b**  Listen again. **1** How is the screen attached, and by whom?   **2** What does Mazen say the word _by_ did for him?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.5  Four clips and a brush', [
  ['Yara', 'Why does one model break and another one not?'],
  ['Mazen', 'Because of how the screen is attached. On a good one, the screen is held in a frame and the frame is screwed to the body — four screws, done by a machine, to the same tightness every time. On the eleven I had in September, the screen is held on by four plastic clips and then sealed round the edge with glue.'],
  ['Yara', 'Glue is not a problem.'],
  ['Mazen', 'Glue is not a problem. Glue put on **by hand**, **with a brush**, by a different person every day, is a problem. Three of the eleven had too much and two had almost none, and you can see the brush marks. The same fault, from the same factory, made by eleven different hands.'],
  ['Fares', 'So it is not the design.'],
  ['Mazen', 'It is the design of the **process**, which is a different thing and which I did not have words for until this evening. I wrote to those two shops in October and I said the model is badly made. That was wrong and they will have read it as an insult.'],
  ['Ms Huda', 'What is the right sentence?'],
  ['Mazen', 'The screen is attached by hand, with a brush, by a different operator each shift, and in eleven out of eleven the glue line is uneven. That sentence has a _by_ in it and it is the only _by_ that matters: not by whom the telephone was made — by whom the glue was put on.'],
  ['Ms Huda', 'And what did that word do for you?'],
  ['Mazen', 'It moved the fault from the thing to the step. I have been blaming a telephone for seven months.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – putting the doer and the tool back in**',
  table(['you say', 'what it adds'], [
    ['_It is glued **by hand**._', 'how, not who — a fixed phrase'],
    ['_It is glued **with a brush**._', 'the **instrument**'],
    ['_It is checked **by two different people**._', 'the **agent**, and here it matters'],
    ['_The report was signed **by a man who left in March**._', 'the agent is the whole point'],
  ], [2.3, 2.3]),
  '**_by_ = who or what does it. _with_ = what it is done with.** _Written **by** a doctor_ · _written **with** a pencil_. ⚠ ~~written by a pencil~~ is the commonest error in this cycle and it makes the pencil the author.',
  '**Add _by_ only when the agent is surprising, responsible or needed.** _The paper is loaded_ — nobody cares. _The proof is signed **by somebody who did not set the text**_ — everybody cares. If the agent changes what the reader should do, name it.',
  '**Fixed _by_ phrases with no person in them:** _by hand · by machine · by post · by telephone · by mistake · by accident · by law_. These say **how**, not **who**.',
  '⚠ ~~It is made from a machine.~~ → _**by** a machine_. ⚠ ~~by the hand~~ → _**by hand**_. ⚠ _made **of** wood_ (material) · _made **by** a carpenter_ (agent) · _made **with** a chisel_ (tool) — three different words and students use one.',
  '**The useful move at work:** when something has gone wrong, ask which _by_ is missing. Not _by whom was this made_ but _by whom was this one step done_.',
  '**Useful phrases:** glue is not a problem; glue put on by hand with a brush by a different person every day is a problem · the design of the process, which is a different thing · it moved the fault from the thing to the step.',
  '**Practise:** Put in _by_ or _with_, and say whether the agent is worth naming.  1 _The sample is taken ___ a pipette._  2 _It is taken ___ a trained technician._  3 _The letter was written ___ hand._  4 _The figures were checked ___ the man who prepared them._  5 _The door was opened ___ a key._',
  '**Pronunciation.** 🔊 **Track 5.6** When _by_ carries new information it is **stressed** and the whole sentence leans on it: _it\'s glued **BY HAND**_. When it is routine it is weak, /bə/, and you barely hear it. Listen to six and mark **strong** or **weak** — the strong ones are where the responsibility is.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the step from the card. B says it in the passive with **both** a _by_ and a _with_, and then says which of the two could be left out. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It is __________ by __________, with __________.'],
  ['A', 'Which one can go?'],
  ['B', 'The __________, because __________.'],
  ['A', 'And if it goes wrong, which _by_ do you ask about?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the steps', 'Card B – the steps'], [
  ['a blood sample is taken', 'a prescription is checked'],
  ['glue is put on a screen', 'a proof is signed'],
  ['a register is marked', 'a bus is cleaned'],
  ['a letter is delivered', 'a wall is rendered'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the _by_ that could not be left out. There are two on each card and they are the steps where somebody could be held responsible — which is exactly why the passive is so often used to remove them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take one step of the process you described in 5.1 and put the _by_ and the _with_ back into it. Then say what changes when you do.'));
out.push(p('**b**  Swap. Then each of you find the step in the other\'s process where the _by_ matters most, and say why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara asked why one model breaks and another does not, and Mazen said because of how the screen is attached. On a good one the screen is held in a frame and the frame is screwed to the body — four screws, done by a machine, to the same tightness every time. On the eleven he had in September the screen is held on by four plastic clips and sealed round the edge with glue. Yara said glue is not a problem, and he said glue is not a problem: glue put on by hand, with a brush, by a different person every day is a problem. Three of the eleven had too much and two had almost none, and you can see the brush marks — the same fault, from the same factory, made by eleven different hands. Fares said so it is not the design, and Mazen said it is the design of the process, which is a different thing and which he did not have words for until this evening. He wrote to those two shops in October and said the model is badly made, and he says that was wrong and they will have read it as an insult. The right sentence is that the screen is attached by hand, with a brush, by a different operator each shift, and in eleven out of eleven the glue line is uneven — and that is the only "by" that matters: not by whom the telephone was made, but by whom the glue was put on. He says the word moved the fault from the thing to the step, and that he has been blaming a telephone for seven months._'));
out.push(p('**Listener task:** write the step in somebody\'s process where the _by_ matters, and why.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second letter Mazen drafts. Answer the questions.'));
out.push(model([
  '**To:** the manager · Al-Nour Mobile and Al-Badr Communications, Shaalan',
  '**Subject:** Correction to my letter of 7 October, and one sentence I got wrong',
  'Dear Sir,',
  'I wrote to you in October with eleven dates on one model. I have had no reply, which I expected, and I am writing again because one sentence in that letter was wrong and I would rather correct it than repeat it.',
  'I wrote that the model is badly made. That was a guess and it was also an insult, and I apologise for it. Here is what I can actually say.',
  'On this model the screen is not held in a frame. It is held on by four plastic clips and then sealed round the edge with adhesive, and the adhesive is applied by hand, with a brush. In all eleven units the adhesive line was uneven: in three it had been applied heavily enough to run into the earpiece, and in two there was almost none along the lower edge, which is the corner that separates. The brush strokes can be seen under a lamp and they are not the same in any two of the eleven.',
  'I am not saying the telephone is badly designed. I am saying that one step in how it is put together is done by a different hand every shift and is not measured, and that eleven units bought from your two shops and sold in one quarter all failed at that step.',
  'I do not know whether that is your business or the factory\'s. You are in a position to find out and I am not.',
  'Yours faithfully, Mazen Hariri',
]));
out.push(item('1', 'Which sentence from the first letter is he withdrawing, and why?'));
out.push(item('2', 'What exactly does he say is wrong — the thing or the step?'));
out.push(item('3', 'What evidence does he give that the step is not measured?'));
out.push(writers([
  'A letter that corrects your own claim: **what you wrote before** → **the sentence you are withdrawing, and that it was a guess** → **what you can actually say, in the passive with the _by_ and the _with_** → **the distinction between the thing and the step** → **the limit of what you know**.',
  'Withdraw the guess **by quoting it**: _I wrote that the model is badly made. That was a guess and it was also an insult._ A correction that does not quote the original is not a correction.',
  'Use _by_ and _with_ to move the fault from the object to the step: _the adhesive is applied by hand, with a brush_. That is a claim that can be checked; _badly made_ is not.',
  '⚠ Keep the strongest sentence for the distinction: _I am not saying the telephone is badly designed; I am saying one step is done by a different hand every shift and is not measured._ Name what you are **not** claiming before you name what you are.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter correcting a claim you have made about something that keeps going wrong (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** Correction to my ______________   Dear ______________,   I wrote to you in ______________ about ______________. I have had ______________, and I am writing again because ______________.   I wrote that ______________. That was ______________ and I apologise for it. Here is what I can actually say.   ______________ is not ______________. It is ______________ by ______________ and then ______________ with ______________. In all ______________, ______________.   I am not saying ______________. I am saying that one step ______________ and is not ______________.   I do not know whether ______________. You are in a position to ______________, and I am not.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_by_ for the doer, _with_ for the tool — and not the other way round',
  'The withdrawn sentence quoted',
  'The fault moved from the thing to the step',
  'What you are **not** claiming, before what you are',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "I am not saying… I am saying…" sentences only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) about something that keeps failing where you work or live. Find the step, name the _by_ and the _with_, withdraw whatever you have been saying instead, and stop at the edge of what you know.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the manager who could check one step**. ★ _The step I could go and look at tomorrow._  ✓ _One place where you still blame the thing instead of the step._  ? _How do you know it is that step and not the one before it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of you have been blaming a thing when you meant a step?** Then the harder one: how many have been blaming a person when you meant a step? Count the second one too. It is smaller and more interesting.'));
out.push(hw('Take something you have been calling badly made, badly run or badly taught, and name the one **step** inside it that you can actually describe with a _by_ and a _with_ (50+ words).'));

// ======================= 5.4 =======================
out.push(pb());
out.push(h2('5.4  First, then, and only after that'));
out.push(p('**Function:** describing a process in order   ·   **Grammar:** sequencers with the passive   ·   **Pronunciation:** the pause that marks a step'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six steps of a process in the wrong order. The class puts them right, out loud, and then one student says the whole thing with **four** sequencers and no more.'));
out.push(board('It is only given once the chart has been signed.', 'first · then · once · before · only after'));
out.push(p('**b**  Which two sequencers mean the same? **1** _after that_  **2** _once_  **3** _as soon as_  **4** _before_  **5** _finally_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What process is Rasha describing?   **A** admitting a patient   **B** the night medication round   **C** handing over to the day staff'));
out.push(p('**b**  Listen again. **1** What are the two things that must happen before anything is given?   **2** Why does she say the order matters more than the steps?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.7  The order, not the steps', [
  ['Ms Huda', 'Rasha, the round. In order.'],
  ['Rasha', 'The trolley is unlocked and the keys stay on the person who unlocked it. The chart is taken from the end of the bed and read **before** the drawer is opened — before, not while. The patient is identified out loud, and the name is read off the band, not off the chart.'],
  ['Omar', 'Why that way round?'],
  ['Rasha', 'Because the chart is what you expect and the band is what is true. Then the drug is drawn up, checked against the chart, and only after that is it given. It is signed for immediately — not at the end of the bay, not at the end of the round. Immediately, at the bed.'],
  ['Ms Huda', 'And if a step is done out of order?'],
  ['Rasha', 'Then nothing has gone wrong and everything is now possible. Every step can be done perfectly and in the wrong order, and somebody can still be given somebody else\'s tablets. The steps are easy — a child could learn them in a morning.'],
  ['Umm Kinan', 'So what is hard?'],
  ['Rasha', 'Doing them in that order at ten past two on the fifth night of a block when a bell is going in bay three. Seven mistakes in 118 nights, and not one of them was a step I did not know. Every one was a step done early.'],
  ['Ms Huda', 'Say the last sentence slowly for the room.'],
  ['Rasha', 'None of my mistakes was ignorance. All of them were order.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Sequencers, with the passive**',
  table(['you say', 'what it marks'], [
    ['_**First**, the trolley **is unlocked**._', 'the opening step'],
    ['_The chart **is read before** the drawer **is opened**._', 'two steps, one strictly before the other'],
    ['_**Once** it **has been** checked, it **is given**._', '_once_ = as soon as, and it needs a perfect'],
    ['_**Only after that is it** given._', 'emphasis — and the word order inverts'],
  ], [2.5, 2.1]),
  '**_before_, _once_ and _only after that_ are the three that matter.** _First_, _then_ and _finally_ only count; the other three say the order is not negotiable.',
  '⚠ **The inversion:** after _only after that_, _only when_ and _not until_, the sentence turns round: _Only after that **is it** given._ ~~Only after that it is given.~~ Learn it as one shape; it is the most emphatic sentence a process has.',
  '⚠ _before_ + present, not future: _the chart is read **before** the drawer **is** opened_. ~~before the drawer will be opened.~~',
  '⚠ Do not use a sequencer on every step. Four in six is plenty; six in six reads like a children\'s book.',
  '**Say what each step is checked _against_:** _checked against the chart · read off the band_. A process without these has steps but no safety in it.',
  '**Useful phrases:** before, not while · the chart is what you expect and the band is what is true · the steps are easy; a child could learn them in a morning · none of my mistakes was ignorance, all of them were order.',
  '**Practise:** Join each pair so that the order is not negotiable.  1 the chart / read · the drawer / open  2 the proof / sign · the plates / make  3 the sample / label · the sample / leave the room  4 the money / count · the receipt / give  5 the register / mark · the class / start',
  '**Pronunciation.** 🔊 **Track 5.8** A process read aloud has a small **pause at the end of every step** and no pause inside one: _the chart is taken from the end of the bed and read ‖ before the drawer is opened._ Put the pause in the wrong place and the order is lost. Listen to six and mark the pauses.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the six steps on the card **in the wrong order**. B puts them right with _before_, _once_ and _only after that_, then says which two steps must not be swapped and why. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ · __________ · __________ · __________ · __________ · __________.'],
  ['B', 'First __________ is __________. __________ is __________ before __________ is __________. Once __________ has been __________, __________. Only after that is __________ __________.'],
  ['A', 'Which two must not be swapped?'],
  ['B', '__________ and __________ — because if they are, __________.'],
]));
out.push(table(['Card A – steps, out of order', 'Card B – steps, out of order'], [
  ['the drawer is opened · the chart is read · the band is checked', 'the plates are made · the proof is signed · the text is set'],
  ['the drug is signed for · the drug is given · the drug is drawn up', 'the paper is loaded · the first sheets are thrown away · the machine is set up'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the two steps that must not be swapped, and the consequence. In both cards it is the same thing: something irreversible is done before the check that would have stopped it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your own process in six steps, in order, with three sequencers. Then name the two steps that must not be swapped and say what happens if they are.'));
out.push(p('**b**  Swap. Then each of you say whether you have ever swapped them, and what happened.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha gave the night round in order. The trolley is unlocked and the keys stay on the person who unlocked it. The chart is read before the drawer is opened — before, not while. The patient is identified out loud, and the name is read off the band and not off the chart, because the chart is what you expect and the band is what is true. Then the drug is drawn up, checked against the chart, and only after that is it given. It is signed for immediately, at the bed, not at the end of the round. Ms Huda asked what happens if a step is done out of order, and Rasha said then nothing has gone wrong and everything is now possible: every step in that round can be done perfectly in the wrong order and somebody can still be given somebody else\'s tablets. The steps are easy; a child could learn them in a morning. What is hard is doing them in that order at ten past two on the fifth night of a block with a bell going in bay three. She has made seven mistakes in 118 nights and not one of them was a step she did not know. None of her mistakes was ignorance. All of them were order._'));
out.push(p('**Listener task:** write the two steps in somebody else\'s process that must not be swapped.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card Rasha writes for new staff. Answer the questions.'));
out.push(model([
  '**THE NIGHT ROUND, WARD 4** · six steps · to be carried in the pocket, not pinned up',
  '**1** The trolley is unlocked. The keys stay on the person who unlocked it and are not put down on the trolley.',
  '**2** The chart is taken from the end of the bed and read. **Before** the drawer is opened — not while it is being opened.',
  '**3** The patient is identified out loud, and the name is read **off the band**. Not off the chart, not off the door, not off the handover.',
  '**4** The drug is drawn up and checked against the chart. The chart stays in your other hand while you do it.',
  '**5** Only after that is it given.',
  '**6** It is signed for at the bed, before you move. Not at the end of the bay. Not at the end of the round.',
  '**The two that must never be swapped** are 2 and 3 with 4 and 5. Everything up to step 3 can be undone. Nothing after step 5 can be undone by anybody, at any hour.',
  '**Why this is a card and not a poster.** A poster is read in the first week and then becomes part of the wall. This fits in a pocket, and the only steps anybody ever gets wrong are 2, 3 and 6 — the three that feel the most unnecessary at two in the morning.',
]));
out.push(item('1', 'Where must the keys not be put?'));
out.push(item('2', 'Which steps can be undone and which cannot?'));
out.push(item('3', 'Why is it a card and not a poster?'));
out.push(writers([
  'A process card: **numbered steps in the passive, one line each** → **each line saying what it is checked against, and what it is _not_** → **the steps that must never be swapped, and why** → **and a note on why it is in this form**.',
  'Write the **negatives**: _not off the chart, not off the door, not off what you remember_. For people who half-know the process, the negatives carry more than the positives.',
  'Name the irreversible step. Every process has a line after which nothing can be undone, and the reader needs that more than the other five.',
  '⚠ Say which steps are actually got wrong, and that they are the ones that feel unnecessary. A card that pretends all six are equally likely to be skipped was not written by somebody who has done the job.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the process card for something you do that somebody else will have to do (50 words or more).'));
out.push(p('**______________** · ______________ steps · ______________   **1** ______________ is ______________. ______________ is not ______________.   **2** ______________ is ______________. **Before** ______________ — not while ______________.   **3** ______________ is ______________ off ______________. Not off ______________, not off ______________.   **4** ______________ is ______________ and checked against ______________.   **5** Only after that is ______________ ______________.   **6** ______________ before ______________. Not ______________.   **The two that must never be swapped** are ______________ — because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_before_, _once_ and _only after that_ used — and the inversion right',
  'One line a step, in the passive',
  'What each step is checked against, and what it is **not**',
  'The irreversible step named',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "must never be swapped" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the card (100 words or more) for the process you would most hate somebody to get wrong, then write underneath which steps you have got wrong yourself, and when.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card as **somebody doing this for the first time at two in the morning**. ★ _The negative that would have stopped me._  ✓ _One step that is really two._  ? _Which of these have you got wrong, and when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the "steps I have got wrong myself" lines.** How many were done out of order rather than in ignorance? Almost all — and that finding belongs to Rasha.'));
out.push(hw('Write your six-step card and give it to somebody who does the same job. Ask which step they have got wrong and write down their answer (50+ words). Do not defend your card.'));

// ======================= 5.5 =======================
out.push(pb());
out.push(h2('5.5  Why there is nobody in this sentence'));
out.push(p('**Function:** saying why the passive is the right choice   ·   **Grammar:** agent unknown, obvious, irrelevant — or hidden   ·   **Pronunciation:** reading a sentence with nobody in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Four passive sentences on the board. For each one the class says **why** there is no person in it, choosing from: nobody knows · everybody knows · it does not matter · somebody does not want you to know.'));
out.push(board('Mistakes were made.', 'the fourth reason'));
out.push(p('**b**  Which reason? **1** _My bicycle was stolen._  **2** _The bins are emptied on Tuesdays._  **3** _The sheets are printed on both sides._  **4** _It has been decided that the lift will not be used by students._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the fourth reason for using the passive?   **A** politeness   **B** the writer does not know   **C** to take the person out on purpose'));
out.push(p('**b**  Listen again. **1** What does Yara say about her own first sentence?   **2** What test does Ms Huda give for the fourth reason?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.9  The incubator failed', [
  ['Ms Huda', 'Three good reasons to take the person out. Nobody knows who did it. Everybody knows who did it. It does not matter who did it. Yara — your sentence.'],
  ['Yara', '"The incubator failed." There is no person in it and it is none of those three reasons.'],
  ['Ms Huda', 'What is it?'],
  ['Yara', 'It is the fourth one. I took the people out so that nobody would come and look for them, and one of the people I took out was me. "The incubator failed" has no person in it and it also has no door, no seal, no February report and no Tuesday. Four words, and every single one is true.'],
  ['Fares', 'But you did not write it to hide. You wrote it because that is what everybody writes.'],
  ['Yara', 'Yes. And that is worse, not better. A sentence that hides people and that everybody writes without thinking is a much better hiding place than one somebody invented.'],
  ['Ms Huda', 'Here is the test, and it is short. Put the people back in and read it again. If the sentence becomes **more useful**, the passive was wrong. If it becomes more useful and also more uncomfortable, the passive was wrong and you knew.'],
  ['Mazen', '"Mistakes were made."'],
  ['Ms Huda', 'Go on, then. Put them back.'],
  ['Mazen', 'I made four mistakes and the factory made one.'],
  ['Ms Huda', 'And is that more useful?'],
  ['Mazen', 'It is a different letter. It is the letter I have not written.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four reasons there is nobody in a passive sentence**',
  table(['the reason', 'and an example'], [
    ['**Nobody knows** who.', '_My bicycle **was stolen** on Tuesday._'],
    ['**Everybody knows** who.', '_The bins **are emptied** on Tuesdays._'],
    ['**It does not matter** who.', '_The sheets **are printed** on both sides._'],
    ['**Somebody is being taken out.**', '_Mistakes **were made**._ · _It **has been decided**._'],
  ], [2.1, 2.5]),
  '**The first three are good English and good writing.** Four cycles of this unit have been about them. There is nothing wrong with a sentence that has nobody in it; most process writing would be unreadable otherwise.',
  '**The fourth is the one to be able to see** — in other people\'s writing and in your own. _It has been decided_ · _concerns have been raised_ · _the file was lost_ · _you have been allocated_ · _mistakes were made_. Each of these had a person in it before somebody took them out.',
  '**The test: put the people back in and read it again.** _It has been decided that students may not use the lift_ → _the director has decided that students may not use the lift_. If the second one is more useful, the passive was a choice. If it is also more uncomfortable, it was a choice somebody made on purpose.',
  '**And the hardest case.** A passive that hides people and that **everybody writes without thinking** is the best hiding place of all, because nobody chose it and so nobody is responsible for it. _The incubator failed_ was not written to deceive. It deceived.',
  '⚠ This does not mean "avoid the passive". It means: know which of the four you are in. A process page should be almost entirely passive; a report of a failure should not be.',
  '**Useful phrases:** I took the people out so that nobody would come and look for them · four words, and every single one is true · it is a different letter — it is the letter I have not written.',
  '**Practise:** Put the people back in, then say whether the passive was a choice.  1 _Mistakes were made._  2 _It has been decided._  3 _The report was never actioned._  4 _Concerns have been raised._  5 _You have been allocated the Thursday shift._  6 _The seal was not replaced._',
  '**Pronunciation.** 🔊 **Track 5.10** Read the same sentence twice — once as information, once as an evasion. The evasion is **flatter, faster and lower**, and it does not pause: _mistakeswere made._ Listen to five pairs and say which reading you have heard before, and where.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B names the reason, puts the people back in, and says whether the sentence got more useful. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'That is reason __________.'],
  ['A', 'Put the people in.'],
  ['B', '__________.'],
  ['A', 'Is it more useful?'],
  ['B', '__________, and __________.'],
]));
out.push(table(['Card A – the sentences', 'Card B – the sentences'], [
  ['Mistakes were made.', 'It has been decided that the class will move to Room 9.'],
  ['The bins are emptied on Tuesdays.', 'My telephone was taken at the garage.'],
  ['The report was never actioned.', 'The oil is checked every morning.'],
  ['You have been allocated the fifth night.', 'Concerns have been raised about the lift.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the reason for each of the eight sentences. Four are reason 4. Then: which of those four have you had said to you, in any language?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Find a sentence with nobody in it that has been said or written **to you** in the last year — at work, by an office, on a form. Put the people back in and say what changes.'));
out.push(p('**b**  Swap. Then the harder half: find one you have written yourself, and do the same to it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda gave three good reasons to take the person out: nobody knows who did it, everybody knows who did it, it does not matter who did it. Then she asked Yara for her sentence. "The incubator failed" — no person in it, and none of the three reasons. Yara said it is the fourth one: she took the people out so that nobody would come and look for them, and one of the people she took out was herself. Those four words have no person in them and also no door, no seal, no February report and no Tuesday — and every single one of them is true. Fares said she did not write it to hide, she wrote it because that is what everybody writes, and Yara said yes, and that is worse, not better: a sentence that hides people and that everybody writes without thinking is a much better hiding place than one somebody invented. Ms Huda gave the test — put the people back in and read it again; if the sentence becomes more useful, the passive was wrong, and if it becomes more useful and also more uncomfortable, the passive was wrong and you knew. Mazen said "mistakes were made", and she told him to put them back, and he said: I made four mistakes and the factory made one. She asked whether that is more useful and he said it is a different letter — it is the letter he has not written._'));
out.push(p('**Listener task:** write the sentence with nobody in it that somebody has had said to them.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two notices. Answer the questions.'));
out.push(model([
  '**NOTICE A** — _as it was pinned up in the entrance_',
  'It has been decided that the lift will no longer be used by students. This decision has been taken for reasons of safety. Concerns had been raised and the matter has been reviewed. The lift is to be used by staff only. Any student found using the lift will be reported.',
  '**NOTICE B** — _the same notice with the people put back in, by L. Sweidan_',
  'The director has decided that students may not use the lift. She has decided it because the lift was inspected on 3 March and the engineer who inspected it wrote that the brake needs replacing and that the lift should carry no more than four people until it is. The part was ordered in March and has not come. Until it comes, the director has given the lift to the staff, who are twelve, rather than to the students, who are four hundred. If a student uses the lift, the caretaker has been told to write their name down and give it to the director.',
  '**What the second one tells you that the first one does not.** Who decided. Why. That there is a report and a date. That a part is on order, so this is temporary. That the choice was between twelve people and four hundred, which is a real reason and not a bad one. And who will write your name down, which is a man you can talk to.',
  '**What the first one was for.** Nothing was hidden deliberately. Notice A was written by somebody in forty seconds using the words that notices are written in. That is how most of the fourth reason happens: not by liars, by people in a hurry using a form of words that takes the people out for them.',
]));
out.push(item('1', 'How many facts are in Notice B that are not in Notice A?'));
out.push(item('2', 'What is the real reason for the decision, and is it a bad one?'));
out.push(item('3', 'How does she explain how Notice A came to be written?'));
out.push(writers([
  'A page that opens a passive sentence: **the thing as it was written** → **the same thing with every person, date and reason put back** → **a list of what the second one tells you** → **and a paragraph on how the first one came to exist**.',
  'Do the rewriting **in full**, not in commentary. _The director has decided_ is worth more than a paragraph explaining that the original hid the director.',
  'Be fair about the original. Most passive evasions are written by people in a hurry, in the words that such notices come in. A page that calls them liars is wrong and will be dismissed.',
  '⚠ Look for the **real reason** and say whether it is a good one. Twelve people against four hundred is a decision anybody can understand; hiding it is what made it look sinister.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a notice, letter or message you have actually received and put the people back in (50 words or more).'));
out.push(p('**As it was written.** "______________."   **With the people put back in.** ______________ has ______________. ______________ decided it because ______________ on ______________, and ______________ wrote that ______________. ______________ was ______________ and ______________. Until ______________, ______________. If ______________, ______________ has been told to ______________.   **What the second one tells you.** Who ______________. Why ______________. That ______________. And who ______________.   **What the first one was for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All four reasons distinguished — not "the passive is bad"',
  'The rewrite done in full, with every person, date and reason',
  'A list of what the rewrite tells you that the original did not',
  'A fair account of how the original came to be written',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the original sentence and then their rewrite of it, with nothing in between.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) on a real notice, form letter or message. Then, underneath, do the same to **one sentence you have written yourself** this year.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who wrote the original notice**. ★ _The fact you put back that I would not have minded telling you._  ✓ _One place where you have called me dishonest instead of hurried._  ? _What is the sentence of your own that you rewrote, and did you send it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the originals were written by somebody being careful, and how many by somebody being quick?** Nearly all quick. Say the useful conclusion out loud: the fourth reason is mostly a habit, which is why it can be broken by one person deciding to write _I have decided_.'));
out.push(hw('Rewrite one sentence of your own, from a real document, with the people put back in (50+ words). Then decide whether to send the new version, and write why.'));

// ======================= 5.6 =======================
out.push(pb());
out.push(h2('5.6  What has been changed'));
out.push(p('**Function:** describing a change that has been made   ·   **Grammar:** _has / have been_ + past participle   ·   **Pronunciation:** _\'s been_ and _\'ve been_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your four steps come back off the wall. Read them out again — and this time put the **people** in. Then say which version you would pin up where you work, and why.'));
out.push(board('The seal has been replaced. The model has not been withdrawn.', 'has / have been + past participle'));
out.push(p('**b**  Finished change, or still the same? **1** _The seal was replaced in April._  **2** _The seal has been replaced._  **3** _The part has been ordered._  **4** _The part was ordered in March._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has happened?   **A** one of the shops has replied to Mazen   **B** the model has been withdrawn   **C** Mazen has been paid'));
out.push(p('**b**  Listen again. **1** How long did the reply take, and how long is it?   **2** What does Lubna find when she counts the verbs?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.11  The reply', [
  ['Mazen', 'Al-Badr has answered. Seven months, and eleven lines.'],
  ['Ms Huda', 'Read it.'],
  ['Mazen', '"Dear Sir. Thank you for your letter. The matter you raise has been noted and your information has been passed to the relevant department. The supplier has been contacted. It has been confirmed that all units sold were within specification at the point of sale. The appropriate steps have been taken. Your continued custom is valued. Yours faithfully." And then a name I cannot read.'],
  ['Lubna', 'Count the verbs. Has been noted, has been passed, has been contacted, has been confirmed, have been taken. Five, and not one of them has a person.'],
  ['Yara', 'Reason four, five times in eleven lines.'],
  ['Mazen', 'Here is what I actually know has been changed. Nothing. Nobody has rung me. The model is still in both windows. I have had four more of them in since October — that is fifteen — and the glue line on all four was uneven.'],
  ['Fares', 'But something has been done. Somebody read it. Somebody wrote eleven lines seven months later, which is not nothing — it is a department that has been made to produce a paragraph.'],
  ['Mazen', 'That is true and it is the only true thing in the letter.'],
  ['Ms Huda', 'So what is your sentence?'],
  ['Mazen', 'Not "the appropriate steps have been taken". Mine is: the seal was reported in October, fifteen units have now been seen, the model has not been withdrawn, and I have been sent a letter in which nobody is named. Four facts, three of them passive, and every one of them with a date you can check.'],
  ['Ms Huda', 'And the fourth reason?'],
  ['Mazen', 'I am using the passive in the last one on purpose, because nobody **is** named. That is not me hiding them. That is me reporting that they hid.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present perfect passive: _has / have been_ + past participle**',
  table(['you say', 'and it means'], [
    ['_The seal **has been replaced**._', 'done, and the result is true now — no date needed'],
    ['_The model **has not been withdrawn**._', 'the change that has **not** happened'],
    ['_Fifteen units **have been seen**._', 'a running total, still rising'],
    ['_The part **was ordered** in March._', 'past passive — a finished date, no claim about now'],
  ], [2.3, 2.3]),
  '**This is the tense of a change.** It joins Unit 4 to this unit: _has been_ + participle says that something was done to something **and the result is the situation you are in today**. It is what every progress report, every handover and every complaint is written in.',
  '**The negative is usually the strongest sentence you have:** _the model **has not been withdrawn** · the part **has not come** · nobody **has been told**_. A list of changes with one honest negative in it is believed; a list without one is not.',
  '⚠ ~~The seal has been replaced in April.~~ A date pushes you into the past passive: _**was replaced** in April_. Same rule as Unit 4, applied to the passive.',
  '⚠ ~~The appropriate steps have been taken.~~ is grammatically perfect and empty. **Which** steps, **by whom**, **on what date**? If a sentence of this shape cannot answer those three, it is reason four.',
  '**And the honest use of reason four:** _I have been sent a letter in which nobody is named._ Using the passive to **report** that somebody has hidden is not hiding. Say so when you do it.',
  '**Useful phrases:** seven months, and eleven lines · it is a department that has been made to produce a paragraph · that is true and it is the only true thing in the letter · that is not me hiding them, that is me reporting that they hid.',
  '**Practise:** Say what has and has not been changed.  1 the seal / replace  2 the model / not withdraw  3 the part / order — and has it come?  4 the electricity / not re-do  5 the second switch / add  6 you / not ring',
  '**Pronunciation.** 🔊 **Track 5.12** _has been_ collapses to /zbɪn/ and _have been_ to /vbɪn/: _the seal\'zbin **RE**placed_ · _fifteen units\'vbin **SEEN**_. The negative, though, is said in full and slowly, because it is the information: _the model **HAS NOT BEEN** withdrawn._ Listen to eight and mark positive or negative.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the situation on the card. B gives three things that have been changed and **one** that has not, and then says which sentence a reader would believe. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________ has been __________, __________ has been __________, and __________ have been __________.'],
  ['A', 'And what has not?'],
  ['B', '__________ has not been __________.'],
  ['A', 'Which sentence would I believe?'],
  ['B', 'The __________, because __________.'],
]));
out.push(table(['Card A – the situations', 'Card B – the situations'], [
  ['the incubator seal, since April', 'the lift, since January'],
  ['your own workplace, this year', 'this classroom, since September'],
  ['something you complained about', 'something you were promised'],
  ['your English, since the start of this course', 'the street you live in, in five years'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the negative from each pair. Then say which pair\'s list of changes you believed least, and why — it is always the one with no negative in it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Report on something you have asked for or complained about. What has been done, what has not been done, and what you have been **sent** instead.'));
out.push(p('**b**  Swap. Then each of you say whether the thing you asked for has moved at all, and what the smallest piece of evidence is that somebody read it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Al-Badr has answered Mazen — seven months, eleven lines. The matter has been noted, the information has been passed to the relevant department, the supplier has been contacted, it has been confirmed that all units sold were within specification, the appropriate steps have been taken — and then a name he cannot read. Lubna counted the verbs: five, and not one of them has a person in it. Yara said reason four, five times in eleven lines. Mazen said what he actually knows has been changed is nothing: nobody has rung him, the model is still in both windows, and he has had four more in since October, which makes fifteen, with an uneven glue line on all four. Fares said something has been done — somebody wrote eleven lines seven months later, which is a department that has been made to produce a paragraph — and Mazen said that is the only true thing in the letter. His own sentence is that the seal was reported in October, fifteen units have now been seen, the model has not been withdrawn, and he has been sent a letter in which nobody is named. He says he is using the passive in the last one on purpose: not to hide them, but to report that they hid._'));
out.push(p('**Listener task:** write the thing somebody asked for that has not been done, and how long ago.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mazen\'s third letter. Answer the questions.'));
out.push(model([
  '**To:** the manager, Al-Badr Communications · **copy:** Al-Nour Mobile',
  '**Subject:** Your letter of 14 April, and what has and has not changed since October',
  'Dear Sir,',
  'Thank you for your letter. I would like to put next to it what has changed, because I think the two pages say different things.',
  '**What has been done.** My letter has been read. My information has been passed to a department and a supplier has been contacted. A reply has been written and sent, seven months later, and it runs to eleven lines. I do not say that lightly: I expected nothing and I received a paragraph.',
  '**What has not been done.** I have not been telephoned. No name has been given to me — I cannot read the signature and no department is named. The model has not been withdrawn from either window. Nothing has been offered to the fifteen customers, who have paid me for a fault that was not theirs.',
  '**What has changed at my counter.** Fifteen units have now been seen, not eleven. Four more have come in since October and the adhesive line was uneven in all four. The dates are 3 and 22 November, 14 February and 2 April.',
  '**What I would like, and it is one thing.** A name. Not an apology, not money, not a withdrawal — the name of the person at your supplier to whom the next eleven dates should be sent. Your letter says the supplier has been contacted; if that is true, somebody at your end knows a name, and it costs you nothing.',
  'Yours faithfully, Mazen Hariri',
]));
out.push(item('1', 'What does he say has been done, and does he dismiss it?'));
out.push(item('2', 'How many units now, and what are the four new dates?'));
out.push(item('3', 'What one thing does he ask for, and why does he say it costs nothing?'));
out.push(writers([
  'A reply that measures a reply: **thank them, plainly** → **what has been done, given its full weight** → **what has not been done** → **what has changed at your end, with dates** → **one thing you want, and why it is cheap**.',
  'Give the other side **full credit** for what has been done, and mean it: _I expected nothing and I received a paragraph._ A letter that concedes nothing is answered with another eleven lines.',
  'Put _has not been_ in its own section. Four negatives in a row, each with no date because they have not happened, is the most quietly damaging paragraph you can write.',
  '⚠ Ask for one thing and show that it is **free**. _A name. Not an apology, not money, not a withdrawal._ Your letter already says the supplier has been contacted, so somebody has the name — that is their own sentence being handed back to them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter that measures a reply you have had (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** Your ______________ of ______________, and what has and has not changed since ______________   Dear ______________,   Thank you for ______________. I would like to put next to it ______________.   **What has been done.** ______________ has been ______________. ______________ has been ______________. I do not say that lightly: ______________.   **What has not been done.** I have not been ______________. No ______________ has been ______________. ______________ has not been ______________.   **What has changed at my end.** ______________ have now been ______________, not ______________. The dates are ______________.   **What I would like, and it is one thing.** ______________. Not ______________. Your letter says ______________; if that is true, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_has / have been_ + third form, with no date on it',
  'Past passive wherever a date appears',
  'A section of negatives, in their own paragraph',
  'One request, shown to cost the reader nothing',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I would like, and it is one thing" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) about something you have complained about, applied for or asked for, and had an answer to. Measure the answer. Then write underneath whether you are going to send it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person who wrote the eleven lines**. ★ _The paragraph that makes me find a name._  ✓ _One place where you give me no credit for what was done._  ? _What is the one thing, and could I give it to you this afternoon?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the one-thing lines.** How many could be given this afternoon by one person? Most. Then: how many of you have asked for the one thing, rather than for everything? Two, perhaps, and that is the lesson of the cycle.'));
out.push(hw('Write the three sections — what has been done, what has not been done, what has changed at your end — for something you have been waiting on (50+ words). Then write the one thing you want, and check that it costs the reader nothing.'));

// ======================= 5.7 =======================
out.push(pb());
out.push(h2('5.7  Review & Mediate: What does this notice require?'));
out.push(p('**Function:** explaining a notice written in the passive   ·   **Recycling:** Units 1–5   ·   **Exam practice:** B1 Preliminary Reading Part 1, Writing Part 1, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The sheets are cutted.  **2** An accident was happened.  **3** The oil checks every morning.  **4** The wall was build in 2009.  **5** It was written by a pencil.  **6** Only after that it is given.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the notice Rasha brings in from her ward.'));
out.push(box(null, [
  '**NOTICE TO ALL NURSING STAFF · WARD 4 · effective immediately**',
  'It has been noted that medication rounds are being completed late.',
  'All rounds are to be completed within the allocated time. Where a round is not completed within the allocated time, the reason is to be recorded in the round book.',
  'It has been agreed that the staffing level on this ward is appropriate to the workload. Staffing is therefore not to be recorded as a reason.',
  'Equipment faults are to be reported through the correct channel. It has been confirmed that no faults are currently outstanding on this ward.',
  'Compliance will be monitored.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Fares and Umm Kinan take the notice apart. What does Fares say the third paragraph does, and what does Umm Kinan find in the fourth?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.13  Compliance will be monitored', [
  ['Rasha', 'This went up on Monday. Six sentences and I have read it eleven times.'],
  ['Fares', 'Count the people in it. None. Not one.'],
  ['Umm Kinan', 'What does it actually require? That is what I would want to know if I worked there.'],
  ['Rasha', 'Two things. Finish on time, and if you do not, write why.'],
  ['Fares', 'And then the third paragraph takes away the true reason. "It has been agreed that the staffing level is appropriate." By whom, and when, and on what evidence? And then: staffing is therefore not to be recorded. That sentence is doing the work of the whole notice.'],
  ['Umm Kinan', 'The fourth one is worse and nobody will notice it. "It has been confirmed that no faults are currently outstanding." Rasha — is the second trolley back?'],
  ['Rasha', 'The second trolley has been in the workshop since the second of February.'],
  ['Umm Kinan', 'Then that sentence is not true. And it is not a lie, either, which is the difficult part: somebody has looked at a list of reported faults, and the trolley is not on it, because there is no form for a trolley. So it has been confirmed, honestly, out of a list that is wrong.'],
  ['Fares', 'So what do you write in the round book on Monday night?'],
  ['Rasha', '"Round completed at 03.25. Reason: one trolley. The second trolley was taken to the workshop on 2 February and has not been returned. Staffing was two, which is the establishment." I put the fact they have forbidden me to use, and then I take their own sentence away from them by agreeing with it.'],
  ['Umm Kinan', 'Write it exactly like that. And keep a copy, because the book stays on the ward.'],
]));
out.push(sp());
out.push(box('Language box – explaining a notice written in the passive', [
  'Start with the only question that matters: **what does it actually require of me?** Most passive notices require one or two things and are nine sentences long.',
  'Then find the sentence that is **doing the work** — usually one that removes a reason, a right or an option: _staffing is therefore not to be recorded._ Everything else is packaging.',
  'Ask of each _it has been_: **by whom, when, and on what evidence?** _It has been agreed_ · _it has been confirmed_ · _it has been noted_. Three of those in six sentences is a notice written to close a question, not to answer one.',
  'Separate **untrue** from **lie**. A confirmation made honestly out of a list that is wrong is the commonest thing in any large place, and it is answered with the missing entry, not with an accusation.',
  'Then say what you will **write**, exactly: the forbidden fact, the date, and their own sentence agreed with. _Staffing was two, which is the establishment._',
  '⚠ _is to be_ / _are to be_ is the shape of an instruction in a notice — _rounds are to be completed_ · _the reason is to be recorded_. It means **must**, and it has no person in it on purpose.',
  '**Useful phrases:** what does it actually require? · that sentence is doing the work of the whole notice · it is not true, and it is not a lie either · I take their own sentence away from them by agreeing with it.',
  '**Pronunciation.** 🔊 **Track 5.14** Reading a notice aloud to somebody: read the **requirement** slowly and the packaging fast. _It has been noted that rounds are being completed late_ — fast. _All rounds **are to be completed** within the allocated time_ — slow. The speed is how the listener knows which sentence is about them.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the notices below and does **not** show it. A reads it aloud once, then explains it: what it requires, which sentence is doing the work, and what B and C should write or do. Change roles with the other notice.'));
out.push(table(['Notice A – a school', 'Notice B – a building'], [
  ['It has been noted that marks are being submitted late.', 'It has been decided that the lift will not be used by students.'],
  ['All marks are to be submitted by the Friday.', 'This decision has been taken for reasons of safety.'],
  ['It has been agreed that the current class sizes are appropriate.', 'Concerns had been raised and the matter has been reviewed.'],
  ['Class size is therefore not to be given as a reason.', 'The lift is to be used by staff only.'],
  ['Where marks are late, a reason is to be recorded.', 'Any student found using the lift will be reported.'],
  ['Compliance will be reviewed in June.', 'Thank you for your co-operation.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write what the notice requires, in one sentence, and the sentence that is doing the work. In Notice A it is _class size is therefore not to be given as a reason_; in Notice B it is _the lift is to be used by staff only_ — the rest is the reason it is allowed to say so.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring, or remember, a notice, circular or form letter you have been given. Explain it to your partner **without showing it**: what it requires, which sentence is doing the work, who is missing, and what you are going to write or do. They must ask: _by whom?_, _on what evidence?_ and _is it untrue or is it a lie?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Rasha explained the ward notice. It requires two things: finish the round in the allocated time, and if you do not, write why. There are no people in any of the six sentences. The sentence doing the work is the one that forbids staffing as a reason, which is held up by the sentence before it — it has been agreed that the staffing level is appropriate — and nobody is told by whom, when, or on what evidence. The worse sentence is the one nobody will notice: it has been confirmed that no faults are outstanding, when the second trolley has been in the workshop since the second of February. She says that is not true and it is not a lie: somebody read a list of reported faults, and the trolley is not on it, because there is no form for a trolley. What she is going to write on Monday is the round time, the reason "one trolley", the date the trolley went, and then their own sentence agreed with — staffing was two, which is the establishment. And she is going to keep a copy, because the book stays on the ward. So I decided to find out who signed the circular about my own department, by name, before I answer it, because I have been answering it as if it came from the building._'));
out.push(p('**Listener task:** what did the notice require, which sentence did the work, and was it untrue or a lie?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 1)', 7));
out.push(p('For each notice, choose the correct explanation: **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _PRINTING SHOP · Proofs are not signed by the person who set the text._',
  '**2**  _WARD 4 · Where a round is not completed within the allocated time, the reason is to be recorded in the round book. Staffing is not to be recorded as a reason._',
  '**3**  _LIFT · Out of service until the brake part arrives. The part was ordered on 14 March. Staff only when in service._',
  '**4**  _COUNTER · Repairs are checked by a second person before they are returned. Please allow one extra day._',
  '**5**  _ROOM 14 · The second switch by the door is on the Room 13 circuit. If this room goes dark, try Room 13 before reporting a fault._',
], C.lyellow, C.orange));
[
  '**1**  **A** The person who set the text must sign the proof.   **B** Somebody other than the person who set the text must sign it.   **C** Proofs do not have to be signed.',
  '**2**  **A** You may give any reason for a late round.   **B** You must give a reason, but not that one.   **C** Late rounds do not have to be explained.',
  '**3**  **A** The lift is broken and nothing has been done.   **B** The lift is broken, a part has been ordered, and staff may use it when it works.   **C** The lift will never be used again.',
  '**4**  **A** Repairs take longer because they are checked by somebody else.   **B** Repairs are returned on the same day.   **C** You must check the repair yourself.',
  '**5**  **A** Report a fault immediately if the room goes dark.   **B** Check the other room first, because the two share a circuit.   **C** The switch by the door does not work.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining a notice to somebody who has to obey it (50 words or more).'));
out.push(p('It is ______________ sentences and there is nobody in any of them. What it actually requires is ______________.   The sentence doing the work is "______________", and it is held up by "______________" — and we are not told by ______________, when, or ______________.   The one nobody will notice is "______________", which is not true, because ______________. It is not a lie either: somebody ______________.   What I am going to write is: "______________." And I am going to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What it requires, in one sentence, first',
  'The sentence doing the work, quoted',
  '_by whom · when · on what evidence_ asked of every _it has been_',
  'Untrue separated from a lie, and the exact words you will write',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"We\'ve had a notice up at work for a month and nobody can work out what it means. It\'s all \'it has been decided\' and \'is to be completed\' and there isn\'t a single name in it. Is this normal in English? How do I even reply to it? Sam"_',
  '**Your notes:**  •  _Tell him it is normal, and say why people write like that_  ·  _Explain how to find what it actually requires_  ·  _Tell him the one question to ask of every "it has been"_  ·  _Say what to write in reply_',
  'Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The sheets ___ on both sides.   a) are printed   b) are print   c) print',
  '2  The wall ___ after the floor was laid.   a) was build   b) was built   c) built',
  '3  An accident ___ at the Harasta turning.   a) was happened   b) happened   c) is happened',
  '4  The letter was written ___ hand.   a) with   b) by   c) in',
  '5  The report was signed ___ a man who left in March.   a) with   b) from   c) by',
  '6  Only after that ___ given.   a) it is   b) is it   c) it was',
  '7  The seal ___ , so it is no longer splitting.   a) has been replaced   b) was replaced   c) is replaced',
  '8  The model ___ from either window.   a) has not been withdrawn   b) has not withdrawn   c) was not withdraw',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 1 style – three options).** 🔊 **Track 5.15** You will hear seven short extracts. For each one, choose **A**, **B** or **C**.'));
[
  '**1**  What is the speaker describing?   **A** how a book is printed   **B** how paper is made   **C** how a machine is repaired',
  '**2**  When was the room divided?   **A** 1962   **B** 1974   **C** 2009',
  '**3**  How is the adhesive put on?   **A** by machine   **B** by hand, with a brush   **C** with four screws',
  '**4**  Which must happen first?   **A** the drawer is opened   **B** the chart is read   **C** the drug is given',
  '**5**  Why is there no person in the sentence?   **A** nobody knows who   **B** it does not matter who   **C** somebody has been taken out',
  '**6**  What has **not** been done?   **A** the letter has not been read   **B** the model has not been withdrawn   **C** the supplier has not been contacted',
  '**7**  What does the notice require?   **A** that rounds are finished on time   **B** that staffing is recorded   **C** that faults are ignored',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(dlg('Track 5.15  Audio script (read after the check)', [
  ['1  Bassel', 'The text is set, then checked twice by two different people. A proof is printed on ordinary paper and read, and only when it has been signed are the plates made.'],
  ['2  Lubna', 'The building itself went up in 1962, and the fourth floor was extended over the yard in 1974. But this room and Room 13 were made out of one accounts office when the place was converted — that was 2009.'],
  ['3  Mazen', 'On the good ones the screen sits in a frame and the frame is screwed to the body. On these eleven it is held on by clips and then sealed round the edge, and the adhesive is applied by hand, with a brush, by a different operator every shift.'],
  ['4  Rasha', 'The chart is taken from the end of the bed and read before the drawer is opened. Before, not while. Everything else on that round can be argued about; that one cannot.'],
  ['5  Yara', 'I wrote "the incubator failed". Nobody is in it, and it is not because nobody knows or because it does not matter. I took the people out, and one of the people I took out was me.'],
  ['6  Mazen', 'My letter has been read and a reply has been written, seven months later. But nobody has telephoned me, no name has been given, and the model has not been withdrawn from either window.'],
  ['7  Rasha', 'Six sentences and no people. What it comes down to is that the round is to be finished in the allocated time, and if it is not, you write why — except that the one true reason has been forbidden in the paragraph before.'],
]));
out.push(p('**C  Writing.** Write a process page for something you do (100+ words): the steps grouped under three headings, all in the passive with no people in them, the two steps that must never be swapped, and a short section on the things that are not steps.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 5)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe how something is made with _is / are_ + the third form',
  '☐ describe how something was built or changed with _was / were_ + the third form',
  '☐ use _by_ for the doer and _with_ for the tool, and leave out the ones that do not matter',
  '☐ put a process in order with _before_, _once_ and _only after that_ — and get the inversion right',
  '☐ name which of the four reasons a passive sentence is using',
  '☐ put the people back into somebody else\'s sentence and see what changes',
  '☐ report what has and has not been changed with _has / have been_ + the third form',
  '☐ read a notice written in the passive and say what it actually requires of me',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 6 – RULES, RIGHTS AND OBLIGATIONS', [
  'Unit 5 ended on a notice that tells people what they must do without ever saying _must_. Unit 6 says it: _must · have to · don\'t have to · mustn\'t · be allowed to · be supposed to_ — six shapes, and the difference between them is almost always **who is obliging whom**.',
  'Before the next lesson: write down **three rules** where you work or live — one you agree with, one you do not, and one that nobody has ever explained to you. Say for each one who made it, if you know. Unit 6 is built on the third column.',
  'And after Unit 6: the **Mid-Book Test**, four papers, sixty marks — Reading 20 · Writing 15 · Listening 15 · Speaking 10, covering Units 1–6.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
