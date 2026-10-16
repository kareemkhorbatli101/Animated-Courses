// Proactive English B1 · Syria Edition · Book 1 · Unit 8 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 8  Advice and Hypotheses'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**8.1**  give advice',
  '**8.2**  imagine a different situation',
  '**8.3**  say what would happen if',
  '**8.4**  set a condition',
  '**8.5**  soften advice to somebody senior',
  '**8.6**  write advice to somebody you do not know',
  '**8.7**  Review & Mediate: explain two options and advise',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**One tense, used backwards.** _If I **were** you, I **would**…_ uses a past form to talk about now. Nothing in the sentence is in the past; the past form is what marks it as **not real**.',
  '**The two columns on the board.** Your homework asked for one piece of advice you were given and did not take, and one you gave that was not taken. Both columns go up in 8.1, and the unit is largely about the second one.',
  '**Three strengths in the result.** _It **would** move · it **might** move · it **could** move._ In 8.3 you find out why the honest answer is almost always the middle one, and why the strong one loses arguments.',
], C.lyellow, C.orange));

// ======================= 8.1 =======================
out.push(pb());
out.push(h2('8.1  If I were you'));
out.push(p('**Function:** giving advice   ·   **Grammar:** _if I were you, I\'d_   ·   **Pronunciation:** _I\'d_ and the stress on the verb'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out both pieces of advice from your homework. Your teacher puts them in two columns: **given to me and not taken** · **given by me and not taken**. Then count them, and ask one question of the second column: did any of it begin _if I were you_?'));
out.push(board('If I were you, I\'d give the key back first.', 'if I were you, I\'d + verb'));
out.push(p('**b**  Advice, or an instruction wearing advice? **1** _If I were you, I\'d ask him._  **2** _You should ask him._  **3** _You have to ask him._  **4** _Why don\'t you ask him?_  **5** _I would ask him._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Samira say about most advice?   **A** it is usually wrong   **B** it is an instruction in a softer voice   **C** nobody listens to it'));
out.push(p('**b**  Listen again. **1** What advice did Samira give her sister, and what happened?   **2** What does Ms Huda say the words _if I were you_ actually do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.1  Two columns', [
  ['Samira', 'My column is longer on the right. I have given a great deal of advice that nobody took and I have taken almost none.'],
  ['Ms Huda', 'Give us one from the right.'],
  ['Samira', 'I told my sister in 2022 to leave the job at the clinic. For eight months. Every week. She did not leave and we did not speak properly for a year.'],
  ['Omar', 'Was the advice wrong?'],
  ['Samira', 'The advice was right. She left in the end, eleven months later, and she says now that she should have gone when I said. And I would give exactly the same advice again and I would give it the same way, which is the part I have been sitting here thinking about for twenty minutes.'],
  ['Ms Huda', 'What was the way?'],
  ['Samira', '"You have to leave that job." That is what I said, about thirty times. I never once said "if I were you". I did not put myself in her situation; I stood outside it and told her what to do, and she had three children and a rent and I had none of those things.'],
  ['Ms Huda', 'Then here is the small thing those four words do, and it is not politeness. _If I were you, I\'d leave_ makes you say, out loud, that you are imagining being in their position. It obliges you to have thought about the rent. _You have to leave_ obliges you to nothing at all.'],
  ['Lubna', 'So is it just a softer way of saying the same thing?'],
  ['Ms Huda', 'No. It is a **harder** way, for the person giving it. If you cannot honestly finish the sentence _if I were you_ — if you have not worked out what you would do with the three children — then you have not got advice. You have got an opinion about somebody else\'s life.'],
  ['Samira', 'Then I had an opinion for eight months and I called it advice. And she knew.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _if I were you, I\'d_…**',
  table(['you say', 'how strong it is'], [
    ['_**If I were you, I\'d** give the key back first._', 'advice; and it puts you in their position'],
    ['_**I\'d** give the key back first._', 'the same thing, shorter, very common in speech'],
    ['_You **should** give the key back._', 'advice, but from outside — a judgement'],
    ['_You **have to** give the key back._', 'not advice at all; an obligation'],
  ], [2.5, 2.1]),
  '**The form:** _if_ + **were** + _you_, then _**would** / **\'d**_ + the bare verb. _If I were you, I would wait._ The past form _were_ does not mean the past; it means **not real**.',
  '⚠ ~~If I was you~~ is heard, and in careful speech and all writing it is _**were**_. This is the one place in English where _were_ is used with _I_, and it is worth getting right because it is the mark of the whole structure.',
  '⚠ ~~If I were you, I will wait.~~ → _I **would** wait._ ⚠ ~~If I would be you~~ → _If I **were** you_. ⚠ ~~I\'d to wait~~ → _I\'d **wait**_.',
  '**_I\'d_ on its own is the commonest form in real speech:** _I\'d wait · I\'d ask him first · I wouldn\'t say anything yet._ The _if I were you_ is often left off and understood.',
  '**And the point of the cycle:** the words oblige you to have imagined their situation. If you cannot finish the sentence honestly — if you have not thought about the rent, the three children, the eleven years — you have an opinion about somebody else\'s life, not advice.',
  '**Useful phrases:** my column is longer on the right · I stood outside it and told her what to do · it is a harder way, for the person giving it · I had an opinion for eight months and I called it advice.',
  '**Practise:** Turn each instruction into real advice, and say what you would have to have thought about.  1 _You have to leave that job._  2 _You should tell him._  3 _You must complain._  4 _You have to ask for a rise._  5 _You should go back and study._',
  '**Pronunciation.** 🔊 **Track 8.2** _If I were you_ is said fast and almost as one word, /ɪfaɪwəjuː/, and all the weight falls on the **verb** after _I\'d_: _ifaiwəju aɪd **WAIT**_. Listen to eight and write only the verb — it is the advice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B gives advice with _if I were you_, and then says **one thing about A\'s situation** that they had to think about to give it. If B cannot name the thing, A says so. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'If I were you, I\'d __________.'],
  ['A', 'What did you have to think about to say that?'],
  ['B', '__________.'],
  ['A', '__________.'],
]));
out.push(table(['Card A – the situations', 'Card B – the situations'], [
  ['I have had a key for two years that I was never given.', 'I have been on nights for nine months and I am tired.'],
  ['I have not been paid for three repairs and I know the man.', 'I have been offered one day a month somewhere else.'],
  ['My mother found out about my job three days before I left.', 'I have never used the machine in my own classroom.'],
  ['I have written nineteen forms that say something untrue.', 'I have never spoken English to anybody outside this room.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the advice and the thing the adviser had to think about. Then count: how many pieces of advice came with a real thing attached? That number is the only measure of advice there is.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your partner the advice from your right-hand column again — the advice nobody took — but this time beginning _if I were you_. You must name one thing about their situation that you would have to live with.'));
out.push(p('**b**  Swap. Then each of you say whether the advice is the same advice when it is said that way, and whether you would still give it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Samira said her column is longer on the right: she has given a great deal of advice that nobody took and has taken almost none. Hers from the right is that she told her sister in 2022 to leave the job at the clinic — for eight months, every week. Her sister did not leave, and they did not speak properly for a year. Omar asked whether the advice was wrong, and Samira said the advice was right: her sister left eleven months later and now says she should have gone when Samira said it. And Samira says she would give the same advice again and give it the same way, which is the part she has been sitting there thinking about. The way was "you have to leave that job", said about thirty times. She never once said "if I were you". She did not put herself in her sister\'s situation; she stood outside it and told her what to do, and her sister had three children and a rent and Samira had none of those things. Ms Huda said those four words are not politeness: if I were you, I would leave makes you say out loud that you are imagining being in their position, and it obliges you to have thought about the rent — and you have to leave obliges you to nothing. Lubna asked whether it is just a softer way of saying the same thing, and Ms Huda said no: it is a harder way, for the person giving it. If you cannot honestly finish the sentence, you have an opinion about somebody else\'s life. Samira said then she had an opinion for eight months and called it advice, and her sister knew._'));
out.push(p('**Listener task:** write the advice somebody gave for months, and the thing they had not thought about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Samira writes but does not send. Answer the questions.'));
out.push(model([
  '**TO MY SISTER, THREE YEARS LATE** · S. Deeb · not sent',
  'You left that clinic in the November and you have said twice since that you should have gone when I told you to. I want to put something next to that, because you have been kinder about it than I deserve.',
  'I said "you have to leave" thirty times. I never said "if I were me, in your flat, with Rami and the twins and a rent of a hundred and ten thousand, I would leave" — because if I had tried to say that sentence I would have had to work out where you were going to live in the December, and I never did work it out, not once, in eight months.',
  'The advice was right and it was not advice. It was a correct opinion delivered from a flat with one person in it.',
  'What I would say now, if you were still there. If I were you I would stay until the end of January, because the rent is paid quarterly and the next quarter starts in February. I would spend December asking three people, not one, and I would not tell the clinic anything until I had an answer from one of them. And I would expect to be frightened for about six weeks, because I was frightened for six weeks when I moved and nobody told me that either.',
  'That is the same advice. It has a December in it. That is the whole difference and it took me three years to see it.',
]));
out.push(item('1', 'How many times did she say "you have to leave"?'));
out.push(item('2', 'What would she have had to work out?'));
out.push(item('3', 'What does she say the difference is between the two versions?'));
out.push(writers([
  'A letter of advice given late: **what they said about it** → **what you actually said, counted** → **the sentence you never said, with their circumstances in it** → **the version you would give now, with a month and a number** → **and one line naming the difference**.',
  'Put their **circumstances inside your own sentence**: _if I were me, in your flat, with Rami and the twins and a rent of a hundred and ten thousand._ Naming the rent is the work; everything else is a wish.',
  'Give the new version a **date and a sequence**: stay until January, spend December asking three people, tell nobody until one answers. Advice with a calendar in it can be followed; advice without one is a judgement.',
  '⚠ Include the thing nobody tells people: _I would expect to be frightened for about six weeks, because I was._ That sentence is what makes the rest believable.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter of advice you gave badly, as it should have been given (50 words or more).'));
out.push(p('**______________** · ______________   You ______________, and you have said since that ______________. I want to put something next to that.   I said "______________" ______________ times. I never said "if I were me, in your ______________, with ______________ and ______________" — because if I had tried to say that sentence I would have had to work out ______________, and I never did.   The advice was right and it was not advice. It was ______________.   **What I would say now.** If I were you I would ______________, because ______________. I would ______________, and I would not ______________ until ______________. And I would expect ______________, because ______________.   That is the same advice. It has ______________ in it.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_if I **were**_ — never _was_ — and _would_ + the bare verb',
  'Their circumstances named inside your sentence',
  'A date or a sequence in the new version',
  'One line that nobody tells people',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the sentence they never said.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) — to a brother, a sister, a friend, a colleague, a student, or to yourself at twenty. Then decide whether to send it and write why underneath.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person it is addressed to**. ★ _The thing you had to work out._  ✓ _One place where it is still an opinion._  ? _Where was I going to live in the December?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many letters are going to be sent?** Two or three. Then: how many of the pieces of advice in the right-hand column had a December in them when they were first given? None, and that is the count that ends the cycle.'));
out.push(hw('Give one piece of advice this week beginning _if I were you_, to one person, and name the thing about their situation that you had to think about (50+ words). Write down what they said.'));

// ======================= 8.2 =======================
out.push(pb());
out.push(h2('8.2  If they changed the rota'));
out.push(p('**Function:** imagining a different situation   ·   **Grammar:** the second conditional   ·   **Pronunciation:** the two halves and the pause between them'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each round the room: _If I ___ , I would ___ ._ It must be about **now** and it must be something that is not true. Your teacher writes six and then crosses out any that are really about the future.'));
out.push(board('If they changed the rota, the errors would move.', 'if + past simple, would + verb'));
out.push(p('**b**  Real or not real? **1** _If they change the rota, the errors will move._  **2** _If they changed the rota, the errors would move._  **3** _If I had a car, I would drive._  **4** _If I have a car, I will drive._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Umm Kinan doing?   **A** regretting a decision   **B** imagining being twenty-five now   **C** advising Jad about university'));
out.push(p('**b**  Listen again. **1** What does she say she would not do?   **2** What does Jad say about his own sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.3  If I were twenty-five now', [
  ['Ms Huda', 'Umm Kinan. If you were twenty-five now.'],
  ['Umm Kinan', 'If I were twenty-five now I would not do what I did, and that is not the same as saying I was wrong at twenty-five.'],
  ['Ms Huda', 'Go on.'],
  ['Umm Kinan', 'At twenty-five I took the first teaching post I was offered, in the school I had been to myself, four streets from my mother. If I were twenty-five now I would go somewhere I did not know for two years, and I would learn one thing that was not mathematics — a language, probably, which is why I am in this room at forty-eight.'],
  ['Jad', 'If I had done that at nineteen I would not be at university at all.'],
  ['Umm Kinan', 'You are nineteen. You can do it.'],
  ['Jad', '…That is true. I said "if I had done that" and I am still doing it. My sentence was in the wrong tense and I did not notice until it was out of my mouth.'],
  ['Ms Huda', 'That is the most useful mistake anybody has made this evening. _If I had done_ is about a past that is closed. _If I did_ — or _if I went_, _if I asked_ — is about now, and now is open. Jad put a door between himself and a thing he could do on Thursday, with one tense.'],
  ['Lubna', 'So which one am I in?'],
  ['Ms Huda', 'That is the question the whole cycle is for, and you are to ask it of every sentence you make for the next forty minutes. _Is this a past I cannot reach, or a present I am pretending is a past?_'],
  ['Umm Kinan', 'Mine is a past I cannot reach. I am forty-eight and I am not going to move to Aleppo for two years.'],
  ['Ms Huda', 'And the language?'],
  ['Umm Kinan', 'The language is the present I was pretending was a past, and I started it in September.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the second conditional: _if_ + past simple, _would_ + verb**',
  table(['you say', 'what it means'], [
    ['_If they **changed** the rota, the errors **would** move._', 'not real now, but possible'],
    ['_If I **were** twenty-five, I **would** go abroad._', 'not real — and _were_ for all persons'],
    ['_If I **had** a car, I **would** drive._', 'I have no car'],
    ['_If they **change** the rota, the errors **will** move._', '**first** conditional — real and expected'],
  ], [2.5, 2.1]),
  '**The past form is not past.** It marks the sentence as **not real now**. _If I had a car_ says nothing about yesterday; it says I have no car today.',
  '**First or second?** _If they change it, the errors will move_ = I think they may well change it. _If they changed it, the errors would move_ = they are not going to, and I am reasoning about it anyway. The difference is not time; it is how likely you think it is.',
  '⚠ ~~If they would change the rota~~ → _If they **changed**_. The _would_ goes in the **other** half, and never in the _if_ half.',
  '⚠ ~~If I was you~~ → _If I **were** you_ (fixed). Elsewhere _if I was_ is heard in speech, but in writing keep _were_ for the unreal.',
  '⚠ ~~If I would have a car~~ · ~~If I will have a car, I would drive~~ — mixing the two halves is the commonest error of the cycle.',
  '**And the distinction Jad found:** _if I **had done** it_ is a past you cannot reach. _if I **did** it_ is a present you may be pretending is a past. Ask it of every sentence: which one am I in?',
  '**Useful phrases:** that is not the same as saying I was wrong · my sentence was in the wrong tense and I did not notice until it was out of my mouth · a past I cannot reach, or a present I am pretending is a past · the language is the present, and I started it in September.',
  '**Practise:** Say each one as a second conditional, then decide whether it is a past you cannot reach or a present you are pretending is a past.  1 live somewhere else  2 learn something new  3 ask for more money  4 change your hours  5 study again',
  '**Pronunciation.** 🔊 **Track 8.4** The two halves are said as two phrases with a clear **pause** between them, and the pitch falls at the end of the first: _if they changed the rota ↘ ‖ the errors would move._ Without the pause the sentence turns into one long noise. Listen to six and mark the pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B makes a second conditional about it and then says which kind it is — a past they cannot reach, or a present they are pretending is a past. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'If __________, I would __________.'],
  ['A', 'Is that a past you cannot reach?'],
  ['B', '__________, because __________.'],
  ['A', 'So what would you do on Thursday?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the situations', 'Card B – the situations'], [
  ['living in a different city', 'studying something new'],
  ['working different hours', 'asking for more money'],
  ['speaking English outside this room', 'having a different job'],
  ['being ten years younger', 'having said no to somebody'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** sort the eight into the two kinds. Then the useful count: how many turned out to be a **present** being treated as a past? In most rooms it is five or six out of eight, and those five or six all have a Thursday in them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Make four second conditionals about your own life. Then go through them with your partner and sort them: past you cannot reach · present you are pretending is a past.'));
out.push(p('**b**  Swap. Then each of you take **one** from the second pile and say what the first step would be, and on what day.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Umm Kinan to imagine being twenty-five now. She said that if she were twenty-five now she would not do what she did, and that is not the same as saying she was wrong at twenty-five. At twenty-five she took the first teaching post she was offered, in the school she had been to herself, four streets from her mother. If she were twenty-five now she would go somewhere she did not know for two years, and she would learn one thing that was not mathematics — a language, probably, which is why she is in this room at forty-eight. Jad said that if he had done that at nineteen he would not be at university at all, and Umm Kinan said he is nineteen and can do it. And he said that is true — he said "if I had done that" and he is still doing it, and his sentence was in the wrong tense and he did not notice until it was out of his mouth. Ms Huda said that is the most useful mistake anybody has made this evening: if I had done is about a past that is closed, and if I did — or if I went, if I asked — is about now, and now is open. Jad put a door between himself and a thing he could do on Thursday, with one tense. Lubna asked which one she is in, and Ms Huda said that is the question the whole cycle is for. Umm Kinan said hers is a past she cannot reach, because she is forty-eight and not going to move to Aleppo for two years — and that the language is the present she was pretending was a past, and she started it in September._'));
out.push(p('**Listener task:** write somebody\'s present that was being treated as a past.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Jad writes. Answer the questions.'));
out.push(model([
  '**TWO LISTS, AND ONE OF THEM IS A DOOR** · J. Attar',
  '**Things that would be different if a past had been different.** If I had been born somewhere else I would have had a different six years of reading. If my father had not died when I was fourteen I would probably not have learnt to mend anything. If somebody had told me at fifteen that asking was not begging, I would have asked for help with the first computer instead of taking it apart twice.',
  'Those three are closed. I can look at them and I cannot do anything about any of them, and I have spent a good deal of time looking at them, which I now think was a way of being busy.',
  '**Things that would be different if a present were different.** If I spoke English out loud to strangers, I would be able to ask the questions I answer. If I said on that forum that I am nineteen, I would find out what the six hundred and forty-one answers are actually worth. If I asked somebody for help with something technical, I would probably get it in about four minutes.',
  'Every one of those three is a Thursday. The first one has already started in this room. The second one is one sentence typed into a box. The third one is a message to a man in Aleppo whose name I have known for two years.',
  '**What I notice.** My first list is in a tense I cannot reach and my second list is in a tense I have been using as if I could not reach it. There is no difference between the two lists except the grammar, and the grammar is doing something to me.',
]));
out.push(item('1', 'What does he now think the time spent on the first list was?'));
out.push(item('2', 'How far away is the second item on the second list?'));
out.push(item('3', 'What does he say there is no difference between the lists except?'));
out.push(writers([
  'Two lists on one page: **three things that would be different if a past had been different** → **one line saying they are closed** → **three things that would be different if a present were different** → **what each of those three actually is, in one step** → **and one paragraph on what you notice**.',
  'Keep the two lists in **different tenses on purpose** and let the reader see it. _If I had been born_ against _if I spoke_. The grammar is the argument.',
  'Reduce each item on the second list to **one physical step**: a sentence typed into a box, a message to a man in Aleppo, a question at a pharmacy. If you cannot reduce it to one step, it belongs on the first list or it is not yet understood.',
  '⚠ The last paragraph is the page. _There is no difference between the two lists except the grammar, and the grammar is doing something to me._ Find your own version of that sentence; do not borrow this one.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own two lists (50 words or more).'));
out.push(p('**______________** · ______________   **Things that would be different if a past had been different.** If ______________ had ______________, I would have ______________. If ______________ had not ______________, I would ______________. If somebody had ______________, I would have ______________.   Those three are closed. ______________.   **Things that would be different if a present were different.** If I ______________, I would ______________. If I ______________, I would ______________. If I ______________, I would ______________.   Every one of those three is ______________. The first is ______________. The second is ______________. The third is ______________.   **What I notice.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_if_ + past simple, _would_ + verb — and no _would_ in the _if_ half',
  '_were_ for the unreal, with every person',
  'The two lists kept in different tenses on purpose',
  'Each item on the second list reduced to one physical step',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one item from the **second** list and its one step.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more). Three closed items, three open ones, the step for each of the three, and what you notice about your own grammar.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page carefully. ★ _The item I would move from the first list to the second._  ✓ _One item on the second list that is really three steps._  ? _Which day?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the items somebody else wants to move from the first list to the second.** Then let each person say whether they accept the move. Some will not, and that is a real answer: not everything open is worth opening.'));
out.push(hw('Do the one step from the top of your second list, this week. Write what it was and what happened (50+ words). If you did not do it, write that, and write what stopped you.'));

// ======================= 8.3 =======================
out.push(pb());
out.push(h2('8.3  Would, might, could'));
out.push(p('**Function:** saying what would happen if   ·   **Grammar:** _would_ · _might_ · _could_ in the result clause   ·   **Pronunciation:** the three strengths heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives one condition — _if they changed the rota_ — and the class gives the result three times, with _would_, _might_ and _could_. Then: which of the three is honest, and which one would you put in a letter?'));
out.push(board('If they changed it, the errors might move.', 'would · might · could'));
out.push(p('**b**  Strongest to weakest. **1** _it would move_  **2** _it might move_  **3** _it could move_  **4** _it would probably move_  **5** _it might well move_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which word does Rasha choose for her letter?   **A** would   **B** might   **C** could'));
out.push(p('**b**  Listen again. **1** Why does she not use _would_?   **2** What does Fares say about the word she chose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.5  One word in a letter', [
  ['Rasha', 'My letter about the rota. The last sentence has been rewritten four times and the only thing that changes is one word.'],
  ['Ms Huda', 'Read the three versions.'],
  ['Rasha', '"If the block were set at three nights, the errors would stop." "…the errors might move." "…the errors could move."'],
  ['Fares', 'The first one is the strongest. Use that.'],
  ['Rasha', 'The first one is the one that loses. I have seven errors on fourth and fifth nights out of a hundred and eighteen shifts, from one nurse, recorded by herself. That evidence does not carry the word "would". If I write "would" and then there is one error on a second night in the trial, the whole letter is finished and so am I.'],
  ['Ms Huda', 'And _could_?'],
  ['Rasha', '_Could_ is too weak. _Could_ means it is possible, which is true of anything. The rota could move the errors; the rota could also be nothing to do with it. _Could_ does not commit me to anything, and a sentence that does not commit me to anything is not worth a page of evidence.'],
  ['Mazen', 'So _might_.'],
  ['Rasha', '_Might_. "If the block were set at three nights, the errors might move." It says: I think this is likely, I am not certain, and I have told you why I am not certain in the paragraph above.'],
  ['Fares', 'It sounds weaker.'],
  ['Rasha', 'It sounds weaker and it is stronger, because it is the only one of the three that matches my evidence. The manager will read the number, then the limit, then the word. If the word is bigger than the number she will stop at the word.'],
  ['Ms Huda', 'Say that last part again for the room.'],
  ['Rasha', 'Never use a word that is bigger than your evidence. It is the only thing in the letter they cannot check, so it is the only thing they can refuse.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – three strengths in the result clause**',
  table(['you say', 'how sure you are'], [
    ['_the errors **would** move_', 'confident — I expect this'],
    ['_the errors **would probably** move_', 'confident, with a hedge; very usable'],
    ['_the errors **might** move_', 'likely but uncertain — the honest middle'],
    ['_the errors **could** move_', 'possible; commits you to nothing'],
  ], [2.3, 2.3]),
  '**All three take the bare verb:** _would move · might move · could move_. ⚠ ~~might to move~~ · ~~would moving~~.',
  '**_might_ is the working word of professional English.** _Would_ claims a prediction; _could_ claims nothing; _might_ claims a judgement and admits it is one. In a letter with numbers in it, _might_ is nearly always the right word.',
  '**The rule to take away:** never use a word that is bigger than your evidence. The modal is the one thing in a letter nobody can check, so it is the one thing they can refuse.',
  '⚠ _could_ has two meanings and students mix them: _if I asked, he **could** say yes_ (possible) and _if I had more time, I **could** finish it_ (would be able to). The second is a real use and the first is the weak one.',
  '**And in the _if_ half:** the past form never changes. _If the block **were** set at three… / if they **changed** it…_ — the strength lives entirely in the second half.',
  '**Useful phrases:** the only thing that changes is one word · that evidence does not carry the word "would" · it sounds weaker and it is stronger · never use a word that is bigger than your evidence.',
  '**Practise:** Give the result three times, then choose and justify.  1 if the handle were replaced  2 if the box on the form were bigger  3 if somebody rang him in week one  4 if the model were withdrawn  5 if I spoke to one stranger a week',
  '**Pronunciation.** 🔊 **Track 8.6** All three are weak and short in speech — /wəd/, /maɪt/, /kəd/ — and the **verb** after them carries the stress: _the errors wəd **MOVE**_. Listen to eight and write _would_, _might_ or _could_; it is a test of a single vowel.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the condition from the card. B gives the result three times — _would_, _might_, _could_ — and then chooses one and says what evidence they have for it. A says whether the word is bigger than the evidence. Swap cards.'));
out.push(dlg(null, [
  ['A', 'If __________.'],
  ['B', '…it would __________. …it might __________. …it could __________.'],
  ['A', 'Which one?'],
  ['B', '__________, because my evidence is __________.'],
  ['A', 'Is the word bigger than the evidence?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the conditions', 'Card B – the conditions'], [
  ['If the handle on that window were replaced…', 'If the reason box were four lines deep…'],
  ['If the model were withdrawn from both shops…', 'If somebody rang a pupil in the first week…'],
  ['If I spoke to one stranger a week in English…', 'If the chamber light were replaced…'],
  ['If there were a line on the form for equipment…', 'If he answered one email a week…'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the chosen word for each condition and say whether it fits the evidence. The ones that come out as _would_ are nearly always the mechanical ones — a handle, a light — and the ones that come out as _might_ all have a person in them, which is 7.5 again in a different grammar.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the change you asked for in 7.6 and say what would happen if it were made — three times, with the three words. Then choose, and say what your evidence carries.'));
out.push(p('**b**  Swap. Then each of you say whether the word you have been using in your head about it is bigger than your evidence.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has rewritten the last sentence of her rota letter four times and the only thing that changes is one word. If the block were set at three nights, the errors would stop — might move — could move. Fares said the first is the strongest and she should use it, and she said the first is the one that loses: she has seven errors on fourth and fifth nights out of a hundred and eighteen shifts, from one nurse, recorded by herself, and that evidence does not carry the word "would" — and if she writes would and then there is one error on a second night in the trial, the whole letter is finished and so is she. Could is too weak, because could means it is possible, which is true of anything: the rota could move the errors and the rota could also be nothing to do with it, and a sentence that does not commit her to anything is not worth a page of evidence. So: might. It says I think this is likely, I am not certain, and I have told you why in the paragraph above. Fares said it sounds weaker, and she said it sounds weaker and it is stronger, because it is the only one of the three that matches her evidence — the manager will read the number, then the limit, then the word, and if the word is bigger than the number she will stop at the word. Never use a word that is bigger than your evidence: it is the only thing in the letter they cannot check, so it is the only thing they can refuse._'));
out.push(p('**Listener task:** write the word somebody has been using that is bigger than their evidence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the last paragraph of Rasha\'s letter, in four versions. Answer the questions.'));
out.push(model([
  '**ONE SENTENCE, FOUR TIMES** · R. Barakat',
  '**Version 1.** If the block were set at three nights, the errors would stop.',
  '**Version 2.** If the block were set at three nights, the errors could move.',
  '**Version 3.** If the block were set at three nights, the errors might move.',
  '**Version 4, which is the one I have sent.** If the block were set at three nights for three months, the errors might move to the second and third nights or disappear, and I would expect some. If none of the seven patterns repeats, the change will have done nothing and I will say so in writing at the September meeting.',
  '**Why version 1 fails.** It promises an outcome I cannot deliver out of one nurse\'s notebook. The first error on a second night ends the argument, and the manager knows that before she finishes reading.',
  '**Why version 2 fails.** _Could_ is true of everything. If I am going to use a word that commits me to nothing, I do not need the four paragraphs above it.',
  '**Why version 4 is not just version 3 with more words.** It names what would count as the change working, it names what would count as it failing, and it says who will say so. A modal on its own tells the reader how sure I am. Version 4 tells them how they will know whether I was right.',
]));
out.push(item('1', 'What is wrong with version 1 and what is wrong with version 2?'));
out.push(item('2', 'What three things does version 4 name?'));
out.push(item('3', 'What does she say a modal on its own does?'));
out.push(writers([
  'A result sentence that holds: **the condition in the past form** → **the result with the right modal** → **what would count as it working** → **what would count as it failing** → **and who will say so, and when**.',
  'Choose the modal **after** you have written the evidence, not before. The word is the last decision in the letter and it should be the shortest one.',
  'Add what would count as **failure**. _If none of the seven patterns repeats, the change will have done nothing and I will say so._ Nobody refuses a request that contains its own test.',
  '⚠ Name the **person** who will report the outcome, and make it yourself. A trial with no named reporter is a trial nobody will look at again.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own result sentence in four versions (50 words or more).'));
out.push(p('**Version 1.** If ______________ were ______________, ______________ would ______________.   **Version 2.** …______________ could ______________.   **Version 3.** …______________ might ______________.   **Version 4.** If ______________ were ______________ for ______________, ______________ might ______________ or ______________, and I would expect ______________. If ______________, the change will have done nothing and I will say so ______________.   **Why version 1 fails.** ______________.   **Why version 2 fails.** ______________.   **Why version 4 is not version 3 with more words.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_would_ · _might_ · _could_ + the bare verb, and the past form in the _if_ half',
  'The modal chosen to match the evidence, not the feeling',
  'What would count as working **and** as failing',
  'A named person and a named date for saying so',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read version 4 only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the four versions in full (100 words or more), with the three "why" paragraphs. Then write underneath which word you would have used last month.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s versions as **the person who would grant the trial**. ★ _The sentence that tells me how I will know._  ✓ _One word bigger than the evidence._  ? _Who is going to tell me, and when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Hands up for the word you would have used last month.** Mostly _would_. Then: how many of you are sending _might_? Nearly all. Say the one sentence that explains it and then stop: the modal is the only thing in the letter nobody can check.'));
out.push(hw('Write the one sentence with the right modal in it, and underneath it write what would count as your being wrong (50+ words). Keep it with the 7.6 page.'));

// ======================= 8.4 =======================
out.push(pb());
out.push(h2('8.4  Unless, as long as, provided that'));
out.push(p('**Function:** setting a condition   ·   **Grammar:** _unless_ · _as long as_ · _provided that_   ·   **Pronunciation:** the weight on the condition'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher makes four offers. For each one the class adds a condition with _as long as_, and then says the same thing with _unless_ — which turns the sentence inside out.'));
out.push(board('Yes, as long as somebody is on site. Not unless somebody is.', 'unless = if not · as long as · provided that'));
out.push(p('**b**  Same meaning or not? **1** _as long as he asks_ / _unless he asks_  **2** _unless he asks_ / _if he does not ask_  **3** _provided that it is in writing_ / _as long as it is in writing_  **4** _unless it rains_ / _if it does not rain_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What answer has Lubna had?   **A** no   **B** yes with a condition   **C** nothing yet'));
out.push(p('**b**  Listen again. **1** What is the condition, and how long has it been available?   **2** What does Ms Huda say about the word _unless_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.7  Yes, as long as', [
  ['Lubna', 'I have an answer. It came on Sunday and it is eleven lines and the useful part is one clause.'],
  ['Ms Huda', 'Read the clause.'],
  ['Lubna', '"The department has no objection to your using the workshop after 18.00, provided that a technician is on site and knows that you are there."'],
  ['Rasha', 'Is one?'],
  ['Lubna', 'A technician is on site until eight every evening and has been for as long as I have been there. The condition has been available the whole time. I have been going in alone for two years and the thing that would have made it allowed was telling a man thirty feet away that I was in the building.'],
  ['Mazen', 'Two years.'],
  ['Lubna', 'Two years, and the condition costs eleven seconds. He is in the room with the lathe and I walk past the door.'],
  ['Ms Huda', 'Say the same thing with _unless_.'],
  ['Lubna', '"You may not use the workshop after six unless a technician is on site and knows you are there." It is the same rule and it feels completely different.'],
  ['Omar', 'Why does it feel different?'],
  ['Ms Huda', 'Because _unless_ means _if not_, and it puts the refusal first and the way in second. _As long as_ and _provided that_ put the way in first. The rule is identical and the sentence tells you what the writer wanted you to feel. Read any set of conditions and count which way round they are written; you will learn something about the place.'],
  ['Lubna', 'Mine was written with _provided that_. Somebody wanted me to be able to say yes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – setting a condition**',
  table(['you say', 'what it does'], [
    ['_…**as long as** a technician is on site._', 'the way in, first; neutral and usable'],
    ['_…**provided that** a technician is on site._', 'the same, more formal; contracts and letters'],
    ['_**unless** a technician is on site, you may not…_', '_if not_ — the **refusal** first'],
    ['_…**on condition that** it is in writing._', 'the most formal, and slightly legal'],
  ], [2.5, 2.1]),
  '**_unless_ = _if not_, and it already contains the negative.** ⚠ ~~unless he does not ask~~ → _**unless** he asks_ / _**if** he **does not** ask_. This double negative is the commonest error of the cycle.',
  '**All of them take a present tense for a real condition:** _as long as a technician **is** on site_ — not _will be_. ⚠ ~~as long as he will be there~~.',
  '**With an unreal condition they take the past:** _I would go in as long as somebody **knew** I was there._',
  '**The thing to notice in other people\'s writing:** the same rule written with _unless_ and with _provided that_ feels like two different places. One puts the refusal first; one puts the way in first. Count which way round a set of conditions is written.',
  '⚠ _as long as_ has a second, ordinary meaning — _as long as the road_ (length). The sentence tells you which.',
  '**Useful phrases:** the useful part is one clause · the condition has been available the whole time · the condition costs eleven seconds · somebody wanted me to be able to say yes.',
  '**Practise:** Say each one with _as long as_ and then with _unless_.  1 you may use the room after six  2 I will take the extra shift  3 you can have the key  4 the work can be sub-contracted  5 I will send the next eleven dates',
  '**Pronunciation.** 🔊 **Track 8.8** The weight falls inside the **condition**, not on the connective: _as long as a tech**NIC**ian is on site_ · _un**LESS** somebody **KNOWS**_. With _unless_ the word itself takes a stress, which is part of why it sounds harder. Listen to six and mark the stresses.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes the request from the card. B says yes **with a condition**, using _as long as_ or _provided that_. A then says the same rule back with _unless_, and both say which version they would put on a door. Swap cards.'));
out.push(dlg(null, [
  ['A', 'Could I __________?'],
  ['B', 'Yes, as long as __________.'],
  ['A', 'So: I may not __________ unless __________.'],
  ['B', 'Same rule.'],
  ['A', 'Which one goes on the door?'],
  ['B', '__________, because __________.'],
]));
out.push(table(['Card A – the requests', 'Card B – the requests'], [
  ['use a room after six', 'take a tool home for the weekend'],
  ['swap a shift with somebody', 'start an hour late on Thursdays'],
  ['train somebody who is not assigned to you', 'put a notice on the wall'],
  ['see a record that is about you', 'bring a child to work for one morning'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write both versions of each rule. Then: which version did each pair put on the door, and why? The _unless_ version goes on the door where somebody is afraid of being blamed, and the _as long as_ version where somebody wants the thing to happen.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing you asked for in 6.3 and write the **yes with a condition** that you would accept. Then say whether the condition is already available, and how long it has been.'));
out.push(p('**b**  Swap. Then each of you say what the condition would cost you — in seconds, if you can.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna has an answer. It came on Sunday, it is eleven lines, and the useful part is one clause: the department has no objection to her using the workshop after six, provided that a technician is on site and knows that she is there. Rasha asked whether one is, and Lubna said a technician is on site until eight every evening and has been for as long as she has been there — the condition has been available the whole time. She has been going in alone for two years, and the thing that would have made it allowed was telling a man thirty feet away that she was in the building. Two years, and the condition costs eleven seconds: he is in the room with the lathe and she walks past the door. Ms Huda asked her to say the same thing with unless, and she said: you may not use the workshop after six unless a technician is on site and knows you are there — the same rule, and it feels completely different. Ms Huda said that is because unless means if not, so it puts the refusal first and the way in second, while as long as and provided that put the way in first. The rule is identical and the sentence tells you what the writer wanted you to feel — so read any set of conditions and count which way round they are written, and you will learn something about the place. And Lubna said hers was written with provided that: somebody wanted her to be able to say yes._'));
out.push(p('**Listener task:** write the condition somebody could have met the whole time, and what it costs.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Lubna writes back. Answer the questions.'));
out.push(model([
  '**To:** the head of the department of architecture',
  '**Subject:** Your letter of Sunday — accepted, and one thing you should know',
  'Dear Professor,',
  'Thank you. I accept the condition and I will keep it exactly as written: I will not use the workshop after 18.00 unless a technician is on site and knows that I am there. I have spoken to Abu Rami and he has agreed to a note on the board inside the door with my name and the time I came in, which he can see from the lathe.',
  'I would like you to know one thing about the condition, because I think it is useful to you and not only to me.',
  'A technician has been on site until 20.00 every evening since I started in this department. The condition you have set has therefore been available on every one of the evenings on which I was breaking the rule. What stood between me and permission was not a technician, a key, a form or a decision by you. It was one sentence spoken to a man thirty feet from the bench, and I did not say it for two years.',
  'I am not telling you that to be forgiven. I am telling you because there are four students in the year below me who use that workshop in the evenings with borrowed keys. I know because I have seen them and they have seen me, and none of us has ever mentioned it to the others.',
  'If the condition were printed on the workshop door — _after 18.00: tell the technician_ — I think it would end most of it. Not all of it. Some of them will not ask and I was one of them.',
  'Yours sincerely, Lubna Sweidan',
]));
out.push(item('1', 'How does she record that she is in the building?'));
out.push(item('2', 'What stood between her and permission?'));
out.push(item('3', 'What does she say about the four students, and about the notice?'));
out.push(writers([
  'A letter accepting a condition: **accept it, quoted, in the first line** → **how you will actually keep it, in practical detail** → **the one thing the reader does not know** → **why you are telling them** → **and a suggestion with its limit attached**.',
  'Quote the condition back exactly, and say how you will keep it **mechanically**: a note on a board, a time, a name. A promise with a mechanism in it is a different thing from a promise.',
  'Give the reader something they did not have. _The condition has been available on every evening on which I was breaking the rule_ is information about their own department, and it is why the letter will be read twice.',
  '⚠ Attach the limit to your own suggestion: _I think it would end most of it. Not all of it. Some of them will not ask and I was one of them._ That is 8.3 and 7.6 doing their work in one line.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter accepting a condition (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________ — accepted, and one thing you should know   Dear ______________,   Thank you. I accept the condition and I will keep it exactly as written: I will not ______________ unless ______________. I have spoken to ______________ and ______________.   I would like you to know one thing about the condition.   ______________ has been ______________ since ______________. The condition you have set has therefore been available on ______________. What stood between me and permission was not ______________. It was ______________, and I did not ______________ for ______________.   I am not telling you that to be forgiven. I am telling you because ______________.   If ______________ were ______________, I think it would ______________. Not ______________. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_unless_ with no second negative · _as long as_ / _provided that_ + a present tense',
  'The condition quoted back exactly',
  'A mechanism for keeping it — a board, a note, a name, a time',
  'A suggestion with its limit attached',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what stood between me and permission" sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) accepting a condition — real or the one you expect. Keep the condition exactly, give the mechanism, give the reader the thing they do not know, and make one suggestion with its limit on it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person who set the condition**. ★ _The thing I did not know about my own department._  ✓ _One promise with no mechanism in it._  ? _How long has the condition been available?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the conditions in this room were already available?** Count. Then: for how long? The spans run from months to years, and nobody in the room has ever been told no.'));
out.push(hw('Write the condition you would accept, in one sentence with _as long as_, and then write it again with _unless_ (50+ words). Say which one you would put on a door, and why.'));

// ======================= 8.5 =======================
out.push(pb());
out.push(h2('8.5  You might want to'));
out.push(p('**Function:** softening advice to somebody senior   ·   **Grammar:** _you might want to_ · _it might be worth_   ·   **Pronunciation:** the flat tone that keeps advice advice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives one piece of advice for a manager. Round the room, each student makes it **less direct** than the last, and the class stops when it stops meaning anything. It usually takes five.'));
out.push(board('It might be worth asking the other repairers.', 'you might want to · it might be worth · have you thought about'));
out.push(p('**b**  Order from most to least direct. **1** _You should ask them._  **2** _It might be worth asking them._  **3** _Ask them._  **4** _Have you thought about asking them?_  **5** _You might want to ask them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Fares advising?   **A** Mazen   **B** the training manager who has given him one day   **C** his own line manager'));
out.push(p('**b**  Listen again. **1** What is the advice?   **2** What does Ms Huda say the difference is between softening and hiding?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.9  One day in June, and one sentence before it', [
  ['Fares', 'I have one day in June, teaching their new representatives, and I have seen the plan for it. There is something wrong with it and I have known the man for one telephone call.'],
  ['Lubna', 'What is wrong with it?'],
  ['Fares', 'Six hours, twelve people, in a hotel room in Mezzeh, and no pharmacies. They are going to teach people how to talk to pharmacists in a room with no pharmacists in it. Everything I know I learnt in forty minutes before shifts, standing outside.'],
  ['Rasha', 'So tell him.'],
  ['Fares', 'He has given me one day and I have been refused twice by his own company. If I say "this plan is wrong" I am a man who was turned down telling a training manager how to train.'],
  ['Ms Huda', 'Then do not say that. Say the thing you actually want and leave the judgement out. What do you want?'],
  ['Fares', 'Two of the six hours in a pharmacy. Any pharmacy. Walking in, with the twelve of them, and me doing one visit while they watch.'],
  ['Ms Huda', 'Then: "It might be worth doing two of the six hours in a pharmacy — I would do one visit and let them watch." That is the whole of it.'],
  ['Fares', 'That is softer than what I was going to say.'],
  ['Ms Huda', 'It is softer and it is also **more specific**, and those two usually go together, which nobody expects. Soft and vague is hiding. Soft and exact is advice. _It might be worth_ removes you from the sentence and leaves the suggestion standing there on its own, where he can pick it up without agreeing that you were right.'],
  ['Mazen', 'And if he says no?'],
  ['Fares', 'Then I do six hours in a hotel room, well, and I say nothing about it. One day in June is not the hill.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Softening advice upwards**',
  table(['you say', 'where it belongs'], [
    ['_**You might want to** ask the other repairers._', 'a manager, a stranger; neutral and very usable'],
    ['_**It might be worth** doing two hours in a pharmacy._', 'the softest and the most professional: **you** disappear'],
    ['_**Have you thought about** asking them?_', 'a question; useful when you suspect they have'],
    ['_**One thing that has worked for me is**…_', 'experience instead of advice; hard to refuse'],
  ], [2.5, 2.1]),
  '**_it might be worth_ + _-ing_.** ⚠ ~~it might be worth to do~~ → _it might be worth **doing**_. ⚠ ~~you might want do~~ → _you might want **to** do_.',
  '**Soft and exact, never soft and vague.** _It might be worth looking at the training_ is hiding. _It might be worth doing two of the six hours in a pharmacy_ is advice. The softening is in the frame; the content must get **more** specific, not less.',
  '**Why it works upwards:** _it might be worth_ takes **you** out of the sentence. The suggestion stands on its own and the other person can pick it up without conceding that you were right about anything — which is most of what is at stake when you advise somebody senior.',
  '⚠ Leave the judgement out altogether. _This plan is wrong, so it might be worth…_ undoes the whole thing. Say what you want and nothing about what they have done.',
  '⚠ ~~I would suggest to do~~ → _I would suggest **doing**_ / _I would suggest **that you do**_.',
  '**Useful phrases:** I have known the man for one telephone call · say the thing you actually want and leave the judgement out · soft and vague is hiding, soft and exact is advice · one day in June is not the hill.',
  '**Practise:** Soften each one upwards, and make it **more** specific as you do.  1 _The training is in the wrong place._  2 _Your form is too small._  3 _Nobody reads that notice._  4 _You are asking the wrong people._  5 _That rule cannot be kept._',
  '**Pronunciation.** 🔊 **Track 8.10** Soft advice is said **flat and fairly fast**, with no emphasis anywhere: _it might be worth doing two of the six hours in a pharmacy._ Stress any word in it and it becomes a criticism. Listen to six pairs and say which version you would want to receive.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the criticism from the card. B turns it into soft, **exact** advice — and must make the content more specific than the criticism was. A then says whether any judgement is left in it. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It might be worth __________.'],
  ['A', 'Is there any judgement left in that?'],
  ['B', '__________.'],
  ['A', 'And if the answer is no?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the criticisms', 'Card B – the criticisms'], [
  ['The training is in the wrong place.', 'That form is too small to be any use.'],
  ['Nobody reads that notice.', 'You are asking the wrong people.'],
  ['That rule cannot be kept where the sheet is.', 'The exhibition rules stop half the year entering.'],
  ['The light above that door is useless.', 'The register tells you nothing.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the soft version and mark whether it is **more** specific than the criticism. If it is less specific, the pair has hidden rather than softened — and that happens about half the time on a first attempt.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give one piece of advice to the most senior person you could realistically speak to at work. Soft frame, exact content, no judgement. Then say what you would do if the answer were no.'));
out.push(p('**b**  Swap. Then each of you say whether you are actually going to say it, and to whom.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fares has one day in June teaching new representatives, and he has seen the plan: six hours, twelve people, in a hotel room in Mezzeh, and no pharmacies. They are going to teach people how to talk to pharmacists in a room with no pharmacists in it, and everything he knows he learnt in forty minutes before shifts, standing outside. Rasha said so tell him, and he said the man has given him one day and he has been refused twice by that company — if he says "this plan is wrong", he is a man who was turned down telling a training manager how to train. Ms Huda said then do not say that: say the thing you actually want and leave the judgement out. What he wants is two of the six hours in a pharmacy, any pharmacy, walking in with the twelve of them and doing one visit while they watch. So the sentence is: it might be worth doing two of the six hours in a pharmacy — I would do one visit and let them watch. Fares said that is softer than what he was going to say, and Ms Huda said it is softer and also more specific, and those two usually go together, which nobody expects: soft and vague is hiding, and soft and exact is advice. "It might be worth" removes you from the sentence and leaves the suggestion standing on its own, where he can pick it up without agreeing that you were right. And if he says no, Fares says he does six hours in a hotel room, well, and says nothing — one day in June is not the hill._'));
out.push(p('**Listener task:** write the soft, exact sentence somebody produced, and what they left out.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Fares sends. Answer the questions.'));
out.push(model([
  '**To:** the training manager, Levant Medical Supplies',
  '**Subject:** 11 June — one suggestion about the shape of the day',
  'Dear Madam,',
  'Thank you for the plan. I will be there at eight and I have read all of it.',
  'One suggestion, and it is about where rather than what. It might be worth doing two of the six hours in a pharmacy instead of in the room. I would do one ordinary visit — a shop that already buys, nothing difficult — with the twelve of them standing where they can hear it, and then we would walk back and I would answer whatever they ask for forty minutes.',
  'The reason I suggest it is not that the room is wrong. It is that the two things I cannot teach sitting down are what to do with your hands while somebody reads a label, and what to say in the four seconds after a pharmacist says "not today". Both of those are about standing in a doorway and I have never found a way to describe either of them indoors.',
  'If that is difficult — and I can see three reasons it might be — the day works as it stands and I will do it as planned. I am not asking for an answer before June; tell me on the morning if it is easier.',
  'One other thing, for your information rather than for action: of the six representatives I have trained, four are still in the job, and all four of them learnt the pharmacy part in a pharmacy, because there was nowhere else to do it. That is not evidence of anything. It is just the only comparison I have.',
  'Yours faithfully, Fares Kayyali',
]));
out.push(item('1', 'What is the suggestion, and what is it about?'));
out.push(item('2', 'What two things does he say he cannot teach sitting down?'));
out.push(item('3', 'How does he describe the four representatives at the end?'));
out.push(writers([
  'A message of advice upwards: **thank them and show you have read it** → **one suggestion, with _it might be worth_ and exact content** → **the reason, which must not be a criticism** → **a way out for them** → **and one piece of evidence offered as information, not as proof**.',
  'Say what the suggestion is **about** before you make it: _one suggestion, and it is about where rather than what_. The reader relaxes and reads the rest.',
  'Make the reason about the **thing**, never about their plan: _it is that the two things I cannot teach sitting down are…_ The moment the reason becomes about the room being wrong, the softening collapses.',
  '⚠ Offer the evidence and then disown it: _that is not evidence of anything. It is just the only comparison I have._ A fact handed over without a claim attached is the most persuasive thing in a letter upwards.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message of advice to somebody senior (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________ — one suggestion about ______________   Dear ______________,   Thank you for ______________. I have read all of it.   One suggestion, and it is about ______________ rather than ______________. It might be worth ______________ instead of ______________. I would ______________, and then ______________.   The reason I suggest it is not that ______________. It is that ______________.   If that is difficult — and I can see ______________ reasons it might be — ______________ works as it stands and I will ______________.   One other thing, for your information rather than for action: ______________. That is not evidence of anything. It is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_it might be worth_ + _-ing_ · _you might want to_ + the bare verb',
  'The content more specific than the criticism it replaces',
  'No judgement about what they have already done',
  'Evidence offered as information, with no claim attached',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "the reason I suggest it is not that…" sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full message (100 words or more) to the most senior person you could realistically write to. Then write underneath the version you would have sent last month, in one sentence.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the senior person**. ★ _The sentence I could act on without admitting anything._  ✓ _One place where a judgement is still in it._  ? _What happens if I say no?_ — and if the message does not say, say so.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the last-month versions, one sentence each.** They are shorter, blunter and all of them contain a judgement. Then one question: which of the two would have been answered? The room knows.'));
out.push(hw('Send one piece of soft, exact advice upwards this week, with no judgement in it and a way out for the reader (50+ words). Write what you sent and what came back.'));

// ======================= 8.6 =======================
out.push(pb());
out.push(h2('8.6  Advice to somebody you do not know'));
out.push(p('**Function:** writing advice to somebody you do not know   ·   **Grammar:** register in advice   ·   **Pronunciation:** reading written advice aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads one question from a stranger. The class answers it three times: as you would answer a friend, a colleague, and somebody you have never met and never will. Then: which of the three is longest, and why is that the wrong answer?'));
out.push(board('Do the small one first. It takes ten minutes and it tells you whether to go on.', 'advice to a stranger: short, ordered, no reassurance'));
out.push(p('**b**  Which belongs in advice to a stranger? **1** _Don\'t worry!_  **2** _Do the small one first._  **3** _You\'ll be fine._  **4** _I had the same problem._  **5** _Here is what I would check, in order._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Jad done for two years?   **A** answered strangers\' questions in English   **B** taught himself to write letters   **C** run a forum'));
out.push(p('**b**  Listen again. **1** What does he say he never writes?   **2** What does Umm Kinan notice about his answers?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.11  Six hundred and forty-one strangers', [
  ['Jad', 'I have written six hundred and forty-one pieces of advice in English to people I will never meet, and I have never once written a letter in English to anybody I know.'],
  ['Ms Huda', 'What do your answers look like?'],
  ['Jad', 'Short. Numbered, usually. "Check three things, in this order." I never write "don\'t worry" and I never write "I hope this helps" and I never say that I had the same problem, even when I did.'],
  ['Umm Kinan', 'Why not? Those are the kind things.'],
  ['Jad', 'Because the person asking is sitting in front of a broken thing at one in the morning. Kindness is answering the question in six lines so they can go to bed. "Don\'t worry" costs them four seconds and gives them nothing, and "I had the same problem" is about me.'],
  ['Umm Kinan', 'That is… not what I expected from the boy in the room.'],
  ['Jad', 'It is the only place I have ever been any good at anything.'],
  ['Ms Huda', 'And what have you noticed about the ones that work?'],
  ['Jad', 'The ones that work give an **order**, say how long each step takes, and say what to do if the first step fails. And they say what I do not know. "If it is not the cable, I have never seen that fault and you should ask somebody else." Nobody has ever been angry with me for writing that. People are angry when you pretend.'],
  ['Umm Kinan', 'You have written six hundred and forty-one of those and you did not know you could write English.'],
  ['Jad', 'I did not know it counted. It is a forum.'],
  ['Ms Huda', 'It is six hundred and forty-one pieces of technical advice, in writing, in a foreign language, to adults who then came back and said whether it worked. There is nothing in this course harder than that, and you have been doing it since you were seventeen.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Advice to somebody you will never meet**',
  table(['do this', 'not this'], [
    ['_Check three things, in this order._', '~~You should look at a few things.~~'],
    ['_That takes about ten minutes._', '~~It should not take long.~~'],
    ['_If it is not the cable, ask somebody else._', '~~It must be the cable.~~'],
    ['_Start with the cheap one._', '~~Don\'t worry, you\'ll be fine.~~'],
  ], [2.3, 2.3]),
  '**Four things make written advice to a stranger work:** an **order**, a **time** for each step, what to do if the first step **fails**, and a plain statement of what you **do not know**.',
  '**Leave yourself out.** _I had the same problem_ is about you. _I hope this helps_ is about you. _Don\'t worry_ asks them to manage a feeling instead of a fault. None of them is unkind, and none of them is any use at one in the morning.',
  '**Say what you do not know, plainly:** _I have never seen that fault and you should ask somebody else._ Nobody is ever angry about this. People are angry when you pretend.',
  '**Register:** neutral, no slang, no exclamation marks, contractions are fine. You are not being formal — you are being **brief**. Formality to a stranger reads as distance; brevity reads as respect.',
  '⚠ ~~I advise you to check~~ is grammatical and reads oddly in English. Use _I would check_ / _check_.  ⚠ ~~It is advised to check~~ → _check_.',
  '**Useful phrases:** check three things, in this order · start with the cheap one · if it is not the cable, I have never seen that fault · people are angry when you pretend.',
  '**Practise:** Write three lines of advice for each, with an order and a time.  1 somebody whose printer is making a noise  2 somebody who has been given a rule they cannot keep  3 somebody who has not been paid  4 somebody who wants to learn English at forty-eight',
  '**Pronunciation.** 🔊 **Track 8.12** Read written advice aloud **slowly, with a full stop you can hear at the end of every step**. _Check the cable. ‖ That takes two minutes. ‖ If it is not the cable, stop._ Listen to one answer read twice, fast and stepped, and say which you could follow.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the stranger\'s question from the card. B gives advice out loud in no more than six lines, with an order, a time, a failure plan, and one thing they do not know. A then says which of the four was missing. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Check __________ first. That takes __________. If it is not __________, __________. I do not know __________.'],
  ['A', 'Which of the four was missing?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the strangers\' questions', 'Card B – the strangers\' questions'], [
  ['My printer has started making a noise on one side.', 'I have been given a rule I cannot keep. What do I do?'],
  ['I have not been paid for two months. Where do I start?', 'I am forty-eight. Is it too late to learn English?'],
  ['My screen separates at one corner. Is it worth mending?', 'I want to apply for something and I have nothing to put.'],
  ['Nobody in my office answers email. What do I do?', 'I have a key I was never given. How do I give it back?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four elements and mark which were there. The one missing is nearly always **what the adviser does not know**, and it is the one that makes a stranger trust the other three.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Answer the question on your partner\'s card out loud as if you were writing it: order, times, failure plan, and what you do not know. Six lines.'));
out.push(p('**b**  Swap. Then each of you say what you left out that you wanted to put in, and why you wanted to put it in.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad said he has written six hundred and forty-one pieces of advice in English to people he will never meet, and has never once written a letter in English to anybody he knows. His answers are short and usually numbered — "check three things, in this order" — and he never writes "don\'t worry", never writes "I hope this helps", and never says he had the same problem, even when he did. Umm Kinan asked why not, because those are the kind things, and he said because the person asking is sitting in front of a broken thing at one in the morning: kindness is answering the question in six lines so they can go to bed. "Don\'t worry" costs them four seconds and gives them nothing, and "I had the same problem" is about him. The ones that work give an order, say how long each step takes, say what to do if the first step fails, and say what he does not know — "if it is not the cable, I have never seen that fault and you should ask somebody else." Nobody has ever been angry with him for writing that, and people are angry when you pretend. Umm Kinan said he has written six hundred and forty-one of those and did not know he could write English, and he said he did not know it counted, because it is a forum. And Ms Huda said it is six hundred and forty-one pieces of technical advice, in writing, in a foreign language, to adults who came back and said whether it worked — and there is nothing in this course harder than that._'));
out.push(p('**Listener task:** write the one thing somebody said they did not know.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read one of Jad\'s answers, and what he writes underneath it. Answer the questions.'));
out.push(model([
  '**ANSWER TO A STRANGER · 2 APRIL** · and a note about it',
  '**The question.** _"Screen separating at the bottom left on a [model]. Bought Feb last year. Worth repairing or not? I am not in a big city."_',
  '**My answer.** Before you pay anybody: look at the lower left corner under a lamp, at an angle. If you can see brush marks in the adhesive, it is an assembly fault and not damage, and that matters because it will come back. That takes about thirty seconds.',
  'If you see the brush marks: the repair itself is cheap — a new clip set and fresh adhesive, under an hour for anybody who does screens. Ask whoever does it to seal the whole lower edge and not only the corner. If they will not, go somewhere else; it will separate again in about a year.',
  'If you do not see brush marks, it is probably a drop and the repair is the same but it will not recur. Mend it.',
  'What I do not know: I do not know whether this model has a batch problem everywhere or only here. I have seen fifteen of them and all fifteen came from two shops in one district of one city, so my fifteen may mean nothing about yours.',
  '**The note underneath.** That answer took me eleven minutes to write and about four of those were on the last paragraph. I nearly left it out, because it makes everything above it smaller. It is the paragraph he wrote back about: he said it was the first time anybody on that site had told him what they were not sure of, and he went and looked under a lamp.',
]));
out.push(item('1', 'How long does the first step take, and what does it tell you?'));
out.push(item('2', 'What does Jad say he does not know?'));
out.push(item('3', 'Which paragraph did the stranger write back about?'));
out.push(writers([
  'Written advice to a stranger: **the one cheap check first, with a time** → **what to do if the check is positive** → **what to do if it is negative** → **what you do not know, with the reason** → **and nothing about yourself anywhere**.',
  'Begin with the **cheapest** step, not the most likely answer. _Before you pay anybody: look at the corner under a lamp. Thirty seconds._ A free first step is what makes advice usable by somebody who has no money and no time.',
  'Write the **two branches**. If you see it, do this; if you do not, do that. Advice with one branch is a guess with instructions attached.',
  '⚠ The last paragraph makes everything above it smaller and it is the paragraph they will write back about. _My fifteen may mean nothing about yours._ Write it, and expect to want to leave it out.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Answer a stranger\'s question in writing (50 words or more).'));
out.push(p('**The question.** _"______________"_   **My answer.** Before you ______________: ______________. If ______________, it is ______________ and not ______________, and that matters because ______________. That takes about ______________.   If ______________: ______________. Ask whoever ______________ to ______________. If they will not, ______________.   If ______________, it is probably ______________ and ______________.   **What I do not know:** I do not know whether ______________. I have seen ______________, so ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'An order, with a time against each step',
  'Two branches — if yes, and if no',
  'A paragraph saying what you do not know, with the reason',
  'Nothing about yourself: no _don\'t worry_, no _I had the same problem_, no _I hope this helps_',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I do not know" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full answer (100 words or more) to a real question in your own field — one you have actually been asked, by anybody, ever. Then write underneath what you wanted to put in and left out.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s answer as **the stranger at one in the morning**. ★ _The step I can do for nothing, now._  ✓ _One sentence that is about you._  ? _What happens if the first step tells me nothing?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of you have given written advice to a stranger before this evening?** Count. Then ask Jad\'s question of the room: did it count? Most people will say they did not think of it as writing English, and most of them were wrong in the same way he was.'));
out.push(hw('Answer one real question for one person you do not know — a neighbour, a customer, somebody on a forum — in writing, in English if you can (50+ words). Include what you do not know.'));

// ======================= 8.7 =======================
out.push(pb());
out.push(h2('8.7  Review & Mediate: Two options, and what I would do'));
out.push(p('**Function:** explaining two options and advising   ·   **Recycling:** Units 1–8   ·   **Exam practice:** B1 Preliminary Reading Part 2, Writing Part 2, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** If I was you, I will wait.  **2** If they would change the rota, the errors would move.  **3** It might be worth to ask them.  **4** Unless he does not ask, nothing will happen.  **5** As long as he will be there, I will go in.  **6** If I had more time, I will finish it.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two options Fares has written out.'));
out.push(box(null, [
  '**TWO OPTIONS** · F. Kayyali · written on one sheet, in two columns',
  '**OPTION A — stay where I am and build it inside.** Eleven years in, 41 accounts, 6 trained. Ask my own company, in writing, to make the training part of my job: two days a month, same pay, with a written note that I may do it. Cost: nothing, if they say yes. Risk: they have no training post, they have never had one, and the man who would have to agree it is the man who does not answer email. I would be asking the same building that has not noticed eleven years of this.',
  '**OPTION B — take the outside work and stay a representative.** One day in June, paid, for Levant. If it goes well, they have said there may be a day a month. Cost: it is somebody else\'s company, the days are not promised in writing, and I would be training people to sell against my own employer\'s products in the same governorates. Risk: if my own company found out from somebody other than me, I would deserve what happened.',
  '**WHAT IS TRUE OF BOTH.** Neither is a job. Neither has a contract. Both of them depend on me telling one person something I have not told them for eleven years.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lubna and Rasha explain Fares\' two options to Mazen, who has to advise. What does Mazen say they have both missed?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.13  What both of them have missed', [
  ['Lubna', 'Option A is safe and will probably be refused. Option B is real and comes with a problem he cannot solve quietly.'],
  ['Rasha', 'If I were him I would take B. One day in June exists. Option A is a letter to a man who does not read letters.'],
  ['Lubna', 'If I were him I would do A first, because if A is refused in writing then B is not a secret any more — it is a thing he asked for and was refused.'],
  ['Mazen', 'You have both missed the line at the bottom of his own sheet.'],
  ['Rasha', '"Both of them depend on me telling one person something I have not told them for eleven years."'],
  ['Mazen', 'That is not a line about the options. That is the decision, and he has written it at the bottom in small letters, the way people do. There is no A and no B until he has told somebody at his own company that he has been training representatives for eleven years. Until then, A is a letter he cannot write honestly and B is a thing he is hiding.'],
  ['Lubna', 'So your advice is neither.'],
  ['Mazen', 'My advice is that there is one step and it is not on the sheet. If I were him I would tell the one person at that company who would listen — not the line manager, the woman who runs the Suwayda office, because she has sent him two of the six — and I would tell her this week, before June, and I would not ask her for anything at all.'],
  ['Rasha', 'Why not ask?'],
  ['Mazen', 'Because then it is information and not a request, and she can do something with it. If he asks, she has to decide something, and she will decide it in a corridor in four seconds. I have been writing letters about telephones for seven months and the only one that moved anything was the one where I asked for nothing.'],
]));
out.push(sp());
out.push(box('Language box – explaining two options and advising', [
  'Lay out each option with the **same four headings**: what it is · what it costs · what the risk is · and what it depends on. Two options described in two different shapes cannot be compared.',
  'Find the line that is true of **both**. It is nearly always written somewhere and nearly always small, and nine times out of ten it is the actual decision.',
  'Advise with _if I were you_ or _if I were him_ — and name the thing about their situation you had to think about, exactly as in 8.1.',
  'Give the result the honest modal: _it **might** be refused_, not _it **would** be refused_. You are advising, not predicting.',
  'And the move worth stealing: sometimes the advice is **neither option, and one step that is not on the sheet**. Say so plainly, and say what the step is and on what day.',
  '⚠ Do not advise both options. A mediation that ends _it depends_ has done the first half of the task; the second half is saying what you would do.',
  '**Useful phrases:** you have both missed the line at the bottom of his own sheet · he has written it at the bottom in small letters, the way people do · then it is information and not a request · the only one that moved anything was the one where I asked for nothing.',
  '**Pronunciation.** 🔊 **Track 8.14** Explaining two options aloud: give each option the **same rhythm**, pause between them, and drop your voice for the advice at the end. _Option A ‖ … Option B ‖ … If I were him ↘ I would do neither._ Listen, then do the same with two options of your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the pairs of options below and does **not** show it. A explains both under the four headings. B and C must each find the thing that is true of both, and then advise with _if I were you_, naming one thing about A\'s situation. Change roles with the other pair.'));
out.push(table(['Pair A – a nurse', 'Pair B – a teacher'], [
  ['**A** Ask for a three-night trial for herself only.', '**A** Move chapter 7 in her own scheme and tell nobody.'],
  ['**B** Put the whole ward\'s case and ask for the rota to change.', '**B** Take it to the department and ask them all to move it.'],
  ['_A: granted easily, proves little, one nurse._', '_A: done by Monday, helps 31 children, invisible._'],
  ['_B: hard to grant, proves a lot, needs the other nurse\'s record._', '_B: slow, may be refused, helps 124 children if it works._'],
  ['_True of both: she has never spoken to the other night nurse._', '_True of both: she has never shown anybody her mark analysis._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the thing that is true of both, and the advice. In both pairs the thing that is true of both is **a conversation that has never happened**, and in both pairs that conversation is the first step and is not on the sheet.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write out two real options of your own — at work, at home, about money, about study — under the four headings: what it is · what it costs · what the risk is · what it depends on. Explain them to your partner **without showing the sheet**. They must find the thing true of both and then advise with _if I were you_, naming one thing about your situation. Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner\'s options were and what you advised:  _Rasha\'s two options were a three-night trial for herself, which would be granted easily and prove very little, and the whole ward\'s case, which is hard to grant and would prove a great deal. What is true of both is on her own sheet in one line: she has never spoken to the other night nurse, who works a different pattern and whose record she has never seen. So there is no A and no B yet, because option B needs that nurse and option A looks like somebody arranging her own rota. If I were her I would do the thing that is not on the sheet, which is to ask that nurse one question on the next handover — not for her record, just whether her errors are on fourth and fifth nights too — and I would ask it without asking her for anything, because then it is information and not a request. And the thing about Rasha\'s situation I had to think about is that she will be on that ward with that woman for the next ten years whatever happens, which is not true of any letter she sends upwards. So I decided to do the same thing myself: to ask one question of the man who has the other half of my own evidence, and to ask for nothing._'));
out.push(p('**Listener task:** what was true of both options, and what was the step that was not on the sheet?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 2)', 7));
out.push(p('The people below all want to learn something in the evenings. Read the descriptions of eight courses. Decide which course would be most suitable for each person. There are **three** courses you do not need.'));
out.push(model([
  '**1  Umm Kinan** is forty-eight and has taught mathematics for twenty-four years. She wants to learn to use one particular machine in her own classroom, and she has had two training afternoons in a hall with nine other teachers and learnt nothing. She needs one person, one machine, and a door that shuts.',
  '**2  Omar** is at university in the day and works three evenings a week. He wants to improve his written English for applications, and he can only come on a Tuesday. He is not interested in speaking practice.',
  '**3  Mazen** repairs telephones six days a week and closes at seven. He wants to learn enough about accounts to know what his own business earns, having never written a figure down in nine years. He cannot come before half past seven.',
  '**4  Rasha** works nights and sleeps in the afternoon. She wants to learn to put a case in writing — not general English, but reports, requests and evidence. Daytime only, and not Mondays.',
  '**5  Jad** is nineteen and reads technical English all day. He has never spoken it out loud to a stranger and he will not join a large class, because the whole problem is being looked at.',
]));
[
  '**A  BOOKKEEPING FOR SMALL TRADERS** · Tuesdays and Thursdays, 19.45–21.15 · Al-Yasmin Centre. For people who run a counter or a shop and keep no books at all. Bring your own ledger or a notebook. No accounting knowledge needed.',
  '**B  ENGLISH CONVERSATION CLUB** · Mondays 18.00 · twenty to thirty people, in a hall. All levels. Come and talk.',
  '**C  WRITING AT WORK** · Wednesdays and Saturdays, 10.00–12.00 · Al-Yasmin Centre. Reports, requests, complaints, evidence. For people who have to write something that somebody will act on. Not a general English course.',
  '**D  ONE-TO-ONE TECHNOLOGY HELP FOR TEACHERS** · by arrangement, in your own school, in your own room. Forty minutes a session with one technician. Whiteboards, projectors, tablets. Minimum one session.',
  '**E  WRITTEN ENGLISH FOR APPLICATIONS** · Tuesdays 18.30–20.00 · letters, forms, personal statements, CVs. No spoken work. Fifteen places.',
  '**F  INTENSIVE SPOKEN ENGLISH** · daily, 09.00–13.00, four weeks · for students who can give their mornings to it.',
  '**G  SPEAKING IN PAIRS** · Thursdays 18.00–19.00 · four students only, two pairs, in a small room. For people who read English well and have never spoken it. The teacher does not correct in front of the others.',
  '**H  MATHEMATICS FOR ADULTS** · Sundays 17.00 · GCSE-level mathematics for people returning to study.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining two options to somebody and advising them (50 words or more).'));
out.push(p('There are two options and I will give them the same way.   **Option A** is ______________. It costs ______________. The risk is ______________. It depends on ______________.   **Option B** is ______________. It costs ______________. The risk is ______________. It depends on ______________.   **What is true of both:** ______________.   **If I were you** I would ______________, because ______________ — and the thing I had to think about is ______________. It might ______________; I do not think it would ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both options under the same four headings',
  'The thing that is true of both, named',
  'Advice with _if I were you_ and one thing about their situation',
  'The honest modal — _might_, not _would_',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these. Write **100 words or more**.',
  '**Question 1 — an article.** You see this notice in an English-language magazine.',
  '_"**The advice I didn\'t take.** Tell us about advice somebody gave you that you did not take — and what you think now. Was the advice wrong, or was the way it was given wrong? We will print the best articles."_',
  'Write your **article**.',
  '**Question 2 — a story.** Your English teacher has asked you to write a story. It must begin with this sentence:',
  '_"If I were you, she said, and then she stopped, because she realised she had never once imagined being me."_',
  'Write your **story**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  If I ___ you, I would wait.   a) was   b) were   c) am',
  '2  If they changed the rota, the errors ___ .   a) will move   b) would move   c) would moved',
  '3  If they ___ the rota, the errors would move.   a) would change   b) changed   c) will change',
  '4  It might be worth ___ them.   a) to ask   b) asking   c) ask',
  '5  You might want ___ the other repairers.   a) to ask   b) asking   c) ask',
  '6  ___ a technician is on site, you may use the workshop.   a) Unless   b) As long as   c) Except',
  '7  You may not go in ___ somebody knows you are there.   a) unless   b) as long as   c) provided',
  '8  I have the evidence for "might", not for ___ .   a) could   b) would   c) can',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 4 style – interview).** 🔊 **Track 8.15** You will hear an interview with a young man who answers technical questions online. For each question choose **A**, **B** or **C**.'));
[
  '**1**  How many answers has he written?   **A** about a hundred   **B** six hundred and forty-one   **C** he has never counted',
  '**2**  What does he never write?   **A** numbered steps   **B** what he does not know   **C** "don\'t worry"',
  '**3**  Why not?   **A** it is not kind   **B** it gives the person nothing   **C** it is bad English',
  '**4**  What do the answers that work have in common?   **A** they are long   **B** they give an order and a time for each step   **C** they are friendly',
  '**5**  How do people react when he says he does not know something?   **A** they are angry   **B** they stop asking him   **C** they are not angry at all',
  '**6**  Why did he not think it counted?   **A** it was in English   **B** it was only a forum   **C** nobody paid him',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(dlg('Track 8.15  Audio script (read after the check)', [
  ['Interviewer', 'How many of these have you written?'],
  ['Jad', 'Six hundred and forty-one. It is on the site; anybody can count them.'],
  ['Interviewer', 'And what do they look like?'],
  ['Jad', 'Short. Numbered, usually. Check three things, in this order. I never write "don\'t worry" and I never write "I hope this helps".'],
  ['Interviewer', 'Why not? They are kind things to say.'],
  ['Jad', 'Because the person asking is sitting in front of a broken thing at one in the morning. "Don\'t worry" costs them four seconds of reading and gives them nothing at all. Kindness is answering the question in six lines so they can go to bed.'],
  ['Interviewer', 'What do the good ones have in common?'],
  ['Jad', 'They give an order, and they say how long each step takes. Two minutes for this, half an hour for that. And they say what to do if the first step fails.'],
  ['Interviewer', 'You also say when you do not know something.'],
  ['Jad', 'Always. "If it is not the cable, I have never seen that fault and you should ask somebody else." Nobody has ever once been angry with me for writing that. People are angry when you pretend.'],
  ['Interviewer', 'Did you think of it as writing English?'],
  ['Jad', 'No. I did not think it counted, because it is a forum. I have written six hundred and forty-one pieces of advice in English and I would have told you last year that I cannot write English.'],
]));
out.push(p('**C  Writing.** Write out two real options and advise (100+ words): both under the same four headings — what it is, what it costs, what the risk is, what it depends on — then the thing that is true of both, and what you would do, with the honest modal.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 8)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ give advice with _if I were you, I\'d_ — and name what I had to imagine to give it',
  '☐ make a second conditional: _if_ + past simple, _would_ + verb, and no _would_ in the _if_ half',
  '☐ tell the difference between a past I cannot reach and a present I am treating as a past',
  '☐ choose between _would_, _might_ and _could_ to match my evidence',
  '☐ set a condition with _as long as_ or _provided that_, and say the same thing with _unless_',
  '☐ soften advice upwards and make it **more** specific as I do',
  '☐ write advice to a stranger: an order, a time, a failure plan, and what I do not know',
  '☐ explain two options under the same headings and say what I would do',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 9 – DEDUCTION AND DOUBT', [
  'Unit 8 was about what **would** happen. Unit 9 is about what **must**, **might** and **can\'t** be true: _he must have been waiting · it might be a batch fault · that can\'t be the reason._',
  'And 9.4 teaches the **B1 Preliminary Speaking Part 2** long turn — describing a photograph and speculating about it — which has not appeared in this book and is worth ten marks in the real examination.',
  'Before the next lesson: find one photograph, in a newspaper, on a wall, in a drawer or on your telephone, of a place or a group of people you do not know. Bring it, or bring a description of it. Unit 9 is built on photographs nobody in the room can explain.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 8 · Student\'s Book');
