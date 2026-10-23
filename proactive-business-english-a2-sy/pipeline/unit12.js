// Proactive Business English A2 · Syria Edition · Book 1 · Unit 12 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'congratulations · best wishes · regards · hospitality · welcome · greet · introduce · custom · polite · rude · thank you note · apology · apologise · excuse me · pardon · favour · gift · occasion · celebrate · gathering · Eid · condolences · handshake · formal · informal · small talk';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 12  Courtesy and Company Customs'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**12.1**  congratulate somebody, at work and outside it',
  '**12.2**  describe a custom to somebody who does not know it',
  '**12.3**  apologise properly — and know when not to',
  '**12.4**  thank somebody so that they know what for',
  '**12.5**  offer hospitality, and accept or refuse it',
  '**12.6**  close a conversation or a letter politely',
  '**12.7**  Review & Mediate: tell a colleague what an invitation and a thank-you note say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The last unit — and what it is really about', [
  'Everything in Units 1 to 11 can be learned from a book. This unit cannot, quite. Courtesy is **local**, and what is polite in Damascus is not always what is polite in London or in Dubai.',
  'So this unit does two things at once. It gives you the English — the phrases, the shapes, the words — and it asks you, again and again, **what the custom is where you are**, and how you would explain it to somebody who does not know it.',
  'That second question is the most useful skill in this book, and it is the one the examination cannot test. A person who can explain their own customs calmly, in simple English, is somebody foreigners want to work with.',
], C.lyellow, C.orange));

// ======================= CYCLE 12.1 =======================
out.push(pb());
out.push(h2('12.1  Congratulations on the new branch'));
out.push(p('**Function:** congratulating   ·   **Grammar:** fixed phrases, _congratulations on_   ·   **Pronunciation:** warmth and the stress in _congratulations_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say for each one? _a new baby · a wedding · a new job · passing an exam · a new shop_'));
out.push(p('**b**  _Congratulations ______ the new branch._ — _on_, _for_ or _to_? Say it aloud and count the syllables in **congratulations**.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has happened?   **A** a wedding   **B** a new branch   **C** a promotion'));
out.push(p('**b**  Listen again. **1** What does Mr Ayoub congratulate him on, exactly?   **2** What does Mr Tarabishi say about his son?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.1  At the new branch', [
  ['Mr Ayoub', 'Mr Tarabishi. Congratulations on the branch — and on doing it in the year everybody said not to.'],
  ['Mr Tarabishi', 'Thank you, Khaled. Twelve years and you have never once said a thing like that to me.'],
  ['Mr Ayoub', 'Twelve years and you have never once opened a branch.'],
  ['Mr Tarabishi', 'That is fair.'],
  ['Mr Ayoub', 'And congratulations on the son. He asked me three questions in ten minutes and two of them I could not answer.'],
  ['Mr Tarabishi', 'He asks me the same two. His mother says he will be difficult; I say he will be rich.'],
  ['Mr Ayoub', 'Both, probably.'],
  ['Mr Tarabishi', 'Both. Tell Nour she was right about the boxes, and tell her I said so. Young people should be told when they were right; everybody tells them when they were wrong.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – congratulating**',
  table(['Phrase', 'When'], [
    ['**Congratulations on** + noun / **-ing**', '**Congratulations on** the branch · **on opening** it.'],
    ['**Well done.**', 'something somebody worked for — exams, a job.'],
    ['**Best wishes** (for the future).', 'a wedding, a new start — warm and not too close.'],
    ['**I\'m very happy for you.**', 'personal, and meant.'],
    ['**May it bring you…**', 'a blessing; common in the region and in English too.'],
  ], [1.6, 2]),
  '⚠ **Congratulations** has an **s** and always has: never ~~congratulation~~. And it takes **on**: _congratulations **on** the branch_, not ~~for~~.',
  '⚠ Say **what** you are congratulating them on. _Congratulations_ alone is a card; _congratulations on doing it in the year everybody said not to_ is a man who has been paying attention.',
  '⚠ There is no congratulation for a death. Those words are **condolences**, and they are in 12.6.',
  '**Practise:** Congratulate each one, and say what for.',
  '1 a new branch  2 a daughter\'s results  3 twenty years in the job  4 a difficult order finished  5 a wedding',
  '**Useful phrases:**  Congratulations on…  ·  Well done.  ·  Best wishes.  ·  That is fair.  ·  He has a good head.  ·  …and tell her I said so.',
  '**Pronunciation – congratulations.** 🔊 **Track 12.2** Listen and repeat: _con-grat-u-**LA**-tions_ — five syllables, the stress on the fourth. Said with the stress at the front it is almost unrecognisable.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A congratulates B on two things — one obvious, one that shows they noticed. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. Congratulations on __________ — and on __________.'],
  ['B', 'Thank you, __________. __________ and you have never __________.'],
  ['A', '__________ and you have never __________.'],
  ['B', 'That is fair.'],
  ['A', 'And congratulations on __________. __________.'],
  ['B', '__________. __________ says __________. I say __________.'],
  ['A', 'Both, probably.'],
]));
out.push(table(['Role card 1 — a colleague\'s promotion', 'Role card 2 — a neighbour\'s shop'], [[
  'The obvious thing: the promotion. The thing that shows you noticed: she trained the person who is replacing her, before she was offered the job.',
  'The obvious thing: the new shop. The thing that shows you noticed: he kept every one of the old customers through two years of building work.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **second** congratulation — the one that shows they noticed. That is the one that is remembered.'));
out.push(PHRASE_CARD(['Congratulations on…', 'Well done.', 'Best wishes.', 'That is fair.', 'and tell her I said so', 'Both, probably.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Congratulate **three** colleagues on something real — recent or old, work or not. Each time, add a second sentence that shows you were paying attention.'));
out.push(table(['Who', 'What for', 'The sentence that showed I noticed'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.4, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I congratulated _______ on _______. I also said _______, because _______._'));
out.push(p('**Listener task:** write the congratulation you would most like to receive. Why that one?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _congratulation_ and _congratulations for_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card Sham Trading sends, and answer the questions.'));
out.push(box(null, [
  '**To Tarabishi Stores, on the opening of the Homs branch**',
  'Dear Mr Tarabishi,',
  'Congratulations on the new branch, from all of us at Sham Trading — and congratulations on opening it in a year when everybody advised against it.',
  'Twelve years ago you were a shop in the Hamidiyeh that ordered small boxes once a month. We have grown with you, and we know it.',
  'Best wishes to your son. He asked our Nour three questions last week and she has not stopped thinking about the second one.',
  'May it bring you what you worked for.',
  'Khaled Ayoub, and everybody at Mezzeh',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the second thing they congratulate him on?'));
out.push(item('2', 'What does the card say about the last twelve years?'));
out.push(item('3', 'Why mention Nour and the son\'s question?'));
out.push(box('Writer\'s box', [
  '**Shape of a congratulation card:** who it is to and what for, at the top → **congratulations on** the thing → **a second congratulation**, on something only you would notice → one line of shared history → **best wishes** to whoever else it touches → a closing blessing → signed by a **person**, with everybody else after.',
  'The second congratulation is the card. Anybody can congratulate a man on a shop; only his supplier of twelve years can congratulate him on opening it in that particular year.',
  'Include **one concrete detail** — a question somebody asked, a number, a day. It proves the card was written and not bought.',
  '⚠ Sign with a **name**, then _and everybody at ___ _. A card signed only by a company is a card from nobody.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a congratulation card for somebody real (25 words or more). Use the frame.'));
out.push(p('**To ______________, on ______________.**  Dear ______________, Congratulations on ______________, from ______________ — and congratulations on ______________.  ______________ ago you ______________. ______________.  Best wishes to ______________ for ______________. ______________.  May it bring you ______________.  ______________, and ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "The second congratulation is the best line — that is the one he will read twice. Could you add one concrete detail, so it couldn\'t have been sent to anybody else?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could this card have been sent to anybody else?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Congratulations on_ — with the **s** and the **on**', ''],
  ['A second congratulation that shows you noticed', ''],
  ['One concrete detail', ''],
  ['Signed by a person', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their second congratulation. The class says which card could not have been sent to anybody else.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a congratulation to somebody who has never been congratulated for it (35 words or more). Say what they did, why it was hard, and why nobody noticed.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _Somebody should have said this._   ✓ _Does that person know?_   ? _a question about them_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the people have ever been told? If any of them could be told this week, say so out loud.'));
out.push(box('Homework', ['Write your final text. Then **send** one of these congratulations — a message, a card, a telephone call (20+ words). Write three lines about what happened.'], C.lblue, C.navy));

// ======================= CYCLE 12.2 =======================
out.push(pb());
out.push(h2('12.2  It\'s polite to stay for the second cup'));
out.push(p('**Function:** describing a custom   ·   **Grammar:** _It\'s polite to… / It\'s not usual to…_   ·   **Pronunciation:** explaining without apologising'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish three of these about **your** culture: _It\'s polite to… · It\'s not usual to… · People always… · Nobody ever… · It depends on…_'));
out.push(p('**b**  Which customs did you only notice when a foreigner asked about them? Tell a partner.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is asking?   **A** a new colleague   **B** a foreign customer   **C** Nour'));
out.push(p('**b**  Listen again. **1** What is the custom about the second cup?   **2** What does Nour say about arriving early?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.3  The second cup', [
  ['Engineer', 'Nour, can I ask you something that is not about the order? I am here from Dubai for a week and I keep getting it wrong.'],
  ['Nour', 'Ask.'],
  ['Engineer', 'The tea. I drink one cup and then I want to leave and start working, and everybody looks at me.'],
  ['Nour', 'Ah. It\'s polite to stay for the second cup. The first cup is the greeting. The second cup is the conversation — that\'s where the business actually happens.'],
  ['Engineer', 'And the third?'],
  ['Nour', 'The third is a long friendship or a difficult negotiation. You will know which.'],
  ['Engineer', 'And arriving? In Dubai I arrive at the minute.'],
  ['Nour', 'For a company meeting, on time. For a shop or a home, ten minutes early is eager and twenty minutes late is normal — but not for Mr Ayoub, who was taught punctuality as a virtue and has never recovered.'],
  ['Engineer', 'How do I know which is which?'],
  ['Nour', 'You ask, as you just did. Nobody is ever offended by the question. People are offended by the guess.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing a custom**',
  table(['Pattern', 'Example'], [
    ['**It\'s polite to** + verb', '**It\'s polite to** stay for the second cup.'],
    ['**It\'s not usual to** + verb', '**It\'s not usual to** talk about money first.'],
    ['**People usually / always / never…**', 'People **usually** bring something small.'],
    ['**It depends on** + noun', '**It depends on** whether it is a company or a home.'],
    ['**Nobody minds if…**', '**Nobody minds if** you don\'t eat it; they mind if you don\'t take it.'],
    ['**We don\'t have that custom.**', 'A straight, polite answer when you are asked.'],
  ], [1.6, 2.2]),
  '⚠ **It\'s polite to** describes; **you must** commands. When you explain your own customs to a foreigner, describe — _it\'s polite to_ — and let them choose. People follow a custom they understand and resent a rule they don\'t.',
  '⚠ Say what it is **for**: _the first cup is the greeting, the second is the conversation_. A custom with a reason is learned once; a custom without one is forgotten by Thursday.',
  '**Practise:** Describe each custom, and say what it is for.',
  '1 tea with a visitor  2 taking your shoes off  3 bringing something when you visit  4 refusing twice before accepting  5 standing up when an older person comes in',
  '**Useful phrases:**  Can I ask you something that is not about the order?  ·  It\'s polite to…  ·  It depends on…  ·  You will know which.  ·  Nobody is offended by the question.',
  '**Pronunciation – explaining without apologising.** 🔊 **Track 12.4** Listen. The custom is described **evenly and without apology**, as a fact about the world — not defensively and not as a joke. Repeat the five.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is a visitor who keeps getting something wrong; B explains the custom, what it is for, and when it does not apply. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Can I ask you something that is not about __________? I am here from __________ and I keep getting it wrong.'],
  ['B', 'Ask.'],
  ['A', '__________. I __________ and then __________, and everybody __________.'],
  ['B', 'Ah. It\'s polite to __________. __________ is __________. __________ is __________ — that\'s where __________.'],
  ['A', 'And __________?'],
  ['B', '__________. You will know which.'],
  ['A', 'And __________? Where I come from, __________.'],
  ['B', 'It depends on __________. For __________, __________. For __________, __________ — but not for __________, who __________.'],
]));
out.push(table(['Role card 1 — a visitor to a home', 'Role card 2 — a visitor at a wedding'], [[
  'The visitor eats everything offered and is given more; refuses nothing and leaves too full. The custom: refusing once is expected, and what you leave on the plate is a message.',
  'The visitor gives the gift at the door and it disappears unopened; he thinks it was not welcome. The custom: gifts are not opened in front of the giver, which is a kindness, not indifference.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **reason** behind the custom. A custom explained without its reason is just a rule.'));
out.push(PHRASE_CARD(['It\'s polite to…', 'It\'s not usual to…', 'It depends on…', 'that\'s where…', 'You will know which.', 'Nobody minds if…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Explain **three** customs of your own culture to colleagues, as if they did not know them. For each one: what it is, what it is for, and when it does **not** apply.'));
out.push(table(['The custom', 'What it is for', 'When it does not apply'], [['', '', ''], ['', '', ''], ['', '', '']], [1.3, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It\'s polite to _______. It\'s for _______. But it doesn\'t apply when _______._'));
out.push(p('**Listener task:** write the custom you follow without ever having thought about why.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it\'s polite that you stay_ and _it depends of_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes for visiting engineers, and answer the questions.'));
out.push(box(null, [
  '**A FEW THINGS NOBODY TELLS VISITORS**   ·   Sham Trading, for colleagues coming from abroad',
  '**Tea.** Stay for the second cup. The first cup is the greeting; the second is the conversation, and that is where the business is done. Leaving after the first is not rude exactly, but you will have left before the meeting started.',
  '**Time.** For a company meeting, come on time. For a shop or a home, ten minutes early is eager and twenty minutes late is normal. If you are not sure, ask — nobody is ever offended by the question.',
  '**Money.** It is not usual to talk about price in the first ten minutes. Ask about the family, the journey, the weather. This is not delay; it is how two people decide whether they want to do business at all.',
  '**Food.** You will be offered food. Refusing once is expected and is not a refusal. If you genuinely cannot eat, take a little and leave it — leaving a little is the polite amount.',
  '**Gifts.** Something small. It will not be opened in front of you; that is a kindness, not indifference.',
  '**And the one thing that matters most:** ask. Every question of this kind is welcome here. What is not welcome is the confident guess.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What happens if you leave after the first cup?'));
out.push(item('2', 'Why is the first ten minutes not about price?'));
out.push(item('3', 'What is the one thing the page says matters most?'));
out.push(box('Writer\'s box', [
  '**Shape of a customs page:** a short heading per area → **the custom** → **what it is for** → **when it does not apply** or what to do if you cannot → a last line that gives permission to ask.',
  'Explain the **purpose**, never only the rule: _the second cup is the conversation_ · _that is how two people decide whether they want to do business at all_. The purpose is what makes a stranger willing.',
  'Give the **way out**: _if you genuinely cannot eat, take a little and leave it_. A custom with no way out makes visitors anxious, and anxious visitors are worse at business than rude ones.',
  '⚠ End with permission to ask, and mean it. The alternative to asking is guessing, and the confident guess is what actually causes offence.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a customs page for visitors to **your** workplace, town or home (25 words or more). Use the frame.'));
out.push(p('**A FEW THINGS NOBODY TELLS VISITORS**  ·  ______________.  **______________.** ______________. ______________ is ______________; ______________ is ______________.  **______________.** For ______________, ______________. For ______________, ______________. If you are not sure, ______________.  **______________.** It is not usual to ______________. ______________. This is not ______________; it is ______________.  **And the one thing that matters most:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be a visitor arriving tomorrow who is afraid of getting it wrong. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every custom has its **purpose**', ''],
  ['At least one "when it does not apply"', ''],
  ['A way out for somebody who cannot', ''],
  ['Permission to ask, at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one custom with its purpose. The class says which purpose surprised them — including about their own culture.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a custom of yours that foreigners misunderstand (35 words or more). Say what they think it means, what it actually means, and how you usually explain it.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I would have misunderstood that too._   ✓ _What do you say when it happens?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Is the misunderstanding usually about **what** people do, or about **why**?'));
out.push(box('Homework', ['Write your final text. Then write the same page for a Syrian visiting **another** country you know something about — what would nobody tell them (20+ words)?'], C.lblue, C.navy));

// ======================= CYCLE 12.3 =======================
out.push(pb());
out.push(h2('12.3  I\'m sorry for the late reply'));
out.push(p('**Function:** apologising — and knowing when not to   ·   **Grammar:** _sorry for / sorry that / I apologise_   ·   **Pronunciation:** apologising once'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Apologise for each one in **one** sentence: _a late reply · a wrong figure · a delivery nobody told them about · forgetting a name_'));
out.push(p('**b**  Which of these needs an apology, and which does not? _You are two minutes late. · You sent the wrong figure. · Your colleague sent the wrong figure. · It rained on their delivery day._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What was wrong?   **A** a figure in an invoice   **B** a late delivery   **C** a wrong address'));
out.push(p('**b**  Listen again. **1** How many times does Nour apologise?   **2** What does she say instead of apologising again?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.5  The wrong figure', [
  ['Customer', 'Miss Mansour. The invoice says four hundred and twenty. We agreed three hundred and eighty.'],
  ['Nour', 'You\'re right, and I\'m sorry — that figure is mine, not the system\'s. I used the old price list.'],
  ['Customer', 'It is the second time this year somebody has done that to me.'],
  ['Nour', 'Then I understand why you telephoned instead of writing. Here is what I\'m doing: Nadia is cancelling that invoice now and sending the correct one today, three hundred and eighty, same reference, marked as a correction so your accountant can see what happened.'],
  ['Customer', 'And if my accountant has already paid it?'],
  ['Nour', 'Then the difference comes back this week, not as credit on the next order. Money, back, to you.'],
  ['Customer', 'That is better than last time.'],
  ['Nour', 'And one more thing, which is not an apology: the old price list comes off the wall this afternoon. It has been there since January, and that is why I reached for it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – apologising**',
  table(['Phrase', 'When'], [
    ['**I\'m sorry for** + noun / **-ing**', 'I\'m sorry **for** the late reply · **for keeping** you waiting.'],
    ['**I\'m sorry that** + clause', 'I\'m sorry **that** nobody telephoned you.'],
    ['**I apologise for…**', 'more formal; in writing, or when it is serious.'],
    ['**That was my mistake.**', 'the strongest and shortest — use it when it is true.'],
    ['**I\'m sorry you had to…**', 'when the fault is the system\'s, not a person\'s.'],
  ], [1.7, 2.2]),
  '**The shape of a real apology:** **say it once** → **name what you did** → **say what you are doing about it** → **say what will stop it happening again**. Then **stop**.',
  '⚠ Apologise **once**. A second apology asks the other person to comfort you, and a third turns their complaint into your feelings. _And one more thing, which is not an apology_ is how you keep talking without apologising again.',
  '⚠ Do not apologise for things that are not yours — the weather, a road, a government office. Say _I\'m sorry you had to_ instead, which is sympathy, not guilt.',
  '**Practise:** Apologise once, then say what you are doing about it.',
  '1 a late reply  2 a wrong figure  3 a delivery nobody announced  4 forgetting a name  5 a colleague\'s mistake',
  '**Useful phrases:**  You\'re right, and I\'m sorry.  ·  That figure is mine.  ·  Here is what I\'m doing:…  ·  not as credit — money, back  ·  and one more thing, which is not an apology',
  '**Pronunciation – apologising once.** 🔊 **Track 12.6** Listen to the same apology twice: once **repeated three times**, once **said once and followed by the fix**. The second sounds like a professional; the first sounds like somebody asking to be forgiven. Repeat the second way.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A complains; B apologises **once**, fixes it, and names what will change. B may not apologise twice. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. __________ says __________. We agreed __________.'],
  ['B', 'You\'re right, and I\'m sorry — __________ is mine, not __________. I __________.'],
  ['A', 'It is the second time __________.'],
  ['B', 'Then I understand why __________. Here is what I\'m doing: __________.'],
  ['A', 'And if __________?'],
  ['B', 'Then __________, not __________.'],
  ['A', 'That is better than last time.'],
  ['B', 'And one more thing, which is not an apology: __________.'],
]));
out.push(table(['Role card 1 — a repair done twice', 'Role card 2 — a missed appointment'], [[
  'The same fault has come back after three weeks. The fix: redo it free, with a different part, this week. What changes: that part is no longer used on that machine.',
  'A patient waited two hours and was not seen. The fix: an appointment tomorrow at a named time, and the file already pulled. What changes: the list is now checked at noon, not at the end of the day.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** count the apologies. One is right. Then write what will change.'));
out.push(PHRASE_CARD(['You\'re right, and I\'m sorry.', 'That was my mistake.', 'Here is what I\'m doing:…', 'not as credit — money, back', 'which is not an apology', 'I\'m sorry you had to…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Apologise to **three** colleagues for something real or invented. One apology each, a fix, and a change. Then be the person receiving one.'));
out.push(table(['What for', 'The fix', 'What will change'], [['', '', ''], ['', '', ''], ['', '', '']], [1.3, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I apologised to _______ for _______. I said I would _______, and that _______ will change._'));
out.push(p('**Listener task:** write the apology you would have accepted. Was it the sorriest one or the most practical?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _sorry for to be late_ and _I apologise about_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two written apologies, and answer the questions.'));
out.push(box(null, [
  '**Apology 1 — from Nour**',
  'Dear Mr Darwish, You are right about invoice 0518-2 and I am sorry: the figure is mine. I used the January price list, which was still on the wall.',
  'Nadia cancelled that invoice this morning and sent the correct one — 380,000, same reference, marked as a correction. If you have already paid the 420,000, the difference comes back this week as money, not as credit on your next order.',
  'The January list is off the wall. Since it has caused this twice, we now keep one price list only, and it is dated.',
  'Nour Mansour, extension 212',
  '**Apology 2 — from another company**',
  'Dear Sir, We sincerely apologise for any inconvenience this matter may have caused. We take such matters extremely seriously and deeply regret any distress occasioned. Please accept our sincere apologies once again. Regards.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many times does Apology 1 say sorry, and how many times does Apology 2?'));
out.push(item('2', 'What does Apology 1 tell the customer that Apology 2 does not?'));
out.push(item('3', 'What has changed so that it does not happen again?'));
out.push(box('Writer\'s box', [
  '**Shape of a written apology:** agree that they are right → **say sorry once** → **name what you did**, plainly → **what has already been done**, with names and times → **what happens to the money** → **what has changed** → your name and number.',
  'Write **what you did**, not what happened: _the figure is mine. I used the January price list._ The passive — _an error occurred_ — is what Apology 2 is made of, and everybody can hear it.',
  'Money goes **back**, not onto the next order, unless they ask. Credit on the next order is an apology that benefits you.',
  '⚠ Apology 2 apologises four times and fixes nothing. It is not politeness; it is the absence of an apology, dressed up. Read it aloud to hear it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a written apology for something real or invented (25 words or more). Use the frame.'));
out.push(p('Dear ______________, You are right about ______________ and I am sorry: ______________ is mine. I ______________.  ______________ has ______________ and ______________. If ______________, ______________ comes back to you ______________, not as ______________.  ______________ has changed: ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the apologies. More than one, cross it. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Sorry **once**', ''],
  ['What **you** did, in the active voice', ''],
  ['What has already been done, with a name', ''],
  ['What has changed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what has changed" line. The class says which one they would believe.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an apology you received that was not really an apology (35 words or more). Say what was missing, and what would have fixed it.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I have had exactly that._   ✓ _What would have fixed it?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect on the board what was missing from each one. Is it usually the sorry, or the fix?'));
out.push(box('Homework', ['Write your final text. Then rewrite Apology 2 from the Reading as it should have been written, in five sentences, inventing the facts (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.4 =======================
out.push(pb());
out.push(h2('12.4  Thank you for sending it so quickly'));
out.push(p('**Function:** thanking so that they know what for   ·   **Grammar:** _thank you for_ + **-ing**   ·   **Pronunciation:** the specific thank you'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Thank somebody for each, using **-ing**: _sending it quickly · waiting · explaining it twice · coming on a Friday · not telling anybody_'));
out.push(p('**b**  Which thank-you is worth more, and why? _Thank you for everything._ or _Thank you for sending the boxes on Tuesday — it saved the Homs order._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour thanking Ms Shamsi for?   **A** a discount   **B** a quick delivery   **C** a visit'));
out.push(p('**b**  Listen again. **1** What exactly did Ms Shamsi do?   **2** What does Nour offer at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.7  Thank you for Tuesday', [
  ['Nour', 'Ms Shamsi, I\'m telephoning to say thank you, and that\'s all — there\'s no order in this call.'],
  ['Ms Shamsi', 'That is a strange telephone call. Go on.'],
  ['Nour', 'Thank you for sending the sixty boxes on Tuesday morning. You put them on a lorry that was already loaded, which I know means somebody took something off.'],
  ['Ms Shamsi', 'Somebody did. It was mine, so it was easy.'],
  ['Nour', 'It arrived at two. The Homs lorry left at three. Mr Tarabishi opened his branch on Wednesday with our boxes on the shelves, and he does not know any of this happened.'],
  ['Ms Shamsi', 'Good. That is how it should be.'],
  ['Nour', 'And thank you for telling me on Monday that you could, instead of leaving me to hope. I could plan a whole day because of one message.'],
  ['Ms Shamsi', 'You are the only person who has ever thanked me for a message.'],
  ['Nour', 'Then that is wrong, and I am going to keep doing it. If there is ever a week when we can make something easier for you, tell me. It is not a favour — I would like to owe less.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – thanking**',
  table(['Pattern', 'Example'], [
    ['**Thank you for** + **-ing**', '**Thank you for sending** it so quickly.'],
    ['**Thank you for** + noun', '**Thank you for** the message.'],
    ['**I appreciate** + noun / **-ing**', '**I appreciate** your telling me on Monday.'],
    ['**It made a difference because…**', 'Name the effect: _it saved the Homs order._'],
    ['**I know that meant…**', 'Name the cost to them: _I know somebody took something off._'],
  ], [1.6, 2.2]),
  '⚠ **Thank you for** takes **-ing**, never the plain verb: _thank you for **coming**_, not ~~for come~~.',
  '⚠ A thank-you is worth what it is **specific** about. _Thank you for everything_ costs nothing and is worth nothing. _Thank you for sending them on Tuesday morning; the lorry left at three_ is a fact somebody can be proud of.',
  '⚠ The strongest thank-you names **what it cost them**: _I know somebody took something off that lorry._ It tells them you understand what they actually did.',
  '**Practise:** Thank somebody, name the effect, and name the cost to them.',
  '1 a fast delivery  2 staying late  3 explaining something twice  4 covering your work  5 telling you bad news early',
  '**Useful phrases:**  I\'m telephoning to say thank you, and that\'s all.  ·  Thank you for…ing  ·  I know that meant…  ·  because of one message  ·  I would like to owe less.',
  '**Pronunciation – the specific thank you.** 🔊 **Track 12.8** Listen. The **specific** word carries the stress: _thank you for sending them on **TUESday**_. A flat thank-you with no stressed word is heard as a formula.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A telephones **only** to thank; B is surprised. A must name the effect and the cost. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, I\'m telephoning to say thank you, and that\'s all — there\'s no __________ in this call.'],
  ['B', 'That is a strange telephone call. Go on.'],
  ['A', 'Thank you for __________. You __________, which I know means __________.'],
  ['B', '__________. It was __________, so it was easy.'],
  ['A', '__________. __________. __________ does not know any of this happened.'],
  ['B', 'That is how it should be.'],
  ['A', 'And thank you for __________ instead of __________. I could __________ because of __________.'],
]));
out.push(table(['Role card 1 — a neighbour', 'Role card 2 — a colleague'], [[
  'She took your children to school for two weeks when you were ill, and never mentioned it. The cost: she left her own house twenty minutes early every day.',
  'He told you on Monday that a job was going wrong, instead of waiting until Thursday when it would have been undeniable. The cost: he had to admit it before he had to.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs make their call for the class – **without the book**.'));
out.push(p('**Listener task:** write the **cost** that was named. Did the person being thanked know it had been noticed?'));
out.push(PHRASE_CARD(['I\'m telephoning to say thank you.', 'Thank you for…ing', 'I know that meant…', 'because of one message', 'That is how it should be.', 'I would like to owe less.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Thank **three** colleagues for something real. Name the effect and the cost. One of them must be something that happened more than a year ago.'));
out.push(table(['Who', 'What for', 'The effect', 'What it cost them'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.3, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I thanked _______ for _______. It meant _______, and I know it cost him / her _______._'));
out.push(p('**Listener task:** write the oldest thank-you in the room. Why had it waited?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _thank you for come_ and _thanks for your helping_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the thank-you note, and answer the questions.'));
out.push(box(null, [
  '**To:** Ms Dima Shamsi, Shamsi Packaging   **From:** Nour Mansour, Sham Trading   **Subject:** Thank you for Tuesday — no order in this message',
  'Dear Ms Shamsi,',
  'Thank you for putting the sixty boxes on Tuesday morning\'s lorry. I know what that meant: the lorry was loaded, so something of yours came off it.',
  'They reached us at two and our Homs lorry left at three. Mr Tarabishi opened his branch on Wednesday with those boxes on his shelves, and has no idea any of it happened — which is how it should be.',
  'Thank you also for telling me on **Monday** that you could, rather than leaving me to hope. One message, and I could plan a whole day around it.',
  'If there is ever a week when we can make something easier at your end — an earlier order, a different day, a smaller delivery — tell me. I am not offering a favour; I would like to owe less than I do.',
  'Nour Mansour, extension 212',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the subject line promise?'));
out.push(item('2', 'What two things does Nour thank her for?'));
out.push(item('3', 'Why does Nour say "I am not offering a favour"?'));
out.push(box('Writer\'s box', [
  '**Shape of a thank-you note:** a subject line that says **thank you and nothing else is being asked** → **what they did**, exactly → **what it cost them**, if you know → **what it made possible**, with times → a **second** thank-you for something smaller that nobody thanks people for → an offer that is **not** a favour → your name and number.',
  'Say **no order in this message** at the top. A thank-you that arrives attached to a request is a request.',
  'Thank them for the **small** thing as well — the early message, the telephone call, the warning. Nobody is ever thanked for those, and they are what good suppliers actually do.',
  '⚠ The offer at the end must cost **you** something, or it is not an offer. _An earlier order, a different day, a smaller delivery_ are all inconvenient to Sham Trading, which is what makes them worth writing.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a thank-you note to somebody who has done something for you (25 words or more). Use the frame.'));
out.push(p('**Subject:** Thank you for ______________ — ______________.  Dear ______________, Thank you for ______________. I know what that meant: ______________.  ______________. ______________, and ______________ has no idea any of this happened.  Thank you also for ______________ rather than ______________. ______________ because of ______________.  If there is ever ______________, tell me. I am not offering a favour. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the person being thanked. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Nothing is asked for in the message', ''],
  ['Exactly what they did, not "everything"', ''],
  ['What it made possible, with a time or a number', ''],
  ['A second thank-you for something small', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their second thank-you — the small one. The class says which of those has probably never been said to anybody.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a thank-you that is years late (35 words or more). Say what they did, what it made possible, and why you are writing now.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _Send it._   ✓ _Can you still reach them?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these people could still be reached this week? Say the number out loud.'));
out.push(box('Homework', ['Write your final text — and if you can, **send it**. Then write three lines about what happened, or about why you did not (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.5 =======================
out.push(pb());
out.push(h2('12.5  Would you like some tea while you wait?'));
out.push(p('**Function:** offering hospitality, accepting and refusing   ·   **Grammar:** _Would you like…?_   ·   **Pronunciation:** offering twice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Offer three things to somebody waiting in your workplace. Then refuse all three, politely, as the visitor.'));
out.push(p('**b**  _some_ or _any_ in an offer? _Would you like ______ tea? · Have you got ______ tea?_ Why are they different?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is the customer waiting?   **A** his order is not ready   **B** Mr Ayoub is at the bank   **C** it is raining'));
out.push(p('**b**  Listen again. **1** How many times does Nour offer the tea?   **2** What does she offer that is not food or drink?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.9  Waiting at the counter', [
  ['Nour', 'Mr Khalil, I\'m sorry — Mr Ayoub is at the bank until eleven. Would you like to wait?'],
  ['Customer', 'I\'ll wait. I have nothing until twelve.'],
  ['Nour', 'Would you like some tea?'],
  ['Customer', 'No, thank you. I\'ve just had one.'],
  ['Nour', 'Are you sure? It\'s already made.'],
  ['Customer', 'Then yes. Thank you.'],
  ['Nour', 'And please sit in the small room, not out here — the counter is noisy and there\'s a window in there that opens.'],
  ['Customer', 'The small room. Thank you.'],
  ['Nour', 'One more thing: would you like me to telephone him? He can be back in twenty minutes if it can\'t wait.'],
  ['Customer', 'It can wait. But tell me — do you offer that to everybody, or did I look impatient?'],
  ['Nour', 'You looked like a man who drove forty minutes. That is not impatience; that is forty minutes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – offering**',
  table(['Pattern', 'Example'], [
    ['**Would you like** + noun?', '**Would you like some** tea?'],
    ['**Would you like to** + verb?', '**Would you like to** wait?'],
    ['**Would you like me to** + verb?', '**Would you like me to** telephone him?'],
    ['**Shall I** + verb?', '**Shall I** take your coat?'],
    ['Refusing', 'No, thank you. · I\'ve just had one. · That\'s very kind, but…'],
    ['Pressing, once', '**Are you sure?** It\'s already made.'],
  ], [1.5, 2.2]),
  '⚠ An **offer** takes **some**, not _any_: _Would you like **some** tea?_ (Unit 3). The question is not really a question; it is a gift.',
  '⚠ **Offer twice, not three times.** The first refusal is often a politeness; the second is a decision. Pressing a third time stops being hospitality and becomes pressure.',
  '⚠ The best offer is often **not food**: a quieter room, a chair, a telephone call, the window. Those are the offers people remember.',
  '**Practise:** Offer each one, and press once.',
  '1 tea  2 a chair  3 to telephone somebody  4 a quieter room  5 to take a message instead of waiting',
  '**Useful phrases:**  Would you like to wait?  ·  Would you like some…?  ·  Are you sure? It\'s already made.  ·  Would you like me to…?  ·  That is not impatience.',
  '**Pronunciation – offering twice.** 🔊 **Track 12.10** Listen. The first offer is **light**; the second is **warmer and a little slower**, and then it stops. Repeat the five pairs — and stop after the second.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a visitor waiting; B refuses the first offer. A offers once more and then offers something that is not food. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, I\'m sorry — __________ is __________ until __________. Would you like to wait?'],
  ['B', 'I\'ll wait. __________.'],
  ['A', 'Would you like some __________?'],
  ['B', 'No, thank you. __________.'],
  ['A', 'Are you sure? __________.'],
  ['B', 'Then yes. Thank you.'],
  ['A', 'And please __________, not __________ — __________.'],
  ['B', '__________. Thank you.'],
  ['A', 'One more thing: would you like me to __________?'],
]));
out.push(table(['Role card 1 — a clinic waiting room', 'Role card 2 — a workshop'], [[
  'The doctor is thirty minutes behind. Offers: water, a chair away from the door, to telephone the person collecting them, to come back at a named time instead of waiting.',
  'The job needs another hour. Offers: tea, the shade at the side, to telephone them when it is ready so they can go and come back, a lift to the main road.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their scene for the class – **without the book**.'));
out.push(p('**Listener task:** write the offer that was **not** food or drink. Which offer would you have wanted?'));
out.push(PHRASE_CARD(['Would you like to wait?', 'Would you like some…?', 'Are you sure?', 'Would you like me to…?', 'No, thank you.', 'That\'s very kind, but…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('In **threes**: one waits, one offers, one watches and counts. The person offering must make **four** offers, at least two of which are not food or drink. Change roles.'));
out.push(table(['Offers made', 'Accepted?', 'The best one'], [['', '', ''], ['', '', ''], ['', '', '']], [2, 1, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _When I was waiting, _______ offered me _______. The one I wanted was _______, because _______._'));
out.push(p('**Listener task:** write the offer nobody made. What do people waiting actually want?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Do you want tea?_ where an offer is meant, and _Would you like any tea?_ Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the invitation Nour writes, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — THE EID GATHERING**',
  'You are invited to the Eid gathering at Mezzeh, on **Thursday 20 June, from 11 am until about 2 pm**, in the yard — under the awning if the sun behaves, in the warehouse if it does not.',
  '**Who is invited:** everybody who works here, and your families. Children are not "welcome"; they are the point.',
  '**What there is:** food from eleven, more food at one, and tea all day. If you would like to bring something, bring it; if you would rather not, please do not.',
  '**What you do not need to do:** reply, dress up, or stay the whole time. Come for twenty minutes if that is what you have.',
  '**One thing we ask:** if you are coming, tell Nour by Monday 17 — not because of the invitation, but because of the food.',
  '**And our customers and suppliers:** Mr Tarabishi, Ms Shamsi, Mr Khalil and the drivers are invited, and have been told nobody is going to talk about an order. Anybody who does will be given a child to hold.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the invitation say about children?'));
out.push(item('2', 'What is the one thing people are asked to do, and why?'));
out.push(item('3', 'How does it stop the gathering turning into work?'));
out.push(box('Writer\'s box', [
  '**Shape of an invitation:** what, where, **when, with a start and a rough end** → **who is invited**, including families, in words that mean it → **what there is** → **what you do not need to do** → **the one thing we ask**, with the real reason → anything about guests from outside.',
  'Give an **end time**, roughly. People with children, second jobs or long journeys cannot accept an invitation that has no end.',
  '_What you do not need to do_ is the kindest section in any invitation: no reply, no dressing up, no staying. It is what lets shy people come.',
  '⚠ Give the **real reason** for the one thing you ask: _not because of the invitation, but because of the food_. A request with its real reason gets answered; a formal RSVP does not.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an invitation to something real or invented (25 words or more). Use the frame.'));
out.push(p('**______________ — ______________**  You are invited to ______________, on **______________, from ______ until about ______**, ______________.  **Who is invited:** ______________.  **What there is:** ______________. If you would like to ______________, ______________; if you would rather not, ______________.  **What you do not need to do:** ______________.  **One thing we ask:** ______________ by ______________ — not because of ______________, but because of ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be somebody shy, with children and a long journey. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A start time **and** a rough end', ''],
  ['Families included, in words that mean it', ''],
  ['A _you do not need to_ list', ''],
  ['The real reason for the one request', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _what you do not need to do_. The class says which invitation they would actually accept.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about hospitality you have received that you still remember (35 words or more). Say who, what they did, and why it stayed with you.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _That is real hospitality._   ✓ _Did you ever tell them?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Was the hospitality usually expensive, or was it attention?'));
out.push(box('Homework', ['Write your final text. Then write the invitation you would send for something you have always meant to organise (20+ words). Keep it; you may send it.'], C.lblue, C.navy));

// ======================= CYCLE 12.6 =======================
out.push(pb());
out.push(h2('12.6  Please give my regards to your family'));
out.push(p('**Function:** closing politely   ·   **Grammar:** fixed closing phrases   ·   **Pronunciation:** the closing that actually closes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you end a telephone call with: _a customer · a colleague · somebody older than you · somebody you have just met?_'));
out.push(p('**b**  Put these endings in order, from most formal to most informal: _Kind regards · Best wishes · All the best · Yours sincerely · Regards_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the last thing Mr Tarabishi says?   **A** goodbye   **B** a message for somebody   **C** an order'));
out.push(p('**b**  Listen again. **1** What does Nour say about his son?   **2** What does Mr Tarabishi ask her to tell Mr Ayoub?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.11  The end of a long telephone call', [
  ['Mr Tarabishi', 'Well. We have talked for twenty minutes about forty boxes.'],
  ['Nour', 'We have talked for twenty minutes about a new branch, and four of them were boxes.'],
  ['Mr Tarabishi', 'That is true. You have learned to talk like Khaled Ayoub. Right — I must let you work.'],
  ['Nour', 'Before you go: please give my regards to your son. Tell him the answer to his second question is that we don\'t know either, and that we have been not knowing it for twelve years.'],
  ['Mr Tarabishi', 'He will like that very much. And give my regards to Khaled — tell him I said he was right about the Tuesday delivery, and tell him I did not enjoy saying it.'],
  ['Nour', 'I\'ll tell him both halves.'],
  ['Mr Tarabishi', 'Both halves. Goodbye, Nour. And — thank you for this year. You have made this easier than it was.'],
  ['Nour', 'Goodbye, Mr Tarabishi. Eid Mubarak to you and the family.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – closing politely**',
  table(['Spoken', 'Written'], [
    ['**I must let you work / go.**', '**Kind regards** — normal at work'],
    ['**Before you go:…**', '**Best wishes** — warmer'],
    ['**Please give my regards to…**', '**Yours sincerely** — formal, to a named person'],
    ['**Thank you for your time.**', '**All the best** — informal, a colleague'],
    ['**Eid Mubarak** · **Happy new year**', '**With condolences** / **I was very sorry to hear**'],
  ], [1.8, 1.8]),
  '**_I must let you work_** is the most useful closing sentence in business English: it ends the call by being considerate of **them**, so nobody has to be the one who wanted to stop.',
  '⚠ **Before you go:…** is how you add a last thing without reopening the conversation. Use it for the thing you nearly forgot.',
  '⚠ **Give my regards to…** is not a formula. Name the person, and add something only you could say: _tell him the answer to his second question is that we don\'t know either_.',
  '**Practise:** Close each one, with a regard and one last thing.',
  '1 a long call with a customer  2 a short call with a colleague  3 a letter to a supplier  4 a message to somebody whose father has died  5 a call before Eid',
  '**Useful phrases:**  I must let you work.  ·  Before you go:…  ·  Please give my regards to…  ·  I\'ll tell him both halves.  ·  Thank you for this year.  ·  Eid Mubarak.',
  '**Pronunciation – the closing that closes.** 🔊 **Track 12.12** Listen. A closing sentence **falls and slows**. Said quickly and flatly, it sounds like another sentence is coming, and the call goes on for five more minutes. Repeat the six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A ends a long call; B adds one last thing; A closes properly, with a regard. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Well. We have talked for __________ about __________.'],
  ['A', 'We have talked for __________ about __________, and about __________ of them were __________.'],
  ['B', 'That is true. __________.'],
  ['A', 'I will take that as it was meant.'],
  ['B', 'It was meant well. Right — I must let you work.'],
  ['A', 'Before you go: please give my regards to __________. Tell him / her __________.'],
  ['B', '__________. And give my regards to __________ — tell him / her __________.'],
  ['A', 'I\'ll tell him / her __________.'],
]));
out.push(table(['Role card 1 — before a holiday', 'Role card 2 — after bad news'], [[
  'The last call before Eid. Both have children. One has a son taking exams; the other remembers and asks.',
  'B\'s father died last month. A did not know until today. A must say something honest and short, and must not make B comfort them.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their closing for the class – **without the book**.'));
out.push(p('**Listener task:** write the "give my regards" sentence. Was it a formula, or could only that person have said it?'));
out.push(PHRASE_CARD(['I must let you work.', 'Before you go:…', 'Please give my regards to…', 'I\'ll tell him both halves.', 'Thank you for this year.', 'Eid Mubarak.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Have **three** short conversations and close each one properly — with a regard to somebody specific, and one last thing. Then write down what you were asked to pass on.'));
out.push(table(['Who', 'My closing', 'What I was asked to pass on'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Pass on **one** message you were given:  _______ asked me to tell you _______._ The person it is for answers out loud.'));
out.push(p('**Listener task:** write the message you would most like somebody to pass on about you.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _give my regard_ and _yours sincerely_ to somebody unnamed. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the last letter of the year from Sham Trading, and answer the questions.'));
out.push(box(null, [
  '**To our customers, suppliers and drivers — the end of the year**',
  'Dear friends,',
  'This is the only letter we send that asks for nothing.',
  'It has been a year of long roads, closed roads, prices that moved while we were writing them down, and one invoice that went to an address missing a single letter. None of you made that easy. Several of you made it possible.',
  '**To our customers:** thank you for telephoning us when something was wrong, instead of telling somebody else. A complaint made to our face is worth more than a compliment made behind our back, and we know which is harder.',
  '**To our suppliers:** thank you for the Tuesdays. You know which Tuesdays.',
  '**To the drivers:** thank you for telephoning early rather than late, and for stopping when the road was bad and taking the shouting afterwards. You were right and we have said so.',
  'Please give our regards to your families, who put up with our deadlines without ever agreeing to them.',
  'Eid Mubarak, and may next year be easier than this one — though we have said that before.',
  'Khaled Ayoub, Nadia Sayegh, Bassel Nassif, Yasser Khalil, Hala Mourad, Fadi Saeed and Nour Mansour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the letter say it asks for?'));
out.push(item('2', 'What does it thank the customers for, exactly?'));
out.push(item('3', 'Why is it signed with seven names rather than the company\'s?'));
out.push(box('Writer\'s box', [
  '**Shape of an end-of-year letter:** say it **asks for nothing** → one honest sentence about the year, including the hard parts → a short paragraph for **each group**, thanking them for something **specific and slightly uncomfortable** → regards to the families → a wish → **every name**.',
  'Thank people for the difficult things: _telephoning us when something was wrong_ · _the ones who stopped when the road was bad and took the shouting afterwards_. Anybody can thank a customer for their custom.',
  'Admit the year. _An invoice that went to an address missing a single letter_ — naming your own worst week is what makes the rest believable.',
  '⚠ Sign it with **all the names**, in full. A letter from "the management" is from nobody, and this is the one letter in the year that should be from people.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an end-of-year letter from your workplace, team or family (25 words or more). Use the frame.'));
out.push(p('**To ______________ — ______________**  Dear ______________, This is the only letter we send that asks for nothing.  It has been a year of ______________, ______________, and ______________. None of you made that easy; several of you made it possible.  **To ______________:** thank you for ______________.  **To ______________:** thank you for ______________.  Please give our regards to ______________. ______________, and may ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be one of the people it is addressed to. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['It asks for nothing', ''],
  ['The year is described honestly, hard parts included', ''],
  ['Each thank-you is specific and a little uncomfortable', ''],
  ['Signed by people, with names', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one of their thank-you paragraphs. The class says which one they would keep.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the letter you would send to the people who made this year possible for you (35 words or more). Ask for nothing. Name at least two of them.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter. Write on a slip:  ★ _I would keep this letter._   ✓ _Is there anybody missing?_   ? _a question about one of them_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the letters on the wall and read them in silence. Then decide, as a class, whether anybody is going to send theirs.'));
out.push(box('Homework', ['Write your final letter. Then write the names of three people who should get one from you, and the one sentence each of them should read (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.7 =======================
out.push(pb());
out.push(h2('12.7  Review & Mediate: the invitation and the thank-you note'));
out.push(p('**Function:** telling a colleague what an invitation and a thank-you note say — and what they mean   ·   **Review:** congratulating · customs · apologising · thanking · offering · closing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _Congratulations ______ the new branch._ — and how many syllables?',
  '**2** What makes a custom easy to follow, besides knowing it?',
  '**3** How many times should you apologise, and what comes after?',
  '**4** What makes a thank-you worth something?',
  '**5** The sentence that ends a long telephone call kindly.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Fadi worried about?   **A** whether he is really invited   **B** what to wear   **C** what to bring'));
out.push(p('**b**  Listen again. **1** What does "families" mean in this invitation?   **2** What does Nour say about the one thing they ask?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.13  "Does this mean me?"', [
  ['Fadi', 'Nour. The Eid paper on the board. It says customers and suppliers. Does it mean the drivers as well, or is that just something people write?'],
  ['Nour', 'It means you. Your name is on the bottom of the letter, Fadi. All seven of us are on it.'],
  ['Fadi', 'And "and your families"? Everybody writes that.'],
  ['Nour', 'Everybody writes it and here it means it. Look at the line after: _children are not welcome; they are the point._ Somebody wrote that on purpose. There will be more children than adults and Abu Yasser has already asked where the ball is.'],
  ['Fadi', 'Four children is a lot to bring to a company thing.'],
  ['Nour', 'Four children is four more reasons they want you there. And read on: you don\'t have to reply, dress up or stay. Come for twenty minutes if that\'s what you have.'],
  ['Fadi', 'Then what is the one thing they ask?'],
  ['Nour', 'Tell me by Monday how many. Not for the invitation — for the food.'],
  ['Fadi', 'Seven of us. I\'ll tell you on Sunday.'],
  ['Nour', 'Seven. I\'ll write it down now, before I forget — which is the other thing I\'ve learned this year.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a social document, where the meaning is between the lines**',
  table(['To answer the real question', 'To show the evidence', 'To free them'], [
    ['It means you. Your name is ___ .', 'Look at the line after: ___ .', 'You don\'t have to ___ , ___ or ___ .'],
    ['Everybody writes it, and here it means it.', 'Somebody wrote that on purpose.', 'Come for ___ if that\'s what you have.'],
  ], [1.6, 1.8, 1.8]),
  '⚠ The question somebody asks about an invitation is almost never the question they mean. _Does it include drivers?_ means _am I really wanted?_ Answer the second one.',
  '⚠ **Point at the evidence in the document.** _Look at the line after_ · _your name is on the bottom_. A reassurance with nothing behind it is not believed; a sentence on the page is.',
  '⚠ End with what they **do not** have to do. Most people refuse an invitation because of the obligations they imagine, not the event.',
  '**Practise:** The invitation says: _Staff and their families are cordially invited. RSVP by 17 June._ Say it in easy English to somebody who is not sure it means them.',
  '**Useful phrases:**  It means you.  ·  Everybody writes it; here it means it.  ·  Look at the line after.  ·  Somebody wrote that on purpose.  ·  You don\'t have to…  ·  if that\'s what you have',
  '**Pronunciation – reassurance.** 🔊 **Track 12.14** Listen. The reassuring sentence is **short, flat and certain** — _It means you._ Said with a rise it becomes a question; said slowly it sounds like pity. Repeat the four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads document 1 silently; B asks the question underneath their question. A answers it, with the evidence. Then swap.'));
out.push(table(['Document 1 — for A', 'Document 2 — for B'], [[
  '**INVITATION.** _Staff and their families are cordially invited to the annual gathering on Thursday 20 June, 11.00–14.00. Attendance is entirely voluntary. Refreshments will be provided. Kindly RSVP to the office by 17 June for catering purposes._  **B asks:** does "staff" mean the warehouse as well, or only the office?',
  '**NOTE OF THANKS.** _The management wishes to record its appreciation of the efforts of all personnel during a demanding period. Your professionalism has not gone unnoticed._  **A asks:** is that about us, or is it about everybody? Did anybody actually notice anything?',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the question underneath the question. Then say whether the answer had evidence in it.'));
out.push(PHRASE_CARD(['It means you.', 'here it means it', 'Look at the line after.', 'on purpose', 'You don\'t have to…', 'if that\'s what you have']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a social document in formal English — an invitation, a note of thanks, a notice. Read it silently. Then explain to **two** colleagues what it really means for them.'));
out.push(table(['Who I told', 'The question under their question', 'The evidence I pointed at'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the document you mediated. This is the **twelfth** unit of this book, and the last — the mediation task has come back in every one of them, and this is the one where the meaning was not in the words at all.'));
out.push(p('_It\'s a ______. He / She asked ______, but the real question was ______. I answered it by pointing at ______._'));
out.push(p('**Listener task:** add the last office words to the class list from Units 7 to 11, and read the whole list out.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together — the last board clinic of the book.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Staff and their families are invited. Attendance is voluntary._   **A** You must come. **B** You can come, with your family, if you want to. **C** Families are not invited.',
  '**2**  _Kindly RSVP by 17 June for catering purposes._   **A** Say whether you are coming, by the 17th. **B** Pay by the 17th. **C** Bring food.',
  '**3**  _Congratulations on the new branch — and on opening it this year._   **A** One congratulation. **B** Two: the branch, and the timing. **C** An apology.',
  '**4**  _I used the January price list. The correct invoice is sent._   **A** The customer made a mistake. **B** The writer names their own mistake and has fixed it. **C** Nothing has been done.',
  '**5**  _Would you like some tea while you wait?_   **A** An offer. **B** A question about whether tea exists. **C** An order.',
  '**6**  _Please give my regards to your son._   **A** Say hello to him from me. **B** Send him something. **C** Telephone him.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a **social** message, the three points are usually: **the occasion** · **what you will do** · **one thing that is personal to them**.',
  '⚠ This is the last exam practice in the book. Count the three points before you write and tick them off after — as you have done eleven times.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Fadi about the Eid gathering. Say: **(1)** he and his family are invited, **(2)** it is Thursday 20 June from eleven, **(3)** he should tell Nour by Monday how many are coming. Use the frame.'));
out.push(p('Dear Fadi, You and ______________ are invited to ______________. It\'s on ______________ from ______. Please ______________ by ______________ — ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  He and his family are invited', ''], ['2  Thursday 20 June from eleven', ''], ['3  Tell Nour by Monday, how many', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('Write a message to somebody you want to thank for this year (25 words or more). Say: **(1)** what you are thanking them for, **(2)** what it made possible, **(3)** one thing you hope for them next year.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message — and send it. Then write the **reply** you hope to get (20+ words), and compare it with the one you actually get.'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  ___ on the new branch!   a) Congratulation   b) Congratulations   c) Congratulate',
  '2  Congratulations ___ opening it this year.   a) for   b) on   c) to',
  '3  It\'s polite ___ for the second cup.   a) to stay   b) staying   c) that you stay',
  '4  I\'m sorry ___ the late reply.   a) of   b) for   c) about to',
  '5  Thank you for ___ it so quickly.   a) send   b) sent   c) sending',
  '6  Would you like ___ tea?   a) any   b) some   c) a',
  '7  Would you like me ___ him?   a) telephone   b) to telephone   c) telephoning',
  '8  Please give my ___ to your family.   a) regard   b) regards   c) regarding',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 12.15** Listen to a visitor at the counter. Complete the note.   Waiting for: ______   Offered: ______   Accepted: ______   Second offer: ______   Last offer: ______'));
out.push(dlg('Track 12.15  Audio script (read after the check)', [
  ['Nour', 'Mr Khalil, I\'m sorry — Mr Ayoub is at the bank until eleven. Would you like to wait?'],
  ['Customer', 'I\'ll wait.'],
  ['Nour', 'Would you like some tea?'],
  ['Customer', 'No, thank you. I\'ve just had one.'],
  ['Nour', 'Are you sure? It\'s already made.'],
  ['Customer', 'Then yes. Thank you.'],
  ['Nour', 'And please sit in the small room — the counter is noisy. Would you like me to telephone him?'],
]));
out.push(p('**C  Writing.** Write a short thank-you message (25+ words). Say exactly what they did, what it made possible, and one thing you are not asking for.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 12)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ congratulate somebody on the obvious thing **and** on the thing I noticed',
  '☐ describe a custom with its purpose, and say when it does not apply',
  '☐ apologise once, fix it, and say what will change',
  '☐ thank somebody so specifically that it could not have been sent to anybody else',
  '☐ offer hospitality twice, and offer the thing that is not food',
  '☐ close a conversation or a letter so that it actually closes',
  '☐ tell a colleague what a social document means for them, with the evidence',
  '☐ write a congratulation card, a customs page, a written apology, a thank-you note, an invitation and an end-of-year letter',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The end of Book 1', [
  'You have finished twelve units and eighty-four cycles. You began by saying _I\'m the new assistant_ and you have ended by writing a letter that asks for nothing. The thing you have really learned is not a tense: **say the number, read it back, write it down, and telephone before people have to ask.**',
  '**Next: the End-of-Book Test** — Reading, Writing, Listening and Speaking, in the shape of the A2 Key examination. To prepare, go through the **"I can…"** box at the end of every unit and find the lines you ticked 😐. Those are your five minutes each evening this week, not the whole book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 12 · Student\'s Book');
