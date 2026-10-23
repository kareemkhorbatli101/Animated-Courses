// Proactive Business English A2 · Syria Edition · Book 1 · Unit 8 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'last week · yesterday · the day before · ago · recently · weekly report · figures · results · target · achieve · complete · finish off · take on · deal with · sort out · go through · follow up · write up · hand in · chase · solve · fix · mistake · lesson learned · highlight · summary';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 8  Last Week at Work'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**8.1**  say what you did at work last week',
  '**8.2**  tell somebody what happened, with the verbs that do not follow the rule',
  '**8.3**  describe how a day or a week was',
  '**8.4**  ask a colleague about something that happened',
  '**8.5**  tell a short work story in the right order',
  '**8.6**  react to somebody\'s news so that they want to go on talking',
  '**8.7**  Review & Mediate: tell a colleague what the week\'s report says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The weekly report at Sham Trading — before you start', [
  'Every Thursday afternoon Nour writes **the week** on one page and leaves it on Mr Ayoub\'s desk. He reads it on Sunday morning before the Monday meeting.',
  'It has four parts: **what we did** · **the figures** · **what went wrong** · **what we need from you**. The third part is the one Mr Ayoub reads first, and he has said so.',
  'Nobody is blamed in the report. Things that went wrong are written as **what happened**, not as **who did it** — because a report that names people stops being written honestly after about three weeks.',
], C.lyellow, C.orange));

// ======================= CYCLE 8.1 =======================
out.push(pb());
out.push(h2('8.1  I checked the stock and signed the note'));
out.push(p('**Function:** saying what you did at work   ·   **Grammar:** past simple, regular verbs   ·   **Pronunciation:** the _-ed_ ending'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Write **five** things you did at work or at home yesterday. Use the past: _I ______ed…_'));
out.push(...lines(3));
out.push(p('**b**  Make the past simple: _check → ______ · call → ______ · carry → ______ · stop → ______ · arrive → ______ · tidy → _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When is this conversation?   **A** Sunday morning   **B** Thursday afternoon   **C** Monday meeting'));
out.push(p('**b**  Listen again. **1** What did Nour finish on Tuesday?   **2** What did she not finish?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.1  Writing the week', [
  ['Mr Ayoub', 'Nour, the week. Before you write it, tell me.'],
  ['Nour', 'On Sunday I checked the counter money and I walked it to the bank. On Monday I started the new stock card with Abu Yasser.'],
  ['Mr Ayoub', 'And Tuesday?'],
  ['Nour', 'Tuesday I finished the Homs order and I printed the delivery notes. The lorry loaded at six and arrived at half past nine.'],
  ['Mr Ayoub', 'Good. Wednesday?'],
  ['Nour', 'Wednesday I showed Hala the counter. We opened together at half past eight and she served fourteen customers alone in the afternoon.'],
  ['Mr Ayoub', 'Fourteen. And what didn\'t you finish?'],
  ['Nour', 'The Aleppo invoices. I started them twice and I stopped twice — the telephone.'],
  ['Mr Ayoub', 'Then write that too. A week with nothing unfinished in it is a week somebody invented.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – past simple, regular verbs**',
  table(['+', '–', '?'], [
    ['I **checked** the money.', 'I **didn\'t finish** the invoices.', '**Did** you **finish** them?'],
    ['She **started** at eight.', 'She **didn\'t work** on Friday.', '**Did** she **work** on Friday?'],
    ['They **arrived** at nine.', 'They **didn\'t arrive** late.', 'What **did** you **do** on Tuesday?'],
  ], [1.2, 1.4, 1.5]),
  '**Spelling:** work → work**ed** · arriv**e** → arriv**ed** · car**ry** → carr**ied** · st**op** → sto**pp**ed',
  '⚠ After **didn\'t** the verb goes back to its plain form: _I **didn\'t finish**_, not ~~didn\'t finished~~. This is the same rule as _doesn\'t work_ in Unit 2, and learners lose it again here.',
  '⚠ The past is the same for **everybody**: _I checked · she checked · they checked._ No **-s**, ever.',
  '**Practise:** Put the verb in the past simple.',
  '1 On Sunday I ______ (check) the counter money.  2 She ______ (not finish) the invoices.  3 ______ you ______ (print) the delivery notes?  4 The lorry ______ (arrive) at half past nine.  5 We ______ (open) together at half past eight.',
  '**Useful phrases:**  On Sunday I…  ·  Tuesday I finished…  ·  What didn\'t you finish?  ·  I started it twice and stopped twice.  ·  Write that too.',
  '**Pronunciation – the -ed ending.** 🔊 **Track 8.2** Listen and repeat. Three sounds, and only one of them adds a syllable: /t/ _checked, stopped, worked_ · /d/ _called, showed, arrived_ · **/ɪd/** _started, printed, loaded_ — after **t** or **d** only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about last week, day by day; B answers from the role card and names one unfinished thing. Then swap.'));
out.push(dlg(null, [
  ['A', 'The week. Before you write it, tell me.'],
  ['B', 'On __________ I __________ and I __________.'],
  ['A', 'And __________?'],
  ['B', '__________ I __________ the __________. The __________ __________ at __________.'],
  ['A', 'Good. __________?'],
  ['B', '__________ I __________ __________. We __________ together at __________.'],
  ['A', 'And what didn\'t you finish?'],
  ['B', 'The __________. I __________ it twice and I __________ twice.'],
]));
out.push(table(['Role card 1 — a shop week', 'Role card 2 — a workshop week'], [[
  'Sun: counted the stock, ordered bread. Mon: cleaned the fridges, changed the prices. Tue: served 90 customers, closed late. Wed: trained the new boy. Unfinished: the summer order.',
  'Sun: repaired two doors, delivered one. Mon: measured the shopfront. Tue: collected the glass, started cutting. Wed: fitted the first window. Unfinished: the second window — the glass arrived cracked.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the unfinished thing, and the reason.'));
out.push(PHRASE_CARD(['On Sunday I…', 'Tuesday I finished…', 'We opened together…', 'What didn\'t you finish?', 'I started it twice.', 'Write that too.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **three** colleagues about **your** last week at work — four things you did and one you did not finish. Make notes on theirs.'));
out.push(table(['Name', 'Did…', 'Didn\'t finish…', 'Why not'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Last week _______ _______ and _______. He / She didn\'t finish _______, because _______._'));
out.push(p('**Listener task:** write the reason that stopped **most** people finishing. Is it the same reason every week?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _didn\'t finished_ and _she checkeds_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first half of Nour\'s weekly report, and answer the questions.'));
out.push(box(null, [
  '**THE WEEK — 16 to 20 April**   ·   Nour Mansour, for Mr Ayoub',
  '**What we did.** On Sunday we counted the counter money and banked it. On Monday we started the new stock card with the warehouse and we agreed the four columns. On Tuesday we completed the Homs order — it loaded at six and arrived at half past nine. On Wednesday Hala started at the trade counter; we opened together and she served fourteen customers alone in the afternoon. On Thursday we hosted Ms Shamsi and we agreed the new wrap price.',
  '**The figures.** 23 orders (last week 19). Counter takings 1,340,000 (last week 1,180,000). Two orders over 500,000, both signed.',
  '**What we did not finish.** The Aleppo invoices. I started them twice and stopped twice; both times the counter was busy and nobody else can answer it yet. This is not a complaint — it is the reason, and it will happen again next week unless something changes.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What happened on Wednesday?'));
out.push(item('2', 'By how much did the counter takings change?'));
out.push(item('3', 'Why does Nour say "this is not a complaint"?'));
out.push(box('Writer\'s box', [
  '**Shape of the first half of a weekly report:** **what we did**, day by day, in the past simple → **the figures**, with last week\'s in brackets so they mean something → **what we did not finish**, with the reason.',
  'A figure with nothing to compare it to tells you nothing. _23 orders_ is a number; _23 orders (last week 19)_ is information.',
  'Write the unfinished work **yourself**, before anybody asks. A report with no unfinished work is not believed, and the week it is believed is the week you need it to be.',
  '⚠ Give the **reason**, not the excuse, and say what would have to change. _Nobody else can answer the counter yet_ is a fact somebody can act on; _I was busy_ is not.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a weekly report for **your** work, or for a week at home (25 words or more). Use the frame.'));
out.push(p('**THE WEEK — ______ to ______**  ·  ______________.  **What we did.** On ______ we ______________. On ______ we ______________. On ______ we ______________.  **The figures.** ______________ (last week ______). ______________.  **What we did not finish.** ______________. ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "The days are clear and the figures have last week next to them. _didn\'t finished_ → _didn\'t finish_. What would have to change for you to finish it next week?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Past simple throughout, and no verb after _didn\'t_', ''],
  ['At least one figure with last week\'s beside it', ''],
  ['Something unfinished, written before anybody asked', ''],
  ['A reason that somebody could act on', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their unfinished line. The class says which one a manager could actually help with.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a week in your own life that you remember — a week of work, of study, of travel, of family (35 words or more). Use at least eight regular past verbs.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The day I could see._   ✓ _Check the past in…_   ? _a question about that week_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts and count the /ɪd/ endings — _started, printed, wanted_. Say them aloud together; it is the ending learners lose first.'));
out.push(box('Homework', ['Write your final text. Then write ten sentences about yesterday, five positive and five with _didn\'t_ (20+ words). Read them aloud and listen to your own _-ed_ endings.'], C.lblue, C.navy));

// ======================= CYCLE 8.2 =======================
out.push(pb());
out.push(h2('8.2  He went to Homs and saw four customers'));
out.push(p('**Function:** saying what happened   ·   **Grammar:** past simple, irregular verbs   ·   **Pronunciation:** the strong irregular vowel'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the past of these, as fast as you can: _go · see · have · do · make · take · send · write · get · come · say · give_'));
out.push(p('**b**  Which three did you have to think about? Write them on a card and keep it in your pocket this week.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Bassel bring back?   **A** an order   **B** a complaint   **C** both'));
out.push(p('**b**  Listen again. **1** How many customers did he see?   **2** What did the customer in Hama say?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.3  Bassel comes back from the road', [
  ['Nour', 'You went to Homs and Hama in two days? How was it?'],
  ['Bassel', 'I went to Homs on Sunday and Hama on Monday. I saw four customers in Homs and two in Hama.'],
  ['Nour', 'Six in two days. Did you get the Tarabishi order?'],
  ['Bassel', 'I got it. Four hundred and twenty thousand — he took the big boxes this time. I sent it to you Sunday evening.'],
  ['Nour', 'I had it Monday morning. And Hama?'],
  ['Bassel', 'Hama gave me an order and a complaint. Abu Nidal said the March delivery came two days late and nobody told him.'],
  ['Nour', 'That was the week of the diversion.'],
  ['Bassel', 'I know. He knows too. He didn\'t say it was our fault — he said nobody telephoned. That\'s a different thing, and he\'s right.'],
  ['Nour', 'Did you promise him anything?'],
  ['Bassel', 'I promised he would get a telephone call next time, before he asks. I didn\'t promise a discount. We don\'t pay money for a mistake that costs a telephone call.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – past simple, irregular verbs**',
  table(['Now', 'Past', 'Now', 'Past'], [
    ['go', '**went**', 'say', '**said**'],
    ['see', '**saw**', 'give', '**gave**'],
    ['have', '**had**', 'take', '**took**'],
    ['do', '**did**', 'come', '**came**'],
    ['make', '**made**', 'get', '**got**'],
    ['send', '**sent**', 'write', '**wrote**'],
  ], [1, 1, 1, 1]),
  '⚠ The irregular form appears **only** in the positive. After **didn\'t** every verb is plain again: _He **didn\'t go**_, not ~~didn\'t went~~. _**Did** you **get** it?_, not ~~did you got~~.',
  '⚠ _say_ and _tell_ are different: you **say** something, you **tell** somebody. _He **said** the delivery was late. He **told me** about it._',
  '**Practise:** Put the verb in the past simple.',
  '1 He ______ (go) to Homs on Sunday.  2 He ______ (see) four customers.  3 She ______ (not get) the order.  4 ______ you ______ (send) it on Sunday?  5 Abu Nidal ______ (say) nobody telephoned.',
  '**Useful phrases:**  How was it?  ·  I got it.  ·  He took the big boxes this time.  ·  That\'s a different thing.  ·  Did you promise him anything?  ·  I didn\'t promise…',
  '**Pronunciation – the vowel carries the past.** 🔊 **Track 8.4** Listen and repeat. In irregular verbs the whole change is in the **vowel**, so say it clearly: _go → **went** · see → **saw** · take → **took** · give → **gave** · get → **got** · write → **wrote**_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about a trip or a job; B reports it, including one thing that went wrong. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'You went to __________ in __________ days? How was it?'],
  ['B', 'I went to __________ on __________ and __________ on __________. I saw __________ and __________.'],
  ['A', 'Did you get __________?'],
  ['B', 'I got it. __________ — he took __________ this time. I sent it to you __________.'],
  ['A', 'And __________?'],
  ['B', '__________ gave me __________ and __________. __________ said __________.'],
  ['A', 'Did you promise anything?'],
  ['B', 'I promised __________. I didn\'t promise __________.'],
]));
out.push(table(['Role card 1 — a buying trip', 'Role card 2 — a week of repairs'], [[
  'Went to Aleppo Tue and Idlib Wed. Saw three suppliers. Got a better price on tape; lost the glove supplier (he closed). One complaint: last order came with no invoice.',
  'Mon two houses, Tue a school, Wed a clinic. Finished three jobs, left one. Got paid for two. One complaint: the school says you came late twice.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write every irregular past you hear. How many different ones?'));
out.push(PHRASE_CARD(['How was it?', 'I went… and saw…', 'I got it.', 'He said…', 'Did you promise…?', 'I didn\'t promise…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **three** colleagues about a journey, a day out or a difficult day. Use at least **six** irregular verbs each time. The listener ticks them off.'));
out.push(table(['Name', 'Their story in one line', 'Irregular verbs I heard'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class **somebody else\'s** story:  _______ went to _______ and _______. He / She said _______._'));
out.push(p('**Listener task:** write the irregular verb the class got wrong most often today.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _didn\'t went_ and _did you got_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Bassel\'s trip note, and answer the questions.'));
out.push(box(null, [
  '**TRIP NOTE — Homs and Hama, 16–17 April**   ·   Bassel Nassif',
  '**Homs, Sunday.** I saw four customers. Tarabishi Stores gave me an order for 420,000 — he took the big boxes this time, not the small ones, because the new branch has a store room. I sent the order the same evening. Two shops near the market want a price for the wide wrap; I said we would send it this week.',
  '**Hama, Monday.** I saw two customers. Abu Nidal gave me an order for 180,000 and a complaint: the March delivery came two days late and nobody telephoned him. He did not say it was our fault — he said nobody told him, which is a different thing and he is right.',
  '**What I promised.** A telephone call before he asks, next time there is a delay. I did not promise a discount, and I would not.',
  '**What I need.** A wide-wrap price for the two Homs shops, by Wednesday. After Wednesday they will have asked somebody else.',
  'Bassel',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why did Mr Tarabishi take the big boxes this time?'));
out.push(item('2', 'What exactly was Abu Nidal\'s complaint?'));
out.push(item('3', 'What does Bassel need, and by when?'));
out.push(box('Writer\'s box', [
  '**Shape of a trip note:** a heading for each place and day → who you saw and what they ordered → the **reason** behind anything that changed → any **complaint**, in the customer\'s own terms → **what I promised** → **what I need**, with a date.',
  'Write the customer\'s complaint **as the customer sees it**: _he did not say it was our fault — he said nobody told him_. A complaint rewritten in the company\'s favour is a complaint that will be made again.',
  'Say what you **promised** and what you **refused** to promise. The second is more useful: it tells the office where the line is.',
  '⚠ _What I need_ belongs at the end, with a **deadline and a consequence**: _by Wednesday; after Wednesday they will have asked somebody else._',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a trip note, real or invented (25 words or more). Use the frame.'));
out.push(p('**TRIP NOTE — ______________, ______________**  ·  ______________.  **______________, ______________.** I saw ______________. ______________ gave me ______________, because ______________. I ______________ the same ______________.  **______________, ______________.** ______________ gave me ______________ and a complaint: ______________.  **What I promised.** ______________. I did not promise ______________.  **What I need.** ______________, by ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Irregular pasts correct, and plain verbs after _didn\'t_', ''],
  ['The complaint is in the customer\'s terms', ''],
  ['What was promised **and** what was refused', ''],
  ['A need with a date and a consequence', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _what I need_ line. The class says which one would be done first, and why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a journey you made that did not go as planned (35 words or more). Use at least eight irregular past verbs, and say what you would do differently.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The moment it went wrong._   ✓ _Check the past of…_   ? _a question about the journey_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect every irregular past the class used on the board. Keep the list for Units 9 to 12.'));
out.push(box('Homework', ['Write your final text. Then write the past of twenty common verbs from memory, check them, and copy out only the ones you got wrong — three times each (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.3 =======================
out.push(pb());
out.push(h2('8.3  It was a busy week'));
out.push(p('**Function:** describing how a day or a week was   ·   **Grammar:** _was / were_   ·   **Pronunciation:** weak _was_ and _were_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe last week in **three** words. Then say why you chose each one.'));
out.push(p('**b**  _was_ or _were_? _It ______ busy. · The figures ______ good. · There ______ a problem on Tuesday. · There ______ two problems. · I ______ at the bank._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How was the week, in one word?   **A** quiet   **B** busy   **C** bad'));
out.push(p('**b**  Listen again. **1** Why was Wednesday difficult?   **2** What was the best thing about the week?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.5  How was the week?', [
  ['Nadia', 'I was away five days. How was it?'],
  ['Nour', 'Busy. Not bad — busy. Sunday and Monday were normal. Tuesday was the Homs order, so the morning was hard and the afternoon was quiet.'],
  ['Nadia', 'And Wednesday?'],
  ['Nour', 'Wednesday was difficult. Hala\'s first day at the counter, so I was with her all morning, and the telephone was ringing the whole time.'],
  ['Nadia', 'Were there many customers?'],
  ['Nour', 'There were fourteen in the afternoon alone. She was very good, honestly. She was nervous at nine and fine by eleven.'],
  ['Nadia', 'And the invoices?'],
  ['Nour', 'The invoices were the problem. I didn\'t finish them. I wasn\'t able to sit for twenty minutes.'],
  ['Nadia', 'Nobody is, on that counter. What was the best thing?'],
  ['Nour', 'Thursday. Ms Shamsi was here and the wrap price was agreed. That was the best thing — and the easiest.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – was / were**',
  table(['+', '–', '?'], [
    ['It **was** busy.  ·  I **was** with her.', 'It **wasn\'t** bad.  ·  I **wasn\'t** able to sit.', '**Was** it busy?  ·  **Was** she nervous?'],
    ['The figures **were** good.  ·  They **were** normal.', 'They **weren\'t** ready.', '**Were** there many customers?'],
    ['**There was** a problem.  ·  **There were** fourteen.', '**There wasn\'t** time.  ·  **There weren\'t** any.', 'How **was** the week?'],
  ], [1.4, 1.3, 1.4]),
  '**was**: I · he · she · it   ·   **were**: you · we · they',
  '⚠ _There **was** a problem_ (one) · _There **were** two problems_ (more than one) — the same rule as _there is / there are_ in Unit 3, moved into the past.',
  '⚠ _Busy_ is not an answer on its own. The useful shape is **a word + a reason**: _busy — the Homs order was on Tuesday._',
  '**Practise:** Complete with _was, were, wasn\'t_ or _weren\'t_.',
  '1 It ______ a busy week.  2 Sunday and Monday ______ normal.  3 There ______ fourteen customers in the afternoon.  4 I ______ able to sit for twenty minutes.  5 ______ there many problems? – No, there ______.',
  '**Useful phrases:**  How was it?  ·  Not bad — busy.  ·  …was difficult.  ·  She was nervous at nine and fine by eleven.  ·  What was the best thing?',
  '**Pronunciation – weak was and were.** 🔊 **Track 8.6** Listen. In the positive they are weak: _it was busy_ /ɪt wəz ˈbɪzi/ · _they were ready_ /ðeɪ wə ˈredi/. In the **negative** and in **short answers** they are strong: _it **wasn\'t**_ /ˈwɒznt/ · _yes, it **was**_ /wɒz/.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has been away and asks; B describes the time, day by day, with a word and a reason. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I was away __________. How was it?'],
  ['B', '__________. Not bad — __________. __________ and __________ were __________.'],
  ['A', 'And __________?'],
  ['B', '__________ was __________. __________, so I was __________, and __________ was __________.'],
  ['A', 'Were there many __________?'],
  ['B', 'There were __________. __________ was very good, honestly.'],
  ['A', 'What was the best thing?'],
  ['B', '__________. That was the best thing — and the easiest.'],
]));
out.push(table(['Role card 1 — a week in a clinic', 'Role card 2 — a week in a school'], [[
  'Mon–Tue normal. Wed: the doctor was ill, 40 patients, two nurses. Thu: quiet. Best thing: the new appointment book — nobody waited more than half an hour on Thursday.',
  'Mon: exams. Tue: the inspector. Wed: the heating was off, very cold. Thu: the trip. Best thing: the trip — the children were better outside the school than inside it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the one word they chose for the week, and the best thing.'));
out.push(PHRASE_CARD(['How was it?', 'Not bad — busy.', '…was difficult.', 'Were there many…?', 'She was very good.', 'What was the best thing?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues how last week was. Make them give **one word and a reason** for each day they mention. Then ask about the best and the worst thing.'));
out.push(table(['Name', 'The week in a word', 'Best thing', 'Worst thing'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _For _______, last week was _______, because _______. The best thing was _______ and the worst was _______._'));
out.push(p('**Listener task:** write the word most people chose. What does that say about this week?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _there was many customers_ and _I were_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the short "how it was" note Nour writes for Nadia\'s return, and answer the questions.'));
out.push(box(null, [
  '**FOR NADIA — the five days you were away**',
  'In one word: **busy**. Nothing was lost and nothing is on fire.',
  '**Sunday and Monday** were normal. The counter money was right both days and the bank was quick.',
  '**Tuesday** was the Homs order. The morning was hard and the afternoon was quiet. The lorry was loaded at six and was in Homs by half past nine.',
  '**Wednesday** was the difficult one. It was Hala\'s first day at the counter and I was with her all morning. There were fourteen customers in the afternoon and she served them alone. She was nervous at nine and fine by eleven.',
  '**Thursday** was the best day. Ms Shamsi was here, the new wrap price was agreed, and we were finished by half past eleven.',
  '**The one thing that was not done:** your Aleppo invoices. They were not urgent, and I was not able to sit for twenty minutes all week. They are in the blue tray, in order, with the new ones on top.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does "nothing is on fire" mean here?'));
out.push(item('2', 'How was Hala at nine, and how was she by eleven?'));
out.push(item('3', 'Where are the Aleppo invoices, and how are they arranged?'));
out.push(box('Writer\'s box', [
  '**Shape of a "how it was" note:** the whole period **in one word** → a line that calms the reader → one short paragraph per day, each with a word and the facts behind it → **the one thing that was not done**, where it is, and what state it is in.',
  'Open with the word and the reassurance. Somebody coming back from five days away reads the first line and their shoulders go up or down.',
  'Describe a person **changing**, not just being: _she was nervous at nine and fine by eleven_. It is more useful than _she was good_, and it is kinder.',
  '⚠ For the unfinished work, say **where it is and in what order**. The sentence that saves the most time in this whole book is _they are in the blue tray, in order, with the new ones on top_.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "how it was" note for somebody coming back after a few days away (25 words or more). Use the frame.'));
out.push(p('**FOR ______________ — the ______ days you were away.**  In one word: **______________**. ______________.  **______________** was ______________. ______________.  **______________** was the difficult one. ______________. There were ______________.  **______________** was the best day. ______________.  **The one thing that was not done:** ______________. It is ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as somebody who has just come back and is tired. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_was_ / _were_ correct, including _there was / there were_', ''],
  ['One word for the whole period, in the first line', ''],
  ['A line that calms the reader', ''],
  ['The unfinished thing, **with its location**', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first two lines only. The class says whether they would feel better or worse after reading them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a period in your life when everything changed — a month, a year, a season (35 words or more). Use _was_ and _were_ at least eight times, and describe how things **became** different, not only how they were.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The sentence that stayed with me._   ✓ _Check _was_ / _were_ in…_   ? _a question about that time_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Find a sentence that describes a **change** rather than a state, and read it to the class.'));
out.push(box('Homework', ['Write your final text. Then write eight sentences about your childhood home with _was_, _were_, _there was_ and _there were_ (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.4 =======================
out.push(pb());
out.push(h2('8.4  When did you send the invoice?'));
out.push(p('**Function:** asking a colleague about something that happened   ·   **Grammar:** past questions with _did_   ·   **Pronunciation:** _did you_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make five past questions from the table and ask your partner.'));
out.push(table(['', '', ''], [
  ['When', 'did you', 'send it?'],
  ['Who', 'did he', 'speak to?'],
  ['How many', 'did they', 'see?'],
  ['Why', 'did she', 'telephone?'],
], [1, 1, 1]));
out.push(p('**b**  One of these questions is different. Which, and why? _Who did you telephone? · Who telephoned you?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** an invoice was not paid   **B** an invoice was not sent   **C** an invoice was wrong'));
out.push(p('**b**  Listen again. **1** When was the invoice sent?   **2** What does Nadia discover at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.7  Finding out what happened', [
  ['Nadia', 'Nour, Khalil & Sons say they never had invoice 0412-7. When did you send it?'],
  ['Nour', 'On the twelfth, the same day. Let me look… yes, the twelfth, by email at 4.20.'],
  ['Nadia', 'Who did you send it to?'],
  ['Nour', 'To the address on the order form. k.sons@mail.sy.'],
  ['Nadia', 'And did you get a reply?'],
  ['Nour', 'No, I didn\'t. I didn\'t think about it — most customers don\'t reply.'],
  ['Nadia', 'Did anybody telephone them?'],
  ['Nour', 'Nobody telephoned. Should I have?'],
  ['Nadia', 'Not then. Now, yes. Wait — what did the order form say, exactly?'],
  ['Nour', 'k.sons@mail.sy.'],
  ['Nadia', 'And what does the invoice say?'],
  ['Nour', 'k.sons@mail.sy… no. k.son. One letter. The invoice went to the wrong address and nobody got anything back, because nobody gets a reply from an address that doesn\'t exist.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – past questions with did**',
  table(['Yes / No', 'Wh-'], [
    ['**Did** you **send** it? – Yes, I did. / No, I didn\'t.', '**When did** you **send** it?  – On the twelfth.'],
    ['**Did** anybody **telephone**? – Nobody did.', '**Who did** you **send** it **to**?  – To the address on the form.'],
    ['**Did** you **get** a reply? – No, I didn\'t.', '**What did** the order form **say**?  – k.sons@mail.sy.'],
  ], [1.5, 1.5]),
  '⚠ **did** carries the past, so the verb is plain: _When **did** you **send** it?_, not ~~did you sent~~.',
  '⚠ **Subject questions take no _did_.** _**Who telephoned** you?_ (who = the one who did it) against _**Who did** you telephone?_ (who = the one you called). This pair is worth five minutes on its own.',
  '⚠ Ask the **exact** question. _When did you send it?_ found nothing; _what did the order form say, exactly?_ found everything.',
  '**Practise:** Write the question.',
  '1 ______ (when / you / send it)?  2 ______ (who / you / send it to)?  3 ______ (you / get a reply)?  4 ______ (who / telephone you)?  5 ______ (what / the order form / say)?',
  '**Useful phrases:**  When did you…?  ·  Let me look…  ·  Did you get a reply?  ·  Should I have?  ·  Wait — what did… say, exactly?  ·  One letter.',
  '**Pronunciation – did you.** 🔊 **Track 8.8** Listen and repeat. The words join: _did you_ /ˈdɪdʒə/ · _when did you send it?_ · _what did he say?_ /wɒt dɪdi ˈseɪ/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A investigates something that went wrong; B answers honestly. A must find the cause with questions only. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ say they never had __________. When did you __________?'],
  ['B', 'On the __________. Let me look… yes, the __________, at __________.'],
  ['A', 'Who did you __________ to?'],
  ['B', 'To __________.'],
  ['A', 'And did you get __________?'],
  ['B', 'No, I didn\'t.'],
  ['A', 'Did anybody __________?'],
  ['B', 'Nobody did. Should I have?'],
  ['A', 'Wait — what did __________ say, exactly?'],
]));
out.push(table(['Role card 1 — a delivery that never arrived', 'Role card 2 — a prescription that was wrong'], [[
  'The cause: the driver delivered to the old branch, because the address on the note was copied from a note from last year.',
  'The cause: two patients with the same family name; the assistant took the first file she found and nobody checked the first name.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their investigation for the class – **without the book**.'));
out.push(p('**Listener task:** write the question that found the cause. Was it the first question or the last?'));
out.push(PHRASE_CARD(['When did you…?', 'Who did you…?', 'Did you get…?', 'Did anybody…?', 'Wait — what did… say?', 'Should I have?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of something that went wrong at your work or at home. Tell **two** colleagues the problem only — not the cause. They must find it with questions. Count the questions.'));
out.push(table(['My problem', 'Questions they needed', 'The question that found it'], [['', '', ''], ['', '', '']], [1.6, 1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My problem was _______. _______ found it in _______ questions. The question was _______._'));
out.push(p('**Listener task:** write the **kind** of question that worked — when, who, what, why or how many.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _did you sent_ and _who did telephone you?_ Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nadia writes after they find the cause, and answer the questions.'));
out.push(box(null, [
  '**WHAT HAPPENED — invoice 0412-7, Khalil & Sons**   ·   Nadia Sayegh, 24 April',
  '**The problem.** Khalil & Sons did not pay invoice 0412-7 (310,000, issued 12 April). On 23 April they told Bassel they had never received it.',
  '**What we found.** The invoice was sent by email on 12 April at 4.20 pm, the same day it was issued, to **k.son@mail.sy**. The address on the order form is **k.sons@mail.sy**. One letter was missing. No error message came back, so nobody knew.',
  '**Why nobody noticed for eleven days.** We do not telephone after an invoice, and most customers never reply to one, so silence looked normal. It was normal — until it wasn\'t.',
  '**What we have done.** The invoice was re-sent on 23 April to the correct address and Mr Khalil confirmed it by telephone the same afternoon. Payment is now due 23 May.',
  '**What we are changing.** The email address will be copied from the order form by one person and read back by another, as we do with telephone numbers. Nothing else changes — an invoice does not need a telephone call, but an address does need two pairs of eyes.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What exactly was wrong with the email address?'));
out.push(item('2', 'Why did nobody notice for eleven days?'));
out.push(item('3', 'What is changing, and what is deliberately **not** changing?'));
out.push(box('Writer\'s box', [
  '**Shape of a "what happened" note:** **the problem**, with dates and figures → **what we found** → **why nobody noticed** → **what we have done** (already) → **what we are changing**, and what is **not** changing.',
  'Write about **what happened**, not **who did it**. _One letter was missing_ — the note never needs the name of the person who typed it, and a note that does name people is the last honest note anybody writes.',
  'Explain **why nobody noticed**. That is usually the real finding: here, silence looked normal because silence is normal.',
  '⚠ Say what you are **not** changing, and why. A note that invents five new rules after one mistake costs more than the mistake and is quietly ignored within a month.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what happened" note about something that went wrong, real or invented (25 words or more). Use the frame.'));
out.push(p('**WHAT HAPPENED — ______________**  ·  ______________.  **The problem.** ______________.  **What we found.** ______________.  **Why nobody noticed.** ______________.  **What we have done.** ______________.  **What we are changing.** ______________. Nothing else changes, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as the person who made the mistake. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Past questions and past forms correct', ''],
  ['It says **what happened**, not **who did it**', ''],
  ['A _why nobody noticed_ section', ''],
  ['One change, and a line about what is not changing', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _what we are changing_ line. The class says whether the change would still be happening in six months.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a mistake you made — at work, at school, at home (35 words or more). Say what happened, how it was found, and what you changed afterwards.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I would have done the same._   ✓ _How was it found?_   ? _a question about what changed_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many of them was the mistake found by **accident**? What does that suggest?'));
out.push(box('Homework', ['Write your final text. Then write ten past questions you would ask to find out why something went wrong at your workplace, and mark the two that would find it fastest (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.5 =======================
out.push(pb());
out.push(h2('8.5  First the road was closed, then the telephone died'));
out.push(p('**Function:** telling a short work story in order   ·   **Grammar:** past simple with sequencers   ·   **Pronunciation:** pausing between the steps'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put a story in order with: _First… · Then… · After that… · In the end…_ Tell your partner how you got to work this morning, in four steps.'));
out.push(p('**b**  Which of these words tell you **when**, and which tell you **what order**? _at eight · first · on Tuesday · then · after that · at the end of the day_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things went wrong?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** What was the first problem?   **2** How did the customer find out in the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.9  The Tuesday the delivery went wrong', [
  ['Hala', 'Everybody keeps talking about "that Tuesday". What happened?'],
  ['Nour', 'It was in March. First, the road was closed at Nasiriyah — a lorry turned over, nobody was hurt. So Fadi went round by the old road.'],
  ['Hala', 'That only makes it late.'],
  ['Nour', 'It does. Then his telephone died. He charged it in the lorry, but the socket in that lorry didn\'t work and nobody knew.'],
  ['Hala', 'So nobody could tell the customer.'],
  ['Nour', 'Nobody could tell the customer. And I didn\'t telephone him either, because I was waiting to hear from Fadi.'],
  ['Hala', 'That\'s the real mistake.'],
  ['Nour', 'That\'s the real mistake. After that he arrived at four instead of eleven, and the shop was closed for lunch.'],
  ['Hala', 'And in the end?'],
  ['Nour', 'In the end the customer telephoned **us**, at half past four, to ask whether we were still in business. Abu Nidal still mentions it, a year later, and he is right to.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – telling a story in order**',
  table(['Step', 'Words', 'Example'], [
    ['the first thing', '**First,** · **It started when…**', '**First,** the road was closed.'],
    ['the next thing', '**Then** · **So** · **After that**', '**Then** his telephone died.'],
    ['a reason inside the story', '**because** · **so**', 'He went round **because** the road was closed.'],
    ['the result', '**In the end** · **So in the end**', '**In the end** the customer telephoned us.'],
  ], [1.2, 1.4, 2]),
  '⚠ **so** gives the result; **because** gives the reason. The same two events, two ways round: _The road was closed, **so** he went round._ = _He went round **because** the road was closed._',
  '⚠ A work story needs the **turn**: the moment where it stopped being bad luck and became a mistake. Here it is _I didn\'t telephone him either_. Without that sentence the story is a complaint about a road.',
  '**Practise:** Join the pairs, once with _so_ and once with _because_.',
  '1 The road was closed. He went round.  2 His telephone died. Nobody could tell the customer.  3 He arrived at four. The shop was closed.  4 Nobody telephoned. The customer telephoned us.  5 It was a long day. We finished at seven.',
  '**Useful phrases:**  What happened?  ·  First, …  ·  Then…  ·  That\'s the real mistake.  ·  After that…  ·  In the end…',
  '**Pronunciation – pausing between steps.** 🔊 **Track 8.10** Listen. Each step is one group, with a small stop after it: _First the road was closed ‖ then his telephone died ‖ and in the end the customer telephoned us._ Repeat the five.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about a day that went wrong; B tells it in four steps and names the real mistake. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Everybody keeps talking about __________. What happened?'],
  ['B', 'It was in __________. First, __________. So __________.'],
  ['A', 'That only makes it __________.'],
  ['B', 'It does. Then __________. __________, but __________ and nobody knew.'],
  ['A', 'So nobody could __________.'],
  ['B', 'Nobody could. And I didn\'t __________ either, because __________.'],
  ['A', 'That\'s the real mistake.'],
  ['B', 'That\'s the real mistake. After that __________. And in the end __________.'],
]));
out.push(table(['Role card 1 — a wedding that nearly failed', 'Role card 2 — an exam day'], [[
  'First the hall double-booked. Then the cook\'s van broke down. Nobody telephoned the families. In the end two hundred people arrived at the wrong hour.',
  'First the bus did not come. Then the candidate went by service and arrived at nine for a half-past-eight exam. Nobody had checked the time on the paper. In the end he sat it in the afternoon with another group.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs tell their story for the class – **without the book**.'));
out.push(p('**Listener task:** write the four steps, and **circle the real mistake**.'));
out.push(PHRASE_CARD(['What happened?', 'First, …', 'Then…', 'So nobody could…', 'That\'s the real mistake.', 'In the end…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **two** colleagues about a day when several things went wrong — at work, travelling, at home. Four steps, and say which one was the real mistake. Listen to theirs and write it down.'));
out.push(table(['Who', 'Their story in four steps', 'The real mistake'], [['', '', ''], ['', '', '']], [1, 2.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class somebody else\'s story:  _First _______. Then _______. After that _______. In the end _______. The real mistake was _______._'));
out.push(p('**Listener task:** in how many stories was the real mistake **not telling somebody**?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _so_ and _because_ the wrong way round. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the account Nour wrote a year ago, which is still in the file, and answer the questions.'));
out.push(box(null, [
  '**WHAT HAPPENED ON TUESDAY 14 MARCH**   ·   written the same evening',
  'First, the road was closed at Nasiriyah at about 8.30. A lorry turned over; nobody was hurt. Fadi went round by the old road, which adds about forty minutes.',
  'Then his telephone died somewhere after the diversion. He charged it in the cab, but the socket in lorry 445621 does not work. He did not know, and neither did we.',
  'From 10.00 I had no word from Fadi. **I waited.** I did not telephone the customer, because I wanted to tell him a real time and I did not have one. That was the mistake, and it was mine. A real time is better; no time at all with a telephone call is better than a real time with silence.',
  'After that Fadi arrived in Homs at 16.00 instead of 11.00. The shop was closed between 14.00 and 16.30, so he waited at the door for half an hour.',
  'In the end the customer telephoned **us** at 16.30, to ask whether we were still in business.',
  '**What changed.** Two things, and only two. The socket in 445621 was repaired on 16 March. And we now telephone the customer when we **don\'t** know, not only when we do.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why did Nour not telephone the customer?'));
out.push(item('2', 'Which sentence in the account takes the blame, and whose is it?'));
out.push(item('3', 'What were the two changes?'));
out.push(box('Writer\'s box', [
  '**Shape of a written account:** the steps in order with **times** → the turn, marked clearly → what happened next → the result → **what changed**, and how many things.',
  'Write it **the same evening**. An account written a week later is a story about what should have happened.',
  'Take the blame in **one sentence, plainly**: _That was the mistake, and it was mine._ Long apologies in a work account make the reader stop trusting the facts.',
  '⚠ Say **how many** things changed — _two things, and only two_. A long list of changes after one bad day is how companies acquire rules nobody can explain five years later.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an account of a day that went wrong, real or invented (25 words or more). Use the frame.'));
out.push(p('**WHAT HAPPENED ON ______________**  ·  written ______________.  First, ______________ at about ______. ______________.  Then ______________. ______________, and nobody knew.  From ______ I ______________. **I ______________.** That was the mistake, and it was ______________.  After that ______________.  In the end ______________.  **What changed.** ______ things, and only ______. ______________. And ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The steps are in order, with times', ''],
  ['_so_ and _because_ used correctly', ''],
  ['The turn — the real mistake — is marked', ''],
  ['A short, counted list of changes', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the sentence where their story turns. The class says whether it is really the turn, or one step too late.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the story of a day you will not forget (35 words or more). Tell it in order, with times, and finish with what you learned rather than what you felt.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The step where I knew it would go wrong._   ✓ _Can you add the time of…?_   ? _a question about the day_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three stories. Which one could you retell to somebody else, accurately, tomorrow? That is the test of order.'));
out.push(box('Homework', ['Write your final story. Then write it again in **four sentences** (20+ words). Which details did you lose, and did the story still work?'], C.lblue, C.navy));

// ======================= CYCLE 8.6 =======================
out.push(pb());
out.push(h2('8.6  Really? That\'s very good news'));
out.push(p('**Function:** reacting to news   ·   **Grammar:** fixed reactions   ·   **Pronunciation:** the interested voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  React to these four, out loud: _We got the Aleppo order. · The lorry broke down. · Hala passed her exam. · The price went up again._'));
out.push(p('**b**  Say _Really?_ three ways: interested · surprised · not listening. Your partner says which is which.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Bassel\'s news?   **A** a big order   **B** a new job   **C** a complaint'));
out.push(p('**b**  Listen again. **1** How big is the order?   **2** What does Nour ask after the first reaction?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.11  Bassel\'s big order', [
  ['Bassel', 'Nour. Sit down. Tarabishi took the whole range for the new branch.'],
  ['Nour', 'Really? The whole range?'],
  ['Bassel', 'The whole range. One million two hundred thousand.'],
  ['Nour', 'That\'s wonderful. Congratulations — honestly, that\'s the biggest single order this year.'],
  ['Bassel', 'It is.'],
  ['Nour', 'How did it happen? Last month he was taking the small boxes only.'],
  ['Bassel', 'His son came into the business. The son wants everything from one supplier, and we were the one he knew.'],
  ['Nour', 'So the twelve years did it.'],
  ['Bassel', 'The twelve years did it. And one more thing — he asked for you by name. He said: the girl who repeats the numbers back.'],
  ['Nour', 'Did he? That\'s… that\'s made my week, actually.'],
  ['Bassel', 'Good. Now go and tell Mr Ayoub before I do, because he\'ll want to hear it from you.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – reacting to news**',
  table(['Good news', 'Bad news', 'Surprising news'], [
    ['That\'s wonderful!  ·  That\'s very good news.', 'Oh no.  ·  I\'m sorry to hear that.', 'Really?  ·  Did he?  ·  Did they really?'],
    ['Congratulations!  ·  Well done.', 'That\'s a shame.  ·  Poor you.', 'You\'re joking.  ·  Honestly?'],
    ['**And then ask a question:** How did it happen?', '**And then ask:** What happened? Is everybody all right?', '**And then ask:** When did you hear?'],
  ], [1.4, 1.4, 1.4]),
  '⚠ A reaction on its own is polite but empty. **React, then ask.** _That\'s wonderful. How did it happen?_ The question is what makes the other person go on talking.',
  '⚠ **Echo questions** show you are listening: _— He took the whole range. — **Did he?**_ The auxiliary matches the sentence: _I went to Homs. — **Did you?**_ · _She\'s ill. — **Is she?**_',
  '**Practise:** React, then ask a question.',
  '1 We got the Aleppo order.  2 The lorry broke down on the motorway.  3 Hala passed her exam.  4 The wrap price went up again.  5 Abu Yasser is retiring next year.',
  '**Useful phrases:**  Really?  ·  That\'s wonderful.  ·  Congratulations — honestly…  ·  How did it happen?  ·  Did he?  ·  That\'s made my week.',
  '**Pronunciation – the interested voice.** 🔊 **Track 8.12** Listen to the same word three times: _Really?_ — **rising and warm** (interested) · **falling** (surprised) · **flat** (not listening). Repeat all three. The flat one is the one to never use at work.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings news; B reacts **and asks**. Three pieces of news each: one good, one bad, one surprising. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. Sit down. __________.'],
  ['B', 'Really? __________?'],
  ['A', '__________. __________.'],
  ['B', 'That\'s __________. __________ — honestly, __________.'],
  ['A', 'It is.'],
  ['B', 'How did it happen? Last __________ he / she was __________.'],
  ['A', '__________.'],
  ['B', 'So __________ did it.'],
]));
out.push(table(['Role card 1 — three pieces of news', 'Role card 2 — three pieces of news'], [[
  'Good: your sister got into medical school. Bad: the shop below yours was robbed last night. Surprising: your old manager is opening a competing business in the same street.',
  'Good: the company is paying for an English course for everybody. Bad: the Aleppo supplier is closing after thirty years. Surprising: Abu Yasser has been offered a job by the competitor.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** did the listener **ask a question** after every reaction? Write the questions.'));
out.push(PHRASE_CARD(['Really?', 'That\'s wonderful.', 'Congratulations.', 'How did it happen?', 'Did he?', 'I\'m sorry to hear that.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **three** colleagues one piece of **real** news from your life or your work. Each of them must react and ask at least two questions. Then do the same for them.'));
out.push(table(['Name', 'Their news', 'My reaction', 'My questions'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class **one** piece of good news from the room:  _______ told me _______. I said _______ and asked _______._'));
out.push(p('**Listener task:** write the best question anybody asked today. A good question is one the speaker wanted to answer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for the wrong echo question (_She\'s ill. — Did she?_). Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second half of Nour\'s weekly report, and answer the questions.'));
out.push(box(null, [
  '**THE WEEK — continued**   ·   Nour Mansour, for Mr Ayoub',
  '**The highlight.** Bassel brought back the Tarabishi order for the new branch: **1,200,000**, the whole range. It is the biggest single order this year. The reason is worth writing down: the son has come into the business and wants one supplier, and we were the supplier his father has used for twelve years. Nothing we did last week caused it; everything we did for twelve years caused it.',
  '**What went wrong.** Invoice 0412-7 went to an email address with one letter missing and nobody noticed for eleven days. It is re-sent and confirmed. The address is now copied by one person and read back by another, as we do with telephone numbers.',
  '**What I need from you.** A decision on the wide-wrap order by Sunday, because Ms Shamsi sends on Tuesdays and the Tarabishi order will need wrap we have not got.',
  '**One more thing.** Mr Tarabishi asked for me by name. I have written it here because you said to write the good things down as well, and because I would not have believed it a month ago.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What caused the big order, according to Nour?'));
out.push(item('2', 'Why does she need a decision by Sunday?'));
out.push(item('3', 'Why does she write the last paragraph?'));
out.push(box('Writer\'s box', [
  '**Shape of the second half of a weekly report:** **the highlight**, with its real cause → **what went wrong**, and what is already fixed → **what I need from you**, with a date and a reason → optionally, **one more thing** — something human.',
  'Name the **real cause** of good news, not the nearest one: _nothing we did last week caused it; everything we did for twelve years caused it._ Reports that take credit for luck are read sceptically afterwards.',
  '_What I need from you_ should be one item, with a **date** and a **consequence**. A report that asks for five things gets none of them.',
  '⚠ The human line is not decoration. A report that is only figures and faults is a report nobody looks forward to reading, and a report nobody looks forward to is a report that gets skimmed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the second half of a weekly report (25 words or more). Use the frame.'));
out.push(p('**______________ — continued**  ·  ______________.  **The highlight.** ______________. The reason is worth writing down: ______________.  **What went wrong.** ______________. It is ______________. ______________ is now ______________.  **What I need from you.** ______________ by ______________, because ______________.  **One more thing.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as the manager, on a Sunday morning, with four reports to get through. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The highlight names its real cause', ''],
  ['What went wrong is already fixed, or being fixed', ''],
  ['**One** request, with a date and a reason', ''],
  ['Something a person would want to read', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _one more thing_. The class says which report they would open first next week.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the best piece of news you have had in the last two years (35 words or more). Say who told you, how you reacted, and what you now think the real cause was.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I\'m glad for you._   ✓ _Who told you first?_   ? _a question about what happened next_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the real cause something that happened **long before** the news? Say what that means for this week.'));
out.push(box('Homework', ['Write your final text. Then write five short conversations: somebody gives news, you react and ask one question, they answer (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.7 =======================
out.push(pb());
out.push(h2('8.7  Review & Mediate: what does the week\'s report say?'));
out.push(p('**Function:** telling a colleague, in simple words, what a written report says   ·   **Review:** regular and irregular pasts · _was/were_ · past questions · sequencing · reacting'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Three _-ed_ sounds, with one verb for each.',
  '**2** The past of: _go · see · have · send · write · get_.',
  '**3** What is wrong with _She didn\'t went_ and _Did you sent it?_',
  '**4** _was_ or _were_: _There ______ fourteen customers. · It ______ a busy week._',
  '**5** After a reaction to news, what must you always do?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Abu Yasser ask about the report?   **A** he is in it   **B** he cannot read the small print   **C** both'));
out.push(p('**b**  Listen again. **1** What does the report say about the stock card?   **2** What does Nour say about the word "variance"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.13  Reading the week to Abu Yasser', [
  ['Abu Yasser', 'Nour. The week is on the board and my name is in it twice. Read it to me — the parts about the warehouse.'],
  ['Nour', 'Only the warehouse parts. The first one is good: it says we started the new stock card on Monday and agreed the four columns, with you.'],
  ['Abu Yasser', 'That is true.'],
  ['Nour', 'The second one says: "variance between physical and system stock reduced from 9 per cent to 2 per cent."'],
  ['Abu Yasser', 'And in Arabic, as it were?'],
  ['Nour', 'It means the shelf and the screen used to disagree about nine times in a hundred. Now they disagree about twice. That\'s your morning walk, written as a number.'],
  ['Abu Yasser', 'Nine to two. In three weeks.'],
  ['Nour', 'In three weeks. The word "variance" only means the difference between two numbers that should be the same. Nobody is being blamed; it\'s a measurement.'],
  ['Abu Yasser', 'I wanted to know that before I read my name twice.'],
  ['Nour', 'I know. That\'s why I read you the first one first.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a report that mentions the listener**',
  table(['To start safely', 'To translate a number', 'To translate a word'], [
    ['Only the ___ parts.', 'It says ___ went from ___ to ___ .', '"___" only means ___ .'],
    ['The first one is **good**: it says ___ .', 'That means ___ used to ___ . Now they ___ .', 'Nobody is being blamed; it\'s a ___ .'],
  ], [1.4, 2, 1.6]),
  '⚠ When somebody is **in** the document, read them a **good** part first, if there is one. It is not flattery: a person who is braced for criticism does not hear a percentage.',
  '⚠ Turn a percentage into something countable: _nine times in a hundred → about twice_. Percentages are the commonest thing people nod at without understanding.',
  '⚠ Say explicitly when nobody is being blamed. Office words — _variance, discrepancy, exception_ — all sound like accusations to somebody who did not grow up with them.',
  '**Practise:** The report says: _Order fulfilment improved to 96 per cent; two consignments were dispatched incomplete owing to a packaging shortfall._ Say it in easy English, for the warehouse.',
  '**Useful phrases:**  Only the… parts.  ·  The first one is good: it says…  ·  "___" only means…  ·  That\'s your… , written as a number.  ·  Nobody is being blamed.',
  '**Pronunciation – reading a number out of a text.** 🔊 **Track 8.14** Listen. The two numbers being compared are **both** strong, and the voice falls on the second: _from **nine** per cent to **two**._ Repeat the four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads report 1 silently and tells B only the parts about B. B closes the book. Then swap with report 2.'));
out.push(table(['Report 1 — for A', 'Report 2 — for B'], [[
  '**WEEKLY SUMMARY, w/e 20 April.** Orders processed 23 (prior week 19). Counter revenue 1,340,000 (prior 1,180,000). Stock card revision commenced Monday; variance between physical and system stock reduced from 9% to 2%. One invoice re-issued following an addressing error; no financial loss. Outstanding: Aleppo invoice batch, deferred.',
  '**WEEKLY SUMMARY, w/e 27 April.** Order fulfilment 96% (prior 91%). Two consignments dispatched incomplete owing to a packaging shortfall; both completed within 48 hours at no cost to the customer. New counter staff member commenced; supervision hours 11. Outstanding: wide wrap reorder awaiting authorisation.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their report for the class – **without the book**.'));
out.push(p('**Listener task:** write the **two numbers** being compared, and say in plain words what the change means.'));
out.push(PHRASE_CARD(['Only the… parts.', 'The first one is good:…', '"___" only means…', 'from… to…', 'Nobody is being blamed.', 'written as a number']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a short report in formal English. Read it silently. Then tell **two** colleagues the parts that are about them. Do not show them the paper.'));
out.push(table(['Who I told', 'The part about them', 'The word I had to translate'], [['', '', ''], ['', '', '']], [1, 2, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the report you mediated. This is the **eighth** unit of this book, and the mediation task comes back in every unit — so listen for the **number** that was turned into something countable.'));
out.push(p('_It\'s a ______. The part about ______ says ______. The number went from ______ to ______, which means ______. The word people don\'t know is ______._'));
out.push(p('**Listener task:** add the new office word to the class list from Unit 7.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Orders processed 23 (prior week 19)._   **A** Fewer orders than last week. **B** Four more than last week. **C** Nineteen orders this week.',
  '**2**  _One invoice re-issued following an addressing error; no financial loss._   **A** Money was lost. **B** An invoice was sent again; nothing was lost. **C** The customer did not pay.',
  '**3**  _Outstanding: Aleppo invoice batch, deferred._   **A** The Aleppo invoices are finished. **B** They are still to do. **C** They were cancelled.',
  '**4**  _Both completed within 48 hours at no cost to the customer._   **A** The customer paid extra. **B** It was fixed in two days and cost the customer nothing. **C** It took two weeks.',
  '**5**  _Bassel — Tarabishi took the whole range, 1.2m. Biggest this year._   **A** The customer ordered everything. **B** The customer ordered the small boxes. **C** The customer cancelled.',
  '**6**  _Wide wrap reorder awaiting authorisation._   **A** The wrap has been ordered. **B** Somebody must approve the order first. **C** The wrap has arrived.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about **something that happened**, the three points are usually: **what happened** · **when** · **what you did or what you need**.',
  '⚠ Count the three points **before** you write, and tick them off **after**. In the past simple, check the verbs twice — this is the one paper where the tense itself can lose marks.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Mr Ayoub about last week. Say: **(1)** Bassel got the Tarabishi order for 1,200,000, **(2)** it came on Monday, **(3)** you need a decision on the wrap by Sunday. Use the frame.'));
out.push(p('Dear Mr Ayoub, Last week Bassel ______________ for ______________. It ______________ on ______________. Could you ______________ by ______________, because ______________? Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  The order, with the figure', ''], ['2  When it came', ''], ['3  The decision needed, by Sunday', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('Something good happened to you last week. Write a message to a friend (25 words or more). Say: **(1)** what happened, **(2)** when, **(3)** one thing you want to do about it together.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your friend would send, reacting to the news and asking two questions (20+ words).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  On Sunday I ___ the counter money.   a) checked   b) checkd   c) did check',
  '2  She ___ the invoices.   a) didn\'t finished   b) didn\'t finish   c) not finished',
  '3  He ___ to Homs on Sunday.   a) goed   b) gone   c) went',
  '4  ___ you send it on the twelfth?   a) Did   b) Do   c) Was',
  '5  There ___ fourteen customers in the afternoon.   a) was   b) were   c) are',
  '6  The road was closed, ___ he went round.   a) because   b) so   c) to',
  '7  — He took the whole range. — ___?   a) Did he   b) Was he   c) Has he',
  '8  It ___ a busy week, but it ___ bad.   a) was / wasn\'t   b) were / weren\'t   c) was / weren\'t',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 8.15** Listen to a colleague describing last week. Complete the note.   The week in a word: ______   The busiest day: ______   What went wrong: ______   What wasn\'t finished: ______   The best thing: ______'));
out.push(dlg('Track 8.15  Audio script (read after the check)', [
  ['Nadia', 'How was it?'],
  ['Nour', 'Busy. Sunday and Monday were normal, but Wednesday was the hard one — it was Hala\'s first day and I was with her all morning.'],
  ['Nadia', 'And did anything go wrong?'],
  ['Nour', 'One invoice went to the wrong email address. We found it and sent it again.'],
  ['Nadia', 'What didn\'t you finish?'],
  ['Nour', 'The Aleppo invoices. They\'re in the blue tray.'],
  ['Nadia', 'And the best thing?'],
  ['Nour', 'Thursday. We agreed the new wrap price and we were finished by half past eleven.'],
]));
out.push(p('**C  Writing.** Write a short report of last week (25+ words). Say three things you did, one thing you did not finish, and why.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 8)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I did at work last week, with regular verbs',
  '☐ use the common irregular pasts without stopping to think',
  '☐ describe how a day or a week was, with a word and a reason',
  '☐ ask the exact question that finds out what happened',
  '☐ tell a short work story in order, and name the real mistake',
  '☐ react to news so that the other person wants to go on talking',
  '☐ tell a colleague in easy English what a written report says about them',
  '☐ write a weekly report, a trip note, a "how it was" note, a "what happened" note and an account of a day',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 8 · Student\'s Book');
