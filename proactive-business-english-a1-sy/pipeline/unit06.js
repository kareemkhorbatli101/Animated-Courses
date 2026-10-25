// Proactive Business English A1 · Syria Edition · Book 1 · Unit 6 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'telephone · to ring · call · caller · good morning · hello · to wait · one moment · to hold · message · message slip · to pass on · lunch break · upstairs · not here · to spell out · to read back · telephone number · extension · to call back · goodbye · desk';
const AHEAD_AT_A2 = 'lunch break · extension · desk';

out.push(h1('Unit 6  The Telephone You Cannot Answer'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**6.1**  answer the telephone',
  '**6.2**  ask who is calling, and write a name you cannot spell',
  '**6.3**  say wait — and not lose the call',
  '**6.4**  say somebody is not here',
  '**6.5**  take a number and read it back',
  '**6.6**  say you will pass the message on',
  '**6.7**  Review: the message slip — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The telephone is the hardest English there is', [
  '**You cannot see the face. You cannot see the paper. You cannot point.** ⚠ **And the caller does not know that you are learning.**',
  '⚠ **So this unit gives you six fixed sentences and nothing else.** **Six sentences, said exactly the same way every time.** **A man with six sentences can answer any telephone in Syria. A man with a hundred words and no sentences cannot answer one.**',
], C.lyellow, C.orange));

// ======================= CYCLE 6.1 =======================
out.push(pb());
out.push(h2('6.1  Sham Trading, good morning'));
out.push(p('**You can:** answer the telephone   ·   **Grammar:** the fixed phrase   ·   **Sound:** the company name, slowly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you answer the telephone at work now? **Say it** in Arabic. Your teacher writes the English.'));
out.push(p('**b**  Say your company name slowly, three times. Your partner writes it. **Check it.**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ammar say first?   **A** hello   **B** the company name   **C** his own name'));
out.push(p('**b**  Listen again.   **1** What three things are in his answer?   **2** Why does Nour say _slowly_?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 6.1  Three things, every time', [
  ['Nour', 'Ammar. The store telephone. You answer it this week.'],
  ['Ammar', 'Me? I cannot talk on the telephone.'],
  ['Nour', 'Three things. Say the company. Say good morning. Then stop and listen.'],
  ['Ammar', 'Sham Trading, good morning.'],
  ['Nour', 'Slowly. Sham Trading is two words and the caller has never heard them.'],
  ['Ammar', 'Sham… Trading. Good morning.'],
  ['Nour', 'Better. After twelve o\'clock say good afternoon.'],
  ['Ammar', 'And if I do not understand?'],
  ['Nour', 'Sorry? Again, please. The same words as Unit one. They still work.'],
  ['Ammar', 'Sham Trading, good morning. Then stop and listen.'],
  ['Nour', 'Then stop and listen. That is the hard part.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Answering: three things, in this order**',
  table(['', 'What you say', 'Why'], [
    ['**1**', '**the company name**', 'the caller knows he has the right place'],
    ['**2**', '**good morning / good afternoon**', 'it gives him a second to start'],
    ['**3**', '**nothing — you stop and listen**', '⚠ **the caller tells you what he wants**'],
  ], [0.5, 2.4, 3]),
  '⚠ **Say it SLOWLY.** **Your company name is two or three words you say forty times a day and the caller has never heard them once.** **Slowly is not polite. It is useful.**',
  '⚠ **_good morning_ before twelve · _good afternoon_ after twelve.** **If you are not sure, say _good morning_. Nobody has ever complained.**',
  '⚠ **Then STOP.** **The hardest part of answering a telephone in a language you are learning is not talking.** **The caller will tell you what he wants if you give him two seconds of silence.**',
  '**Practise:** Write the answer.',
  '1 It is 9.00. You answer: ______________.   2 It is 2.00. You answer: ______________.   3 You did not understand. You say: ______________.',
  '**Useful words:**  Sham Trading, good morning.  ·  good afternoon  ·  Sorry?  ·  Again, please.  ·  Then stop and listen.',
  '**Sound — the company name, slowly.** 🔊 **Track 6.2** Listen. _Sham… Trading. Good morning._ **A small gap between the two words of the name.** **Say your own company name with a gap in it. Four times.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back** — you cannot see each other, like a real telephone. Then change places.'));
out.push(dlg(null, [
  ['A', '_(ring ring)_'],
  ['B', '__________, good __________.'],
  ['A', 'Is that __________?'],
  ['B', 'Yes. __________, good __________.'],
  ['A', 'Sorry, I did not hear the name.'],
  ['B', '__________. __________ __________. _(slowly)_'],
]));
out.push(table(['Card 1', 'Card 2'], [['Sham Trading · morning · 9.00', 'Barada Stores · afternoon · 2.30']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **back to back, books closed**.'));
out.push(p('**Listener task:** write the company name. **If you could not hear it, that is the answer** — say so.'));
out.push(PHRASE_CARD(['[Company], good morning.', 'good afternoon', 'Sorry?', 'Again, please.', 'Then stop and listen.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Answer the telephone for your own work. Say it four times. Your partner writes what they heard. **Write it.**'));
out.push(table(['Time of day', 'What I say', 'What my partner heard'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2.2, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your answer — **once, slowly**. Then: _After twelve o\'clock I say ______._'));
out.push(p('**Listener task:** could you hear every company name? Count the ones you could not.'));
out.push(p('**Board clinic:** your teacher says four company names fast. The class writes them. Nobody gets them all. **That is the lesson.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card taped to the store telephone. Then answer.'));
out.push(box(null, [
  '**THE STORE TELEPHONE — SAY THIS**',
  '**1** _Sham Trading, good morning._  ⚠ **SLOWLY. After 12.00: good afternoon.**',
  '**2** Then **stop and listen**.',
  '**3** Not sure? _Sorry? Again, please._',
  '**4** Need a name? _Your name, please._',
  '**5** Need to write? _One moment, please._',
  '⚠ **These five lines answer every call. Do not invent a sixth. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do you say after twelve o\'clock?'));
out.push(item('2', 'What is number 2?'));
out.push(item('3', 'How many lines are on the card?'));
out.push(box('Writer\'s box', [
  '**A telephone card has numbered lines and each line is a sentence you SAY, word for word.**',
  '⚠ **Write the words, not the idea.** _Say the company name_ **is an idea.** _Sham Trading, good morning_ **is a line you can read out loud at eight in the morning with a lorry outside.**',
  '⚠ **Put the warning in the line it belongs to**, **not at the bottom.** _SLOWLY_ **next to line 1, where the man reading it will be looking.**',
  '⚠ **And the last line is the rule:** _do not invent a sixth_. **Five sentences you can say beat fifty you are thinking about.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a telephone card for your own work (**15 words or more**).'));
out.push(p('**THE ______________ TELEPHONE — SAY THIS**   **1** _______________________._ ⚠ **______**   **2** Then ______________.   **3** _______________________._   **4** _______________________._   **5** _______________________._   ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Every line is words you SAY, not an idea', ''],
  ['The warning sits next to its own line', ''],
  ['Five lines, numbered', ''],
  ['A line for _I did not understand_', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their line 1 out loud. The class says if they could hear the company name.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the telephone at your work (**20 to 35 words**). Who answers it? What do they say? What goes wrong?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who does not want to answer it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many people are afraid of the telephone at work? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** your own five-line telephone card and tape it to a wall at home (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.2 =======================
out.push(pb());
out.push(h2('6.2  Your name, please'));
out.push(p('**You can:** ask who is calling and write the name   ·   **Grammar:** _Who is it? · Your name, please_   ·   **Sound:** the letters, over a telephone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your surname letter by letter. Your partner writes it. **Check it.** How many letters?'));
out.push(p('**b**  Read the two lines. Which is better on a telephone? _Who are you? · Your name, please._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does Ammar get the name?   **A** yes   **B** no   **C** yes, after three tries'));
out.push(p('**b**  Listen again.   **1** What does he ask the caller to do?   **2** What does he do at the end?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 6.3  Spell it, please', [
  ['Ammar', 'Sham Trading, good morning.'],
  ['Caller', 'Good morning. Is Mr Khalil there?'],
  ['Ammar', 'Your name, please.'],
  ['Caller', 'Ghassan Mouallem.'],
  ['Ammar', 'Sorry? Again, please.'],
  ['Caller', 'Mouallem.'],
  ['Ammar', 'Can you spell it, please?'],
  ['Caller', 'M, O, U, A, L, L, E, M.'],
  ['Ammar', 'M, O, U, A, L, L, E, M. Eight letters. Mouallem.'],
  ['Caller', 'That is it.'],
  ['Ammar', 'Thank you. One moment, please.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Getting a name you have never heard**',
  table(['Step', 'What you say'], [
    ['**1 ask**', '**Your name, please.**'],
    ['**2 you did not catch it**', '**Sorry? Again, please.**'],
    ['**3 still not sure**', '⚠ **Can you spell it, please?**'],
    ['**4 read it back**', '**the letters, then the number of letters, then the name**'],
    ['**5 they confirm**', '_That is it._ → **Thank you.**'],
  ], [1.8, 3.4]),
  '⚠ **_Your name, please_ — not _Who are you?_** **_Who are you?_ is a question you ask a stranger in your house.** **_Your name, please_ is what an office says, and it is three words.**',
  '⚠ **Read the letters back AND say how many.** _Eight letters._ **The number is the check** — **it is the same count as Unit 1.2 and Unit 2, and it catches a dropped letter that reading alone does not.**',
  '**Practise:** Write the line.',
  '1 You want the caller\'s name. ______________.   2 You did not hear it. ______________.   3 You cannot write it. ______________?',
  '**Useful words:**  Your name, please.  ·  Can you spell it, please?  ·  M, O, U…  ·  Eight letters.  ·  That is it.',
  '**Sound — the letters, over a telephone.** 🔊 **Track 6.4** Listen. **On a telephone, group the letters in threes with a gap:** _M, O, U … A, L, L … E, M._ **Eight letters in one breath cannot be written down.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back**. One is the caller with a hard name. Then change places.'));
out.push(dlg(null, [
  ['A', '_(ring ring)_'],
  ['B', '__________, good __________.'],
  ['A', 'Is __________ there?'],
  ['B', 'Your name, please.'],
  ['A', '__________.'],
  ['B', 'Can you spell it, please?'],
]));
out.push(table(['Card 1', 'Card 2'], [['Mouallem · M O U A L L E M · 8 letters', 'Tarabishi · T A R A B I S H I · 9 letters']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **back to back, books closed**.'));
out.push(p('**Listener task:** write the name. Then count the letters. **Does your number match the speaker\'s?**'));
out.push(PHRASE_CARD(['Your name, please.', 'Can you spell it, please?', 'M, O, U…', 'Eight letters.', 'That is it.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four hard names. Your partner says them over a telephone. You write them and count. **Write it.**'));
out.push(table(['The name I heard', 'Letters', '✓ correct?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [3, 1, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My partner said ______. I wrote ______. It was ______ letters. It was right / wrong._'));
out.push(p('**Listener task:** how many names were right first time? **Count them. Then count how many were right after spelling.**'));
out.push(p('**Board clinic:** your teacher says four names once, fast. Then spells them. The class sees the difference.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the names Ammar wrote on Monday. Then answer.'));
out.push(box(null, [
  '**CALLS — MONDAY 16 MARCH**',
  table(['Time', 'Name', 'Letters', 'Spelled?'], [
    ['7.50', 'Mouallem, Ghassan', '8', '✓ yes'],
    ['9.10', 'Saeed, Fadi', '5', '— no, I know him'],
    ['10.30', 'Tarabishi, Fouad', '9', '✓ yes'],
    ['11.05', '_(did not get it)_', '—', '✗ he rang off'],
  ], [0.8, 2.2, 0.8, 1.6]),
  '⚠ **Four calls. Three names. One lost — he rang off before I asked. A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many names did Ammar get?'));
out.push(item('2', 'Which name did he not need to spell?'));
out.push(item('3', 'What happened at 11.05?'));
out.push(box('Writer\'s box', [
  '**A call list has a time, a name, the letter count and whether it was spelled.**',
  '⚠ **Surname first on a list.** _Mouallem, Ghassan._ **It is Unit 1.3 again** — **a list is for finding a name in, and you find it by the surname.**',
  '⚠ **Write the LOST calls too.** _11.05 — did not get it, he rang off._ **A list of three names from four calls is a lie by omission.** **A list that says one got away is honest, and somebody may know who it was.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a call list for one morning at your own work (**15 words or more**).'));
out.push(table(['Time', 'Name _(surname first)_', 'Letters', 'Spelled?'], [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
], [0.8, 2.2, 0.8, 1.6]));
out.push(p('⚠ **______ calls. ______ names. ______ lost.** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Surname first', ''],
  ['A letter count on every name', ''],
  ['The lost calls written down too', ''],
  ['The totals at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their lost line. The class says if anybody could work out who it was.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a name you could not get on the telephone (**20 to 35 words**). What happened? What did you do? Did you find out who it was?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did he ring back?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many lost callers rang back? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six surnames from your work, letter by letter, with the count (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.3 =======================
out.push(pb());
out.push(h2('6.3  One moment, please'));
out.push(p('**You can:** say wait   ·   **Grammar:** _one moment, please_   ·   **Sound:** the short wait'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You need to put the telephone down and find a pen. What do you say? Say it in Arabic, then in English.'));
out.push(p('**b**  Count ten seconds in your head. **That is how long _one moment_ is.** Count twenty. **That is too long.**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long does the caller wait?   **A** ten seconds   **B** two minutes   **C** he rings off'));
out.push(p('**b**  Listen again.   **1** What does Ammar do while the caller waits?   **2** What does he say when he comes back?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 6.5  Still here?', [
  ['Ammar', 'One moment, please.'],
  ['Caller', 'Yes.'],
  ['Ammar', '_(ten seconds — he finds a pen and the slip pad)_  Thank you for waiting. Your name again, please.'],
  ['Caller', 'Mouallem.'],
  ['Ammar', 'Mr Khalil is not here. Can I take a message?'],
  ['Caller', 'How long was that?'],
  ['Ammar', 'Ten seconds. I had no pen.'],
  ['Caller', 'Ten seconds is nothing. Last week somebody left me for four minutes.'],
  ['Ammar', 'Four minutes is not one moment.'],
  ['Caller', 'Four minutes is not one moment. Write that on your wall.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making somebody wait, properly**',
  table(['', 'What you say', 'When'], [
    ['**before**', '**One moment, please.**', 'before you put the telephone down'],
    ['**after**', '**Thank you for waiting.**', '⚠ **every time, even after ten seconds**'],
    ['**if it is long**', '**I am sorry — one more moment.**', 'after about twenty seconds'],
    ['**if it is too long**', '**Can I take your number and call you back?**', 'after about a minute'],
  ], [1.4, 2.6, 2.6]),
  '⚠ **Get the pen BEFORE you answer the telephone.** **The pen and the slip pad live next to it.** **Most of _one moment_ is a man looking for a pen, and that is a thing you can fix once instead of apologising for every day.**',
  '⚠ **_One moment_ is about ten seconds.** **Four minutes is not one moment.** **If it will be longer, say so, or take a number and ring back.**',
  '⚠ **Never put the telephone down without saying anything.** **The caller cannot see you. Silence and a lost call sound exactly the same.**',
  '**Practise:** Write the line.',
  '1 You need to find a pen. ______________.   2 You come back after ten seconds. ______________.   3 It will take three minutes. ______________?',
  '**Useful words:**  One moment, please.  ·  Thank you for waiting.  ·  one more moment  ·  Can I take your number?  ·  call you back',
  '**Sound — the short wait.** 🔊 **Track 6.6** Listen. _One moment, please.↘_ **Flat, quick, no rise.** **Said with a rise it sounds like a question and the caller answers it.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back**. One waits — really waits, counting. Then change places.'));
out.push(dlg(null, [
  ['A', 'One moment, please.'],
  ['B', 'Yes.'],
  ['A', '_(count __________ seconds out loud together)_  Thank you for waiting. __________ again, please.'],
  ['B', '__________.'],
  ['A', '__________ is not here. Can I take a message?'],
]));
out.push(table(['Card 1', 'Card 2'], [['ten · your name · Mr Khalil', 'twenty-five · your number · Mrs Mansour']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **back to back, books closed**. **The class counts the seconds out loud.**'));
out.push(p('**Listener task:** how long was the wait? **And did the speaker say _thank you for waiting_?**'));
out.push(PHRASE_CARD(['One moment, please.', 'Thank you for waiting.', 'one more moment', 'Can I take your number?', 'call you back']));
out.push(stage('4', 'Your turn', 9));
out.push(p('How long do people wait at your work? Think of four times. **Write it.**'));
out.push(table(['Why they waited', 'How long', 'Did anybody tell them?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2.2, 1, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _People wait ______ for ______. Nobody tells them / Somebody says ______._'));
out.push(p('**Listener task:** what is the longest wait in this class? **Say the number.**'));
out.push(p('**Board clinic:** your teacher puts the telephone down for thirty seconds, in silence. The class says how it felt. **Then do it again with _one more moment_ at twenty seconds.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second card on the wall. Then answer.'));
out.push(box(null, [
  '**WAITING — WHAT TO SAY AND WHEN**',
  '**0 seconds** — _One moment, please._ ⚠ **Before you put it down. Always.**',
  '**10 seconds** — _Thank you for waiting._',
  '**20 seconds** — _I am sorry — one more moment._',
  '**60 seconds** — _Can I take your number and call you back?_',
  '⚠ **The pen and the slip pad live NEXT TO THE TELEPHONE. Most waiting is a man looking for a pen.**',
  '⚠ **Four minutes is not one moment. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do you say at twenty seconds?'));
out.push(item('2', 'Where do the pen and the pad live?'));
out.push(item('3', 'At sixty seconds, what do you ask for?'));
out.push(box('Writer\'s box', [
  '**A waiting card is a list with TIMES down the left.** **Not steps — times.**',
  '⚠ **A time tells the reader when to say the line.** **_Then say sorry_ does not.** **At twenty seconds a man who has a card with _20 seconds_ on it looks at his watch; a man with _after a while_ on his card says nothing and loses the call.**',
  '⚠ **Put the FIX on the card, not just the words.** _The pen lives next to the telephone._ **A card that only gives you apologies is a card for a problem nobody is solving.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a waiting card for your own work (**15 words or more**).'));
out.push(p('**WAITING — ______________**   **0 seconds** — _______________________._   **______ seconds** — _______________________._   **______ seconds** — _______________________._   **______ seconds** — _______________________._   ⚠ **The fix:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Times down the left, not steps', ''],
  ['A line for 0 seconds — before you put it down', ''],
  ['A line that takes a number and rings back', ''],
  ['A fix, not only apologies', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their fix. The class says if it would stop the waiting.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about waiting at your work (**20 to 35 words**). How long do people wait? Why? What would stop it?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Has anybody ever rung off?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many callers have rung off waiting? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** where your pen and your paper will live from tomorrow (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.4 =======================
out.push(pb());
out.push(h2('6.4  He is not here'));
out.push(p('**You can:** say somebody is not here   ·   **Grammar:** _he is not here · she is at lunch_   ·   **Sound:** the useful extra'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where are the people at your work right now? **Say it:** _He is ______. She is ______._'));
out.push(p('**b**  Read the two lines. Which helps the caller? _He is not here · He is not here. He is back at two._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Mr Khalil?   **A** at lunch   **B** at the gate   **C** in Homs until Thursday'));
out.push(p('**b**  Listen again.   **1** What two things does Ammar add?   **2** What does he NOT say?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 6.7  He is back on Thursday', [
  ['Caller', 'Is Mr Khalil there?'],
  ['Ammar', 'He is not here. He is in Homs until Thursday.'],
  ['Caller', 'Thursday. And Mrs Mansour?'],
  ['Ammar', 'She is here. She is at lunch. She is back at two.'],
  ['Caller', 'Two. Good. I ring back at two.'],
  ['Ammar', 'Or I take a message and she has it at two.'],
  ['Caller', 'A message, then.'],
  ['Ammar', 'One moment, please. I have the pad.'],
  ['Caller', 'You did not say she was in a meeting.'],
  ['Ammar', 'She is at lunch. Why would I say a meeting?'],
  ['Caller', 'Everybody says a meeting. Nobody is ever at lunch.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying somebody is not there — and the second half**',
  table(['Not enough', 'What a caller can use'], [
    ['**He is not here.**', '**He is not here. He is in Homs until Thursday.**'],
    ['**She is not here.**', '**She is at lunch. She is back at two.**'],
    ['**He is busy.**', '**He is at the gate. Ten minutes.**'],
    ['**I do not know.**', '⚠ **I do not know. Can I take your number?**'],
  ], [1.8, 3.6]),
  '⚠ **The second sentence is the whole cycle.** **_He is not here_ ends the call with nothing in it.** **_He is back at two_ gives the caller something to do.**',
  '⚠ **Say the TRUE reason.** **_At lunch_ is a reason. _In a meeting_ when he is at lunch is a lie that costs nothing today and costs the office its word later.** **A caller who is told _at lunch_ believes _in a meeting_ the next time.',
  '⚠ **_I do not know_ is allowed** — **with a question after it.** **Nobody expects a storeman to know where the office people are. They expect him to take a number.**',
  '**Practise:** Add the second sentence.',
  '1 He is not here. ______________.   2 She is not here. ______________.   3 I do not know. ______________?',
  '**Useful words:**  He is not here.  ·  She is at lunch.  ·  back at two  ·  until Thursday  ·  Can I take your number?',
  '**Sound — the useful extra.** 🔊 **Track 6.8** Listen. _He is not here.↘ He is back at two.↗↘_ **The second sentence is slightly louder, because it is the one the caller needs.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back**. One asks for people. One says where they are. Then change places.'));
out.push(dlg(null, [
  ['A', 'Is __________ there?'],
  ['B', 'He is not here. He is __________ until __________.'],
  ['A', '__________. And __________?'],
  ['B', 'She is here. She is __________. She is back at __________.'],
  ['A', '__________. I ring back at __________.'],
  ['B', 'Or I take a message and she has it at __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Mr Khalil · in Homs · Thursday · Mrs Mansour · at lunch · two', 'Mr Bitar · at the bank · eleven · Mrs Sayegh · upstairs · half past ten']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **back to back, books closed**.'));
out.push(p('**Listener task:** write the two times the caller was given. Two times.'));
out.push(PHRASE_CARD(['He is not here.', 'She is at lunch.', 'back at two', 'until Thursday', 'Can I take your number?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four people at your work. Where are they, and when are they back? **Write it.**'));
out.push(table(['Name', 'Where', 'Back when'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.4, 2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is not here. He / She is ______. He / She is back ______._'));
out.push(p('**Listener task:** how many reports gave a TIME? **A time is what makes the sentence useful.**'));
out.push(p('**Board clinic:** your teacher writes four answers with no second sentence. The class adds one to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the board by the store telephone. Then answer.'));
out.push(box(null, [
  '**WHO IS WHERE — MONDAY 16 MARCH, 1.30**',
  table(['Name', 'Where', 'Back'], [
    ['Khalil, Abu Yasser', 'Homs', 'Thursday morning'],
    ['Mansour, Nour', 'lunch', '2.00'],
    ['Bitar, Majd', 'the counter', 'all day'],
    ['Saeed, Fadi', 'Homs, with the lorry', '5.00 today'],
  ], [1.8, 2, 1.6]),
  '⚠ **Rub out and rewrite at every change. A board that is wrong is worse than no board. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'When is Abu Yasser back?'));
out.push(item('2', 'Who is here all day?'));
out.push(item('3', 'Why is a wrong board worse than no board?'));
out.push(box('Writer\'s box', [
  '**A who-is-where board has three columns and a TIME at the top.**',
  '⚠ **The time at the top is what makes it readable.** _Monday 16 March, 1.30._ **Without it nobody knows whether _at lunch_ was written an hour ago or yesterday.**',
  '⚠ **_Back_ must be a time or a day, never _soon_ or _later_.** **_Soon_ is the same as nothing, and it is what the caller is being given instead of an answer.**',
  '⚠ **And the rule at the bottom:** _a board that is wrong is worse than no board._ **A caller told _back at two_ from a board written yesterday rings at two and is told the same thing again.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a who-is-where board for your own work (**15 words or more**).'));
out.push(table(['Name _(surname first)_', 'Where', 'Back'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.8, 2, 1.6]));
out.push(p('**Written at:** ______________, ______   ⚠ **______________**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A time at the top', ''],
  ['_Back_ is a time or a day, not _soon_', ''],
  ['Surname first', ''],
  ['A rule at the bottom about keeping it right', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _back_ column. The class says if a caller could use it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the people at your work and where they are (**20 to 35 words**). Who is hardest to find? What do you tell a caller?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Do you ever say "in a meeting"?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many people say _in a meeting_ when it is not true? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** where four people at your work will be tomorrow, with times (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.5 =======================
out.push(pb());
out.push(h2('6.5  Zero nine four four — one one two'));
out.push(p('**You can:** take a number and read it back   ·   **Grammar:** numbers in groups   ·   **Sound:** the groups of three'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your own telephone number slowly, in groups. Your partner writes it. **Check it.**'));
out.push(p('**b**  How do you say **0** on a telephone? _zero · nought · oh_ — **all three are used. Learn to hear all three.**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the number?   **A** 0944 112 233   **B** 0944 112 223   **C** 0944 122 233'));
out.push(p('**b**  Listen again.   **1** How many times is the number said?   **2** What does Ammar do when two digits are the same?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 6.9  Double two, double three', [
  ['Caller', 'My number is 0944 112 233.'],
  ['Ammar', 'One moment, please. _(he writes)_ Again, please.'],
  ['Caller', 'Zero nine four four, one one two, two three three.'],
  ['Ammar', 'Zero nine four four, one one two, two three three.'],
  ['Caller', 'That is it.'],
  ['Ammar', 'The last part. Two three three, or two two three?'],
  ['Caller', 'Two, then double three.'],
  ['Ammar', 'Double three at the end. Zero nine four four, one one two, two three three.'],
  ['Caller', 'Correct. You are the first man here who read it back.'],
  ['Ammar', 'My supervisor says a number nobody read back is a number nobody has.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Taking a telephone number**',
  table(['Step', 'What you do'], [
    ['**1**', '**One moment, please.** — get the pen FIRST'],
    ['**2**', 'write it as they say it'],
    ['**3**', '**Again, please.** — and write it a second time'],
    ['**4**', '⚠ **read it back, in groups of three or four**'],
    ['**5**', 'they say **_That is it._** or they correct you'],
  ], [0.8, 4.4]),
  '⚠ **Groups, not a string.** **0944 112 233 is said _zero nine four four — one one two — two three three_, with a gap you can hear.** **Twelve digits in one breath cannot be written down by anybody.**',
  '⚠ **_double two_ and _double three_ are normal on a telephone.** **Learn to hear them** — **_double three_ is two threes, and a man who writes one three has lost the number.**',
  '⚠ **The sentence to keep:** _a number nobody read back is a number nobody has._ **The read-back is the whole job, not the polite ending.**',
  '**Practise:** Write the number in digits.',
  '1 zero nine four four, one one two, two three three = ______________   2 zero one one, double five, double seven, eight eight = ______________',
  '**Useful words:**  One moment, please.  ·  Again, please.  ·  double three  ·  Let me read it back.  ·  That is it.',
  '**Sound — the groups of three.** 🔊 **Track 6.10** Listen. _zero nine four four … one one two … two three three._ **Three groups, two gaps.** **Say your own number in groups, four times.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back**. One gives a number. One writes and reads it back. Then change places.'));
out.push(dlg(null, [
  ['A', 'My number is __________.'],
  ['B', 'One moment, please. Again, please.'],
  ['A', '__________ … __________ … __________.'],
  ['B', '__________ … __________ … __________.'],
  ['A', 'That is it.'],
  ['B', 'The last part. __________, or __________?'],
]));
out.push(table(['Card 1', 'Card 2'], [['0944 112 233 · two three three · two two three', '011 557 788 · double eight · eight nine']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **back to back, books closed**.'));
out.push(p('**Listener task:** write the number. **Then check it against the speaker\'s paper, digit by digit.**'));
out.push(PHRASE_CARD(['One moment, please.', 'Again, please.', 'double three', 'Let me read it back.', 'That is it.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four numbers. Your partner says them over a telephone. You write and read back. **Write it.**'));
out.push(table(['What I wrote', 'Read back?', '✓ correct?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [3, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote ______. I read it back. It was right / wrong in the ______ group._'));
out.push(p('**Listener task:** how many numbers were right? **Then: how many were right WITHOUT a read-back?** Compare the two figures.'));
out.push(p('**Board clinic:** your teacher says a number once, fast, with no groups. The class writes it. **Then again in groups.** Compare.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the numbers Ammar wrote. Then answer.'));
out.push(box(null, [
  '**NUMBERS TAKEN — MONDAY 16 MARCH**',
  table(['Time', 'Name', 'Number', 'Read back?'], [
    ['7.50', 'Mouallem', '0944 112 233', '✓ yes'],
    ['9.10', 'Saeed', '0932 445 661', '✓ yes'],
    ['10.30', 'Tarabishi', '011 557 788', '✓ yes'],
    ['11.05', '_(no name)_', '0988 3?? 410', '✗ he rang off'],
  ], [0.8, 1.6, 1.8, 1.4]),
  '⚠ **Three good. One with two digits missing — I did not read it back in time. A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many numbers were read back?'));
out.push(item('2', 'What is wrong with the 11.05 number?'));
out.push(item('3', 'Why did Ammar write the bad number down anyway?'));
out.push(box('Writer\'s box', [
  '**A numbers list has a time, a name, the number and whether you read it back.**',
  '⚠ **Write the number in GROUPS on the page too.** _0944 112 233._ **A twelve-digit string with no gaps is a number you will misread next week** — **and you are the next week\'s reader.**',
  '⚠ **Write the bad number with question marks in it:** _0988 3?? 410_. **Nine digits out of eleven is not nothing.** **Somebody in the office may recognise it, and a blank line is the only version of it that is certainly useless.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a numbers list for one morning at your own work (**15 words or more**).'));
out.push(table(['Time', 'Name', 'Number _(in groups)_', 'Read back?'], [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
], [0.8, 1.6, 1.8, 1.4]));
out.push(p('⚠ **______ good. ______ not read back.** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The numbers written in groups', ''],
  ['A read-back column, ticked or crossed', ''],
  ['Bad numbers written with question marks, not left out', ''],
  ['The totals at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one number back to the class. **In groups.** The class writes it and checks.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a telephone number that went wrong at your work (**20 to 35 words**). Which digits? Did anybody read it back? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did you ever get hold of him?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many lost calls were never got back? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six telephone numbers from your work, in groups, and read each one aloud (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.6 =======================
out.push(pb());
out.push(h2('6.6  I will tell him'));
out.push(p('**You can:** say you will pass the message on   ·   **Grammar:** _I will tell him_ as a chunk   ·   **Sound:** the promise'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody gives you a message for your supervisor. What do you say? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which one would you believe? _OK · I will tell him at two, when he is back from lunch._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When will Nour get the message?   **A** at two   **B** tomorrow   **C** she will not'));
out.push(p('**b**  Listen again.   **1** Where does Ammar put the slip?   **2** What does he say he will do as well?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 6.11  On her desk and I tell her', [
  ['Caller', 'So she has it at two?'],
  ['Ammar', 'I will tell her at two. And the slip goes on her desk now.'],
  ['Caller', 'Both?'],
  ['Ammar', 'Both. The slip is if I forget. I am new and I might forget.'],
  ['Caller', 'You will not forget.'],
  ['Ammar', 'Last Tuesday I forgot one. Abu Yasser found the slip on Wednesday.'],
  ['Caller', 'So the slip worked.'],
  ['Ammar', 'The slip worked. A day late.'],
  ['Caller', 'A day late is better than never.'],
  ['Ammar', 'A day late lost us a lorry. So now I do both and I tell her twice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Promising to pass a message on**',
  table(['Weak', 'Strong'], [
    ['**OK.**', '**I will tell her at two.**'],
    ['**I will tell him.**', '**I will tell him when he is back on Thursday.**'],
    ['**I will try.**', '⚠ **I will put the slip on his desk now, and I will tell him at five.**'],
  ], [1.4, 4]),
  '⚠ **_I will tell him_ is a chunk — learn it whole, do not take it apart.** **At A1 you do not need to know why it is _will_.** **You need to be able to say it without thinking, with a TIME on the end.**',
  '⚠ **Do BOTH: the slip AND the telling.** **The slip is for when you forget. You will forget.** **Everybody forgets, and a man who plans for it is not careless — he is awake.**',
  '⚠ **A time on the end turns a promise into a plan.** **_I will tell her_ is a hope. _I will tell her at two_ is something the caller can check.**',
  '**Practise:** Make it strong.',
  '1 OK. → ______________.   2 I will tell him. → ______________.   3 I will try. → ______________.',
  '**Useful words:**  I will tell her at two.  ·  on his desk  ·  both  ·  if I forget  ·  I tell her twice.',
  '**Sound — the promise.** 🔊 **Track 6.12** Listen. _I will tell her at TWO.↘_ **The time is the loud part.** **Said with the stress on _tell_ it is a promise; said with the stress on _two_ it is a plan.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back**. One is the caller. One promises. Then change places.'));
out.push(dlg(null, [
  ['A', 'So she has it at __________?'],
  ['B', 'I will tell her at __________. And the slip goes on her __________ now.'],
  ['A', 'Both?'],
  ['B', 'Both. The slip is if I __________.'],
  ['A', 'You will not __________.'],
  ['B', 'Last __________ I forgot one. So now I do both.'],
]));
out.push(table(['Card 1', 'Card 2'], [['two · desk · forget · Tuesday', 'five · table · forget · Thursday']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **back to back, books closed**.'));
out.push(p('**Listener task:** what TWO things did the speaker promise? **Two, not one.**'));
out.push(PHRASE_CARD(['I will tell her at two.', 'on his desk', 'both', 'if I forget', 'I tell her twice.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four messages you have taken. What did you promise? What did you do? **Write it.**'));
out.push(table(['The message', 'What I said', 'What I did', 'Did it arrive?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.4, 1.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said I would tell ______ at ______. I wrote a slip and put it ______. He got it ______._'));
out.push(p('**Listener task:** how many reports promised BOTH the slip and the telling? **Both is the answer.**'));
out.push(p('**Board clinic:** your teacher writes four promises. Two have no time. The class adds one to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the slip Ammar left on Nour\'s desk. Then answer.'));
out.push(box(null, [
  '**MESSAGE**',
  '**For:** Nour Mansour   **Taken by:** Ammar Zreik',
  '**Date:** 16 March   **Time:** 1.35',
  '**From:** Ghassan Mouallem _(M-O-U-A-L-L-E-M)_',
  '**Number:** 0944 112 233  ⚠ **read back ✓**',
  '**Message:** The March invoice is wrong. He says 16 boxes, we paid for 12.',
  '⚠ **He rings back at four. I told her at two as well. A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who is the message for, and who took it?'));
out.push(item('2', 'What does the tick after the number mean?'));
out.push(item('3', 'What two things did Ammar do?'));
out.push(box('Writer\'s box', [
  '**A message slip has seven things:** for → taken by → date → time → from, **spelled** → number, **read back** → the message.',
  '⚠ **_Taken by_ matters as much as _for_.** **A message with no taker is a message nobody can ask a question about** — **and there is always a question.**',
  '⚠ **The tick after the number is the smallest and most useful mark on the slip.** **It says the number was read back.** **A number with no tick is a number the reader should ring once and not trust.**',
  '⚠ **And the last line: what happens NEXT.** _He rings back at four. I told her at two as well._ **The slip is not the end of the job; it is the record of a job that is still happening.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message slip for your own work (**15 words or more**).'));
out.push(p('**MESSAGE**   **For:** ______________  **Taken by:** ______________   **Date:** ______________  **Time:** ______   **From:** ______________ _(______________)_   **Number:** ______________ ⚠ **read back ______**   **Message:** ______________   ⚠ **______________**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['_Taken by_ — a name', ''],
  ['The caller\'s name spelled out', ''],
  ['A read-back tick on the number', ''],
  ['A last line saying what happens next', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their slip. The class says if they could act on it without asking a question.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a message at your work (**20 to 35 words**). Who took it? Did it arrive? What happened if it did not?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who found out it was lost?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many lost messages were found by the person who was waiting? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** a blank message slip with all seven things on it, to copy at work (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.7 =======================
out.push(pb());
out.push(h2('6.7  Review: the message slip'));
out.push(p('⚠ **This is the sixth unit, and the last of Book 1.** The whole call, start to finish — and one problem for the class to talk about together.'));
out.push(p('**You can:** take a whole message   ·   **Review:** Units 6.1 to 6.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**6.1**  Answer your telephone. Slowly.', ''],
  ['**6.2**  Ask for a name. Then ask for the letters.', ''],
  ['**6.3**  Make somebody wait, then come back.', ''],
  ['**6.4**  Your supervisor is at lunch. Say it usefully.', ''],
  ['**6.5**  Read 0944 112 233 back in groups.', ''],
  ['**6.6**  Promise to pass a message on. With a time.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened to the message?   **A** it was taken badly   **B** it was taken perfectly and never passed on   **C** it was never taken'));
out.push(p('**b**  Listen again.   **1** What was on the slip?   **2** Where was the slip for three days?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 6.13  Under the pad', [
  ['Nour', 'Ammar. The Mouallem message. Three days ago.'],
  ['Ammar', 'I took it. Everything. The name spelled, the number read back, the invoice, the time he rings.'],
  ['Nour', 'I know. I am holding the slip. It is perfect.'],
  ['Ammar', 'Then what is wrong?'],
  ['Nour', 'It was under the slip pad. I found it this morning.'],
  ['Ammar', 'I put it on your desk. I remember putting it on your desk.'],
  ['Nour', 'You did. And I put the pad on top of it when I came back from lunch.'],
  ['Ammar', 'And I told you at two as well. I did both.'],
  ['Nour', 'You told me at two and I was on the other telephone. I did not hear you.'],
  ['Abu Yasser', 'So the slip was perfect, the man did both, and the message is three days late.'],
  ['Nour', 'And the invoice is paid. Four boxes we did not get.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**6.1**', '_Sham Trading, good morning._ **Then stop and listen.**'],
    ['**6.2**', '_Your name, please. Can you spell it, please? Eight letters._'],
    ['**6.3**', '_One moment, please. Thank you for waiting._'],
    ['**6.4**', '_She is at lunch. She is back at two._'],
    ['**6.5**', '_Zero nine four four, one one two, two three three. That is it._'],
    ['**6.6**', '_I will tell her at two. And the slip goes on her desk now._'],
  ], [1, 5]),
  '⚠ **The new thing here: everything was done right and the message was three days late.** **The slip was perfect. The man did both things. The person it was for was in the building.** **And a pad got put on top of it.**',
  '**Useful words:**  under the slip pad  ·  I did both  ·  I was on the other telephone  ·  three days late  ·  four boxes we did not get',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Ammar. One is Nour. Say why you did your job.'));
out.push(table(['Ammar says', 'Nour says'], [[
  'Perfect slip, on her desk, and I told her at two. ⚠ **There is nothing in 6.6 that I did not do.**',
  'I was on the other telephone at two and I put my own pad on it. ⚠ **I did not hear him and I did not see it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** whose fault is it? Say _nobody\'s_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a message or a paper at your work that was lost between two people who both did their job. **Write it.**'));
out.push(table(['What was passed', 'What each person did', 'Where it stopped'], [['', '', ''], ['', '', '']], [1.4, 1.8, 1.6]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** The slip was perfect. Ammar put it on the desk and told her as well. Nour was on the other telephone and put her pad on top of it. Three days, four boxes.'));
out.push(table(['Ammar is right', 'Nour is right', 'So we do this'], [[
  'He did everything 6.6 asks for and one thing more. ⚠ **A perfect slip AND the telling. There is nothing left he could have done.**',
  'She was on another call and never heard him. ⚠ **And a slip flat on a desk is invisible the moment anything is put down on it.**',
  '⚠ **A flat slip is a lost slip.** **The slips go on a SPIKE or a clip by the telephone, standing up, and the taker says the name out loud once more when the person is off the other line.** **One place, standing up, and a second telling that waits for the person to be free.**',
]], [1, 1, 1.3]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _the slip was perfect, the man did both, and the message is three days late._ **This is the sixth unit of this book and the fifth time a thing has gone wrong with nobody at fault.** ⚠ **Look at the five together:** **Abu Raed\'s gate book, Hani\'s swaps, the roll behind the door, Fouad\'s shelf map, and now a slip under a pad.** **Every one of them was somebody doing their job well into a system that had one gap in it.** **That is what Book 1 has really been teaching you, and Book 2 starts from there.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _PEN AND PAD STAY BY THE TELEPHONE_   **A** Take the pen with you.   **B** Leave the pen and pad here.   **C** There is no pen.',
  '**2**  _SLIPS GO ON THE SPIKE, NOT ON THE DESK_   **A** Put slips flat on the desk.   **B** Put slips on the spike.   **C** Do not write slips.',
  '**3**  _NUMBER NOT READ BACK? RING ONCE, DO NOT TRUST IT._   **A** A number with no tick may be wrong.   **B** Never ring a number.   **C** All numbers are correct.',
  '**4**  _FOUR MINUTES IS NOT ONE MOMENT_   **A** Say one moment and go away.   **B** A long wait needs a different sentence.   **C** Never make anybody wait.',
  '**5**  _AT LUNCH? SAY AT LUNCH._   **A** Say he is in a meeting.   **B** Say nothing.   **C** Give the true reason.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message, the CALLER and what he wants go in the first two sentences.** **Not the time of day, not the weather, not an apology.**',
  '⚠ **The last sentence is what the reader must DO, with a time in it.** _He rings back at four._',
  '**The shape:** who it is for → who called → what he wants → what happens next, with a time.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message for your supervisor (**four sentences, about 30 words**). Who called, what about, what he wants, and when.'));
out.push(p('**For:** ______________   _______________ rang at ______. He says ______________. He wants ______________. He rings back at ______._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message for somebody at your work (**four sentences, about 30 words**). The caller, the subject, what he wants, and what happens next with a time.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **answer** the supervisor would leave for you (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  You answer at 9.00: Sham Trading, ___.   a) good afternoon   b) good morning   c) hello hello',
  '2  You want the caller\'s name. You say: ___.   a) Who are you?   b) What?   c) Your name, please',
  '3  You cannot write the name. You say: Can you ___ it, please?   a) spell   b) say   c) write',
  '4  You come back after ten seconds: Thank you for ___.   a) wait   b) waiting   c) waited',
  '5  She is at lunch. She is ___ at two.   a) back   b) come   c) go',
  '6  Double three is ___ threes.   a) one   b) three   c) two',
  '7  ___ tell her at two.   a) I am   b) I will   c) I do',
  '8  A number with no read-back tick: ___ it.   a) do not trust   b) trust   c) throw away',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 6.15** Listen. Write the answer.   **1** The caller\'s name: ______   **2** How many letters: ______   **3** The number: ______   **4** Was it read back? ______   **5** Who it is for: ______   **6** When he rings back: ______'));
out.push(p('**C  Reading.** Read the message slip at 6.6 again. Who took it? What does the tick mean? What two things did Ammar do?'));
out.push(p('**D  Writing.** Write four sentences — a message for your supervisor (**about 30 words**). The caller, what he says, what he wants, and when he rings back.'));
out.push(...lines(4));
out.push(dlg('Track 6.15  Audio script (read after the check)', [
  ['Ammar', 'Sham Trading, good morning.'],
  ['Caller', 'Good morning. Is Mrs Mansour there?'],
  ['Ammar', 'She is at lunch. She is back at two. Your name, please.'],
  ['Caller', 'Qassar. Q, A, S, S, A, R.'],
  ['Ammar', 'Q, A, S, S, A, R. Six letters. Qassar. Your number, please.'],
  ['Caller', 'Zero nine three two, four four five, six six one.'],
  ['Ammar', 'Zero nine three two, four four five, six six one. Is that it?'],
  ['Caller', 'That is it. Tell her I ring back at four.'],
  ['Ammar', 'I will tell her at two, and the slip goes on the spike now. Four o\'clock.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 6)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**6.1**  answer the telephone with three things, slowly, and then stop',
  '**6.2**  get a name I have never heard, letter by letter, with the count',
  '**6.3**  make somebody wait and come back to them',
  '**6.4**  say somebody is not here AND give the caller something to do',
  '**6.5**  take a number in groups and read it back',
  '**6.6**  promise a message on, with a time, and leave a slip as well',
  '**6.7**  take a whole message — and say why a perfect slip can still be three days late',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ End of Book 1', [
  '**Six units. Forty-two cycles. Ninety hours.** **Your name, the count, the day, the place, the delivery note and the telephone.**',
  '⚠ **The Book 1 Test comes next: sixty marks, and it covers these six units only.**',
  '⚠ **And the thing to carry into Book 2.** **Five times in six units something went wrong and nobody was at fault.** **Abu Raed\'s gate book. Hani\'s eleven swaps. The roll behind the door. Fouad\'s shelf map. A slip under a pad.** **Every one was somebody doing their job well into a system with one gap in it.**',
  '**Book 2 is about the gaps.** **Full, empty and broken. Asking for a thing. Yesterday. The word NO. The customer at the counter. And the note you leave for the man who comes after you.**',
], C.lteal, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business.**',
  '**lunch break** — here it is where somebody is. **At A2 it is a line in a timetable you explain to a new person.**',
  '**extension** — here it is a number you might be given. **At A2 you ask to be put through to one.**',
  '**desk** — here it is where a slip goes. **At A2 it is where you sit, and whose cover it is when you are away.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
module.exports = out;
