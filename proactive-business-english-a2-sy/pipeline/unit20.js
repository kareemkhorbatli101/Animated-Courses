// Proactive Business English A2 · Syria Edition · Book 2 · Unit 20 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'call-out · servicing · maintenance · warranty · guarantee · fitting · leak · blockage · wiring · replacement part · labour · parts · technician · on-site · temporary repair · overhaul · inspection · defect · adjust · tighten · worn · seal · hose · bearing · gasket · lubricate';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 20  Services and Repairs'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**20.1**  say that something needs work',
  '**20.2**  arrange a visit, and pin down the time',
  '**20.3**  follow up when it is still not working',
  '**20.4**  say what was done, and by whom',
  '**20.5**  ask what it will cost, before the work starts',
  '**20.6**  thank somebody properly, and confirm what happens next',
  '**20.7**  Review & Mediate: tell a colleague what the service request says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The four sentences that get a repair done', [
  'Most repairs at most workplaces go wrong in the same four places, and each one is a sentence somebody did not say.',
  '**What exactly needs doing** — Unit 15 taught the five-part fault report, and this unit uses it. **When, exactly** — not "next week". **What it will cost, before it is done** — and what happens if it turns out to be more. **What was actually done** — written down, so that the next person is not starting again.',
  '⚠ The expensive word in this unit is **temporary**. A temporary repair that nobody wrote down becomes a permanent one that nobody knows about, and it fails on the day the lorry is loaded. Every temporary repair in this unit gets a date on it.',
], C.lyellow, C.orange));

// ======================= CYCLE 20.1 =======================
out.push(pb());
out.push(h2('20.1  The shutter needs adjusting'));
out.push(p('**Function:** saying something needs work   ·   **Grammar:** _need_ + **-ing**, _needs to be_ + past participle   ·   **Pronunciation:** the weak _-ing_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things at your work that need doing and have needed doing for a while.'));
out.push(p('**b**  Both are correct — say each aloud: _The shutter needs adjusting._ / _The shutter needs to be adjusted._ Which is shorter?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What needs doing?   **A** the shutter   **B** the van   **C** the air conditioner'));
out.push(p('**b**  Listen again. **1** What has been done to it so far? **2** Why does Abu Yasser object to the word "adjusting"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.1  Needs doing, and has needed it for a while', [
  ['Nour', 'I am writing the list for the maintenance man. The shutter needs adjusting.'],
  ['Abu Yasser', 'The shutter does not need adjusting. The shutter has been adjusted four times since March.'],
  ['Nour', 'What does it need, then?'],
  ['Abu Yasser', 'The bottom limit switch needs replacing. Adjusting is what we have been paying for four times, and each time it is right for a fortnight. A part is about 300,000 and four adjustments are about 480,000.'],
  ['Nour', 'Then why has nobody said that?'],
  ['Abu Yasser', 'I have said it to the man each time and he says he will order the part. I have never written it down, and nobody has ever written down that it is the fourth time.'],
  ['Nour', 'Four times since March is the sentence, then. Not "the shutter needs adjusting".'],
  ['Abu Yasser', 'Four times since March, and it stops a metre from the ground, and the last one was a fortnight ago. Put all three on the paper and he will bring the switch.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – saying that something needs work**',
  table(['Shape', 'Example'], [
    ['**need** + **-ing** (short, normal)', 'The shutter **needs adjusting**. The van **needs servicing**.'],
    ['**need to be** + past participle', 'The switch **needs to be replaced**.'],
    ['What it does now', 'It **stops** a metre from the ground.'],
    ['How many times already', 'It **has been adjusted** four times **since March**.'],
    ['The arithmetic', 'A part is 300,000; four visits are 480,000.'],
  ], [1.7, 2.3]),
  '⚠ **_Needs_ + -ing** is the normal spoken form and the one to learn: _needs fixing · needs cleaning · needs replacing · needs looking at_. The _to be_ form is not wrong, only longer.',
  '⚠ **Name the part, not the symptom, if you know it.** _The shutter needs adjusting_ brings a man with a screwdriver. _The bottom limit switch needs replacing_ brings a man with a switch.',
  '⚠ **Say how many times already.** _Four times since March_ changes the conversation from a repair into a decision, and it is the fact nobody ever writes down.',
  '**Practise:** For each, say what it does, what it needs, and how many times it has been done. 1 a shutter 2 a van 3 a printer 4 a light 5 something at home',
  '**Useful phrases:**  It needs adjusting.  ·  The switch needs replacing.  ·  four times since March  ·  right for a fortnight  ·  Put all three on the paper.',
  '**Pronunciation – the weak _-ing_.** 🔊 **Track 20.2** Listen: _needs fix**ing** · needs clean**ing** · needs replac**ing**_. The ending is weak and short; the verb before it carries the stress. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes a vague line on a list; B corrects it to the part, the symptom and the count. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I am writing the list for __________. The __________ needs __________.'],
  ['B', 'The __________ does not need __________. It has been __________ __________ times since __________.'],
  ['A', 'What does it need, then?'],
  ['B', 'The __________ needs __________. __________ is what we have been paying for, and each time it is right for __________. A part is about __________ and __________ are about __________.'],
  ['A', 'Then why has nobody said that?'],
  ['B', 'I have said it. I have never written it down.'],
]));
out.push(table(['Role card 1 — the van', 'Role card 2 — the air conditioner'], [[
  'The list says "van needs looking at". It pulls to the left under braking, has done since the rain in March, and has been "checked" three times. What it needs is a brake hose, about 180,000.',
  'The list says "air conditioner needs servicing". It cools for about twenty minutes and then blows warm, every day since June, and has been regassed twice at 150,000 each. What it needs is a leak found — probably a seal.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the arithmetic — the part against the repeated visits. It is almost always the part that is cheaper.'));
out.push(PHRASE_CARD(['It needs adjusting.', 'needs replacing', 'four times since March', 'right for a fortnight', 'a part is about…', 'nobody wrote it down']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make a real maintenance list for your workplace: **four** items, each with the part if you know it, the symptom, and how many times it has been done before.'));
out.push(table(['What', 'What it does', 'What it needs', 'How many times already'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.3, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The _______ needs _______. It _______, and it has been _______ _______ times since _______._'));
out.push(p('**Listener task:** write down the item in the room that has been repaired most often. Ask what the part would have cost the first time.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it needs to fix_ and _it needs repair it_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the maintenance list, and answer the questions.'));
out.push(box(null, [
  '**MAINTENANCE LIST — for the visit on Thursday**',
  '**1 Loading bay shutter.** Stops about a metre from the ground and will not go further down. Goes up normally. Adjusted **four times since March** — 17 March, 2 May, 9 August, 1 December — right for about a fortnight each time. **We believe it is the bottom limit switch.** Please bring one.',
  '**2 Office air conditioner.** Cools for about twenty minutes, then blows warm. Every day since June. Regassed twice (June, September) at 150,000 each. **A leak is being paid for twice a year.** Please find it rather than regas it.',
  '**3 Yard light, east wall.** Does not come on. The other three on the same switch work. Not touched before.',
  '**4 Van, front brake.** Pulls left under braking since March. Checked three times by the garage, nothing changed. Not for Thursday — for information, so that you know the vehicle.',
  '⚠ Items 1 and 2 have each been paid for more than the part would have cost. We are not asking for another temporary repair; if the permanent one is more than 500,000 please telephone first.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do the dates in item 1 prove that "four times" alone does not?'));
out.push(item('2', 'Which item is not for Thursday, and why is it on the list?'));
out.push(item('3', 'What does the warning at the bottom ask for, and what does it offer?'));
out.push(box('Writer\'s box', [
  '**A maintenance list — one numbered block per item:** what it does, exactly → **since when, with the dates of previous repairs** → what you believe it needs → what you want brought or done.',
  '**Dates beat counts.** _17 March, 2 May, 9 August, 1 December_ cannot be argued with and makes the pattern visible — about once a quarter, worse each time.',
  'Include the item that is **not** for this visit, marked as such. A repair man who knows about the van will think of it when something related comes up, and it costs you one line.',
  '⚠ **Set the limit and offer the telephone call.** _If the permanent repair is more than 500,000, please telephone first._ That sentence is what stops the two worst outcomes: a bill nobody expected, and a job left undone because nobody could be asked.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a maintenance list for your own workplace, with three items (35 words or more). Use the frame.'));
out.push(p('**MAINTENANCE LIST — for ______________**   **1 ______________.** ______________. ______________ since ______________ — ______________. **We believe it is ______________.** Please ______________.   **2 ______________.** ______________. ______________ twice at ______________ each. Please ______________ rather than ______________.   **3 ______________.** ______________. ______________.   ⚠ ______________. If ______________ please telephone first.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says dates beat counts. Item 2 says _several times_ — when exactly, and can you find the invoices?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would the man arrive with the right part?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_needs_ + -ing used correctly', ''],
  ['The symptom, exactly', ''],
  ['Dates of previous repairs', ''],
  ['A limit, with an offer to be telephoned', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their item 1. The class says which list would get the part brought on the first visit.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that has been repaired again and again (60 to 100 words). Say what it does, how many times, roughly what has been spent, and what the permanent repair would have cost.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the arithmetic_   ✓ _needs + -ing correct?_   ? _who could approve the permanent repair?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Add up what the room has spent on temporary repairs. The number is always larger than the permanent ones would have been.'));
out.push(box('Homework', ['Write your final text. Then find the invoices for one repeatedly repaired thing and add them up. Write the total and the price of the part (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.2 =======================
out.push(pb());
out.push(h2('20.2  When can you come?'));
out.push(p('**Function:** arranging a visit   ·   **Grammar:** _When can you…? · Could you make it…? · between … and …_   ·   **Pronunciation:** pinning down a time without rudeness'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When somebody says "I will come next week", what do you say next? Say it in English.'));
out.push(p('**b**  Put these in order, from least useful to most: _next week · Thursday · Thursday morning · Thursday between nine and one · Thursday at ten_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What time is finally agreed?   **A** Thursday morning   **B** Thursday between nine and one   **C** Thursday at ten'));
out.push(p('**b**  Listen again. **1** What does Hala ask for that she does not get? **2** What does she get instead, and why is it enough?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.3  Four hours is not a time', [
  ['Technician', 'I can come on Thursday.'],
  ['Hala', 'Thursday is good. What time?'],
  ['Technician', 'In the morning, probably.'],
  ['Hala', 'Could you make it a time? The shutter is on the loading bay and we cannot load while you are working on it, so I have to move three deliveries.'],
  ['Technician', 'Between nine and one. I cannot be closer than that — I have one before you and I do not know what it is yet.'],
  ['Hala', 'Between nine and one, then. Two things: would you telephone me when you leave the job before mine, so that I have half an hour? And if the one before you turns out to be a long job, would you tell me by nine rather than at twelve?'],
  ['Technician', 'Nobody has ever asked me that second one.'],
  ['Hala', 'Because at twelve I have already moved the deliveries. At nine I have not.'],
  ['Technician', 'I will telephone you by nine either way.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Arranging a visit – getting from "next week" to something usable**',
  table(['Move', 'What to say'], [
    ['**Ask for a time**', '**When can you come?** · **Could you make it a time?**'],
    ['**Say why it matters**', 'We cannot load while you are working, so I have to move three deliveries.'],
    ['**Accept a window**', '**Between nine and one**, then.'],
    ['**Ask for a call before**', 'Would you **telephone me when you leave** the job before mine?'],
    ['**Ask for early bad news**', 'If it runs long, would you tell me **by nine** rather than at twelve?'],
  ], [1.4, 2.6]),
  '⚠ **A window is a real answer and "the morning" is not.** _Between nine and one_ can be planned around; _in the morning, probably_ cannot. Ask for the window, not for a promise nobody can keep.',
  '⚠ **Give the reason you need the time.** Not to complain: so that the other person can see which half of the window is better for you. People move things for a reason and not for a request.',
  '⚠ **The early-bad-news question is the one nobody asks** and the one that saves the day: _tell me by nine rather than at twelve._ By twelve you have already paid the cost of waiting.',
  '**Practise:** Get from "next week" to a usable arrangement for each. 1 a repair 2 a delivery 3 an inspection 4 a meeting with somebody senior 5 a visit from a customer',
  '**Useful phrases:**  Could you make it a time?  ·  between nine and one  ·  so that I have half an hour  ·  would you tell me by nine rather than at twelve?  ·  either way',
  '**Pronunciation – pinning down a time without rudeness.** 🔊 **Track 20.4** Listen: _could you make it a time?_ — level, friendly, no stress on _time_. Stressing _time_ turns it into a complaint. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B offers a vague time; A gets to a window and asks the two questions. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'I can come on __________.'],
  ['A', '__________ is good. What time?'],
  ['B', 'In the __________, probably.'],
  ['A', 'Could you make it a time? __________, so I have to __________.'],
  ['B', 'Between __________ and __________. I cannot be closer than that — __________.'],
  ['A', 'Between __________ and __________, then. Two things: would you __________? And if __________, would you tell me by __________ rather than at __________?'],
  ['B', 'Nobody has ever asked me that.'],
]));
out.push(table(['Role card 1 — the generator service', 'Role card 2 — a customer visit'], [[
  'The generator must be off while it is serviced, which means the cold store is off. You need to know within an hour so that you can move the cold stock to the neighbour.',
  'A customer from Aleppo is coming "some time on Tuesday". You need to know roughly when, because Mr Ayoub is at the bank in the morning and the customer wants to meet him.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the early-bad-news question. Then write whether the other person had ever been asked it.'));
out.push(PHRASE_CARD(['Could you make it a time?', 'between nine and one', 'so that I have half an hour', 'tell me by nine rather than at twelve', 'either way', 'I cannot be closer than that']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Arrange **three** real visits or appointments. Each time: get a window, say why you need it, ask for a call before, and ask for early bad news.'));
out.push(table(['Who / what', 'The window I got', 'Why I needed it', 'The early-bad-news question'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1, 1.4, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They said _______. I asked for _______ and got _______. I asked them to tell me by _______ if _______._'));
out.push(p('**Listener task:** count how many people in the room have ever asked for early bad news. It is nearly always nobody, and it is the most useful sentence in the cycle.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _when you can come?_ and _at Thursday_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the service request, and answer the questions.'));
out.push(box(null, [
  '**SERVICE REQUEST — loading bay shutter**',
  '**From:** Sham Trading Co., Mezzeh. Contact: Hala Mourad, 011 ___ ____ (and 09__ ___ ___ for the day of the visit).',
  '**The fault.** Stops about a metre from the ground and will not go further down. Goes up normally. **Since** 9 December. Four previous adjustments: 17 March, 2 May, 9 August, 1 December.',
  '**What we believe it needs.** The bottom limit switch. Please bring one.',
  '**Access.** The bay is clear between 9.00 and 13.00 on Thursday and at no other time this week. We cannot load while the work is being done.',
  '**Before you come.** Please telephone when you leave the job before ours, so that we have half an hour. If the earlier job runs long, please tell us **by 9.00**, not at 12.00 — by then we will have moved three deliveries.',
  '**Cost.** Please telephone before starting if the work will be more than 500,000. We would rather pay once for the switch than four more times for adjustments.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are two telephone numbers given?'));
out.push(item('2', 'What does the "Access" section tell the technician that a time alone does not?'));
out.push(item('3', 'What reason is given for the cost limit?'));
out.push(box('Writer\'s box', [
  '**A service request — six headings:** who and **two telephone numbers** → the fault, with dates → what you believe it needs → **access**, with the reason → before you come → **cost**, with a limit and a reason.',
  '**Two numbers, always:** the office one and the one that will be answered on the day. Half of all missed visits are a technician outside a locked gate telephoning a desk nobody is sitting at.',
  '**Access is not the same as the appointment.** It says when the thing can actually be worked on and why, which is what lets the technician choose the right slot rather than the first one.',
  '⚠ **Give the cost limit a reason.** _We would rather pay once for the switch than four more times for adjustments._ A limit with no reason reads as meanness; a limit with that sentence reads as somebody who has done the arithmetic — and gets the switch.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a service request for something at your work (35 words or more). Use the frame.'));
out.push(p('**SERVICE REQUEST — ______________**   **From:** ______________. Contact: ______________ (and ______________ for the day).   **The fault.** ______________. **Since** ______________. Previous: ______________.   **What we believe it needs.** ______________.   **Access.** ______________ between ______________ and ______________. ______________.   **Before you come.** Please ______________. If ______________, please tell us **by ______________**.   **Cost.** Please telephone before starting if ______________. We would rather ______________ than ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says two telephone numbers. There is one here — which number is answered at eight in the morning?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the technician plan their whole day from this?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Two telephone numbers', ''],
  ['The fault with dates', ''],
  ['Access, with the reason', ''],
  ['A cost limit with a reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "before you come". The class says which request they would answer first if they were the technician.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a visit that went wrong at your work (60 to 100 words). Say what was arranged, what actually happened, what one sentence would have prevented it, and whether anybody said that sentence afterwards.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the sentence that would have prevented it_   ✓ _was a window agreed?_   ? _was it the same person\'s fault twice?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the failure a **time** rather than the work? Almost all of them, which is why this cycle exists.'));
out.push(box('Homework', ['Write your final text. Then telephone somebody who owes you a visit and get a window, a call before, and early bad news. Write down what they said (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.3 =======================
out.push(pb());
out.push(h2('20.3  It is still not working'));
out.push(p('**Function:** following up   ·   **Grammar:** _still_, _yet_, the present perfect for a continuing problem   ·   **Pronunciation:** firm without anger'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many times do you telephone before you give up? What happens on the third call?'));
out.push(p('**b**  Which is stronger, and why? _It is not working. · It is still not working. · It has not worked since you came._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the second call about?   **A** a new fault   **B** the same fault, after a repair   **C** the bill'));
out.push(p('**b**  Listen again. **1** What three facts does Nour give in the first thirty seconds? **2** What does she ask for instead of an apology?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.5  The second telephone call', [
  ['Nour', 'Mr Rateb, it is Nour at Sham Trading. The shutter is still not working. You came on Thursday the eleventh, it worked on Thursday and on Friday, and it stopped again on Sunday — the same fault, a metre from the ground.'],
  ['Technician', 'I am sorry. I did say the switch might not be the only thing.'],
  ['Nour', 'You did, and I wrote it down. I am not telephoning to complain; I am telephoning to agree what happens next.'],
  ['Technician', 'I can come on Wednesday.'],
  ['Nour', 'Before Wednesday, three things. What do you think it is now? What will it cost? And is any of Thursday\'s work covered, since it is the same fault within a week?'],
  ['Technician', 'The motor, probably. About nine hundred thousand with the fitting. And I will not charge for Wednesday\'s visit — it is the same fault.'],
  ['Nour', 'Thank you. Then Wednesday, between nine and one, the motor priced at nine hundred, no call-out. I will put that in a message now so that we both have it.'],
  ['Technician', 'Most people shout at me on the second call.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Following up – the second call, and the English for it**',
  table(['Shape', 'Example'], [
    ['**still** + negative', 'It is **still not working**.'],
    ['Present perfect + **since**', 'It **has not worked since** you came.'],
    ['The three facts', 'You came on the **11th** · it worked **two days** · it stopped on **Sunday**, **same fault**.'],
    ['Saying why you are calling', 'I am **not telephoning to complain**; I am telephoning to **agree what happens next**.'],
    ['The three questions', 'What do you think it is? What will it cost? Is the earlier work covered?'],
  ], [1.4, 2.6]),
  '⚠ **_Still_ carries the whole message.** _It is still not working_ says: the problem continues, time has passed, and I have been waiting. It is firm and it is not rude, and it is the single most useful word in a follow-up.',
  '⚠ **Three facts in the first thirty seconds:** the date of the visit, how long it worked, and the date it failed. A follow-up without dates becomes an argument about memory.',
  '⚠ **Say what the call is for.** _I am not telephoning to complain; I am telephoning to agree what happens next._ It changes the other person from defending to planning, in one sentence.',
  '⚠ **Ask whether the earlier work is covered.** It is a reasonable question, it is often answered yes, and almost nobody asks it.',
  '**Practise:** Make the second call for each, with the three facts and the three questions. 1 a repair 2 a delivery that came short twice 3 a document nobody has sent 4 a complaint nobody answered 5 a promise made at a meeting',
  '**Useful phrases:**  It is still not working.  ·  It has not worked since…  ·  I am not telephoning to complain.  ·  Is any of that covered?  ·  I will put that in a message so that we both have it.',
  '**Pronunciation – firm without anger.** 🔊 **Track 20.6** Listen: _the shutter is **still** not working_ — the stress is on _still_, the voice is level, and the sentence ends falling. Shouted, it gets an apology; said this way, it gets a Wednesday. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes the second call with three facts and three questions; B offers a day and answers about the cost. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, it is __________. The __________ is still not working. You came on __________, it worked __________, and it __________ on __________ — the same fault.'],
  ['B', 'I am sorry. I did say __________.'],
  ['A', 'You did, and I wrote it down. I am not telephoning to complain; I am telephoning to agree what happens next.'],
  ['B', 'I can come on __________.'],
  ['A', 'Before __________, three things. What do you think it is now? What will it cost? And is __________ covered, since __________?'],
  ['B', '__________. About __________. And __________.'],
]));
out.push(table(['Role card 1 — the air conditioner', 'Role card 2 — a short delivery, twice'], [[
  'Regassed on 3 June, worked for nine days, warm again since the 12th. The technician said a leak was possible. Ask: what now, what cost, and is the June gas covered.',
  'Short by two lines on 4 November and again on 18 November, the same two lines both times. Ask: what has changed in their picking, what the credit will be, and whether the December order will be checked before it leaves.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the second call for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that said what the call was **for**. Then say whether the other person became defensive or helpful.'));
out.push(PHRASE_CARD(['It is still not working.', 'It has not worked since…', 'I am not telephoning to complain.', 'Is that covered?', 'the same fault within a week', 'so that we both have it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make **three** follow-up calls — real or role-played. Each one: three facts, the sentence about why you are calling, and the three questions.'));
out.push(table(['Who', 'The three facts', 'What I asked for', 'What I got'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.9, 1.8, 1.3, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It is still _______. They came on _______, it worked for _______, and it _______ on _______. I asked _______ and they said _______._'));
out.push(p('**Listener task:** write down how many follow-ups in the room got a better outcome than the first call did. It is usually most of them, which is worth knowing before you give up after one.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is not working still_ and _since two weeks_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the follow-up message, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Shutter — same fault again, agreed Wednesday 9–1, motor at 900,000, no call-out',
  'Mr Rateb,',
  'Thank you for the call. This is what we agreed, so that we both have it.',
  '**What has happened.** You replaced the bottom limit switch on Thursday 11th. The shutter worked on the 11th and the 12th. It failed again on Sunday the 14th, with the same fault: it stops about a metre from the ground.',
  '**What we agreed.** You come on Wednesday the 17th, between 9.00 and 13.00. You believe it is the motor. The motor and fitting is about 900,000. There is **no call-out charge** for Wednesday, because it is the same fault within a week.',
  '**If it is not the motor**, please stop and telephone me before doing anything over 500,000, as before.',
  'If I have any of this wrong, one line back is enough.',
  'Thank you — and thank you for saying on Thursday that the switch might not be the only thing. It is the reason this is a short message and not an argument.',
  'Nour Mansour · Sham Trading · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the subject line contain that most subject lines do not?'));
out.push(item('2', 'Why does the message repeat the dates that were agreed on the telephone?'));
out.push(item('3', 'What does the last paragraph do, and why is it there?'));
out.push(box('Writer\'s box', [
  '**A follow-up message — the shape:** a subject line that carries **the agreement itself** → thanks in one line → **what has happened**, with dates → **what we agreed**, including the money → what to do if it turns out to be something else → an easy correction → and a thank-you for the honest thing they said earlier.',
  '**Put the agreement in the subject line.** _Wednesday 9–1, motor at 900,000, no call-out._ Six months later, a search finds it without anybody opening anything.',
  '**Thank them for the warning they gave.** _Thank you for saying the switch might not be the only thing._ A technician who is thanked for an honest warning gives the next one earlier, and the next one is the one that matters.',
  '⚠ Repeat the dates even though you both just said them aloud. The telephone call is the agreement; the message is the record, and the record is what exists in March.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a follow-up message about something still not done (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, agreed ______________   ______________, Thank you for the call. This is what we agreed, so that we both have it.   **What has happened.** ______________ on ______________. ______________. It ______________ on ______________, ______________.   **What we agreed.** ______________ on ______________, between ______________ and ______________. ______________. ______________.   **If ______________**, please ______________.   If I have any of this wrong, one line back is enough.   Thank you — and thank you for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put the agreement in the subject line. Yours says _Follow-up_ — what would you search for in six months?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could this be found and understood in six months?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The agreement in the subject line', ''],
  ['Dates for what happened', ''],
  ['The money agreed, in figures', ''],
  ['A thank-you for an honest warning', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their subject line. The class says, from the subject line alone, what was agreed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that has still not been done at your work (60 to 100 words). Say when it was promised, how many times you have asked, what you have been told each time, and what you will do next.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the next step_   ✓ _still / yet / since used correctly?_   ? _has anybody above you been told?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many has nobody above the writer been told? That is usually the next step and nobody has taken it.'));
out.push(box('Homework', ['Write your final text. Then make one second call this week with the three facts and the three questions, and write down what changed (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.4 =======================
out.push(pb());
out.push(h2('20.4  It was repaired on Wednesday'));
out.push(p('**Function:** saying what was done   ·   **Grammar:** the past passive for work done, with _by_ when it matters   ·   **Pronunciation:** reading a record aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What was repaired at your work in the last year? Who did it? Is it written down anywhere?'));
out.push(p('**b**  Change these: _They replaced the switch._ → _The switch ______._  ·  _Nobody tested it._ → _It ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is being written?   **A** an invoice   **B** a record of the repair   **C** a complaint'));
out.push(p('**b**  Listen again. **1** What three things are recorded? **2** Why does Abu Yasser insist on the word "temporary"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.7  Writing it in the book', [
  ['Nour', 'Right — the repair book. On Wednesday the seventeenth the motor was replaced by Rateb Engineering.'],
  ['Abu Yasser', 'And the limit switch was replaced on the eleventh, by the same man, and it was not the fault.'],
  ['Nour', 'Should that go in? It did not fix it.'],
  ['Abu Yasser', 'Especially that. In two years somebody will say the switch has never been changed, and it has — six days before the motor.'],
  ['Nour', 'And the wiring?'],
  ['Abu Yasser', 'Say it plainly: the wiring to the motor was **not** replaced, and it is twenty years old. He said it should be done within the year. That is a temporary repair whether he calls it one or not.'],
  ['Nour', 'So: motor replaced the seventeenth; switch replaced the eleventh, not the fault; wiring not replaced, twenty years old, recommended within twelve months. And a date to look at it again.'],
  ['Abu Yasser', 'A date. Write December. A thing with no date on it is a thing nobody does.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – recording what was done**',
  table(['Shape', 'Example'], [
    ['**was / were** + past participle', 'The motor **was replaced** on the 17th.'],
    ['**by** + who, when it matters', 'It **was replaced by** Rateb Engineering.'],
    ['The negative — what was **not** done', 'The wiring **was not replaced**.'],
    ['What was recommended', 'It **was recommended** within twelve months.'],
    ['A date to look again', '**Review: December.**'],
  ], [1.6, 2.4]),
  '⚠ Here the **by** matters. A repair record without the name of who did it is half a record — in two years the question is always _who fitted this?_',
  '⚠ **Record what was not done.** _The wiring was not replaced._ It is the most valuable line in any repair record and the one everybody leaves out, because at the time it feels like admitting something.',
  '⚠ **Record the failed repair too.** The switch that did not fix it is exactly what somebody needs to know in two years, when they are about to change the switch again.',
  '⚠ **Every temporary repair gets a review date.** _A thing with no date on it is a thing nobody does._',
  '**Practise:** Record each repair in four lines: what was done, by whom, what was not done, and the review date. 1 a shutter 2 a vehicle 3 a roof 4 a machine 5 something at home',
  '**Useful phrases:**  was replaced on the 17th  ·  by Rateb Engineering  ·  was not replaced  ·  recommended within twelve months  ·  Review: December.',
  '**Pronunciation – reading a record aloud.** 🔊 **Track 20.8** Listen. Each line is flat, short and separated: _motor replaced, seventeenth, Rateb_. A record is read aloud to be checked, not to be enjoyed. Repeat four lines.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes the record; B adds the failed repair, the thing not done, and the review date. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Right — the book. On __________ the __________ was __________ by __________.'],
  ['B', 'And the __________ was __________ on __________, by the same man, and it was not the fault.'],
  ['A', 'Should that go in? It did not fix it.'],
  ['B', 'Especially that. In __________ somebody will say __________, and it has.'],
  ['A', 'And __________?'],
  ['B', 'Say it plainly: __________ was **not** __________, and it is __________. He said __________. That is a temporary repair whether he calls it one or not.'],
]));
out.push(table(['Role card 1 — the van', 'Role card 2 — the roof'], [[
  'Brake hose replaced 3 March by Jaramana Motors. The pads were checked on 10 February by the same garage and were not the fault. The other hose was not replaced and is the same age. Recommended within six months.',
  'Two tiles replaced in October by a roofer from the market. The gutter was cleared in August and was not the cause. The flashing was not replaced and he said it has one more winter in it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs read their record aloud for the class – **without the book**.'));
out.push(p('**Listener task:** write the line that says what was **not** done. Then write the review date. Both are missing from most real records.'));
out.push(PHRASE_CARD(['was replaced on the 17th', 'by Rateb Engineering', 'was not replaced', 'it was not the fault', 'recommended within twelve months', 'Review: December.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write the record for **three** repairs at your workplace, past or recent. Each one: what was done, by whom, what was not done, and the review date.'));
out.push(table(['What was done', 'By whom', 'What was NOT done', 'Review'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1, 1.6, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The _______ was _______ on _______ by _______. The _______ was not _______. Review: _______._'));
out.push(p('**Listener task:** count how many of these records existed before today. Then ask who will keep the book from now on.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it was repair_ and _it was replaced from the engineer_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the repair book, and answer the questions.'));
out.push(box(null, [
  '**REPAIR BOOK — loading bay shutter**',
  '**17 Dec.** Motor and fitting replaced **by** Rateb Engineering. 900,000. No call-out charge (same fault within a week). Tested six times before he left; worked each time.',
  '**11 Dec.** Bottom limit switch replaced by Rateb Engineering. 300,000. **This was not the fault** — the shutter failed again on the 14th with the same symptom.',
  '**17 Mar / 2 May / 9 Aug / 1 Dec.** Adjusted, Rateb Engineering, about 120,000 each. Right for about a fortnight each time. **Total spent on adjustment before the part was changed: about 480,000.**',
  '**Not done.** The wiring to the motor was **not** replaced. It is about twenty years old. Rateb recommended replacement within twelve months and said it is not dangerous now. Estimated 450,000.',
  '**Review: December next year** — or sooner if the shutter stops again.',
  '_Written by Nour Mansour, 17 December, from Rateb Engineering\'s invoice and Abu Yasser\'s account of the four adjustments._',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which entry records something that did **not** work, and why is it there?'));
out.push(item('2', 'What is the total spent on adjustments, and what does putting it in the record do?'));
out.push(item('3', 'What does the last line tell a future reader?'));
out.push(box('Writer\'s box', [
  '**A repair book page — newest first:** date · what was done · **by whom** · cost · one fact about the work → the failed repairs, marked → **the running total**, where there is one → **what was not done**, with the recommendation and the price → a **review date** → and who wrote it, from what.',
  '**Put the running total in.** _About 480,000 on adjustment before the part was changed._ That one line is what prevents the next four adjustments, and nobody adds it up unless the book asks them to.',
  '**"Not done" is a heading, not an omission.** Give it the recommendation, the timescale and the price. In a year somebody will have to decide, and this is the only page that will tell them what they already knew.',
  '⚠ Say who wrote it and **from what** — an invoice, somebody\'s account, your own memory. A record whose source is unknown gets argued with; one that says "from the invoice" does not.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a repair book page for something at your work (35 words or more). Use the frame.'));
out.push(p('**REPAIR BOOK — ______________**   **______________.** ______________ replaced **by** ______________. ______________. ______________.   **______________.** ______________ by ______________. **This was not the fault** — ______________.   **______________.** ______________, about ______________ each. **Total spent before ______________: about ______________.**   **Not done.** ______________ was **not** ______________. ______________ recommended ______________. Estimated ______________.   **Review: ______________.**   _Written by ______________, ______________, from ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the running total is what prevents the next four repairs. Is there one here, and could you find the invoices to make it exact?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody in two years decide what to do from this page?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Passive throughout, with _by_ where it matters', ''],
  ['The failed repair recorded', ''],
  ['A "not done" with a price and a timescale', ''],
  ['A review date, and who wrote it from what', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "not done". The class says which one will be the next expensive surprise.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a repair at your work that nobody recorded (60 to 100 words). Say what was done, who did it, what was left undone, and what it would cost to find out now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing left undone_   ✓ _passive used correctly?_   ? _who still remembers?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many does one person\'s memory hold the whole history? That is the argument for the book, and it is usually in the room in person.'));
out.push(box('Homework', ['Write your final text. Then start a repair book for one thing at your workplace — one page, newest first — and show it to the person who does the repairs (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.5 =======================
out.push(pb());
out.push(h2('20.5  How much will it cost?'));
out.push(p('**Function:** asking the cost before the work   ·   **Grammar:** _How much will it cost? · about · up to · including_   ·   **Pronunciation:** asking about money calmly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When did somebody last do work for you without telling you the price first? What happened?'));
out.push(p('**b**  Which answer can you plan with? _It will not be expensive. · About 900,000. · Between 800,000 and a million, including the fitting._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour establish before the work starts?   **A** only the price   **B** the price, what is included, and what happens if it is more   **C** the date'));
out.push(p('**b**  Listen again. **1** What is **not** included in the price? **2** What is agreed about anything over the figure?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.9  Before you start', [
  ['Nour', 'Before you start — how much will it cost?'],
  ['Technician', 'The motor is about eight hundred and fifty. With the fitting, nine hundred.'],
  ['Nour', 'Nine hundred including the fitting. Does that include coming out?'],
  ['Technician', 'No call-out this time; it is the same fault.'],
  ['Nour', 'And does it include anything else — the brackets, the bolts, the small things?'],
  ['Technician', 'The brackets if they need changing. They usually do on a shutter this age. Say another fifty.'],
  ['Nour', 'Then let us say nine hundred and fifty, and if anything takes it over a million, you stop and telephone me before you do it. Not after.'],
  ['Technician', 'And if you do not answer?'],
  ['Nour', 'Then you do nothing and you do not lose the day — I will pay for the visit. I would rather pay for a wasted morning than find out on an invoice.'],
  ['Technician', 'Most people say "do whatever is necessary".'],
  ['Nour', 'And then most people are surprised, and then everybody is annoyed, and the next repair is harder than it needed to be.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking the cost before the work**',
  table(['Question', 'What it pins down'], [
    ['**How much will it cost?**', 'the figure'],
    ['**Does that include** the fitting? the call-out?', 'what is inside the figure'],
    ['**Is there anything else** — brackets, bolts, small things?', 'what is outside it'],
    ['**If it goes over ___ , will you stop and telephone me?**', 'the limit'],
    ['**And if I do not answer?**', 'what happens then'],
  ], [1.8, 2.2]),
  '⚠ **A figure is not a price until you know what is inside it.** The fitting, the call-out, the small parts and the second visit are four separate costs and they are all invisible in _about nine hundred_.',
  '⚠ **Set the limit and say "before, not after".** _If anything takes it over a million, stop and telephone me before you do it._ Everything expensive that has ever appeared on an invoice appeared because this sentence was not said.',
  '⚠ **Answer the "and if I do not answer?" question in advance** — and pay for the wasted visit if that is what it costs. It is cheaper than the alternative and it is why the technician will telephone next time.',
  '⚠ _Do whatever is necessary_ is the most expensive sentence in this unit.',
  '**Practise:** Ask the five questions for each. 1 a repair 2 a vehicle service 3 building work 4 a print job 5 a professional\'s time',
  '**Useful phrases:**  How much will it cost?  ·  Does that include…?  ·  Is there anything else?  ·  stop and telephone me before you do it  ·  I would rather pay for a wasted morning.',
  '**Pronunciation – asking about money calmly.** 🔊 **Track 20.10** Listen: _how much will it cost?_ — flat, early in the conversation, no apology before it. Repeat four. Asking about money at the end sounds like doubt; asking at the start sounds like business.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the five questions before any work starts; B gives a figure and tries to leave something out. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Before you start — how much will it cost?'],
  ['B', 'The __________ is about __________. With __________, __________.'],
  ['A', '__________ including __________. Does that include __________?'],
  ['B', '__________.'],
  ['A', 'And does it include __________ — __________, __________?'],
  ['B', '__________ if they need changing. Say another __________.'],
  ['A', 'Then let us say __________, and if anything takes it over __________, you stop and telephone me before you do it.'],
]));
out.push(table(['Role card 1 — a vehicle service', 'Role card 2 — building work'], [[
  'A service is quoted at 400,000. Not included: the filters, any brake work, and the collection of the vehicle. The garage usually finds "one or two things".',
  'Repointing a wall is quoted at 1.2 million. Not included: scaffolding, making good the paint, and taking the rubble away. The builder expects to agree the extras as he goes.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write everything that was **not** included in the first figure. The list is usually longer than the figure.'));
out.push(PHRASE_CARD(['How much will it cost?', 'Does that include…?', 'Is there anything else?', 'stop and telephone me', 'before you do it, not after', 'I would rather pay for a wasted morning.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('For **three** jobs at your work, ask the five questions — of a colleague, or for real. Write what was included, what was not, and the limit you agreed.'));
out.push(table(['The job', 'The figure', 'What was NOT included', 'The limit agreed'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 0.8, 1.9, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They said _______. It did not include _______. We agreed that over _______ they stop and telephone._'));
out.push(p('**Listener task:** write down the biggest thing that was left out of a first figure. In most rooms it is bigger than a quarter of the figure itself.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _how much it will cost?_ and _it costs about to nine hundred_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the written confirmation of the price, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Shutter motor — agreed 950,000, stop and telephone over 1,000,000',
  'Mr Rateb,',
  'Confirming what we said on the telephone this morning, before you come on Wednesday.',
  '**Included at 950,000:** the motor (about 850,000), the fitting, and the brackets if they need changing (about 50,000).',
  '**Not included:** nothing else that we have discussed. There is no call-out charge, because it is the same fault within a week.',
  '**The limit.** If the work is going to go over **1,000,000**, please stop and telephone me **before** doing it. 011 ___ ____ in the office and 09__ ___ ___ all day.',
  '**If you cannot reach me:** do nothing further and we will pay for the visit. I would rather pay for a morning than be surprised by an invoice, and I am saying that in writing so that you are not out of pocket for doing the right thing.',
  'Thank you. Nour Mansour · Sham Trading',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is listed under "included", and why are the parts priced separately?'));
out.push(item('2', 'What does the message promise if the technician cannot reach anybody?'));
out.push(item('3', 'Why does the writer say she is putting that in writing?'));
out.push(box('Writer\'s box', [
  '**A price confirmation — four headings:** **included**, with the parts priced separately → **not included** → **the limit**, with two telephone numbers → **if you cannot reach me**.',
  '**Price the parts separately inside the total.** _The motor (about 850,000), the fitting, and the brackets (about 50,000)._ When the invoice comes, you can see which part moved, and so can they.',
  '**Protect the other person for doing the right thing.** _We will pay for the visit… so that you are not out of pocket._ A technician who loses a morning by obeying your limit will not obey it twice unless you say this.',
  '⚠ Put the limit **in the subject line**. It is the one number that matters and the one that will be argued about.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a price confirmation for a job at your work (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — agreed ______________, stop and telephone over ______________   ______________, Confirming what we said ______________.   **Included at ______________:** ______________ (about ______________), ______________, and ______________.   **Not included:** ______________.   **The limit.** If the work is going to go over **______________**, please stop and telephone me **before** doing it. ______________ and ______________.   **If you cannot reach me:** ______________. I would rather ______________ than ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says protect the other person for obeying your limit. What happens here if they stop and cannot reach you — who pays for the morning?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could an invoice surprise this writer?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The limit in the subject line', ''],
  ['Parts priced separately inside the total', ''],
  ['Two telephone numbers', ''],
  ['What happens if nobody answers', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "if you cannot reach me". The class says which technician would telephone next time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an invoice that surprised somebody at your work (60 to 100 words). Say what was expected, what arrived, what had not been asked, and what was done about it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the question nobody asked_   ✓ _the five questions covered?_   ? _was it paid in the end?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the surprise avoidable with one sentence before the work started? Count them; it is nearly all.'));
out.push(box('Homework', ['Write your final text. Then ask the five cost questions about one job this week — before it starts — and write down what turned out not to be included (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.6 =======================
out.push(pb());
out.push(h2('20.6  Thank you for coming so quickly'));
out.push(p('**Function:** thanking, and confirming what happens next   ·   **Grammar:** _thank you for_ + -ing, and the confirmation that follows   ·   **Pronunciation:** a thank-you that is believed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Who at your work does something well that nobody ever thanks them for? Why not?'));
out.push(p('**b**  Which is worth more? _Thank you very much. · Thank you for coming on the same day — the lorry went out at four because of it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour thank the technician for, exactly?   **A** the repair   **B** coming the same day, and the warning he gave   **C** the price'));
out.push(p('**b**  Listen again. **1** What does she confirm immediately after thanking him? **2** What does he ask for, and what does she say?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.11  Thank you, and what happens next', [
  ['Nour', 'Thank you for coming on the same day. The lorry went out at four because of it, and the Homs customer does not know anything happened.'],
  ['Technician', 'It was on my way.'],
  ['Nour', 'It was not on your way; Mezzeh is not on the way to anywhere from Qudsaya. Thank you also for telling me in December that the switch might not be the only thing. That is why today was a short conversation and not an argument.'],
  ['Technician', 'People do not usually remember that part.'],
  ['Nour', 'Then: the motor is in, tested six times, nine hundred and fifty. The wiring is not done and you have said within twelve months, about four hundred and fifty. I am writing December in the book for that, and I will telephone you in November.'],
  ['Technician', 'You could write a line for me. People ask me for somebody who has used me.'],
  ['Nour', 'Gladly, and I will put the December warning in it, because that is the thing that makes you worth telephoning. Send me where to write it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Thanking properly, and closing the job**',
  table(['Move', 'Example'], [
    ['**Thank you for** + **-ing**', '**Thank you for coming** on the same day.'],
    ['**What it made possible**', 'The lorry went out at four **because of it**.'],
    ['**Thank the honest thing**', '**Thank you for telling me** the switch might not be the only thing.'],
    ['**Confirm the state of the job**', 'The motor is in, tested six times, 950,000.'],
    ['**Confirm what is still open**', 'The wiring is not done. **Review: December.**'],
  ], [1.5, 2.5]),
  '⚠ **A thank-you is worth what it is specific about.** _Thank you very much_ is a sound. _The lorry went out at four because of it_ is a fact the other person can be proud of, and it is remembered.',
  '⚠ **Thank the warning, not just the work.** Anybody will thank you for a repair that worked. Thanking somebody for telling you something you did not want to hear is what makes them tell you earlier next time.',
  '⚠ **Every thank-you at the end of a job carries a confirmation.** What is done, what it cost, what is **not** done, and when it will be looked at. The warmth is real and the list is what stops the next argument.',
  '⚠ When somebody asks you for a reference, say what you will put in it — and put the uncomfortable thing in. It is the part that makes the reference worth having.',
  '**Practise:** Thank somebody for each, with what it made possible, and confirm the state of the job. 1 a repair 2 a late delivery that arrived 3 a colleague who covered for you 4 a supplier who warned you 5 somebody who told you bad news early',
  '**Useful phrases:**  Thank you for coming…  ·  because of it  ·  Thank you also for telling me…  ·  tested six times  ·  Review: December.  ·  that is the thing that makes you worth telephoning',
  '**Pronunciation – a thank-you that is believed.** 🔊 **Track 20.12** Listen: the thanks is said slowly and the fact after it at normal speed. A fast thank-you sounds like a goodbye. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A thanks B specifically, thanks the warning, and confirms the job; B tries to wave it away. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Thank you for __________. __________ because of it, and __________.'],
  ['B', 'It was nothing.'],
  ['A', 'It was not nothing; __________. Thank you also for telling me __________. That is why __________.'],
  ['B', 'People do not usually remember that part.'],
  ['A', 'Then: __________ is __________, __________, __________. __________ is not done and you have said __________. I am writing __________ in the book, and I will __________.'],
]));
out.push(table(['Role card 1 — a supplier who warned you', 'Role card 2 — a colleague who covered'], [[
  'She telephoned in March to say the shipment might be late, ten days before it was. Because of that call thirty rolls came by bus and no customer waited. Confirm: the quarter\'s order, the price held to December, the open question about the hundred-roll price.',
  'He took the counter for two days when you were at the clinic and found a pricing error while he was there. Confirm: what is still outstanding on the Thursday orders, and that you will do his Saturday in March.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the thing that was thanked which was **not** the work itself. That is the sentence that changes the next job.'));
out.push(PHRASE_CARD(['Thank you for coming…', 'because of it', 'Thank you also for telling me…', 'It was not nothing.', 'Review: December.', 'worth telephoning']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Thank **three** people properly this week — at work or outside. Each time: what they did, what it made possible, and one thing they said or warned that you are also thanking them for.'));
out.push(table(['Who', 'What they did', 'What it made possible', 'The warning or the honest thing'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.8, 1.3, 1.5, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I thanked _______ for _______. Because of it, _______. I also thanked them for _______._'));
out.push(p('**Listener task:** write down how many of these people had ever been thanked for that thing before. The answer is nearly always none.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _thank you for come_ and _thanks for you help_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the closing message, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Shutter — done, 950,000, wiring open for December',
  'Mr Rateb,',
  'Thank you for coming on the same day. The lorry went out at four because of it and the customer never knew there had been a problem.',
  'Thank you also for saying in December that the switch might not be the only thing. You were right, and because you had said it, today was a short conversation instead of an argument.',
  '**Done:** motor and fitting replaced 17 December, tested six times, **950,000**, no call-out.',
  '**Not done:** the wiring to the motor, about twenty years old. You recommended replacement within twelve months and said it is not dangerous now. About 450,000. **I have written December in our book and I will telephone you in November.**',
  '**For your reference file:** I will write you a line and I will include the December warning in it, because that is the part that makes you worth telephoning. Send me where to send it.',
  'Thank you. Nour Mansour · Sham Trading · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'What two things are thanked, and which one is unusual?'));
out.push(item('2', 'What will happen in November, and who will do it?'));
out.push(item('3', 'What does the writer promise to put in the reference, and why?'));
out.push(box('Writer\'s box', [
  '**A closing message — the shape:** thanks **with what it made possible** → thanks for the honest or unwelcome thing → **Done**, with the figure → **Not done**, with the recommendation, the price and **who will chase it** → and anything you are offering in return.',
  '**Name who will chase the open item, and when.** _I will telephone you in November._ An open item with no owner and no month is an open item for ever.',
  '**Offer something back.** A line for a reference file, a recommendation, an introduction. It costs nothing and it is the reason the same person comes on the same day next time.',
  '⚠ Put **done** and **not done** under separate headings even in a warm message. Warmth and precision are not opposites, and a message with only the warmth is one nobody can act on in a year.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a closing message for a job or a favour (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — done, ______________, ______________ open for ______________   ______________, Thank you for ______________. ______________ because of it.   Thank you also for ______________. You were right, and because you had said it, ______________.   **Done:** ______________, ______________, **______________**.   **Not done:** ______________. You recommended ______________. About ______________. **I have written ______________ and I will ______________.**   **In return:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says name who will chase the open item and when. Who is chasing this one, and in which month?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **in a year, would anybody know what is still open?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_thank you for_ + -ing, with what it made possible', ''],
  ['The honest or unwelcome thing thanked', ''],
  ['Done and not done, separately', ''],
  ['An owner and a month for the open item', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their second thank-you — the one for the warning. The class says which supplier would come on the same day next time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about somebody outside your company who has done something for your workplace that was never acknowledged (60 to 100 words). Say what they did, what it made possible, why nobody said so, and what you would write to them now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what it made possible_   ✓ _thank you for + -ing?_   ? _could you still send it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask who will send theirs this week. This is the cycle in this book most likely to produce something outside the classroom.'));
out.push(box('Homework', ['Write your final text — and send it. Then write three lines about what happened, or about why you did not send it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.7 =======================
out.push(pb());
out.push(h2('20.7  Review & Mediate: the service request'));
out.push(p('**Function:** telling a colleague what a service agreement covers — and what it does not   ·   **Review:** needs doing · arranging a visit · following up · what was done · the cost · thanking'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 20 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Two ways to say it: _the shutter needs ______ / needs ______ ______ ______._',
  '**2** What is wrong with "I will come in the morning"?',
  '**3** What three facts begin a follow-up call?',
  '**4** What is the most valuable line in a repair record?',
  '**5** What are the five questions to ask before work starts?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi think the maintenance agreement covers?   **A** everything   **B** only the van   **C** nothing useful'));
out.push(p('**b**  Listen again. **1** What is actually covered? **2** What does Nour say about the word "parts"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.13  "Is the van covered?"', [
  ['Fadi', 'The maintenance agreement on the board. Twelve months, all servicing included. So when the brake hose goes, that is covered.'],
  ['Nour', 'Read me the line under it.'],
  ['Fadi', '"Scheduled servicing and labour. Parts and consumables are chargeable at the current rate."'],
  ['Nour', 'Then the brake hose is not covered. _Labour_ is the man\'s time. _Parts_ are everything he fits. The agreement pays for him to look and not for anything he finds.'],
  ['Fadi', 'Then what is it worth?'],
  ['Nour', 'Quite a lot, actually. The servicing is four visits a year, which is about 600,000 of labour, and it is the reason somebody looks at the van before it breaks instead of after. But it is not insurance, and the word on the board that makes everybody think it is, is _all_.'],
  ['Fadi', 'So when something goes wrong—'],
  ['Nour', 'You ask the five questions, same as always. How much, what is included, what is not, what the limit is, and what happens if nobody answers. The agreement changes the first answer and not the other four.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – an agreement, where one word does all the damage**',
  table(['To slow the reading', 'To translate the terms', 'To place its value'], [
    ['Read me the line under it.', '_Labour_ is ___ ; _parts_ are ___ .', 'It is worth about ___ , and it is not ___ .'],
    ['Then ___ is not covered.', 'It pays for him to look and not for what he finds.', 'The word that misleads everybody is ___ .'],
  ], [1.8, 2, 1.7]),
  '⚠ **One word carries the misunderstanding, nearly always.** Here it is _all_. In a guarantee it is _parts_. In an insurance policy it is _accidental_. Find the word, say it out loud, and the rest of the document becomes readable.',
  '⚠ **Translate the trade words into work:** _labour_ = the man\'s time · _parts_ = anything he fits · _consumables_ = oil, filters, gas · _scheduled_ = the visits that were planned, not the ones you asked for.',
  '⚠ **Then say what it is worth, honestly.** The agreement is not worthless because it is not insurance. _Four visits a year, about 600,000 of labour, and somebody looks at the van before it breaks._ A mediation that only says what a document does not do is only half of one.',
  '**Practise:** The agreement says "twelve months, all servicing included — scheduled servicing and labour; parts and consumables chargeable". Explain it to somebody who believes the next repair is free.',
  '**Useful phrases:**  Read me the line under it.  ·  Labour is his time; parts are what he fits.  ·  It pays for him to look.  ·  It is not insurance.  ·  the word that misleads everybody is…',
  '**Pronunciation – saying a disappointing thing plainly.** 🔊 **Track 20.14** Listen: _then the brake hose is not covered_ — short, flat, no softening and no triumph. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads an agreement silently; B believes it covers more than it does. A finds the word, translates the terms, and says what it is worth. Then swap.'));
out.push(table(['Agreement 1 — for A', 'Agreement 2 — for B'], [[
  '**GUARANTEE.** _All work guaranteed for 12 months. The guarantee covers the replaced part and the labour of replacing it. It does not cover consequential damage, wear items, or faults arising from a different component._  **B says:** the shutter is guaranteed, so anything that goes wrong with it is theirs.',
  '**SERVICE CONTRACT.** _Annual cover, unlimited call-outs. Call-outs between 08.00 and 17.00, Sunday to Thursday. Outside those hours a call-out charge applies at the emergency rate._  **A says:** unlimited call-outs, so the night the cold store failed was free.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the one word that did the damage. Then write what the document is actually worth.'));
out.push(PHRASE_CARD(['Read me the line under it.', 'labour is his time', 'parts are what he fits', 'It pays for him to look.', 'It is not insurance.', 'the word that misleads everybody']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you an agreement or a guarantee. Read it silently. Then explain to **two** colleagues what it covers, what it does not, and what it is worth.'));
out.push(table(['Who I told', 'What they thought it covered', 'The word that misled them'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the agreement you mediated. This is the **eighth** unit of Book 2, and the unwritten thing this time is a single word: every agreement has one word that everybody reads as meaning more than it says, and the document never tells you which.'));
out.push(p('_It\'s a ______. They thought it covered ______. The word was ______. It actually covers ______, which is worth about ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _labour · parts · consumables · scheduled · call-out · wear items_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Parts and consumables are chargeable._   **A** Parts are free. **B** You pay for parts. **C** There are no parts.',
  '**2**  _The shutter needs adjusting._   **A** It has been adjusted. **B** Somebody must adjust it. **C** It cannot be adjusted.',
  '**3**  _Between 9.00 and 13.00 on Thursday._   **A** At nine. **B** Some time in that window. **C** All day Thursday.',
  '**4**  _It is still not working._   **A** It has started working. **B** It has never worked. **C** It was repaired and the problem continues.',
  '**5**  _If the work goes over 500,000, please stop and telephone before doing it._   **A** Telephone after finishing. **B** Get permission before spending more. **C** Do not spend more than 500,000 ever.',
  '**6**  _The wiring was not replaced. Recommended within twelve months._   **A** The wiring is new. **B** The wiring still needs doing, within a year. **C** The wiring cannot be replaced.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a message about a repair, the three points are usually: **what is wrong** · **when somebody is coming** · **what the reader must do or avoid**.',
  '⚠ Give the window, not the day: _Thursday between nine and one_. In twenty-five words it costs two words and it is the difference between a message that helps and one that does not.',
  '⚠ If something must not be used, say so as a **negative imperative** and put it first.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** Something at work is being repaired. Write a message to your colleagues (25 words or more). Say **what is wrong**, **when the technician is coming**, and **what they must not do in the meantime**.'));
out.push(p('Do not ______________. The ______________ is ______________. ______________ is coming on ______________ between ______________ and ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What is wrong, exactly', ''],
  ['A window, not a day', ''],
  ['A negative imperative, first', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your workplace that everybody believes is covered by somebody (60 to 100 words). Say what it is, who is supposed to be responsible, what the document actually says, and what would happen tomorrow if it failed.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then read one real agreement at your workplace and write the one word that makes people think it covers more than it does (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 20 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The shutter needs ___ .   a) adjust   b) adjusting   c) to adjusting',
  '2  The switch needs ___ replaced.   a) to be   b) be   c) being',
  '3  ___ can you come?   a) When   b) What time you   c) When you',
  '4  He is coming ___ nine and one.   a) from   b) between   c) at',
  '5  It is ___ not working.   a) yet   b) already   c) still',
  '6  The motor ___ on the seventeenth.   a) was replaced   b) was replace   c) replaced by',
  '7  How much ___ it cost?   a) will   b) it will   c) does will',
  '8  Thank you for ___ on the same day.   a) come   b) came   c) coming',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 20.15** Listen to a technician and a customer. Complete the note.   What it needs: ______   Day and window: ______   Price, including: ______   Not included: ______   Limit: ______'));
out.push(dlg('Track 20.15  Audio script (read after the check)', [
  ['Technician', 'It is the motor, not the switch. I can come on Wednesday, between nine and one — I cannot be closer than that.'],
  ['Nour', 'Wednesday, nine to one. How much will it cost?'],
  ['Technician', 'Nine hundred and fifty, including the fitting and the brackets. No call-out, because it is the same fault within a week. The wiring is not in that — that is separate, and it is about four hundred and fifty.'],
  ['Nour', 'And if anything takes it over a million, you stop and telephone me before you do it.'],
]));
out.push(p('**C  Writing.** Write the price confirmation for a job (35+ words): what is included, what is not, the limit, and what happens if nobody answers the telephone.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 20)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what needs doing, and name the part rather than the symptom',
  '☐ say how many times it has been done already, with dates',
  '☐ turn "next week" into a window, and ask for early bad news',
  '☐ make a follow-up call with three facts and three questions',
  '☐ record what was done, by whom, and what was **not** done',
  '☐ put a review date on every temporary repair',
  '☐ ask the five cost questions before any work starts',
  '☐ thank somebody for the warning as well as for the work',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 20 · Student\'s Book');
