// Proactive Business English A2 · Syria Edition · Book 2 · Unit 14 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'forecast · projection · budget · growth · increase · decrease · rise · fall · trend · outlook · quarter · annual · turnover · profit · loss · estimate · demand · season · peak · slow period · expansion · investment · cash flow · margin · market · steady';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 14  Plans and Forecasts'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**14.1**  say what your company is going to do',
  '**14.2**  predict — and say how sure you are',
  '**14.3**  say that something is possible but not certain',
  '**14.4**  link a condition to a result',
  '**14.5**  describe a simple chart in three sentences',
  '**14.6**  give an opinion about the future at a meeting',
  '**14.7**  Review & Mediate: tell a colleague what the sales chart and the forecast note say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Three futures, and why English needs all of them', [
  'English has more than one future and they are not interchangeable. **Going to** is for a plan that already exists — somebody has decided. **Will** is for a prediction, a decision made while speaking, and a promise. **May** and **might** are for what is possible and not decided.',
  'At work the difference matters more than the grammar. _We are going to open a second counter_ commits the company. _I think we will open a second counter_ is an opinion. _We might open a second counter_ is a possibility and binds nobody.',
  'A manager who hears the wrong one of these three plans the wrong year. Learn them as three different promises, not as three tenses.',
], C.lyellow, C.orange));

// ======================= CYCLE 14.1 =======================
out.push(pb());
out.push(h2('14.1  We are going to open a second counter'));
out.push(p('**Function:** saying what the company plans   ·   **Grammar:** _going to_ for decided plans   ·   **Pronunciation:** _gonna_ and when not to use it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is your company going to do this year that it did not do last year? One thing is enough.'));
out.push(p('**b**  Which of these are decided and which are only ideas? _We are going to take on two drivers. · We might take on two drivers. · I think we will take on two drivers._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has already been decided?   **A** a second counter   **B** a branch in Homs   **C** a new lorry'));
out.push(p('**b**  Listen again. **1** When is the work going to start? **2** What is Abu Yasser\'s objection, and what is the answer to it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.1  The Monday meeting, first item', [
  ['Mr Ayoub', 'One decision, and then the figures. We are going to open a second counter at the front. The builder starts on the fourteenth.'],
  ['Abu Yasser', 'And where are the people going to come from? We are seven.'],
  ['Mr Ayoub', 'Hala is going to take the second counter from April, and Nour is going to train her for three weeks before that.'],
  ['Nour', 'Three weeks is not very long.'],
  ['Mr Ayoub', 'It is twice what you had.'],
  ['Nadia', 'And the cost? The builder, the counter, the second screen.'],
  ['Mr Ayoub', 'About four million, and it is in the budget. I am not going to pretend it is nothing; I am going to tell you what it buys. Eleven people waited more than ten minutes last Thursday and four of them left.'],
  ['Abu Yasser', 'Four left.'],
  ['Mr Ayoub', 'Four that we know of.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _going to_ for a plan already decided**',
  table(['Form', 'Example'], [
    ['**am / is / are going to** + verb', 'We **are going to open** a second counter.'],
    ['Negative', 'I **am not going to pretend** it is nothing.'],
    ['Question', '**Where are** the people **going to come** from?'],
    ['With a time', 'Hala **is going to take** the counter **from April**.'],
    ['Evidence now, result soon', 'Look at the queue — somebody **is going to leave**.'],
  ], [1.5, 2.2]),
  '⚠ **_Going to_ means somebody has decided.** It is not a polite way of saying _maybe_. If the decision has not been taken, use _might_ (14.3) or _I think we will_ (14.6), or a manager will plan a year around your sentence.',
  '⚠ It also works from **evidence you can see now**: _the lorry is not going to fit through that gate_ · _it is going to rain_. The decision in those is the world\'s, not a person\'s.',
  '**Practise:** Turn each one into a _going to_ sentence with a time in it.',
  '1 a new member of staff  2 a change to the opening hours  3 a training day  4 a price rise  5 a machine that is going to break',
  '**Useful phrases:**  We are going to…  ·  The builder starts on the…  ·  Where are … going to come from?  ·  It is in the budget.  ·  Four that we know of.',
  '**Pronunciation – _gonna_.** 🔊 **Track 14.2** In fast speech _going to_ becomes /ˈɡənə/. Listen to both. Understand _gonna_ always; say _going to_ at work, and never write it.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A announces a decision; B asks the two questions everybody asks — who, and what it costs. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'One decision, and then __________. We are going to __________. __________ starts on __________.'],
  ['B', 'And where are __________ going to come from? We are __________.'],
  ['A', '__________ is going to __________ from __________, and __________ is going to __________ before that.'],
  ['B', 'And the cost? __________, __________, __________.'],
  ['A', 'About __________, and it is in the budget. I am not going to __________; I am going to __________.'],
  ['B', '__________.'],
]));
out.push(table(['Role card 1 — a second van', 'Role card 2 — Saturday opening'], [[
  'Decided: a second van, delivered in six weeks. Fadi moves to the lorry; a new driver takes the van. Cost: about nine million, in the budget. What it buys: eleven late deliveries last month.',
  'Decided: the counter opens on Saturdays from June, nine to one. Two people, by rota. Cost: the overtime. What it buys: the Saturday customers who now buy in Jaramana instead.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their announcement for the class – **without the book**.'));
out.push(p('**Listener task:** write the number that says what the plan buys. An announcement with no such number is an announcement people argue with.'));
out.push(PHRASE_CARD(['We are going to…', 'from April', 'Where are … going to come from?', 'It is in the budget.', 'I am not going to pretend…', 'that we know of']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **three** colleagues about a plan at your own workplace that has been decided. Each time, give the time it starts, who it affects, and the number that says what it buys.'));
out.push(table(['The plan', 'Starts', 'Who it affects', 'The number that justifies it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 0.8, 1.1, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We are going to _______ from _______. It affects _______. It is worth it because _______._'));
out.push(p('**Listener task:** write down one plan in the room that you think will not happen on time, and why. Keep the slip; this unit comes back to it in 14.7.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we will open_ where the decision is already taken, and _I going to_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note that went on the staff board, and answer the questions.'));
out.push(box(null, [
  '**STAFF NOTICE — the second counter**',
  'From 14 April the front will be rebuilt. The work is going to take about three weeks.',
  '**What is going to happen.** The trade counter is going to move to the side door while the work is on. There is going to be one counter, not two, for three weeks — so the queue is going to be longer, and it is going to be longer in the week before Eid, which is the worst possible week and the only one the builder had.',
  '**What we are going to do about it.** Two people on the counter from eight, not from half past. Nour and Hala are going to take turns on the door, telling people how long the wait is before they join it.',
  '**After.** Two counters from the first week of May. Hala is going to take the second one.',
  'Ask me anything you like about this, including whether it is worth it. — K. Ayoub',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the notice say is going to be worse, and when?'));
out.push(item('2', 'Find the two things the company is going to do to make it less bad.'));
out.push(item('3', 'Why does the last line invite the question it invites?'));
out.push(box('Writer\'s box', [
  '**A notice about a plan — four parts, in this order:** when it starts and how long → **what is going to happen**, including the bad part → **what we are going to do about the bad part** → what it looks like afterwards.',
  '**Name the bad part yourself, with its worst detail.** _The week before Eid, which is the worst possible week and the only one the builder had._ A notice that hides the bad part is read once; a notice that names it is believed the next time too.',
  'Every part takes **going to**, because every part is decided. If something is not decided, it does not belong in a notice — put it in a meeting.',
  '⚠ Invite the hard question at the end. _Including whether it is worth it_ costs the writer nothing and takes the argument out of the corridor and into the office.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a staff notice about a plan at your workplace (35 words or more). Use the frame.'));
out.push(p('**STAFF NOTICE — ______________**   From ______________, ______________. The work is going to take ______________.   **What is going to happen.** ______________ is going to ______________. There is going to be ______________, so ______________.   **What we are going to do about it.** ______________. ______________ are going to ______________.   **After.** ______________.   ______________ — ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks you to name the bad part with its worst detail. Yours says _there may be some disruption_ — what exactly is going to be worse, and in which week?"',
  'Quote the box, then ask a question. Do not write the sentence for them.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the notice admit what is going to be worse?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A start date and a length', ''],
  ['The bad part named, with a detail', ''],
  ['What the company is going to do about it', ''],
  ['_going to_ throughout, because it is all decided', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the bad part only. The class says which notice they would believe the next time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you are going to change at work or at home (60 to 100 words). Say what is decided, when it starts, what is going to be worse before it is better, and how you will know it worked.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the honest bad part_   ✓ _is it really decided?_   ? _how will you know it worked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Which plans are really decided, and which are wishes wearing _going to_? Say so kindly; it is the most useful thing in the cycle.'));
out.push(box('Homework', ['Write your final text. Then write the staff notice your own workplace should have put up about its last change, and what it left out (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.2 =======================
out.push(pb());
out.push(h2('14.2  Sales will rise after Eid'));
out.push(p('**Function:** predicting   ·   **Grammar:** _will_ for predictions, decisions and promises   ·   **Pronunciation:** the contraction _\'ll_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What happens to business in your trade before Eid, and what happens in the two weeks after it?'));
out.push(p('**b**  Say three predictions about next month at your work. Use _will_ in all three, then say which one you are least sure of.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia predict?   **A** a quiet fortnight   **B** a price rise   **C** a late payment'));
out.push(p('**b**  Listen again. **1** What does she say will happen in the second week after Eid? **2** What does Mr Ayoub promise to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.3  The figures, second item', [
  ['Nadia', 'The figures. March was good. April will be quiet for ten days and then it will be very busy.'],
  ['Mr Ayoub', 'Why ten days?'],
  ['Nadia', 'Eid. Nobody orders in the week before and nobody opens in the week of. Then in the second week after, everybody orders at once, and we will have four days of what should be a fortnight.'],
  ['Nour', 'So we will run out of boxes again.'],
  ['Nadia', 'We will run out of boxes again.'],
  ['Mr Ayoub', 'Then we will order them in March. I will telephone Ms Shamsi this afternoon — not next week, this afternoon, because I said this last year and did it in April.'],
  ['Abu Yasser', 'You did.'],
  ['Mr Ayoub', 'I did. Write it on the board, Nour, with today\'s date on it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – three jobs for _will_**',
  table(['Job', 'Example', 'How sure'], [
    ['**Prediction**', 'April **will be** quiet for ten days.', 'as sure as you say you are'],
    ['**Decision now**', 'Then **we will order** them in March.', 'decided while speaking'],
    ['**Promise**', '**I will telephone** her this afternoon.', 'a commitment'],
    ['Contraction', 'We**\'ll** run out of boxes again.', 'normal speech'],
    ['Negative', 'Nobody **won\'t**… ✗  ·  Nobody **will** order. ✓', ''],
  ], [1.1, 1.9, 1.3]),
  '⚠ **_Will_ and _going to_ are not the same promise.** _We are going to order in March_ = already decided, probably in a plan. _We will order in March_ said at a meeting = decided **now**, in this sentence, by the person speaking.',
  '⚠ Soften a prediction when you are not sure, and say so: _I think · probably · it should · I would expect_. A flat _will_ that turns out wrong costs more than a hedge that turns out right.',
  '⚠ A promise with **no date in it** is not a promise. _I will telephone her_ against _I will telephone her this afternoon_ — the second one can be checked, which is why it gets done.',
  '**Practise:** Make one prediction, one decision and one promise about next week at your work. Say which is which.',
  '**Useful phrases:**  April will be quiet.  ·  Then we will…  ·  I will … this afternoon.  ·  not next week, this afternoon  ·  with today\'s date on it',
  '**Pronunciation – _\'ll_.** 🔊 **Track 14.4** Listen: _we\'ll_, _it\'ll_, _they\'ll_. In speech the contraction is almost always used and almost disappears. Repeat six, then say the full form for the promise — a promise is one place where speaking slowly helps.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports figures and predicts; B names the consequence; A makes a promise with a date in it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The figures. __________ was __________. __________ will be __________ and then it will be __________.'],
  ['B', 'Why __________?'],
  ['A', '__________. Nobody __________ and nobody __________. Then __________, and we will have __________.'],
  ['B', 'So we will __________ again.'],
  ['A', 'Then we will __________. I will __________ — not __________, __________, because __________.'],
  ['B', '__________.'],
]));
out.push(table(['Role card 1 — the winter', 'Role card 2 — the school year'], [[
  'November and December: the rain, the roads to Homs, deliveries taking a day longer. Last year four customers cancelled. The promise: order the winter stock in October, not in November.',
  'September: everybody buys at once in the last week of August. Last year the paper ran out on the 28th. The promise: double the paper order on 1 August, with the date on the board.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write down the promise and the date in it. A promise with no date is the thing this cycle exists to prevent.'));
out.push(PHRASE_CARD(['will be quiet', 'Then we will…', 'I will … this afternoon', 'not next week', 'We will run out again.', 'with today\'s date on it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make **three** predictions about the next three months at your work. For each one, say how sure you are, and make one promise with a date that would make it less bad.'));
out.push(table(['Prediction', 'How sure', 'My promise, with a date'], [['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I think _______ will _______, probably in _______. I am _______ sure. I will _______ by _______._'));
out.push(p('**Listener task:** write down the promise in the room that is most likely to be kept, and say what makes it so — it is almost always the date.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I will to telephone_ and _he will comes_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nadia sends with the figures, and answer the questions.'));
out.push(box(null, [
  '**Subject:** March figures and what April will do',
  'March: turnover 41.2 million, up 6% on February and up 11% on March last year. Three customers took longer to pay than their terms allow; all three have now paid.',
  '**What April will do.** The first ten days will be quiet — the week before Eid and the week of it. Nobody will order and half our customers will be closed.',
  'Then the second week after Eid will be very busy. Last year we did eleven days of normal trade in four, and we ran out of small boxes on the Wednesday.',
  '**What I would do about it.** Order the boxes in March rather than April. If we order the wrap at the same time we will get the hundred-roll price, which saves about 180,000.',
  'I am fairly sure about the quiet ten days. I am less sure about how busy the second week will be: last year was the first year it happened like that.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which sentence is a fact and which is a prediction? How can you tell?'));
out.push(item('2', 'What does she recommend, and what does it save?'));
out.push(item('3', 'Why does the last paragraph exist at all?'));
out.push(box('Writer\'s box', [
  '**A note on the figures — four parts:** what happened, with numbers → **what will happen**, with a reason → what you would do about it → **how sure you are**, said separately.',
  'Keep the **past** and the **future** in different paragraphs. March is a fact and April is a prediction, and a reader who cannot tell which is which stops trusting both.',
  'A recommendation needs a **number**: _which saves about 180,000_. Without it you are asking for a decision and giving nothing to decide with.',
  '⚠ **The last paragraph is the professional one.** Saying which part you are sure of, and which you are not, is what separates a forecast from a guess. It also protects you: the thing you flagged as uncertain is the thing nobody blames you for.',
  '⚠ Percentages and amounts: _up 6% on February_ · _41.2 million_ · _about 180,000_. Round where you are estimating and be exact where you are reporting, and never the other way round.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note on the figures for your own workplace — real or invented (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________   ______________: ______________, up/down ______________ on ______________. ______________.   **What ______________ will do.** ______________ will be ______________ — ______________. ______________.   **What I would do about it.** ______________. If we ______________ we will ______________, which saves ______________.   I am ______________ about ______________. I am less sure about ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the past and the future go in different paragraphs. Yours has last month and next month in the same one — which sentence is the fact?"',
  'And the band 3 habit: quote the box, ask a question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **can I tell which sentences are facts and which are predictions?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Facts and predictions in separate paragraphs', ''],
  ['A reason attached to the prediction', ''],
  ['A recommendation with a number', ''],
  ['A sentence saying how sure the writer is', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last paragraph. The class says which writer they would ask for a forecast again.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write what you think will happen in your trade in the next six months (60 to 100 words). Give one prediction you are sure of with its reason, one you are not sure of, and one thing you will do whichever way it goes.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the prediction I would bet on_   ✓ _is the hedge honest?_   ? _what would change your mind?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Keep them. Six months is one term and a half, and a class that reads its own predictions back learns more in ten minutes than in a unit.'));
out.push(box('Homework', ['Write your final text. Then write one prediction about your work, seal it in an envelope with the date, and give it to your teacher to open in three months (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.3 =======================
out.push(pb());
out.push(h2('14.3  The shipment may be late'));
out.push(p('**Function:** saying something is possible   ·   **Grammar:** _may_ and _might_   ·   **Pronunciation:** the flat voice that makes a warning useful'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things at your work that are **possible** next month but not certain.'));
out.push(p('**b**  Put these in order, from most certain to least: _it will be late · it is going to be late · it may be late · it might be late_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What may happen?   **A** the road may close   **B** the supplier may raise prices   **C** the shipment may be late'));
out.push(p('**b**  Listen again. **1** What are the two reasons the shipment may be late? **2** What does Nour do instead of waiting to find out?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.5  A possibility, not a problem yet', [
  ['Ms Shamsi', 'Nour, I want to tell you something before it becomes news. The Aleppo shipment may be late. It may be nothing.'],
  ['Nour', 'Late by how much, if it is late?'],
  ['Ms Shamsi', 'A week. Maybe ten days. The lorries are waiting at the crossing and nobody will say how long. It might clear tomorrow and it might not.'],
  ['Nour', 'Then I will plan for ten days and be pleased if it is three. Can you tell me two things? Which lines are on that shipment, and is there anything you can send from stock this week?'],
  ['Ms Shamsi', 'The wrap and the small boxes are on it. I have forty rolls of wrap here that are not on anybody\'s order.'],
  ['Nour', 'Send me thirty of those today and I will not have to telephone you in a panic on the twentieth.'],
  ['Ms Shamsi', 'That is what I was hoping you would say. Most people say "tell me when you know".'],
  ['Nour', 'By then it is not a possibility. It is a Tuesday with no wrap.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _may_ and _might_: possible, not decided**',
  table(['Form', 'Example', 'Notes'], [
    ['**may / might** + verb', 'The shipment **may be** late.', 'no **to**, no **-s**'],
    ['Negative', 'It **might not** clear tomorrow.', 'never ~~mayn\'t~~'],
    ['Degrees', 'will → is going to → **may** → **might**', 'roughly most to least certain'],
    ['With a number', 'It **may be** late **by a week**.', 'a possibility with a size'],
    ['Asking', '**How much**, if it is?', 'better than "will it be late?"'],
  ], [1.2, 1.7, 1.4]),
  '⚠ _May_ and _might_ are close enough at A2 to treat as the same word, with _might_ a little less certain. What matters is that neither one commits anybody, and that a colleague who hears them **plans** rather than waits.',
  '⚠ **Give the possibility a size.** _It may be late_ is a worry. _It may be late by a week, maybe ten days_ is something a person can work with. Always ask _by how much, if it is?_',
  '⚠ The useful answer to a possibility is not "tell me when you know". It is **two questions and one action**: what exactly is affected, what can be done now, and the thing you do today so that you are not telephoning in a panic later.',
  '**Practise:** Turn each worry into a possibility with a size, and add one action for today.',
  '1 the road  2 the power  3 a late payment  4 a member of staff leaving  5 a price rise',
  '**Useful phrases:**  It may be nothing.  ·  Late by how much, if it is?  ·  It might clear and it might not.  ·  I will plan for ten days.  ·  before it becomes news',
  '**Pronunciation – the flat warning.** 🔊 **Track 14.6** Listen: _the shipment may be late_ said flat, and said with alarm. The flat one gets a plan; the alarmed one gets a panic. Repeat the flat one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A warns of a possibility; B asks for its size and takes one action today. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, I want to tell you before it becomes news. __________ may __________. It may be nothing.'],
  ['B', '__________ by how much, if it is?'],
  ['A', '__________. Maybe __________. __________ and nobody will say how long. It might __________ and it might not.'],
  ['B', 'Then I will plan for __________. Can you tell me two things? __________, and __________?'],
  ['A', '__________. I have __________ here that __________.'],
  ['B', 'Send me __________ today and I will not have to __________.'],
]));
out.push(table(['Role card 1 — the power', 'Role card 2 — a member of staff'], [[
  'The industrial estate may go to four hours of power a day next month. It may be nothing. The freezer, the lift and the computers are affected; the generator takes two days to service.',
  'Your best counter assistant may be leaving — her husband may be moving to Latakia. It may be nothing. Nothing is decided and she has not said so officially.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the one action that was taken **today**. A warning that produces no action today is a warning that will be repeated.'));
out.push(PHRASE_CARD(['It may be nothing.', 'by how much, if it is?', 'It might and it might not.', 'I will plan for…', 'Can you tell me two things?', 'before it becomes news']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **three** colleagues about something that may happen at your work. Each time, give it a size, and agree one thing that could be done this week.'));
out.push(table(['What may happen', 'How big, if it does', 'What I can do this week'], [['', '', ''], ['', '', ''], ['', '', '']], [1.5, 1.3, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ may _______, by about _______. It may be nothing. This week I am going to _______._'));
out.push(p('**Listener task:** write down which possibilities in the room are worth acting on now and which are worth only watching. Both answers are professional; pretending there is no difference is not.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it may to be late_ and _it mays_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Nour sends round the office, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Aleppo shipment — possible delay, nothing certain',
  'Ms Shamsi telephoned this morning. The Aleppo shipment **may** be late. Nothing is certain and it may be nothing at all.',
  '**If it is late**, it will be by about a week, possibly ten days. The wrap and the small boxes are on it.',
  '**What I have done today.** Ms Shamsi has thirty rolls of wrap in her own stock and they are on tonight\'s lorry. That covers us to the twenty-fourth whatever happens.',
  '**What this means for you.** Abu Yasser: do not open the last pallet of boxes without telling me. Fadi: the Homs run on the twenty-first may move to the twenty-second. Nothing else changes.',
  'I will know more on Thursday and I will tell you either way, including if the answer is still "nobody knows".',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many times does the message say that nothing is certain?'));
out.push(item('2', 'What has already been done, and what does it buy?'));
out.push(item('3', 'What does the writer promise at the end, and why does it include the uncomfortable case?'));
out.push(box('Writer\'s box', [
  '**A message about something that may happen — five parts:** say it is **not certain**, twice → **if it happens**, how big → **what has already been done** → **what it means for each person**, by name → **when you will say more**.',
  'Put the names in. _Abu Yasser: do not open the last pallet._ A warning addressed to everybody is acted on by nobody, and the two lines with names are the only part most readers will remember.',
  '**Promise to report either way.** _Including if the answer is still "nobody knows"._ Most people only come back with news, so colleagues learn that silence means bad news, and they start asking.',
  '⚠ Do not use **will** anywhere in a message like this except for your own promise. The moment you write _the shipment will be late_, somebody acts on it as a fact — and if it arrives on time you are the person who cried wolf.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message about something that may happen at your work (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — possible ______________, nothing certain   ______________. ______________ **may** ______________. Nothing is certain.   **If it does**, it will be ______________. ______________.   **What I have done today.** ______________. That covers us ______________.   **What this means for you.** ______________: ______________. ______________: ______________. Nothing else changes.   I will know more ______________ and I will tell you either way.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says name the people. Yours says _staff should be aware_ — who exactly has to do something differently tomorrow?"',
  'If you cannot name a criterion from the box, you have found a preference, not a fault.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would anybody do anything differently after reading this?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Says it is not certain, more than once', ''],
  ['The size of it, if it happens', ''],
  ['Something already done today', ''],
  ['At least two people named with an instruction', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the "what this means for you" part. The class says whether they would know what to do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that may happen in the next year that would change your work (60 to 100 words). Say how likely it is, what it would change, and what you could do now that would be sensible either way.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the sensible-either-way action_   ✓ _may / might used, not will_   ? _how likely, really?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. The best answer in this cycle is always an action that is worth doing whether or not the thing happens. Find those, and say so.'));
out.push(box('Homework', ['Write your final text. Then warn one colleague about something that may happen, with its size and one action — and write down what they did with it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.4 =======================
out.push(pb());
out.push(h2('14.4  If we order now, we will get it on Tuesday'));
out.push(p('**Function:** linking a condition to a result   ·   **Grammar:** the first conditional   ·   **Pronunciation:** the pause at the comma'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish these: _If we order today, …_ · _If the road is closed, …_ · _If he pays on Thursday, …_'));
out.push(p('**b**  Which verb is wrong, and why? _If we **will order** now, we will get it on Tuesday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the decision?   **A** order now   **B** wait for the price   **C** split the order'));
out.push(p('**b**  Listen again. **1** What happens if they wait until Thursday? **2** What is the condition Mr Ayoub attaches to the bigger order?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.7  Order now or wait', [
  ['Nour', 'Two hundred rolls at the old price if we order today. If we wait until Thursday, it is the new price — about eleven per cent more.'],
  ['Mr Ayoub', 'And if we order today, where do we put two hundred rolls?'],
  ['Nour', 'If Abu Yasser clears the end bay, they will fit. He says he will if we take the broken pallets out this week.'],
  ['Mr Ayoub', 'Then order them today. But if the price does not rise on Thursday, I want to know, because he has told us that three times this year.'],
  ['Nour', 'If it does not rise, I will tell you and I will write it in the supplier note.'],
  ['Mr Ayoub', 'Write it either way. If it rises, that note is the reason we were right; if it does not, it is the reason we stop believing him.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the first conditional: a real condition and its result**',
  table(['Part', 'Verb', 'Example'], [
    ['**If** + condition', 'present simple', '**If we order** today,'],
    ['result', '**will** / **won\'t**', '**we will get** it on Tuesday.'],
    ['Either order', '', 'We will get it on Tuesday **if we order** today.'],
    ['Result can be a modal', 'can / must / may', 'If the bay is clear, **they can** go there.'],
    ['Result can be an order', 'imperative', 'If it does not rise, **tell me**.'],
  ], [1.2, 1.2, 2]),
  '⚠ **No _will_ after _if_.** ~~If we will order now…~~ This is the single commonest mistake in the structure and it survives into B1 unless it is drilled here.',
  '⚠ The **comma** goes in only when the _if_ half comes first: _If we order today, we will get it on Tuesday._ / _We will get it on Tuesday if we order today._',
  '⚠ At work the first conditional is how a decision is **argued**: condition, result, and then the condition attached to the agreement. _Order them — but if the price does not rise, I want to know._ Listen for that second condition; it is where the real negotiation is.',
  '**Practise:** Make the sentence, then attach a second condition to it.',
  '1 order today / old price  2 clear the bay / they fit  3 pay Thursday / discount  4 road closed / a day late  5 he is ill / Hala covers',
  '**Useful phrases:**  If we order today…  ·  …it is the new price.  ·  He says he will if…  ·  But if … , I want to know.  ·  Write it either way.',
  '**Pronunciation – the pause at the comma.** 🔊 **Track 14.8** Listen: _If we order today_ — rising, a small pause — _we will get it on Tuesday_ — falling. The pause is what tells the listener a result is coming. Repeat five.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A puts a choice with its consequences; B agrees and attaches a condition. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ at __________ if we __________ today. If we wait until __________, it is __________.'],
  ['B', 'And if we __________ today, where do we __________?'],
  ['A', 'If __________ , they will __________. He says he will if __________.'],
  ['B', 'Then __________ today. But if __________, I want to know, because __________.'],
  ['A', 'If __________, I will __________ and I will __________.'],
  ['B', '__________ either way. If __________, that is __________; if not, it is __________.'],
]));
out.push(table(['Role card 1 — the lorry hire', 'Role card 2 — the early payment'], [[
  'Hire the second lorry for Thursday now and it is 900,000. Wait and it may be 1.2 million, or there may be none. If Fadi does both runs instead, Homs arrives a day late.',
  'Pay the Aleppo invoice within ten days and there is a 3% discount — about 240,000. But if we pay early we are short for the wages on the 28th unless the Homs money arrives.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their decision for the class – **without the book**.'));
out.push(p('**Listener task:** write the **second** condition — the one attached to the agreement. That is where the real negotiation happened.'));
out.push(PHRASE_CARD(['If we order today…', 'If we wait until…', 'He says he will if…', 'But if…, I want to know.', 'Write it either way.', 'that is the reason we were right']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** real decisions waiting at your work. For each, say the condition, the result, and the condition you would attach before agreeing.'));
out.push(table(['If…', 'then…', 'The condition I would attach'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.4, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If we _______, we will _______. I would agree, but only if _______._'));
out.push(p('**Listener task:** write down the attached condition you think is cleverest. Nearly all of them ask for information later, not for money now.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — all of them _will_ after _if_. Correct them together, and say why the mistake is so easy to make.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the recommendation Nour writes, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Wrap — recommend ordering 200 rolls today',
  'The old price holds until Wednesday. If we order 200 rolls today, we pay 1.74 million. If we order on Thursday, the same rolls are about 1.93 million — 190,000 more.',
  '**Space.** If Abu Yasser clears the end bay this week, 200 rolls will fit. He has agreed, on condition that the broken pallets go out on Tuesday.',
  '**Money.** If we pay on delivery we lose the 3% early-payment discount on the Aleppo invoice, so the real saving is about 130,000, not 190,000.',
  '**Risk.** If the price does not rise on Thursday, we will have bought four months of wrap for no reason — but we will still use it, and this is the third time he has announced a rise.',
  '**Recommendation.** Order today. If the rise does not happen, I will record it in the supplier note, and if it happens twice more without rising we should stop ordering on his announcements.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many first conditionals are there, and what is each one for?'));
out.push(item('2', 'Which paragraph argues **against** the recommendation, and why is it there?'));
out.push(item('3', 'What does the writer commit to doing afterwards?'));
out.push(box('Writer\'s box', [
  '**A short recommendation — five short paragraphs:** the condition and the two prices → **space** → **money**, including what it costs elsewhere → **risk**, in the writer\'s own words → the recommendation, with what happens next.',
  '**Every paragraph is a first conditional and a number.** _If we order today, we pay 1.74 million._ A recommendation without the figures is an opinion, and a manager cannot sign an opinion.',
  '**Argue against yourself in the Risk paragraph.** A reader who finds the weakness themselves distrusts the whole note; a reader who is handed it trusts the rest.',
  '⚠ The true saving is rarely the headline one. Here it falls from 190,000 to 130,000 because paying early elsewhere is lost. Always look for what the decision costs **somewhere else**, and put that number in.',
  '⚠ End with what you will do afterwards — record it, check it, report it. That is what turns a recommendation into something the company learns from.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a short recommendation about a real choice at your work (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — recommend ______________   If we ______________, we ______________. If we ______________, ______________.   **Space / time.** If ______________, ______________.   **Money.** If we ______________ we lose ______________, so the real ______________ is ______________.   **Risk.** If ______________, we will have ______________ — but ______________.   **Recommendation.** ______________. If ______________, I will ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks what the decision costs somewhere else. Your saving is the headline number — is there anything it costs in another part of the business?"',
  'Quote the box. Ask the question. Let them find the number.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a manager sign this without asking you anything?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['No _will_ after _if_, anywhere', ''],
  ['A number in every paragraph', ''],
  ['A paragraph that argues against the recommendation', ''],
  ['What the writer will do afterwards', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their Risk paragraph. The class says which recommendation they would sign.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision you are facing, at work or outside it (60 to 100 words). Use at least three first conditionals: one for each way it could go, and one for the condition you would attach before agreeing.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the condition I would attach too_   ✓ _no "will" after "if"_   ? _what would decide it for you?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the real question money, and in how many is it time? It is usually time, and people usually say money.'));
out.push(box('Homework', ['Write your final text. Then take a decision somebody at your work made this month and write the recommendation that should have gone with it, in five paragraphs (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.5 =======================
out.push(pb());
out.push(h2('14.5  Sales went up by six per cent'));
out.push(p('**Function:** describing a simple chart   ·   **Grammar:** _went up / down by…_, _from … to …_, trend words   ·   **Pronunciation:** saying percentages and large numbers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say these aloud: 6% · 11.5% · 41.2 million · 1.74 million · a third · double.'));
out.push(p('**b**  Which word goes with which? _rose · fell · stayed the same · doubled_ — and which preposition: _by_ or _to_?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which month was the best?   **A** January   **B** February   **C** March'));
out.push(p('**b**  Listen again. **1** By how much did sales rise in March? **2** What does Nadia say about the February figure?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.9  Three months on one page', [
  ['Nadia', 'Three months. January 36.1 million, February 38.9, March 41.2.'],
  ['Mr Ayoub', 'So it has gone up every month.'],
  ['Nadia', 'It has gone up every month, but not evenly. From January to February it rose by about eight per cent. From February to March it rose by six. The trend is up and the rate is slowing.'],
  ['Nour', 'Is six per cent bad?'],
  ['Nadia', 'Six per cent is good. Six after eight is a question, not a problem. And February had the two big Homs orders in it, which were one customer, which means February was not really a February.'],
  ['Mr Ayoub', 'So what do I tell the bank?'],
  ['Nadia', 'Up eleven per cent on the same quarter last year, and say the quarter, not the month. One month is weather. Three months is a trend.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing figures – the four shapes you need**',
  table(['Shape', 'Example'], [
    ['**rose / fell by** + an amount', 'Sales **rose by** six per cent.'],
    ['**rose / fell from … to …**', 'Sales **rose from** 38.9 **to** 41.2 million.'],
    ['**stayed the same / was steady**', 'Costs **stayed the same** all quarter.'],
    ['**doubled · halved · tripled**', 'Complaints **halved** after April.'],
    ['Trend words', 'The trend is **up** · the rate is **slowing** · **steady** growth'],
  ], [1.4, 2.4]),
  '⚠ **by** is the size of the change; **to** is where it ended. _It rose **by** six per cent_ and _it rose **to** 41.2 million_ are both right and they say different things. ~~It rose to six per cent~~ says something nobody meant.',
  '⚠ Three sentences describe any simple chart: **what it did overall · the biggest single change · the one thing that explains it**. More than three and you are reading the numbers aloud, which anybody can do from the page.',
  '⚠ Say the **period** out loud — _on the same quarter last year_. A percentage with no period attached is the commonest way figures are used to mislead, usually without meaning to.',
  '**Practise:** Describe these in three sentences: 36.1 → 38.9 → 41.2, with the February Homs orders in it.',
  '**Useful phrases:**  rose by · fell from … to … · stayed the same · the trend is up · the rate is slowing · on the same quarter last year · one month is weather',
  '**Pronunciation – percentages and millions.** 🔊 **Track 14.10** Listen: _six per **cent**_ · _forty-one point two **million**_ · _eleven per cent **up**_. The stress goes on the unit, not the number. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads three figures; B describes them in three sentences and names the thing that explains them. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Three months. __________, __________, __________.'],
  ['B', 'It has gone __________ every month, but not evenly. From __________ to __________ it rose by __________. From __________ to __________ it rose by __________. The trend is __________ and the rate is __________.'],
  ['A', 'Is __________ bad?'],
  ['B', '__________ is good. __________ after __________ is a question, not a problem. And __________ had __________ in it, which means __________.'],
  ['A', 'So what do I tell __________?'],
  ['B', '__________, and say the __________, not the __________.'],
]));
out.push(table(['Role card 1 — complaints', 'Role card 2 — deliveries'], [[
  'Complaints by month: 14, 9, 11. The nine was the month the counter was closed for two weeks, so fewer customers came at all.',
  'Late deliveries by month: 11, 7, 7. The second seven includes the week the road to Homs was shut, which would normally have made it worse.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs describe their figures for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that **explains** the numbers. Anybody can read a chart aloud; the explaining sentence is the job.'));
out.push(PHRASE_CARD(['rose by six per cent', 'from 38.9 to 41.2', 'the trend is up', 'the rate is slowing', 'one month is weather', 'say the quarter, not the month']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring three figures from your own work — any three, three months or three weeks. Describe them to a colleague in three sentences, then say the thing that explains them.'));
out.push(table(['The three figures', 'Overall', 'Biggest change', 'What explains it'], [['', '', '', ''], ['', '', '', '']], [1.4, 1.1, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It went from _______ to _______. The biggest change was _______, by _______. That is because _______._'));
out.push(p('**Listener task:** write down one figure in the room that would be misleading without its explanation. There is nearly always one.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _rose to six per cent_ and _increased with 6%_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the quarterly note, and answer the questions.'));
out.push(box(null, [
  '**First quarter — the three sentences, then the detail**',
  'Turnover rose every month of the quarter, from 36.1 million in January to 41.2 million in March — up 14% across the quarter and 11% on the same quarter last year. The biggest single rise was January to February, 8%. That month contained two unusually large Homs orders from one customer, so February is better read as a good month than as a new level.',
  '**Costs** stayed the same except for transport, which rose 9% with the fuel price.',
  '**Complaints** fell from 14 to 11, and the drop is real: the counter was open the same number of days in all three months.',
  '**What I would watch.** The rate of growth is slowing — 8%, then 6%. That is still growth, and three months is not yet a trend. If April is below 4% I would want to look at why; the second counter opens in May and will change the figures either way.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Find the three sentences that describe the whole quarter.'));
out.push(item('2', 'Why does the complaints paragraph mention the opening days?'));
out.push(item('3', 'What number would make the writer worried, and what has she said will blur it?'));
out.push(box('Writer\'s box', [
  '**A note on figures — the three sentences first, the detail after.** Overall movement with the numbers → the biggest single change → the thing that explains it. Everything else goes below, with a heading each.',
  '**Protect your own figures from being misread.** _February is better read as a good month than as a new level_ · _the counter was open the same number of days_. If you do not say it, somebody will quote the figure without it.',
  '**Say what would worry you, before it happens, with a number.** _If April is below 4%._ A forecast that names its own alarm is worth four that only describe the past.',
  '⚠ Give every percentage its period: _14% across the quarter_, _11% on the same quarter last year_. They are different claims and the second is the one a bank asks for.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note on three figures from your own work (35 words or more). Use the frame.'));
out.push(p('**______________ — the three sentences, then the detail**   ______________ rose/fell every ______________, from ______________ to ______________ — up/down ______________ across ______________ and ______________ on ______________. The biggest single change was ______________, ______________. That is because ______________.   **______________.** ______________.   **What I would watch.** ______________. If ______________ I would ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says give every percentage its period. _Up 9%_ — on last month, or on last year? They are different claims."',
  'Band 3 is a quotation and a question. Nothing else.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody quote one of these numbers and mislead with it?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three sentences for the whole picture', ''],
  ['_by_ and _to_ used correctly', ''],
  ['Every percentage with its period', ''],
  ['A number that would make the writer worried', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I would watch" line. The class says which one they would want to be told about in advance.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a number at your work that has changed in the last year (60 to 100 words). Say what it was, what it is, by how much it moved, what explains it, and what it would take for you to call it a trend.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the explaining sentence_   ✓ _by / to / from used correctly_   ? _how many months before you would call it a trend?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the changes have an explanation that everybody at that workplace already knows — and has anybody ever written it down?'));
out.push(box('Homework', ['Write your final text. Then find a percentage in a newspaper or on the radio and write what period it is measured over. If it does not say, write that (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.6 =======================
out.push(pb());
out.push(h2('14.6  I think we will need a second lorry'));
out.push(p('**Function:** giving an opinion about the future at a meeting   ·   **Grammar:** _I think … will_, degrees of certainty, agreeing and disagreeing   ·   **Pronunciation:** the voice that is sure but not loud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When did you last give an opinion at a meeting? What happened? If the answer is "I did not", say why not.'));
out.push(p('**b**  Order these from most to least certain: _I am sure we will … · I think we will … · we might … · I am not sure, but …_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour think?   **A** they need a second lorry   **B** they need a second driver   **C** the lorry is too old'));
out.push(p('**b**  Listen again. **1** What evidence does she give? **2** How does Abu Yasser disagree without saying she is wrong?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.11  The Monday meeting, last item', [
  ['Mr Ayoub', 'Anything else before we finish?'],
  ['Nour', 'I think we will need a second lorry by the autumn. I am not certain, but I think so.'],
  ['Mr Ayoub', 'Why?'],
  ['Nour', 'Because Fadi has done five late deliveries since January and four of them were the same thing — two runs in one day that do not fit in one day. If the second counter brings the customers we are expecting, it will be six runs a week, not four.'],
  ['Abu Yasser', 'I agree with the problem. I am not sure about the lorry. We hired one for three days in November and it cost less than a month of payments.'],
  ['Nour', 'That is fair. Then maybe the question is not a lorry; it is what we do on the two days a week that do not fit.'],
  ['Mr Ayoub', 'Put it on next Monday\'s list, both of you, with the November hire figures. Nour — you were right to say it and you were right to say you were not certain.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving an opinion about the future – and leaving room to be wrong**',
  table(['Move', 'Phrases'], [
    ['**Say it**', 'I think we will… · I would expect… · My guess is that…'],
    ['**Say how sure**', 'I am not certain, but… · I am fairly sure… · I may be wrong, but…'],
    ['**Give the evidence**', 'Because… · We have had … since … · Four of them were the same thing.'],
    ['**Agree in part**', 'I agree with the problem. I am not sure about the ___ .'],
    ['**Accept a correction**', 'That is fair. Then maybe the question is not ___ ; it is ___ .'],
  ], [1.1, 3]),
  '⚠ **Evidence before opinion is weaker at a meeting; opinion then evidence is stronger.** Say what you think, then why. People who build up to it slowly are interrupted.',
  '⚠ **Saying how sure you are is not weakness.** _I am not certain, but I think so_ makes the opinion **easier** to act on, because the manager knows how much weight to put on it.',
  '⚠ **Agreeing in part is the most useful meeting move in this book.** _I agree with the problem; I am not sure about the solution_ keeps the discussion on the problem, which is nearly always where it belongs.',
  '**Practise:** Give an opinion about each, with how sure you are and one piece of evidence. 1 next month\'s sales 2 a member of staff leaving 3 a price rise 4 a new customer 5 the weather in your trade',
  '**Useful phrases:**  I think we will…  ·  I am not certain, but…  ·  Because four of them were the same thing.  ·  I agree with the problem.  ·  That is fair.  ·  Put it on next Monday\'s list.',
  '**Pronunciation – sure but not loud.** 🔊 **Track 14.12** Listen: _I think we will need a second lorry_ said quietly and flat, then said loudly. The quiet one is listened to. Repeat the quiet one and resist adding volume.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A chairs; B gives an opinion with evidence; C agrees in part and disagrees in part. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Anything else before we finish?'],
  ['B', 'I think we will __________ by __________. I am not certain, but I think so.'],
  ['A', 'Why?'],
  ['B', 'Because __________ since __________ and __________ of them were the same thing. If __________, it will be __________.'],
  ['C', 'I agree with the problem. I am not sure about __________. We __________ and it cost __________.'],
  ['B', 'That is fair. Then maybe the question is not __________; it is __________.'],
]));
out.push(table(['Role card 1 — more staff', 'Role card 2 — a bigger store room'], [[
  'B thinks another counter assistant will be needed by September. Evidence: eleven people waited over ten minutes last Thursday. C agrees with the problem but thinks the hours are wrong, not the number of people.',
  'B thinks the store room will be too small by the winter. Evidence: the end bay has been full since March and two deliveries went back. C agrees, but thinks the problem is what is in it, not how big it is.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence where somebody agreed in part. Then write what it made possible that a flat disagreement would not have.'));
out.push(PHRASE_CARD(['I think we will…', 'I am not certain, but…', 'Because four of them were the same.', 'I agree with the problem.', 'That is fair.', 'maybe the question is not…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Hold a four-minute meeting in groups of three about something real at your work. Everybody must give one opinion about the future with evidence, and everybody must agree in part with somebody at least once.'));
out.push(table(['My opinion', 'How sure', 'My evidence', 'What I agreed with'], [['', '', '', ''], ['', '', '', '']], [1.3, 0.9, 1.5, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said I thought _______. My evidence was _______. I agreed with _______ about _______, but not about _______._'));
out.push(p('**Listener task:** note who in the room changed their mind during the meeting. In most meetings nobody does, and that is worth saying out loud.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am agree_ and _I think we will to need_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the item Nour puts on the agenda, and answer the questions.'));
out.push(box(null, [
  '**For Monday\'s list — two runs in one day, from the autumn**',
  '**What I think will happen.** I think we will not be able to do the Homs and Hama runs in the same day from about September. I am not certain; it depends on the second counter.',
  '**Why I think it.** Five late deliveries since January. Four were the same thing: two runs, one day, one driver. If the counter brings even half the customers we are expecting, it will be six runs a week instead of four.',
  '**What I am not sure about.** Whether the answer is a second lorry. Abu Yasser points out that we hired one for three days in November for less than a month of payments, and he is right. The November figures are attached.',
  '**What I would like on Monday.** Ten minutes, the November hire figures, and a decision about the two days a week — not about the lorry.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer separate into its own heading, and why?'));
out.push(item('2', 'Who is named as disagreeing, and how is the disagreement described?'));
out.push(item('3', 'What exactly is she asking the meeting to decide?'));
out.push(box('Writer\'s box', [
  '**An agenda item — four headings:** what I think will happen → why I think it, with numbers → **what I am not sure about** → what I would like from the meeting, and how long it will take.',
  '**Name the colleague who disagrees, and say they are right where they are right.** _Abu Yasser points out … and he is right._ It costs you nothing, it stops the meeting being a surprise, and the disagreement is then about the problem rather than about who raised it.',
  '**Ask for a decision about the right thing.** _A decision about the two days a week — not about the lorry._ Half the bad meetings in the world are a decision about the wrong question.',
  '⚠ Say how long you want. _Ten minutes_ gets you ten minutes; nothing gets you two, at the end, when everybody is standing up.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an agenda item for a real meeting at your work (35 words or more). Use the frame.'));
out.push(p('**For ______________ — ______________**   **What I think will happen.** I think ______________. I am not certain; it depends on ______________.   **Why I think it.** ______________. ______________ were the same thing. If ______________, it will be ______________.   **What I am not sure about.** ______________. ______________ points out that ______________, and ______________.   **What I would like.** ______________ minutes, ______________, and a decision about ______________ — not about ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says ask for a decision about the right thing. Yours asks for a decision about the van — is the van the question, or is the question what happens on those two days?"',
  'This is the hardest band 3 question to ask and the most useful one in the unit.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **is the decision being asked for the right one?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The opinion first, the evidence after', ''],
  ['A heading for what the writer is unsure about', ''],
  ['The colleague who disagrees named fairly', ''],
  ['A decision asked for, and a length of time', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I am not sure about" heading. The class says which writer they would trust with a bigger question.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you believe will happen at your work that nobody has said out loud (60 to 100 words). Say why you think it, how sure you are, what would change your mind, and why it has not been said.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the evidence that convinced me_   ✓ _is there a hedge?_   ? _who should hear this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the reason it has not been said that nobody asked? Ask whether anybody is going to say it this month.'));
out.push(box('Homework', ['Write your final text. Then put one opinion about the future on a real agenda at your work — or write the item you would put, and what you would want decided (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.7 =======================
out.push(pb());
out.push(h2('14.7  Review & Mediate: the sales chart and the forecast note'));
out.push(p('**Function:** telling a colleague what a chart and a forecast say — and what they do not   ·   **Review:** going to · will · may and might · the first conditional · describing figures · opinions at a meeting'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 14 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Which is a decision already taken: _we will open_ or _we are going to open_?',
  '**2** What is wrong with _If we will order now…_?',
  '**3** _rose **by** six per cent_ or _rose **to** six per cent_ — and what is the difference?',
  '**4** What two things should you always ask about a possibility?',
  '**5** What does "I agree with the problem" leave open?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi think the chart says?   **A** the company is doing badly   **B** his job is at risk   **C** there will be more work'));
out.push(p('**b**  Listen again. **1** What does the chart not show? **2** What does Nour say the forecast is really for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.13  "What does this mean for me?"', [
  ['Fadi', 'Nour. The paper on the board — the chart and the note under it. Nadia says growth is slowing. Does slowing mean we are going down?'],
  ['Nour', 'No. Look at the three numbers: 36.1, 38.9, 41.2. Every month is bigger than the one before it. Slowing means it is going up less fast than it was, not that it is going down.'],
  ['Fadi', 'Then why write it?'],
  ['Nour', 'Because it may mean something later and she would rather say it now than explain it in June. Read the last line: _if April is below four per cent I would want to look at why_. That is a number she has put there so that nobody argues about it in April.'],
  ['Fadi', 'And the second counter?'],
  ['Nour', 'That is going to happen — it is decided, the builder starts on the fourteenth. The rest of the note is _may_ and _I think_. The chart is what happened. The note is what one person expects, and she has said which parts she is sure of.'],
  ['Fadi', 'So the work is going up.'],
  ['Nour', 'The work is going up. The note does not say that anywhere, and it is the thing it most means for you.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – figures and a forecast, where the meaning for the reader is not written down**',
  table(['To correct the reading', 'To separate fact from forecast', 'To say what it means for them'], [
    ['Slowing means ___ , not ___ .', 'The chart is what happened; the note is what ___ expects.', 'The note does not say it anywhere, and it is the thing it most means for you.'],
    ['Look at the three numbers.', 'That is decided — ___ . The rest is _may_ and _I think_.', 'For you it means ___ .'],
  ], [1.6, 1.8, 1.8]),
  '⚠ **The commonest misreading of a figure is a word, not a number.** _Slowing_, _down on last year_, _below target_ — people hear the word and never look at the three numbers underneath it. Point at the numbers first.',
  '⚠ **Separate the parts by their grammar.** _Is going to_ = decided. _Will_ = predicted. _May_ = possible. You can sort any forecast note into three piles using nothing but the verbs, and that is the fastest explanation there is.',
  '⚠ **Say what it means for the person in front of you.** A forecast is written for the company. The sentence that matters to a driver — _the work is going up_ — is usually nowhere on the page.',
  '**Practise:** The note says: _growth is slowing; the second counter opens in May; April may be below 4%_. Explain it to somebody who has decided it is bad news.',
  '**Useful phrases:**  Slowing means…, not…  ·  Look at the three numbers.  ·  That is decided.  ·  The rest is _may_ and _I think_.  ·  it is the thing it most means for you',
  '**Pronunciation – correcting without contradicting.** 🔊 **Track 14.14** Listen: _No. Look at the three numbers._ The _no_ is short and flat, and the correction goes straight to evidence. Repeat four, and do not let your voice rise on the _no_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a document silently; B has decided it is bad news. A corrects the reading, sorts the verbs, and says what it means for B. Then swap.'));
out.push(table(['Document 1 — for A', 'Document 2 — for B'], [[
  '**NOTICE.** _Costs rose 9% in the quarter, driven entirely by transport. We are going to review all delivery routes in June. Margins may come under pressure in the second half. We do not expect any change to staffing._  **B says:** they are going to cut the drivers.',
  '**NOTE.** _Complaints fell from 14 to 11. The counter was closed for two weeks in February. We are going to open a second counter in May; I think waiting times will fall sharply, though they may rise in the first fortnight._  **A says:** so complaints are only down because we were shut.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that said what the document meant **for that person**. It is never a sentence that appears in the document.'));
out.push(PHRASE_CARD(['Slowing means…, not…', 'Look at the three numbers.', 'That is decided.', 'The rest is _may_.', 'What it means for you is…', 'she would rather say it now']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a short set of figures with a forecast note. Read it silently. Then explain it to **two** colleagues: what happened, what is decided, what is only expected, and what it means for them.'));
out.push(table(['Who I told', 'What they thought it said', 'What it means for them'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the note you mediated. This is the **second** unit of Book 2, and again the document does not say the thing that matters most to the person reading it — here, what the figures mean for their own week.'));
out.push(p('_It\'s a ______. They thought it said ______. The verbs sort into ______ decided, ______ predicted and ______ possible. For them it means ______._'));
out.push(p('**Listener task:** add this unit\'s words to the Book 2 office-word list: _turnover · margin · quarter · forecast · trend · under pressure_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Growth is slowing._   **A** Sales are falling. **B** Sales are still rising, but less fast. **C** Sales have stopped.',
  '**2**  _Turnover rose by 6% on the same quarter last year._   **A** Compared with the three months before. **B** Compared with the same three months a year ago. **C** Compared with last month.',
  '**3**  _We are going to open a second counter in May._   **A** It is decided. **B** It is being considered. **C** It is possible.',
  '**4**  _Margins may come under pressure in the second half._   **A** Margins will fall. **B** Margins have fallen. **C** Margins might fall; it is not certain.',
  '**5**  _If the price does not rise on Thursday, tell me._   **A** The price will rise. **B** Report it only if the rise does not happen. **C** Tell me on Thursday whatever happens.',
  '**6**  _Costs stayed the same except for transport._   **A** All costs rose. **B** Only transport costs changed. **C** Costs fell.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** with three points that must all appear.',
  'For a message about figures or a plan, the three points are usually: **what the document says** · **the part that is decided** · **what you are going to do about it**.',
  '⚠ Keep the three verb families straight in a short message as well: _is going to_ for the decided part, _will_ for your own promise, _may_ for anything else. In 25 words there is no room to explain a wrong one.',
  '⚠ Do not copy the document\'s worrying word into your message without its number. _Slowing_ on its own frightens people; _slowing — 8% then 6%_ does not.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** A colleague has seen the chart on the board and is worried. Write them a message (25 words or more). Say **what the figures actually show**, **the one thing that is decided**, and **what you will do** to help them.'));
out.push(p('Hi ______________, I saw you looking at ______________. The figures show ______________ — ______________. The one thing that is decided is ______________. I will ______________ on ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the figures actually show, with a number', ''],
  ['The decided thing, in _going to_', ''],
  ['A promise with a day in it', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a figure at your work was misunderstood (60 to 100 words). Say what the figure was, what people thought it meant, what it actually meant, and what one sentence would have prevented it.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then look at your own workplace\'s last set of figures and write the one sentence that says what they mean for the person who does your job (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 14 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The builder starts on the fourteenth — we ___ open a second counter.   a) are going to   b) might   c) may',
  '2  If we ___ today, we will get it on Tuesday.   a) will order   b) order   c) are ordering',
  '3  Sales rose ___ six per cent.   a) to   b) with   c) by',
  '4  The shipment ___ be late, but nothing is certain.   a) will   b) may   c) is going to',
  '5  Turnover rose from 38.9 ___ 41.2 million.   a) to   b) by   c) at',
  '6  I ___ we will need a second lorry.   a) am thinking   b) think   c) am think',
  '7  It ___ not clear tomorrow.   a) might   b) mights   c) might to',
  '8  Costs ___ the same all quarter.   a) stayed   b) stay   c) staying',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 14.15** Listen to a short report of the figures. Complete the note.   Three months: ______   Biggest rise: ______   What explains it: ______   What is decided: ______   What may happen: ______'));
out.push(dlg('Track 14.15  Audio script (read after the check)', [
  ['Nadia', 'Three months: 36.1, 38.9 and 41.2 million. The biggest single rise was January to February, eight per cent.'],
  ['Nadia', 'February had two large Homs orders from one customer in it, so it is better read as a good month than as a new level.'],
  ['Nadia', 'The second counter is going to open in May; that is decided. Transport costs may rise again if the fuel price moves, and if April is below four per cent I would want to look at why.'],
]));
out.push(p('**C  Writing.** Write three sentences about any three figures from your own work (35+ words): what they did overall, the biggest change, and the thing that explains it.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 14)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what my company is going to do, with a date and a number that justifies it',
  '☐ predict with _will_, and say how sure I am',
  '☐ warn about something possible with _may_, give it a size, and take one action today',
  '☐ link a condition to a result without putting _will_ after _if_',
  '☐ attach a condition to my agreement',
  '☐ describe three figures in three sentences, with _by_, _to_ and _from_ in the right places',
  '☐ give an opinion about the future at a meeting, and agree with part of somebody else\'s',
  '☐ tell a colleague what a chart and a forecast mean — including the part that is not written down',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 14 · Student\'s Book');
