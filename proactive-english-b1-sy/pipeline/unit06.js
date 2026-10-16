// Proactive English B1 · Syria Edition · Book 1 · Unit 6 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 6  Rules, Rights and Obligations'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**6.1**  say what you must do',
  '**6.2**  say what you do not have to do',
  '**6.3**  say what you are allowed to do',
  '**6.4**  say what you are supposed to do',
  '**6.5**  ask for permission, formally and informally',
  '**6.6**  pass a rule on to somebody',
  '**6.7**  Review & Mediate: explain a set of workplace rules',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**One question, seven cycles: who is obliging whom?** _I must_ · _I have to_ · _I am allowed to_ · _I am supposed to_ — four shapes, and the difference between them is almost never about how strong the rule is. It is about **where it comes from**.',
  '**The third column.** Your homework asked for three rules: one you agree with, one you do not, and one nobody has ever explained to you. The third one is what this unit is for.',
  '**Tareq and the nine minutes.** In Unit 2 he stopped the bus for a midwife. His company\'s rule says a driver must not leave the vehicle. In 6.1 he puts both sentences next to each other for the first time.',
], C.lyellow, C.orange));

// ======================= 6.1 =======================
out.push(pb());
out.push(h2('6.1  What I must do and what I have to do'));
out.push(p('**Function:** saying what you must do   ·   **Grammar:** _must_ against _have to_ — who is obliging whom   ·   **Pronunciation:** the weak _have to_, /hæftə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out your three rules from the homework. Your teacher writes them in three columns: **agree · do not agree · never explained**. Then count the third column. It is usually the longest.'));
out.push(board('I have to stay with the vehicle. I must not leave it.', 'must · have to · who says so'));
out.push(p('**b**  Who is obliging whom? **1** _I must stop smoking._  **2** _I have to be there at six._  **3** _You must come and see the shop._  **4** _We have to sign the sheet._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two sentences does Tareq put next to each other?   **A** two company rules   **B** a rule and what he did   **C** two things he was told by a doctor'));
out.push(p('**b**  Listen again. **1** What does the company rule say?   **2** What does Ms Huda say the difference between _must_ and _have to_ is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.1  Rule four, and the ninth of February', [
  ['Tareq', 'I have brought the rule. It is rule four and I have carried it in the cab for nine years. "The driver must not leave the vehicle while passengers are on board."'],
  ['Ms Huda', 'And?'],
  ['Tareq', 'And on the ninth of February I left the vehicle. I stood in the road in the rain and asked eleven men to get off, and then I got back in and drove to a hospital that was not on my route. Both of those break rule four.'],
  ['Samira', 'There was a woman having a baby.'],
  ['Tareq', 'There was. I am not asking whether I was right. I have known for nine years that I was right. I have never put the two sentences next to each other on a piece of paper before, and when I did it last night I noticed something about them.'],
  ['Ms Huda', 'Go on.'],
  ['Tareq', 'Rule four says _must not_. And when I tell the story I always say "I had to stop". Not "I decided to stop" — "I had to". And those are not the same kind of sentence at all. One of them is the company and one of them is me, and I have been using the company\'s word for my own decision for nine years so that it would not be a decision.'],
  ['Omar', 'What is the difference?'],
  ['Ms Huda', '_Have to_ is a rule from outside: somebody else, a law, a timetable, a company. _Must_ is nearer to you — it is the speaker\'s own insistence. Rule four is a _must not_ because the company is speaking. Tareq saying "I had to stop" is the wrong word, and he has just told you why he has been using it.'],
  ['Tareq', 'The true sentence is: I did not have to stop. I stopped.'],
  ['Samira', 'That is a harder sentence.'],
  ['Tareq', 'It is a much harder sentence and it is mine.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _must_ and _have to_: where the rule comes from**',
  table(['you say', 'who is obliging you'], [
    ['_I **must** stop doing that._', '**you** — your own insistence'],
    ['_I **have to** be there at six._', '**outside** — a rule, a timetable, a person'],
    ['_You **must** come and see the shop._', 'you, warmly — this is an invitation'],
    ['_The driver **must not** leave the vehicle._', 'a written rule, speaking in its own voice'],
  ], [2.2, 2.4]),
  '**It is not about strength.** Both are strong. _Have to_ points **outwards** at where the obligation came from; _must_ points at the speaker. That is why paper says _must_ and people say _have to_.',
  '**_must_ is rarer in speech than students think.** In conversation _have to_ is the normal word for almost every obligation. _Must_ in speech is for your own resolutions (_I must ring my mother_) and for warm insistence (_you must come_).',
  '⚠ ~~I must to go.~~ → _I **must go**._ No _to_ after _must_. ⚠ ~~I have go.~~ → _I **have to** go._ ⚠ ~~He have to sign.~~ → _He **has to** sign._',
  '⚠ **_must_ has no past.** _I **had to** stop_ is the past of both. ~~I musted.~~ And that is also a trap: _I had to stop_ is the only past available, so people use it for decisions that were not obligations at all.',
  '**The useful question when somebody says _I had to_:** did you? Or did you decide to, and borrow the rule afterwards so that it would not be a decision?',
  '**Useful phrases:** I am not asking whether I was right · I have been using the company\'s word for my own decision · I did not have to stop, I stopped · that is a much harder sentence and it is mine.',
  '**Practise:** _must_ or _have to_? And who is obliging whom?  1 _I ___ ring my mother, I keep forgetting._  2 _We ___ be at the hospital by eight._  3 _You ___ try this._  4 _Visitors ___ report to the office._  5 _I ___ stop saying "I had to"._',
  '**Pronunciation.** 🔊 **Track 6.2** _have to_ is said /hæftə/ and _has to_ /hæstə/ — with an **f** and an **s** sound, not a **v** and a **z**. _I hæftə go_ · _she hæstə sign_. Listen to eight and write _have to_, _has to_ or _had to_; the vowel is the only clue to the past.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says who is obliging whom, and then asks the question: _did you have to, or did you decide to?_ Swap cards.'));
out.push(dlg(null, [
  ['A', 'I had to __________.'],
  ['B', 'Who said so?'],
  ['A', '__________.'],
  ['B', 'So did you have to, or did you decide to?'],
  ['A', 'I __________.'],
  ['B', 'Say the sentence without the rule in it.'],
  ['A', 'I __________.'],
]));
out.push(table(['Card A – the sentences', 'Card B – the sentences'], [
  ['I had to leave that job.', 'I had to lend him the money.'],
  ['I had to stop the bus.', 'I had to tell her the truth.'],
  ['I had to take the night shifts.', 'I had to give up the course.'],
  ['I had to say yes.', 'I had to move back home.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the sentence **without** the rule in it — _I left that job_, _I lent him the money_. Then say which of the eight was a real obligation. In most rooms it is two out of eight.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner one thing you say you _had to_ do. Your partner asks who said so, and keeps asking until you have either named a rule or a person, or said _I decided to_.'));
out.push(p('**b**  Swap. Then each of you say the hard version of your own sentence out loud, once, with nobody obliging you.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq brought rule four, which he has carried in the cab for nine years: the driver must not leave the vehicle while passengers are on board. On the ninth of February he left the vehicle, asked eleven men to get off in the rain, and drove to a hospital that was not on his route — and both of those break rule four. Samira said there was a woman having a baby; he said there was, and that he is not asking whether he was right, because he has known for nine years that he was. What he had never done was put the two sentences next to each other on paper. Rule four says must not — and when he tells the story he always says "I had to stop", not "I decided to stop", and those are not the same kind of sentence: one of them is the company and one of them is him, and he has been using the company\'s word for his own decision for nine years so that it would not be a decision. Ms Huda said have to is a rule from outside — somebody else, a law, a timetable, a company — and must is nearer to you, the speaker\'s own insistence. Rule four says must not because the company is speaking; Tareq saying "I had to stop" is the wrong word. And his true sentence is: I did not have to stop. I stopped. Samira said that is a harder sentence, and he said it is a much harder sentence and it is his._'));
out.push(p('**Listener task:** write somebody\'s _I had to_ with the rule taken out of it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Tareq writes. Answer the questions.'));
out.push(model([
  '**RULE FOUR** · T. Ayoub · written nine years late',
  '**What the rule says.** "The driver must not leave the vehicle while passengers are on board." It is rule four of eleven. It is printed on a card that is kept in the cab and I have never been asked about it by anybody.',
  '**What I did.** On 9 February 2017 I stopped on the service road at the Harasta turning, switched the engine off and left the seat. I went down into the rain and asked eleven men to get off and stand at the front. Then I drove to the hospital at Harasta, which is not on the route and which I am not authorised to go to.',
  '**What I have been saying for nine years.** "I had to stop." I have said it to my wife, to the company, to two drivers who asked me about it, and to this class.',
  '**What is true.** I did not have to stop. No rule anywhere obliged me to stop and rule four obliged me not to. I stopped because a woman four rows behind me said four words, and I decided, in about four seconds, that rule four was the wrong rule for that minute. Nobody made me.',
  '**Why the word matters.** Because "I had to" means somebody else is answerable and "I decided" means I am. For nine years I have told a story in which I am a man who followed a rule, and the rule I followed was mine and was not written down anywhere.',
  '**And the part I am not proud of.** The four seconds before I moved were spent thinking about the schedule. If I take the decision I have to take the four seconds, and I have left them out about forty times.',
]));
out.push(item('1', 'How many of the eleven rules has he ever been asked about?'));
out.push(item('2', 'Who, by his own account, obliged him to stop?'));
out.push(item('3', 'What does he say he has left out about forty times?'));
out.push(writers([
  'A page about a rule you broke: **the rule, quoted** → **what you did, in plain past simple** → **what you have been saying about it** → **what is true** → **why the word matters** → **and the part you are not proud of**.',
  'Quote the rule **exactly** and say where it lives: _rule four of eleven, on a card kept in the cab_. A rule you cannot quote is one you are arguing with from memory.',
  'Separate the three accounts: what the rule says, what you did, what you have been saying. Students merge the second and third and the page stops working.',
  '⚠ The last section is what makes it true rather than noble. If you are going to take the decision, take the whole four seconds.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write about a rule you have broken, or one you have obeyed and should not have (50 words or more).'));
out.push(p('**______________** · ______________   **What the rule says.** "______________." It is ______________ and it ______________.   **What I did.** On ______________ I ______________. Then I ______________, which ______________.   **What I have been saying.** "I had to ______________." I have said it to ______________.   **What is true.** I did not have to ______________. ______________ obliged me not to. I ______________ because ______________, and I decided ______________. Nobody made me.   **Why the word matters.** Because "I had to" means ______________ and "I decided" means ______________.   **And the part I am not proud of.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_have to_ for rules from outside; _must_ for your own insistence',
  'No _to_ after _must_ · _had to_ for the past of both',
  'The rule quoted, with where it is kept',
  'A last section with the part you are not proud of',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what is true" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more). It need not be a dramatic rule — a form you did not fill in, a lesson you cancelled, a payment you were not obliged to make. The shape works for all of them.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has to decide whether to use the rule against them**. ★ _The sentence in which you take it._  ✓ _One place where you are still borrowing the rule._  ? _Who exactly obliged you?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the "what is true" sentences.** How many begin _I did not have to_? Whatever the number is, it was zero at the start of the evening.'));
out.push(hw('Find one _I had to_ of your own from the last year and write the version with nobody obliging you (50+ words). Then say whether you prefer it, and whether you are going to use it when you next tell the story.'));

// ======================= 6.2 =======================
out.push(pb());
out.push(h2('6.2  What I don\'t have to do'));
out.push(p('**Function:** saying what you do not have to do   ·   **Grammar:** _don\'t have to_ against _mustn\'t_   ·   **Pronunciation:** the weight on _don\'t_ and on _mustn\'t_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher names six things from the three columns on the board. For each one the class says whether it is a **must not** or a **don\'t have to** — and two of them turn out to be neither.'));
out.push(board('You don\'t have to tell me. You mustn\'t do it while it\'s running.', 'don\'t have to = free · mustn\'t = forbidden'));
out.push(p('**b**  Free or forbidden? **1** _You don\'t have to come in on Saturday._  **2** _You mustn\'t come in on Saturday._  **3** _You don\'t have to wear the badge._  **4** _You mustn\'t take the keys home._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Bassel realised about his own shop?   **A** he has too many rules   **B** he has two rules and nine habits   **C** his men do not understand English'));
out.push(p('**b**  Listen again. **1** What are Bassel\'s two real rules?   **2** What does Samira say people do when the two are not separated?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.3  Two rules and nine habits', [
  ['Bassel', 'I sat down on Sunday and wrote out the rules of my shop, because of the homework. I got to eleven and then I crossed nine of them out.'],
  ['Ms Huda', 'Why?'],
  ['Bassel', 'Because nine of them were things I do. Not rules. I had written "the floor is swept at seven" — nobody has to sweep the floor at seven. I sweep the floor at seven.'],
  ['Samira', 'And the two that stayed?'],
  ['Bassel', 'Nobody puts a hand near the rollers while the machine is running. And nobody signs a proof they set themselves. Those are the two. Everything else in that shop is a preference of mine and I have been giving all eleven of them in the same voice for nineteen years.'],
  ['Rasha', 'What happens when you do that?'],
  ['Samira', 'I will tell you what happens, because I have worked for a man who did it. If everything is a rule, then nothing is. People watch you to find out which ones you mean, and they get it wrong, and the one they decide you do not mean is always the one that matters.'],
  ['Bassel', 'That is exactly it. Hassan, who has been with me four years, asked me in February whether he could sweep at the end of the day instead of at seven. He asked me as if he were asking for something. He has worked beside me for four years and he thought he had to sweep at seven.'],
  ['Omar', 'What did you say?'],
  ['Bassel', 'I said you do not have to sweep at seven. You do not have to sweep at all; it is not your job and I have never asked you to do it. And then I said the other thing, which I had never said to him in four years: you must not put a hand near the rollers while it is running, and that is the only sentence in this shop with "must not" in it.'],
  ['Ms Huda', 'Two rules, nineteen years.'],
  ['Bassel', 'Two rules, and one of them nearly took my thumb in 2009, which is why it is a rule and not a habit.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – free, or forbidden?**',
  table(['you say', 'and it means'], [
    ['_You **don\'t have to** sweep at seven._', '**no obligation** — you are free; do it or not'],
    ['_You **mustn\'t** put a hand near the rollers._', '**forbidden** — do not do it'],
    ['_You **don\'t have to** come in on Saturday._', 'you may stay at home'],
    ['_You **mustn\'t** come in on Saturday._', 'you may not come'],
  ], [2.3, 2.3]),
  '**These two look alike and mean opposite things.** _Don\'t have to_ removes an obligation. _Mustn\'t_ creates a prohibition. The mistake is not a style error — it changes what somebody does on Saturday.',
  '⚠ ~~You haven\'t to come.~~ → _You **don\'t have to** come._ ⚠ ~~You must not to come.~~ → _You **mustn\'t** come._ ⚠ ~~He doesn\'t have to sign, he mustn\'t.~~ — pick one; they are not degrees of the same thing.',
  '**The past:** _didn\'t have to_ (no obligation) against _wasn\'t allowed to_ (forbidden). _I **didn\'t have to** work on the Friday_ · _I **wasn\'t allowed to** work on the Friday_. There is no past of _mustn\'t_.',
  '**And the third thing, which is neither:** a **habit of the person in charge**. _The floor is swept at seven_ is not a rule and not a freedom; it is what somebody does, said in the voice of a rule. Most workplaces have two rules and nine of these.',
  '**Why it matters:** _if everything is a rule, then nothing is._ People watch you to find out which ones you mean, and the one they decide you do not mean is always the one that matters.',
  '**Useful phrases:** nine of them were things I do, not rules · a preference of mine, given in the voice of a rule · he thought he had to sweep at seven · that is the only sentence in this shop with "must not" in it.',
  '**Practise:** _don\'t have to_, _mustn\'t_, or neither?  1 _You ___ answer the telephone in English._  2 _You ___ leave the keys on the trolley._  3 _You ___ arrive before me._  4 _You ___ sign a proof you set yourself._  5 _You ___ bring your own pen._',
  '**Pronunciation.** 🔊 **Track 6.4** The whole weight goes on the negative word and nowhere else: _you **DON\'T** have to sweep_ · _you **MUSTN\'T** touch it_. In _mustn\'t_ the first **t** disappears: /ˈmʌsnt/. Listen to eight and write **free** or **forbidden**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the item from the card. B says whether it is _don\'t have to_, _mustn\'t_ or neither, and if it is neither, says whose habit it is. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'You __________ __________.'],
  ['A', 'Is that a rule?'],
  ['B', 'It is __________. It is __________\'s habit, said in the voice of a rule.'],
  ['A', 'What should it say?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the items', 'Card B – the items'], [
  ['sweep the floor at seven', 'answer the telephone in English'],
  ['put a hand near the rollers while it runs', 'take the ward keys home'],
  ['arrive before the manager', 'write the register in blue'],
  ['sign a proof you set yourself', 'tell anybody where you are going at lunch'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** sort the eight into three piles — forbidden, free, and somebody\'s habit. The habit pile is nearly always the biggest, and the forbidden pile should have two things in it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write out the rules of the place you work, or of your own household. Read them to your partner. Then cross out every one that is a habit of somebody in charge, and say how many are left.'));
out.push(p('**b**  Swap. Then each of you say which habit you have been obeying for years as if it were a rule.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel sat down on Sunday and wrote out the rules of his shop. He got to eleven and crossed nine of them out, because nine were things he does and not rules — he had written "the floor is swept at seven", and nobody has to sweep the floor at seven; he sweeps the floor at seven. The two that stayed are that nobody puts a hand near the rollers while the machine is running, and nobody signs a proof they set themselves. Everything else in that shop is a preference of his, and he has been giving all eleven of them in the same voice for nineteen years. Samira said she has worked for a man who did that, and what happens is this: if everything is a rule, then nothing is — people watch you to find out which ones you mean, they get it wrong, and the one they decide you do not mean is always the one that matters. Bassel said that is exactly it. Hassan, who has been with him four years, asked him in February whether he could sweep at the end of the day instead, and asked as if he were asking for something. So Bassel told him he does not have to sweep at seven and does not have to sweep at all, because it is not his job and has never been asked of him — and then said the thing he had never said to him in four years: you must not put a hand near the rollers while it is running. Two rules in nineteen years, and one of them nearly took his thumb in 2009, which is why it is a rule and not a habit._'));
out.push(p('**Listener task:** write the habit somebody has been obeying as if it were a rule.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Bassel pins up. Answer the questions.'));
out.push(model([
  '**TWO RULES** · pinned by the door, replacing the list of eleven · B. Tahhan',
  '**1  Nobody puts a hand near the rollers while the machine is running.** Not to clear a sheet, not to pull a corner, not for one second, not if I am standing next to you and say it is all right. If the machine is running, the answer is no. If a sheet is going wrong, the machine is stopped first and we lose the sheets.',
  '**2  Nobody signs a proof they set themselves.** If you set it, somebody else reads it. If there is nobody else in the shop, it waits until there is.',
  '**That is the whole list. Everything else is me.**',
  'The floor is swept at seven because I sweep it at seven. You do not have to sweep it. You do not have to sweep it at all.',
  'The tea is made at half past ten because I am thirsty at half past ten. You do not have to make it and you do not have to drink it.',
  'The trimmer is wiped before it is put away because it rusts. That is not a rule, it is a reason — and if you have a better way of stopping it rusting, use it and tell me.',
  'I do not need to be told where you are going at lunch. I never did. I have stood at that door for nineteen years looking at my watch out of habit and three of you have been explaining yourselves to me, and I am sorry.',
  '**Why this is up.** Hassan asked me in February whether he could change when he sweeps. He has been here four years and he asked as if it were a favour. If he thought the sweeping was a rule, then for four years he has not known which things in this shop are the two that matter.',
]));
out.push(item('1', 'What must be done if a sheet is going wrong?'));
out.push(item('2', 'What does he say about the trimmer being wiped?'));
out.push(item('3', 'Why has he put the notice up?'));
out.push(writers([
  'A list of rules that is honest: **the real rules, numbered, with their negatives spelt out** → **a line saying that is the whole list** → **the habits, named as yours** → **and the reason you have written it**.',
  'Spell out the **edges** of a prohibition: _not to clear a sheet, not to pull a corner, not for one second, not if I am standing next to you and say it is all right._ A rule with no edges is negotiated at the edges.',
  'Give the habits away in your own voice: _the tea is made at half past ten because I am thirsty at half past ten._ The joke is not decoration — it is what makes the two rules believable.',
  '⚠ Separate a **reason** from a rule. _The trimmer is wiped because it rusts_ invites a better method; _the trimmer must be wiped_ forbids one.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the honest list for a place you are responsible for — a shop, a room, a shift, a kitchen, a classroom (50 words or more).'));
out.push(p('**______________** · ______________   **1  Nobody ______________.** Not ______________, not ______________, not ______________. If ______________, the answer is no.   **2  Nobody ______________.** If ______________, ______________.   **That is the whole list. Everything else is me.**   ______________ because ______________. You do not have to ______________.   ______________ because ______________. That is not a rule, it is a reason — and if ______________, ______________.   I do not need ______________. I never did.   **Why this is up.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_mustn\'t_ / _nobody does_ for the forbidden; _don\'t have to_ for the free',
  'The edges of each prohibition spelt out',
  'Every habit given away as yours, in your own voice',
  'Reasons separated from rules',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "that is the whole list" line and the first habit under it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full list (100 words or more). If you are responsible for nobody, write it for the place you work as you believe it ought to be — two real rules, and everything else named as somebody\'s habit — and then say who would have to sign it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s list as **somebody who started there on Monday**. ★ _The habit I would have obeyed for four years._  ✓ _One rule with no edges on it._  ? _What happens if I break rule one?_ — and if the page does not say, say so.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many real rules did each list end with?** Collect the numbers. Two and three are the usual answers, from lists that started at nine and eleven. Then: who is going to show their list to anybody?'));
out.push(hw('Write out every rule of the place you work, then cross out the habits and count what is left (50+ words). Write the sentence you would have to say to one person to put a habit back where it belongs.'));

// ======================= 6.3 =======================
out.push(pb());
out.push(h2('6.3  What I\'m allowed to do'));
out.push(p('**Function:** saying what you are allowed to do   ·   **Grammar:** _be allowed to_ · _let_ · _be permitted to_   ·   **Pronunciation:** _allowed to_ run together'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: something you are **not allowed to do** at work that you would like to do, and something you **are** allowed to do that you have never done.'));
out.push(board('I\'m not allowed in there alone. He lets me use his key.', 'be allowed to · let somebody do'));
out.push(p('**b**  Rewrite with _allowed_. **1** _They let us use the back room._  **2** _He does not let anybody touch it._  **3** _Did they let you in?_  **4** _Nobody lets students into the workshop._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Lubna been doing for two years?   **A** working in a place she is not allowed into   **B** teaching a class she is not qualified for   **C** using somebody else\'s name'));
out.push(p('**b**  Listen again. **1** Whose key does she have, and what is the rule?   **2** What does Umm Kinan mention about Tuesday?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.5  A key I was not given', [
  ['Lubna', 'I am going to say mine and it is not a small one. Students are not permitted in the model workshop without a member of staff. I have been going in alone, in the evenings, for two years.'],
  ['Ms Huda', 'With whose key?'],
  ['Lubna', 'A technician called Abu Rami lent me his in my second year, for one evening, and never asked for it back. I have had it for two years. He knows I have it. Nobody has ever said yes to me and nobody has ever said no.'],
  ['Fares', 'So you are not allowed, and you are also not stopped.'],
  ['Lubna', 'I am not allowed and I am not stopped, and nineteen versions of that market hall were built on a bench I am not permitted to stand at. If anybody ever asks me where the model came from, the answer is a rule I have been breaking twice a week since 2024.'],
  ['Umm Kinan', 'Ask for the key.'],
  ['Lubna', 'And be refused, and lose two years of evenings?'],
  ['Umm Kinan', 'Possibly. Mr Fouad came into my room on Tuesday at half past two and showed me the projector for forty minutes — I asked him on the Monday, and he said yes before I had finished the sentence. I had been not asking for four months.'],
  ['Lubna', 'That is not the same thing. Nobody had told you no.'],
  ['Umm Kinan', 'Nobody has told you no either. You have told yourself no, and then gone in anyway, which is the worst of the two.'],
  ['Ms Huda', 'What would you have to ask for, exactly?'],
  ['Lubna', 'To be allowed to use the bench after six, on my own, in writing, from the head of department. And to give the key back in the same sentence.'],
  ['Mazen', 'Give it back first.'],
  ['Lubna', '…Yes. Give it back first, and then ask. Otherwise I am asking from inside the room.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – permission**',
  table(['you say', 'how it is used'], [
    ['_I **am allowed to** use the bench._', 'the normal, usable form — and it has all tenses'],
    ['_They **let** me use the bench._', '_let_ + person + **bare** verb; no _to_'],
    ['_Students **are not permitted** in the workshop._', 'formal, written — notices and regulations'],
    ['_I **was allowed to** stay._ · _I **have been allowed to** stay._', '_allowed_ is the one with a past and a perfect'],
  ], [2.4, 2.2]),
  '⚠ ~~They let me to use it.~~ → _They **let** me **use** it._ No _to_ after _let_. ⚠ ~~I am let to use it.~~ — _let_ has no comfortable passive; use _allowed_. ⚠ ~~I am allowed use it.~~ → _allowed **to** use_.',
  '**_must_ and _mustn\'t_ have no passive either.** For a prohibition in writing you need _is not permitted_ or _is not allowed_: _students **are not permitted** in the workshop_. That is why notices are full of this shape, and it is 6.6.',
  '**Three levels of the same thing:** _they let me_ (spoken, personal) · _I am allowed to_ (neutral, usable everywhere) · _I am permitted to_ (written, formal, and slightly cold in speech).',
  '**The useful distinction:** _not allowed_ and _not stopped_ are different states, and most of the awkward situations in anybody\'s working life live between them. Say which one you are in.',
  '⚠ _allowed_ needs the **to**-infinitive after it in every tense: _am allowed to · was allowed to · have been allowed to · will be allowed to_.',
  '**Useful phrases:** I am not allowed and I am not stopped · nobody has ever said yes to me and nobody has ever said no · you have told yourself no and then gone in anyway, which is the worst of the two · otherwise I am asking from inside the room.',
  '**Practise:** Say each one with _let_ and with _be allowed to_.  1 use the back room  2 take the keys home  3 come in before eight  4 stay after six  5 borrow the machine',
  '**Pronunciation.** 🔊 **Track 6.6** _allowed to_ runs together into /əˈlaʊtə/ — the **d** and the **t** become one sound: _I\'m əlaʊtə stay_. And _not allowed_ puts the weight on **not**: _I\'m **NOT** allowed to._ Listen to eight and write **allowed** or **not allowed**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing on the card. B says whether they are allowed to, not allowed to, or **not allowed and not stopped** — and in the third case says who has never said no. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I am __________ to __________.'],
  ['A', 'Who said so?'],
  ['B', '__________. Nobody has ever __________.'],
  ['A', 'So what would you have to ask for?'],
  ['B', 'To be allowed to __________, from __________, in __________.'],
]));
out.push(table(['Card A – the things', 'Card B – the things'], [
  ['use a room, bench or machine after hours', 'take a key, a book or a tool home'],
  ['change your own hours', 'speak to somebody two levels above you'],
  ['see a record that is about you', 'train somebody who has not been assigned to you'],
  ['refuse an extra shift', 'put a notice on a wall'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write how many of the eight are **not allowed and not stopped**. It is usually three or four, and in each case somebody is carrying a risk that a single sentence in writing would end.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name something you have been doing without permission — at work, in a building, with a key, a system or a name. Say exactly who has never said no, and how long it has been going on.'));
out.push(p('**b**  Swap. Then each of you write the one sentence you would have to say, to one named person, to turn it into permission.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna said hers is not a small one. Students are not permitted in the model workshop without a member of staff, and she has been going in alone in the evenings for two years. A technician called Abu Rami lent her his key in her second year for one evening and never asked for it back; he knows she has it, and nobody has ever said yes to her and nobody has ever said no. Fares said so she is not allowed and also not stopped, and she said that is exactly it — nineteen versions of that market hall were built on a bench she is not permitted to stand at, and if anybody ever asks where the model came from, the answer is a rule she has been breaking twice a week since 2024. Umm Kinan told her to ask for the key, and she said and be refused and lose two years of evenings. Umm Kinan said possibly — and then said that Mr Fouad came into her room on Tuesday at half past two and showed her the projector for forty minutes, that she had asked him on the Monday and he said yes before she had finished the sentence, and that she had been not asking for four months. Lubna said that is not the same thing, because nobody had told her no. Umm Kinan said nobody has told Lubna no either: she has told herself no and then gone in anyway, which is the worst of the two. Ms Huda asked what exactly she would have to ask for, and Lubna said to be allowed to use the bench after six, on her own, in writing, from the head of department — and to give the key back in the same sentence. Mazen said give it back first. She said yes: give it back first, and then ask, because otherwise she is asking from inside the room._'));
out.push(p('**Listener task:** write the thing somebody is not allowed to do and not stopped from doing.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Lubna writes. Answer the questions.'));
out.push(model([
  '**To:** the head of the department of architecture',
  '**Subject:** The model workshop key, and a request',
  'Dear Professor,',
  'The key to the model workshop is in the envelope with this letter. It is the key issued to Abu Rami in the technicians\' set. He lent it to me for one evening in November 2024 and I did not give it back, and I have been using the workshop alone in the evenings, roughly twice a week, since then. I am telling you this before I ask you for anything, because the order matters.',
  'I am aware that students are not permitted in the workshop without a member of staff. I was aware of it every time. Nobody told me I could and nobody told me I could not, and I used that as permission, which it is not.',
  'What I did in there. Nineteen versions of a market hall for the waste ground behind Qaboun station, which nobody commissioned and which will not be built. I used the bench, the band saw twice — in the second year, which I should not have done — and otherwise hand tools and card. I have broken one blade, in March 2025, and I replaced it from the same supplier and said nothing, which was the second thing I did wrong.',
  'What I would like. To be allowed to use the workshop after six in the evening, alone, with my own key, in writing. If you would rather it were not alone, I will take any member of staff\'s evening and fit myself round it. If the answer is no, I will accept it and I will not go in again.',
  'I understand that you may feel the two years makes this harder to grant, and that the honest thing is also the inconvenient thing. I have given the key back first so that you are not deciding about somebody who is still in the room.',
  'Yours sincerely, Lubna Sweidan',
]));
out.push(item('1', 'In what order does she do the three things — give back, confess, ask?'));
out.push(item('2', 'What two things does she say she did wrong beyond the key?'));
out.push(item('3', 'What does she offer if the answer is no?'));
out.push(writers([
  'A letter asking to be allowed: **hand the thing back in the first line** → **the rule, quoted, and that you knew** → **what you actually did, with numbers and the worst details** → **what you would like, exactly, and in writing** → **an alternative** → **and what you will do if the answer is no**.',
  'Confess the **second** thing. The key is the big one and the reader will see it; the broken blade replaced quietly is the one that shows you are telling the whole thing.',
  'Say what you will do if refused, and make it unconditional: _I will accept it and I will not go in again._ Without that sentence the letter is a negotiation; with it, it is a request.',
  '⚠ Give the thing back **before** you ask. _So that you are not deciding about somebody who is still in the room_ is the sentence that makes the whole letter possible.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter asking to be allowed to do something you have been doing without permission (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   ______________ is ______________ with this letter. ______________ lent it to me ______________ and I did not ______________, and I have been ______________ since then. I am telling you this before I ask you for anything, because the order matters.   I am aware that ______________ are not permitted ______________. I was aware of it every time. Nobody told me ______________ and nobody told me ______________, and I used that as permission, which it is not.   **What I did.** ______________. I also ______________, which was the second thing I did wrong.   **What I would like.** To be allowed to ______________, in writing. If you would rather ______________, I will ______________. If the answer is no, I will accept it and I will not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_be allowed to_ with the **to**-infinitive; _let_ with the bare verb',
  '_are not permitted_ for the written rule, quoted',
  'The thing handed back before anything is asked',
  'An unconditional sentence about what you will do if refused',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "if the answer is no" sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) — and if you have nothing to confess, write the letter asking to be allowed to do the thing you have been **not asking for**. Umm Kinan had been not asking for four months.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person who has to decide**. ★ _The sentence that makes me want to say yes._  ✓ _One place where you are still asking from inside the room._  ? _What exactly do you want, and for how long?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who has been not asking, and for how long?** Collect the spans. Four months, two years, eleven years. Then the only question that matters: what did Umm Kinan\'s asking cost her? One sentence on a Monday.'));
out.push(hw('Ask one named person for one thing you have been not asking for, in writing or out loud, this week. Write down what you asked and what happened (50+ words) — including if the answer was no.'));

// ======================= 6.4 =======================
out.push(pb());
out.push(h2('6.4  What I\'m supposed to do'));
out.push(p('**Function:** saying what you are supposed to do   ·   **Grammar:** _supposed to_ · _expected to_ · _meant to_   ·   **Pronunciation:** _supposed to_ /səˈpəʊstə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: _I am supposed to… and I don\'t._ Your teacher writes six on the board. Then: for each one, **who** expects it, and what happens when it is not done? In most cases the answer to the second is nothing.'));
out.push(board('I\'m supposed to sign at the bed. I sign at the end of the bay.', 'supposed to · expected to · meant to'));
out.push(p('**b**  Match the shape. **1** _I was supposed to be there at six._  **2** _I am meant to wear a badge._  **3** _We are expected to stay until the end._  **4** _It was supposed to be finished in March._ Which one is about a **thing** rather than a person?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the class count?   **A** how many rules they break   **B** how many things everybody is supposed to do and nobody does   **C** how many hours they work'));
out.push(p('**b**  Listen again. **1** What is Yara supposed to do every shift, and for how long was it not done?   **2** What does Ms Huda say _supposed to_ really means?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.7  Supposed to, and nobody checks', [
  ['Ms Huda', 'Round the room. One thing you are supposed to do and do not do.'],
  ['Rasha', 'I am supposed to sign at the bed. I sign at the end of the bay. Every round, for eleven years.'],
  ['Tareq', 'I am supposed to fill in the check sheet before I take the bus out. I fill it in at the office window, forty metres from the bus, before I have looked at anything.'],
  ['Yara', 'The second chamber is supposed to be checked and logged at the start of every shift. It was not checked for fourteen months and the seal split in front of everybody.'],
  ['Umm Kinan', 'I am supposed to submit a lesson plan every Sunday. I have submitted four in twenty-four years and nobody has ever mentioned it.'],
  ['Omar', 'I am supposed to have a student card. I have never had one. Nobody has asked me for it in two years.'],
  ['Ms Huda', 'Six. And what is the same about all six?'],
  ['Fares', 'Nobody checks.'],
  ['Ms Huda', 'Nobody checks. That is what _supposed to_ means in English, nine times out of ten: somebody expects it, and nobody enforces it. It is the softest obligation in the language and that is exactly why it is the most dangerous one — because _supposed to_ and _must_ sometimes point at the same thing, and nobody has ever told you which.'],
  ['Yara', 'Mine was a _must_ wearing _supposed to_.'],
  ['Ms Huda', 'Say more.'],
  ['Yara', '"The chamber is supposed to be checked every shift." That sentence was true for fourteen months while it was not being checked. If it had said "must", somebody would have noticed that it was not happening — not because must is stronger, but because must has somebody behind it and supposed to has nobody.'],
  ['Rasha', 'So which of my six is a must?'],
  ['Yara', 'That is the homework, is it not.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the soft obligation**',
  table(['you say', 'and it means'], [
    ['_I **am supposed to** sign at the bed._', 'somebody expects it; nobody is checking'],
    ['_We **are expected to** stay until the end._', 'the same, slightly more formal and more watched'],
    ['_I **am meant to** wear a badge._', 'the same again, informal, often with a shrug'],
    ['_It **was supposed to** be finished in March._', 'about a **thing** — a plan that did not happen'],
  ], [2.4, 2.2]),
  '**_supposed to_ is the obligation with nobody behind it.** It says that an expectation exists. It says nothing at all about whether anybody is enforcing it, and nine times out of ten the answer is no.',
  '**The past is where it does its best work:** _it was supposed to be finished in March_ · _I was supposed to be there at six_. This is the normal English way of saying that a plan existed and did not happen, and it is far more common than any of the alternatives.',
  '⚠ ~~I am supposed sign.~~ → _supposed **to** sign_. ⚠ ~~I am suppose to sign.~~ → _**supposed** to_ — the **d** is always written even though you never hear it.',
  '⚠ There is no ~~I supposed to~~. It is always _am / is / are / was / were_ + _supposed to_.',
  '**The dangerous case:** a **must** wearing _supposed to_. _The chamber is supposed to be checked every shift_ was a true sentence throughout fourteen months in which it was not checked. The sentence survives the thing not happening, which is what makes it useless.',
  '**The test to apply at work:** who expects this, and what happens when it is not done? If the answer to the second is _nothing_, you are looking at a _supposed to_ — and then the only question is whether it should be a _must_.',
  '**Useful phrases:** nobody checks · the softest obligation in the language and the most dangerous one · a must wearing supposed to · it survives the thing not happening.',
  '**Practise:** Say it with _supposed to_, then say what happens when it is not done.  1 the check sheet  2 the lesson plan  3 the badge  4 the log  5 the signature  6 the deadline that was in March',
  '**Pronunciation.** 🔊 **Track 6.8** _supposed to_ is /səˈpəʊstə/ — no **d** sound at all, and the two words become one. _I\'m səpəʊstə sign it._ Same with _meant to_, /ˈmentə/. Listen to eight and write the verb that follows; the obligation itself is almost inaudible.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the item on the card. B says what they are supposed to do, what they actually do, who expects it, and what happens when it is not done. Then A asks: _should it be a must?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I am supposed to __________. I actually __________.'],
  ['A', 'Who expects it?'],
  ['B', '__________.'],
  ['A', 'And what happens when it is not done?'],
  ['B', '__________.'],
  ['A', 'Should it be a must?'],
  ['B', '__________, because __________.'],
]));
out.push(table(['Card A – the items', 'Card B – the items'], [
  ['a form or sheet you fill in afterwards', 'a log or record of a reading'],
  ['a signature in the wrong place', 'a card, badge or permit you have never had'],
  ['a plan you are supposed to submit', 'a check you are supposed to do daily'],
  ['a deadline that was supposed to be last month', 'a meeting you are expected to attend'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight _supposed to_ items and mark the ones where **nothing** happens if they are not done. Then mark the ones that should be a _must_. The second list is always shorter than the first and it is never empty.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name four things you are supposed to do and do not. For each one: who expects it, and what happens when it is not done.'));
out.push(p('**b**  Swap. Then each of you choose the **one** of the other\'s four that is really a _must_, and say why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda went round the room for one thing each that we are supposed to do and do not. Rasha is supposed to sign at the bed and signs at the end of the bay, every round, for eleven years. Tareq is supposed to fill in the check sheet before he takes the bus out and fills it in at the office window, forty metres from the bus, before he has looked at anything. The second chamber in Yara\'s laboratory is supposed to be checked and logged at the start of every shift; it was not checked for fourteen months and the seal split in front of everybody. Umm Kinan is supposed to submit a lesson plan every Sunday and has submitted four in twenty-four years, and nobody has ever mentioned it. Omar is supposed to have a student card and has never had one. Fares said what is the same about all six: nobody checks. Ms Huda said that is what supposed to means nine times out of ten — somebody expects it and nobody enforces it. It is the softest obligation in the language and that is exactly why it is the most dangerous, because supposed to and must sometimes point at the same thing and nobody has ever told you which. Yara said hers was a must wearing supposed to: the sentence "the chamber is supposed to be checked every shift" was true for fourteen months while it was not being checked, and if it had said must, somebody would have noticed — not because must is stronger, but because must has somebody behind it and supposed to has nobody._'));
out.push(p('**Listener task:** write somebody\'s _supposed to_ that ought to be a _must_.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Rasha writes for the ward meeting. Answer the questions.'));
out.push(model([
  '**ELEVEN THINGS WE ARE SUPPOSED TO DO** · R. Barakat · for the meeting on the 14th',
  'I have listed every instruction on this ward that is written as _supposed to_ and nobody checks. There are eleven. I am not asking for any of them to be enforced. I am asking for **two** of them to be moved into the other column, and for the other nine to be deleted.',
  '**The two that should be must.** The drug is signed for at the bed, before you move. And the patient is identified from the band and not from the chart. Those two are the only instructions on this ward after which nothing can be undone, and both of them are currently in the same voice as the instruction about the colour of the pen.',
  '**Why they are not being done.** Not laziness. The bed signature is not done because there is nowhere to write at the bed — the trolley has no board on it, and I have been working round a missing shelf for two years. The band check is not done on the last two bays because the station light does not reach bay five and the band cannot be read without a torch, and there is no torch on the trolley.',
  '**The nine that should be deleted.** The colour of the pen, the time the trolley is cleaned, the form for the fridge temperature that goes in a drawer nobody opens, and six others. Every one of them has been not done by everybody for years. A list of eleven instructions, nine of which are decoration, is the reason the two that matter look like decoration too.',
  '**What I am asking for.** A board on the trolley and a torch. Then the two sentences changed from _supposed to_ to _must_, and the nine taken off the sheet. The board and the torch first, because changing the word before fixing the shelf is how a ward gets a rule that is broken on the first night.',
]));
out.push(item('1', 'How many is she asking to be enforced, and how many deleted?'));
out.push(item('2', 'Why are the two not being done?'));
out.push(item('3', 'Why does she want the board and the torch before the words are changed?'));
out.push(writers([
  'A page about soft obligations: **the count** → **the ones that should be _must_, and why they are the irreversible ones** → **why they are not being done, with the physical reason** → **the ones that should be deleted** → **and the order you want the changes made in**.',
  'Ask for **deletions** as well as enforcement. A list in which nine of eleven are decoration is why the two that matter are ignored, and nobody ever asks for the nine to go.',
  'Give the **physical** reason: no board, no torch, forty metres to the office window. _Supposed to_ things are almost never undone out of laziness; they are undone because of a missing shelf.',
  '⚠ Name the **order**: fix the shelf, then change the word. A rule tightened before the obstacle is removed is broken on the first night and then everybody knows it can be.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page for the soft obligations where you work (50 words or more).'));
out.push(p('**______________** · ______________   I have listed every instruction here that is written as _supposed to_ and nobody checks. There are ______________. I am not asking for ______________. I am asking for ______________.   **The ______________ that should be must.** ______________. ______________. Those are the only ones after which ______________.   **Why they are not being done.** Not laziness. ______________ is not done because ______________. ______________ is not done because ______________.   **The ______________ that should be deleted.** ______________, ______________, and ______________ others.   **What I am asking for.** ______________, and then ______________. ______________ first, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_supposed to_ / _expected to_ / _meant to_ with the **to**-infinitive and the written _d_',
  'The irreversible instructions identified',
  'A physical reason for each thing not being done',
  'Deletions asked for as well as enforcement, and in what order',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "why they are not being done" lines only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about the soft obligations where you work or study. Count them. Say which are really _must_, say what physically prevents them, and ask for the deletions.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who could change the sheet**. ★ _The missing shelf I did not know about._  ✓ _One item you call a must that nothing irreversible depends on._  ? _If I changed the word tomorrow and changed nothing else, what would happen on the first night?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Count the room\'s _supposed to_ items, and then count the ones where nothing happens.** The two numbers are nearly the same. Then: how many of the room\'s _supposed to_ items are really _must_? One or two each, and every single one has a missing shelf behind it.'));
out.push(hw('List every _supposed to_ in your own job and mark the ones where nothing happens if they are not done (50+ words). Then name the one that is really a _must_ and the physical thing that is stopping it.'));

// ======================= 6.5 =======================
out.push(pb());
out.push(h2('6.5  Would it be all right if…?'));
out.push(p('**Function:** asking for permission, formally and informally   ·   **Grammar:** _can I_ · _could I_ · _do you mind if_ · _would it be all right if_   ·   **Pronunciation:** the rise that makes a request a request'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher names one thing — _twenty minutes on Thursday_. Everybody asks for it, round the room, and each person must be **more formal** than the last. The room runs out at about the eighth.'));
out.push(board('Would it be all right if I came at six instead?', 'can · could · do you mind if · would it be all right if'));
out.push(p('**b**  Order these from most to least formal. **1** _Can I…?_  **2** _I was wondering whether I might…_  **3** _Could I possibly…?_  **4** _Do you mind if I…?_  **5** _Is it all right if I…?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Four people ask for the same thing. What is it?   **A** a day off   **B** forty minutes of somebody\'s time   **C** a key'));
out.push(p('**b**  Listen again. **1** Which version does Ms Huda say is wrong, and why?   **2** What does Fares say about the longest one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.9  Four ways to ask for forty minutes', [
  ['Ms Huda', 'Forty minutes of somebody\'s time. Four of you, four levels. Omar — your friend.'],
  ['Omar', 'Can you show me how to do that? Forty minutes, Saturday?'],
  ['Ms Huda', 'Umm Kinan — Mr Fouad, who teaches next door and whom you have known six years.'],
  ['Umm Kinan', 'Is it all right if I ask you something? Would you have forty minutes to show me the projector — in my room, not in the hall?'],
  ['Ms Huda', 'Rasha — your ward manager.'],
  ['Rasha', 'Could I ask for forty minutes of your time in the next fortnight? There are two things on the trolley I would like to show you rather than write about.'],
  ['Ms Huda', 'Fares — the training manager of a company that has already refused you twice.'],
  ['Fares', 'I was wondering whether I might ask for twenty minutes, at any time that suits you, to be told which part of the post I was short of. I am not asking you to reconsider.'],
  ['Ms Huda', 'One of those four is wrong. Not for the person — wrong in itself.'],
  ['Fares', 'Mine.'],
  ['Ms Huda', 'Why?'],
  ['Fares', 'Because "I was wondering whether I might" is so long that by the time I get to the thing, the person has had six seconds to decide to say no. And because the last sentence gives it away before they have answered.'],
  ['Samira', 'But he has been refused twice. Should he not be careful?'],
  ['Ms Huda', 'Careful is not the same as long. The most formal asking in English is **short, exact and gives a way out** — _Could I ask for twenty minutes to be told which part of the post I was short of? If that is not something you do, I quite understand._ Eighteen words and a door.'],
  ['Fares', 'That is shorter than mine and harder to say.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for permission, from the kitchen to the ministry**',
  table(['you say', 'where it belongs'], [
    ['_**Can** I…?_', 'friends, family, anybody you see every day'],
    ['_**Is it all right if** I…?_ · _**Do you mind if** I…?_', 'colleagues, neutral, the safest everyday form'],
    ['_**Could** I…?_ · _**Could** I **possibly**…?_', 'a manager, a stranger, anything at work'],
    ['_**Would it be all right if** I…?_', 'formal, written or spoken, and still short'],
  ], [2.2, 2.4]),
  '⚠ _Do you mind if I…?_ — the **no** answer means yes: _Do you mind if I come at six? — **Not at all.**_ If you are not sure, use _Is it all right if…_ instead.',
  '⚠ ~~Do you mind if I will come?~~ → _Do you mind if I **come**?_ ⚠ ~~Would it be all right if I come?~~ → _if I **came**_ — the past form after _would it be all right if_. ⚠ ~~Can I to ask?~~ → _Can I **ask**?_',
  '**Formal is short.** The commonest mistake at B1 is to think politeness is length. _I was wondering whether I might possibly be able to ask you…_ gives the listener eight seconds to prepare a refusal. _Could I ask for twenty minutes?_ does not.',
  '**Give a way out, in one clause:** _…if that is not something you do, I quite understand_. One door, at the end, after the request — never before it.',
  '⚠ Do not tell them what you are **not** asking for until they have answered. _I am not asking you to reconsider_ is a good sentence in the wrong place.',
  '**Useful phrases:** careful is not the same as long · short, exact, and gives a way out · eighteen words and a door · that is shorter than mine and harder to say.',
  '**Practise:** Ask for each one twice — of a friend, and of somebody two levels above you.  1 twenty minutes  2 to leave an hour early  3 to see a record about you  4 to be told the reason for a decision',
  '**Pronunciation.** 🔊 **Track 6.10** A request **rises** at the end; the same words with a fall are an instruction. _Could I ask for twenty minutes?_ ↗ against _Could I ask for twenty minutes._ ↘ The second one is what people hear as rudeness from learners who have the grammar right. Listen to six pairs and mark the tone.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing and the person from the card. B asks for it at the right level, in **no more than twenty words**, with a way out at the end. A says yes or no and B responds. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________, from __________.'],
  ['B', '__________ I __________? __________, if __________.'],
  ['A', '__________.'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the thing, and who from', 'Card B – the thing, and who from'], [
  ['twenty minutes — from your own manager', 'a key — from a technician you barely know'],
  ['an hour off — from somebody who has refused you', 'to see your own record — from an office'],
  ['to use a room after six — from a head of department', 'the reason for a decision — from a stranger'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** count the words in each request, then say which was easiest to refuse. There is nearly always an inverse relationship, and the class should find it rather than be told it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Ask your partner, properly, for the thing you named in 6.3 that you have been not asking for. Twenty words. They must respond as the real person would.'));
out.push(p('**b**  Swap. Then each of you say whether the real answer would be yes, and if so, how long you have been not asking.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Four of us asked for forty minutes of somebody\'s time, at four levels. Omar asked a friend: can you show me how to do that, forty minutes, Saturday. Umm Kinan asked Mr Fouad, whom she has known six years: is it all right if I ask you something — would you have forty minutes to show me the projector, in my room, not in the hall. Rasha asked her ward manager: could I ask for forty minutes of your time in the next fortnight, because there are two things on the trolley I would rather show you than write about. And Fares asked a training manager who has refused him twice: I was wondering whether I might ask for twenty minutes to be told which part of the post I was short of — I am not asking you to reconsider. Ms Huda said one of the four was wrong in itself, and Fares said his: it is so long that by the time he gets to the thing the person has had six seconds to decide to say no, and the last sentence gives it away before they have answered. Samira said he has been refused twice, should he not be careful; Ms Huda said careful is not the same as long. The most formal asking in English is short, exact and gives a way out. Could I ask for twenty minutes to be told which part of the post I was short of? If that is not something you do, I quite understand. Eighteen words and a door. Fares said that is shorter than his and harder to say._'));
out.push(p('**Listener task:** write the twenty-word version of somebody else\'s request.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same request written twice. Answer the questions.'));
out.push(model([
  '**TWENTY MINUTES** · two drafts, F. Kayyali',
  '**Draft 1.** Dear Madam, I hope this message finds you well. I was wondering whether it might possibly be at all feasible for me to request a small amount of your time, at any point in the coming weeks that might be convenient for yourself, in order that I might be given some indication as to which aspect of the post in question I may perhaps have been found to be lacking in. I do of course fully appreciate that you are extremely busy and I would not wish to impose in any way whatsoever, and I should like to make it entirely clear that I am by no means asking you to reconsider your decision. Thank you in advance for your kind consideration of this request.',
  '**Draft 2.** Dear Madam, Could I ask for twenty minutes, by telephone, to be told which part of the post I was short of? I would use it to decide what to do in the next year. If that is not something you are able to do, I quite understand and I will not write again.',
  '**The arithmetic.** Draft 1 is 134 words and asks for nothing specific. Draft 2 is 55 and asks for twenty minutes, by telephone, for a named purpose, with a door at the end. Draft 1 took fifty minutes to write; draft 2 took four.',
  '**What I had been doing in draft 1.** Apologising in advance for being refused, nine times, in different words — making it easier for her to say no before she has read what I want. A request that has already forgiven the refusal is not a request.',
]));
out.push(item('1', 'How many words is each draft, and what does each one ask for?'));
out.push(item('2', 'How long did each take to write?'));
out.push(item('3', 'What does he say he was doing in draft 1?'));
out.push(writers([
  'A written request: **the ask, in the first sentence, with a number and a channel** → **one line on what you will use it for** → **one way out, at the end** → **and nothing else at all**.',
  'Put the number and the **channel** in: _twenty minutes, by telephone_. An unbounded request is harder to grant, and the channel is half the cost.',
  'Say what you will use it for in one line. Not why you deserve it — what you will **do** with it.',
  '⚠ Count the apologies. Every advance apology forgives the refusal before it happens, and the reader feels the permission being offered. One door, at the end.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the short version of a request you have been drafting in your head (50 words or more).'));
out.push(p('Dear ______________,   Could I ask for ______________, by ______________, to ______________? I would use it to ______________.   If that is not something you ______________, I quite understand and I will ______________.   Yours ______________, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The right level for the person — _can_ · _is it all right if_ · _could_ · _would it be all right if_',
  'A number and a channel in the first sentence',
  'One line on what you will use it for',
  'One way out, at the end, and no advance apologies',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first sentence only, and the class counts the words.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **both** drafts (100 words or more in total) of a request you have not sent — the long one you have been composing in your head, and then the short one. Count the words in each and write the two numbers underneath.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s short draft as **the person who would receive it**. ★ _The sentence that makes it easy to say yes._  ✓ _One advance apology left in._  ? _How long will this take me?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out the two word-counts only, in pairs.** The long drafts run from eighty to two hundred words and the short ones from thirty to sixty. Then: who is going to send the short one?'));
out.push(hw('Send one short request this week, to one named person, with a number, a channel and one way out (50+ words). Write what you sent and what came back.'));

// ======================= 6.6 =======================
out.push(pb());
out.push(h2('6.6  Passing on a rule you did not make'));
out.push(p('**Function:** passing a rule on to somebody   ·   **Grammar:** the passive plus obligation — _is to be_ · _are not permitted_   ·   **Pronunciation:** reading an instruction without sounding like a notice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives a rule nobody in the room agrees with. Everybody passes it on to a partner in one sentence. Half the room will put themselves behind it and half will hide; your teacher will say which is which.'));
out.push(board('This has come from the ministry. I don\'t agree with it and it isn\'t mine to change.', 'who made it · what you think · what happens'));
out.push(p('**b**  Who is behind each one? **1** _You have to sign it._  **2** _They want it signed._  **3** _It is to be signed._  **4** _I need you to sign it._  **5** _Sorry — new rule._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Bassel been sent?   **A** a complaint   **B** conditions of work from a customer   **C** a tax demand'));
out.push(p('**b**  Listen again. **1** Which condition does he object to, and why?   **2** What three things does Samira say you owe somebody when you pass on a rule?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.11  Three things you owe them', [
  ['Bassel', 'My biggest customer has sent a page of conditions. Eleven of them. Ten are reasonable and one of them I have to pass on to three men tomorrow morning and I do not agree with it.'],
  ['Ms Huda', 'Which one?'],
  ['Bassel', '"All staff handling ministry work are to be present on site from 07.00 and are not permitted to leave the premises during working hours, including for prayer, without written authorisation." They have sent me a sentence that tells a man he needs written authorisation to leave a building.'],
  ['Samira', 'And you have to pass it on.'],
  ['Bassel', 'I have to pass it on or lose the work, and the work is four months of the year.'],
  ['Samira', 'Then there are three things you owe them and most people give one. Who made it. What you think of it. And what will actually happen.'],
  ['Omar', 'What will actually happen?'],
  ['Samira', 'That is the one everybody leaves out, and it is the only one anybody is listening for. If a man hears a rule and nobody tells him what happens if he breaks it, he has to guess — and he will guess either that it does not matter or that he will lose his job, and both guesses are worse than the truth.'],
  ['Bassel', 'The truth is that I am not going to stand at that door with a clipboard. The truth is that if an inspector comes and somebody is out, the work goes, and it has never happened in nineteen years.'],
  ['Ms Huda', 'Then say all three.'],
  ['Bassel', 'This has come from the ministry through Dar al-Kutub and it is not mine. I think the prayer clause is wrong and I have written to them about it and I expect nothing. Nobody is going to be watched by me. And if an inspector walks in while somebody is out, we lose four months of work, so from today somebody tells me before they leave the building — me, in a sentence, not in writing.'],
  ['Samira', 'That last part is yours and not theirs.'],
  ['Bassel', 'That last part is mine. And I am going to say so, because if I give them my rule in the ministry\'s voice I will never get it back.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Passing on an obligation**',
  table(['you say', 'who is behind it'], [
    ['_Staff **are to be** present from 07.00._', 'the document — this is the voice of a rule'],
    ['_Staff **are not permitted to** leave._', 'the same, and the only passive prohibition English has'],
    ['_**You have to** sign it._', 'outside, and you are only the messenger'],
    ['_**I need** you to sign it._', '**you** — and if it is yours, say so'],
  ], [2.3, 2.3]),
  '**_must_ and _mustn\'t_ have no passive.** That is why written rules say _are not permitted to_, _are to be_ and _may not_. When you read one of these aloud, you are reading somebody else\'s voice — so say whose.',
  '**Three things you owe anybody you pass a rule to.** **Who made it.** **What you think of it.** **What will actually happen.** Most people give the first; the third is the only one the listener is waiting for.',
  '**Separate their rule from yours.** If you add something of your own — _somebody tells me before they leave_ — say that it is yours. A rule of your own delivered in the document\'s voice can never be taken back, because you have made yourself a messenger about it.',
  '⚠ ~~It must be signed by you.~~ is cold and slightly odd in speech; ~~you are musted~~ does not exist. Say _you have to sign it_ or _I need you to sign it_, and the choice tells the listener where it came from.',
  '⚠ _are to be_ means **must** and is for writing. ⚠ ~~We are to be present?~~ as a question is wrong; ask _do we have to be there at seven?_',
  '**Useful phrases:** ten are reasonable and one of them I do not agree with · nobody is going to be watched by me · that last part is mine and not theirs · if I give them my rule in the ministry\'s voice I will never get it back.',
  '**Practise:** Pass each one on, with all three things.  1 _Staff are not permitted to use the lift._  2 _All records are to be kept for seven years._  3 _Telephones are to be left in the office._  4 _Overtime is not to be worked without authorisation._',
  '**Pronunciation.** 🔊 **Track 6.12** Reading a rule aloud: the **quoted** rule is read flat and a little faster, and your own sentences are read slower and lower. The change of speed is how a listener hears the difference between the document and you. Listen to four and mark where the speaker stops quoting.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the rule from the card. B passes it on to A as if A worked for them: who made it, what B thinks, and what will actually happen. A then asks the question the listener always wants to ask. Swap cards.'));
out.push(dlg(null, [
  ['A', '"__________."'],
  ['B', 'This has come from __________ and it is not mine. I think __________. And what will actually happen is __________.'],
  ['A', 'And if I __________?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the rules', 'Card B – the rules'], [
  ['Staff are not permitted to use the lift.', 'All records are to be kept for seven years.'],
  ['Telephones are to be left in the office.', 'Overtime is not to be worked without authorisation.'],
  ['Annual leave is not to be taken in June.', 'Staff are to be present from 07.00.'],
  ['Visitors are not permitted beyond the counter.', 'Marks are to be submitted by the Friday.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write which of the three things each speaker gave. Then count: how many gave all three? In a first run it is usually one pair out of four, and the one always missing is **what will actually happen**.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Pass on a real rule you have had to pass on, or expect to. All three things. Your partner must then ask _and if I don\'t?_ and you must answer honestly.'));
out.push(p('**b**  Swap. Then each of you say whether any of the rule you passed on was actually yours, and whether you said so.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel\'s biggest customer has sent a page of eleven conditions. Ten are reasonable and one he has to pass on to three men tomorrow morning and does not agree with: all staff handling ministry work are to be present on site from seven and are not permitted to leave the premises during working hours, including for prayer, without written authorisation. He says they have sent him a sentence that tells a man he needs written authorisation to leave a building — and that he has to pass it on or lose the work, and the work is four months of the year. Samira said there are three things he owes those men and most people give one: who made it, what you think of it, and what will actually happen. She said the third is the one everybody leaves out and the only one anybody is listening for, because a man who hears a rule and is not told what happens if he breaks it has to guess, and he will guess either that it does not matter or that he will lose his job, and both guesses are worse than the truth. Bassel said the truth is that he is not going to stand at that door with a clipboard, and that if an inspector comes while somebody is out the work goes, and it has never happened in nineteen years. So he said all three: this has come from the ministry through Dar al-Kutub and it is not his; he thinks the prayer clause is wrong and has written about it and expects nothing; nobody is going to be watched by him; and from today somebody tells him before they leave the building — him, in a sentence, not in writing. Samira said that last part is his and not theirs. He said it is, and that he is going to say so, because if he gives them his rule in the ministry\'s voice he will never get it back._'));
out.push(p('**Listener task:** write the rule somebody passed on, and which of the three things they left out.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Bassel pins up next to his two rules. Answer the questions.'));
out.push(model([
  '**THE MINISTRY WORK · WHAT HAS BEEN SENT TO US** · B. Tahhan · Tuesday',
  '**What has been sent.** Dar al-Kutub has sent eleven conditions for the ministry work, which begins next month and is about four months of our year. Ten of them are about paper, ink, dates and storage and I have no quarrel with any of them. The page is on the wall and you should read it.',
  '**The one I want to talk about.** Condition 7: "All staff handling ministry work are to be present on site from 07.00 and are not permitted to leave the premises during working hours, including for prayer, without written authorisation."',
  '**Who made it.** Not me. It has come from the ministry, through Dar al-Kutub, on their paper. I have asked them in writing to take the words "including for prayer" out of it. I expect that to be ignored and I have put a copy of my letter on the wall next to theirs.',
  '**What I think of it.** The seven o\'clock I can live with for four months. The rest of it is wrong and I would not have written it, and the part about written authorisation to leave a building is not a condition of work, it is an insult that somebody typed without reading it.',
  '**What will actually happen.** Nobody is going to be watched by me and nobody is going to be asked for anything in writing by me. I am not standing at that door. In nineteen years an inspector has walked into this shop once and he looked at the paper and not at the men.',
  '**And what I am asking, which is mine and not theirs.** From today, if you are going out of the building between seven and six, tell me. Out loud, as you go, four words. Not because of condition 7 — because if an inspector does walk in during these four months and I cannot say where three men are, we lose four months of work, and that is the whole of my year and some of yours.',
  '**If you will not do it, come and tell me and we will work something out.** I would rather lose the tender than tell a grown man he needs a chit to go and pray.',
]));
out.push(item('1', 'How many conditions are there, and how many does he object to?'));
out.push(item('2', 'What has he done about the condition, and what does he expect?'));
out.push(item('3', 'Which part is his own, and how does he mark it?'));
out.push(writers([
  'A page passing on a rule: **what has been sent, and where it is** → **the one you want to talk about, quoted in full** → **who made it** → **what you think of it** → **what will actually happen** → **and the part that is yours, marked as yours**.',
  'Quote the condition **in full**, including the words you object to. Summarising a rule you are passing on is how people discover later that you softened it.',
  'Put **what will actually happen** in its own section and be specific. _An inspector has walked in once in nineteen years_ is worth more than any reassurance.',
  '⚠ Mark your own addition in its own heading — _what I am asking, which is mine and not theirs_ — and give the real reason for it. A rule of your own in somebody else\'s voice is a rule you can never withdraw.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page passing on a rule you did not make (50 words or more).'));
out.push(p('**______________** · ______________   **What has been sent.** ______________ has sent ______________. ______________ of them are ______________ and I have no quarrel with them.   **The one I want to talk about.** "______________."   **Who made it.** Not me. It has come from ______________. I have ______________ and I expect ______________.   **What I think of it.** ______________.   **What will actually happen.** ______________. In ______________ years ______________.   **And what I am asking, which is mine and not theirs.** From today, ______________. Not because of ______________ — because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The rule quoted in full, in its own voice — _are to be_ · _are not permitted to_',
  'Who made it, what you think, what will actually happen — all three',
  'Your own addition under its own heading',
  'The real reason for your own addition, not the document\'s reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what will actually happen" section only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) for a rule you have to pass on, or have had to. If you have never passed a rule on, write it for a rule that was passed on to you badly, as it should have been written.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **one of the people it is addressed to**. ★ _The sentence that tells me where I actually stand._  ✓ _One place where your own rule is wearing their voice._  ? _And if I do not do it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who has had a rule passed on to them this year with all three things given?** Almost nobody. Then: which of the three were you given? _Who made it_, nearly always. The other two, almost never — and that is why nobody believes a notice.'));
out.push(hw('Write out a rule you have had to pass on, with all three things (50+ words), and mark clearly which part of it is yours. Then decide whether to give it to the people it is about.'));

// ======================= 6.7 =======================
out.push(pb());
out.push(h2('6.7  Review & Mediate: What do these rules actually require?'));
out.push(p('**Function:** explaining a set of workplace rules   ·   **Recycling:** Units 1–6   ·   **Exam practice:** B1 Preliminary Reading Part 4, Writing Part 2, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I must to go.  **2** He have to sign it.  **3** You haven\'t to come on Saturday.  **4** They let me to use the key.  **5** I am suppose to sign at the bed.  **6** Would it be all right if I come at six?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the page of conditions Bassel has been sent.'));
out.push(box(null, [
  '**DAR AL-KUTUB PRESS · CONDITIONS FOR MINISTRY WORK · 2026**  _(extract — conditions 5 to 11)_',
  '**5** Paper is to be stored off the floor and under cover. Humidity is to be recorded daily and the record is to be retained for two years.',
  '**6** No sheet is to be trimmed before the proof has been signed. Proofs are to be signed by a person other than the person who set the text.',
  '**7** All staff handling ministry work are to be present on site from 07.00 and are not permitted to leave the premises during working hours, including for prayer, without written authorisation.',
  '**8** Wastage is to be recorded. Make-ready sheets are not to be counted as wastage.',
  '**9** Sub-contracting is not permitted. Work is not to be moved to another premises for any part of the process.',
  '**10** The contractor is expected to maintain a record of every person who handles ministry work.',
  '**11** Compliance will be monitored. The contractor is to make the premises available for inspection without notice during working hours.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lubna and Rasha work through the page with Bassel. Which condition do they say he is already doing, which one is unenforceable, and which one is the dangerous one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.13  Seven conditions, three kinds', [
  ['Lubna', 'Sort them before you argue with any of them. Which ones are you already doing?'],
  ['Bassel', 'Six. Both halves of six have been rules in my shop since 2009 and one of them is why I still have a thumb. I did not need a ministry to tell me.'],
  ['Rasha', 'Then that one costs you nothing and you should say so first, in your reply. Which one is _supposed to_ wearing a ministry stamp?'],
  ['Bassel', 'Ten. "The contractor is **expected** to maintain a record of every person who handles the work." Expected. Not _is to_. Nobody is going to ask for that and nobody will ever read it.'],
  ['Lubna', 'Which makes it the dangerous one.'],
  ['Bassel', 'Why?'],
  ['Lubna', 'Because it is the only condition on the page that would protect **you**. If an inspector says a sheet went out of your shop, condition 10 is the thing that proves who handled it. It is written in the softest words on the page and it is the only one that is on your side.'],
  ['Rasha', 'And seven?'],
  ['Bassel', 'Seven is the one I cannot pass on without saying it is not mine.'],
  ['Rasha', 'Seven is also the one that is not enforceable and you should notice that. "Without written authorisation" — authorisation from whom? It does not say. There is no form. There is nobody named. If an inspector ever asks, you can authorise it yourself, out loud, and nothing in that sentence stops you.'],
  ['Bassel', '…Say that again.'],
  ['Rasha', 'A prohibition with no named authority in it is a prohibition you can satisfy. You are the contractor. Write one line: "Authorisation to leave the premises during working hours is given by B. Tahhan and is standing." Then condition 7 is met, for ever, on one piece of paper.'],
  ['Bassel', 'Nineteen years and I would have read that page four times and done what it said.'],
]));
out.push(sp());
out.push(box('Language box – explaining a set of rules', [
  'Sort before you argue. Every page of rules has three kinds: **the ones you already do** (say so first, they cost you nothing), **the ones that are _supposed to_** (nobody will check), and **the ones you cannot live with**.',
  'Read the **modal** in each one, not the topic: _is to be_ is must, _is expected to_ is supposed to, _is not permitted to_ is mustn\'t. A page that uses all three is telling you which ones it means.',
  'Look for the rule that **protects you**, and notice when it is written in the softest words on the page. Condition 10 is the only one on Bassel\'s side and it is the only _expected to_.',
  'Ask of every prohibition: **by whom?** _Without written authorisation_ — from whom? If no authority is named, you may be able to satisfy it yourself, in one line, for ever.',
  'Then say what you will actually do, condition by condition: already doing it · will do it · cannot do it and here is why · and _this one I can satisfy with a standing note_.',
  '⚠ Do not begin with the condition you hate. Beginning with the six you already keep is not politeness, it is evidence — it makes the one objection readable.',
  '**Useful phrases:** sort them before you argue with any of them · supposed to wearing a ministry stamp · it is written in the softest words on the page and it is the only one on your side · a prohibition with no named authority in it is a prohibition you can satisfy.',
  '**Pronunciation.** 🔊 **Track 6.14** Reading a numbered page aloud to somebody: the **number** is said clearly and a little louder, then a pause, then the condition flat and fast, then your own comment slower. _Condition seven ‖ all staff are to be present from seven ‖ that one is not mine._ Listen to four and mark the three speeds.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the pages below and does **not** show it. A reads it once, then sorts it aloud: already doing · supposed to · cannot live with. B and C must each find the rule that protects A, and the prohibition with no named authority. Change roles with the other page.'));
out.push(table(['Page A – a school\'s conditions', 'Page B – a tenancy\'s conditions'], [
  ['Marks are to be submitted by the Friday.', 'Rent is to be paid on the first of the month.'],
  ['Lesson plans are expected to be submitted weekly.', 'The tenant is expected to report faults promptly.'],
  ['Staff are not permitted to leave the site at break.', 'The tenant is not permitted to make alterations.'],
  ['Registers are to be marked at the start of the lesson.', 'Access is to be given for inspection with notice.'],
  ['Parents are not to be contacted without authorisation.', 'Repairs are not to be arranged by the tenant.'],
  ['Compliance will be reviewed in June.', 'Deposits are to be returned within thirty days.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the protective rule and the unnamed authority. On Page A the protective rule is the register marked at the start of the lesson, and the unnamed authority is in _without authorisation_; on Page B it is the thirty days, and _with notice_ says nothing about how much.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring, or write out, a real set of rules you are under — at work, in a building, on a course, in a contract. Explain it to your partner **without showing it**: sort it into the three kinds, find the rule that protects you, and find the prohibition with nobody named in it. They must ask: _which do you already do?_, _which will nobody ever check?_, _which one protects you?_ and _authorised by whom?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Bassel sorted the seven conditions. He is already doing condition 6, both halves, since 2009, and he is going to say that first in his reply because it costs him nothing and it makes the rest readable. Condition 10 — the record of every person who handles the work — is the only one written as "expected to", so nobody will ever ask for it, and Lubna pointed out that it is the only condition on the page that would protect him if an inspector ever says a sheet went out of his shop. The one he cannot pass on without disowning it is 7, the prayer clause. And Rasha found the thing in 7 that he had read four times without seeing: "without written authorisation" does not say from whom. There is no form and nobody is named, and he is the contractor — so one standing line of his own satisfies the condition for ever. He is going to write it on Thursday, keep the three things he owes his men, and keep his own rule separate from theirs. So I decided to read my own tenancy again and find out who the authority is in the clause about alterations, because I have assumed for four years that it is the landlord and the clause does not say so._'));
out.push(p('**Listener task:** which rule protects them, and who is the unnamed authority?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 4)', 7));
out.push(p('Five sentences have been removed from the text. Choose from **A–H** the sentence which fits each gap. There are **three** sentences you do not need.'));
out.push(model([
  '**TWO RULES AND NINE HABITS**  · from a magazine for small businesses',
  'Last month a printer in Damascus took down a list of eleven rules that had been pinned by his door for nineteen years and replaced it with a list of two.',
  'He had written the eleven himself, over two decades, one at a time. **(1)** ______ When he sat down to write them out properly, he found that nine of them were not rules at all.',
  'The floor is swept at seven. The tea is made at half past ten. The trimmer is wiped before it is put away. **(2)** ______ Not one of them had ever been given to anybody as an instruction; they had simply been observed, and then copied, and then obeyed.',
  'What convinced him was a question. A man who had worked beside him for four years asked, in February, whether he might sweep at the end of the day instead of at seven. **(3)** ______',
  'The two that survived are short and both of them have a reason behind them that costs money or fingers. No hand goes near the rollers while the machine is running. No proof is signed by the person who set the text. **(4)** ______',
  'He is not sure the new notice will change anything, and he says the point was not really the notice. **(5)** ______',
]));
[
  '**A**  Each of these turned out to be something he does himself, every day, without having asked anybody else to do it.',
  '**B**  He had never read them all at once.',
  '**C**  The printing trade in Syria has changed a great deal since 2009.',
  '**D**  He asked it as though he were asking for a favour, and that was the moment the list came down.',
  '**E**  His staff had asked him several times to reduce the number of rules.',
  '**F**  It was the discovery that a man had spent four years obeying something that had never been asked of him.',
  '**G**  Everything else on the page is now printed under a heading that reads: _Everything else is me._',
  '**H**  He has since written to the ministry about the conditions for its own work.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining a page of rules to somebody who has just come under them (50 words or more).'));
out.push(p('There are ______________ of them and they are three different kinds.   **The ones we already do:** ______________. Those cost us nothing and I would say so first.   **The ones nobody will ever check:** ______________ — look at the words, it says _expected to_ and not _is to_. But ______________ is the one that protects you, and that is why you should do it anyway.   **The one I cannot live with:** "______________." It is not mine. I have ______________.   And the thing nobody notices: ______________ does not say **by whom**, which means ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The three kinds sorted, with the ones you already do named first',
  'The modal read in each rule — _is to be_ · _is expected to_ · _is not permitted to_',
  'The rule that protects you, named',
  'Every prohibition tested with _by whom?_',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these. Write **100 words or more**.',
  '**Question 1 — an article.** You see this notice in an English-language magazine.',
  '_"**One rule too many.** Tell us about a rule where you work, study or live that nobody has ever explained to you — and what you found out when you asked. We will print the best articles."_',
  'Write your **article**.',
  '**Question 2 — a story.** Your English teacher has asked you to write a story. It must begin with this sentence:',
  '_"I had been obeying it for four years before I found out that nobody had ever asked me to."_',
  'Write your **story**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ go now, I keep forgetting to ring her.   a) must   b) have to   c) must to',
  '2  He ___ sign the sheet before he takes the bus out.   a) have to   b) has to   c) must to',
  '3  You ___ come in on Saturday — stay at home.   a) mustn\'t   b) don\'t have to   c) haven\'t to',
  '4  You ___ put a hand near the rollers while it is running.   a) don\'t have to   b) mustn\'t   c) aren\'t having to',
  '5  They ___ me use the bench after six.   a) let   b) let to   c) allow',
  '6  I ___ use the bench after six.   a) am allowed   b) am allowed to   c) am let to',
  '7  I am ___ to sign at the bed, and I sign at the end of the bay.   a) suppose   b) supposed   c) supposing',
  '8  Would it be all right if I ___ at six instead?   a) came   b) come   c) will come',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 2 style – matching).** 🔊 **Track 6.15** You will hear five people talking about a rule. For each speaker, choose from **A–H** what they say about it. There are three letters you do not need.'));
out.push(table(['Speakers', 'What they say about the rule'], [
  ['1  Speaker 1 ___', 'A  Nobody has ever checked it.'],
  ['2  Speaker 2 ___', 'B  It turned out to be somebody\'s habit.'],
  ['3  Speaker 3 ___', 'C  They are not allowed to do it and nobody stops them.'],
  ['4  Speaker 4 ___', 'D  It costs them nothing because they already do it.'],
  ['5  Speaker 5 ___', 'E  They broke it and have been calling it an obligation.'],
  ['', 'F  They were refused and accepted it.'],
  ['', 'G  It does not say who gives permission.'],
  ['', 'H  They have passed it on without saying it was not theirs.'],
], [1, 2]));
out.push(dlg('Track 6.15  Audio script (read after the check)', [
  ['1  Man', 'It is rule four and it says the driver must not leave the vehicle. I did leave it, on the ninth of February, and for nine years I have been telling people that I had to stop. There was no rule that made me stop. I decided to, in about four seconds, and I have been using the company\'s word for my own decision.'],
  ['2  Woman', 'Twenty-four years and I have handed in four lesson plans. It is on the sheet every September — a plan every Sunday. Not one person has ever asked me for one, mentioned one, or noticed that there are twenty years missing.'],
  ['3  Man', 'I had eleven on my list and I crossed nine of them out, because nine of them were things I do at a certain time because I like them done at that time. The floor at seven. The tea at half past ten. Hassan thought the floor was a rule for four years.'],
  ['4  Woman', 'Students are not permitted in that workshop without a member of staff, and I have been going in alone twice a week since 2024 with a key a technician never asked for back. Nobody has ever said yes to me and nobody has ever said no.'],
  ['5  Woman', 'The clause says that nobody may leave the premises without written authorisation, and I read it four times before I noticed what is not in it. It does not say authorisation from whom. There is no form and there is no name.'],
]));
out.push(p('**C  Writing.** Write out the rules of a place you work, study or live (100+ words): the real rules with their edges spelt out, a line saying that is the whole list, every habit named as somebody\'s, and — for one rule you did not make — who made it, what you think of it, and what will actually happen.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 6)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ choose _must_ or _have to_ according to who is obliging me',
  '☐ tell the difference between _don\'t have to_ and _mustn\'t_, and say which I mean',
  '☐ recognise somebody\'s habit being given in the voice of a rule',
  '☐ use _be allowed to_, _let_ and _be permitted to_ in the right places',
  '☐ say that I am _supposed to_ do something, and say who expects it and what happens',
  '☐ ask for permission at the right level for the person, in twenty words',
  '☐ pass on a rule with all three things: who made it, what I think, what will happen',
  '☐ sort a page of rules into the ones I do, the ones nobody checks, and the one I cannot live with',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: THE MID-BOOK TEST, THEN UNIT 7', [
  'The **Mid-Book Test** comes next: four papers, **sixty marks** — Reading 20 · Writing 15 · Listening 15 · Speaking 10 — on Units 1–6. Everything in it has been taught: the two present tenses, narrative past, the past perfect, the two perfects, the passive, and the six obligation shapes.',
  'Before the test: read back through the six **I can…** boxes and mark anything you ticked 😐. There are eight lines in each, forty-eight in all, and the test is built from them.',
  'Then **Unit 7 – Cause, Effect and Consequence**: _because · since · due to · so · therefore · which meant that · so … that_. And in **7.4**, Fares finds out what happened to his application.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
