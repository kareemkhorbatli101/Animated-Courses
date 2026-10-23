// Proactive Business English A2 · Syria Edition · Book 2 · Unit 16 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'history · founded · ledger · handwritten · modern · old-fashioned · generation · premises · expand · merge · former · previously · nowadays · gradually · overnight · obsolete · retire · milestone · era · decade · tradition · progress · reform · typewriter · carbon copy · filing system';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 16  Then and Now'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**16.1**  say what you used to do and no longer do',
  '**16.2**  describe what has changed up to now',
  '**16.3**  compare then and now with _as … as_',
  '**16.4**  measure a period with _since_ and _for_',
  '**16.5**  describe the old way, with _there was_ and _there were_',
  '**16.6**  explain why something changed',
  '**16.7**  Review & Mediate: tell a colleague what the company history says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Why a company tells its own history', [
  'Every company you will ever work for has a history, and almost all of it is told out loud and written down nowhere. The man who knows why the stock book is kept by hand retires, and five years later nobody can say why it is done, only that it is.',
  'This unit gives you the English for that story — **used to** for what has stopped, the **present perfect** for what has changed up to now, and **because of** and **so** for the reasons. It also asks you, in every cycle, for one piece of your own workplace\'s history.',
  '⚠ Be careful with the word _progress_. Some of what changed is better, some is only newer, and a company history that says everything improved is not believed by anybody who was there. Say which is which.',
], C.lyellow, C.orange));

// ======================= CYCLE 16.1 =======================
out.push(pb());
out.push(h2('16.1  We used to write every order by hand'));
out.push(p('**Function:** talking about past habits   ·   **Grammar:** _used to_ (positive, negative, question)   ·   **Pronunciation:** _used to_ as one sound'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things your workplace used to do and does not do now. If you are new, ask somebody who is not.'));
out.push(p('**b**  Which is right? _We used to write it by hand._ / _We use to write it by hand._ / _We used to writing it by hand._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did they use to do?   **A** write every order by hand   **B** open on Saturdays   **C** deliver only in Damascus'));
out.push(p('**b**  Listen again. **1** Why did the handwritten book have two columns? **2** What does Abu Yasser say he does not miss?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.1  The old ledger', [
  ['Nour', 'Abu Yasser, what is this book? It is full and the last date is 2019.'],
  ['Abu Yasser', 'That is the order book. We used to write every order in it by hand, twice — once in the left column when it was taken, once in the right when it went out.'],
  ['Nour', 'Why twice?'],
  ['Abu Yasser', 'Because the two columns had to match at the end of the day. If they did not, something was still in the warehouse that a customer was expecting. It took eleven minutes a day and it never failed.'],
  ['Nour', 'And now?'],
  ['Abu Yasser', 'Now the screen does it, and it does fail, about once a month, and nobody notices until the customer telephones.'],
  ['Nour', 'Do you miss it?'],
  ['Abu Yasser', 'I do not miss writing in the rain with a pen that would not work. I miss the eleven minutes. We did not use to leave at the end of the day without knowing.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _used to_ for a past habit that has stopped**',
  table(['Form', 'Example'], [
    ['**used to** + verb', 'We **used to write** every order by hand.'],
    ['Negative: **didn\'t use to**', 'We **didn\'t use to leave** without knowing.'],
    ['Question: **Did you use to…?**', '**Did you use to** keep it by hand?'],
    ['For a state as well as a habit', 'There **used to be** two vans.'],
    ['Not for a single event', '~~I used to start here in 2019~~ → I **started** here in 2019.'],
  ], [1.5, 2.2]),
  '⚠ The **d** disappears in the negative and the question: _used to_ → _did**n\'t use to**_ · _**Did** you **use to**…?_ This is the commonest written mistake with the structure.',
  '⚠ _Used to_ says **and it has stopped**. If it is still true, use the present simple: _we **write** the stock figures by hand_ — because Abu Yasser still does.',
  '⚠ Do not use it for one finished event. A habit or a state, repeated over time, is what it is for.',
  '**Practise:** Make three sentences about each — one positive, one negative, one question.',
  '1 the telephone  2 the post  3 money  4 how people found you  5 what the office looked like',
  '**Useful phrases:**  We used to…  ·  We didn\'t use to…  ·  Did you use to…?  ·  There used to be…  ·  I do not miss…  ·  I miss the eleven minutes.',
  '**Pronunciation – one sound.** 🔊 **Track 16.2** _Used to_ is said /ˈjuːstə/ — one word, no gap, and the **d** is not heard. Listen and repeat six: _we used to write · we used to open · we used to go_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A finds something old; B explains what it used to be for and says what they do and do not miss. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, what is this __________? It is __________ and the last __________ is __________.'],
  ['B', 'That is the __________. We used to __________ in it, __________.'],
  ['A', 'Why __________?'],
  ['B', 'Because __________. It took __________ and it never __________.'],
  ['A', 'And now?'],
  ['B', 'Now __________, and it does __________, about __________, and nobody notices until __________.'],
  ['A', 'Do you miss it?'],
  ['B', 'I do not miss __________. I miss __________. We didn\'t use to __________.'],
]));
out.push(table(['Role card 1 — the card index', 'Role card 2 — the delivery board'], [[
  'A wooden drawer of customer cards, last written on in 2018. One card per customer, with every order on the back. It took thirty seconds a customer and it was never down. What is missed: you could see a customer\'s whole history in one hand.',
  'A painted board on the warehouse wall with chalk columns for each van. Rubbed out and rewritten every morning. What is missed: everybody in the building could see the day at a glance, including the drivers, who now have to ask.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the thing that is missed. It is never the object; it is always something the object made easy.'));
out.push(PHRASE_CARD(['We used to…', 'We didn\'t use to…', 'Did you use to…?', 'There used to be…', 'I do not miss…', 'nobody notices until…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues what the workplace used to do and stopped doing. For each one, write what is better now and what was lost.'));
out.push(table(['They used to…', 'Now', 'Better now', 'Lost'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.2, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They used to _______. Now _______. It is better because _______, but we lost _______._'));
out.push(p('**Listener task:** write down one thing the room agrees was better the old way. There is always at least one, and it is worth saying in front of everybody.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we didn\'t used to_ and _I am used to write_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the company history, and answer the questions.'));
out.push(box(null, [
  '**How we used to work — written down before everybody who remembers has gone**',
  'Until 2019 every order was written by hand in a ledger, twice: once in the left column when the order was taken and once in the right when it left the yard. The two columns were checked against each other at the end of the day. It took about eleven minutes.',
  'We used to keep a card for every customer in a wooden drawer, with the orders written on the back. You could hold a customer\'s whole history in one hand.',
  'We didn\'t use to telephone customers about delays. If a delivery was late, it was late, and the customer telephoned us.',
  'There used to be one van and one lorry, and the lorry was older than the man who drove it.',
  '**What we gained:** speed, and a record that two people in two places can read at once.',
  '**What we lost:** the eleven minutes. Nobody now leaves at the end of the day knowing that everything taken has gone out — and once a month, it has not.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Find the sentence that says why the history is being written down at all.'));
out.push(item('2', 'Which paragraph describes something that was worse in the past?'));
out.push(item('3', 'Why are "what we gained" and "what we lost" both there?'));
out.push(box('Writer\'s box', [
  '**A page of company history — the shape:** a title that says **why** it is being written → three or four paragraphs of _used to_, one habit each → **what we gained** → **what we lost**.',
  'One habit per paragraph, with the **detail that makes it real**: _twice, once in the left column and once in the right_ · _the lorry was older than the man who drove it_. Without the detail it is a list of things that are no longer done.',
  '**Include something that was worse.** _We didn\'t use to telephone customers about delays._ A history in which everything used to be better is a complaint, and nobody under forty will read to the end of it.',
  '⚠ **What we lost** is the paragraph the company needs. It is not nostalgia if it names a thing that still goes wrong — _once a month, it has not_ — and that sentence is how a lost habit gets argued for.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a page of history for your own workplace (35 words or more). Use the frame.'));
out.push(p('**How we used to ______________**   Until ______________, ______________ used to ______________. ______________.   We used to ______________. ______________.   We didn\'t use to ______________. ______________.   There used to be ______________.   **What we gained:** ______________.   **What we lost:** ______________. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says include something that was worse in the past. Everything here is better the old way — was there nothing that has improved?"',
  'Quote the box, ask the question, stop. Band 3 does not rewrite.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would somebody who was not there believe this?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_used to_, _didn\'t use to_ and _there used to be_ all present', ''],
  ['One habit per paragraph, with a real detail', ''],
  ['Something that was worse in the past', ''],
  ['A "what we lost" that names a thing that still goes wrong', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we lost". The class says which loss should be argued for at a meeting.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about how your own work used to be done, by you or by somebody before you (60 to 100 words). Say what the habit was, why it existed, what replaced it, and one thing that stopped being true.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the detail that made it real_   ✓ _used to / didn\'t use to correct?_   ? _who else remembers this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask how many of these habits are written down anywhere. The answer is almost always none, and this lesson is the first time.'));
out.push(box('Homework', ['Write your final text. Then ask the longest-serving person at your workplace one question: _what did we use to do that we do not do now?_ Write their answer down word for word (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.2 =======================
out.push(pb());
out.push(h2('16.2  The company has grown to nineteen'));
out.push(p('**Function:** describing change up to now   ·   **Grammar:** the present perfect for change   ·   **Pronunciation:** the contracted _has_ and _have_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many people worked at your company when you joined? How many now?'));
out.push(p('**b**  Which tense? _The company **grew** to nineteen._ / _The company **has grown** to nineteen._ What is the difference?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has changed most?   **A** the number of staff   **B** the number of customers   **C** the size of the warehouse'));
out.push(p('**b**  Listen again. **1** What has **not** changed? **2** What does Mr Ayoub say about the word "grown"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.3  Twenty-eight years', [
  ['Nour', 'For the history page — how many people were here when you started?'],
  ['Mr Ayoub', 'Four. My uncle, a driver, a boy who swept and me. We have grown to nineteen.'],
  ['Nour', 'And the customers?'],
  ['Mr Ayoub', 'We had about forty regular accounts. We have about two hundred and ten now. But the warehouse has not changed at all — the same four walls my uncle rented in 1998, and we have filled them twice over.'],
  ['Nour', 'Nineteen people and two hundred and ten customers. That is growth.'],
  ['Mr Ayoub', 'Write it down carefully. _Grown_ is a good word and it has hidden two bad years inside it. We were twenty-three in 2010 and eleven in 2014. Nineteen is not a straight line from four; it is the highest we have been since the year we were twenty-three.'],
  ['Nour', 'Should I put that in?'],
  ['Mr Ayoub', 'Put it in. Anybody who was here will know whether you did.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present perfect for change up to now**',
  table(['Shape', 'Example'], [
    ['**has / have** + past participle', 'The company **has grown** to nineteen.'],
    ['Negative — no change', 'The warehouse **has not changed** at all.'],
    ['**from … to …**', 'We **have gone from** four **to** nineteen.'],
    ['With a measure of time', 'We **have filled** them twice over **since 1998**.'],
    ['Against the past simple', 'We **were** twenty-three **in 2010**. (finished time)'],
  ], [1.6, 2.2]),
  '⚠ The present perfect says **the change reaches now**. _The company grew to nineteen_ invites the question "and then?"; _has grown_ says: and it is nineteen today.',
  '⚠ A finished year takes the past simple, even inside a story about change: _we **were** twenty-three in 2010_. The two tenses sit side by side in the same paragraph and each does its own job.',
  '⚠ **Watch the word that hides the shape.** _Grown_ is true and it conceals two bad years. Give the numbers at the turning points, not only at the ends — the reader can see the line then, and will believe the word.',
  '**Practise:** Describe each change with the present perfect, then add one past simple sentence with a year in it.',
  '1 staff  2 customers  3 the premises  4 what you sell  5 how people pay',
  '**Useful phrases:**  We have grown from … to …  ·  It has not changed at all.  ·  twice over  ·  it has hidden two bad years inside it  ·  the highest we have been since…',
  '**Pronunciation – the contracted perfect.** 🔊 **Track 16.4** Listen: _we**\'ve** grown · it**\'s** changed · they**\'ve** gone_. In speech the auxiliary almost vanishes and the participle carries everything. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A collects figures for a history; B gives them and names the turning point the headline hides. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For the history page — how many __________ when you started?'],
  ['B', '__________. We have grown to __________.'],
  ['A', 'And __________?'],
  ['B', 'We had about __________. We have about __________ now. But __________ has not changed at all.'],
  ['A', 'That is __________.'],
  ['B', 'Write it down carefully. __________ is a good word and it has hidden __________. We were __________ in __________ and __________ in __________.'],
]));
out.push(table(['Role card 1 — a workshop', 'Role card 2 — a shop'], [[
  'Two men in 2005, fourteen now; but nine in 2012 and three in 2016. The building has not changed. The machines have been replaced twice.',
  'One branch in 2009, three now; but four in 2013 — one closed and has not reopened. The staff has gone from five to seventeen. The opening hours have not changed since the first day.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the turning point that the headline number hides. Every real history has one.'));
out.push(PHRASE_CARD(['We have grown from … to …', 'It has not changed at all.', 'twice over', 'it has hidden…', 'the highest since…', 'Put it in.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Collect **four** numbers about your own workplace — then and now. Say each change in the present perfect, and give the one year that is not on the straight line.'));
out.push(table(['What', 'Then', 'Now', 'The year that is not on the line'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 0.8, 0.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We have gone from _______ to _______. _______ has not changed at all. In _______ we were _______, which the word "_______" does not show._'));
out.push(p('**Listener task:** write down the thing in the room that has not changed at all. Those are usually the most interesting facts of the day.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we have grown in 2010_ and _the warehouse is not changed_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second page of the history, and answer the questions.'));
out.push(box(null, [
  '**What has changed since 1998**',
  'Sham Trading was founded in 1998 by Nizar Ayoub with four people and one rented warehouse in Mezzeh.',
  '**People.** We have grown from four to nineteen. The line is not straight: we were twenty-three in 2010 and eleven in 2014. Nineteen is the highest we have been since 2010.',
  '**Customers.** From about forty regular accounts to about two hundred and ten. More than half of the forty are still with us.',
  '**Premises.** The warehouse has not changed. It is the same four walls, and we have filled them twice over. We have taken the office floor above since 2016.',
  '**How we work.** Orders have moved from the ledger to the screen; deliveries from one van to a van and a lorry; payment from cash on the day to terms for about two thirds of accounts.',
  '**What has not changed:** the opening hours, the Monday meeting, and the rule that a quantity is written with its unit.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which paragraph admits that the growth was not steady?'));
out.push(item('2', 'What fact is given about the original forty customers, and why does it matter?'));
out.push(item('3', 'Why is there a paragraph about what has **not** changed?'));
out.push(box('Writer\'s box', [
  '**A "what has changed" page — headings, not paragraphs:** People · Customers · Premises · How we work · **What has not changed**.',
  'Under each heading: the **present perfect** for the change, **from … to …** for the size of it, and — where the line is not straight — the past simple with a year.',
  '**Find one fact that proves the change is real.** _More than half of the forty are still with us_ does more than any adjective: it says the growth did not come from replacing people who left.',
  '⚠ **The last heading is the one readers remember.** A company that can name what has not changed in twenty-eight years is telling you what it is, which is what a history is for.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the "what has changed" page for your own workplace (35 words or more). Use the frame.'));
out.push(p('**What has changed since ______________**   ______________ was founded in ______________ by ______________ with ______________.   **People.** We have grown from ______________ to ______________. The line is not straight: ______________.   **Customers.** From ______________ to ______________. ______________.   **Premises.** ______________ has not changed. ______________.   **How we work.** ______________ have moved from ______________ to ______________.   **What has not changed:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks for one fact that proves the change is real. Yours says _business has improved_ — what number or fact shows it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the page admit anything that is not flattering?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Present perfect for every change', ''],
  ['_from … to …_ with real numbers', ''],
  ['A year where the line is not straight', ''],
  ['A "what has not changed" heading', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what has not changed". The class says what each one tells them about that workplace.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about how your own working life has changed since you started (60 to 100 words). Use the present perfect for the changes and the past simple for the years. Include one thing that has not changed at all.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the change that surprised me_   ✓ _perfect for change, past for years?_   ? _what has not changed?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many people have been doing the same work for longer than they thought when they started? Ask what they would have said then.'));
out.push(box('Homework', ['Write your final text. Then find the real founding year of your workplace and one number from that year. If nobody knows either, write that down — it is the most interesting answer (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.3 =======================
out.push(pb());
out.push(h2('16.3  It is not as quiet as it used to be'));
out.push(p('**Function:** comparing then and now   ·   **Grammar:** _as … as_, _not as … as_, _more … than_   ·   **Pronunciation:** the weak _as_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish three: _My work is not as ______ as it used to be._'));
out.push(p('**b**  Are these the same? _It is not as quiet as it was._ / _It is noisier than it was._ Which is softer?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they comparing?   **A** two warehouses   **B** the office then and now   **C** two customers'));
out.push(p('**b**  Listen again. **1** What is not as good as it used to be? **2** What is better, and by how much?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.5  Not as quiet as it was', [
  ['Nadia', 'It is not as quiet as it used to be. When I started there were six of us on this floor and you could hear the clock.'],
  ['Nour', 'Is that bad?'],
  ['Nadia', 'It is not as easy to concentrate. But the work is not as slow as it was either. An invoice used to take me twenty minutes and now it takes four.'],
  ['Nour', 'Five times faster.'],
  ['Nadia', 'Five times faster, and I do about four times as many. So I am not five times less busy; I am slightly more busy and a great deal less tired, which nobody would have predicted.'],
  ['Nour', 'And the mistakes?'],
  ['Nadia', 'About the same. That is the honest answer and it is not the one people expect. The screen does not make fewer mistakes than I did — it makes the same number, faster, and it makes them in a straight line so they are easier to find.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – comparing then and now**',
  table(['Shape', 'Example', 'Use'], [
    ['**as** + adjective + **as**', 'It is **as busy as** it was.', 'the same'],
    ['**not as** + adjective + **as**', 'It is **not as quiet as** it used to be.', 'less — softly'],
    ['**more / -er … than**', 'It is **noisier than** it was.', 'more — directly'],
    ['**times as many / as much**', 'I do **four times as many**.', 'a multiple'],
    ['**about the same**', 'The mistakes are **about the same**.', 'no change'],
  ], [1.4, 1.5, 1]),
  '⚠ **_Not as … as_ is softer than the comparative.** _It is not as quiet as it was_ and _it is noisier than it was_ say the same thing; the first describes, the second complains. At work the first keeps the conversation open.',
  '⚠ _as … as_ takes the **plain** adjective, never the comparative: ~~as quieter as~~.',
  '⚠ **Multiples:** _twice as many_ · _four times as many_ · _half as much_. And the useful honest shape: _five times faster, and about four times as many — so slightly more busy, not five times less._',
  '**Practise:** Compare then and now for each, once with _not as … as_ and once with a comparative.',
  '1 how busy  2 how quiet  3 how fast  4 how many mistakes  5 how tired',
  '**Useful phrases:**  not as … as it used to be  ·  four times as many  ·  about the same  ·  which nobody would have predicted  ·  that is the honest answer',
  '**Pronunciation – the weak _as_.** 🔊 **Track 16.6** Listen: _not as **quiet** as it was_ — both _as_ sounds are /əz/ and almost disappear, and the adjective carries the stress. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks what has changed; B compares then and now, including one thing that is **about the same**. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Is it __________?'],
  ['B', 'It is not as __________ as it used to be. When I started __________.'],
  ['A', 'Is that bad?'],
  ['B', 'It is not as __________. But __________ is not as __________ as it was either. __________ used to take __________ and now it takes __________.'],
  ['A', '__________.'],
  ['B', '__________, and I do about __________. So I am __________, which nobody would have predicted.'],
  ['A', 'And __________?'],
  ['B', 'About the same. That is the honest answer and it is not the one people expect.'],
]));
out.push(table(['Role card 1 — the warehouse', 'Role card 2 — the counter'], [[
  'Then: four hundred lines, one van, everything found by memory. Now: nine hundred lines, racking, a screen. Faster to find, twice as much stock, the same number of wrong picks — because the screen is only as right as what was typed into it.',
  'Then: forty customers, everybody known by name. Now: two hundred and ten, half of them unknown faces. Faster to serve, about the same number of complaints, and nothing like as pleasant.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their comparison for the class – **without the book**.'));
out.push(p('**Listener task:** write the thing that is **about the same**. It is the sentence nobody expects and it is usually the true one.'));
out.push(PHRASE_CARD(['not as … as it used to be', 'four times as many', 'about the same', 'that is the honest answer', 'which nobody would have predicted', 'easier to find']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Compare **four** things at your work, then and now. One must be _not as … as_, one a comparative, one a multiple, and one _about the same_.'));
out.push(table(['What', 'Then', 'Now', 'The sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 0.9, 0.9, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It is not as _______ as it used to be. We do about _______ as many _______. And _______ is about the same._'));
out.push(p('**Listener task:** count how many "about the same" answers were about **mistakes**. In most rooms it is most of them, and it is worth a minute of discussion.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _as quieter as_ and _more quiet than_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph from the history, and answer the questions.'));
out.push(box(null, [
  '**Is it better?**',
  'Some of it is better and some of it is only faster, and the history should say which.',
  'An invoice used to take twenty minutes and now takes four. We raise about four times as many. So the office is not five times less busy than it was — it is slightly busier and a good deal less tired.',
  'Finding stock is faster and more certain. The wrong picks are **about the same**: the screen is only as accurate as what was typed into it, and what is typed into it is still typed by a person at the end of a long day.',
  'The office is not as quiet as it was, and the work is not as easy to concentrate on. Nobody has found an answer to that and it is not a small thing.',
  'Customers are served faster and known less well. Half the forty we started with are still here; almost none of the two hundred and ten would notice if we changed the name on the door.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the first line promise, and does the paragraph keep the promise?'));
out.push(item('2', 'Which change turns out to be no change at all, and why?'));
out.push(item('3', 'Find the sentence that is the saddest, and say why it is in a company history.'));
out.push(box('Writer\'s box', [
  '**A "is it better?" paragraph — the shape:** say at the top that some of it is only faster → one change per paragraph, each with a **number** → at least one _about the same_ → at least one thing that is **worse** and has no answer.',
  'Separate **faster** from **better**. Four times as many invoices in a fifth of the time is faster; whether it is better depends on the mistakes, and the mistakes are about the same.',
  '**Say when nobody has an answer.** _Nobody has found an answer to that and it is not a small thing._ A history that solves everything on the page is not a history; it is an advertisement.',
  '⚠ The sentence about the two hundred and ten not noticing the name on the door is the most valuable in the page, because it is the one a manager can act on. Write the uncomfortable comparison; it is the only kind anybody uses.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an "is it better?" paragraph about your own work (35 words or more). Use the frame.'));
out.push(p('**Is it better?**   Some of it is ______________ and some of it is only ______________.   ______________ used to take ______________ and now takes ______________. We ______________ about ______________ as many. So ______________.   ______________ is faster. ______________ is about the same, because ______________.   ______________ is not as ______________ as it was. Nobody has found an answer to that.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks for at least one thing that is worse and has no answer. Everything here improved — is there really nothing that got worse?"',
  'If the honest answer is no, that is fine; but ask the question, because the honest answer is almost never no.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does this separate faster from better?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number with every comparison', ''],
  ['_not as … as_ used at least once', ''],
  ['Something that is about the same', ''],
  ['Something worse, with no answer offered', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the thing that is worse. The class says which one a manager could actually do something about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that is faster but not better, or better but not faster (60 to 100 words). Give the numbers for both sides and say which you would choose.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the comparison that convinced me_   ✓ _as … as correct?_   ? _which would your manager choose?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How often would the writer and the manager choose differently? That gap is worth naming out loud.'));
out.push(box('Homework', ['Write your final text. Then time yourself doing one task you do often, and compare it honestly with how long it used to take, including the checking (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.4 =======================
out.push(pb());
out.push(h2('16.4  Prices have not moved since March'));
out.push(p('**Function:** measuring a period   ·   **Grammar:** _since_ and _for_ with the present perfect, _it is … since_, _how long_   ·   **Pronunciation:** dates and long periods'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How long is it since the last price change at your work? Since the last complaint? Since the last day nothing went wrong?'));
out.push(p('**b**  Fill in: _We have been here ______ 1998._ · _We have been here ______ twenty-eight years._ · _It is six months ______ the last rise._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long have prices been steady?   **A** since January   **B** since March   **C** for a year'));
out.push(p('**b**  Listen again. **1** What has not happened since 2019? **2** Why does Nadia want the exact date, not the month?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.7  Since, not for', [
  ['Nadia', 'For the history: our list prices have not moved since the fourteenth of March.'],
  ['Nour', 'Since March. Can I write "since March"?'],
  ['Nadia', 'Write the fourteenth. In six months somebody will ask whether a quotation from the tenth was at the old price, and _March_ will not answer it.'],
  ['Nour', 'The fourteenth of March. And the supplier prices?'],
  ['Nadia', 'Those have moved four times in the same period. We have held ours for seven months, which is why the margin is thinner than it looks on the page.'],
  ['Nour', 'And the last time we put prices up across the whole list?'],
  ['Nadia', 'November 2019. It is more than six years since we did that. We have changed single lines since — twenty or thirty of them — but not the list.'],
  ['Nour', 'That is a sentence worth writing carefully.'],
  ['Nadia', 'Everything about a date is worth writing carefully. A wrong month in a history is an argument in two years.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – measuring the period**',
  table(['Shape', 'Example'], [
    ['**since** + a point', 'Prices have not moved **since 14 March**.'],
    ['**for** + a length', 'We have held them **for seven months**.'],
    ['**It is** + length + **since**…', '**It is** more than six years **since** we did that.'],
    ['**How long is it since…?**', '**How long is it since** the last rise?'],
    ['**the last time** + past simple', '**The last time** we raised the list **was** in 2019.'],
  ], [1.6, 2.2]),
  '⚠ _It is six years since we did that_ takes the **past simple** after _since_, because the doing is finished. Both halves have a job: the present perfect measures up to now, the past simple names the event.',
  '⚠ **Write the day, not the month.** _Since March_ cannot answer a question about a quotation dated the tenth. A history is written to be asked questions of, in two years, by somebody who was not there.',
  '⚠ Say the **two periods together** when they differ: _supplier prices have moved four times; we have held ours for seven months._ That pair of facts is an explanation, and either one alone is not.',
  '**Practise:** Say each in three ways — _since_, _for_, and _it is … since_.',
  '1 a price change  2 a new customer  3 a complaint  4 a staff change  5 a day with nothing wrong',
  '**Useful phrases:**  since the fourteenth of March  ·  for seven months  ·  It is more than six years since…  ·  the last time we did that was…  ·  thinner than it looks on the page',
  '**Pronunciation – dates and long periods.** 🔊 **Track 16.8** Listen: _the fourteenth of March_ · _November two thousand and nineteen_ · _more than six years_. Repeat six, and give each date its full length — a date said quickly is a date written down wrongly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A collects dates for a history; B insists on the exact one and gives the two periods side by side. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For the history: __________ have not __________ since __________.'],
  ['B', 'Since __________. Can I write "__________"?'],
  ['A', 'Write __________. In __________ somebody will ask __________, and __________ will not answer it.'],
  ['B', '__________. And __________?'],
  ['A', 'Those have __________ in the same period. We have __________ for __________, which is why __________.'],
  ['B', 'And the last time __________?'],
  ['A', '__________. It is more than __________ since we did that.'],
]));
out.push(table(['Role card 1 — the rent', 'Role card 2 — the staff'], [[
  'The yard rent has not changed since 1 February 2023. Rents on the road have risen three times in that period. The landlord has not raised it for three years; the last time he raised it was 2023, by 15%.',
  'Nobody has left since 11 September last year. Before that, four people left in eighteen months. It is fourteen months since the last person left, which is the longest since 2010.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the exact date that was insisted on, and the question it would answer in two years.'));
out.push(PHRASE_CARD(['since the fourteenth', 'for seven months', 'It is more than six years since…', 'the last time was…', 'in the same period', 'a wrong month is an argument']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **four** exact dates at your workplace — the last price change, the last new customer, the last complaint, the last change of staff. Say each one three ways.'));
out.push(table(['What', 'The exact date', 'since…', 'for…', 'It is … since'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1, 1, 1, 0.9, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We have not _______ since _______. That is _______ months. The last time was _______._'));
out.push(p('**Listener task:** write down how many people could not find an exact date for something important. It is usually most of the room, and that is the point of the cycle.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _since seven months_ and _it is six years that we did_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the dated page from the history, and answer the questions.'));
out.push(box(null, [
  '**Dates that matter — kept so that nobody has to remember them**',
  '**Founded:** 14 September 1998, Mezzeh. Four people.',
  '**List prices last changed across the whole list:** 3 November 2019. Single lines have changed since — about thirty — but the list has not.',
  '**Current list prices in force since:** 14 March. Supplier prices have moved four times in the same period, which is why the margin is thinner than the list suggests.',
  '**Office floor taken:** 1 June 2016.',
  '**Last person to leave:** 11 September last year. Fourteen months — the longest since 2010.',
  '**Last full stock count against the shelf:** 27 of last month. It has been done every month without a gap since January 2021.',
  '⚠ **If you change any line on this page, write the new date and leave the old one underneath.** A history with only the current date in it cannot be asked a question.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the page keep the old date underneath the new one?'));
out.push(item('2', 'Which two facts are put together to explain the margin?'));
out.push(item('3', 'What does "without a gap since January 2021" add that "every month" does not?'));
out.push(box('Writer\'s box', [
  '**A dates page — one line per fact:** what it is, the **exact date**, and where the line is not simple, one short clause of explanation.',
  'Use **since** for the point and **for** for the length, and give both when both are useful: _since 14 March_ … _we have held them for seven months_.',
  '**Put the two periods together when they explain each other.** Our prices held for seven months; the supplier\'s moved four times. Neither fact alone says anything about the margin; together they say all of it.',
  '⚠ **Never overwrite a date.** The instruction at the bottom of the page is the whole method: new date above, old date below. A history is a record of changes, and a record that keeps only the latest value is a setting, not a history.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a dates page for your own workplace (35 words or more). Use the frame.'));
out.push(p('**Dates that matter**   **Founded:** ______________.   **______________ last changed:** ______________. ______________ since — ______________ — but ______________.   **Current ______________ in force since:** ______________. ______________ in the same period, which is why ______________.   **Last ______________:** ______________. ______________ — the longest since ______________.   ⚠ If you change any line, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says give the exact date. Line three says _last summer_ — which day, and could you find it if somebody asked you in two years?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could this page be asked a question in two years?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An exact date on every line', ''],
  ['_since_ and _for_ each used correctly', ''],
  ['Two periods put together to explain something', ''],
  ['The instruction about not overwriting dates', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line each. The class asks a question of it. If the line cannot answer, it needs a better date.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a date at your work that nobody can remember exactly (60 to 100 words). Say what happened, roughly when, why the exact date matters now, and how you could find it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _where the date could be found_   ✓ _since / for correct?_   ? _who would know?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many cases could the date be found this week from a document that already exists? Usually most of them.'));
out.push(box('Homework', ['Write your final text. Then find one exact date your workplace does not have written down anywhere, and write it on a dates page of your own (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.5 =======================
out.push(pb());
out.push(h2('16.5  There was one van and one telephone'));
out.push(p('**Function:** describing the old way   ·   **Grammar:** past simple with _there was / there were_   ·   **Pronunciation:** _there was_ and _there were_ unstressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe the room you work in as it was on your first day. How many desks? How many telephones?'));
out.push(p('**b**  _There ______ one van._ · _There ______ two telephones._ · _There ______ not a computer in the building._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What was there in 1998?   **A** one van and one telephone   **B** two vans and a lorry   **C** no warehouse'));
out.push(p('**b**  Listen again. **1** How did customers place orders? **2** What was on the wall, and what was it for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.9  1998', [
  ['Nour', 'Describe this place in 1998. I want to put it in the history.'],
  ['Mr Ayoub', 'There was one room, this room, with four desks and one telephone on the wall. There was a warehouse behind it with a dirt floor. There were no racks; everything was in piles and you remembered where.'],
  ['Nour', 'And orders?'],
  ['Mr Ayoub', 'There was no telephone in most of the shops we sold to. Customers came in person, on a Sunday, and ordered for the fortnight. If a man did not come, you did not know whether he was ill or had gone to somebody else.'],
  ['Nour', 'What was on the wall? There is a mark where something was.'],
  ['Mr Ayoub', 'A map of the city with pins in it. One pin for every customer. My uncle put a pin in on the day a man first ordered, and he never took one out, even when they stopped. There were forty-one pins and about thirty-two customers when he died.'],
  ['Nour', 'Why did he never take them out?'],
  ['Mr Ayoub', 'He said a customer who has stopped is a customer you can visit.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing the old place**',
  table(['Shape', 'Example'], [
    ['**There was** + singular', '**There was** one room and one telephone.'],
    ['**There were** + plural', '**There were** four desks.'],
    ['Negative', '**There were no** racks. · **There was not** a computer in the building.'],
    ['Question', '**Was there** a warehouse? · **Were there** any racks?'],
    ['With _used to_', '**There used to be** a map on that wall.'],
  ], [1.5, 2.3]),
  '⚠ The verb agrees with what comes **after** it: _there **was** one room_, _there **were** four desks_. In a list, English usually agrees with the first item: _there was one telephone and four desks_.',
  '⚠ **_No_ or _not a_, not ~~no any~~.** _There were no racks_ · _there was not a computer_.',
  '⚠ Describe the old place with **numbers and one object**. _Four desks, one telephone on the wall, a dirt floor_. The object that is remembered is usually the one nobody would think to mention — the mark on the wall where the map was.',
  '**Practise:** Describe your workplace as it was, in five _there was / there were_ sentences, including one negative.',
  '**Useful phrases:**  There was one…  ·  There were no…  ·  There used to be…  ·  everything was in piles and you remembered where  ·  there is a mark where something was',
  '**Pronunciation – unstressed.** 🔊 **Track 16.10** Listen: _there was_ /ðəwəz/ · _there were_ /ðəwə/. Both almost disappear and the number carries the stress: _there were **four** desks_. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks somebody to describe the old place; B describes it and ends with the object nobody would have thought to mention. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Describe this place in __________. I want to put it in the history.'],
  ['B', 'There was __________, with __________ and __________. There was __________ behind it with __________. There were no __________; __________.'],
  ['A', 'And __________?'],
  ['B', 'There was no __________. __________ came __________ and __________. If __________, you did not know __________.'],
  ['A', 'What was __________? There is __________.'],
  ['B', '__________. __________ for every __________. __________ never __________, even when __________.'],
]));
out.push(table(['Role card 1 — a workshop in 2005', 'Role card 2 — a shop in 2009'], [[
  'One bench, two machines, a dirt yard, no sign on the door. Customers came because somebody told them. On the wall: a nail with every receipt from the first year pushed onto it.',
  'One counter, one shelf unit, a till with a handle. No telephone — the shop next door took messages. On the wall: a list of names in pencil of people allowed to buy on credit.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their description for the class – **without the book**.'));
out.push(p('**Listener task:** write the one object that was remembered. Then write what it was for. The second part is the history.'));
out.push(PHRASE_CARD(['There was one…', 'There were no…', 'everything was in piles', 'a mark where something was', 'he never took one out', 'you remembered where']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Describe your workplace as it was when **somebody else** started — ask them. Five _there was / there were_ sentences, and one object they remember that you have never seen.'));
out.push(table(['Who I asked', 'The year', 'Five things there were', 'The object'], [['', '', '', ''], ['', '', '', '']], [1, 0.7, 2.3, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In _______ there was _______ and there were _______. There were no _______. On the wall there was _______, which was for _______._'));
out.push(p('**Listener task:** write the object you would most like to see. Ask whether it still exists anywhere.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _there were a computer_ and _there was no any racks_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the description from the history, and answer the questions.'));
out.push(box(null, [
  '**The place, 1998**',
  'There was one room — the room the office is in now — with four desks and one telephone fixed to the wall. There was no second line, so a call that came while somebody was speaking simply did not arrive.',
  'Behind it there was a warehouse with a dirt floor and no racking. Stock was in piles against the wall, and the piles had an order that two people knew.',
  'There was one van. There was no lorry until 2004.',
  'Most of the shops we sold to had no telephone. Customers came in person on a Sunday and ordered for the fortnight. If a man did not come, there was no way of knowing whether he was ill or had gone elsewhere.',
  'On the wall there was a map of Damascus with a pin for every customer. Nizar Ayoub put a pin in on the day a man first ordered and never took one out; when he died there were forty-one pins and about thirty-two customers. He said a customer who has stopped is a customer you can visit.',
  'The map has gone. There is a mark on the paint where it was, and nobody has painted over it.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does the writer explain what "no second line" actually meant?'));
out.push(item('2', 'Why is the detail about the pins kept, when the map no longer exists?'));
out.push(item('3', 'What does the last line do, and would the page be worse without it?'));
out.push(box('Writer\'s box', [
  '**A description of the old place — the shape:** the room, with numbers → what was behind or around it → what there was **not**, and what that meant in practice → how customers reached you → **one object**, with its story → what is left of it now.',
  '**Say what the absence meant.** _There was no second line, so a call that came while somebody was speaking simply did not arrive._ The fact alone is a detail; the consequence is the history.',
  '**One object carries the page.** Choose the thing nobody would think to mention — the map, the nail of receipts, the pencil list of names — and give it its rule: _he never took one out._',
  '⚠ End with what is left. _There is a mark on the paint where it was, and nobody has painted over it._ That is a present-tense sentence in a past-tense page, and it is why the page is worth keeping.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Describe your workplace as it was (35 words or more). Use the frame.'));
out.push(p('**The place, ______________**   There was ______________ with ______________ and ______________. There was no ______________, so ______________.   Behind it there was ______________. ______________.   There was ______________. There was no ______________ until ______________.   ______________ came ______________ and ______________.   On the wall there was ______________. ______________, and ______________.   ______________ has gone. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says say what the absence meant. You have _there was no computer_ — what did that mean on a Thursday afternoon?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **can I see the room?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbers with _there was / there were_', ''],
  ['At least one negative, with its consequence', ''],
  ['One object, with its story', ''],
  ['A last line about what is left now', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their object. The class says which one they would put in a frame.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the first place you ever worked (60 to 100 words). Describe it with _there was_ and _there were_, say what there was not, and end with what is left of it now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the object_   ✓ _was / were agreement_   ? _is the place still there?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these places still exist? Ask what is in them now; the answers are usually worth the two minutes.'));
out.push(box('Homework', ['Write your final text. Then photograph or draw one object at your workplace that will not exist in ten years, and write three lines about what it is for (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.6 =======================
out.push(pb());
out.push(h2('16.6  We changed it because of the rain'));
out.push(p('**Function:** explaining why something changed   ·   **Grammar:** _because of_ + noun, _because_ + clause, _so_   ·   **Pronunciation:** the pause before the reason'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one rule at your work that nobody can explain. Who would know why it exists?'));
out.push(p('**b**  _because_ or _because of_? _______ the rain · _______ it was raining · _______ a mistake in 2016 · _______ somebody made a mistake'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is the stock book still kept by hand?   **A** nobody has time to change it   **B** because of one week in 2016   **C** the manager prefers it'));
out.push(p('**b**  Listen again. **1** What happened in that week? **2** What does Abu Yasser say about rules whose reason is lost?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.11  Why the book is still kept', [
  ['Nour', 'Why do we still write the stock in a book when it is on the screen?'],
  ['Abu Yasser', 'Because of one week in 2016. The system was down for nine days — not slow, down. We had no list of what was in this building, and for nine days we sold what we could see.'],
  ['Nour', 'And the book?'],
  ['Abu Yasser', 'There was no book then. We started it the week the system came back, because we had spent nine days guessing, so we decided never to be in a building we could not describe.'],
  ['Nour', 'Nobody has ever told me that.'],
  ['Abu Yasser', 'Nobody has ever asked. That is how a rule dies: not because it stops working, but because the reason stops being told and then it is just a thing an old man does.'],
  ['Nour', 'Then I am writing it down.'],
  ['Abu Yasser', 'Write the nine days. The rule is not interesting. The nine days are what makes anybody keep it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – giving the reason for a change**',
  table(['Shape', 'Takes', 'Example'], [
    ['**because of**', 'a **noun**', 'We changed it **because of the rain**.'],
    ['**because**', 'a **clause** (subject + verb)', 'We changed it **because it was raining**.'],
    ['**so**', 'the **result**', 'The system was down, **so** we started the book.'],
    ['**that is why**', 'the result, for emphasis', '**That is why** the book is still kept.'],
    ['**due to**', 'a noun (more formal)', 'The delay was **due to** the road.'],
  ], [1.2, 1.5, 2]),
  '⚠ The whole of this box is one test: **noun or clause?** _because of the rain_ · _because it was raining_. ~~Because of it was raining~~ is the commonest error in the structure and it is instantly fixable with that question.',
  '⚠ **A rule survives on its story, not on its sense.** _Write the nine days. The rule is not interesting._ When you explain a change, give the event that caused it and its size — nine days, not "a problem once".',
  '⚠ _So_ joins two whole sentences and goes in the middle. _Because_ can go at the front or the middle: _**Because** the system was down, we started the book._',
  '**Practise:** Give each change a reason, once with _because of_ and once with _because_, then join them with _so_.',
  '1 a new delivery day  2 a rule about signing  3 a change of supplier  4 a price rise  5 something you do at home',
  '**Useful phrases:**  because of one week in 2016  ·  not slow, down  ·  so we decided never to…  ·  That is how a rule dies.  ·  Write the nine days.',
  '**Pronunciation – the pause before the reason.** 🔊 **Track 16.12** Listen: _we still keep it — **because of one week in 2016**._ There is a small pause before the reason and the reason is said slowly. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks why a rule exists; B gives the event, its size, and the decision that came out of it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Why do we still __________?'],
  ['B', 'Because of __________. __________ was __________ for __________ — not __________, __________.'],
  ['A', 'And __________?'],
  ['B', 'There was no __________ then. We started it __________, because __________, so we decided never to __________.'],
  ['A', 'Nobody has ever told me that.'],
  ['B', 'Nobody has ever asked. That is how a rule dies: __________.'],
]));
out.push(table(['Role card 1 — the two-signature rule', 'Role card 2 — the Sunday cash count'], [[
  'Every collection is signed by two people. Because of a load that left in 2021 with one signature and was never traced — 1.8 million, eleven days of argument, and a customer lost.',
  'The cash drawer is counted on Sunday mornings as well as at night. Because of a fortnight in 2018 when a shortfall was found on a Friday and nobody could say which of eleven days it belonged to.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their explanation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **size** of the event — the days, the amount, the number. A reason with no size does not keep a rule alive.'));
out.push(PHRASE_CARD(['because of one week in…', 'not slow, down', 'so we decided never to…', 'Nobody has ever asked.', 'That is how a rule dies.', 'Write the nine days.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **three** rules at your workplace and ask somebody why each one exists. Write the event, its size, and the decision. If nobody knows, write that.'));
out.push(table(['The rule', 'The event', 'Its size', 'The decision'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.5, 0.9, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We do _______ because of _______. It was _______, so we decided _______._'));
out.push(p('**Listener task:** count the rules in the room whose reason nobody could find. Those are the rules that will be dropped within five years, and sometimes they should be.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _because of it was raining_ and _because the rain_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page of reasons, and answer the questions.'));
out.push(box(null, [
  '**Why we do these things — the reasons, written down**',
  '**The stock book is kept by hand as well as on the screen.** Because of nine days in June 2016 when the system was down and we had no list of what was in the building. We sold what we could see. The book was started the week the system came back, so that there would never again be a building we could not describe.',
  '**Every collection is signed by two people.** Because of a load that left in March 2021 with one signature. 1.8 million, eleven days of argument, one customer lost.',
  '**A quantity is always written with its unit.** Because of an order for "60 boxes" in 2025 that stopped a lorry in the yard for two hours. Four sizes, no size given.',
  '**Prices are read back on the telephone.** Nobody can remember why, and the two people who would know have both retired. It costs four seconds and we have kept it.',
  '⚠ If you add a rule to this page, add its event and the size of it. A rule whose story is lost becomes a thing an old man does, and it is dropped by the first person who never heard the story.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which rule has no reason, and what has been done about it?'));
out.push(item('2', 'What size is given for each event?'));
out.push(item('3', 'What does the warning at the bottom predict?'));
out.push(box('Writer\'s box', [
  '**A page of reasons — one rule per paragraph:** the rule in bold → **because of** + the event, with its date → the **size** of it → the decision that came out of it, with _so_.',
  '**Keep the rules whose reason is lost, and say so.** _Nobody can remember why… It costs four seconds and we have kept it._ That is more honest than inventing a reason, and it tells the next reader what to do if the four seconds ever becomes forty.',
  '**The size is what keeps the rule.** Nine days · 1.8 million · two hours · eleven days of argument. Without the number the paragraph is a rule with an anecdote; with it, it is a rule with evidence.',
  '⚠ The warning at the bottom is the whole page in one line: a rule whose story is lost is dropped by the first person who never heard it. Write the stories before the people who have them retire.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page of reasons for your own workplace, with three rules (35 words or more). Use the frame.'));
out.push(p('**Why we do these things**   **______________.** Because of ______________ in ______________ when ______________. ______________. ______________, so that ______________.   **______________.** Because of ______________. ______________.   **______________.** Nobody can remember why. ______________ and we have kept it.   ⚠ If you add a rule, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the size is what keeps the rule. The second one says _because of a problem with a delivery_ — how big was it, and when?"',
  'Quote, question, stop. The size is in the writer\'s memory; it just is not on the page.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would somebody who never heard the story keep this rule?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_because of_ + noun and _because_ + clause both correct', ''],
  ['A date on every event', ''],
  ['A size on every event', ''],
  ['At least one rule whose reason is honestly lost', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one rule. The class votes on whether they would keep it. The vote is nearly always decided by the size of the event.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule at your work that you think should be dropped (60 to 100 words). Say what it is, what it costs, what you think it was for, and what you would need to know before dropping it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the cost of the rule_   ✓ _because / because of correct?_   ? _who would know what it was for?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. For how many could somebody in the building answer the question this week? Those are the ones to ask about before the week ends.'));
out.push(box('Homework', ['Write your final text. Then ask about one rule at your workplace and write its reason, its date and its size. If nobody knows, write "reason lost" and the date you asked (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.7 =======================
out.push(pb());
out.push(h2('16.7  Review & Mediate: the company history'));
out.push(p('**Function:** telling a colleague what the company history says — and what it is for   ·   **Review:** used to · the perfect for change · as … as · since and for · there was / there were · because of and so'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 16 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is wrong with _we didn\'t used to_?',
  '**2** Which tense: _the company ______ to nineteen_ — grew, or has grown, and why?',
  '**3** _as quiet as_ or _as quieter as_?',
  '**4** _since_ or _for_: ______ seven months, ______ 14 March.',
  '**5** _because_ or _because of_: ______ the rain, ______ it was raining.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala think the history is for?   **A** the customers   **B** the staff   **C** the bank'));
out.push(p('**b**  Listen again. **1** What does Nour say it is really for? **2** Which part of it does Hala say she needed in her first week?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.13  "Who is this for?"', [
  ['Hala', 'Nour, this history you have written. Is it for customers? It reads like something for a wall.'],
  ['Nour', 'Read the page of reasons. Would you put that on a wall?'],
  ['Hala', '"Because of nine days in June 2016 when the system was down and we sold what we could see." No. You would not put that in front of a customer.'],
  ['Nour', 'It is for you. It is for the person who starts here in four years and is told to write the stock in a book and thinks it is an old man being an old man.'],
  ['Hala', 'In my first week I asked three people why prices are read back on the telephone and got three different answers.'],
  ['Nour', 'And the true answer is that nobody knows. It is on the page, in those words. That is the part I argued about for a week.'],
  ['Hala', 'Why argue? It is the only honest line in it.'],
  ['Nour', 'Because a history that says "nobody knows" four times is not a history, it is a shrug. Once is honest. The rest have to be found before the people who have them go.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a company history, where the question is who it is for**',
  table(['To place the document', 'To show the evidence', 'To say what it is for'], [
    ['Would you put that in front of a customer?', 'Read the page of ___ .', 'It is for the person who starts here in ___ years.'],
    ['It reads like ___ , but look at ___ .', 'It is on the page, in those words.', 'So that ___ does not become ___ .'],
  ], [1.9, 1.7, 1.8]),
  '⚠ **Most internal documents are read as though they were external.** The quickest way to settle it is one question: _would you put that in front of a customer?_ If the answer is no, the document is for the staff, and it should be read differently.',
  '⚠ **A history is for the person who is not here yet.** That is the sentence to say out loud, because it changes what a reader looks for: not what the company wants to be seen as, but what somebody will need to know when nobody is left to ask.',
  '⚠ And the honest limit: _once is honest, four times is a shrug._ A document may admit it does not know something. It may not be built on that.',
  '**Practise:** The history contains a page of reasons, a page of dates, a description of 1998 and a page called "is it better?". Explain to a new colleague which page they will need first, and why.',
  '**Useful phrases:**  Would you put that in front of a customer?  ·  It is for the person who starts here in four years.  ·  It is on the page, in those words.  ·  once is honest  ·  before the people who have them go',
  '**Pronunciation – saying an uncomfortable line plainly.** 🔊 **Track 16.14** Listen: _and the true answer is that nobody knows_ — flat, unhurried, no apology. Repeat four. An apologetic version invites an argument that the flat version does not.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has read an internal document and taken it for an external one; B places it, shows the evidence, and says what it is for. Then swap.'));
out.push(table(['Document 1 — for A', 'Document 2 — for B'], [[
  '**STAFF HANDBOOK, page 1.** _We are a small company and we make mistakes. This handbook exists so that the same mistake is not made twice by two different people. Where we do not know why a rule exists, we say so._  **B says:** you cannot write that — it makes us look bad.',
  '**QUALITY NOTE.** _Of the eleven complaints last quarter, seven were our fault, three were the supplier\'s and one was the customer\'s. The seven were: four wrong quantities, two late deliveries, one wrong address._  **A says:** who is going to see this?',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that said **who** the document is for. Most documents never say, which is why most of them are misread.'));
out.push(PHRASE_CARD(['Would you put that in front of a customer?', 'It is for the person who starts here in…', 'Read the page of…', 'in those words', 'once is honest', 'before the people who have them go']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you an internal document. Read it silently. Then explain to **two** colleagues who it is for, what evidence shows it, and which part they would need first.'));
out.push(table(['Who I told', 'Who they thought it was for', 'Who it is really for'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the document you mediated. This is the **fourth** unit of Book 2, and again the thing that matters most is not written down — here, who the document is for, which almost no internal document ever says on its own first page.'));
out.push(p('_It\'s a ______. They thought it was for ______. The evidence is ______. It is really for ______, and the part they need first is ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _handbook · premises · founded · obsolete · milestone · former_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _We used to open on Saturdays._   **A** We open on Saturdays. **B** We opened on Saturdays and we do not now. **C** We will open on Saturdays.',
  '**2**  _The company has grown from four to nineteen._   **A** It has nineteen people now. **B** It lost fifteen people. **C** It had nineteen and now has four.',
  '**3**  _It is not as quiet as it used to be._   **A** It is quieter. **B** It is noisier. **C** It is the same.',
  '**4**  _Prices have not changed since 14 March._   **A** They changed on 14 March and have been the same since. **B** They change every March. **C** They will change on 14 March.',
  '**5**  _There were no racks; everything was in piles._   **A** The racks were full. **B** There was racking and piles. **C** They had no racking at all.',
  '**6**  _The book was started because of nine days without the system._   **A** The system caused the book to stop. **B** Nine days without the system are the reason for the book. **C** The book took nine days to write.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a message about something that has changed, the three points are usually: **what it used to be** · **what it is now** · **why it changed**.',
  '⚠ _Used to_ for the old habit, the present simple for now, and _because of_ or _because_ for the reason. Three structures, one message — which is exactly what this unit has been for.',
  '⚠ Twenty-five words is enough for all three and not enough for a story. Choose the smallest change you can describe completely.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** A friend is starting work where you work. Write them a message (25 words or more). Say **one thing the company used to do**, **what it does now**, and **why it changed**.'));
out.push(p('Hi ______________, one thing before you start. We used to ______________. Now we ______________, because ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_used to_ for the old way', ''],
  ['The present simple for now', ''],
  ['_because_ or _because of_, correctly', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the first page of your own workplace\'s history (60 to 100 words). Say when it started, what there was then, what has changed, and one thing that has not.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then give your history page to the longest-serving person at your workplace and ask them for one correction. Write down what they changed (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 16 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  We ___ write every order by hand.   a) used to   b) use to   c) are used to',
  '2  We ___ to telephone customers about delays.   a) didn\'t used   b) didn\'t use   c) not used',
  '3  The company ___ from four to nineteen.   a) has grown   b) grew   c) is growing',
  '4  It is not as ___ as it used to be.   a) quieter   b) quiet   c) more quiet',
  '5  Prices have not moved ___ March.   a) for   b) since   c) from',
  '6  We have held them ___ seven months.   a) since   b) for   c) during',
  '7  There ___ no racks in 1998.   a) was   b) were   c) are',
  '8  We started the book ___ nine days without the system.   a) because   b) because of   c) so',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 16.15** Listen to a description of the old office. Complete the note.   Rooms: ______   Desks: ______   Telephones: ______   What there was not: ______   On the wall: ______'));
out.push(dlg('Track 16.15  Audio script (read after the check)', [
  ['Mr Ayoub', 'There was one room — this room — with four desks and one telephone fixed to the wall. There was no second line, so a call that came while somebody was speaking simply did not arrive.'],
  ['Mr Ayoub', 'Behind it there was a warehouse with a dirt floor. There were no racks at all; everything was in piles.'],
  ['Mr Ayoub', 'On the wall there was a map of Damascus with a pin for every customer. There were forty-one pins when my uncle died.'],
]));
out.push(p('**C  Writing.** Write about one thing your workplace used to do (35+ words): what it was, why it stopped, and one thing that was lost when it did.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 16)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what we used to do, and what we didn\'t use to do',
  '☐ describe change up to now with the present perfect, and name the year that is not on the line',
  '☐ compare then and now with _as … as_, and say what is about the same',
  '☐ measure a period with _since_ and _for_, and write the exact date',
  '☐ describe the old place with _there was_ and _there were_, and say what an absence meant',
  '☐ explain why a rule exists, with the event and its size',
  '☐ say what was gained and what was lost, in the same page',
  '☐ tell a colleague who a company document is really for',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 16 · Student\'s Book');
