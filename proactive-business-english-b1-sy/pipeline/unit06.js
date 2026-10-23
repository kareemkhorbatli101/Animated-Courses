// Proactive Business English B1 · Syria Edition · Book 1 · Unit 6 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'authority matrix · schedule of authorities · authorisation · mandate · dual control · discretion · ceiling · countersign · single signature · joint signature · entitlement · liability · indemnity · undertaking · statutory · regulatory · by-law · standing order · terms of business · clause · sub-clause · proviso · binding · non-binding · exercise discretion · escalation route · authorised signatory · power of attorney · waive · enforce';
const BACK_AT_B1 = 'sign-off · in charge of · escalate';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 6  Obligation, Authority and Permission'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**6.1**  tell a company rule apart from the law',
  '**6.2**  distinguish what you *don\'t have to* do from what you *mustn\'t*',
  '**6.3**  say what you are authorised to sign, in figures',
  '**6.4**  say what you may not decide alone, and who must be asked',
  '**6.5**  ask upwards for a limit to be changed',
  '**6.6**  enforce a rule you did not write',
  '**6.7**  Review & Mediate: what do these terms of business actually require?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Why this unit is about figures and not about politeness', [
  'Most courses teach *must*, *have to* and *mustn\'t* as grammar and stop. At work the words are almost never the problem: **the figure is.** *I can authorise small amounts* is a sentence in perfect English that has caused more trouble at Sham Trading than any mistake in this book, because two people had two different ideas of small and neither was wrong.',
  '⚠ So every cycle in this unit ends in a **number or a name**. What you are authorised to sign, up to what figure, and who must be asked above it. If a cycle in this unit has not produced a figure or a name, it has not been done.',
  '**And one uncomfortable cycle.** 6.6 is about enforcing a rule you did not write and may not agree with — which is most of what a coordinator does, and which nobody teaches. ⚠ It has a right answer and it is not *pretend you agree*.',
], C.lyellow, C.orange));

// ======================= CYCLE 6.1 =======================
out.push(pb());
out.push(h2('6.1  Company rule and law'));
out.push(p('**Function:** distinguishing kinds of obligation   ·   **Grammar:** *must* and *have to*, distinguished   ·   **Pronunciation:** the stress that separates the two'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three rules at your work. For each, say whether it is the company\'s or the law\'s. How sure are you?'));
out.push(p('**b**  Which is which? _We must count the load at the gate. · We have to keep the invoices for ten years._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar ask Nour to sort?   **A** the rules into the company\'s and the law\'s   **B** the rules by importance   **C** the rules by date'));
out.push(p('**b**  Listen again. **1** Why does the difference matter when somebody wants a rule changed? **2** What does Mr Attar say about the one Nour gets wrong?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.1  "Ours, or theirs?"', [
  ['Mr Attar', 'Nine rules on your wall. Sort them: which are yours and which are the law\'s?'],
  ['Nour', 'The gate count is ours. The fourteen-day price is ours. Keeping the invoices is the law. The registration certificate on the wall is the law.'],
  ['Mr Attar', 'And the two signatures over 500,000?'],
  ['Nour', 'Ours. Mr Ayoub\'s father\'s.'],
  ['Mr Attar', 'Good. And the stock count?'],
  ['Nour', 'Ours — quarterly, because we always have.'],
  ['Mr Attar', 'That one is both, and that is the interesting case. **You** have to count the stock before the year end because of the accounts. The **quarterly** part is yours.'],
  ['Nour', 'So half a rule.'],
  ['Mr Attar', 'Most rules are. And here is why the sorting matters: next month somebody will come to you and ask for one of these nine to be relaxed. If it is yours, that is a conversation. If it is the law\'s, it is not a conversation and you should not let them think it is, because the kindest thing you can say is *I cannot*.'],
  ['Nour', 'And if I do not know which it is?'],
  ['Mr Attar', 'Then say so and find out before you answer. ⚠ Saying *that is the law* about a rule of your own is the worst of the three outcomes — it works once and then somebody checks, and after that nothing you say about any rule is believed.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_Must_ and _have to_ — the difference the textbooks mention and work depends on**',
  table(['Form', 'Where the obligation comes from', 'Example'], [
    ['**must**', '⚠ **us** — the company, or the speaker', 'We **must** count the load at the gate.'],
    ['**have to / has to**', '⚠ **outside** — the law, the bank, the customer', 'We **have to** keep the invoices for ten years.'],
    ['**are required to**', 'outside, in writing', 'We **are required to** display the registration.'],
    ['both at once', 'half a rule', 'We **have to** count before the year end; **quarterly** is ours.'],
    ['⚠ the honest unknown', 'you do not know yet', 'I do not know which that is. I will find out.'],
  ], [1.3, 1.8, 2.1]),
  '⚠ **The difference matters when somebody asks for a rule to be relaxed.** If the rule is yours, that is a conversation. If it is the law\'s, it is not, and the kindest sentence is *I cannot* rather than *I would rather not*.',
  '⚠ **Most rules are half a rule.** The obligation is outside and the **detail** is yours: the law says count before the year end, and *quarterly* is a decision somebody here made. Say which half is which and the conversation becomes possible.',
  '⚠ **Never claim the law for a rule of your own.** It works once. After that nothing you say about any rule is believed, including the true things.',
  '⚠ In speech *have to* is far commoner than *must* for both meanings, and that is fine — but when the distinction is the point, use the pair deliberately.',
  '**Practise:** Ours, theirs, or half? 1 the gate count 2 keeping invoices ten years 3 two signatures over 500,000 4 the quarterly stock count 5 displaying the registration certificate',
  '**Useful phrases:**  We must…  ·  We have to…  ·  We are required to…  ·  that half is ours  ·  I do not know which that is — I will find out.',
  '**Pronunciation – the stress that separates them.** 🔊 **Track 6.2** Listen: _we **must** count it — that one is ours_ // _we **have to** keep them — that one is not_. When the distinction is the information, both carry a strong stress. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A sorts the rules; B tests the sorting and finds the half-rule. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________ rules on your wall. Which are yours and which are the law\'s?'],
  ['A', '__________ is ours. __________ is ours. __________ is the law.'],
  ['B', 'And __________?'],
  ['A', 'Ours — because we always have.'],
  ['B', 'That one is both. You **have to** __________; the __________ part is yours.'],
  ['A', 'So half a rule.'],
  ['B', 'Most rules are. ⚠ And if somebody asks for it to be relaxed, which half can you discuss?'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — the delivery rules', 'Role card 2 — the cash rules'], [[
  'Loads are sheeted; weights are not exceeded; drivers break after four hours; the lorry is washed on Fridays. Three are the law and one is the company\'s, and most people guess the wrong one as the company\'s.',
  'Takings are banked daily; a float of 50,000 is kept; receipts are issued for everything; cash is never sent by a driver. Only one of these four is the law, and it is the receipts.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the sorting for the class – **without the book**.'));
out.push(p('**Listener task:** write the rules in two columns and ring every half-rule. Then say which column you would want to be sure about before answering a customer.'));
out.push(PHRASE_CARD(['We must…', 'We have to…', 'We are required to…', 'that half is ours', 'I do not know which.', 'I cannot — it is not ours']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **six** rules at your work and sort them. Mark each **O** (ours), **L** (the law\'s) or **H** (half), and say how you know.'));
out.push(table(['The rule', 'O / L / H', 'How I know'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 0.8, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of six rules, _______ are ours, _______ are the law\'s and _______ are half. The one I was wrong about was _______._'));
out.push(p('**Listener task:** count how many rules the room could not place. In most classes it is about a third, and they are usually the rules people enforce most confidently.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we must to keep the invoices_ and _we have must count the load_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sorted list, and answer the questions.'));
out.push(box(null, [
  '**THE NINE RULES ON OUR WALL, SORTED. Prepared for Z. Attar, October.**',
  table(['The rule', 'Whose', 'What that means in practice'], [
    ['Invoices kept ten years', '**Law**', 'not negotiable; do not discuss it with anybody'],
    ['Registration displayed at both sites', '**Law**', 'the Baghdad Street copy was late and is now up'],
    ['Receipt issued for every sale', '**Law**', 'the one cash rule that is not ours'],
    ['Stock counted before the year end', '**Half** — law', 'the timing is required; *quarterly* is ours'],
    ['Gate count against the order, signed', '**Ours**', 'September 2024; can be discussed, and has been'],
    ['Price held fourteen days in writing', '**Ours**', 'April 2025; the fourteen is arbitrary and we know it'],
    ['One price list, printed Fridays', '**Ours**', 'October 2025'],
    ['Two signatures over 500,000', '**Ours**', 'undated; nobody can justify the figure'],
    ['Cash never sent with a driver', '**Ours**', 'and the one we would never relax'],
  ], [2.1, 0.9, 2.5]),
  '⚠ **What we got wrong when we first wrote this list.** We had the quarterly stock count down as the law and the receipts as ours, which is both of them backwards. ⚠ We had been telling customers for years that we *had to* count quarterly, and that was not true and we did not know it was not true.',
  '**Which of ours we would relax, if asked, and which we would not.** The fourteen days and the Friday printing are both arbitrary and we would discuss either. The gate count and the cash rule we would not, and the reason is the same for both: they are the two that exist because something actually went wrong.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two rules had the company got backwards, and what had they been telling customers?'));
out.push(item('2', 'Which of their own rules would they discuss, and which not?'));
out.push(item('3', 'What do the two they would not relax have in common?'));
out.push(box('Writer\'s box', [
  '**A sorted rule list — a three-column table:** the rule → **whose** → what that means in practice. Then two paragraphs: what you got wrong, and which of yours you would relax.',
  '**The third column is the one that earns the page.** *Not negotiable; do not discuss it with anybody* tells a reader what to **do**; *Law* on its own tells them only what you believe.',
  '**Say what you got wrong, and what you had been telling people.** *We had been telling customers for years that we had to count quarterly, and that was not true.* ⚠ This is the hardest sentence in the unit to write and the one that makes the rest of the list credible.',
  '⚠ **Separate the rules you would relax from the rules you would not, and give the reason.** *They are the two that exist because something actually went wrong.* A reader who knows which of your rules are arbitrary will stop testing the others.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Sort the rules at your own workplace and write the page (**50 words or more**). Use the frame.'));
out.push(p('**THE RULES ON OUR WALL, SORTED.**   ______________ | **Law** | ______________   ______________ | **Law** | ______________   ______________ | **Half** | the ______________ is required; the ______________ is ours   ______________ | **Ours** | ______________   ______________ | **Ours** | ______________   ⚠ **What we got wrong.** We had ______________ down as ______________, which is backwards. We had been telling ______________ that ______________, and that was not true.   **Which of ours we would relax.** ______________ and ______________ are arbitrary and we would discuss either. ______________ we would not, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says the third column tells the reader what to do. Yours says *important* — what should somebody actually do when a customer asks about it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody answer a customer from this page without asking you?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every rule marked ours, the law\'s, or half', ''],
  ['A third column saying what to do', ''],
  ['Something the writer had got wrong', ''],
  ['Which of their own they would relax, with the reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what they had got wrong. The class says which mistake had been repeated to a customer — that is the costly kind.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule at your work that people believe is the law and is not (**100 to 140 words**). Say what it is, who believes it, how the belief started, and what it would cost to correct it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the rule people think is the law_   ✓ _must and have to used for the right sources?_   ? _who would have to be told, and would they mind?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these beliefs are useful to the company? Several — which is the real difficulty: a company rule that everybody thinks is the law is obeyed perfectly, and correcting it has a cost.'));
out.push(box('Homework', ['Write your final text. Then sort six of your own workplace\'s rules into ours, theirs and half, and check one of them with somebody who would know (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.2 =======================
out.push(pb());
out.push(h2('6.2  What I don\'t have to do'));
out.push(p('**Function:** stating an absence of obligation   ·   **Grammar:** *don\'t have to* against *mustn\'t*   ·   **Pronunciation:** the contraction that carries the whole meaning'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name two things at your work you *don\'t have to* do, and two you *mustn\'t*. Which list was harder?'));
out.push(p('**b**  What is the difference? _You don\'t have to sign it. · You mustn\'t sign it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has gone wrong?   **A** Hala signed something she mustn\'t have signed   **B** Hala did something she didn\'t have to do   **C** nothing has gone wrong'));
out.push(p('**b**  Listen again. **1** What had Nour said, and what had Hala heard? **2** What does Nour say she should have said?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.3  "I said you didn\'t have to"', [
  ['Hala', 'You told me I did not have to get the second signature on the credit notes.'],
  ['Nour', 'Under 100,000, yes.'],
  ['Hala', 'So I have been signing them on my own for six weeks. Including the one for 240,000 on Tuesday.'],
  ['Nour', '…That one you mustn\'t.'],
  ['Hala', 'You did not say mustn\'t. You said I did not have to.'],
  ['Nour', 'About the small ones.'],
  ['Hala', 'You said *you do not have to get Nadia to sign these*, and you were holding a stack of them, and I took it to mean credit notes.'],
  ['Mr Attar', 'May I. ⚠ *You do not have to* removes a duty. *You must not* creates one. They are not stronger and weaker versions of each other — they point in opposite directions, and the gap between them is where both of you have been working for six weeks.'],
  ['Nour', 'What should I have said?'],
  ['Mr Attar', 'Two sentences instead of one. *You do not have to get a second signature below 100,000. You must not sign anything above it on your own.* ⚠ The figure, and then both halves. Either half on its own is an instruction to guess.'],
  ['Hala', 'And the 240,000?'],
  ['Mr Attar', 'Is a real finding and goes in my file, and it is not yours. You were told the half you were told.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_Don\'t have to_ and _mustn\'t_ — opposite directions, not two strengths**',
  table(['Form', 'What it does', 'Example'], [
    ['**don\'t / doesn\'t have to**', '⚠ **removes** a duty', 'You **don\'t have to** get a second signature below 100,000.'],
    ['**mustn\'t / must not**', '⚠ **creates** a prohibition', 'You **mustn\'t** sign above it on your own.'],
    ['⚠ **both, with the figure**', 'the only safe form', 'Below 100,000 you don\'t have to; above it you mustn\'t.'],
    ['**aren\'t required to**', 'formal, written', 'You **are not required to** countersign below the ceiling.'],
    ['**are not allowed to**', 'prohibition, softer register', 'You **are not allowed to** waive it yourself.'],
  ], [2, 1.5, 2.5]),
  '⚠ **They are not strong and weak versions of the same idea.** One removes a duty and the other creates a prohibition, and between them lies a space where somebody will work for six weeks doing something nobody intended.',
  '⚠ **Never give one half.** *You don\'t have to get a second signature* is an instruction to guess where the line is. **The figure, then both halves**, in two sentences: *below X you don\'t have to; above X you mustn\'t.*',
  '⚠ **The fault belongs to whoever gave the half instruction**, not to whoever acted on it. Say so out loud when it happens — it costs nothing and it is the only way the next person tells you early.',
  '⚠ ~~You don\'t must sign it~~ and ~~you haven\'t to sign it~~ are the two forms to drop.',
  '**Practise:** Give both halves with the figure. 1 a second signature 2 a written quotation 3 a gate count 4 a receipt 5 asking before giving a discount',
  '**Useful phrases:**  You don\'t have to… below…  ·  You mustn\'t… above…  ·  You are not required to…  ·  You are not allowed to…  ·  both halves, with the figure',
  '**Pronunciation – the contraction that carries the meaning.** 🔊 **Track 6.4** Listen: _you **don\'t** have to_ // _you **mustn\'t**_. ⚠ In fast speech *mustn\'t* loses its t and can sound like *mussen* — which is why the figure, not the modal, is what makes an instruction safe. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has given a half instruction; B has acted on it. Find the figure and say both halves. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'You told me I did not have to __________.'],
  ['A', 'Under __________, yes.'],
  ['B', 'So I have been __________ for __________. Including __________.'],
  ['A', '…That one you mustn\'t.'],
  ['B', 'You did not say mustn\'t. You said I did not have to.'],
  ['A', 'About the small ones.'],
  ['B', 'You said __________, and I took it to mean __________.'],
  ['A', 'What I should have said is: below __________ you do not have to; above __________ you must not.'],
]));
out.push(table(['Role card 1 — the discount', 'Role card 2 — the written quotation'], [[
  '"You do not have to ask me about discounts." Meant: up to 5 per cent on the counter. Heard: discounts. Six weeks later a trade customer has 15 per cent on a standing order.',
  '"You do not have to put it in writing for regulars." Meant: a telephone price for same-day collection. Heard: regulars. Now a regular is holding a verbal price from August and insisting on it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two halves with the figure, then write the half instruction that caused it. ⚠ Keep both — the pair is the lesson.'));
out.push(PHRASE_CARD(['You don\'t have to… below…', 'You mustn\'t… above…', 'not required to', 'not allowed to', 'both halves', 'the figure first']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **four** half instructions you have given or been given. Write the figure and both halves for each.'));
out.push(table(['The half instruction, as it was said', 'The figure', 'Both halves, properly'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 0.7, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said _______. It was heard as _______. What I should have said is: below _______ you do not have to; above _______ you must not._'));
out.push(p('**Listener task:** count the half instructions in the room. Then count how many had a figure in them. The second number is usually very small.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _you don\'t must sign it_ and _you haven\'t to ask me_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the clarification note, and answer the questions.'));
out.push(box(null, [
  '**CREDIT NOTES — what you do not have to do, and what you must not. Replaces what I told you in September.**',
  '**Hala —** what I said in September was half an instruction and the six weeks since are my fault and not yours. Here is the whole of it.',
  '**Below 100,000** you **do not have to** get a second signature. Raise the credit note, sign it yourself, and put it in the book. Nobody needs to see it before it goes.',
  '**At 100,000 and above** you **must not** sign it alone. Nadia or I countersign, and if neither of us is here it waits — ⚠ **and a credit note waiting is a sentence you may say to the customer**: *it is approved and it goes tomorrow.*',
  '**The one on Tuesday for 240,000** stands. It was correctly calculated, the customer was owed it, and I am not reversing a correct credit to make a procedure look tidy. It is recorded as signed outside the limit, with the reason, and Mr Attar has it.',
  '⚠ **And one thing I am changing because of this.** The limit is going from 100,000 to 250,000. ⚠ Not to cover Tuesday — Tuesday is recorded and stays recorded. **The six weeks showed that you were signing credit notes up to about 250,000 and every one of them was right.** The figure was set when the counter took a tenth of what it takes now, and I had never looked at it.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Whose fault does the note say the six weeks were?'));
out.push(item('2', 'What happens to the credit note for 240,000, and why?'));
out.push(item('3', 'Why is the limit being raised, and what reason does the note explicitly rule out?'));
out.push(box('Writer\'s box', [
  '**A clarification note — four parts:** whose fault the confusion was → **below X you don\'t have to** → **at X and above you must not** → what happens to the thing already done.',
  '**Take the fault for a half instruction in the first line.** *What I said in September was half an instruction and the six weeks since are my fault and not yours.* ⚠ It is one sentence and it buys you a colleague who tells you the next thing early.',
  '**Do not reverse something correct to make a procedure look tidy.** *It was correctly calculated, the customer was owed it, and I am not reversing a correct credit.* Record it as outside the limit, with the reason, and leave it.',
  '⚠ **If you change the limit, say what the change is not for.** *Not to cover Tuesday — Tuesday is recorded and stays recorded.* A limit raised in the same week as a breach looks like a cover-up to every reader, and the only defence is to name the suspicion yourself.',
  '⚠ **Give the evidence for the new figure.** *The six weeks showed you were signing up to about 250,000 and every one was right.* Six weeks of accidental evidence is better evidence than anybody normally has, and it should be used rather than hidden.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a clarification note for a half instruction at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — what you do not have to do, and what you must not.**   What I said in ______________ was half an instruction and ______________ is my fault.   **Below ______________** you **do not have to** ______________. ______________.   **At ______________ and above** you **must not** ______________. ______________ countersigns, and if ______________ it waits.   **The one on ______________** stands, because ______________. It is recorded as ______________.   ⚠ **And one thing I am changing.** The limit is going from ______________ to ______________. ⚠ Not because of ______________. ______________ showed that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say what the change is not for. Yours raises the limit in the same paragraph as the breach and does not — how will a reader tell this is not a cover-up?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader act on this tomorrow without asking anything?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The fault taken in the first line', ''],
  ['Both halves, with the figure', ''],
  ['What happens to the thing already done', ''],
  ['If a limit changes, what the change is not for', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first line. The class says which one they would want to receive — and the answer tells you what taking a fault is worth.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were given half an instruction (**100 to 140 words**). Say what you were told, what you did, how long it went on, and who found out first.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _how long it went on_   ✓ _don\'t have to and mustn\'t used in opposite directions?_   ? _was there ever a figure, and who should have given it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the person who gave the half instruction ever learn what happened? Often nobody tells them — which is why the first line of the note in stage 5 matters more than the figures.'));
out.push(box('Homework', ['Write your final text. Then write both halves, with the figure, for one thing you are responsible for, and give it to the person who has to act on it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.3 =======================
out.push(pb());
out.push(h2('6.3  What I am authorised to sign'));
out.push(p('**Function:** stating your own authority   ·   **Grammar:** *am authorised to · up to · subject to*   ·   **Pronunciation:** reading a figure aloud so it cannot be misheard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What are you authorised to sign, and up to what figure? Say it in one sentence with a number in it.'));
out.push(p('**b**  Which is useful to a reader? _I can authorise small amounts. · I am authorised to sign credit notes up to 250,000 and purchase orders up to 500,000._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say about the phrase *small amounts*?   **A** it is too informal   **B** it is not a limit   **C** it is too high'));
out.push(p('**b**  Listen again. **1** What two things does he say an authority has to have? **2** What does he say about the limit nobody can name?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.5  "Up to what?"', [
  ['Mr Attar', 'What are you authorised to sign?'],
  ['Nour', 'Credit notes, purchase orders, and small amounts generally.'],
  ['Mr Attar', 'Up to what?'],
  ['Nour', 'It has never been written down.'],
  ['Mr Attar', 'Then you are not authorised to sign anything, and neither is anybody else here, and I have to write that. An authority needs two things: **a figure** and **a thing**. *Small amounts generally* is not an authority; it is an atmosphere.'],
  ['Nour', 'In practice I sign up to about 250,000 and ask above that.'],
  ['Mr Attar', 'In practice is the right phrase and it is not an authority either. Who told you 250,000?'],
  ['Nour', 'Nobody. It is what feels right, and nobody has ever queried it.'],
  ['Mr Attar', '⚠ That is the commonest answer I get and it is worth understanding what it costs. It costs you the protection. If a payment you signed goes wrong at 240,000 and nobody wrote the limit, the question is not whether you were within it — there is no it. The question becomes your judgement.'],
  ['Nour', 'And with a written limit?'],
  ['Mr Attar', 'With a written limit the question is arithmetic. **A written authority is not a restriction on you; it is the only thing that can defend you.** ⚠ The people who resist writing their limits down are almost always the people the limits would protect.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Stating an authority — a figure and a thing**',
  table(['Form', 'Example'], [
    ['**am authorised to** + verb', 'I **am authorised to** sign credit notes.'],
    ['⚠ **up to** + figure', '…**up to** 250,000.'],
    ['**subject to**', '**subject to** a second signature above that.'],
    ['**in respect of** (formal)', 'an authority **in respect of** purchase orders only'],
    ['⚠ what is not an authority', '*small amounts* · *in practice* · *what feels right*'],
  ], [1.9, 2.6]),
  '⚠ **An authority needs a figure and a thing.** *I am authorised to sign credit notes up to 250,000* is an authority. *I can authorise small amounts* is an atmosphere, and it is the sentence most people give when asked.',
  '⚠ **A written limit is not a restriction; it is a defence.** Without one, a payment that goes wrong at 240,000 is a question about **your judgement**. With one, it is arithmetic. ⚠ The people who resist writing their limits down are usually the people the limits would protect.',
  '⚠ **_In practice_ is an honest phrase and not an authority.** Use it to describe what happens, then go and get the figure written.',
  '⚠ Name the **thing** narrowly. An authority for *purchase orders* is not an authority for *payments*, and the difference matters the first time a supplier sends a pro-forma.',
  '**Practise:** State the authority with a figure and a thing, and what it is subject to. 1 credit notes 2 purchase orders 3 a discount 4 a refund 5 taking on a temporary driver',
  '**Useful phrases:**  I am authorised to…  ·  up to…  ·  subject to…  ·  in respect of…  ·  In practice I…, but it is not written.',
  '**Pronunciation – a figure read so it cannot be misheard.** 🔊 **Track 6.6** Listen: _two hundred and fifty thousand — two five zero_. ⚠ Every figure that carries an authority is said twice, once in words and once in digits. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states an authority without a figure; B presses for one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'What are you authorised to __________?'],
  ['A', '__________, and small amounts generally.'],
  ['B', 'Up to what?'],
  ['A', 'It has never been written down.'],
  ['B', 'Then you are not authorised to __________ anything. An authority needs a figure and a thing.'],
  ['A', 'In practice I __________ up to about __________ and ask above that.'],
  ['B', 'Who told you __________?'],
  ['A', 'Nobody. It is what feels right.'],
  ['B', '⚠ Then the limit cannot protect you, because there is no limit to be within.'],
]));
out.push(table(['Role card 1 — the warehouse', 'Role card 2 — the counter'], [[
  'Abu Yasser orders packaging, pallets and small tools and has never been given a figure. In practice he stops at about 40,000 and asks. Twice he has gone to 150,000 for an urgent repair and nobody said anything, which he reads as approval and is not.',
  'Hala gives discounts and takes returns and has a figure for credit notes but none for discounts. The discount is the larger exposure and the one nobody has thought about, because it does not produce a document.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the authority as a figure and a thing. ⚠ Then write the exposure that has no document — most workplaces have one.'));
out.push(PHRASE_CARD(['I am authorised to…', 'up to…', 'subject to…', 'in respect of…', 'not written down', 'a figure and a thing']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own authority as **five** lines, each with a thing and a figure. Mark each **W** (written) or **P** (in practice only).'));
out.push(table(['I am authorised to…', 'Up to', 'Subject to', 'W / P'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 0.8, 1.6, 0.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am authorised to _______ up to _______, subject to _______. Of my five lines, _______ are written and _______ are in practice only._'));
out.push(p('**Listener task:** count the room\'s written lines against its in-practice lines. Then ask who in the room could be asked about a figure tomorrow and have nothing to point at.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am authorise to sign_ and _I am authorised for sign credit notes_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the authority matrix, and answer the questions.'));
out.push(box(null, [
  '**AUTHORITY MATRIX — Sham Trading, as at 1 November. ⚠ The first one we have ever had.**',
  table(['What', 'Nour', 'Nadia', 'Hala', 'Abu Yasser', 'Above that'], [
    ['Credit note', 'to 250,000', 'to 250,000', 'to 250,000', '—', 'Mr Ayoub'],
    ['Purchase order', 'to 500,000', 'to 500,000', '—', '**to 150,000**', 'Mr Ayoub'],
    ['Payment out', '—', 'to 500,000', '—', '—', 'two signatures'],
    ['Discount, counter', 'to 10%', '—', '**to 5%**', '—', 'Nour'],
    ['Discount, trade', 'to 5%', '—', '—', '—', 'Mr Ayoub'],
    ['Write off stock', '—', 'to 50,000', '—', 'to 50,000', 'Mr Ayoub'],
  ], [1.4, 0.9, 0.9, 0.9, 1, 1]),
  '**Three things to notice, which we are putting in writing so that nobody has to work them out.**',
  '**1 · Abu Yasser\'s 150,000 is new and it is not a promotion.** He has been ordering at about that figure for eleven years and nobody wrote it down. ⚠ **We are recording what already happens**, which is a different act from granting an authority, and we would rather say so than let him think he has been given something.',
  '**2 · The counter discount is the only line here with a percentage and not a figure**, and that is a weakness we have not solved. Five per cent of a small sale is nothing and five per cent of a pallet is more than Hala\'s credit note limit. ⚠ We know, and we have left it as a percentage because nobody could agree on the figure.',
  '**3 · Nour cannot sign a payment out at all**, which looks odd next to the rest of the row and is deliberate: the person who raises the paperwork does not release the money. ⚠ That is the one line in this matrix that exists for a reason somebody can state.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the matrix say about Abu Yasser\'s 150,000, and why is that distinction made?'));
out.push(item('2', 'What is the problem with the counter discount line, and what have they done about it?'));
out.push(item('3', 'Why can Nour not sign a payment out?'));
out.push(box('Writer\'s box', [
  '**An authority matrix — one row per thing, one column per person, and a last column: _above that_.** Then numbered notes on the lines that need them.',
  '**The _above that_ column is what makes it a matrix and not a list.** Every row must say who is asked when the figure is exceeded, or the row stops at the limit and leaves the reader nowhere.',
  '**Distinguish recording what happens from granting an authority.** *We are recording what already happens, which is a different act.* ⚠ Say it plainly — a person who thinks they have been promoted by a table will behave differently from one who knows they have been written down.',
  '⚠ **Name the weakness you did not solve.** *We have left it as a percentage because nobody could agree on the figure.* A matrix with an admitted soft line is believed; one with no soft line has not been looked at properly.',
  '⚠ **Explain the row that looks odd.** *The person who raises the paperwork does not release the money.* One line of reasoning prevents somebody helpfully fixing it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Draw the authority matrix for your own workplace (**50 words or more**). Use the frame.'));
out.push(p('**AUTHORITY MATRIX — ______________, as at ______________.**   What | ______________ | ______________ | ______________ | **Above that**   ______________ | to ______________ | to ______________ | — | ______________   ______________ | — | to ______________ | to ______________ | ______________   ______________ | to ______________ % | — | — | ______________   **1 ·** ______________\'s figure is new and it is not a promotion: ______________.   **2 ·** The weakness we have not solved is ______________, and we have left it because ______________.   **3 ·** ______________ cannot ______________ at all, and that is deliberate: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says every row says who is asked above the figure. Your third row stops at the limit — who does the reader go to?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a new person use this on their first morning?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A figure and a thing in every cell', ''],
  ['An **above that** column, filled on every row', ''],
  ['Recording distinguished from granting', ''],
  ['One admitted weakness and one explained oddity', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their admitted weakness. The class says which matrix they would trust — and it is the one with a weakness in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a figure you work to that nobody has ever written down (**100 to 140 words**). Say what it is, how you arrived at it, whether anybody has ever queried it, and what would happen if something went wrong just below it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the unwritten figure_   ✓ _am authorised to · up to · subject to?_   ? _who could write it down, and what is stopping them?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many has nobody ever queried the figure? Almost all — and that is not reassurance: an unqueried figure is an unprotected one, and the query comes on the day something goes wrong.'));
out.push(box('Homework', ['Write your final text. Then write your own authority as five lines with figures, mark each written or in-practice, and ask for one of the in-practice lines to be confirmed (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.4 =======================
out.push(pb());
out.push(h2('6.4  What I may not decide alone'));
out.push(p('**Function:** stating the limits of your own authority   ·   **Grammar:** *am not allowed to · may not · it is not mine to*   ·   **Pronunciation:** the fall that makes a refusal final'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name two decisions at your work that are not yours, and say who they belong to.'));
out.push(p('**b**  Which is the most useful to a customer? _I am not sure. · I will have to check. · That is not mine to decide — it is Mr Ayoub\'s, and I will have an answer by Thursday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the customer want?   **A** a discount above Nour\'s limit   **B** a refund   **C** a longer price hold'));
out.push(p('**b**  Listen again. **1** What three things does Nour give him instead of a yes or a no? **2** What does she refuse to do, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.7  "That one is not mine"', [
  ['Mr Tarabishi', 'Eight per cent on the trade order. You gave me five last time.'],
  ['Nour', 'Five is my limit on trade. Eight is not mine to decide — it is Mr Ayoub\'s.'],
  ['Mr Tarabishi', 'You said that last time and then it was five.'],
  ['Nour', 'Last time you asked for five, which was mine. This time you have asked for eight, which is not, and I am not going to pretend the line has moved because you have asked twice.'],
  ['Mr Tarabishi', 'So you cannot help me.'],
  ['Nour', 'I can do three things. I can put eight per cent to him with the figures — your volume this year and the two orders you brought us in August. I can tell you he has said yes to eight once that I know of, in 2024, for a bigger order than this. And I can give you five today in writing, so that if he says no you have not lost two weeks.'],
  ['Mr Tarabishi', 'And if he says no?'],
  ['Nour', 'Then it is five, and I will tell you why he said no, which is more than you would get from most people.'],
  ['Mr Tarabishi', 'You could just give me the eight and sort it out afterwards.'],
  ['Nour', 'I could, and he would honour it, and that is exactly why I am not going to. ⚠ The next person who asks me for eight would get it too, and then five would not mean anything and neither would I.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying a decision is not yours — and what to give instead**',
  table(['Form', 'Example'], [
    ['**is not mine to** + verb', 'Eight **is not mine to** decide.'],
    ['**am not allowed to**', 'I **am not allowed to** go above five on trade.'],
    ['**may not** (formal)', 'I **may not** waive the clause myself.'],
    ['⚠ **the three things instead**', 'I can **put it** to him · **tell you** what he has done before · **give you** what is mine, today, in writing.'],
    ['⚠ what not to say', '*I am not sure* · *I will have to check* · *I will see what I can do*'],
  ], [1.9, 3]),
  '⚠ **Name the owner, not your uncertainty.** *I am not sure* and *I will have to check* make a customer think the line is soft. *That is not mine to decide — it is Mr Ayoub\'s* is final and is not a refusal of help.',
  '⚠ **Then give three things**: put it up with the figures, say what has been decided before in similar cases, and **give what is yours today, in writing**, so a no upstairs costs the customer nothing.',
  '⚠ **Do not move the line because somebody has asked twice.** *I am not going to pretend the line has moved because you have asked twice* — said once, plainly, it ends the testing for a year.',
  '⚠ **The strongest reason for not exceeding your authority is not obedience.** It is that the next person would get the same, and then the limit means nothing and neither do you.',
  '**Practise:** Say it is not yours, name the owner, and give the three things. 1 a discount above your limit 2 a longer price hold 3 payment in sixty days 4 a free delivery to Aleppo 5 taking back goods made to order',
  '**Useful phrases:**  That is not mine to decide.  ·  It is …\'s.  ·  I can put it to him with the figures.  ·  He has said yes once, in…  ·  I can give you … today, in writing.',
  '**Pronunciation – the fall that makes a refusal final.** 🔊 **Track 6.8** Listen: _that one is not **mine**_ ↘ // _I am not **sure**_ ↗. ⚠ The second sounds negotiable because the voice rises, and a customer hears the tune before the words. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for something above B\'s limit; B names the owner and gives three things. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. You gave me __________ last time.'],
  ['B', '__________ is my limit. __________ is not mine to decide — it is __________\'s.'],
  ['A', 'So you cannot help me.'],
  ['B', 'I can do three things. I can put __________ to __________ with the figures — __________. I can tell you __________. And I can give you __________ today in writing, so that if __________ you have not lost __________.'],
  ['A', 'You could just give me __________ and sort it out afterwards.'],
  ['B', 'I could, and that is exactly why I am not going to. ⚠ __________.'],
]));
out.push(table(['Role card 1 — sixty days', 'Role card 2 — goods made to order'], [[
  'A trade customer wants sixty days instead of thirty. B\'s limit is thirty. The three things: put it up with the payment history, say that sixty was given to one customer in 2023 who then failed, and offer thirty with a two-week grace in writing.',
  'A customer wants to return shelving cut to his measurements. B is not allowed to take back made-to-order goods. The three things: put it up, say that it has been done once as a goodwill matter and recorded as such, and offer today to re-cut at cost.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the owner and the three things. ⚠ Then mark whether the third thing — what was given today in writing — was actually given. It is the one most often dropped.'));
out.push(PHRASE_CARD(['That is not mine to decide.', 'It is …\'s.', 'I can put it to him.', 'He has said yes once, in…', 'I can give you … today.', 'not because you asked twice']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things customers or colleagues ask you for that are above your authority. For each: the owner, and the three things you can give.'));
out.push(table(['What they ask for', 'Whose decision', 'The three things I can give'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _When they ask for _______, it is _______\'s. I can put it up with _______, tell them _______, and give them _______ today in writing._'));
out.push(p('**Listener task:** count how many in the room have ever exceeded their authority to avoid saying no. Then ask what it cost the next time somebody asked.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is not mine for decide_ and _I am not allowed go above five_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**To Mr Fouad Tarabishi. 4 November. Your order 1142 — the discount.**',
  'Dear Mr Tarabishi,',
  'Five per cent is confirmed in writing on order 1142 and holds for fourteen days whatever else happens. ⚠ **I am giving you that now so that the rest of this letter costs you nothing.**',
  'Eight per cent is not mine to agree. It is Mr Ayoub\'s, and I have put it to him today with three figures: your volume this year, which is up about a fifth; the two customers you brought us in August, both of whom have ordered since; and the margin on this particular order, which is narrower than the order you compared it with.',
  'I should tell you what I told him, because you will hear it from him anyway. ⚠ **I recommended seven and not eight.** My reason is the margin on this order and nothing to do with you. You are entitled to know that the person putting your case did not put all of it.',
  'He is in Aleppo until Wednesday and will decide on Thursday. If the answer is no, I will tell you his reason rather than *he said no*.',
  '⚠ One thing I will not do, because you asked. I will not put the eight through now and sort it out afterwards. He would honour it, and the next person who asked would get eight as well, and within a month five would not mean anything — which would cost you more than three per cent on one order, because the written five is only worth having while it is believed.',
  'Yours sincerely, **Nour Mansour**, Administration Coordinator',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does Nour give in the first paragraph, and why does she say she is giving it there?'));
out.push(item('2', 'What does she tell the customer about her own recommendation, and why?'));
out.push(item('3', 'What reason does she give for refusing to put the eight through now?'));
out.push(box('Writer\'s box', [
  '**A letter about a decision that is not yours — five parts:** what you can give, **given now, in writing** → whose the decision is and what you put up → ⚠ **what you recommended, including when it was less than they asked** → when the answer comes → what you will not do, and why.',
  '**Give what is yours in the first paragraph.** *I am giving you that now so that the rest of this letter costs you nothing.* A letter that makes somebody wait for everything is a letter that has given them nothing.',
  '⚠ **Say what you recommended, even when it was less than they asked for.** *I recommended seven and not eight. My reason is the margin and nothing to do with you.* They will hear it anyway; from you it is candour and from anybody else it is a discovery.',
  '**Promise the reason and not just the answer.** *I will tell you his reason rather than he said no.*',
  '⚠ **Explain the refusal in the reader\'s interest, not yours.** *The written five is only worth having while it is believed.* A refusal justified by the rule invites an argument with the rule; a refusal justified by what the reader would lose ends it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter for a request above your own authority (**50 words or more**). Use the frame.'));
out.push(p('**To ______________. ______________. Your ______________.**   ______________ is confirmed in writing and holds for ______________. ⚠ I am giving you that now so that ______________.   ______________ is not mine to agree. It is ______________\'s, and I have put it with ______________, ______________ and ______________.   ⚠ I should tell you what I told ______________: I recommended ______________. My reason is ______________ and nothing to do with you.   ______________ will decide on ______________. If the answer is no, I will tell you ______________.   ⚠ One thing I will not do: ______________. Because ______________, and that would cost you ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says explain the refusal in the reader\'s interest. Yours says *it is against company policy* — what does the reader lose if you do it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **has the reader been given anything they can use today?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What is yours, given in the first paragraph, in writing', ''],
  ['The owner named, and what was put up', ''],
  ['Your own recommendation, even if it was less', ''],
  ['The refusal explained in the reader\'s interest', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their recommendation paragraph. The class says whether they would rather have been told — and then whether they would have written it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were asked to exceed your authority (**100 to 140 words**). Say who asked, what they offered or implied, what you did, and what you think now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what was offered or implied_   ✓ _not mine to decide · not allowed to · may not?_   ? _what would have happened to the next person who asked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the person exceed their authority? Some will have, and the useful question is not whether they were wrong but what happened the second time — because there is almost always a second time.'));
out.push(box('Homework', ['Write your final text. Then write the three things you can offer for one request that is above your limit, and use them the next time it comes (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.5 =======================
out.push(pb());
out.push(h2('6.5  Asking upwards'));
out.push(p('**Function:** asking for an authority to be changed   ·   **Grammar:** *Would it be all right if…? · I should like to propose*   ·   **Pronunciation:** the rise that leaves room for no'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a limit at your work that is too low. How long has it been too low, and has anybody asked?'));
out.push(p('**b**  Which would you rather receive? _Can I have a higher limit? · Would it be all right if I signed credit notes up to 250,000? Here is what I have signed this year._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour ask Mr Ayoub for?   **A** a higher credit-note limit   **B** a pay rise   **C** another member of staff'));
out.push(p('**b**  Listen again. **1** What does she bring with her? **2** What does Mr Ayoub say he would have said if she had asked without it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.9  "Would it be all right if…?"', [
  ['Nour', 'Mr Ayoub, would it be all right if I signed credit notes up to 250,000 instead of 100,000?'],
  ['Mr Ayoub', 'Why?'],
  ['Nour', 'Three reasons, and one of them is awkward. The first: I have raised sixty-one credit notes this year and forty-three were above 100,000, so the limit has stopped meaning anything — it just means a queue at your door. The second: the figure was set when the counter took a tenth of what it takes now.'],
  ['Mr Ayoub', 'And the awkward one.'],
  ['Nour', 'For six weeks Hala signed credit notes above the limit because I gave her half an instruction. Every one was correct. I am not asking you to approve what happened — it is recorded and Mr Attar has it. But it is six weeks of evidence about the right figure and it would be dishonest to use the first two reasons and not that one.'],
  ['Mr Ayoub', 'Two fifty, then. With the countersignature above it and nothing else changed.'],
  ['Nour', 'Thank you.'],
  ['Mr Ayoub', 'And if you had come in and asked for a higher limit without the sixty-one and the forty-three, I would have said I would think about it, and I would not have thought about it, and you would have asked again in March.'],
  ['Nour', 'That is roughly what happened in March.'],
  ['Mr Ayoub', 'It is. ⚠ The difference is that this time you brought me a decision to make rather than a favour to grant. **They feel entirely different from this side of the desk and nobody ever says so.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking upwards — a decision to make, not a favour to grant**',
  table(['Form', 'Use', 'Example'], [
    ['**Would it be all right if I** + past', 'the ask', '**Would it be all right if I** signed up to 250,000?'],
    ['**I should like to propose**', 'in writing', '**I should like to propose** a ceiling of 250,000.'],
    ['⚠ **the figure, with evidence**', 'always', 'sixty-one this year; forty-three above the limit'],
    ['⚠ **the awkward reason, included**', 'the one that costs you', 'six weeks of signing above the limit, all correct'],
    ['**and nothing else changed**', 'bound the ask', 'with the countersignature above it unchanged'],
  ], [2.2, 1.2, 2.3]),
  '⚠ **Bring a decision, not a favour.** *Can I have a higher limit?* invites *I will think about it*, which means no. **A figure with counted evidence behind it is a decision somebody can make in one minute**, and they will.',
  '⚠ **Include the reason that does not help you.** The six weeks were a failure of Nour\'s own instruction and they are also the best evidence for the figure. Leaving it out would have been dishonest and would also have left the case weaker.',
  '⚠ **Bound the ask.** *And nothing else changed* tells the person they are agreeing to one thing, which is why they can agree today.',
  '⚠ **_Would it be all right if I_ + past tense** is the house form for asking upwards: *if I signed*, *if I ordered*, *if I went*. It leaves room for no, and leaving room for no is what makes a yes worth having.',
  '**Practise:** Ask for a limit to be changed, with a counted reason and the awkward one. 1 a credit-note ceiling 2 a purchase-order ceiling 3 a discount percentage 4 who may countersign 5 a payment term',
  '**Useful phrases:**  Would it be all right if I…?  ·  I should like to propose…  ·  I have … this year, of which …  ·  and one of them is awkward  ·  and nothing else changed',
  '**Pronunciation – the rise that leaves room for no.** 🔊 **Track 6.10** Listen: _would it be all right if I signed up to two fifty?_ ↗ ⚠ The rise is not weakness; it is what distinguishes a question from an announcement wearing a question mark. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks upwards with evidence; B decides. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Would it be all right if I __________ instead of __________?'],
  ['B', 'Why?'],
  ['A', 'Three reasons, and one of them is awkward. The first: __________. The second: __________.'],
  ['B', 'And the awkward one.'],
  ['A', '__________. I am not asking you to approve it — __________. But it is evidence about the right figure and it would be dishonest to leave it out.'],
  ['B', '__________, then. With __________ and nothing else changed.'],
  ['A', 'Thank you.'],
  ['B', '⚠ And if you had asked without __________, I would have said I would think about it, and I would not have.'],
]));
out.push(table(['Role card 1 — the warehouse ceiling', 'Role card 2 — the counter discount'], [[
  'Abu Yasser asks for 150,000 to be written down. Evidence: eleven years of ordering at about that figure. The awkward reason: twice he went to 150,000 without authority and nobody noticed, which he is going to say out loud.',
  'Hala asks for the counter discount to be a figure rather than 5 per cent. Evidence: five per cent of a pallet exceeds her credit-note limit. The awkward reason: she has given 5 per cent on two pallets without realising what it came to.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the ask for the class – **without the book**.'));
out.push(p('**Listener task:** write the figure, the counted evidence, and the awkward reason. ⚠ Then say whether the ask was bounded — *and nothing else changed*.'));
out.push(PHRASE_CARD(['Would it be all right if I…?', 'I should like to propose…', 'I have … of which…', 'one of them is awkward', 'and nothing else changed', 'a decision, not a favour']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Prepare a real ask. **One** limit, with the figure, two counted reasons, the awkward one, and the boundary.'));
out.push(table(['The ask', 'Counted reason 1', 'Counted reason 2', 'The awkward reason', 'And nothing else changed'], [['', '', '', '', '']], [1.1, 1.2, 1.2, 1.3, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Make the ask to the class as if to the person who decides. Then say when you will actually make it.'));
out.push(p('**Listener task:** count how many asks had a number in them. ⚠ Then count how many had an awkward reason — and notice that those are the asks you believed.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _would it be all right if I sign up to 250,000_ and _I would like to propose that I will sign_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the request for authorisation, and answer the questions.'));
out.push(box(null, [
  '**REQUEST FOR AUTHORISATION — credit-note ceiling. To Mr Khaled Ayoub. 2 November.**',
  '**What I am asking for.** That the credit-note ceiling be raised from 100,000 to **250,000** for Nour Mansour, Nadia Sayegh and Hala Mourad, with the countersignature requirement above 250,000 unchanged and no other line of the matrix altered.',
  '**The counted case.** Sixty-one credit notes raised in the ten months to October. **Forty-three were above 100,000** and therefore required a countersignature; of those forty-three, thirty-nine were countersigned within the day and four waited between two and nine days. ⚠ Of the sixty-one, none was later found to be wrong in amount. The ceiling has not prevented an error this year because there has not been one to prevent.',
  '**Where the figure comes from.** The largest credit note of the year was 318,000 and the next largest 247,000. ⚠ A ceiling of 250,000 would have let through every one except the largest, which is the one I would want you to see.',
  '**The reason that does not help me.** Between 12 September and 24 October, Hala signed nine credit notes above the ceiling, the largest 240,000, because of a half instruction I gave her. All nine were correct in amount and in entitlement. **I am not asking you to approve them** — they are recorded as signed outside authority, with the reason, and Mr Attar has the list. I include them because they are nine more data points about the right figure and because you would find them anyway.',
  '**What I am not asking for.** Not a payment-out authority, not a discount change, and not a change to who may countersign.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the request say the ceiling has not prevented this year, and why?'));
out.push(item('2', 'Why is 250,000 the figure proposed rather than 320,000?'));
out.push(item('3', 'What three things is the writer explicitly not asking for?'));
out.push(box('Writer\'s box', [
  '**A request for authorisation — five parts:** what you are asking for, exactly → **the counted case** → where the figure comes from → ⚠ **the reason that does not help you** → **what you are not asking for**.',
  '**Count something.** *Sixty-one, of which forty-three were above the ceiling, of which four waited between two and nine days.* Three numbers in one sentence is a case; adjectives are not.',
  '**Derive the figure, do not choose it.** *A ceiling of 250,000 would have let through every one except the largest, which is the one I would want you to see.* ⚠ A figure with a reason is agreed; a round number is negotiated.',
  '⚠ **Include the reason that does not help you, and say what you are not asking for with it.** *I am not asking you to approve them.* The two together are what let a reader say yes to one thing without wondering what else is in the envelope.',
  '⚠ **End with what you are not asking for.** Three lines, and the reader stops looking for the catch.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a real request for authorisation (**50 words or more**). Use the frame.'));
out.push(p('**REQUEST FOR AUTHORISATION — ______________. To ______________. ______________.**   **What I am asking for.** That ______________ be raised from ______________ to ______________, with ______________ unchanged.   **The counted case.** ______________ in ______________. ______________ were ______________. Of those, ______________. ⚠ ______________ has not prevented ______________ this year because ______________.   **Where the figure comes from.** The largest was ______________ and the next ______________. ⚠ A ceiling of ______________ would have let through ______________.   **The reason that does not help me.** ______________. I am not asking you to approve ______________.   **What I am not asking for.** Not ______________, not ______________, and not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says derive the figure, do not choose it. Yours asks for 500,000 — what in your own counted case produces that number rather than 400,000?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader decide this today, in one minute?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The ask stated exactly, with the figure', ''],
  ['A counted case — three numbers or more', ''],
  ['The figure derived from the counts', ''],
  ['The unhelpful reason, and what is not being asked for', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their unhelpful reason. The class says which request they would grant today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a limit at your work that has been too low for years (**100 to 140 words**). Say what it is, when it was set, what it was worth then, what it is worth now, and why nobody has asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what the figure was worth when it was set_   ✓ _Would it be all right if…? / I should like to propose?_   ? _why has nobody asked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Why has nobody asked? The commonest answer is that asking looks like asking for something for yourself — which is exactly what the counted case in stage 5 is for.'));
out.push(box('Homework', ['Write your final text. Then write the counted case for one real ask — three numbers — and take it to the person who decides (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.6 =======================
out.push(pb());
out.push(h2('6.6  Carrying a rule you did not make'));
out.push(p('**Function:** enforcing an obligation that is not yours   ·   **Grammar:** reporting an obligation   ·   **Pronunciation:** the tone that does not pretend to agree'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name a rule you have to enforce and did not write. Do you agree with it?'));
out.push(p('**b**  Which would you rather be told? _I am afraid it is the policy. · The rule is thirty days and it is not mine. I think it is wrong for a customer like you and I have said so, and it is still thirty days._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour enforcing?   **A** a thirty-day payment term   **B** a discount limit   **C** a delivery charge'));
out.push(p('**b**  Listen again. **1** What does she tell Ms Shamsi about her own opinion? **2** Why does she say she will not pretend to agree?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.11  "It is not mine, and it still stands"', [
  ['Ms Shamsi', 'Thirty days. I have supplied you since 2019 and I am asked for thirty days.'],
  ['Nour', 'You are, and it is new, and it is not mine. Mr Ayoub set it in September for every supplier without exception.'],
  ['Ms Shamsi', 'And you think it is right?'],
  ['Nour', 'No. I think it is wrong for you specifically, because you have never once been late with anything and because you carry our stock in Aleppo at your own cost. I said so, in writing, before it went out. ⚠ And it is still thirty days.'],
  ['Ms Shamsi', 'Then what use is your opinion to me?'],
  ['Nour', 'Two uses. It tells you the rule is not about you, which it would be easy to assume. And it means that when I tell you something **is** my judgement, you will know the difference.'],
  ['Ms Shamsi', 'Most people in your position say it is the policy and look sorry.'],
  ['Nour', 'Most people in my position are hoping you will go away. ⚠ If I say *I am afraid it is the policy*, I have made the rule sound like weather, and you cannot argue with weather — so you will argue with me instead, for twenty minutes, and the answer at the end will still be thirty days.'],
  ['Ms Shamsi', 'And if I write to Mr Ayoub?'],
  ['Nour', 'Then write to him, and I will send you the paragraph I sent him in September so you are not making the case from nothing. That is not disloyalty; he knows what I think. ⚠ **What I will not do is tell you I agree when I do not, because then he and I would be saying different things and you would believe neither of us.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Enforcing a rule you did not write — the honest form**',
  table(['Move', 'Example'], [
    ['**name the owner and the date**', 'Mr Ayoub set it in September, for every supplier.'],
    ['⚠ **say what you think, once**', 'No. I think it is wrong for you specifically, because…'],
    ['⚠ **say that you said so**', 'I said so, in writing, before it went out.'],
    ['⚠ **and enforce it anyway**', 'And it is still thirty days.'],
    ['**offer the route**', 'Write to him, and I will send you what I sent him.'],
    ['⚠ what not to say', '*I am afraid it is the policy* · *there is nothing I can do*'],
  ], [2.3, 2.9]),
  '⚠ **The four moves in order: owner, your view, that you said so, and the rule stands.** Leaving out the third is what makes the second sound like sympathy; leaving out the fourth is what makes the whole thing a negotiation.',
  '⚠ **_I am afraid it is the policy_ makes the rule sound like weather.** Nobody argues with weather — so they argue with **you** instead, for twenty minutes, and the answer is the same at the end.',
  '⚠ **Offer the route upwards, and offer your own paragraph with it.** That is not disloyalty if the person who set the rule already knows what you think. ⚠ If they do not know, the thing to fix is that, not the conversation in front of you.',
  '⚠ **Never claim to agree when you do not.** Two people in one company saying different things about the same rule is survivable; one person saying what they think the listener wants is not, because afterwards nothing either of them says is worth anything.',
  '**Practise:** Enforce each with the four moves. 1 thirty-day terms 2 no returns on made-to-order goods 3 a delivery charge below a minimum order 4 no cash with drivers 5 a price list that changes on Fridays',
  '**Useful phrases:**  … set it in …, for everybody.  ·  No — I think it is wrong, because…  ·  I said so, in writing.  ·  And it still stands.  ·  Write to him and I will send you what I sent him.',
  '**Pronunciation – the tone that does not pretend to agree.** 🔊 **Track 6.12** Listen: _**no** — I think it is wrong for you specifically_ // _and it is **still** thirty days_. ⚠ Both sentences are level and unapologetic; a falling, sorrowful tone on the second turns it back into weather. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is subject to a rule B must enforce and did not write. Use the four moves. Then swap.'));
out.push(dlg(null, [
  ['A', '__________. I have __________ since __________ and I am asked for __________.'],
  ['B', 'You are, and it is new, and it is not mine. __________ set it in __________ for __________ without exception.'],
  ['A', 'And you think it is right?'],
  ['B', 'No. I think it is wrong for you specifically, because __________. I said so, in writing, before it went out. ⚠ And it is still __________.'],
  ['A', 'Then what use is your opinion to me?'],
  ['B', 'Two uses. It tells you the rule is not about you. And when I tell you something **is** my judgement, you will know the difference.'],
]));
out.push(table(['Role card 1 — no cash with drivers', 'Role card 2 — the minimum order'], [[
  'A regular customer in Ghouta has always sent cash back with Fadi and now may not. B thinks the rule is right and should say so — ⚠ the four moves work just as well when you agree, and the second move is then *I think it is right, and here is why*.',
  'A small shop below the minimum order now pays delivery. B thinks the minimum is too high for Ghouta specifically, has said so, and has been overruled. The rule stands.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** tick the four moves. ⚠ Then say which was missing — it is almost always the third, *and I said so*, because it is the one that costs something.'));
out.push(PHRASE_CARD(['… set it in …, for everybody.', 'No — I think it is wrong.', 'I said so, in writing.', 'And it still stands.', 'Write to him.', 'not "it is the policy"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** rules you enforce and did not write. For each, the four moves — and be honest in the second about whether you agree.'));
out.push(table(['The rule', 'Owner and date', 'What I think, and whether I said so', 'The route upwards'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1, 1.9, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The rule is _______. _______ set it in _______. I think _______, and I did / did not say so. And it still stands._'));
out.push(p('**Listener task:** count the rules the room disagrees with and has never said so about. ⚠ Those are the rules being enforced with *I am afraid it is the policy*, and the twenty minutes are being spent somewhere.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he said that it must to be thirty days_ and _I am afraid that is the policy and I cannot to help_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**To Ms Dima Shamsi, Aleppo. 6 November. Payment terms.**',
  'Dear Ms Shamsi,',
  'The terms on our purchase orders from 1 September are thirty days from invoice, for every supplier without exception. **Mr Ayoub set them and they are not mine.**',
  '⚠ **You asked me what I think, so I will tell you.** I think thirty days is wrong in your case. You have never been late with a delivery since 2019, you hold our stock in Aleppo at your own cost, and you are the only supplier who telephones us before a price moves rather than after. I put that in writing to Mr Ayoub on 24 August, before the terms went out, and I have attached what I wrote. **The terms are still thirty days.**',
  'I am telling you this for two reasons. The first is that you would otherwise reasonably assume the change was about you, and it is not — it went to eleven suppliers on the same day. The second is that I would like you to be able to tell the difference between a rule I am carrying and a judgement I am making, and you cannot do that unless I say which is which.',
  '**If you want to put it to him, do.** His address is on the order and I will send you my August paragraph to attach. He knows what I think; this is not news to him and it will not go badly for me.',
  '⚠ **What I will not do is tell you I agree with it.** If I did, you would eventually hear from him that the terms were deliberate and considered, which they were, and then you would not know which of us to believe about anything.',
  '**Meanwhile, two things I can do.** Your October invoice is in the first payment run of the month rather than the last, which is six working days earlier, and that is mine to decide. And I will ask on your behalf once more at the year end, when he looks at terms anyway.',
  'Yours sincerely, **Nour Mansour**, Administration Coordinator',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the letter say about why the writer is telling the supplier her own view?'));
out.push(item('2', 'What will the writer not do, and what would the consequence have been?'));
out.push(item('3', 'What two things does she do that are within her own authority?'));
out.push(box('Writer\'s box', [
  '**A letter carrying somebody else\'s rule — six parts:** the rule, the owner, the date → ⚠ **what you think and that you said so** → why you are telling them → the route upwards, offered properly → ⚠ **what you will not do** → **what you can do, which is yours**.',
  '**Name the owner in the first paragraph and do not soften it.** *Mr Ayoub set them and they are not mine.*',
  '⚠ **Attach what you wrote.** *I put that in writing on 24 August and I have attached what I wrote.* An opinion you can produce is evidence; an opinion you report is a kindness.',
  '**Say why you are telling them.** Two reasons: so they do not think the rule is about them, and so they can tell a carried rule from your own judgement later.',
  '⚠ **End with what is yours.** *Your October invoice is in the first payment run rather than the last, and that is mine to decide.* A letter that carries a rule and gives nothing is a letter about your own position; six working days is a letter about theirs.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter carrying a rule you did not write (**50 words or more**). Use the frame.'));
out.push(p('**To ______________. ______________. ______________.**   ______________ from ______________, for ______________ without exception. **______________ set them and they are not mine.**   ⚠ **You asked me what I think, so I will tell you.** I think ______________ because ______________, ______________ and ______________. I put that in writing on ______________ and I have attached it. **______________ still stands.**   I am telling you this for two reasons: ______________, and ______________.   **If you want to put it to ______________, do.** ______________.   ⚠ **What I will not do is ______________.** If I did, ______________.   **Meanwhile, what is mine.** ______________, and that is mine to decide.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says end with what is yours. Your letter carries the rule and offers the route and gives the reader nothing — what can you do today without asking anybody?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **can the reader tell a carried rule from the writer\'s own judgement?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The owner and the date, in the first paragraph', ''],
  ['What the writer thinks, **and that they said so**', ''],
  ['The route upwards, with the writer\'s own paragraph offered', ''],
  ['Something given that is the writer\'s own to give', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what I will not do* paragraph. The class says which writer they would believe the next time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule you enforce and disagree with (**100 to 140 words**). Say what it is, why you disagree, whether you have ever said so to whoever set it, and what you say to the people it falls on.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the reason they disagree_   ✓ _the owner named, and the rule reported not owned?_   ? _have they ever said so upwards, and if not, why not?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many has the writer said so upwards? Usually one of three — and the useful conversation is about what stopped the other two, because it is rarely fear and often that nobody ever asked them.'));
out.push(box('Homework', ['Write your final text. Then write the paragraph you would send upwards about one rule you disagree with — and decide whether to send it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.7 =======================
out.push(pb());
out.push(h2('6.7  Review & Mediate: what do these terms actually require?'));
out.push(p('**Function:** explaining terms of business to somebody they fall on   ·   **Review:** *must* and *have to* · *don\'t have to* and *mustn\'t* · authority with a figure · *not mine to decide* · asking upwards · carrying a rule'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** *Must* or *have to* — which is ours and which is outside?',
  '**2** Why must a *don\'t have to* never be given on its own?',
  '**3** What two things does an authority need?',
  '**4** What three things do you give when a decision is not yours?',
  '**5** What are the four moves for carrying a rule you did not write?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi want to know about the new terms?   **A** what they pay him   **B** which parts fall on him and what he must refuse   **C** who wrote them'));
out.push(p('**b**  Listen again. **1** Which clause turns out to fall on Fadi and not on the office? **2** What does he say the terms do not tell him?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.13  "Which of this falls on me?"', [
  ['Fadi', 'Four pages of terms of business. Which of it is mine?'],
  ['Nour', 'Almost none. Clause 4 is yours — the goods are signed for against the order at the point of delivery.'],
  ['Fadi', 'That is the gate sheet at our end. At their end I sign their note.'],
  ['Nour', 'You sign theirs and they sign ours. Both.'],
  ['Fadi', 'And clause 9? *No cash or other payment shall be accepted by the carrier.*'],
  ['Nour', 'That is yours too, and I had it down as the office\'s. It means you must refuse money, every time, including when a customer puts it in your hand in the street and will not take it back.'],
  ['Fadi', 'Which happens about twice a month. Mr Haffar does it and he is seventy.'],
  ['Nour', 'What do you do now?'],
  ['Fadi', 'I take it and I bring it in and Nadia writes it on the sheet. Nobody has ever said not to.'],
  ['Nour', 'Then clause 9 has been breached twice a month for a year by somebody who was never told it existed, and that is not your fault, it is mine — the terms went to the customers and not to you.'],
  ['Fadi', 'And what do I do when he puts it in my hand?'],
  ['Nour', '…The terms do not say. They say you must not accept it. They do not say what to do when it is already in your hand and the man is seventy and will be hurt.'],
  ['Fadi', 'That is the only part I actually needed.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining terms to the person they fall on**',
  table(['To orient them', 'To find the breach', 'To find the gap'], [
    ['Almost none of it is yours.', 'What do you do now?', 'The terms do not say.'],
    ['Clause 4 is yours.', 'Nobody has ever said not to.', 'That is the only part I needed.'],
  ], [2, 2, 2]),
  '⚠ **Say how little of it is theirs.** Four pages given whole to a driver is four pages unread. *Almost none of it is yours; clause 4 and clause 9* is what makes a document usable.',
  '⚠ **Ask _what do you do now?_ before explaining the clause.** It is how you discover that a clause has been breached twice a month for a year by somebody who was never sent it. ⚠ And when that happens, the fault belongs to whoever sent the terms to the customers and not to the staff.',
  '⚠ **A prohibition with no alternative is a gap.** *You must not accept it* and nothing about the money already in your hand. The person it falls on knows exactly where the gap is, and they are the only person who does.',
  '⚠ The honest answer is **_the terms do not say_**, and then writing the clause with them. Do not invent a rule standing in a yard; say it is missing and go and get it decided.',
  '**Practise:** Explain a set of terms to somebody they fall on. Say which clauses are theirs, ask what they do now, and find the clause that gives no alternative.',
  '**Useful phrases:**  Almost none of it is yours.  ·  Clause … is yours.  ·  What do you do now?  ·  Nobody has ever said not to.  ·  The terms do not say.',
  '**Pronunciation – reading a clause aloud to somebody it falls on.** 🔊 **Track 6.14** Listen to clause 9 read twice: once as written, once as *you must refuse money, every time, including when it is in your hand.* ⚠ The second is the only one anybody can act on. Repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A explains terms to B, whom they fall on. B says what they do now. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Clause: *no goods shall be left without a signature.* B delivers to a shop that is often shut and currently leaves them with the pharmacist next door, and has done for two years. Nobody has objected and nothing has gone missing.',
  'Clause: *all complaints shall be made in writing within seven days.* B takes complaints by telephone and settles most of them the same day without writing anything. The clause makes every one of those settlements irregular, which nobody has noticed.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the clause, what the person does now, and the missing alternative. ⚠ Then say whose fault the breach is.'));
out.push(PHRASE_CARD(['Almost none is yours.', 'Clause … is yours.', 'What do you do now?', 'Nobody has ever said not to.', 'The terms do not say.', 'the fault is whoever sent them']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a set of terms. Explain them to **two** people they fall on, and collect what each of them actually does.'));
out.push(table(['Who I told', 'Which clauses were theirs', 'What they do now', 'The missing alternative'], [['', '', '', ''], ['', '', '', '']], [1, 1.2, 1.4, 1.5]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the terms did not say. This is the **sixth** unit of this book, and the thing nobody writes down is the one the whole unit has been building to: **a rule is written by somebody with authority and carried by somebody without it, and the person who carries it is the only person who knows where it cannot be obeyed — which is why the four pages go to the customers and never to the driver.**'));
out.push(p('_Of _______ clauses, _______ were theirs. They have been doing _______ for _______, and the terms do not say _______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _authority matrix · delegated authority · ceiling · countersign · binding · enforce._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 6)', 10));
out.push(p('⚠ **This unit practises Part 6: multiple-choice cloze.** Read the extract from a set of terms and choose **a**, **b** or **c** for each gap.'));
out.push(box(null, [
  '**TERMS OF BUSINESS — extract, as amended 1 September.**',
  '**4.** Goods shall be signed for **(1) ______** the order at the point of delivery. The carrier **(2) ______** sign the customer\'s note and obtain a signature on our own.',
  '**9.** No cash or other payment **(3) ______** be accepted by the carrier. Where a payment is offered, the carrier shall decline it and **(4) ______** the office the same day.',
  '**12.** A written quotation is **(5) ______** for fourteen days from its date. Thereafter the current list applies.',
  '**14.** The customer **(6) ______** give notice of a shortage within three working days. ⚠ A shortage recorded on our gate sheet at the time of loading **(7) ______** notice.',
  '**17.** Nothing in these terms **(8) ______** any right given to the customer by law.',
], 'FFFFFF', C.navy));
[
  '**1**   a) against   b) with   c) by',
  '**2**   a) shall be   b) shall   c) shall to',
  '**3**   a) must not   b) does not have to   c) is not',
  '**4**   a) informs   b) inform   c) informing',
  '**5**   a) bound   b) bind   c) binding',
  '**6**   a) shall have   b) shall   c) have to',
  '**7**   a) is no   b) requires   c) requires no',
  '**8**   a) enforces   b) requires   c) waives',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: telling a colleague which clause falls on them and what to do where it gives no alternative.',
  'The shape: **the clause number and what it requires** · **what to do in the case it does not cover** · **who to tell**.',
  '⚠ **Forty words means the clause number, the requirement and the gap.** No history of the terms and no explanation of who wrote them.',
  '⚠ Where the terms give no alternative, **say so and give an interim instruction with your own name on it** — not a rule you have invented, but what to do until it is decided.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A clause in your workplace\'s terms falls on a colleague and gives them no alternative. Write them a note (**35 to 45 words**). Say **what the clause requires**, **what to do in the case it does not cover**, and **who to tell**.'));
out.push(p('______________, clause ______________ requires ______________. It does not say what to do when ______________. Until it does: ______________, and tell ______________ the same day. That is mine, not the terms\'.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The clause and what it requires', ''],
  ['The case it does not cover', ''],
  ['An interim instruction, owned by the writer', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your own authority in full (**100 to 140 words**): what you are authorised to do and up to what figure, what you must not do alone and who must be asked, one figure you work to that is not written down, and one rule you carry and did not write.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one set of rules at your workplace to the person they fall on, ask what they do now, and write down the clause that gives no alternative (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  We ___ keep the invoices for ten years — it is the law.   a) have to   b) must   c) are must',
  '2  We ___ count the load at the gate. That rule is ours.   a) have to   b) must   c) must to',
  '3  You ___ get a second signature below 100,000.   a) mustn\'t   b) don\'t have to   c) don\'t must',
  '4  You ___ sign anything above 250,000 on your own.   a) don\'t have to   b) mustn\'t   c) haven\'t to',
  '5  I am authorised ___ credit notes up to 250,000.   a) to sign   b) for sign   c) signing',
  '6  That is not mine ___ decide.   a) for   b) to   c) of',
  '7  ___ it be all right if I signed up to 250,000?   a) Would   b) Will   c) Should',
  '8  He set the terms in September, so they ___ mine.   a) are not   b) have not   c) must not',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 6.15** Listen to the ask. Complete the note.   What is asked for: ______   From what figure to what: ______   The counted evidence: ______   The awkward reason: ______   What is not being asked for: ______'));
out.push(dlg('Track 6.15  Audio script (read after the check)', [
  ['Nour', 'Mr Ayoub, would it be all right if the credit-note ceiling went from 100,000 to 250,000 — for me, Nadia and Hala?'],
  ['Nour', 'Sixty-one credit notes this year and forty-three of them above the ceiling, so it has stopped meaning anything. None of the sixty-one was wrong in amount.'],
  ['Nour', 'And one reason that does not help me. For six weeks Hala signed nine of them above the limit, the largest 240,000, because I gave her half an instruction. All nine were correct. I am not asking you to approve them — they are recorded and Mr Attar has them.'],
  ['Nour', 'I am not asking for a payment-out authority, I am not asking about discounts, and the countersignature above the ceiling stays exactly as it is.'],
]));
out.push(p('**C  Writing.** Write four lines of your own authority (**50 words or more**): two things you are authorised to do with figures, one thing you must not do alone with who must be asked, and one figure that is not written down.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 6)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ tell a company rule from the law, and name the half-rules',
  '☐ give both halves with a figure — *below X you don\'t have to; above X you mustn\'t*',
  '☐ state my own authority as a thing and a figure, and say which lines are unwritten',
  '☐ say a decision is not mine, name the owner, and give three things instead',
  '☐ ask upwards with a counted case, including the reason that does not help me',
  '☐ carry a rule I did not write, say what I think, and enforce it anyway',
  '☐ explain terms of business to the person they fall on, and find the clause with no alternative',
  '☐ write a sorted rule list, a clarification note, an authority matrix and a request for authorisation',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
