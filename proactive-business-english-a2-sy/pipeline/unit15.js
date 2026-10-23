// Proactive Business English A2 · Syria Edition · Book 2 · Unit 15 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'fault · faulty · malfunction · out of order · spare part · temporary · workaround · outage · shortfall · backlog · root cause · solution · resolve · escalate · priority · downtime · affected · knock-on · contingency · interim · bottleneck · recurring · jam · reset · stand-by · make do';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 15  Problems and Solutions at Work'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**15.1**  describe a problem exactly, so that somebody can act on it',
  '**15.2**  suggest three ways round it',
  '**15.3**  say what will happen if nothing is done',
  '**15.4**  say what was done, without saying who did it',
  '**15.5**  break bad news to a customer',
  '**15.6**  buy time on the telephone without losing the customer',
  '**15.7**  Review & Mediate: tell a colleague what the problem report says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The difference between a problem and a complaint', [
  'A complaint says that something is wrong. A **problem report** says what is wrong, since when, what it stops, what has been tried, and what is being asked for. The first one makes a person feel better; the second one gets the thing fixed.',
  'This unit is the English of the second kind. It is also, quietly, the English of being believed: a person who reports five problems precisely is listened to on the sixth, and a person who says _nothing works_ is not.',
  '⚠ One warning about the passive, which arrives in 15.4. _It was delivered yesterday_ hides who delivered it. That is sometimes exactly right — nobody needs to know which driver — and sometimes a way of not saying who is responsible. Learn to use it, and learn to notice when somebody is using it on you.',
], C.lyellow, C.orange));

// ======================= CYCLE 15.1 =======================
out.push(pb());
out.push(h2('15.1  The printer is jamming again'));
out.push(p('**Function:** describing a problem   ·   **Grammar:** present continuous for a developing problem; negative forms   ·   **Pronunciation:** _isn\'t_, _doesn\'t_, _won\'t_ in connected speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things at your work that are not working properly today. Any three — nothing is too small.'));
out.push(p('**b**  Which is more useful to a repair man: _it is not working_, or _it stops after about ten pages and the paper jams at the back_? Why?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What exactly is wrong with the printer?   **A** it is out of ink   **B** it jams after about ten pages   **C** it will not switch on'));
out.push(p('**b**  Listen again. **1** Since when has it been doing it? **2** What has already been tried?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.1  "It is not working" is not a report', [
  ['Nour', 'Abu Yasser, the printer is not working.'],
  ['Abu Yasser', 'It printed the notes this morning. What is it doing?'],
  ['Nour', 'It is jamming. It takes about ten pages and then the paper catches at the back, on the left side, and the light flashes twice.'],
  ['Abu Yasser', 'Since when?'],
  ['Nour', 'Since Thursday. It did it twice on Thursday and four times today. It is getting worse, not better.'],
  ['Abu Yasser', 'And what have you tried?'],
  ['Nour', 'I have taken the back off and cleared it three times, and I have tried the other paper. It does it with both.'],
  ['Abu Yasser', 'Now that is a report. Telephone the man and say exactly what you have just said to me, in that order, and he will bring the part with him. Say "it is not working" and he will come, look, and come back on Thursday with the part.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing a problem – the five things, in this order**',
  table(['', 'Question', 'Example'], [
    ['**1**', 'What is it doing?', 'It **is jamming** after about ten pages.'],
    ['**2**', 'Where exactly?', 'The paper catches **at the back, on the left**.'],
    ['**3**', 'Since when?', '**Since Thursday** — twice then, four times today.'],
    ['**4**', 'Is it getting worse?', 'It **is getting worse**, not better.'],
    ['**5**', 'What have you tried?', 'I **have cleared** it three times and **tried** other paper.'],
  ], [0.4, 1.3, 2.4]),
  '⚠ **The present continuous is the tense of a problem in progress.** _It is jamming_ · _the system is running slowly_ · _the van is making a noise_. The present simple — _it jams_ — describes a permanent fact, which is a different and worse piece of news.',
  '⚠ Negatives: _it **isn\'t** printing_ · _the system **doesn\'t** accept the code_ · _the door **won\'t** close_. _Won\'t_ for a machine means it refuses, and English uses it about objects all the time.',
  '⚠ **"It is not working" is not a report.** It is the sentence that brings a man with no part in his bag. Give the five answers above and you have turned one visit into one repair.',
  '**Practise:** Report each one in five parts. 1 a printer 2 a van 3 a system 4 a door 5 a telephone line',
  '**Useful phrases:**  It is jamming.  ·  on the left, at the back  ·  Since Thursday.  ·  It is getting worse.  ·  I have tried…  ·  Now that is a report.',
  '**Pronunciation – the squeezed negative.** 🔊 **Track 15.2** Listen: _it **isn\'t** printing_ · _it **doesn\'t** take the code_ · _it **won\'t** close_. In speech the negative is short and the stress goes on the verb after it. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a fault badly; B asks the five questions until there is a report. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, the __________ is not working.'],
  ['B', 'It __________ this morning. What is it doing?'],
  ['A', 'It is __________. It __________ and then __________, and __________.'],
  ['B', 'Since when?'],
  ['A', 'Since __________. It did it __________ and __________ today. It is getting __________.'],
  ['B', 'And what have you tried?'],
  ['A', 'I have __________ and I have __________. It does it with __________.'],
]));
out.push(table(['Role card 1 — the van', 'Role card 2 — the order system'], [[
  'A noise from the front left when turning right, not when turning left. Since the rain last Tuesday. Worse when the van is loaded. Fadi has checked the tyre pressure and changed nothing else.',
  'Orders over twelve lines will not save — the screen returns to the top and the lines are lost. Since the update on the ninth. Four times today. Nadia has tried a different computer and it does the same.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their report for the class – **without the book**.'));
out.push(p('**Listener task:** tick the five parts as you hear them. Which part was missing, and what would the repair man have had to ask?'));
out.push(PHRASE_CARD(['It is jamming.', 'at the back, on the left', 'Since Thursday.', 'It is getting worse.', 'I have tried…', 'It does it with both.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Report **three** real faults at your own workplace, in five parts each, to a colleague. Your colleague may only listen and tick; if a part is missing they say which number.'));
out.push(table(['What', 'Doing what, where', 'Since', 'Worse?', 'Tried'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1, 1.6, 0.8, 0.7, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The _______ is _______, at _______, since _______. It is getting _______. We have tried _______._'));
out.push(p('**Listener task:** write down the fault in this room that has been going on longest. Ask why nobody has reported it in five parts.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is not work_ and _since two weeks_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the fault report, and answer the questions.'));
out.push(box(null, [
  '**FAULT REPORT — office printer (HP, trade counter)**',
  '**What it is doing.** It jams after about ten pages. The paper catches at the back on the left-hand side and the amber light flashes twice.',
  '**Since when.** Thursday 12th. Twice on Thursday, three times on Sunday, four times today.',
  '**Getting worse.** Yes. It was once a day; now it is once an hour.',
  '**What we have tried.** Cleared the back three times; changed to the other paper (same); switched it off for twenty minutes (same); printed from a different computer (same).',
  '**What it stops.** Delivery notes. We are writing them by hand, which takes about forty minutes a day and the handwriting has already caused one wrong address.',
  '**What we are asking for.** An engineer with the rear feed roller, this week. Please confirm the day.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which part of the report would make the engineer bring a part with him?'));
out.push(item('2', 'What is the cost of the fault, and why is it in the report at all?'));
out.push(item('3', 'What exactly is being asked for?'));
out.push(box('Writer\'s box', [
  '**A fault report — seven short headings:** what it is doing · since when, with the count · getting worse? · what we have tried · **what it stops** · what we are asking for · and a request to confirm.',
  '**The count matters more than the adjective.** _Twice, three times, four times_ tells a reader everything that _it keeps jamming_ does not, and it cannot be argued with.',
  '**"What it stops" is the paragraph that gets the visit.** A broken printer is a nuisance; forty minutes a day of hand-written delivery notes and a wrong address is a cost, and costs get booked in.',
  '⚠ **Ask for something specific.** _An engineer with the rear feed roller, this week_ — not _please look into this_. Name the part if you know it, even if you are wrong: it tells them you have looked.',
  '⚠ Keep every heading to one or two lines. A fault report that runs to a page is read as a complaint.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a fault report about something at your workplace (35 words or more). Use the frame.'));
out.push(p('**FAULT REPORT — ______________**   **What it is doing.** ______________.   **Since when.** ______________. ______________ times.   **Getting worse.** ______________.   **What we have tried.** ______________; ______________; ______________.   **What it stops.** ______________, which costs ______________.   **What we are asking for.** ______________. Please confirm ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the count matters more than the adjective. Yours says _it keeps happening_ — how many times this week?"',
  'Quote the box, ask the question, stop. The writer finds the number; you do not supply it.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would somebody arrive with the right part?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What it is doing, exactly where', ''],
  ['A count, not an adjective', ''],
  ['What has been tried', ''],
  ['What it stops, with a cost', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what it stops" heading. The class says which report would be acted on first, and that is nearly always the one with the cost in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a thing at your work that has been broken or wrong for a long time (60 to 100 words). Say what it does, how long it has been like that, what everybody does instead, and what that costs in a week.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the real cost_   ✓ _is there a count?_   ? _who could fix it, and what would they need?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Add up the weekly costs in the room. The total is usually large enough to be worth saying out loud, and nobody has ever added it up before.'));
out.push(box('Homework', ['Write your final text. Then write the real fault report for the thing that has been broken longest at your work — all seven headings — and give it to somebody who could act on it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.2 =======================
out.push(pb());
out.push(h2('15.2  Why don\'t we send it with the Homs lorry?'));
out.push(p('**Function:** suggesting   ·   **Grammar:** _Why don\'t we…? · We could… · Shall we…? · What about + -ing_   ·   **Pronunciation:** the rise that makes a suggestion a suggestion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  A delivery is going to be two days late. Say three different things the company could do. Do not judge them yet.'));
out.push(p('**b**  Which of these invites an answer and which sounds like an order? _We could ask him. · Why don\'t we ask him? · Ask him. · Shall we ask him?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many suggestions are made?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** Which suggestion is rejected, and why? **2** What is decided in the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.3  Three ways round it', [
  ['Nour', 'The wrap will not be here until Thursday and the Tarabishi order goes out on Tuesday. Three ideas.'],
  ['Hala', 'Why don\'t we send it without wrap and wrap it at his shop?'],
  ['Nour', 'We could, but his shop is a doorway and a counter. There is nowhere to do it.'],
  ['Hala', 'Then what about buying twenty rolls locally, just for this one?'],
  ['Nour', 'That costs about forty thousand more. It is possible. Keep it.'],
  ['Hala', 'Or we could send the Tarabishi order on Thursday with the Homs lorry, which passes his street anyway.'],
  ['Nour', 'Thursday is two days late. Shall we telephone him and ask which he would rather have — late and right, or Tuesday and wrapped in something he has to pay for?'],
  ['Hala', 'He will say Thursday.'],
  ['Nour', 'He probably will. But he will say it, and then it is his Thursday, not ours.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making suggestions – four shapes, from softest to firmest**',
  table(['Shape', 'Example', 'Feel'], [
    ['**What about** + -ing?', '**What about buying** twenty rolls locally?', 'floating an idea'],
    ['**Why don\'t we** + verb?', '**Why don\'t we send** it without wrap?', 'inviting an answer'],
    ['**We could** + verb', '**We could send** it on Thursday.', 'one option among several'],
    ['**Shall we** + verb?', '**Shall we telephone** him?', 'proposing to act now'],
  ], [1.2, 1.9, 1.3]),
  '**Answering a suggestion without killing it:**  _We could, but…_ · _That is possible. Keep it._ · _That works._ · _I would rather… because…_',
  '⚠ **Three suggestions before any judgement.** The first idea is rarely the best and is always the one argued about. Get three on the table, then compare.',
  '⚠ _We could, but…_ is the most useful phrase in this cycle. It keeps an idea alive while naming its problem, and it is why the second and third ideas get said at all.',
  '⚠ **Let the customer choose between two real options.** Not because it is polite, but because then the decision is theirs: _he will say it, and then it is his Thursday, not ours._',
  '**Practise:** For each problem, make three suggestions in three different shapes. 1 a late delivery 2 a short order 3 a driver off sick 4 a double-booked room 5 a price rise nobody told the customer about',
  '**Useful phrases:**  Why don\'t we…?  ·  What about…?  ·  We could, but…  ·  That is possible. Keep it.  ·  Shall we…?  ·  late and right, or on time and…',
  '**Pronunciation – the rise.** 🔊 **Track 15.4** Listen: _Why don\'t we send it on Thursday?_ — rising at the end. Said falling it becomes an instruction and the other person stops suggesting. Repeat four, rising.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a problem and asks for three ideas; B suggests; A keeps all three alive until the end. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ will not __________ until __________ and __________ goes out on __________. Three ideas.'],
  ['B', 'Why don\'t we __________?'],
  ['A', 'We could, but __________.'],
  ['B', 'Then what about __________?'],
  ['A', 'That costs __________. It is possible. Keep it.'],
  ['B', 'Or we could __________, which __________ anyway.'],
  ['A', 'Shall we __________ and ask which they would rather have — __________, or __________?'],
]));
out.push(table(['Role card 1 — the driver is ill', 'Role card 2 — the order is short'], [[
  'Fadi is ill on the day of the Hama run. Four drops, one of them a new customer. Ideas available: a service driver, moving the run to Thursday, Abu Yasser driving and the warehouse closing for the morning.',
  'A customer ordered sixty boxes; there are nineteen. Ideas available: send nineteen now and the rest Thursday, buy locally at a loss, telephone and offer a different size at the same price.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write all three suggestions. Then write which one was chosen, and whether the customer chose it or the company did.'));
out.push(PHRASE_CARD(['Why don\'t we…?', 'What about…?', 'We could, but…', 'That is possible. Keep it.', 'Shall we…?', 'then it is his Thursday']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** real problems from your own work. For each one, make three suggestions in three different shapes. Do not choose between them until all three are written.'));
out.push(table(['The problem', 'Suggestion 1', 'Suggestion 2', 'Suggestion 3'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The problem was _______. We could _______, or _______, or _______. I would _______, because _______._'));
out.push(p('**Listener task:** write down the third suggestion you hear that nobody would have reached without the first two. There is nearly always one.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Why we don\'t…?_ and _What about to buy_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Nour sends to Mr Ayoub, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Tarabishi order — three options, and what I would do',
  'The wrap does not arrive until Thursday. The Tarabishi order is due out on Tuesday.',
  '**Option 1 — send it unwrapped on Tuesday.** His shop is a doorway; there is nowhere to wrap it there. I would not do this.',
  '**Option 2 — buy twenty rolls locally.** Costs about 40,000 more and it goes on Tuesday as promised. Possible.',
  '**Option 3 — send it Thursday with the Homs lorry**, which passes his street. Two days late, no extra cost, and the lorry is going anyway.',
  '**What I would do.** Telephone him and offer options 2 and 3, and let him choose. I think he will take Thursday, but if he takes Tuesday we will know the 40,000 was worth it to him, which is worth knowing for the next time.',
  'If I do not hear from you by eleven I will telephone him.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How is each option set out — what three things does each one give?'));
out.push(item('2', 'Which option does she rule out, and does she hide it?'));
out.push(item('3', 'What does the last line do?'));
out.push(box('Writer\'s box', [
  '**A message proposing solutions — the shape:** the problem in two lines → **three numbered options**, each with its cost and its drawback → what you would do and why → **a deadline for the reader to object**.',
  'Every option gets the same three things: **what it is · what it costs · what is wrong with it**. An option with no drawback is one the reader does not believe.',
  '**Name the one you would rule out, and say why.** Leaving it out looks like you did not think of it; putting it in with its reason shows the thinking.',
  '⚠ **"If I do not hear from you by eleven I will telephone him."** This line turns a message into a decision. Without it, a busy manager reads your message, agrees with it silently, and nothing happens until Thursday.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message proposing three options for a real problem at your work (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — three options, and what I would do   ______________. ______________.   **Option 1 — ______________.** ______________. I would not do this because ______________.   **Option 2 — ______________.** Costs ______________. Possible.   **Option 3 — ______________**, which ______________.   **What I would do.** ______________, because ______________.   If I do not hear from you by ______________ I will ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says every option carries what it costs and what is wrong with it. Option 2 has no drawback here — is there really none, or is it the one you want chosen?"',
  'That second question is the sharpest band 3 question in the unit and it is almost always worth asking.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader choose without asking you anything?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three options, numbered', ''],
  ['Each with a cost and a drawback', ''],
  ['The writer\'s own recommendation, with a reason', ''],
  ['A deadline for the reader to object', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line. The class says which messages would actually produce a decision today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a problem at your work that has three possible answers and no obvious one (60 to 100 words). Give all three with their costs, say which you would choose, and say what you would need to know to be sure.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the option I would choose_   ✓ _does every option have a drawback?_   ? _what would settle it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the third option the best one? Count it; it is the argument for making three before judging any.'));
out.push(box('Homework', ['Write your final text. Then take a problem your workplace solved badly and write the three options that should have been on the table (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.3 =======================
out.push(pb());
out.push(h2('15.3  If we wait, we will lose the order'));
out.push(p('**Function:** saying what will happen if nothing is done   ·   **Grammar:** the first conditional, negative and with _unless_   ·   **Pronunciation:** stressing the part that is the warning'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish these: _If we do not telephone today, …_ · _Unless the part arrives on Thursday, …_ · _If nobody answers by Sunday, …_'));
out.push(p('**b**  Are these the same? _If we do not order now, we will not get it._ / _Unless we order now, we will not get it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What will happen if nothing is done?   **A** the order will be late   **B** the customer will buy elsewhere   **C** the price will rise'));
out.push(p('**b**  Listen again. **1** How long has the customer been waiting? **2** What does Mr Ayoub decide, and what does he refuse to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.5  The cost of waiting', [
  ['Nour', 'The Jaramana shop has been waiting eleven days for an answer on the shelving. If we wait for the Aleppo price, we will lose the order.'],
  ['Mr Ayoub', 'How do you know?'],
  ['Nour', 'Because he telephoned twice last week and not at all this week. Unless we go to him with a price on Sunday, he will have bought it somewhere else by the time we have one.'],
  ['Mr Ayoub', 'And if we quote without the Aleppo price, we may be quoting below our own cost.'],
  ['Nour', 'Then quote with this month\'s cost plus the same margin and say the price holds for fourteen days. If Aleppo comes in higher, we lose a little on one order. If we say nothing, we lose the shop.'],
  ['Mr Ayoub', 'Quote it. But I am not going to make that a habit — if we do it twice, every quotation in this office starts being a guess.'],
  ['Nour', 'Then let it be the exception, and write down why.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the conditional that is a warning**',
  table(['Shape', 'Example'], [
    ['**If** + present, **will**', '**If we wait**, we **will lose** the order.'],
    ['**If** + negative', '**If we do not telephone** today, he **will** buy elsewhere.'],
    ['**Unless** = if not', '**Unless we go** to him on Sunday, he **will have bought** it.'],
    ['Weighing two outcomes', '**If** Aleppo is higher, we lose a little. **If** we say nothing, we lose the shop.'],
    ['Refusing a precedent', '**If we do it twice**, every quotation **starts** being a guess.'],
  ], [1.3, 2.4]),
  '⚠ **_Unless_ means _if not_, so the verb after it is positive:** _unless we order_ = _if we do not order_. ~~Unless we do not order~~ says the opposite of what the speaker means and is the commonest mistake with the word.',
  '⚠ Still no **will** after _if_ or _unless_.',
  '⚠ **The strongest argument at work is two conditionals side by side**, one small loss against one large one: _we lose a little on one order_ against _we lose the shop_. Nobody argues with the shape; they argue with the sizes, which is the right argument to have.',
  '**Practise:** For each, give the warning and then the two outcomes side by side.',
  '1 a quotation nobody has sent  2 a part nobody has ordered  3 a customer nobody has telephoned  4 a report nobody has read  5 a mistake nobody has admitted',
  '**Useful phrases:**  If we wait, we will…  ·  Unless we … , he will…  ·  we lose a little / we lose the shop  ·  Let it be the exception.  ·  write down why',
  '**Pronunciation – stressing the warning.** 🔊 **Track 15.6** Listen: _if we wait, we will **lose** the order_. The stress is on the loss, not on the condition. Repeat five, and notice that stressing _wait_ instead makes it sound like an accusation.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A warns; B objects; A answers with two outcomes side by side. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ has been waiting __________ for __________. If we __________, we will __________.'],
  ['B', 'How do you know?'],
  ['A', 'Because __________ and __________. Unless we __________, __________.'],
  ['B', 'And if we __________, we may __________.'],
  ['A', 'Then __________ and say __________. If __________, we lose __________. If we __________, we lose __________.'],
  ['B', '__________. But I am not going to __________ — if we do it twice, __________.'],
]));
out.push(table(['Role card 1 — the overdue invoice', 'Role card 2 — the unanswered complaint'], [[
  'A customer is forty days late on 2.3 million. If we keep delivering, the debt grows; if we stop, we may lose a customer of nine years. He has always paid, eventually.',
  'A complaint about a damaged delivery has been unanswered for six days. If we wait for the supplier\'s report, it may be another week; if we replace the goods now, we may be paying for the supplier\'s fault.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their argument for the class – **without the book**.'));
out.push(p('**Listener task:** write the two outcomes that were put side by side, and say which one was smaller. The whole argument lives in that comparison.'));
out.push(PHRASE_CARD(['If we wait, we will…', 'Unless we…', 'we lose a little', 'we lose the shop', 'Let it be the exception.', 'write down why']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **three** things at your work that nobody has done yet. For each, say what will happen if nothing is done, and put the two outcomes side by side.'));
out.push(table(['What nobody has done', 'If nothing is done…', 'The small loss', 'The large loss'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.5, 1.1, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If we do not _______, we will _______. If we _______, we lose _______; if we do nothing, we lose _______._'));
out.push(p('**Listener task:** write down the warning in the room that is most likely to be ignored, and say why. It is usually the one with no number in it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _unless we do not_ and _if we will wait_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note that went with the quotation, and answer the questions.'));
out.push(box(null, [
  '**Note on file — Jaramana shelving quotation, 2 April**',
  'Quoted today at this month\'s cost plus the usual margin, price held for fourteen days. The Aleppo price is not confirmed.',
  '**Why I did not wait.** He telephoned twice last week and not once this week. Unless we had quoted by Sunday, he would have bought elsewhere. Eleven days is already too long.',
  '**What it risks.** If the Aleppo price comes in above this month\'s, we lose about 90,000 on this order. If it comes in below, we gain about the same.',
  '**What it would have cost to wait.** The shop buys shelving twice a year and tape every month. The order is 1.1 million; the year is about 4 million.',
  '**Why this is not a precedent.** We quoted without a confirmed cost because the customer had waited eleven days through our own delay. If the delay had been Aleppo\'s, I would have told him so and waited.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the two numbers that justify the decision?'));
out.push(item('2', 'Why is there a paragraph headed "why this is not a precedent"?'));
out.push(item('3', 'What would the writer have done if the delay had been the supplier\'s?'));
out.push(box('Writer\'s box', [
  '**A note on file — four headings:** what was done → **why I did not wait**, with the conditional → what it risks, with a number → what waiting would have cost, with a number → and, when the decision is unusual, **why it is not a precedent**.',
  'A note on file is written for a reader in six months who was not there. Write the reasons, not the feelings, and put the numbers in both halves so the comparison survives without you.',
  '**The "not a precedent" paragraph is the mark of a professional.** It says: I know this was an exception, here is the line, and here is what I would have done on the other side of it. It protects the company and it protects you.',
  '⚠ Date it, and name what was **not** known at the time — _the Aleppo price is not confirmed_. A decision is judged on what was known when it was taken, and only a dated note can prove what that was.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note on file about a decision you or somebody else took quickly (35 words or more). Use the frame.'));
out.push(p('**Note on file — ______________, ______________**   ______________. ______________ is not confirmed.   **Why I did not wait.** ______________. Unless we ______________, ______________.   **What it risks.** If ______________, we lose ______________. If ______________, we ______________.   **What it would have cost to wait.** ______________.   **Why this is not a precedent.** ______________. If ______________, I would have ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put a number in both halves. The risk has one and the cost of waiting does not — how much is that customer worth in a year?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody judge this decision fairly in six months, knowing only this note?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Dated, and says what was not known', ''],
  ['The conditional that justifies not waiting', ''],
  ['A number on both sides of the comparison', ''],
  ['A line about why it is not a precedent', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "not a precedent" paragraph. The class says which decisions they would defend in six months.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time waiting cost something — at work or not (60 to 100 words). Say what was waited for, what it cost, and what the warning would have sounded like if somebody had given it in time.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the warning that was not given_   ✓ _unless / if used correctly_   ? _could anybody have known in time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many could somebody have known in time, and in how many did somebody know and say nothing? The second group is the one worth talking about.'));
out.push(box('Homework', ['Write your final text. Then write the warning — two outcomes side by side, with numbers — for the thing at your work that nobody has done yet (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.4 =======================
out.push(pb());
out.push(h2('15.4  It was delivered on Tuesday'));
out.push(p('**Function:** saying what was done   ·   **Grammar:** the past simple passive   ·   **Pronunciation:** the weak _was_ and _were_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Who delivered the post to your building this morning? Do you know? Does it matter?'));
out.push(p('**b**  Change these: _Somebody delivered it on Tuesday._ → _It _______ on Tuesday._  ·  _They checked the boxes._ → _The boxes _______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is being established?   **A** who made the mistake   **B** what happened and when   **C** what it cost'));
out.push(p('**b**  Listen again. **1** What three things were done, and on what days? **2** Why does Mr Ayoub stop Nour naming the person?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.7  What happened, not who', [
  ['Mr Ayoub', 'Tell me the order of it. Not who — what.'],
  ['Nour', 'The order was taken on Sunday afternoon. Sixty boxes, four sizes. It was entered on the system on Sunday evening with one line missing.'],
  ['Mr Ayoub', 'Go on.'],
  ['Nour', 'It was picked on Monday from the system, so the missing line was not picked. It was loaded on Monday evening and it was delivered on Tuesday morning. The customer signed for four items; the note said four items; the order was five.'],
  ['Mr Ayoub', 'When was it noticed?'],
  ['Nour', 'On Tuesday afternoon, by the customer. It was not noticed here at all.'],
  ['Nour', 'The line was dropped by —'],
  ['Mr Ayoub', 'Stop. I do not want the name yet and neither do you. Three people touched that order and the system let all three of them through. Tell me where it could have been caught, and then we will know whether the name matters.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the past simple passive**',
  table(['Active', 'Passive'], [
    ['Somebody **took** the order on Sunday.', 'The order **was taken** on Sunday.'],
    ['They **picked** it on Monday.', 'It **was picked** on Monday.'],
    ['Nobody **noticed** it here.', 'It **was not noticed** here.'],
    ['The customer **noticed** it.', 'It **was noticed by the customer**.'],
    ['They **checked** the boxes.', 'The boxes **were checked**.'],
  ], [1.8, 2]),
  '**Form:** _was / were_ + past participle. Add **by** + the person only when the person matters: _it was noticed **by the customer**_ — there the _by_ is the whole point.',
  '⚠ **Use it to put the order of events in front of people without putting a name in front of them.** This is not evasion; it is the only way to find out where a system failed. The name can come afterwards, and often turns out not to matter.',
  '⚠ And notice when it is used **on** you. _Mistakes were made_ · _it was decided_ · _your order was cancelled_ — every one of those has a person in it who has been removed. Ask: by whom?',
  '**Practise:** Put the order of events in the passive. 1 an order 2 a delivery 3 a payment 4 a complaint 5 a repair',
  '**Useful phrases:**  It was taken on…  ·  It was entered with…  ·  It was not noticed here at all.  ·  Not who — what.  ·  where it could have been caught',
  '**Pronunciation – weak _was_ and _were_.** 🔊 **Track 15.8** Listen: _it was **picked** on Monday_ — _was_ almost disappears and the participle carries the stress. Repeat six, and keep the stress off _was_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for the order of events; B gives it in the passive, with days. A stops any attempt to name a person. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Tell me the order of it. Not who — what.'],
  ['B', 'It was __________ on __________. __________. It was __________ on __________ with __________.'],
  ['A', 'Go on.'],
  ['B', 'It was __________ on __________, so __________. It was __________ and it was __________ on __________.'],
  ['A', 'When was it noticed?'],
  ['B', 'On __________, by __________. It was not noticed __________ at all.'],
]));
out.push(table(['Role card 1 — a payment', 'Role card 2 — a complaint'], [[
  'An invoice was raised on the 2nd with the old price. It was sent on the 3rd, received the same day, queried by the customer on the 9th, and the query sat unopened until the 14th.',
  'A complaint was taken by telephone on Thursday, written on a slip, left on a desk over the weekend, logged on Monday, sent to the supplier on Tuesday, and answered on the following Monday.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their account for the class – **without the book**.'));
out.push(p('**Listener task:** write down the point at which the mistake could have been caught. There is nearly always more than one, and that is the finding.'));
out.push(PHRASE_CARD(['It was taken on…', 'It was entered with…', 'It was not noticed here.', 'Not who — what.', 'by the customer', 'where it could have been caught']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take something that went wrong at your work. Tell a colleague the order of events in the passive, with days, and no names. Then say the two places it could have been caught.'));
out.push(table(['Day', 'What was done', 'Could it have been caught here?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [0.7, 2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It was _______ on _______, _______ on _______, and _______ on _______. It was noticed by _______. It could have been caught at _______._'));
out.push(p('**Listener task:** count the hands that touched each story. Three or more is normal, and it is why the name matters less than people think.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it was deliver_ and _it was happened_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the timeline from the problem report, and answer the questions.'));
out.push(box(null, [
  '**ORDER 0418-7 — what happened**',
  'Sunday 14.20 — the order was taken by telephone. Five lines, sixty boxes in four sizes.',
  'Sunday 18.05 — it was entered on the system. One line (12 small, white) was not entered.',
  'Monday 07.30 — it was picked from the system, so four lines were picked.',
  'Monday 17.40 — it was loaded. The load was counted against the note, not against the order.',
  'Tuesday 09.15 — it was delivered and signed for. The note and the load agreed, so nothing was questioned.',
  'Tuesday 15.00 — the shortage was reported by the customer.',
  '**Where it could have been caught:** at entry (the order was not read back); at loading (the load was checked against the note and not the order); at delivery (the customer signs the note, which was correct).',
  '**What was not the cause:** the picking, the driver and the customer. All three did what they were given.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many times is a person named in this timeline?'));
out.push(item('2', 'Why does "the load was counted against the note, not against the order" matter?'));
out.push(item('3', 'What is the last paragraph for?'));
out.push(box('Writer\'s box', [
  '**A timeline — one line per event:** day, time, what **was done**, and the one fact about it that matters.',
  '**No names, all passive, every line.** Not to protect anybody, but because a timeline with names in it is read as an accusation and argued with line by line. A timeline without them is read as a sequence and fixed.',
  '**Then two short paragraphs: where it could have been caught, and what was *not* the cause.** The second one is unusual and valuable: it stops three innocent people spending a week defending themselves.',
  '⚠ Put the **times** in, not just the days. _Sunday 18.05_ against _Monday 07.30_ shows there were thirteen hours in which a read-back would have cost nothing.',
  '⚠ Write it the same day. A timeline written a week later is a memory; written the same day it is a record.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a timeline of something that went wrong at your work (35 words or more). Use the frame — no names anywhere.'));
out.push(p('**______________ — what happened**   ______________ — it was ______________. ______________.   ______________ — it was ______________. ______________.   ______________ — it was ______________, so ______________.   ______________ — ______________ was reported by ______________.   **Where it could have been caught:** ______________; ______________.   **What was not the cause:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says no names anywhere. Line three has one — can the sentence be written in the passive without losing what happened?"',
  'And if the answer is no, that is a finding too: some events cannot be told without a person, and then the report needs a different shape.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could anybody read this as an accusation?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Day and time on every line', ''],
  ['Passive throughout; no names', ''],
  ['Two or more places it could have been caught', ''],
  ['A line saying what was not the cause', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what was not the cause" line. The class says who that sentence protects, and whether they would have known to write it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that went wrong where more than one person could have caught it (60 to 100 words). Use the passive throughout and name nobody. Then write one sentence about how it feels to describe it that way.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the place it could have been caught_   ✓ _passive throughout?_   ? _does leaving the names out change what you think happened?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask the room: did the passive make the story fairer, or did it hide something that should have been said? Both answers appear, and both are right sometimes.'));
out.push(box('Homework', ['Write your final text. Then find a sentence in the passive at your work or in the news — _mistakes were made_, _it was decided_ — and write who has been removed from it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.5 =======================
out.push(pb());
out.push(h2('15.5  I am afraid your order is one line short'));
out.push(p('**Function:** breaking bad news   ·   **Grammar:** _I\'m afraid_, softeners, and the fix that follows   ·   **Pronunciation:** the fall that means this is true'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of the last time somebody gave you bad news well. What did they do first?'));
out.push(p('**b**  Put these in order of how bad they sound: _There is a problem. · I am afraid there is a problem. · Unfortunately… · Bad news._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the bad news?   **A** the order is late   **B** the order is one line short   **C** the price has risen'));
out.push(p('**b**  Listen again. **1** How many sentences does Nour use before she gives the fix? **2** What does Mr Tarabishi care about, and what does he not care about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.9  One line short', [
  ['Nour', 'Mr Tarabishi, it\'s Nour at Sham Trading. I am afraid your order is one line short — the twelve small white boxes are missing. You have the other four lines.'],
  ['Mr Tarabishi', 'I know. My nephew counted them at three o\'clock.'],
  ['Nour', 'It was our mistake, at entry. The line was not put on the system on Sunday evening, so it was never picked.'],
  ['Mr Tarabishi', 'And?'],
  ['Nour', 'And they are on the van at four o\'clock today. Fadi will be at your shop before six. If that is too late, I can send them with a service driver within the hour, and we pay.'],
  ['Mr Tarabishi', 'Four o\'clock is fine. Nour — the boxes are not the thing. The thing is that I found out from my nephew and not from you.'],
  ['Nour', 'I know. We did not notice it here at all. That is the part I am going to fix, and I will tell you what we changed.'],
  ['Mr Tarabishi', 'Good. Tell me in a fortnight, not tomorrow. Tomorrow you will only tell me what you intend.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Breaking bad news – four moves and no excuses**',
  table(['Move', 'Example'], [
    ['**1 Say it**, with one softener', '**I am afraid** your order is one line short.'],
    ['**2 Say what is right**', 'You have the other four lines.'],
    ['**3 Own it, plainly**', 'It **was our mistake**, at entry.'],
    ['**4 The fix, with a time**', 'They are on the van at four. Fadi will be there before six.'],
    ['**5 The alternative**', 'If that is too late, I can … , **and we pay**.'],
  ], [1.3, 2.5]),
  '⚠ **The bad news goes in the first sentence.** Not the third. A customer who hears two sentences of preparation knows what is coming and stops listening to the words, and the preparation is then read as an attempt to soften them up.',
  '⚠ **One softener only.** _I am afraid_ or _unfortunately_ — not both, and not three. Piling them up sounds like fear, and fear makes a small problem sound like a large one.',
  '⚠ **The fix needs a time and an alternative.** _They are on the van at four · if that is too late, a service driver within the hour, and we pay._ Those six words — _and we pay_ — do more than a paragraph of apology.',
  '⚠ Do not promise the lesson in the same call. _Tell me in a fortnight, not tomorrow_ is a real customer\'s voice: tomorrow you can only say what you intend.',
  '**Practise:** Break each piece of news in four moves. 1 a short order 2 a two-day delay 3 a price rise nobody warned them of 4 a damaged item 5 a driver who went to the wrong address',
  '**Useful phrases:**  I am afraid…  ·  You have the other…  ·  It was our mistake.  ·  They are on the van at four.  ·  If that is too late…  ·  and we pay',
  '**Pronunciation – the fall that means it is true.** 🔊 **Track 15.10** Listen: _I am afraid your order is one line **short**._ The voice falls and stops. A rise at the end turns it into a question and invites an argument. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A telephones with bad news in four moves; B is a customer who is annoyed about something other than the obvious thing. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, it\'s __________ at __________. I am afraid __________. You have __________.'],
  ['B', 'I know. __________.'],
  ['A', 'It was __________. __________, so __________.'],
  ['B', 'And?'],
  ['A', 'And __________ at __________. __________ will be __________ before __________. If that is too late, I can __________, and we pay.'],
  ['B', '__________ is fine. __________ — the __________ is not the thing. The thing is __________.'],
]));
out.push(table(['Role card 1 — a two-day delay', 'Role card 2 — a damaged pallet'], [[
  'The shelving will be two days late; the rest of the order is fine. The customer is not angry about the two days — he is angry because he had already told his own customer it was Tuesday.',
  'Two of twenty boxes arrived crushed. Replacements can be there tomorrow morning. The customer minds less about the two boxes than about being asked to send photographs.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence where the customer said what the real complaint was. It is never about the goods.'));
out.push(PHRASE_CARD(['I am afraid…', 'You have the other four.', 'It was our mistake.', 'on the van at four', 'and we pay', 'that is the part I am going to fix']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Break **three** pieces of bad news to colleagues, in four moves each. Afterwards ask each one what they would have minded most — and write it down, because it is rarely what you expected.'));
out.push(table(['The news', 'My fix, with a time', 'What they said they minded most'], [['', '', ''], ['', '', ''], ['', '', '']], [1.3, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I told _______ that _______. I offered _______ by _______. What they minded most was _______._'));
out.push(p('**Listener task:** count how many of the "minded most" answers were about **being told late** rather than about the thing itself. It is nearly all of them.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am afraid that is problem_ and _sorry for the inconvenient_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message that followed the call, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Order 0418-7 — the twelve white boxes, and what we are changing',
  'Dear Mr Tarabishi,',
  'The twelve small white boxes went out on today\'s van and were with you by half past five. Thank you for taking it as you did.',
  'I said I would tell you what we changed, and you said to tell you in a fortnight rather than tomorrow. It is a fortnight today.',
  '**What was wrong.** The line was not entered on Sunday evening, and the load was checked against the note instead of against the order. Both steps passed it.',
  '**What we changed.** Every telephone order is now read back to the customer, line by line, before the call ends — yours was the fourth that week where it would have caught something. And the loader checks the load against the **order**, not the note. That is the one that mattered.',
  'We have had no short deliveries since. If you get one, you will hear it from me before your nephew counts them.',
  'Best regards, Nour Mansour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is this message sent a fortnight later and not the next day?'));
out.push(item('2', 'Which of the two changes does the writer say mattered, and how do you know she means it?'));
out.push(item('3', 'What does the last line refer back to?'));
out.push(box('Writer\'s box', [
  '**The message after the bad news — five parts:** the thing is fixed, with the time it happened → **thank them for how they took it** → what was wrong, in two lines → **what we changed**, with the one that mattered named → a sentence that refers back to what they actually minded.',
  '**Send it when you can say what changed, not when you are sorry.** An apology the next day is about you. A note a fortnight later that says what is different is about them.',
  '**Name which change mattered.** Two changes with equal weight read as a list written to look busy. _That is the one that mattered_ reads as somebody who understood the problem.',
  '⚠ The last line is the whole message: _you will hear it from me before your nephew counts them_. It answers the real complaint — being told late — and it costs nothing to promise, because it is the thing that was changed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message that follows bad news you have had to give (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, and what we are changing   Dear ______________, ______________ and ______________ by ______________. Thank you for ______________.   I said I would ______________.   **What was wrong.** ______________. ______________.   **What we changed.** ______________ — ______________. And ______________. That is the one that mattered.   ______________. If ______________, you will ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says name which change mattered. You have two here with the same weight — which one would have caught this?"',
  'Quote, question, stop. The writer knows which one; they just have not said it.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the last line answer what the customer actually minded?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The fix reported with its time', ''],
  ['A thank-you for how they took it', ''],
  ['What changed, with the one that mattered named', ''],
  ['A last line about the real complaint', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line. The class says whose customer would stay.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were given bad news badly (60 to 100 words). Say what was said, what was left out, what you minded most, and what one sentence would have changed it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the sentence that would have changed it_   ✓ _was the news in the first line?_   ? _did they ever hear what changed?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many people ever heard what changed? Usually none — which is why the fortnight message in the Reading is rarer and worth more than it looks.'));
out.push(box('Homework', ['Write your final text. Then write the fortnight message for a piece of bad news you gave this year, and send it if it is still true (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.6 =======================
out.push(pb());
out.push(h2('15.6  Let me check and telephone you back'));
out.push(p('**Function:** buying time on the telephone   ·   **Grammar:** _Let me… · Can I… · I will … and telephone you back_   ·   **Pronunciation:** the calm voice under pressure'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say when somebody asks you something on the telephone and you do not know the answer? Say it aloud in Arabic, then in English.'));
out.push(p('**b**  Which of these keeps the customer, and which loses them? _I don\'t know. · I\'m not sure. · Let me check and telephone you back in ten minutes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala not know?   **A** the price   **B** whether the goods are in stock   **C** when the lorry leaves'));
out.push(p('**b**  Listen again. **1** What exactly does she promise, and when? **2** What does she do when she telephones back without the full answer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.11  Buying twenty minutes', [
  ['Customer', 'I need forty metres of the wide wrap. Have you got it, and can it come today?'],
  ['Hala', 'The wide wrap — let me check the shelf and the van, and I will telephone you back within twenty minutes. Is this number good for you?'],
  ['Customer', 'This number. Twenty minutes.'],
  ['Hala', 'Mr Haffar, it is Hala, nineteen minutes. Two answers and one half-answer. We have thirty-two metres, not forty. It can come today — the van passes you at half past three.'],
  ['Customer', 'And the other eight metres?'],
  ['Hala', 'That is the half-answer. A delivery is due on Thursday and I have not been able to confirm the time, so I will not promise you Thursday. I will know by four today and I will telephone you either way.'],
  ['Customer', 'Send the thirty-two on the van and telephone me at four.'],
  ['Hala', 'Thirty-two on the half past three van, and I telephone you at four.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Buying time – the four parts of a good "I do not know"**',
  table(['Part', 'Example'], [
    ['**Name what you will do**', '**Let me check** the shelf and the van.'],
    ['**Give a time, and keep it short**', 'I will telephone you back **within twenty minutes**.'],
    ['**Confirm the number**', 'Is this number good for you?'],
    ['**Telephone back early, with what you have**', 'Two answers and **one half-answer**.'],
  ], [1.4, 2.4]),
  '⚠ **Never say only _I don\'t know_, and never say _I will find out_ with no time attached.** The time is what is being asked for. _Within twenty minutes_ and then telephoning at nineteen is worth more to a customer than an instant answer that turns out to be wrong.',
  '⚠ **Telephone back even when you do not have the answer.** _I will not promise you Thursday. I will know by four and I will telephone either way._ The call that is not made is the one that loses the customer.',
  '⚠ **Say what you are not able to confirm, and do not dress it up.** _I have not been able to confirm the time, so I will not promise you Thursday._ A half-answer given honestly is trusted; a whole answer that is a guess is found out once and never trusted again.',
  '⚠ End by **reading the agreement back**: _thirty-two on the half past three van, and I telephone you at four._',
  '**Practise:** Buy time on each. 1 a price you are not sure of 2 stock you cannot see 3 a delivery day 4 a technical question 5 something that must be asked of your manager',
  '**Useful phrases:**  Let me check…  ·  within twenty minutes  ·  Is this number good for you?  ·  two answers and one half-answer  ·  I will telephone you either way  ·  so I will not promise you…',
  '**Pronunciation – calm under pressure.** 🔊 **Track 15.12** Listen to the same offer said quickly and said slowly. The slow one is believed. Under pressure everybody speeds up; this is the one habit worth practising until it is automatic.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B telephones with a question A cannot answer; A buys time, then telephones back with a part-answer. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'I need __________. Have you got it, and __________?'],
  ['A', '__________ — let me check __________, and I will telephone you back within __________. Is this number good for you?'],
  ['B', '__________.'],
  ['A', '__________, it is __________, __________ minutes. Two answers and one half-answer. We have __________, not __________. It can __________.'],
  ['B', 'And __________?'],
  ['A', 'That is the half-answer. __________, so I will not promise you __________. I will know by __________ and I will telephone you either way.'],
]));
out.push(table(['Role card 1 — a price', 'Role card 2 — a repair'], [[
  'A customer wants a price for 300 rolls. The hundred-roll price is on the list; the three-hundred price needs the manager. He is at the bank until eleven.',
  'A customer wants to know whether a shutter motor is under guarantee. The invoice is in the file; the guarantee length is on a certificate nobody can find this morning.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out both calls — the first and the call back — for the class, **without the book**.'));
out.push(p('**Listener task:** write the time that was promised and the time the call actually came. Early by a minute is the whole trick.'));
out.push(PHRASE_CARD(['Let me check…', 'within twenty minutes', 'Is this number good for you?', 'one half-answer', 'I will telephone you either way', 'so I will not promise you…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make **three** calls in which you do not have the answer. Buy time with a number of minutes, then call back — early — with whatever you have.'));
out.push(table(['The question', 'Time I promised', 'What I had when I called back'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They asked _______. I said I would telephone back within _______. I telephoned at _______ with _______._'));
out.push(p('**Listener task:** write down how many people in the room have ever telephoned back with no answer at all. It is the hardest call and the one that builds the most trust.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I will call you back after twenty minutes_ and _let me to check_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Hala leaves on the system after the call, and answer the questions.'));
out.push(box(null, [
  '**CALL NOTE — Haffar Stores, 11.05 and 11.24**',
  '**Asked:** 40 m wide wrap, today if possible.',
  '**Promised:** call back within 20 minutes. Called back at 11.24 (19 minutes).',
  '**Answered:** 32 m in stock, not 40. On the half past three van today.',
  '**Not answered:** the remaining 8 m. Thursday delivery not confirmed — **I did not promise Thursday.**',
  '**Next:** I telephone him at 16.00 either way, with or without the Thursday time.',
  '**For whoever is here at 16.00 if I am not:** his number is on the order, the 8 m is the only open question, and he is expecting the call. Tell him what you know, even if it is nothing.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are both times written at the top?'));
out.push(item('2', 'Why is "I did not promise Thursday" in the note at all?'));
out.push(item('3', 'What is the last paragraph for, and who is it addressed to?'));
out.push(box('Writer\'s box', [
  '**A call note — six short headings:** asked · promised, with both times · answered · **not answered**, and what you did not promise · next, with a time · and **what somebody else would need if you were not here**.',
  'Write the **times of both calls**. It is the only proof that the promise was kept, and in a fortnight it is the difference between "we always call back" and "we called back in nineteen minutes on the fifth".',
  '**Record what you did not promise.** It is the sentence that protects the company and the customer at once, and the one nobody thinks to write.',
  '⚠ **The handover paragraph is the professional habit of this cycle.** You might be out at four. A customer who is expecting a call and does not get one has learned something worse than the answer. Leave enough for anybody to make that call.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a call note for a real call at your work (35 words or more). Use the frame.'));
out.push(p('**CALL NOTE — ______________, ______________ and ______________**   **Asked:** ______________.   **Promised:** ______________. Called back at ______________.   **Answered:** ______________.   **Not answered:** ______________. **I did not promise ______________.**   **Next:** ______________ at ______________ either way.   **For whoever is here if I am not:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks for what somebody else would need if you were not here. Yours has the customer\'s name but not the open question — what would I have to say if I made that call?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could I make the next call from this note alone?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both call times', ''],
  ['What was answered and what was not', ''],
  ['What was **not** promised', ''],
  ['Enough for somebody else to make the next call', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their handover paragraph. Another student tries to make the call from it. Where they stop is what the note is missing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody did not telephone you back (60 to 100 words). Say what you were waiting for, how long you waited, what you did instead, and what one call would have saved.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what the call would have saved_   ✓ _a time promised anywhere?_   ? _did you ever go back to them?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the person simply go elsewhere? Say the number out loud; it is the business case for this entire cycle.'));
out.push(box('Homework', ['Write your final text. Then make one call back today that you owe somebody — even with no answer — and write what you said and how it was received (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.7 =======================
out.push(pb());
out.push(h2('15.7  Review & Mediate: the problem report'));
out.push(p('**Function:** telling a colleague what a problem report says — and what it is asking of them   ·   **Review:** describing a fault · suggesting · the warning conditional · the passive · bad news · buying time'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 15 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the five parts of a fault report?',
  '**2** Give three shapes for a suggestion, from softest to firmest.',
  '**3** What is wrong with _unless we do not order_?',
  '**4** Why is a timeline written in the passive?',
  '**5** What four things does a good "I do not know" contain?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi think the report is saying?   **A** that he is being blamed   **B** that the van is being sold   **C** that the route is changing'));
out.push(p('**b**  Listen again. **1** How many people does the report name? **2** What is the report actually asking Fadi to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.13  "Is this about me?"', [
  ['Fadi', 'Nour. The report on the board about order 0418. It says the load was checked against the note and not the order. That is me. That is my signature at the bottom of the note.'],
  ['Nour', 'Read it again and count the names.'],
  ['Fadi', 'There are no names.'],
  ['Nour', 'There are no names because three people touched that order and the system let all three through. Look at the last paragraph: _what was not the cause — the picking, the driver and the customer. All three did what they were given._ You are in that sentence, on the right side of it.'],
  ['Fadi', 'Then why is the loading in the report at all?'],
  ['Nour', 'Because it is the place it could have been caught, and because the instruction you were given was wrong. You were told to check the load against the note. From Sunday, loaders check against the **order**. That is the change, and it is the only thing the report is asking of you.'],
  ['Fadi', 'So I am not being told off.'],
  ['Nour', 'You are being given a different instruction, in writing, with a date on it. If this had been about you, your name would be in it, and I would have told you before the board did.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a problem report, where the reader sees themselves and nobody is named**',
  table(['To separate person from process', 'To point at the evidence', 'To say what is asked of them'], [
    ['Count the names. There are none.', 'Look at the last paragraph: ___ .', 'The only thing it asks of you is ___ .'],
    ['The system let all three through.', 'You are in that sentence, on the right side of it.', 'You are being given a different instruction, with a date.'],
  ], [1.8, 1.8, 1.8]),
  '⚠ **A passive report is read personally by the person who recognises their own step.** That is the normal reaction and it is worth saying out loud: _that is me_ usually means _that is my step_, not _that is my fault_.',
  '⚠ **Point at the "what was not the cause" paragraph.** It is the fastest reassurance in any report that has one, and most readers never reach it because they stop at their own line.',
  '⚠ **Then say what is actually being asked.** A report that changes an instruction is not a telling-off; it is a new instruction. Say which sentence is the instruction, and when it starts.',
  '⚠ And one rule for the mediator: _if this had been about you, I would have told you before the board did._ If that is not true where you work, the mediation will not be believed.',
  '**Practise:** The report says the load was checked against the note, not the order, and that the picking was not the cause. Explain it to the person whose signature is on the note.',
  '**Useful phrases:**  Count the names.  ·  the system let all three through  ·  on the right side of it  ·  the only thing it asks of you  ·  with a date on it',
  '**Pronunciation – reassurance without softness.** 🔊 **Track 15.14** Listen: _there are no names_ — flat, short, certain. A warm voice here sounds like pity and is not believed. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a report silently; B has recognised their own step in it. A separates the person from the process and says what is being asked. Then swap.'));
out.push(table(['Report 1 — for A', 'Report 2 — for B'], [[
  '**STOCK VARIANCE.** _The count was taken on the 15th. Fourteen boxes were recorded as received on the 9th but were not found on the shelf. The gate record was signed. The discrepancy was not reported until the monthly count. Not the cause: the counting, which was accurate; the gate, which recorded what arrived._  **B says:** I signed that gate record.',
  '**COMPLAINT REVIEW.** _The complaint was taken by telephone on Thursday and logged on Monday. It was answered after eleven days. The delay was between the slip and the log. Not the cause: the person who took the call, who wrote the slip correctly, or the supplier, who answered in two days._  **A says:** I took that call.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that said what was being **asked**, not what went wrong. Most reports contain exactly one, and most readers never find it.'));
out.push(PHRASE_CARD(['Count the names.', 'the system let all three through', 'on the right side of it', 'what was not the cause', 'the only thing it asks of you', 'with a date on it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a problem report. Read it silently. Then explain it to **two** colleagues: what happened, who is not being blamed, and the one thing it asks of them.'));
out.push(table(['Who I told', 'The line they saw themselves in', 'What it actually asks of them'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the report you mediated. This is the **third** unit of Book 2, and once again the thing that matters most to the reader is not written down — here, that nobody is being blamed, which a report in the passive can never quite say.'));
out.push(p('_It\'s a ______. They saw themselves in ______. There are ______ names in it. What it asks of them is ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _discrepancy · variance · root cause · escalate · workaround · contingency_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _The printer is out of order. Please use the one at the counter._   **A** The printer is not working; use the other one. **B** The printer has no paper. **C** Do not use any printer.',
  '**2**  _The order was entered without one line._   **A** Somebody left a line out when entering it. **B** The order had no lines. **C** The line was entered twice.',
  '**3**  _Unless the part arrives on Thursday, the repair will wait until the following week._   **A** The repair is on Thursday. **B** If the part does not come Thursday, the repair is next week. **C** The part will arrive Thursday.',
  '**4**  _I am afraid your order is one line short; the rest is on the van._   **A** Nothing has been sent. **B** Everything has been sent. **C** Most of it has been sent; one line is missing.',
  '**5**  _Let me check and telephone you back within twenty minutes._   **A** Telephone me in twenty minutes. **B** I will telephone you, and soon. **C** I cannot help you.',
  '**6**  _Not the cause: the picking, the driver or the customer._   **A** Those three are to blame. **B** Those three are not to blame. **C** Nobody knows the cause.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a message about a problem, the three points are usually: **what is wrong** · **what has been done** · **what you want the reader to do, and when**.',
  '⚠ Put the problem in the first sentence. In twenty-five words there is no room to lead up to anything, and the examiner is counting points, not admiring the approach.',
  '⚠ The third point must contain a **time**. _Please let me know_ is not a point; _please let me know by Thursday_ is.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** Something at work is broken and it affects a colleague. Write them a message (25 words or more). Say **what is wrong**, **what you have already done**, and **what you need them to do, and by when**.'));
out.push(p('Hi ______________, the ______________ is ______________. I have already ______________ and ______________. Could you ______________ by ______________? ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What is wrong, in the first sentence', ''],
  ['What has already been done', ''],
  ['A request with a time in it', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a problem at your work that keeps coming back (60 to 100 words). Say what it is, how often, what is done each time, and what nobody has tried. Use the passive at least twice.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then write the five-part fault report for that recurring problem and give it to the person who could end it (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 15 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The printer ___ again — three times this morning.   a) jams   b) is jamming   c) jam',
  '2  ___ we send it with the Homs lorry?   a) Why don\'t   b) Why we don\'t   c) Why not we',
  '3  What about ___ twenty rolls locally?   a) buy   b) to buy   c) buying',
  '4  ___ we order today, we will lose the price.   a) Unless   b) If not   c) Except',
  '5  The order ___ on Sunday evening.   a) was entering   b) was entered   c) is entered',
  '6  I ___ your order is one line short.   a) am afraid   b) afraid   c) am afraid that is',
  '7  Let me ___ and telephone you back.   a) to check   b) checking   c) check',
  '8  It was noticed ___ the customer.   a) from   b) by   c) of',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 15.15** Listen to a fault being reported. Complete the note.   What it is doing: ______   Where: ______   Since: ______   Getting worse: ______   Tried: ______'));
out.push(dlg('Track 15.15  Audio script (read after the check)', [
  ['Nour', 'It is jamming. It takes about ten pages and then the paper catches at the back, on the left side, and the light flashes twice.'],
  ['Nour', 'Since Thursday. Twice on Thursday, four times today — so it is getting worse, not better.'],
  ['Nour', 'I have cleared the back three times and I have tried the other paper. It does it with both.'],
]));
out.push(p('**C  Writing.** Write a short message breaking bad news to a customer (35+ words): the news in the first sentence, what is right, whose mistake it was, and the fix with a time.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 15)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe a fault in five parts, so that somebody arrives with the right part',
  '☐ make three suggestions in three different shapes before judging any of them',
  '☐ say what will happen if nothing is done, with two outcomes side by side',
  '☐ use _unless_ without putting a second negative in it',
  '☐ tell the order of events in the passive, with no names',
  '☐ break bad news in the first sentence and follow it with a fix and a time',
  '☐ buy time on the telephone, and telephone back early even with half an answer',
  '☐ tell a colleague what a problem report is asking of them',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 15 · Student\'s Book');
