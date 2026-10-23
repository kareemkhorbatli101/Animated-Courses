// Proactive Business English A2 · Syria Edition · Book 2 · Unit 18 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 18  Technology at Work'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Nothing in this unit requires you or the learners to understand how a computer works.** The technical words are here to be **said**, not used. If a learner knows more than you do about the systems, let them say so; the English is the lesson.',
  '⚠ **18.6 is about judgement, not language, and it is the one cycle worth over-running.** The rule is three steps and the permission paragraph is the operative part: people who get caught by these messages are the ones who did not want to look foolish. Say that in the room, and say it about yourself if you can.',
], C.grey, C.navy));

// ===================== 18.1 =====================
out.push(h2('18.1  Please find attached'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The gap between emails sent and emails answered the same day is usually large, and it is the cycle\'s argument.'));
out.push(p('**b**  _Invoice 0612 — wrong total, please reissue._ It names the thing and the ask. _URGENT!!!_ is opened last by everybody who gets more than ten emails a day.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the subject line and the ending)   **b**  1 It is the only part the reader sees before deciding when to open it.  2 The thing you want — the request goes last, then thanks, then the name.'));
out.push(p('**Language box – Practise (samples):**  1 _Order 0618 — two days late, confirm Tuesday part delivery?_  2 _Invoice 0612 — total wrong by 100,000, please reissue_  3 _Price request — 300 rolls wide wrap, by Thursday_  4 _Meeting moved to Thursday 10.00 — please confirm_  5 _Thank you — the Tuesday boxes arrived and the Homs order went out_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Can you read this before I send it? It is to Mr Haffar.'],
  ['B', 'The English is fine. The subject line says "Information".'],
  ['A', 'It is information.'],
  ['B', 'It is the only part he reads before deciding when to open it. Put the thing and the ask: "Order 0702 — two days late, part delivery Tuesday?"'],
  ['A', 'That is most of the email.'],
  ['B', 'Then he can answer from the subject line. And the end — three sentences of apology and no question. The last line is for the thing you want: do you want the part delivery on Tuesday?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the new subject line and say whether the email could be answered from it. Typical errors: _Please find attach_ · _I am writing for ask_ · _I attach you the invoice_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The email', 'My subject line', 'What I want, and by when'], [
  ['late order', 'Order 0702 — two days late, part delivery Tuesday?', 'a yes or no, today'],
  ['wrong invoice', 'Invoice 0612 — total wrong by 100,000, please reissue', 'a corrected invoice, by Thursday'],
  ['price', 'Price request — 300 rolls wide wrap, by Thursday', 'a price, by Thursday'],
], [1.2, 2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My subject line was: Invoice 0612 — total wrong by 100,000, please reissue. What I want is a corrected invoice by Thursday. My partner said they would open that one first because it says what it is and what to do."', 'Ask which subject line in the room would be opened **last**. It is always the one that does not say what it is about, and the writer is always surprised.']));
out.push(stage('5', 'Read'));
out.push(p('1 Version 1 has two facts (an order, something missing). Version 2 has seven or eight: the order number, the date received, the two missing lines with quantities, the five complete lines, the attachment, the request, the date.  2 It asks a question with a date on it — version 1 never asks for anything.  3 It is a deadline that works without a threat: the supplier knows what happens if she does not answer, and nothing in the sentence is unfriendly.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Statement for March and April — needed for the bank by 12 May', 'Dear Sir or Madam,', 'I am writing about the account in the name of Sham Trading Co., number ending 4471.', 'We need statements for March and April. We have the January and February ones.', 'Please find attached the signed request form.', 'Could you send them by 12 May? If they have not arrived by then I will come to the branch on the 13th with the form.', 'Thank you. Best regards, Nour Mansour · Sham Trading · 011 ___ ____']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A subject line with the thing and the ask', '✓'],
  ['One fact per line', '✓'],
  ['A request with a date', '✓ – by 12 May'],
  ['What the writer will do if nobody answers', '✓ – come on the 13th'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says the subject carries the thing and the ask, and yours carries the reason as well — _needed for the bank_ — which is better. The line I would look at is the account number: is _ending 4471_ enough for them to find it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the subject line and the last line. If the class cannot say what the email is about and what is wanted, the email is not finished — and that is the test, not the grammar.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I wrote to a shipping agent in February asking what had happened to a container and I had no answer at all. The subject line said "Enquiry". There was no reference number in it and no date anywhere in the email, and the question was in the fourth sentence. I waited eleven days and then telephoned, and the man found it in two minutes. What I would write now is: "Container ABCD 123456 — not arrived, please confirm location by Thursday", and I would put the one question in the last line.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the new subject line with the container number in it_   ✓ _no date in the original request._   ? _Why did you wait eleven days before telephoning?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the texts where a telephone call would have settled it in two minutes. Say the number aloud; it is the cycle\'s most useful finding and it comes from the class.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Old: "Subject: Question" and six sentences. New: "Subject: Wrap order 0618 — 20 rolls short, confirm by Thursday", four lines, one fact each, and the request last. The new one got an answer in forty minutes; the old one never got one at all.']));

// ===================== 18.2 =====================
out.push(pb());
out.push(h2('18.2  First open the order screen'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Count the steps; most people say five and produce nine when they write it down.'));
out.push(p('**b**  _Click the middle button._ An instruction is easier to follow than a description of what somebody does.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (five)   **b**  1 The screen puts today\'s date in, and the note may be yesterday\'s.  2 That _then_ hides a step — two actions get joined in one sentence and the second is forgotten.'));
out.push(p('**Language box – Practise (sample, locking up):**  "One: close the back gate. Two: bring the shutter fully down — not most of the way; the alarm will not set and nothing will tell you. Three: the two yard lights off. Four: set the alarm. Five: front door. Six: key in the box."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Tell me again how to lock up. You told me on Thursday and I got it wrong.'],
  ['B', 'I told you in a paragraph. Listen for the numbers.'],
  ['A', 'Go on.'],
  ['B', 'One: the back gate — the bolt, not just the latch. Two: the shutter, fully down. Three: the shutter must be down before the alarm, or the alarm will not set and nothing tells you.'],
  ['A', 'Three is the one I got wrong.'],
  ['B', 'Everybody gets three wrong. Four: the two yard lights. Five: the alarm, and wait for the two beeps. Six: front door, key in the box.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the steps and compare counts. A smaller number means a _then_ hid one. Typical errors: _you must to click_ · _after that you clicking_ · and the content fault of leaving the warning until the end, where it is read as a general remark.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What I taught', 'My steps', 'Their steps', 'What got merged'], [
  ['locking up', '6', '4', 'the shutter-before-alarm warning, and the two beeps'],
  ['goods in', '5', '5', 'nothing — they wrote the warning as its own line'],
], [1.3, 0.8, 0.8, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I taught locking up in six steps. They wrote four. The step that got merged was the warning about the shutter and the alarm, which is the only one that matters."', 'Count how often the merged step is the **warning**. It almost always is: a warning is not an action, and listeners writing quickly drop anything that is not an action.']));
out.push(stage('5', 'Read'));
out.push(p('1 The lorry icon against the box icon; the note number (D) against the customer number (C).  2 Nothing is saved and nothing tells you — a **silent** failure, which a new person cannot possibly work out alone.  3 Entering the delivery a second time and creating a duplicate that is much harder to remove.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**LOCKING UP — six steps**', '_Written by Hala, shown by Abu Yasser, 9 December. If this is wrong, correct it and put your name on it._', '**1** Back gate — the **bolt**, not just the latch (the latch can be lifted from outside).', '**2** Shutter **fully** down. Not most of the way.', '**3** The shutter must be down **before** you set the alarm. ⚠ **This is the one everybody gets wrong.** If it is not, the alarm will not set and nothing tells you.', '**4** Both yard lights off. The switch is inside the door, not by the gate.', '**5** Set the alarm and **wait for the two beeps** before you leave the room.', '**6** Front door, then the key in the box.', '_If the alarm beeps once and stops, do not leave. Go back to the shutter._']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every step an imperative', '✓'],
  ['A lookalike named', '✓ – bolt against latch'],
  ['The trap marked', '✓ – step 3'],
  ['A silent failure described', '✓ – the alarm that will not set'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says put the warning inside the step it belongs to, and step 3 does. The one I would look at is step 5 — _wait for the two beeps_ is an action and a warning in one line. Is one beep worth its own last line? You have put it there, so perhaps it is."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read step 3 — the trap — from several sheets. The class will recognise most of them from their own workplaces, which is the point.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['**Changing the till roll — four steps.** One: switch the machine off at the socket, not at the button; the button leaves the printer live. Two: lift the grey cover from the **back** edge, not the front — the front clip breaks and we have broken two. Three: the paper goes in with the loose end coming **towards** you, which is the opposite of what it looks like it should be. ⚠ This is the one everybody gets wrong. Four: close the cover until it clicks, then switch on. If it prints blank, the roll is the wrong way round; do not buy a new roll.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"do not buy a new roll" — somebody has done that_   ✓ _imperatives throughout._   ? _Where will this sheet live?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Decide as a class where such sheets should live. The answer is never "in an email"; it is usually taped to the thing itself, and that is worth saying.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Followed Fadi\'s goods-in sheet without asking anything. I stopped at step two: it says "the note number begins with D" and the note in my hand begins with DN. It is the same thing, and I did not know that.']));

// ===================== 18.3 =====================
out.push(pb());
out.push(h2('18.3  The system is down'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the second half is the interesting half: what carries on is usually more than people expect.'));
out.push(p('**b**  Slow = working badly · down = everything, everybody · frozen = one screen stuck · will not open = one thing · offline = no connection, other things still work.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (down for everybody — nothing opens on any of the four screens)   **b**  1 Restarting all four, twice; and the network light, which is red.  2 Taking orders on paper with date and time, promising no stock that has not been seen on the shelf, and telephoning the three customers expecting confirmations.'));
out.push(p('**Language box – Practise (sample, the card machine):**  "The card machine will not connect — not slow, not frozen; it will not connect at all. I have restarted it twice and tried the other socket. The provider says four hours. Until then we take cash, and there is a sign on the counter."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The card machine is not connecting. Not slow — it will not connect at all. Cash still works.'],
  ['B', 'Have you tried the other socket?'],
  ['A', 'Both sockets, and restarted twice. I have telephoned the provider and they say four hours.'],
  ['B', 'Then until two o\'clock we are a cash shop. Put a sign on the counter — not a small one.'],
  ['A', 'And the three customers who always pay by card?'],
  ['B', 'Telephone them now, before they come, not after they have queued. Tell them the truth and tell them when.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what the office **carries on doing**. Typical errors: _the system is downed_ · _it doesn\'t work since this morning_ (English wants the present perfect: _it has not worked since_) · and the content fault of using _down_ for one frozen screen.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What is not working', 'What I have tried', 'Who I told / when', 'What we do meanwhile'], [
  ['the whole system', 'restarted four screens twice', 'engineer, coming at 11', 'paper orders, dated and timed'],
  ['the card machine', 'both sockets, two restarts', 'provider, 4 hours', 'cash, a sign, telephone the card customers'],
  ['the main line', 'both handsets, warehouse socket', 'engineer, tomorrow a.m.', 'mobile number on a notice, checked every 20 min'],
], [1.2, 1.2, 1.2, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The main line is dead — not crackling, dead. I have tried both handsets and the socket in the warehouse. The engineer is coming tomorrow morning. Until then the mobile number is on a notice at the counter and somebody checks it every twenty minutes."', 'Ask which workplace could carry on longest without its computers. The answer is always a piece of paper somebody still keeps, and the person who keeps it is usually the oldest in the building.']));
out.push(stage('5', 'Read'));
out.push(p('1 Two of the four — _what we can still do_ and _what we will do_ — and the first of those is the first heading on the page.  2 Everything taken on paper goes on the system first, before anything else, and anybody who waited gets a telephone call before four.  3 Because every business says "a small technical problem" and no customer believes any of them; saying the opposite is the only thing left that is credible.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**OUR CARD MACHINE IS NOT WORKING TODAY**', 'It stopped at nine o\'clock. The provider says it will be back by two.', '**What we can still do:** take cash · hold goods for you until two and take the card then · give you a written note of the price · deliver anything already ordered.', '**What we cannot do:** take a card · give a card refund.', '**What we will do:** anything held for you is put aside with your name on it, and we will telephone you when the machine is back rather than make you come twice.', '**If you would rather come back:** we are open until seven and nothing held will be sold to anybody else.', 'We are sorry. It is not a small problem and we are not pretending it is.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What still works, first', '✓'],
  ['Two times', '✓ – nine o\'clock, by two'],
  ['The order of the recovery promised', '✓ – held with your name, we telephone'],
  ['No pretending it is small', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says promise the order of the recovery, and _we will telephone you rather than make you come twice_ is the line that keeps the customer. The one I would look at is _hold goods until two_ — what happens if it is not back by two?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we can still do" lists and ask which shop the class would stay in. The vote is never about the apology.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The morning the system was down we took sixty-one orders on paper, which is more than a normal morning, because word went round the market that we were still open and two other places were not. Everything carried on except prices: we could quote nothing we had not written down, so we quoted from last month\'s printed list and honoured it. What I would keep from that day is the printed list. It was two years old and it saved us, and it is the only thing in the building that cannot stop working.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"sixty-one orders, more than a normal morning"_   ✓ _down used correctly._   ? _Is the printed list still being printed?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask whether the paper version is still possible today. In about half the workplaces it is not, and nobody has noticed — which is the finding worth taking out of the cycle.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['One page for the morning everything stops: the printed price list is in the safe and is reprinted on the first of each month; orders go on numbered paper pads behind the counter; the engineer is 09__ ___ ___; nobody promises stock they have not seen.']));

// ===================== 18.4 =====================
out.push(pb());
out.push(h2('18.4  The book is slower and it is never down'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most workplaces have at least one job done both ways, and the argument about it is usually old.'));
out.push(p('**b**  Samples: _The book is slower than the screen. The screen is more searchable than the book. Neither is the whole answer._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (keep both)   **b**  1 It is never down, and it shows **what we did**, in order, with a signature.  2 That the two answer different questions, so "which one to keep" is the wrong question.'));
out.push(p('**Language box – Practise (sample, telephone and email):**  "Email is cheaper and it is a record. The telephone is faster and you hear whether the person means it. They answer different questions: email proves what was agreed, the telephone finds out what is actually happening."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The van or the service driver. I want to settle it.'],
  ['B', 'The service driver is cheaper for one or two items and he is there in two hours. The van costs us a whole morning for the same two items.'],
  ['C', 'The van is slower and our face is at the door. Three of the four customers who left last year said the same thing: they never see anybody.'],
  ['B', 'For two items?'],
  ['C', 'For the round. The service driver is for the emergency and the van is for the round. They answer different questions.'],
  ['A', 'Then both. The van keeps the round; the service driver takes anything urgent that is not on it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two different questions, or note that the group never reached them. Typical errors: _more faster_ · _neither are_ · and the content fault of comparing costs on one side only.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The two ways', 'What each is better at', 'The cost of each', 'The different questions'], [
  ['book / screen', 'never down / searchable', '11 min a day / 9 days once', 'what we did / what we have'],
  ['telephone / email', 'now, and you hear them / a record', 'interruption / a day of waiting', 'what is happening / what was agreed'],
], [1.2, 1.4, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The van is slower than a service driver and it is the only time the customer sees us. One costs a morning; the other costs 85,000 and a stranger at the door. They answer different questions: the van is the round, the service driver is the emergency."', 'Ask which pair in the room is still being argued about, and whether anybody has ever put the two costs side by side. Almost nobody has.']));
out.push(stage('5', 'Read'));
out.push(p('1 The screen shows **what we have**; the book shows **what we did**.  2 About forty-five hours a year, against being the only record once in nine years, for nine days.  3 The date of the review — December 2030 — and the bad argument that may not be used to reopen it.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Decision — the telephone and the written order, 12 December**', 'Both are kept. They do different jobs.', '**The telephone** is faster and you hear whether a customer means Tuesday or hopes for Tuesday. It answers: what is actually happening?', '**The written order** is slower by about four minutes an order. It answers: what exactly was agreed, and by whom?', '**The arithmetic.** Writing every telephone order up costs about three hours a week. In the last year, four disputes were settled by a written order and two were lost because there was not one. The two that were lost came to about 900,000.', '**What would change this.** If the system ever records calls, the written order can stop. I will look again when that happens and not before.', '**What is not a reason to reopen it:** that it is quicker not to.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What each one shows', '✓'],
  ['A cost on both sides', '✓ – three hours a week, 900,000'],
  ['A date (or a condition) for the review', '✓'],
  ['A bad argument named in advance', '✓ – "it is quicker not to"'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for a date for the review and yours is a condition instead — _when the system records calls_. That may be better, because it is the thing that would actually change the answer. Would you add a date as well, in case it never happens?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what is not a reason" lines. The class will recognise most of them, and naming a bad argument in writing is the only thing that kills it.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We take orders on the telephone and on a messaging app. The app is faster, it is free, and the customer has a copy. The telephone is slower and you hear the hesitation, which is where half the problems are. The app costs nothing and loses everything older than a few weeks because nobody saves it; the telephone costs four minutes an order in writing it up. I would keep both and I would write up the app orders too, because the thing we actually lose is not the medium, it is anything nobody wrote down.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"you hear the hesitation, which is where half the problems are"_   ✓ _a number on both sides._   ? _Who would have to agree to writing up the app orders?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the arguments that have already been had more than once. Those need a dated decision note, not another discussion, and saying so is the practical outcome of the cycle.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Put the two side by side for the manager: writing up telephone orders, three hours a week; two disputes lost last year for want of one, 900,000. He read it twice and said nobody had ever shown him the second number.']));

// ===================== 18.5 =====================
out.push(pb());
out.push(h2('18.5  It is in the shared folder, under Suppliers'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second question is the real one and the answer is often no.'));
out.push(p('**b**  _Prices_2026-03-14_Aleppo.xlsx_ — it has what it is, a date that sorts itself, and whose it is.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (four files with similar names)   **b**  1 What it is, then the date, then whose it is — and no _new_, _final_ or _use this one_.  2 In the shared folder, under Suppliers; never on one person\'s own computer, because a file on your computer does not exist on the day you are not there.'));
out.push(p('**Language box – Practise (samples):**  _Prices_2026-03-14_Aleppo_ · _StockCount_2026-02-28_Warehouse_ · _Letter_2026-01-09_Tarabishi_ · _Photo_2026-03-02_DamagedPallet_ · _Rota_2026-04_Counter_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Which of these is the real rota? There are five and they all look the same.'],
  ['B', 'Read me the names.'],
  ['A', '"rota", "rota new", "rota July", "rota july2" and "ROTA USE THIS".'],
  ['B', 'None of them is the real one, because only two have a month and none has a year. Open all five and look at the first week.'],
  ['A', 'Two are July and three have no dates at all.'],
  ['B', 'Then from today: Rota, underscore, the year and month, underscore, which team. _Rota_2026-07_Counter_. And it goes in the shared folder under Staff, not on your machine.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write one corrected file name with the date in year-month-day order. Typical errors: _on the folder_ · _in my computer_ (English says **on** a computer) · a date written 14-03-2026, which does not sort.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The old name', 'The new name', 'Where it goes'], [
  ['prices new 2', 'Prices_2026-03-14_Aleppo', 'shared folder / Suppliers'],
  ['ROTA USE THIS', 'Rota_2026-07_Counter', 'shared folder / Staff'],
  ['count ok', 'StockCount_2026-02-28_Warehouse', 'shared folder / Stock'],
  ['photo 3', 'Photo_2026-03-02_DamagedPallet', 'shared folder / Customers'],
], [1.3, 2, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It was called ROTA USE THIS. Now it is Rota_2026-07_Counter and it is in the shared folder, under Staff."', 'Count the files in the room that live on one person\'s own computer, and ask what happens to each if that person is ill for a week. The list is always longer than the room expects.']));
out.push(stage('5', 'Read'));
out.push(p('1 Six; a file that does not fit goes in the nearest and you tell Nadia.  2 It goes into **Old** with the same name and is not deleted — twice this year a price list from three versions back was needed.  3 _Do not make a second file. Ask._ Every mess of this kind was made by somebody who could not find something and solved it privately.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**WHERE THINGS ARE KEPT**', 'Everything that more than one person needs goes in the shared folder. Nothing that more than one person needs lives on anybody\'s own machine or telephone.', '**Folders:** Customers · Suppliers · Stock · Staff · Old. Nothing else.', '**Names:** WhatItIs_YYYY-MM-DD_Whose. For example: **PriceList_2026-03-01_Shop** · **Complaint_2026-02-14_Haffar**.', '**Forbidden in a file name:** new · final · FINAL · latest · copy · use this one · and your own name by itself.', '**When a file is replaced:** the old one goes into Old with the same name. It is not deleted.', '**Who to ask:** Rana first, then me. Do not make a second file — that is how we came to have five rotas.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Folders listed, and no others', '✓ – five'],
  ['Two real example names with dates', '✓'],
  ['A list of forbidden words', '✓'],
  ['Who to ask, and "do not make a second file"', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says give real examples and yours are real. The rule I would look at is the telephone — you have included it in the first line, which most pages forget, and it is where the photographs live."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Collect the forbidden words from every pair onto the board. The combined list is always longer and funnier than any one of them, and it is the thing the class remembers.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Nobody can find the lease for the yard. There are three versions: one scanned on the office machine, one photographed on the manager\'s telephone, and the paper one which is either in the safe or at the accountant\'s. Last year we needed it for an insurance question and spent two days looking, and in the end used the photograph, which is missing a page. One page would fix it: where the paper original lives, where the scan lives, what it is called, and who to ask. It would take twenty minutes and has not been done in nine years.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the photograph, which is missing a page"_   ✓ _in / on / under correct._   ? _Could you write the one page this week?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask who will write their workplace\'s one page before the next lesson. It takes about twenty minutes; one or two usually do, and they bring it in.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Renamed five files and moved them into one folder: twenty-five minutes, including finding out that two of them were the same document and one was two years old. Two more are on a colleague\'s machine and I have asked for them.']));

// ===================== 18.6 =====================
out.push(pb());
out.push(h2('18.6  Do not click it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and handle it carefully: somebody in the room has probably been caught, and the cycle\'s point is that it is not a character fault. If nobody speaks, say that it has happened to large companies with whole departments for it.'));
out.push(p('**b**  _Do not click it_ is the rule. The other two are advice, and advice leaves a decision with somebody who is in a hurry.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (a payment to a new account, not expected)   **b**  1 Do not act on it; telephone the supplier on the number from our own file; tell Nadia whatever the answer is.  2 Stupid for asking — and she says the ones who get caught are the people who did not want to look as though they did not know.'));
out.push(p('**Language box – Practise (samples):**  _Never pay a new account from an email alone — telephone the number in our file and tell the office. · Never give a password to anybody who telephones you, even if they know your name. · Never open an attachment you were not expecting; ask the sender on a number you already had._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'There is a message that looks like it is from Mr Ayoub, sent at half past six, asking me to make a payment before the morning. It says he is in a meeting and cannot take calls.'],
  ['B', 'Do not pay it. Do not reply to it. Do not click anything in it.'],
  ['A', 'It is exactly how he writes.'],
  ['B', 'They always are. Three things. One: do not act. Two: telephone him on his own number — the one in your telephone, not a number in the message — and if he does not answer, telephone me. Three: tell me either way.'],
  ['A', 'And if it is really him?'],
  ['B', 'Then he will be mildly annoyed for ten seconds and will tell everybody about it for a week as a good thing. There is no version of this where telephoning is wrong.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **second** step — the channel checked by. If the number came from the message, the whole procedure failed, and that is the single most important thing in the cycle. Typical errors: _don\'t to click_ · _never not pay_ · advice forms where a rule is needed.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The situation', 'The rule', 'Who I would check with, and how'], [
  ['a supplier\'s new bank account', 'Never pay a new account from an email alone.', 'the supplier, on the number in the Suppliers folder'],
  ['a password request', 'Never give a password to anybody, by any channel.', 'the office; the system company never asks'],
  ['an urgent transfer from "the manager"', 'Never move money on a message alone.', 'his own number from my telephone; then the accountant'],
], [1.3, 1.5, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"If a supplier emails a new bank account, the rule is: do not pay. Then telephone her on the number in our Suppliers folder, and tell Nadia whatever she says."', 'Ask whether their workplace has ever said any of this out loud. In most, the rule exists only in two people\'s heads, and those two are not the ones who open the post.']));
out.push(stage('5', 'Read'));
out.push(p('1 Five: do not act, do not pay, do not reply, do not click, do not open an unexpected attachment.  2 The name, the logo and the writing style are **not** evidence; a telephone call to a number you already had **is**.  3 So that the person at the next desk learns the rule by hearing it used — a quiet question teaches nobody.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**IF A MESSAGE ASKS FOR MONEY, A PASSWORD OR A CLICK AND YOU WERE NOT EXPECTING IT**', '**Do not act on it.** Do not pay. Do not reply. Do not click. Do not open the attachment.', '**Check by a number we already have.** Telephone the person on the number in our own file — never a number in the message. If it is somebody in this building, walk to their desk.', '**Tell Rana, whatever the answer is.** Including when it is genuine. We want to know what is being sent to us.', '**It will look real.** The name and the way they write will be right. That is not evidence. The only evidence is a call to a number we already had.', '**Nobody will ever be criticised for asking,** or for a delay caused by checking. A payment can wait an hour; the other thing cannot be undone. Ask loudly.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Negative imperatives, short', '✓'],
  ['A named channel to check by', '✓ – our own file; walk to the desk'],
  ['Tell somebody, including when genuine', '✓'],
  ['Nobody is criticised for asking', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says the permission paragraph is the operative part, and yours ends with _ask loudly_, which is the whole thing in two words. The line I would look at is _walk to their desk_ — it is the best instruction on the page and it is in brackets, effectively. Give it its own line?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the permission paragraphs and ask whose workplace the class would feel safest asking in. It is not a soft question: it predicts exactly which of these workplaces this will happen to.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A man telephoned the counter last year and said he was from the company that services the shutter. He knew the make, he knew when it was last serviced, and he asked for the account number so he could "raise the job". Nothing about him was wrong except that nobody had telephoned him. Rana said she would call him back on the number on our invoice, and he said that was not necessary, twice, and then put the telephone down. What gave it away was not him. It was that she said she would telephone back.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"What gave it away was not him. It was that she said she would telephone back."_   ✓ _the rule is in negative imperatives._   ? _Is that rule written down anywhere?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many workplaces have the rule written down, and then ask who will write it this week. This is the one cycle in the book where a piece of homework has prevented a loss.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Our main supplier\'s real number is on the invoice and in the Suppliers folder, and both agree. The manager\'s is in my telephone. The bank\'s is on the back of the card and not in any email we have ever received.']));

// ===================== 18.7 =====================
out.push(pb());
out.push(h2('18.7  Review & Mediate: the IT notice'));
out.push(stage('1', 'Get ready – Unit 18 quiz'));
out.push(p('**1** The thing and the ask.  **2** Because it joins two actions in one sentence and the second one is forgotten — numbers make that impossible.  **3** _It is down_ — the whole system, for everybody.  **4** It has no date, and _final_ was true on the day it was written and false a month later.  **5** Do not act · check by a channel you already had · tell somebody, whatever the answer.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (that he has done something wrong)   **b**  1 Transfer the photograph to the shared folder the same day and delete it from the telephone.  2 The second sentence — the one that begins _where a photograph or note is taken on a personal device_.'));
out.push(p('**Language box – Practise (sample):**  "The first sentence says where documents live. The next one says what to do about photographs: transfer them the same day, then delete them. Nobody is telling you to stop photographing labels. The only thing it asks of you is the transfer, and I will show you in ten minutes."'));
out.push(stage('3', 'Practise – sample with notice 1'));
out.push(dlg(null, [
  ['B', 'The whole warehouse uses one login and it is written on the wall. It says passwords must not be written down.'],
  ['A', 'Read me the next sentence.'],
  ['B', '"Where a shared system is used by more than one member of staff, a single account must not be used; individual accounts are to be requested from the office and may be issued the same day."'],
  ['A', 'So the notice is not about the wall. It is about the one login. It says the office will give each of you your own, the same day you ask.'],
  ['B', 'Nobody has ever told us that.'],
  ['A', 'It is in the second half of a long sentence, which is where it always is. The only thing it asks of you is to ask the office. I will come with you at eleven.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that **allowed** something. Every notice of this kind has one and it is never the first sentence, which is the transferable finding of the whole cycle.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they thought it said', 'The sentence that allowed it'], [
  ['Fadi', 'that his photographs were forbidden', '"where a photograph is taken on a personal device, it must be transferred the same day"'],
  ['the warehouse', 'that they were in trouble over the wall', '"individual accounts … may be issued the same day"'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s an IT notice. He read _local storage is not permitted_ and stopped. The next sentence allows photographs if they are moved the same day. The only thing it asks of him is the transfer — and we did one together in ten minutes and he wrote the steps."', '⚠ **The ordinal.** This is the **sixth** unit of Book 2, the last before the Mid-Book Test. The unwritten thing this time is structural: in a technical notice the exception lives in the second sentence, never in the heading — and almost nobody reads that far.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _shared drive · back-up · local storage · permitted · device · transferred_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'A', '_Please find attached_ means it is with this email.'],
  ['2', 'B', 'Wait for the line, **then** close — the negative imperative gives the order.'],
  ['3', 'B', '_Down_ = everything; and a time is given for help.'],
  ['4', 'A', '_Outside the shared folder_ includes your own computer.'],
  ['5', 'A', '_Never … from an email alone_ means check another way first.'],
  ['6', 'B', 'The exception: allowed, if transferred the same day.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (30 words)'));
out.push(sample(null, ['Hi Rana, the system is down until eleven. It means no prices and no card payments this morning. Please take orders on paper with the time on them, and tell customers the truth.']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: what has happened ✓ · what it means for them ✓ · an instruction with a time ✓. Thirty words. ⚠ The commonest fault is a technical word doing the work of an instruction — _the server is offline_ tells a colleague nothing about what to do next.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Everything more than one person needs goes in the shared folder, named what it is, then the date as year-month-day, then whose it is. Nothing lives on one machine or one telephone. If something stops working, say which of the five words it is — slow, frozen, will not open, offline or down — say what you have tried, and say who you have told and when. And if a message asks for money, a password or a click and you were not expecting it: do not act, telephone a number we already had, and tell somebody. Ask loudly.']));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Put the file-naming page on the wall by the printer. The first person who read it was Fadi, who said "so the photographs are allowed" — which is not what the page is about, and is what he needed to know.']));
out.push(pb());
out.push(stage('✓', 'Unit 18 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'b', 'b', 'a', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** The phrase is fixed: _please find attached_.  **2** _writing **to** ask_.  **3** An instruction takes the bare imperative.  **4** The negative imperative is _do not_ + verb.  **5** Nothing works anywhere, so _down_.  **6** _under_ a sub-folder.  **7** _slower **than**_.  **8** _Neither_ takes a singular verb.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['1', '2', '3', '4', '5'], [[
  'open Deliveries — the lorry icon', 'enter the note number (not the customer number)', 'check the date', 'enter the items actually delivered', 'save with the middle button; wait for the green line',
]], [1.3, 1.5, 0.9, 1.4, 1.6]));
out.push(note('Accept note form. The mark for step 3 requires the date; "check" alone earns nothing, and step 3 is the trap in the recording.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (46 words)', ['**Subject:** Order 0618 — two items missing, please confirm by Thursday', 'Dear Ms Shamsi, I am writing about order 0618, received Tuesday. Two lines are missing: 20 rolls of wrap and 4 boxes of tape. The other five are correct. Could you confirm by Thursday? Best regards, Hala']));
out.push(box('Marking the Unit 18 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per step, note form accepted.'],
    ['**C Writing**', '7', 'A subject line with **the thing and the ask** (2) · facts one per line (2) · a request **with a date** (2) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The subject line is worth two marks on its own. _Order_ or _Question_ scores nothing; the line must name the thing and say what is wanted.',
  '⚠ Do not take marks off for an invented order number or supplier. Do take one off a request with no date in it: that is the fault the whole cycle exists to fix.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 18**'));
out.push(p('**1 The missing instruction form.** _You should click_ · _you must to click_ · _clicking the button_. The bare imperative is unusual for learners because it feels rude in translation. Say plainly that in instructions it is not rude in English; it is the only form that is clear.'));
out.push(p('**2 The wrong size of failure.** _The system is down_ for one frozen screen. It is a vocabulary fault with a cost — it sends an engineer — and the five-word ladder in the Language box is the fastest fix. Drill it with real examples from their own workplaces.'));
out.push(p('**3 The date in a file name.** Learners write 14-03-2026 because that is how they write dates. The year-first form is the one technical habit this book asks for, and the argument is not national but practical: it sorts itself. Show them a folder sorted both ways and the argument is over in ten seconds.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 18 · Answer Key');
