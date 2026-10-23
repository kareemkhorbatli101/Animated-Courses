// Proactive Business English A2 · Syria Edition · Book 2 · Unit 21 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'damage · crushed · dent · scratch · defective · substandard · reject · rework · credit note · replacement · refund · compensation · goodwill gesture · batch number · quality check · tolerance · specification · acceptable · unacceptable · complaint form · on arrival · in transit · packaging · condition · signed for · put right';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 21  Quality and Complaints'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**21.1**  report damage exactly, with numbers',
  '**21.2**  make a complaint politely and firmly',
  '**21.3**  apologise for your company when it is not your fault',
  '**21.4**  say what you will do to put it right',
  '**21.5**  state a quality rule',
  '**21.6**  ask whether something is under guarantee',
  '**21.7**  Review & Mediate: tell a colleague what the complaint letter says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Both sides of the same four sentences', [
  'This unit has two halves and they are the same conversation from opposite ends. Making a complaint: **what happened · what it has cost · what I want · by when.** Answering one: **I am sorry · this is what happened · this is what we will do · by when.**',
  'The English is simple. What is hard is staying specific while you are annoyed, and staying honest while you are being blamed for something that is not your fault.',
  '⚠ And one rule that holds on both sides. **The complaint is almost never about the goods.** Two crushed boxes are two crushed boxes; the complaint is that nobody telephoned. Answer the second one and the first one settles itself.',
], C.lyellow, C.orange));

// ======================= CYCLE 21.1 =======================
out.push(pb());
out.push(h2('21.1  Two of the twenty boxes were crushed'));
out.push(p('**Function:** reporting damage   ·   **Grammar:** the passive with numbers and proportions   ·   **Pronunciation:** saying a proportion clearly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When something arrives damaged at your work, who looks at it first? What do they write down?'));
out.push(p('**b**  Which tells a supplier most? _Some boxes were damaged. · Two boxes were crushed. · Two of the twenty boxes were crushed, both on the bottom layer._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What exactly was damaged?   **A** two boxes of twenty   **B** the whole pallet   **C** the wrap only'));
out.push(p('**b**  Listen again. **1** Where were the damaged boxes on the pallet? **2** Why does Abu Yasser photograph it before it is moved?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.1  Before you move it', [
  ['Hala', 'The Aleppo pallet has arrived and some of it is damaged.'],
  ['Abu Yasser', 'Do not move anything. How many, out of how many?'],
  ['Hala', 'Two. Two of the twenty.'],
  ['Abu Yasser', 'Where on the pallet?'],
  ['Hala', 'Both on the bottom layer, at the same corner.'],
  ['Abu Yasser', 'Then it was stacked on something or it was dropped on that corner, and it was not the lorry — a lorry crushes the top. Photograph it where it stands, with the pallet label in the picture, before anybody lifts anything.'],
  ['Hala', 'And the driver is waiting for a signature.'],
  ['Abu Yasser', 'He signs ours and we sign his, and on his you write: _two boxes of twenty crushed, bottom layer, photographed_. Not "damaged". Damaged is an argument. Two of twenty, bottom layer, photographed, is a fact.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reporting damage – the passive, the proportion and the place**',
  table(['Shape', 'Example'], [
    ['**were** + past participle', 'Two boxes **were crushed**.'],
    ['The proportion', '**Two of the twenty** boxes were crushed.'],
    ['The place', '**Both on the bottom layer**, at the same corner.'],
    ['What it tells you', 'A lorry crushes the **top**; this was stacked on or dropped.'],
    ['On the note', '_Two boxes of twenty crushed, bottom layer, photographed._'],
  ], [1.6, 2.4]),
  '⚠ **Always "how many, out of how many".** _Two boxes_ sounds small to you and large to a supplier who sent four hundred. _Two of twenty_ is ten per cent and cannot be argued about.',
  '⚠ **Say where.** The position tells everybody what happened: the top is the lorry, the bottom is stacking, one corner is a drop, and all down one side is a forklift.',
  '⚠ **Write the fact on the delivery note before you sign it.** Once you have signed _received in good condition_, the conversation is over. _Damaged_ is an argument; _two of twenty, bottom layer, photographed_ is a fact.',
  '⚠ Photograph it **where it stands**, with the label in the picture, before anything is moved.',
  '**Practise:** Report each, with the proportion, the place and what it suggests. 1 boxes 2 a pallet of tiles 3 a roll of fabric 4 a machine in a crate 5 something that arrived wet',
  '**Useful phrases:**  Do not move anything.  ·  How many, out of how many?  ·  two of the twenty  ·  on the bottom layer  ·  photographed before it was moved  ·  Damaged is an argument.',
  '**Pronunciation – saying a proportion clearly.** 🔊 **Track 21.2** Listen: _two of the **twenty**_ — the stress on the second number, with a small pause before it. Said quickly it is heard as "two or twenty". Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports vague damage; B gets the proportion, the place, and the photograph before anything moves. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The __________ has arrived and some of it is damaged.'],
  ['B', 'Do not move anything. How many, out of how many?'],
  ['A', '__________. __________ of the __________.'],
  ['B', 'Where?'],
  ['A', '__________, at __________.'],
  ['B', 'Then it was __________ and it was not __________. Photograph it where it stands, with __________ in the picture.'],
  ['A', 'And the driver is waiting for a signature.'],
  ['B', 'On his you write: __________. Not "damaged".'],
]));
out.push(table(['Role card 1 — a pallet of tiles', 'Role card 2 — rolls of wrap'], [[
  'Forty boxes of tiles. Six are broken: five in one corner, one in the middle. Corner damage on five suggests a drop; the one in the middle may have been broken before packing.',
  'Thirty rolls. Four have crushed ends, all four on the same end of the pallet, all four on the outside. The outside and one end suggests a forklift, not the lorry.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write what the **position** of the damage suggests. That sentence is worth more than the photograph.'));
out.push(PHRASE_CARD(['Do not move anything.', 'How many, out of how many?', 'two of the twenty', 'bottom layer', 'with the label in the picture', 'Damaged is an argument.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Report **three** cases of damage from your own work — real or remembered. Proportion, place, what it suggests, and what was written on the note.'));
out.push(table(['What', 'How many of how many', 'Where', 'What it suggests'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.2, 1.1, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ of the _______ were _______, all _______. That suggests _______. On the note we wrote _______._'));
out.push(p('**Listener task:** count how many people have ever written anything on a driver\'s note before signing it. It is nearly always none.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _two boxes was crushed_ and _some of them were damage_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the damage report, and answer the questions.'));
out.push(box(null, [
  '**DAMAGE REPORT — delivery D-4188, received 09.40, 6 January**',
  '**What arrived.** One pallet, twenty boxes of wide wrap, batch 2611.',
  '**What is damaged.** **Two of the twenty** boxes are crushed — the rolls inside are flattened at one end and cannot be used on the machine. Both boxes were on the **bottom layer, at the same corner**.',
  '**What that suggests.** Pressure from above or a drop on that corner. A lorry crushes the top layer; this is the bottom. We are not saying where it happened and we are not asking the driver to.',
  '**What we did.** Photographed on the pallet before anything was moved, with the pallet label visible — three photographs attached. The driver\'s note was signed with the words **"two boxes of twenty crushed, bottom layer, photographed"**. The two boxes are set aside and have not been opened further.',
  '**What we have not done.** We have not used any part of the two boxes and we have not thrown them away. They are available for collection or inspection for fourteen days.',
  '**What we are asking for.** Two replacement boxes with the next delivery, or a credit note for two. Please tell us which by Thursday.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which sentence refuses to blame anybody, and why is it there?'));
out.push(item('2', 'Why does the report say what has **not** been done?'));
out.push(item('3', 'What two things is the supplier offered, and what is the deadline?'));
out.push(box('Writer\'s box', [
  '**A damage report — seven headings:** what arrived, with the batch → **what is damaged**, with the proportion and the position → what that suggests → **what we did** (photographs, the words on the note) → **what we have not done** → what we are asking for, with a choice → a date.',
  '**Do not blame.** _We are not saying where it happened._ The moment a report accuses, the supplier\'s answer becomes a defence, and the two boxes take a month instead of a week.',
  '**"What we have not done" is the paragraph that gets the credit note.** Not used, not thrown away, available for fourteen days. It removes every reason to refuse.',
  '⚠ **Offer a choice** — replacement or credit — and give a date. A complaint with one demand is a negotiation; a complaint with two acceptable outcomes is a decision somebody can take on the same day.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a damage report for something at your work (35 words or more). Use the frame.'));
out.push(p('**DAMAGE REPORT — ______________, received ______________**   **What arrived.** ______________.   **What is damaged.** **______________ of the ______________** are ______________. ______________.   **What that suggests.** ______________. We are not saying ______________.   **What we did.** Photographed ______________. The note was signed with the words **"______________"**.   **What we have not done.** ______________. Available for ______________ days.   **What we are asking for.** ______________, or ______________. Please tell us which by ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says give the proportion. Yours says _several boxes_ — how many, out of how many?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the supplier settle this today without asking anything?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The proportion and the position', ''],
  ['No accusation', ''],
  ['A "what we have not done"', ''],
  ['A choice of two outcomes, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we have not done". The class says which report they would settle fastest if they were the supplier.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that arrived damaged and was never claimed for (60 to 100 words). Say what it was, what it cost, why nobody claimed, and what would have had to be true for somebody to claim.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the reason nobody claimed_   ✓ _proportion and position?_   ? _is it too late now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Add up what the room has absorbed without claiming. Ask why — the answer is nearly always that nobody photographed it.'));
out.push(box('Homework', ['Write your final text. Then find out where your workplace keeps its photographs of damaged deliveries. If it does not take any, write what you would need to start (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.2 =======================
out.push(pb());
out.push(h2('21.2  I would like to make a complaint'));
out.push(p('**Function:** complaining politely   ·   **Grammar:** _I\'d like to make a complaint · I am not complaining about X, I am complaining about Y_   ·   **Pronunciation:** firm, slow, and not loud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a complaint you have made that worked. What did you say first?'));
out.push(p('**b**  Which opening gets further? _This is not good enough. · I would like to make a complaint, and I would like to be quick about it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the complaint really about?   **A** the two crushed boxes   **B** that nobody telephoned   **C** the price'));
out.push(p('**b**  Listen again. **1** What does Nour say she is **not** complaining about? **2** What does she ask for at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.3  The complaint under the complaint', [
  ['Nour', 'Ms Shamsi, I would like to make a complaint, and I would like to be quick about it.'],
  ['Ms Shamsi', 'Go on.'],
  ['Nour', 'Two of the twenty boxes arrived crushed, bottom layer, same corner. That is ten per cent and it is the third time this year.'],
  ['Ms Shamsi', 'I am sorry. We will replace them.'],
  ['Nour', 'Thank you. But I am not complaining about the two boxes. I am complaining that your loader knew. The corner was crushed before it was wrapped — you can see the wrap over the dent in the photograph — and nobody telephoned us.'],
  ['Ms Shamsi', 'That is a different thing.'],
  ['Nour', 'It is the only thing. Two boxes cost ninety thousand. Finding out at nine forty on a Tuesday, with a customer waiting, costs me a morning and a telephone call I had to make looking stupid.'],
  ['Ms Shamsi', 'What do you want me to do?'],
  ['Nour', 'Replace the two. And tell me what you will say to the loader, because next time I would rather have the telephone call than the boxes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making a complaint – politely, and about the right thing**',
  table(['Move', 'What to say'], [
    ['**Say what it is**', '**I would like to make a complaint**, and I would like to be quick about it.'],
    ['**The facts, with numbers**', 'Two of twenty, bottom layer. Ten per cent. The third time this year.'],
    ['**Name the real complaint**', 'I am **not** complaining about the boxes. I am complaining that **nobody telephoned**.'],
    ['**What it cost**', 'Ninety thousand — and a morning, and a telephone call I had to make looking stupid.'],
    ['**What you want**', 'Replace the two. And **tell me what you will say to the loader.**'],
  ], [1.5, 2.6]),
  '⚠ **Say that you are complaining.** It sounds blunt and it is not: it tells the other person what kind of conversation this is, so that they stop guessing and start listening.',
  '⚠ **The complaint is almost never about the goods.** Separate the two out loud: _I am not complaining about X, I am complaining about Y._ Then the person can fix the thing that is actually broken, which is usually a process and not a product.',
  '⚠ **Put the cost of the inconvenience next to the cost of the goods.** Ninety thousand against a morning. That comparison is what makes the second complaint land.',
  '⚠ **Ask for something that prevents it**, not only something that repairs it. _Tell me what you will say to the loader._',
  '**Practise:** Make each complaint in five moves, naming the real complaint. 1 damaged goods 2 a late delivery 3 a wrong invoice 4 a repair that failed 5 something nobody told you',
  '**Useful phrases:**  I would like to make a complaint.  ·  the third time this year  ·  I am not complaining about… I am complaining that…  ·  what it costs me is…  ·  next time I would rather have the telephone call',
  '**Pronunciation – firm, slow, not loud.** 🔊 **Track 21.4** Listen to the same complaint said fast and loud, then slow and level. The second one is answered; the first one is survived. Repeat the second four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A complains in five moves and names the real complaint; B offers to fix the small thing first. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, I would like to make a complaint, and I would like to be quick about it.'],
  ['B', 'Go on.'],
  ['A', '__________. That is __________ and it is the __________ time this year.'],
  ['B', 'I am sorry. We will __________.'],
  ['A', 'Thank you. But I am not complaining about __________. I am complaining that __________.'],
  ['B', 'That is a different thing.'],
  ['A', 'It is the only thing. __________ cost __________. __________ costs me __________.'],
  ['B', 'What do you want me to do?'],
]));
out.push(table(['Role card 1 — a late delivery', 'Role card 2 — a wrong invoice'], [[
  'Two days late. The real complaint: they knew on Monday and told you on Wednesday when you telephoned. The two days cost one annoyed customer; the silence cost a promise you had made in writing.',
  'Charged at the old price, 180,000 too much. The real complaint: it is the fourth time and each time somebody says they will tell the office. The money is returned every time; the four telephone calls are not.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the complaint for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that named the real complaint. Then write whether the other person understood it or kept answering the first one.'));
out.push(PHRASE_CARD(['I would like to make a complaint.', 'the third time this year', 'I am not complaining about…', 'It is the only thing.', 'what it costs me is…', 'I would rather have the telephone call.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make **three** real complaints — to colleagues, or for real. Each one: the facts with numbers, the real complaint named, the cost of the inconvenience, and something that would prevent it.'));
out.push(table(['To whom', 'The facts', 'The real complaint', 'What would prevent it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.6, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I complained to _______ about _______. But the real complaint was _______. What would prevent it is _______._'));
out.push(p('**Listener task:** count how many "real complaints" in the room were about **being told late**. It is nearly all of them, in every class, in every trade.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I want to complain about you_ and _I am complaining for the boxes_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter of complaint, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Delivery D-4188 — two boxes of twenty crushed, and a telephone call that was not made',
  'Dear Ms Shamsi,',
  'I am writing to make a complaint. I will keep it short and I would like an answer by Thursday.',
  '**What happened.** Delivery D-4188 arrived at 09.40 on 6 January. Two of the twenty boxes were crushed, both on the bottom layer at the same corner. Photographs are attached, taken before anything was moved. This is the third damaged delivery this year, out of eleven.',
  '**What it cost.** The two boxes are about 90,000. The morning cost more: a customer was waiting for the wrap, and I had to telephone him and explain something I had only just found out myself.',
  '**The complaint.** It is not the two boxes. In the third photograph the wrap is stretched over the dent, which means the corner was crushed **before** it was wrapped, and somebody at your end knew. Nobody telephoned.',
  '**What I am asking for.** Two replacement boxes or a credit note, your choice, by Thursday. And one sentence from you about what will be said to whoever wrapped it — because next time I would rather have the telephone call than the boxes.',
  'We have bought from you for eleven years and I would rather write this than not write it.',
  'Best regards, Nour Mansour · Sham Trading',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the evidence that somebody knew, and where is it?'));
out.push(item('2', 'What does the last line before the signature do?'));
out.push(item('3', 'What two things are asked for, and which one is unusual?'));
out.push(box('Writer\'s box', [
  '**A letter of complaint — five headings:** say you are complaining and give a deadline → **what happened**, with proportions and dates → **what it cost**, goods and inconvenience separately → **the complaint**, named and evidenced → what you are asking for, including **something that prevents it**.',
  '**Put the evidence next to the accusation.** _In the third photograph the wrap is stretched over the dent._ Without it, _somebody knew_ is an insult; with it, it is a finding.',
  '**Separate the two costs.** The goods are a number; the inconvenience is a story with a number attached. Both go in, and the second one is why the letter is being written.',
  '⚠ **The last line matters more than the rest.** _We have bought from you for eleven years and I would rather write this than not write it._ It says: this is not the end of the relationship, it is maintenance of it — which is the only reason a good supplier answers properly.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter of complaint about something real (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________   Dear ______________,   I am writing to make a complaint. I will keep it short and I would like an answer by ______________.   **What happened.** ______________. ______________ of the ______________. ______________.   **What it cost.** ______________. ______________ cost more: ______________.   **The complaint.** It is not ______________. ______________, which means ______________.   **What I am asking for.** ______________, your choice, by ______________. And ______________.   We have ______________ and I would rather write this than not write it.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put the evidence next to the accusation. You have written _they knew_ — what in the delivery shows it?"',
  'Quote, question, stop. If there is no evidence, the sentence has to go; that is also a finding.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would a good supplier answer this properly?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Says it is a complaint, with a deadline', ''],
  ['Proportions and dates', ''],
  ['The two costs, separately', ''],
  ['Something asked for that prevents it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line. The class says which letter they would answer first, and which they would answer best.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a complaint you did not make (60 to 100 words). Say what happened, what it cost, why you said nothing, and what you would write now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the real complaint_   ✓ _are there numbers?_   ? _could it still be written?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask why each complaint was not made. The reasons divide into two: not wanting the argument, and not having the evidence. Only one of those is fixable, and this unit fixes it.'));
out.push(box('Homework', ['Write your final text. Then make one complaint this week, in five moves, naming the real complaint — and write down what was offered (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.3 =======================
out.push(pb());
out.push(h2('21.3  I am very sorry about that'));
out.push(p('**Function:** apologising for your company   ·   **Grammar:** _I am very sorry about that · that should not have happened · let me find out_   ·   **Pronunciation:** an apology that is not a performance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Have you ever had to apologise for something that was not your fault? What did you say?'));
out.push(p('**b**  Which would you rather hear? _I am sorry you feel that way. · I am very sorry about that; it should not have happened._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is at fault?   **A** Hala   **B** the warehouse   **C** it is not yet known'));
out.push(p('**b**  Listen again. **1** What does Hala apologise for before she knows anything? **2** What does she refuse to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.5  Taking the call', [
  ['Mr Tarabishi', 'Hala, I have opened the order and there are four sizes in it and I ordered three. And the small ones are missing.'],
  ['Hala', 'I am very sorry about that. That should not have happened and I can hear it has wasted your morning.'],
  ['Mr Tarabishi', 'It has. Whose fault is it?'],
  ['Hala', 'I do not know yet, and I would rather find out than guess. What I can tell you now is what I will do: the small ones go on the four o\'clock van and I will take the extra size back on the same journey.'],
  ['Mr Tarabishi', 'Somebody in your warehouse is not reading.'],
  ['Hala', 'That may be true and I am not going to say it on the telephone about somebody who is not here. I will find out today and I will tell you what it was, even if it turns out to be us at the counter.'],
  ['Mr Tarabishi', 'Even if it is you?'],
  ['Hala', 'Especially if it is me. Four o\'clock van, the small ones, and the extra size collected. And I will telephone you tomorrow with what happened.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Apologising for the company – four moves, and two refusals**',
  table(['Move', 'What to say'], [
    ['**1 Apologise, plainly**', '**I am very sorry about that.** That **should not have happened**.'],
    ['**2 Name the cost to them**', 'I can hear it has **wasted your morning**.'],
    ['**3 Say what you will do**', 'The small ones go on the four o\'clock van.'],
    ['**4 Promise the explanation**', 'I will find out today and I will tell you what it was.'],
  ], [1.4, 2.6]),
  '**And two refusals:**  _I do not know yet, and I would rather find out than guess._  ·  _I am not going to say that on the telephone about somebody who is not here._',
  '⚠ **Never say _I am sorry you feel that way_.** It is an apology for the other person\'s emotions and everybody hears it as an insult. _I am very sorry about that_ apologises for the thing.',
  '⚠ **Apologise before you know whose fault it is.** You are apologising for the experience, which is certain, not for the blame, which is not.',
  '⚠ **Do not blame a colleague to a customer.** Even when the customer offers you the excuse. A company that blames its own warehouse to a customer has told that customer something far worse than the mistake.',
  '⚠ **Promise the explanation and give it**, including when it turns out to be you. _Especially if it is me._',
  '**Practise:** Take each call in four moves, with both refusals. 1 a wrong order 2 a late delivery 3 a rude colleague 4 a price that changed 5 a promise somebody else made',
  '**Useful phrases:**  I am very sorry about that.  ·  That should not have happened.  ·  it has wasted your morning  ·  I would rather find out than guess.  ·  even if it turns out to be us  ·  Especially if it is me.',
  '**Pronunciation – an apology that is not a performance.** 🔊 **Track 21.6** Listen: _I am very sorry about that_ — level, unhurried, said once. An apology repeated three times sounds like fear and makes the customer angrier. Repeat four, once each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B complains and offers a colleague to blame; A apologises, refuses the blame, and says what will happen. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________, I have __________ and __________.'],
  ['A', 'I am very sorry about that. That should not have happened and I can hear it has __________.'],
  ['B', 'It has. Whose fault is it?'],
  ['A', 'I do not know yet, and I would rather find out than guess. What I can tell you now is what I will do: __________ and __________.'],
  ['B', 'Somebody in your __________ is not __________.'],
  ['A', 'That may be true and I am not going to say it about somebody who is not here. I will find out __________ and I will tell you, even if __________.'],
]));
out.push(table(['Role card 1 — a promise somebody else made', 'Role card 2 — a rude colleague'], [[
  'A customer was promised Tuesday by a colleague who is on leave. It was never possible. You can offer Thursday and a part delivery on Tuesday.',
  'A customer says somebody at the counter was short with him on Sunday. You were not there. You can apologise, find out, and tell him what you find.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that refused to blame a colleague. Then write what the customer did after it — they nearly always soften.'));
out.push(PHRASE_CARD(['I am very sorry about that.', 'That should not have happened.', 'it has wasted your morning', 'I would rather find out than guess.', 'somebody who is not here', 'Especially if it is me.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** complaint calls from colleagues playing customers. Apologise in four moves, refuse both temptations, and promise the explanation.'));
out.push(table(['The complaint', 'What I apologised for', 'What I promised to do', 'When I will explain'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.4, 1.4, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They said _______. I said I was sorry about _______ and that I would _______. I promised to tell them _______ by _______._'));
out.push(p('**Listener task:** write down who in the room found it hardest **not** to blame somebody. It is the most natural thing in the world and it is the whole discipline of this cycle.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am sorry for that happened_ and _sorry you feel like this_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the reply to a complaint, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Your order 0702 — the small boxes, and what happened',
  'Dear Mr Tarabishi,',
  'I am very sorry about Tuesday. You ordered three sizes and received four, and the size you most needed was missing. That should not have happened.',
  '**What we have done.** The small boxes went on the four o\'clock van and were with you by half past five. The extra size was collected on the same journey, so you have not had to store it or return it.',
  '**What happened.** I said I would find out and tell you, so here it is. The order was taken correctly. It was picked from an old picking list that had not been replaced when the sizes changed in November. Two other orders went out from the same list that week; both were ours and neither was yours.',
  '**What we have changed.** The old lists were taken off the wall the same afternoon. From Monday the list is printed fresh each morning with the date on it, and the warehouse checks the date before picking. It is a small change and it is the one that would have prevented this.',
  '**What I am not going to do.** I am not going to tell you it was one person\'s fault. Three people used that list and the list was wrong.',
  'Thank you for telephoning rather than simply ordering elsewhere.',
  'Best regards, Hala Mourad · Sham Trading',
], 'FFFFFF', C.navy));
out.push(item('1', 'In what order are the four things said — the apology, what was done, what happened, what changed?'));
out.push(item('2', 'Which paragraph protects somebody, and how?'));
out.push(item('3', 'What is the last line for?'));
out.push(box('Writer\'s box', [
  '**A reply to a complaint — the order matters more than the words:** apologise first, in one sentence → **what we have done** (already, not will) → **what happened**, plainly → **what we have changed** → what you will not do → and a thank-you for complaining.',
  '**Put what you have already done before the explanation.** A customer reading an explanation before a remedy reads it as an excuse. The same paragraph after the remedy reads as honesty.',
  '**Name the process, not the person.** _The list was wrong and three people used it._ It is almost always true, it is fairer, and it is what makes the change believable.',
  '⚠ **Say what the change is and why it would have prevented this.** _The list is printed fresh each morning with the date on it._ A change that does not obviously bear on the complaint reads as a gesture.',
  '⚠ **Thank them for complaining.** Most people do not complain; they leave. The ones who complain are doing you a service and should be told so.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reply to a complaint (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, and what happened   Dear ______________,   I am very sorry about ______________. ______________. That should not have happened.   **What we have done.** ______________.   **What happened.** I said I would find out, so here it is. ______________. ______________.   **What we have changed.** ______________. It is ______________ and it is the one that would have prevented this.   **What I am not going to do.** I am not going to ______________.   Thank you for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the remedy comes before the explanation. Which comes first here, and how would the customer read the second paragraph?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the explanation read as honesty or as an excuse?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Apology first, in one sentence', ''],
  ['What has already been done, before the explanation', ''],
  ['The process named, not a person', ''],
  ['A change that would have prevented it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we have changed". The class says which change they believe would actually hold.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an apology you received that worked, or one that did not (60 to 100 words). Say what was said, in what order, what was done, and whether you went back.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the sentence that worked, or should have_   ✓ _was anybody blamed?_   ? _did they go back?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the apology come **after** the explanation? That is the usual order and it is the usual reason apologies fail.'));
out.push(box('Homework', ['Write your final text. Then write the reply your own workplace should have sent to its last complaint, in the order the Writer\'s box gives (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.4 =======================
out.push(pb());
out.push(h2('21.4  We will send a replacement'));
out.push(p('**Function:** putting it right   ·   **Grammar:** _we will_ + the four kinds of remedy   ·   **Pronunciation:** promising a date without hedging'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When something goes wrong at your work, what can you offer without asking anybody?'));
out.push(p('**b**  Put these in order, cheapest to dearest: _a replacement · a credit note · a refund · a goodwill gesture · doing it again properly_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is offered in the end?   **A** a refund   **B** a replacement and something else   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does the customer say he does **not** want? **2** What does Nour offer that was not asked for, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.7  What would put it right?', [
  ['Nour', 'Mr Haffar, two questions. What would put this right, and what would not?'],
  ['Customer', 'I do not want money off. I want the twelve boxes I ordered, because the shop is empty of them and the money does not fill a shelf.'],
  ['Nour', 'Then: twelve boxes on tomorrow morning\'s van, before you open. No charge for the delivery.'],
  ['Customer', 'Good.'],
  ['Nour', 'And one thing you have not asked for. For the next three months, when you order that size, I will telephone you on the morning it is picked and tell you how many are actually going on the van.'],
  ['Customer', 'Why three months?'],
  ['Nour', 'Because three months is long enough for you to stop thinking about it. If I said for ever you would not believe me, and if I said once you would be right not to.'],
  ['Customer', 'Nobody has ever given me a reason for the length of anything.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Putting it right – the four remedies, and the fifth thing**',
  table(['Remedy', 'When it is right'], [
    ['**A replacement**', 'when they need the goods, not the money'],
    ['**A credit note**', 'when they will order again anyway'],
    ['**A refund**', 'when the relationship is over or they ask for it'],
    ['**Doing it again properly**', 'a service; a repair; a report'],
    ['**A goodwill gesture**', 'for the inconvenience, not for the goods'],
  ], [1.3, 2.7]),
  '⚠ **Ask what would put it right — and what would not.** The second question is the one that saves you: this customer did not want money, and a credit note would have been both expensive and useless.',
  '⚠ **Separate the remedy for the goods from the remedy for the inconvenience.** Twelve boxes for the shelf; three months of telephone calls for the morning that was wasted. Most companies offer one and wonder why it did not work.',
  '⚠ **Give a length, and give a reason for the length.** _Three months, because that is long enough for you to stop thinking about it._ A promise for ever is not believed; a promise once is not enough.',
  '⚠ Say what it **costs**, not what it is worth. _No charge for the delivery_ is a fact; _at our expense, as a gesture of goodwill_ is a sentence about yourself.',
  '**Practise:** Choose the remedy and add the fifth thing, with a length and a reason. 1 damaged goods 2 a short order 3 a late repair 4 a wrong invoice 5 a rude member of staff',
  '**Useful phrases:**  What would put this right, and what would not?  ·  on tomorrow morning\'s van, before you open  ·  one thing you have not asked for  ·  for the next three months  ·  because three months is long enough',
  '**Pronunciation – promising a date without hedging.** 🔊 **Track 21.8** Listen: _twelve boxes on tomorrow morning\'s van, before you open._ No _should_, no _hopefully_, no _I will try_. Repeat four, and remove every hedge.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the two questions and offers a remedy plus a fifth thing with a length; B says what would not help. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, two questions. What would put this right, and what would not?'],
  ['B', 'I do not want __________. I want __________, because __________.'],
  ['A', 'Then: __________, __________. No charge for __________.'],
  ['B', 'Good.'],
  ['A', 'And one thing you have not asked for. For the next __________, I will __________.'],
  ['B', 'Why __________?'],
  ['A', 'Because __________ is long enough for __________. If I said for ever you would not believe me.'],
]));
out.push(table(['Role card 1 — a failed repair', 'Role card 2 — a wrong invoice, four times'], [[
  'The customer does not want the money back; he wants the machine working before Thursday, because Thursday is his busiest day. Available: a loan machine, a Saturday visit, and the engineer\'s mobile number for a month.',
  'The customer does not want an apology; he wants to stop checking every invoice. Available: a credit, a named person who checks his invoices before they are sent, and a note on the account for six months.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the fifth thing — the one that was not asked for — and its length and reason.'));
out.push(PHRASE_CARD(['What would put this right?', 'and what would not?', 'before you open', 'one thing you have not asked for', 'for the next three months', 'long enough for you to stop thinking about it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('For **three** things that have gone wrong at your work, choose the remedy and design the fifth thing, with a length and a reason for the length.'));
out.push(table(['What went wrong', 'The remedy', 'The fifth thing', 'How long, and why'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.2, 1.5, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They wanted _______, not _______. We offered _______. And for _______ we will _______, because _______._'));
out.push(p('**Listener task:** write down the best fifth thing in the room. The good ones cost almost nothing and last exactly long enough.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we will to send_ and _we send you a replacement tomorrow_ for a promise. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message that settles the complaint, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Order 0702 — twelve boxes tomorrow before you open, and a call each time for three months',
  'Dear Mr Haffar,',
  'Thank you for telling me what would help and what would not. You were right that a credit note fills no shelves.',
  '**For the goods:** twelve small boxes on tomorrow morning\'s van, with you before you open. No delivery charge.',
  '**For the morning you lost:** for the next three months, whenever you order that size, I will telephone you on the morning it is picked and tell you how many are going on the van. Three months, because that is long enough for you to stop thinking about it.',
  '**What we have changed for everybody:** the picking list is now printed fresh each morning with the date on it, and the date is checked before picking starts.',
  '**What this does not cover:** if the small boxes are short again tomorrow, telephone me and not the counter, and I will come myself.',
  'Best regards, Hala Mourad · Sham Trading · 09__ ___ ___',
], 'FFFFFF', C.navy));
out.push(item('1', 'What two remedies are given, and what is each one for?'));
out.push(item('2', 'What does "what this does not cover" do, and why is it unusual?'));
out.push(item('3', 'Why is a mobile number at the bottom rather than the office one?'));
out.push(box('Writer\'s box', [
  '**A settlement message — four headings:** **for the goods** · **for the inconvenience**, with a length and a reason · what we have changed for everybody · **what this does not cover**.',
  'Two headings for two different injuries. A customer who gets a replacement and nothing for the lost morning has been repaid and not satisfied.',
  '**"What this does not cover" is rare and worth copying.** It says: here is the gap, and here is what to do if you fall into it. It costs one sentence and it is the sentence a customer remembers when something else goes wrong.',
  '⚠ The number at the bottom should be the one that will be answered. Giving a mobile number for three months **is** the remedy, in a way that no credit note can be.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a settlement message for something at your work (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, and ______________   Dear ______________,   Thank you for telling me ______________.   **For the goods:** ______________. No ______________.   **For ______________:** for the next ______________, I will ______________. ______________, because ______________.   **What we have changed for everybody:** ______________.   **What this does not cover:** if ______________, ______________ and I will ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says two headings for two injuries. What is here for the time they lost, as distinct from the goods?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **has the lost time been answered, as well as the goods?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A remedy for the goods, with a time', ''],
  ['A remedy for the inconvenience, with a length', ''],
  ['A reason for the length', ''],
  ['What this does not cover', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "for the inconvenience". The class says which one they would accept.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time something was put right well (60 to 100 words). Say what was offered, what was offered that you had not asked for, and whether you went on buying from them.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing nobody had to offer_   ✓ _a date and no hedging?_   ? _are you still a customer?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the writer still a customer? The remedy that keeps people is almost never the money.'));
out.push(box('Homework', ['Write your final text. Then design the fifth thing — the one nobody asks for — that your own workplace could offer after a mistake, with a length and a reason (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.5 =======================
out.push(pb());
out.push(h2('21.5  Goods must be checked on arrival'));
out.push(p('**Function:** stating a quality rule   ·   **Grammar:** _must be_ + past participle; _within_ + a period   ·   **Pronunciation:** reading a rule aloud so it is remembered'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is checked at your workplace when goods arrive? Who checks it, and against what?'));
out.push(p('**b**  Which is a rule? _Goods should be checked. · Goods must be checked on arrival, against the order, before the driver leaves._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the new rule?   **A** check everything   **B** check against the order before the driver leaves   **C** photograph everything'));
out.push(p('**b**  Listen again. **1** What three things does a rule need, according to Abu Yasser? **2** What is the exception, and why is it in the rule?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.9  Writing the rule', [
  ['Nour', 'The new rule: goods must be checked on arrival.'],
  ['Abu Yasser', 'That is not a rule. That is a hope. A rule needs three things: who, against what, and before when.'],
  ['Nour', 'Then: goods must be checked by the person receiving them, against the **order** and not the delivery note, before the driver leaves.'],
  ['Abu Yasser', 'Better. And what happens when the driver will not wait?'],
  ['Nour', 'He always waits.'],
  ['Abu Yasser', 'He waits for me. He will not wait for Hala at the counter on a Thursday, and if the rule has no answer for that, she will sign and we will have a rule nobody keeps.'],
  ['Nour', 'Then: if the driver cannot wait, write **"received unchecked"** on his note before signing, and check within the hour.'],
  ['Abu Yasser', 'Now it is a rule. Three sentences, one exception, and the exception has its own instruction. Put the reason underneath, in one line, so that in two years somebody knows why.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Stating a quality rule – who, against what, before when**',
  table(['Part', 'Example'], [
    ['**must be** + past participle', 'Goods **must be checked** on arrival.'],
    ['**by** whom', '**by the person receiving them**'],
    ['**against** what', '**against the order**, not the delivery note'],
    ['**before** when', '**before the driver leaves**'],
    ['The exception, with its own instruction', 'If the driver cannot wait, write **"received unchecked"** and check **within the hour**.'],
  ], [1.7, 2.4]),
  '⚠ **A rule without who, against what and before when is a hope.** All three, every time. The commonest missing one is _against what_ — and checking against the delivery note instead of the order is how a missing line is never found.',
  '⚠ **Every rule needs its exception written into it.** A rule that cannot be kept on a busy Thursday is a rule that will be broken on a Thursday and then on a Monday. Name the hard case and give it its own instruction.',
  '⚠ **Put the reason underneath, in one line.** Unit 16 said why: a rule whose story is lost is dropped by the first person who never heard it.',
  '**Practise:** Turn each hope into a rule with all three parts and one exception. 1 checking goods 2 signing for things 3 locking up 4 answering the telephone 5 taking a complaint',
  '**Useful phrases:**  must be checked  ·  by the person receiving them  ·  against the order, not the note  ·  before the driver leaves  ·  received unchecked  ·  within the hour',
  '**Pronunciation – reading a rule aloud.** 🔊 **Track 21.10** Listen: the three parts are separated by small pauses — _must be checked · by the person receiving them · against the order_. Repeat the rule twice. A rule is read aloud to a new person, so it must survive being said.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes a hope; B turns it into a rule and finds the hard case. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The new rule: __________ must be __________.'],
  ['B', 'That is not a rule. That is a hope. A rule needs three things: who, against what, and before when.'],
  ['A', 'Then: __________ must be __________ by __________, against __________, before __________.'],
  ['B', 'Better. And what happens when __________?'],
  ['A', '__________ always __________.'],
  ['B', 'Not on a Thursday. If the rule has no answer for that, we will have a rule nobody keeps.'],
  ['A', 'Then: if __________, write __________ and __________ within __________.'],
]));
out.push(table(['Role card 1 — taking a complaint', 'Role card 2 — signing for a collection'], [[
  'The hope: "complaints must be written down". The hard case: a complaint taken at the counter when there is a queue of six people.',
  'The hope: "collections must be signed for". The hard case: a customer collecting at five past seven, when the office is locked and only the warehouse is open.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs read their finished rule aloud for the class – **without the book**.'));
out.push(p('**Listener task:** write the hard case and its instruction. A rule without one will be broken within a fortnight.'));
out.push(PHRASE_CARD(['must be checked', 'by the person receiving them', 'against the order', 'before the driver leaves', 'received unchecked', 'within the hour']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **three** real rules for your workplace. Each one: who, against what, before when, one exception with its own instruction, and the reason in one line.'));
out.push(table(['The rule', 'Who / against what / before when', 'The hard case', 'The reason'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.8, 1.3, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ must be _______ by _______, against _______, before _______. If _______, then _______. The reason is _______._'));
out.push(p('**Listener task:** write down the rule in the room most likely to be broken, and say which part is missing. It is nearly always the hard case.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _must be check_ and _goods must checked_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page of quality rules, and answer the questions.'));
out.push(box(null, [
  '**GOODS IN — the four rules, and what to do when they cannot be kept**',
  '**1** Goods **must be checked** by the person receiving them, **against the order**, **before the driver leaves**.  _Reason: a delivery note can agree with itself and still be wrong. The order is the only document that says what we asked for._',
  '**2** Any damage **must be photographed** where it stands, with the pallet label in the picture, **before anything is moved**.  _Reason: once it has been moved, the photograph proves nothing and the claim is a conversation._',
  '**3** The driver\'s note **must be signed with the fault written on it** — the number damaged, the number delivered, and the position.  _Reason: "received in good condition" ends the matter. Three words end it the other way._',
  '**4** Damaged goods **must not be used or thrown away** for fourteen days.  _Reason: a supplier may want to inspect, and a claim with nothing left to look at is a claim that gets refused._',
  '**When a rule cannot be kept.** If the driver will not wait, write **"received unchecked"** on his note before signing, and check within the hour. If you cannot photograph, write the fault on the note and tell the office the same hour. **A rule that is broken and reported is a problem; a rule that is broken quietly is the next complaint.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the reason given for checking against the order?'));
out.push(item('2', 'Why must damaged goods not be thrown away?'));
out.push(item('3', 'What is the difference between a rule broken and reported and one broken quietly?'));
out.push(box('Writer\'s box', [
  '**A page of quality rules — four at most, numbered, each with its reason underneath in italics**, and a final section: **when a rule cannot be kept**.',
  '**Four is the limit.** A page with nine rules is a page nobody reads; four can be read aloud to a new person in two minutes and remembered by the second week.',
  '**Each reason is one line and names what goes wrong without it.** _A delivery note can agree with itself and still be wrong._ The reason is what keeps the rule alive after the people who wrote it have gone.',
  '⚠ **The last section is what makes the page honest.** Rules are broken; the question is whether they are broken loudly or quietly. Give every rule a way of being broken properly and you will find out about the exceptions instead of discovering them in a complaint.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a page of quality rules for your own workplace, with three rules (35 words or more). Use the frame.'));
out.push(p('**______________ — the rules, and what to do when they cannot be kept**   **1** ______________ **must be** ______________ by ______________, against ______________, before ______________.  _Reason: ______________._   **2** ______________ **must be** ______________ before ______________.  _Reason: ______________._   **3** ______________ **must not be** ______________ for ______________.  _Reason: ______________._   **When a rule cannot be kept.** If ______________, ______________ and ______________ within ______________. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says every rule has who, against what and before when. Rule 2 has no _before when_ — before what, exactly?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody keep these rules on a busy Thursday?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_must be_ + past participle throughout', ''],
  ['Who, against what, before when — in every rule', ''],
  ['A one-line reason under each', ''],
  ['A "when a rule cannot be kept" section', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "when a rule cannot be kept". The class says whose workplace would hear about the exceptions.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule at your work that is broken every week (60 to 100 words). Say what the rule is, why it is broken, what the hard case is, and what the rule should say instead.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the hard case_   ✓ _must be + past participle?_   ? _who could change the rule?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the rule broken because it cannot be kept, rather than because nobody cares? It is nearly all, and that is a management finding, not a discipline one.'));
out.push(box('Homework', ['Write your final text. Then rewrite one real rule from your workplace with all three parts and a hard case, and show it to whoever wrote the original (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.6 =======================
out.push(pb());
out.push(h2('21.6  Is it under guarantee?'));
out.push(p('**Function:** asking about a guarantee   ·   **Grammar:** _Is it under guarantee? · it covers / it does not cover · from the date of_   ·   **Pronunciation:** asking a question you may not like the answer to'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What at your workplace is under guarantee right now? Could you prove it in five minutes?'));
out.push(p('**b**  Which question gets the most? _Is it guaranteed? · Is it under guarantee, what does the guarantee cover, and from what date does it run?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Is the motor under guarantee?   **A** yes, fully   **B** yes, but not the labour   **C** no'));
out.push(p('**b**  Listen again. **1** From what date does the guarantee run? **2** What is not covered, and what does Nour do about it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.11  Four months old', [
  ['Nour', 'Mr Rateb, the shutter motor has stopped. You fitted it on the seventeenth of December, which is four months ago. Is it under guarantee?'],
  ['Technician', 'It is. Twelve months on the motor.'],
  ['Nour', 'Twelve months from the date of fitting, or from the date you bought it?'],
  ['Technician', 'From fitting. The seventeenth of December.'],
  ['Nour', 'Good. And what does the guarantee cover — the motor only, or the labour of changing it?'],
  ['Technician', 'The motor. The labour is mine to charge and I would not charge you, four months in.'],
  ['Nour', 'Then let us write that down, because you and I will both remember it differently in September. The motor is covered to the seventeenth of December; the labour is not covered but you are not charging it this time; and if it fails a third time we will talk about the wiring, which you told me about in December and which we have not done.'],
  ['Technician', 'You wrote that down in December as well.'],
  ['Nour', 'I did. It is the only reason this conversation is two minutes long.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking about a guarantee – four questions, in this order**',
  table(['Question', 'Why'], [
    ['**Is it under guarantee?**', 'the first and the least useful on its own'],
    ['**From what date does it run?**', 'fitting, purchase or delivery — they are different'],
    ['**What does it cover?**', 'the part only, or the labour as well'],
    ['**What does it not cover?**', 'wear items, consequential damage, other components'],
  ], [1.7, 2.3]),
  '⚠ **The date is the question that decides it.** _From the date of fitting_ and _from the date of purchase_ can be months apart, and the second one is nearly always the one written in the document.',
  '⚠ **A guarantee on the part is not a guarantee on the job.** The part is free and the labour is not, unless somebody says so. Ask; often the answer is generous, and it will not be offered if it is not asked for.',
  '⚠ **Write down what you are told, while you are on the telephone, and say that you are doing it.** You will both remember it differently in September. This is Unit 19.6 again, in a different coat.',
  '**Practise:** Ask the four questions about each. 1 a motor 2 a vehicle part 3 a machine 4 building work 5 a telephone or a screen',
  '**Useful phrases:**  Is it under guarantee?  ·  From what date does it run?  ·  the motor only, or the labour?  ·  let us write that down  ·  we will both remember it differently in September',
  '**Pronunciation – asking a question you may not like the answer to.** 🔊 **Track 21.12** Listen: _from what date does it run?_ — level and unhurried, with no apology in front of it. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the four questions; B gives a guarantee with a date that is not the obvious one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, the __________ has __________. You fitted it on __________, which is __________ ago. Is it under guarantee?'],
  ['B', 'It is. __________ months on __________.'],
  ['A', '__________ months from the date of __________, or from __________?'],
  ['B', 'From __________.'],
  ['A', 'Good. And what does it cover — __________ only, or __________?'],
  ['B', '__________. __________ is mine to charge.'],
  ['A', 'Then let us write that down, because __________.'],
]));
out.push(table(['Role card 1 — a vehicle part', 'Role card 2 — building work'], [[
  'A clutch fitted in March. Guaranteed twelve months — but from the date of the part\'s purchase in January, not from fitting, and not covering labour. There is a mileage limit nobody mentioned.',
  'Repointing done in October, guaranteed two years — from completion, covering the work but not "water ingress from other sources", which is the phrase that will matter.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the **date** the guarantee runs from, and whether it is the date the customer assumed.'));
out.push(PHRASE_CARD(['Is it under guarantee?', 'From what date does it run?', 'the part only, or the labour?', 'What does it not cover?', 'let us write that down', 'we will remember it differently']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **three** things at your work that may be under guarantee. For each, find out the date it runs from, what is covered, and what is not. Write down where the document is.'));
out.push(table(['What', 'Runs from', 'Covers', 'Does not cover / where the paper is'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The _______ is guaranteed for _______ from _______. It covers _______ and not _______. The paper is _______._'));
out.push(p('**Listener task:** count how many guarantees in the room nobody could find the paper for. Those are guarantees that do not exist in practice.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is in guarantee_ and _it has two years of guarantee from it was bought_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note that goes in the file, and answer the questions.'));
out.push(box(null, [
  '**GUARANTEES — what is covered, from when, and where the paper is**',
  '**Shutter motor.** 12 months **from fitting**, 17 December. Covers the motor. **Does not cover** the labour of changing it, or any fault arising from the wiring. Paper: Rateb\'s invoice, in the Vehicles and Plant folder. **Expires 17 December.**',
  '**Cold store door seal.** 6 months from fitting, 16 December. Covers the seal. Does not cover the hinges, which Rateb says are dropping. Paper: invoice, same folder. **Expires 16 June.**',
  '**Van clutch.** 12 months **from purchase of the part**, 11 January — not from fitting on 3 March. Covers the part only. There is a distance limit of 40,000 km, which nobody mentioned and which is on the back of the garage\'s copy. Paper: photographed and in the folder. **Expires 11 January.**',
  '**Office printer.** Out of guarantee since August. Not worth extending at 240,000 a year for a machine that cost 600,000 and is eleven years old.',
  '⚠ **Three of these four run from a date that is not the date we would have guessed.** When anything is fitted, ask on the day: _from what date does it run?_ — and write the answer on the invoice before it is filed.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which guarantee runs from a date two months before the work, and why does that matter?'));
out.push(item('2', 'What is said about the printer, and why is it in the list at all?'));
out.push(item('3', 'What does the warning at the bottom ask somebody to do, and when?'));
out.push(box('Writer\'s box', [
  '**A guarantee list — one block per item:** what it is → **how long and from what date** → what it covers → **what it does not cover** → where the paper is → **the expiry date, in bold**.',
  '**The expiry date is the point of the whole page.** Everything else is detail; the date is what somebody looks for in a hurry, and it is the thing nobody writes down anywhere else.',
  '**Include the things that are out of guarantee**, with one line on whether to extend. A list of only the covered items tells you nothing about the uncovered risk.',
  '⚠ End with the instruction that keeps the page true: ask on the day, write the answer on the invoice. A guarantee list that is not maintained is worse than none, because people rely on it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the guarantee list for your own workplace, with three items (35 words or more). Use the frame.'));
out.push(p('**GUARANTEES**   **______________.** ______________ months **from ______________**, ______________. Covers ______________. **Does not cover** ______________. Paper: ______________. **Expires ______________.**   **______________.** ______________ from ______________. Covers ______________. Does not cover ______________. **Expires ______________.**   **______________.** Out of guarantee since ______________. ______________.   ⚠ ______________. When anything is fitted, ask on the day: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the expiry date is the point of the page. Is every expiry date here in bold, and could you find all three in five seconds?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody make a claim from this page alone?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['How long **and from what date**', ''],
  ['What it does not cover', ''],
  ['Where the paper is', ''],
  ['An expiry date, in bold', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one block. The class asks: could you claim on Thursday? If not, the block is missing the date or the paper.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a guarantee that turned out to be worth less than somebody thought (60 to 100 words). Say what was assumed, what the document said, what it cost, and what one question would have revealed it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the question that would have revealed it_   ✓ _the four questions covered?_   ? _where is that document now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Count how many documents nobody can now find. A guarantee whose paper is lost is a guarantee that does not exist.'));
out.push(box('Homework', ['Write your final text. Then find one guarantee document at your workplace, write its expiry date on the front of it, and put it where somebody could find it in five minutes (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.7 =======================
out.push(pb());
out.push(h2('21.7  Review & Mediate: the complaint letter'));
out.push(p('**Function:** telling a colleague what a complaint letter is really about   ·   **Review:** reporting damage · complaining · apologising · putting it right · quality rules · guarantees'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 21 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What two numbers does every damage report need?',
  '**2** Finish: _I am not complaining about ______, I am complaining that ______._',
  '**3** What should you never say instead of "I am very sorry about that"?',
  '**4** What three parts does a rule need?',
  '**5** Which guarantee question decides most claims?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi think the letter is about?   **A** him   **B** the boxes   **C** the price'));
out.push(p('**b**  Listen again. **1** What is the letter actually complaining about? **2** What does the letter ask for that is not a remedy?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.13  "Is this about my delivery?"', [
  ['Fadi', 'There is a complaint letter on the board about the Jaramana delivery. That was mine. It says the goods were damaged.'],
  ['Nour', 'Read me the paragraph headed "The complaint".'],
  ['Fadi', '"It is not the two boxes. The wrap is stretched over the dent, which means the corner was crushed before it was wrapped."'],
  ['Nour', 'Before it was wrapped. Your van did not wrap anything. The complaint is about Aleppo, and the word that worried you — _damaged_ — is in the first paragraph, which is the facts, not the complaint.'],
  ['Fadi', 'Then why is my delivery in it at all?'],
  ['Nour', 'Because it is how the damage was found: you delivered it, Hala opened it, and the photographs were taken before anything moved. You are in the evidence, not in the complaint. And the letter asks for something that is not a remedy at all — a sentence about what will be said to whoever wrapped it.'],
  ['Fadi', 'So nobody is asking for money.'],
  ['Nour', 'Money is the small half. Read the last line.'],
  ['Fadi', '"I would rather write this than not write it."'],
  ['Nour', 'That is a letter from somebody who intends to keep buying. A letter from somebody who is leaving does not explain itself.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a complaint letter, where the paragraph headings decide the meaning**',
  table(['To place the reader', 'To find the real complaint', 'To read the tone'], [
    ['Read me the paragraph headed ___ .', 'The complaint is ___ , not ___ .', 'The last line is written by somebody who ___ .'],
    ['You are in the evidence, not in the complaint.', 'It asks for something that is not a remedy.', 'A letter from somebody who is leaving does not explain itself.'],
  ], [1.8, 1.9, 1.8]),
  '⚠ **A well-written complaint has headings, and the headings decide what each paragraph is.** _What happened_ is facts; _the complaint_ is the complaint. A reader who sees a word they fear in the wrong paragraph panics about nothing.',
  '⚠ **The thing asked for that is not a remedy** — a sentence, a change, an explanation — is the true subject of most serious complaints. Point at it: it is what tells you whether the relationship is being repaired or ended.',
  '⚠ **Read the tone from the last line, not the first.** Anger is loudest at the beginning and most honest at the end. _I would rather write this than not write it_ is a sentence of commitment, not of departure.',
  '**Practise:** The letter has four headings and one line at the end. Explain to the driver why he is in the evidence and not in the complaint, and what the letter is really asking for.',
  '**Useful phrases:**  Read me the paragraph headed…  ·  You are in the evidence, not in the complaint.  ·  Money is the small half.  ·  it asks for something that is not a remedy  ·  somebody who intends to keep buying',
  '**Pronunciation – reading a heading aloud.** 🔊 **Track 21.14** Listen: _the paragraph headed **"The complaint"**_ — the heading is said with a pause on either side of it. Repeat four. Naming the heading is how you move somebody from panic to reading.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a complaint silently; B has seen their own name or work in it and is alarmed. A places them, finds the real complaint, and reads the tone. Then swap.'));
out.push(table(['Letter 1 — for A', 'Letter 2 — for B'], [[
  '**COMPLAINT.** _What happened: the order was taken by telephone on Sunday and delivered on Tuesday. The complaint: we were told on Tuesday afternoon, by our own customer, that the order was short. Nobody from your company telephoned. What we are asking for: the two lines, and a note of what will change._  **B says:** I took that order.',
  '**COMPLAINT.** _What happened: the engineer attended on the 14th and the machine failed again on the 16th. The complaint: we were charged a second call-out for the same fault. What we are asking for: the call-out credited, and your policy on repeat visits in writing._  **A says:** I signed that invoice.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the thing asked for that is **not** a remedy. That is what the letter is really about.'));
out.push(PHRASE_CARD(['Read me the paragraph headed…', 'You are in the evidence.', 'The complaint is…, not…', 'Money is the small half.', 'not a remedy', 'somebody who intends to keep buying']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a complaint letter. Read it silently. Then explain to **two** colleagues what it is really about, who is in the evidence, and what is being asked for that is not money.'));
out.push(table(['Who I told', 'What they thought it said', 'What it is really asking for'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the letter you mediated. This is the **ninth** unit of Book 2, and the unwritten thing is the oldest one in this strand: a complaint says what it is about in the paragraph headed "the complaint", and almost nobody reads that far before deciding it is about them.'));
out.push(p('_It\'s a ______. They thought it was about ______. The paragraph headed ______ says ______. What it really asks for is ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _credit note · goodwill gesture · batch number · tolerance · specification · consequential_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Two of the twenty boxes were crushed._   **A** Twenty boxes were damaged. **B** Two boxes out of twenty were damaged. **C** Two boxes arrived.',
  '**2**  _Goods must be checked against the order before the driver leaves._   **A** Check against the delivery note. **B** Check after he has gone. **C** Check against what you ordered, while he waits.',
  '**3**  _Damaged goods must not be thrown away for fourteen days._   **A** Keep them for two weeks. **B** Throw them away after fourteen days have passed. **C** Return them within fourteen days.',
  '**4**  _The guarantee runs from the date of fitting._   **A** From when it was bought. **B** From when it was installed. **C** From when it broke.',
  '**5**  _I am very sorry about that; it should not have happened._   **A** An apology for the thing. **B** An apology for the customer\'s feelings. **C** A refusal.',
  '**6**  _A credit note, not a refund._   **A** Money back. **B** Money off a future order. **C** Nothing.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a message about a complaint, the three points are usually: **what is wrong, with a number** · **what you want** · **by when**.',
  '⚠ The proportion counts as the number: _two of twenty_. It is two words and it is what makes the complaint unanswerable.',
  '⚠ Do not apologise in a complaint and do not explain why you are complaining. Twenty-five words is the facts, the ask and the date.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** Something you received at work is damaged. Write a message to the supplier (25 words or more). Say **what is wrong, with a number**, **what you want**, and **by when**.'));
out.push(p('Dear ______________, ______________ of the ______________ ______________ were ______________. We would like ______________, or ______________. Could you tell us which by ______________? ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A proportion — how many of how many', ''],
  ['What is wanted', ''],
  ['A date', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a complaint your own workplace received (60 to 100 words). Say what it said it was about, what it was really about, how it was answered, and whether that customer is still a customer.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then read your workplace\'s last complaint again and write the paragraph headed "the complaint" that it did not have (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 21 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Two of the twenty boxes ___ crushed.   a) was   b) were   c) are being',
  '2  I would like ___ a complaint.   a) make   b) to make   c) making',
  '3  I am very sorry ___ that.   a) about   b) for   c) of',
  '4  We ___ send a replacement tomorrow.   a) will   b) are   c) would to',
  '5  Goods ___ checked on arrival.   a) must   b) must be   c) must to be',
  '6  Damaged goods must not ___ away.   a) thrown   b) be thrown   c) be throw',
  '7  Is it ___ guarantee?   a) in   b) on   c) under',
  '8  The guarantee runs ___ the date of fitting.   a) since   b) from   c) of',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 21.15** Listen to a complaint on the telephone. Complete the note.   How many, of how many: ______   Where on the pallet: ______   The real complaint: ______   What they want: ______   By when: ______'));
out.push(dlg('Track 21.15  Audio script (read after the check)', [
  ['Nour', 'I would like to make a complaint, and I would like to be quick about it. Two of the twenty boxes arrived crushed, both on the bottom layer at the same corner.'],
  ['Nour', 'But I am not complaining about the two boxes. The wrap is stretched over the dent, so the corner was crushed before it was wrapped, and nobody telephoned us.'],
  ['Nour', 'I would like two replacement boxes or a credit note, your choice, by Thursday. And one sentence about what will be said to whoever wrapped it.'],
]));
out.push(p('**C  Writing.** Write a reply to a complaint (35+ words): apologise first, say what you have **already** done, say what happened, and say what you have changed.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 21)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ report damage with the proportion, the position and what it suggests',
  '☐ write the fault on a delivery note before signing it',
  '☐ make a complaint politely, and name the complaint under the complaint',
  '☐ apologise for my company without blaming a colleague',
  '☐ promise the explanation and give it, even when it is us',
  '☐ offer a remedy for the goods **and** one for the lost time, with a length and a reason',
  '☐ write a rule with who, against what, before when — and its hard case',
  '☐ ask the four guarantee questions, and know which date it runs from',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 21 · Student\'s Book');
