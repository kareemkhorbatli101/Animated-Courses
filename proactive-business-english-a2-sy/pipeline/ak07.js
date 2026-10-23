// Proactive Business English A2 · Syria Edition · Book 1 · Unit 7 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 7  Appointments and Arrangements'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 7.1 =====================
out.push(h2('7.1  I can use the system, but I can\'t sign'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The useful part is the second half: insist on _one you can and one you **can\'t — yet**_. The word _yet_ changes a weakness into a plan.'));
out.push(p('**b**  **Ability:** _I can drive._ · _She can speak French._  **Permission:** _I can\'t sign orders over 500,000._ · _You can\'t park there._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (cover for Nadia)   **b**  1 Any two: take the counter money · use the accounts system to look · go to the bank at nine · show Hala the counter on Thursday.  2 The system will not let her, and she should not anyway — Mr Ayoub signs at four.'));
out.push(p('**Language box – Practise (samples):**  1 I can use it, but only to look, not to change anything.  2 I can\'t — Mr Ayoub signs at four every day.  3 I can drive it, but I haven\'t driven it with a full load.  4 I can take them, but I write slowly; I\'d need the agenda first.  5 I can, on Thursday afternoon — not Thursday morning, the lorry comes.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Rasha is away for a week. Can you cover the counter?'],
  ['B', 'Which things exactly?'],
  ['A', 'Serving customers, the till, and the usual orders.'],
  ['B', 'I can serve and I can use the till. I can order, but only the usual items, not anything new.'],
  ['A', 'That\'s enough for a week?'],
  ['B', 'It is. But I can\'t give advice on prescriptions, and I can\'t open the controlled cupboard.'],
  ['A', 'Then the pharmacist does both. Can you show the new girl the till on Thursday?'],
  ['B', 'I can show her Thursday afternoon. She learns quickly.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **limit**. A performance with no limit has missed the cycle: the whole point is that _yes_ and _no_ are both wrong answers at work. Typical errors: _I can to use_; _she cans_; _I can\'t sign, finish_ — a limit with no alternative.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Can…', 'Can\'t… yet', 'Who could teach them?'], [
  ['Rasha', 'use the accounts system, write a supplier email', 'take minutes', 'Nour, in twenty minutes'],
  ['Fadi', 'drive the van and the lorry, load a pallet', 'use the forklift (no certificate)', 'nobody here — it needs a course'],
  ['Samir', 'quote a standard job, cut glass', 'quote a shopfront', 'his uncle, who does them'],
], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi can drive the van and the lorry and he can load a pallet. He can\'t use the forklift yet, because he hasn\'t got the certificate — that needs a course, not a colleague."', 'The skill only one person has is the one to worry about. Ask the class who would do it if that person were ill.']));
out.push(stage('5', 'Read'));
out.push(p('1 Any two: take and count the counter money · enter small invoices under 100,000 · go to the bank at nine · answer a question about a **paid** invoice.  2 Tell Mr Ayoub first — it is over 100,000.  3 She would rather answer one question than find six mistakes on Thursday.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HANDOVER — Rasha Hamdan, 2–6 May** · for Samir, copy to the owner.  **What Samir can do without asking me:** open and close the shop · serve customers · use the till and count it twice · reorder the usual items from the two regular suppliers.  **What Samir can do, but must tell the owner first:** any order from a new supplier · any price change · any promise about a repair date.  **What Samir can\'t do:** give a discount — the owner does that · open the safe (he has no key, and should not have one) · accept a return without a receipt.  **If something happens that is not on this page:** write it in the book by the till and telephone me. I would rather answer one question than find a week of mistakes.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three lists, middle one not empty', '✓'],
  ['Every _can\'t_ names who does it instead', '✗ – "accept a return without a receipt" names nobody'],
  ['_can_ with no _to_ and no _-s_', '✓'],
  ['A way to ask about anything else', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The three lists are clear and the middle one is real. Who **does** accept a return without a receipt? Put a name in, or Samir will have to invent one."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The item most often in the wrong list is a **price change**: people put it under _can\'t_, and then the shop cannot respond to a competitor for a week. It belongs in the middle list.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['A year ago I could not write an email in English. I could read one, slowly, but when I had to answer I waited two days and then asked a colleague. Nadia taught me — not grammar, but a shape: greeting, the three things, a close. I still can\'t write a long formal letter and I would rather not try. Next I want to learn to take minutes, because the person who writes them decides what was agreed.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the person who writes them decides what was agreed" — that is exactly why I want to learn too._   ✓ _Who could teach you minutes?_   ? _Do you still ask a colleague to check emails?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('This stage works best if the ten minutes is actually **arranged**, with a day and a time, before the class ends. A promise to teach somebody "sometime" is the same as no promise.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['**One day — handover.** Without asking: open up, serve, take messages, order bread. Tell me first: any delivery that arrives short. Can\'t: open the till drawer with the key — Hala has it. Anything else: write it down and call me.']));

// ===================== 7.2 =====================
out.push(pb());
out.push(h2('7.2  Could you come at ten instead?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  _Come at ten._ → _Can you come at ten?_ → _Could you come at ten, please?_ → _Would you mind coming at ten?_'));
out.push(p('**b**  Strongest: _I need you to…_  Softest: _Would you mind…?_  (_Can you_ is between _I need you to_ and _Could you_.)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (Nour to a supplier)   **b**  1 Eleven o\'clock on Thursday.  2 Come at ten instead · bring the new price list · send the wrap figures before Thursday.'));
out.push(p('**Language box – Practise (samples):**  1 Could you come at ten instead? Mr Ayoub has the bank at eleven.  2 Could you bring the new price list? We only have January\'s.  3 Could you send the figures before Thursday, so we can read them first?  4 Could you telephone me on Tuesday to confirm?  5 Could we move it to the boardroom? The small room is booked.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Mr Hamdi, good morning. It\'s Rasha. I\'m telephoning about the kitchen.'],
  ['B', 'Monday, I have it written. Is there a problem?'],
  ['A', 'A small one. Could you start on Saturday instead? My mother is here from Monday.'],
  ['B', 'Let me look… yes, Saturday is possible.'],
  ['A', 'Thank you. And could you take the old tiles away? We have nowhere to put them.'],
  ['B', 'I can, but there\'s a charge for that — about forty thousand.'],
  ['A', 'That\'s fine. One more thing — could you send me the price in writing before you start? Then nobody has to remember anything.'],
  ['B', 'I\'ll send it Friday evening.'],
  ['A', 'Saturday, the tiles taken away, and the price by Friday evening. Thank you.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three requests and check for the read-back. Typical errors: _could you to come_; _would you mind to come_ → _**coming**_; four or five requests in one call, which is where the listener stops writing.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'What I asked for', 'Reason I gave', 'Answer'], [
  ['Fadi', 'swap Thursday\'s shift', 'my sister\'s results come out', 'yes'],
  ['Hala', 'the Aleppo file by four', 'the manager reads it tonight', 'yes, by half past three'],
  ['Samir', 'to come in early on Sunday', 'the stock count', 'no — the service is not running that early; he offered Monday'],
], [1, 1.6, 1.4, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked Hala if she could send me the Aleppo file by four, because the manager reads it tonight. She said yes, and sent it at half past three."', 'The quickest _yes_ goes to the request with a **short, true reason** and a deadline the other person can actually meet. Requests with no reason get "I\'ll try".']));
out.push(stage('5', 'Read'));
out.push(p('1 That the meeting has moved to 10 am, and that it was 11 — without opening the email.  2 So Mr Ayoub can read them before Ms Shamsi arrives and the meeting is not spent on numbers.  3 Whether she is coming alone — so Nour can arrange the chairs and the tea.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Saturday 22 April — now 8 am (was Monday).  Dear Mr Hamdi, Thank you for moving the work. In writing, so that we both have it:  **Saturday 22 April, 8 am**, the kitchen, third floor, number 14 — the brown door next to the barber\'s.  Two things you agreed to:  •  take the old tiles away (40,000, agreed);  •  send the written price by Friday evening, so that nobody has to remember anything on Saturday morning.  Could you also tell me how many people are coming? I will leave the key with the neighbour if I am out. My number is 0988 450 176.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Change in the subject line, with the old time', '✓'],
  ['Time, date **and** place', '✓'],
  ['Agreements as bullets', '✓'],
  ['Every request has a reason', '✗ – "how many people" has none'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A subject line is actionable when it carries a **date and a time**, and the old one in brackets. _Re: kitchen_ is opened last; _Saturday 22 April — now 8 am (was Monday)_ needs no opening at all.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['Dear Ms Shamsi, Three things, the first the most important. Could you confirm today that the sixty boxes leave on Tuesday morning? We change our own Homs delivery if they do not. Could you also send the new price list with them, so we can quote correctly from Wednesday? And if it is easy — no trouble if not — could you tell me whether you still carry the narrow wrap? We may need it for the small pallets. Nour']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I\'d do the boxes first — the reason tells me what happens if I don\'t._   ✓ _Can you say when you need the price list by?_   ? _I would say no to the third, and the writer has made that easy._'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Making a request easy to refuse makes it **more** likely to be done, not less: the reader does it when they can rather than ignoring the whole message to avoid the one part they cannot do.'));
out.push(stage('HW', 'Homework – sample reply (≈35 words)'));
out.push(sample(null, ['Dear Nour, Yes — the sixty boxes leave Tuesday at six and the new price list travels with them. I\'m afraid we stopped the narrow wrap in February; there is a 40 cm roll which does the same job on small pallets, and I will put one in free so you can try it. Dima Shamsi']));

// ===================== 7.3 =====================
out.push(pb());
out.push(h2('7.3  What are you doing on Thursday?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Insist on **real** entries: the cycle only works if the diary is true.'));
out.push(p('**b**  _I\'m seeing the supplier on Thursday_ — a plan already made. (_I usually see_ is a habit; _I\'ll see him if he comes_ is a condition.)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a free morning)   **b**  1 Hala is starting at the counter, so Nour is with her from half past eight.  2 Thursday at eight, for one hour — before Ms Shamsi comes at ten.'));
out.push(p('**Language box – Practise:**  1 is coming  2 arrives  3 are … doing  4 \'m seeing  5 is starting'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I need an hour about the trip money. What are we doing this week?'],
  ['B', 'Let me look. Sunday I\'m doing exams all day.'],
  ['A', 'And Monday?'],
  ['B', 'Monday is teaching until one, and after that the parents are coming in until four.'],
  ['A', 'Tuesday?'],
  ['B', 'Tuesday is difficult. The inspector is coming at ten, so I\'m in my classroom all morning.'],
  ['A', 'And Wednesday?'],
  ['B', 'Wednesday we\'re free after eleven.'],
  ['A', 'Wednesday at eleven, then. One hour, not more.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the slot found and the two rejected. Typical errors: _the inspector will come at ten_ for a fixed arrangement; _I\'m having exams_ where the timetable form is natural; _we are free_ with no times either side.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'Their week', 'The slot we found'], [
  ['Rasha', 'Sun: stock count · Mon: the bank · Tue: free after 2 · Wed: her sister\'s results · Thu: closing early', 'Tuesday 2.30'],
  ['Fadi', 'Sun & Mon: on the road · Tue: loading all day · Wed: free · Thu: Homs', 'Wednesday morning'],
], [1, 2.4, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha is doing the stock count on Sunday and going to the bank on Monday, so we\'re meeting on Tuesday at half past two."', 'The busiest day in most classes is **Sunday or Monday** — the start of the week carries everything that was postponed on Thursday.']));
out.push(stage('5', 'Read'));
out.push(p('1 Between two and four on Tuesday, because he is at the gate for the Aleppo lorry.  2 The Hama delivery (moved to next Tuesday) and the printer repair (the part has not come).  3 That if something changes she will send **one** message, not five.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE WEEK — 7 to 11 May** · from Rasha.  **Sunday**  Stock count, shop closed until eleven. Please don\'t come for orders before eleven.  **Monday**  I\'m at the bank 9–11. Samir is on the counter; he can serve but he can\'t give discounts.  **Tuesday**  The supplier is coming at two. The back room is full of boxes from two until five.  **Wednesday**  Normal day. I\'m free all afternoon if anybody needs me.  **Thursday**  Closing at two for the inspection.  **Not happening this week:** the paint job (the painter is ill) and the new sign (still at the printer\'s). If something changes I will send one message, not five.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Continuous for arrangements, simple for timetables', '✓'],
  ['A line that says what it means for the reader', '✓ – three of them'],
  ['A _not happening_ line', '✓'],
  ['Times, not only days', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The _not happening_ line that saves a journey is usually about something **somebody else is waiting for** — a repair, a delivery, a signature. People plan around things they assume are on track.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['The busiest week I remember was the week before my sister\'s wedding. On Sunday I was working a full day and cooking at night. On Monday the hall telephoned to say the date was wrong in their book. Tuesday I spent at the hall. Wednesday my aunt arrived from Aleppo with four children. I cancelled nothing, and that was the mistake — I should have cancelled Thursday\'s shift and slept.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I cancelled nothing, and that was the mistake" — most people only see that afterwards._   ✓ _Could you have cancelled the Thursday shift?_   ? _Did anybody offer to help?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The thing that should have been cancelled first is nearly always the thing the writer felt **obliged** to do rather than the thing that mattered. Writers rarely agree at first.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['**My week.** Sun: class 6–8. Mon: work, then the market. Tue: free. Wed: my mother\'s, all evening. Thu: finishing at two, then the barber. **Not happening this week:** football (the pitch is closed) and the dentist (moved to the 19th).']));

// ===================== 7.4 =====================
out.push(pb());
out.push(h2('7.4  How about Tuesday instead?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _How about Wednesday? · What about Wednesday instead? · Would Wednesday suit you better?_'));
out.push(p('**b**  After _how about_: a **noun** (_How about Tuesday?_) or an **-ing** form (_How about meeting on Tuesday?_). _How about we meet_ is heard in speech but is not what to teach at A2; never a plain verb.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (twice — Thursday → Wednesday → Tuesday)   **b**  1 He is in Homs every Thursday now, at the new branch.  2 Tuesday at half past two: Mr Ayoub is there all day, the counter is quiet after two, and Mr Tarabishi passes the street anyway.'));
out.push(p('**Language box – Practise (samples):**  1 I\'m afraid Thursday I\'m in Homs. How about Wednesday?  2 Wednesday morning the stock comes — what about the afternoon?  3 We\'re closed on Friday. Would Saturday morning suit you?  4 Monday at eight is before we open. How about nine?  5 This afternoon I\'m at the bank. What about tomorrow, same time?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'About your son\'s report. Could you come on Tuesday at two?'],
  ['B', 'Tuesday at two I\'m at work. I finish at three and I can\'t leave.'],
  ['A', 'Of course. How about Wednesday, same time?'],
  ['B', 'Wednesday the school closes at two, doesn\'t it?'],
  ['A', 'It does — except Wednesday is our late day. We\'re open until five.'],
  ['B', 'Then Wednesday at half past three. That suits me better than any of them.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the reason for each refusal. A refusal with no reason should be stopped and repeated: it is the single most common cause of five-message arrangements. Typical errors: _how about meet_; _what about to meet_; _that suits me more_ → _better_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Time suggested', 'Who couldn\'t', 'Reason'], [
  ['Sunday 6 pm', 'Fadi', 'he is on the road until seven'],
  ['Monday 7 pm', 'Rasha', 'her class'],
  ['Tuesday 6 pm', 'nobody', '—'],
  ['Wednesday 8 pm', 'Samir', 'too late for the last service home'],
], [1.2, 1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We suggested four times. Fadi couldn\'t do Sunday because he\'s on the road until seven, and Rasha has a class on Monday. In the end we agreed on Tuesday at six."', 'Fast groups are the ones where people **offer** times instead of only refusing them. A group where everybody says "I\'m busy" needs six rounds.']));
out.push(stage('5', 'Read'));
out.push(p('1 Tick the options they can do and send it back, by Sunday.  2 It is a week later, and the stock card keeps going wrong in the meantime.  3 Say **which day** is possible instead — not just that they are busy.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** The shop meeting — three options, please answer by Thursday.  We need an hour about the summer orders. Please tick the ones you can do.  **A  Sunday 14, 8.00–9.00** — before we open; short, and everybody is here anyway.  **B  Tuesday 16, 2.00–3.00** — but the supplier comes at three, so we must finish exactly at three.  **C  Thursday 18, 9.00–10.00** — a good hour, but it is four days later and the orders close on the 20th.  I will take the one that works for everybody and tell you by Thursday evening. If none of them works, tell me **which day** is possible instead — not just that you are busy. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three options, each with a time', '✓'],
  ['Each option has a drawback', '✓'],
  ['Who decides, and by when', '✓'],
  ['What to do if none works', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A real drawback is one the **writer would mind**. _It is a little early_ is decoration; _it is four days later and the orders close on the 20th_ is a cost. Options with decorative drawbacks are not really options.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['Getting four brothers to one lunch took five weeks. We moved it three times: once for a funeral, once because the youngest was working, and once because my mother decided the date was wrong. What finally worked was my sister saying "the first Friday of next month, my house, come or don\'t come." Nobody argued with a date that was not asking a question.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"a date that was not asking a question" — I am going to use that._   ✓ _Who decided in the end?_   ? _Did all four come?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most stories the decider is the one who **stops offering options**. Offering alternatives is how you find a time; at some point somebody has to name one.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['1 I\'m in Homs on Thursday — how about Wednesday?  2 Monday morning the stock comes; would the afternoon suit you?  3 I finish at three and I can\'t leave before — what about half past three?  4 We\'re closed on Friday; how about Saturday morning?  5 That week I\'m away — would the following Tuesday be possible?']));

// ===================== 7.5 =====================
out.push(pb());
out.push(h2('7.5  I\'d love to, but I\'m afraid I can\'t'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _I\'d love to — thank you, I\'ll be there. · That\'s very kind; I\'d be glad to. · Yes, of course — I\'d be happy to take them._'));
out.push(p('**b**  Samples without _no_: _I\'m afraid I can\'t that day — I\'m in Homs. Could I come the week after? · I\'d love to, but I finish at five. Would a later time be possible? · I\'m afraid Monday is difficult. Could Hala take them instead?_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a branch opening)   **b**  1 He is at the head office in Aleppo until Thursday.  2 That Mr Ayoub visits the branch the following week, when the shop is quiet and he can see it properly.'));
out.push(p('**Language box – Practise (samples):**  1 I\'d love to, but I\'m afraid I can\'t on Wednesday — I\'m in Aleppo. Could I come the Tuesday after?  2 I\'m afraid I can\'t take them on Monday; I\'m at the counter. Could Hala do it and I take them next week?  3 Thank you — I\'d love to, but I finish at five. Would half past five be too late?  4 I\'m afraid I can\'t come to Homs that day. Could Bassel go, and I telephone the customer myself?  5 I\'d be glad to, but not this month. Could we do it at the next session?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'My cousin\'s wedding is on Friday at six. You will come, you and the manager.'],
  ['B', 'Thank you — I\'d love to. Friday at six. Let me check for the manager.'],
  ['A', 'He must come. He knows the family.'],
  ['B', 'I know. I\'m afraid he can\'t on Friday — he\'s travelling until Saturday night. He will be very sorry.'],
  ['A', 'Travelling. Of course.'],
  ['B', 'But he asked me to say this: he would like to visit the family the following week, when it is quiet. Would that suit you?'],
  ['A', 'That is better than the wedding. At a wedding nobody talks.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners judge the alternative. A good one is **better for the other person**, not merely easier for the refuser — _when the shop is quiet and he can see it properly_. Typical errors: _I\'m afraid no_; _I would love_ with no _to_; a refusal with the reason and no regret, which is correct and cold.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Invitation', 'Accepted or refused?', 'What I said'], [
  ['lunch on Thursday', 'accepted', 'I\'d love to — shall I bring something?'],
  ['speak at the training day', 'refused', 'I\'m afraid I can\'t that week. Could I do the next one, and send notes for this one?'],
  ['a trip to Homs on Sunday', 'thought about it', 'Can I tell you this evening? I need to check one thing first.'],
], [1.4, 1.2, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha invited me to speak at the training day. I said I\'m afraid I can\'t that week, because I\'m away. I offered to do the next one and to send notes for this one."', '_Can I tell you this evening?_ is a complete and honest third answer, and learners rarely think of it. Teach it: an invitation does not have to be answered in the second it is made.']));
out.push(stage('5', 'Read'));
out.push(p('1 Any three: it accepts warmly and says what she will bring · it names the reason for the refusal · it says the person was sorry · it offers a dated alternative · it asks whether the alternative suits · it congratulates by name.  2 "He was very sorry when I told him; twelve years is twelve years."  3 It is not impolite — it is **correct and empty**. Over a long relationship that is worse: it says the relationship is worth four sentences.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Umm Khaled, Thank you for the invitation. I\'d love to come, and I will be there on Friday at six with sweets from the place you like in Shaalan. I\'m afraid my mother can\'t come that day — she is at the hospital with my aunt until Saturday. She was very sorry; she has known your family longer than I have been alive. She asked me to suggest this instead: she would like to visit you on **Sunday the 30th**, in the afternoon, when the house is quiet. Would that suit you? Congratulations to you all. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Warm acceptance, with what you bring', '✓'],
  ['Refusal with a reason and a named person who is sorry', '✓'],
  ['An alternative with a date', '✓'],
  ['One line that is not business', '✓ – the last line'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The line remembered a year later is never the business one. _She has known your family longer than I have been alive_ is the sentence that will be repeated to other people.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['I refused a job in Dubai two years ago. The money was three times what I earn and I said no in four lines by email, politely, with no reason. I was afraid that any reason would sound like an excuse. I would do it differently now: I would say that my mother was ill and that I could not go that year — because it was true, and because the door would still be open.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _You did the right thing, and you still think so — that is clear._   ✓ _Did you offer to talk again later?_   ? _Would you take it now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most writers are still thinking about the refusal, and nearly always about **how** they refused rather than **whether**. That is the argument for this cycle in one line.'));
out.push(stage('HW', 'Homework – sample (≈35 words)'));
out.push(sample(null, ['Dear Mr Tarabishi, Thank you for inviting us to the opening of the new branch. I am very sorry that none of us can be in Homs on the nineteenth — our whole office is at the head office that week. We did not want to answer with four lines, because twelve years deserves more. May two of us come on the twenty-fifth instead, when you are open and we can see the shop working? Congratulations to you and your son.']));

// ===================== 7.6 =====================
out.push(pb());
out.push(h2('7.6  I\'d rather meet in the morning'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — but refuse any answer without a reason. The reason is the language point.'));
out.push(p('**b**  _I prefer the morning. · I prefer the morning to the afternoon. · I\'d rather meet in the morning than in the afternoon._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (where and when to meet)   **b**  1 After four his head is full of numbers that are not the ones they want.  2 The office — in the warehouse somebody always needs him and they would stop every two minutes.'));
out.push(p('**Language box – Practise (samples):**  1 I prefer morning meetings. / I\'d rather meet in the morning than after lunch, because people listen before they are tired.  2 I prefer email to the telephone. / I\'d rather write than telephone, because then there is a record.  3 I prefer working in a team. / I\'d rather work with somebody than alone, because I find my own mistakes too late.  4 I prefer an early finish. / I\'d rather finish early than take a long lunch, because the traffic doubles after five.  5 I\'d prefer to meet in the office. / I\'d rather sit down than stand in the warehouse, because nothing gets written down standing up.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The village. Early Friday or late Thursday?'],
  ['B', 'Late Thursday. I\'d rather travel at night than lose half of Friday, and the road is empty after nine.'],
  ['A', 'And how long? Two nights or one?'],
  ['B', 'Two. I\'d rather arrive tired and stay than drive both ways in one day.'],
  ['A', 'I\'d prefer one night, honestly. With two, we spend Saturday in the car.'],
  ['B', 'That is true.'],
  ['A', 'Then we do both: we go late on Thursday and come back on Saturday morning, early. Does that suit everybody?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **reasons**. Then ask which reason changed somebody\'s mind — that is the only test of a reason. Typical errors: _I\'d rather to go_; _I prefer the morning than the afternoon_ (→ **to**); a preference with no reason, which should be sent back.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Choice', 'Name', 'Prefers…', 'Because…'], [
  ['morning or afternoon meetings', 'Rasha', 'morning', 'the shop is quiet before eleven'],
  ['telephone or message', 'Fadi', 'telephone', 'he is driving and cannot read'],
  ['working alone or with somebody', 'Samir', 'with somebody', 'he checks his own work badly'],
  ['paid monthly or weekly', 'Hala', 'weekly', 'the price of everything changes in a month'],
], [1.2, 1, 1.2, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi would rather be telephoned than sent a message, because he\'s driving and he can\'t read a message. I\'d rather be sent a message, because I\'m usually with a customer."', 'The split in most classes is **telephone against message**, and both reasons are about what the person is doing at the moment the thing arrives — which is the point worth drawing out.']));
out.push(stage('5', 'Read'));
out.push(p('1 Monthly; quarterly is cheaper (by three per cent).  2 The shelves are already full, and twice in two years they have paid for stock that was damaged before it was used.  3 The quarterly discount on a **monthly** order with a twelve-month commitment — the supplier gets a year of certain orders instead of four large ones.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mr Farouk, Thank you for the two options. We would rather pay **weekly** than monthly, and I want to tell you why, because the reason may change the offer. Monthly is two per cent cheaper and we know it. But our takings are weekly, and twice last year we paid you late and we both spent an afternoon on the telephone about it. If you could give the monthly discount on a **weekly** payment with a standing arrangement at the bank, we would prefer that to either — and you would be paid fifty-two times a year without one reminder. I would rather ask than assume. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The other option\'s strongest point is admitted', '✓'],
  ['Evidence, not adjectives', '✓ – twice last year, an afternoon on the telephone'],
  ['A third option that gives both sides something', '✓'],
  ['_prefer to_ / _rather than_ correct', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A third option is real when you can say what the other side **gains in their own terms** — _paid fifty-two times a year without one reminder_, not _it would be better for both of us_.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['I paid twice the price for the Turkish pump instead of the cheap one. The cheap one was forty thousand and it was in the shop that day; the other was ninety and took three weeks. I took the expensive one because the man who fits them told me he had replaced eleven cheap ones that year and none of the others. Four years later it is still running, so I was right — but I only know that because it is still running.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I only know that because it is still running" — honest._   ✓ _What would have changed your mind?_   ? _Would you have waited three weeks in the summer?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Almost nobody regrets the harder choice in writing — which is worth saying to the class, because it is a bias, not a fact. People remember the expensive thing that lasted and forget the expensive thing that broke.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Prefer: I prefer the early shift, because the road is empty. · I prefer email to the telephone, because there is a record. · I prefer working with one person to working in a big team, because decisions take ten minutes.  Would rather: I\'d rather be told badly than not told. · I\'d rather start at seven than finish at six. · I\'d rather do a difficult job first than think about it all day.']));

// ===================== 7.7 =====================
out.push(pb());
out.push(h2('7.7  Review & Mediate: what does the invitation say?'));
out.push(stage('1', 'Get ready – Unit 7 quiz'));
out.push(p('**1** Sample: _I can use it, but only to look, not to change anything._  **2** _Could you come at ten, please?_ → _Would you mind coming at ten?_  **3** Present continuous for an arrangement; present simple for a timetable.  **4** _How about **Tuesday / meeting** on Tuesday?_ · _What about **Tuesday** instead?_ — a noun or an **-ing** form, never a plain verb.  **5** _I\'m afraid_ → the **reason** → what you **can** do instead (and, for an invitation, that the person is **sorry**).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (both)   **b**  1 Thursday the twentieth at eight, in the small room upstairs, for one hour.  2 The stock book with the pencil marks — not the computer printout.'));
out.push(p('**Language box – Practise (sample):**  _You have to come. If you can\'t, tell the person who called the meeting before the day. And if you want something put on the list, say so the day before._'));
out.push(stage('3', 'Practise – sample mediation of invitation 1'));
out.push(sample(null, ['"You\'re not in trouble — it\'s a meeting invitation. Thursday the twentieth, eight o\'clock until nine, in the small meeting room on the second floor. It\'s about the stock, and why the shelf and the screen keep disagreeing. Three people: Mr Ayoub, you and me. If you can\'t come, tell Mr Ayoub before the day — that\'s all \'apologies\' means. One more thing: bring the book, not the computer printout. That\'s the part people get wrong."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write time, place and the one thing to bring or wear. A speaker who says _attendance_, _apologies_ or _mandatory_ has not mediated: those three words **are** the task. Send them back with _say it to somebody who has never been to a meeting_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'When and where', 'What they must bring or do'], [
  ['Fadi', 'Wednesday 26, half past three, in the yard', 'wear the yellow jacket; 45 minutes; a list is taken'],
  ['Hala', 'Thursday 20, eight, small room upstairs', 'nothing — she is not on the list, but she may send an item for the agenda'],
], [1, 1.6, 1.6]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a training notice. It\'s on Wednesday the twenty-sixth at half past three, in the yard by the green door, and it takes forty-five minutes. The word people don\'t know is \'mandatory\' — it only means you have to go, and if you can\'t, a supervisor has to agree first."']));
out.push(note('Seventh unit of the book, so the ordinal is "seventh". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(p('**The office-word list so far** — worth keeping on the wall and adding to until Unit 12: _attendance_ (who is coming) · _apologies_ (tell them if you can\'t) · _mandatory_ (you have to) · _venue_ (where) · _prior to_ (before) · _discrepancy_ (a difference) · _dispatch_ (send out) · _obstruct_ (block) · _designated_ (the marked one) · _due_ (must be paid by).'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '"apologies … in advance" = tell them before'],
  ['2', 'A', '"source documentation" = the original book or paper'],
  ['3', 'B', 'he names the day he **can** do'],
  ['4', 'A', '"mandatory, warehouse staff" = they must attend'],
  ['5', 'B', 'one accepts; another day is offered for the other person'],
  ['6', 'B', '"tick the ones you CAN do" — all of them, not one'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Abu Yasser, There is a meeting on Thursday the twentieth at eight o\'clock in the small room upstairs. It\'s about the stock card and why the shelf and the screen keep disagreeing. Please bring the stock book with the pencil marks, not the computer printout. Thank you. Nour  _(49 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  When and where', '✓'],
  ['2  What it is about', '✓'],
  ['3  Bring the book, not the printout', '✓'],
  ['25 words or more', '✓ – 49 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Hi everybody, We\'re meeting on Friday at four at my flat, not at the café — it\'s cheaper and we can talk. We\'re going to plan the trip and divide the costs. Please bring whatever you spent on the tickets, written down. See you Friday! Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['I can come at six but not at four — I finish work at half past four. Start without me and I\'ll bring the bread and the receipts.']));
out.push(stage('✓', 'Unit 7 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'a', 'c', 'b', 'b', 'a', 'b', 'b']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Day: **Tuesday** · New time: **3.00 (was 2.30)** · Place: **the boardroom, ground floor** · Bring: **last year\'s order sheets** · Tell them by: **Monday evening**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Ms Shamsi, Could we move Thursday\'s meeting to ten o\'clock instead of eleven? Mr Ayoub is at the bank at eleven. It is in the boardroom, on the ground floor. Could you bring the new price list? Thank you. Nour  _(40 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** the new time · the place · one thing to bring — one mark each.',
  '**Language (2):** _could_ for the request; a correct tense for the arrangement; a reason for the change.',
  '**Organisation and length (2):** greeting and name; 25 words or more.',
  '⚠ A message that moves a meeting and does not say **what it was before** is not wrong, but it is the commonest cause of two people in two rooms. Mention it in feedback even where it costs no mark.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 7', [
  '**1  _will_ for an arrangement.** _She will come at ten_ for something already in the diary. It is not ungrammatical, which is why it survives: it simply makes a certainty sound like a guess, and at work that costs trust. Correct it every time in 7.3 and let it go nowhere else.',
  '**2  The bare _I can\'t_.** 7.1 exists to replace _yes/no_ with _what exactly_. A learner who answers _can you cover the counter?_ with _no_ has given an answer that is both true and useless. Drill the shape: **what I can + the limit + who does the rest.**',
  '**3  The refusal with no alternative.** It appears first in Unit 2 as a politeness point and returns here as a business one. By 7.5 the test is harder: the alternative must be **better for the other person**, not merely easier for the speaker. Learners find this genuinely difficult and it is the most valuable half-hour in the unit.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 7 · Answer Key');
