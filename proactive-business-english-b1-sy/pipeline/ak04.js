// Proactive Business English B1 · Syria Edition · Book 1 · Unit 4 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 4  Experience and Evidence'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit is marked on numbers, not on tenses.** A learner can form the present perfect perfectly and still write a worthless claim. *I have dealt with suppliers* is correct English and says nothing; *I have opened two accounts and renegotiated one price* is the same tense doing work. **Mark the number first and the form second**, and say so to the class before they write.',
  '⚠ **The two uncomfortable cycles are 4.1 and 4.6**, and for opposite reasons. 4.1 asks learners to put numbers on their own work, which many have never done and some find boastful. 4.6 asks them to say *no* out loud, which many have been taught never to do in front of a customer. Both will produce resistance; both are answered by the same evidence, which is that the honest version is believed and the vague version is discounted.',
  '⚠ **One thing to watch in 4.4.** The cycle teaches learners to chase without accusing. Some will hear that as *be softer*, which is the opposite of the point: the third chaser in 4.4 is harder than the angry one, because it has three dates in it.',
], C.grey, C.navy));

// ===================== 4.1 =====================
out.push(h2('4.1  What I have done'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second instruction is the work: most learners can name three things and stall completely on the numbers, and the stall is the lesson.'));
out.push(p('**b**  The second. The first is true of everybody who has answered a telephone; the second can be checked, disbelieved, and therefore believed.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because it cannot be checked: *run the office* could be nineteen people and two sites or one desk.  2 That it should go back in — *I have closed a branch* is rarer and harder than opening one — and that she must not claim the **decision**, which was his.'));
out.push(p('**Language box – Practise (samples):**  1 _I have run the administration for two sites and nineteen staff since June._  2 _I have opened two supplier accounts and renegotiated one price._  3 _I have introduced a gate count that has found three errors this year._  4 _I have covered the second site every Saturday since June._  5 _I did the paperwork for closing the Homs branch; I did not decide it._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The form asks what I have done. "I have driven for the company."'],
  ['B', 'How many years, how many vehicles, and how many drops?'],
  ['A', 'Nine years, two vehicles, about a hundred and eighty drops a month.'],
  ['B', 'Then write that. And what has never happened in nine years?'],
  ['A', '…I have never had a claim.'],
  ['B', 'That is the line. Nine years, no claim. What have you taken out?'],
  ['A', 'That I trained two of the drivers. It is not really driving.'],
  ['B', 'Put it back. Anybody can drive; the company has two drivers because of you.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the numbers and say which did most work. **Typical errors:** _I have run the office since two years_ · _I am working here since 2017_ (the present simple with *since*, correct in Arabic and in French and wrong here) · _I have been run the administration_ · and the content fault, which is a claim with a strong verb and no figure.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The claim, with its number', 'How it could be checked'], [
  ['I have run the administration for two sites and 19 staff since June.', 'the staff list and the June date'],
  ['I have opened two supplier accounts and renegotiated one price.', 'the account files; Ms Shamsi\'s own ledger'],
  ['I have written nine one-page procedures this year.', 'they are on the office wall'],
  ['I have covered the Baghdad Street counter every Saturday since June.', 'the till rolls'],
  ['I did the paperwork for closing a branch — I did not decide it.', 'Mr Ayoub'],
], [2.4, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I have covered the Baghdad Street counter every Saturday since June. It could be checked from the till rolls. The line I was going to leave out is the branch closing, because it felt like the opposite of an achievement."', '⚠ Count the claims in the room with no number. In most classes it is more than half at the first attempt and almost none at the second, which is the fastest visible improvement in Book 1.']));
out.push(stage('5', 'Read'));
out.push(p('1 Most of them: the 1998 date, the four hundred customers, the 61 added and 14 lost, the two sites and the 8 June date, the three errors found, the fourteen days. Several are checkable **against the other party\'s own records**, which is the strongest kind.  2 That they are not a secret and the company will say why about any of them if asked.  3 Three named gaps — no exporting, no letter of credit, no contract over a year — and the page says they are there because the reader will find them out anyway, and because a company that names them is telling you something about the rest of the page.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**NASSIF BROTHERS — what we have actually done.**',
  '**Trading.** We have made metal boxes and shelving in Damascus since 1974 and have traded in every year since, including 2013, when we worked four months on a generator.',
  '**Scale.** About ninety trade customers. We have **added** nineteen and **lost** seven in three years. Of the seven, four closed and three went to a cheaper supplier; we will say which if you ask.',
  '**What we have introduced.** A gate count against the delivery note, signed by name, since 2019 — it has found eleven errors. A written price held twenty-one days, since 2024. Both cost us time and we have kept them.',
  '**What we have not done.** We have **never** worked to a drawing we did not make ourselves. We have **not** supplied anything that has to be certified. We have no experience of a penalty clause and would not sign one without reading it with somebody who does.',
  '⚠ The last paragraph is here because the third item is the one that would matter on your order, and you would find it out at the quotation stage.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number or a date on every claim', '✓'],
  ['Numbers both ways', '✓ – added 19, lost 7, and why'],
  ['One thing kept that cost something', '✓ – the gate count and the price term'],
  ['Three named gaps', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says make one claim out of something you kept that cost you, and the gate count does it with a figure — eleven errors. The line I would look at is *we worked four months on a generator* in 2013: that is the best sentence on the page and it is in the paragraph about trading, where it reads as a detail. Is that where you want it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we have not done" paragraphs and ask which statement the class would believe most. It is always one of these, every time, and the class notices the pattern before the teacher names it.'));
out.push(stage('7', 'Write freely – sample (≈136 words)'));
out.push(sample(null, ['I have worked at Sham Trading for two years and four months. I have run the administration for two sites and nineteen staff since June, and before that one site for twenty months. I have written nine one-page procedures, all nine corrected by somebody who had never done the job described. I have opened two supplier accounts, renegotiated one price, and introduced a gate count against the order which has found three errors in a year. I have covered the Baghdad Street counter every Saturday since it opened on 8 June. I have also done the paperwork for closing a branch, which I did not decide and would not claim to have decided. What I have never done is export anything, see a letter of credit, or sign a contract longer than one year.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"all nine corrected by somebody who had never done the job"_   ✓ _present perfect for the record._   ? _What did you leave out?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Ask what was left out, and expect the best line of the three texts to be in the answers. It is almost always something that went badly and was dealt with — a branch closed, a customer lost and won back, a mistake found by the writer themselves.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Four lines of my CV have numbers. Three do not, and all three are the ones I would have called my strengths: *excellent communication*, *strong organisational skills*, *works well under pressure*. I cannot put a number on any of them and I am going to take all three out.']));

// ===================== 4.2 =====================
out.push(pb());
out.push(h2('4.2  What I have been doing'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second half is harder to name than the first, which is itself worth noticing: unfinished work is less visible to the person doing it.'));
out.push(p('**b**  The first says they are written and done; the second says the writing is still going on. Both are correct English and only one of them is true at any given moment.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That there is work in progress **and what shape it is** — three rooms of four, and which room is left.  2 Because the continuous makes the whole of it sound unfinished, including the four procedures that are done and on the wall.'));
out.push(p('**Language box – Practise (samples):**  1 _I have written four procedures_ (finished) / _I have been writing procedures_ (loses the four).  2 _I have been moving the stock records since August; three rooms of four._  3 _I have been covering both sites since June._  4 _I have renegotiated one price_ (finished) / _I have been negotiating with two suppliers_ (both live).  5 _I have been training Hala on the stock screen; she can enter and cannot yet correct._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'For the report: "I have trained Hala on the stock screen."'],
  ['B', 'Have you? Everything?'],
  ['A', 'Two sessions. She can enter and she cannot correct.'],
  ['B', 'Then you have not trained her; you **have been training** her. And what is left?'],
  ['A', 'Corrections, and the quarter-end, which is the only part that is difficult.'],
  ['B', 'Then say that. *I have been training Hala; she can enter and not correct, and the quarter-end has not been tried.*'],
  ['A', 'It sounds less impressive.'],
  ['B', 'It sounds accurate, and it tells him not to put her on the quarter-end in December.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the shape and say whether what is left is the easy or the hard half. **Typical errors:** _I am moving them since June_ · _I have been written four procedures_ · _I have been moving three rooms_ (the continuous with a completed count) · and the content fault, which is a continuous with no shape attached, which says only *not finished*.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['The work', 'Tense, and why', 'The shape', 'Is the rest the hard part?'], [
  ['procedures', 'simple — four are finished', '4 written, 5 to write', 'no, but they need Saturdays'],
  ['stock records', 'continuous — in progress', '3 rooms of 4, the 4th is the biggest', 'yes — about half the work is left'],
  ['training Hala', 'continuous — she can enter, not correct', 'entry done; corrections and quarter-end not', 'yes, and it is the only part that matters'],
  ['Homs figures', 'continuous and stuck', '6 months of 24 found', 'the rest may not exist'],
], [1.1, 1.3, 1.5, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I have been moving the stock records since August. Three rooms of four are entered. What is left is the wrap room, which is the hard part because it holds more lines than the other three together."', '⚠ Write down anybody who used the simple for something unfinished. It is the commonest fault in a real progress report and it is always discovered — usually by the person who relied on it.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the fourth store room holds more lines than the other three together, so three of four rooms is about half the work. ⚠ A reader who later discovers that has been misled by a true sentence.  2 Looking for the Homs figures: *I do not think the rest exist and I would like to stop looking.*  3 The Saturday cover — four hours a week — is the reason the fourth store room is not entered; the unlisted work explains the late work, and the reader could not have done that arithmetic.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**WORKSHOP ADMINISTRATION — where I am, 31 October**',
  '**Finished, and countable.** I **have priced** all ninety standard shelving sizes and the list is printed and on the wall.',
  '**In progress, with its shape.** I **have been drawing** the standard sizes properly since August — eleven of ninety are drawn. ⚠ The eleven are the ones we make weekly, so by value the work is about a third done and by count it is a tenth. Either figure is honest and the third is the useful one.',
  '**In progress, and stuck.** I **have been trying** to get the 1996 lease out of the landlord\'s agent since July. I have had three promises and nothing. I would like to stop asking and get a certified copy from the registry instead, which costs about 40,000.',
  '**Not started.** The drawings for the made-to-order work, which is where the arguments come from. Nothing exists and only Bassel knows the dimensions.',
  '**What I have been doing that is not on any list.** Answering the workshop telephone, because the office and the workshop share a line. It is perhaps an hour a day and it is why the drawings go slowly.',
  '⚠ **One ask.** Either a second line, or the drawings are a January job. Both are acceptable; drifting is not.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Finished work in the simple, counted', '✓'],
  ['In-progress work with its real shape', '✓ – a third by value, a tenth by count'],
  ['Something stuck, with permission asked', '✓ – stop asking, buy the copy'],
  ['Unlisted work connected to what is late, and one choice', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says correct the arithmetic of your own progress, and yours gives two figures and says which is useful — that is better than the box asks for. The line I would look at is the stuck one: you want to spend 40,000 to stop asking. Is that your decision or his?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "stuck" paragraphs and ask which the class would give permission to stop. ⚠ Then ask how long each has been stuck. The answer is usually months, and nobody has ever asked.'));
out.push(stage('7', 'Write freely – sample (≈134 words)'));
out.push(sample(null, ['I have been trying to get our vehicle insurance onto one policy for about fourteen months. Three vehicles, three policies, three renewal dates, and a different broker for the van because it was bought from somebody who had already insured it. I have the quotations. What I do not have is the registration document for the small van, which was never transferred properly when we bought it in 2021, and nothing can be done until it is. I have written to the previous owner twice and he has moved. What would finish it is a declaration in front of a lawyer, which costs about 90,000 and takes an afternoon, and which I have not done because every month I think the document will turn up. It has not turned up for fourteen months.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"every month I think the document will turn up"_   ✓ _simple for finished, continuous for in progress._   ? _What would actually finish it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most of these the thing that would finish it is **somebody else\'s decision or a small sum of money**, and in most it has never been asked for. That is the finding, and it is the argument for the one-ask line in stage 6.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['Gave Mr Ayoub the five-heading note. He read the unlisted-work paragraph twice and asked how long the Saturdays had been four hours. Then he said Hala can take two Saturdays a month from December, which I have been wanting to ask for since August and never did.']));

// ===================== 4.3 =====================
out.push(pb());
out.push(h2('4.3  For nine years, since 2017'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Both forms, aloud, is the drill; the span itself is usually known to the year.'));
out.push(p('**b**  Right: _for eleven years_ and _It is eleven years since we changed supplier_ (past simple after *since*). Wrong: _since eleven years_ and _we buy from her since 2014_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Eleven years and since 2014.  2 *Never once late with a payment* — the qualifier that says what kind of eleven years they were, and which the supplier can check in her own ledger.'));
out.push(p('**Language box – Practise (samples):**  1 _We have bought from her for eleven years, since 2014, and never once been late._  2 _He has been a customer for nineteen years and has never asked for credit._  3 _Abu Yasser has been here since 1998 and has never signed a note he had not counted._  4 _The account has been at that branch since 1998 and has never been overdrawn._  5 _We have held prices in writing for fourteen days since April 2025 and have never withdrawn one._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The letter to the bank about the limit. What do I lead with?'],
  ['B', 'What is the strongest thing we have?'],
  ['A', 'The second store and the growth?'],
  ['B', 'Every applicant has growth. What is the strongest **fact**?'],
  ['A', '…The account has been at that branch since 1998.'],
  ['B', 'Twenty-eight years, and never once overdrawn. That is the letter.'],
  ['A', 'They must know that.'],
  ['B', 'The branch has thousands of accounts and the officer is new. Nobody knows it unless we write it, and they can check it in four minutes.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the span and the qualifier, and say whether the other side could check it. **Typical errors:** _since eleven years_ · _it is eleven years since we have changed_ (needs the past simple) · _we are customers since 2014_ · and the content fault, which is a span with no qualifier — which says only that you have not left.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who', 'For… / since…', 'The qualifier', 'Do they know?'], [
  ['Ms Shamsi, boxes', '11 years, since 2014', 'never once late with a payment', 'no'],
  ['the Mezzeh branch', '28 years, since 1998', 'never overdrawn', 'the officer is new — no'],
  ['Mr Tarabishi', '19 years', 'has never asked for credit', 'probably not'],
  ['Abu Yasser', '28 years, since 1998', 'has never signed an uncounted note', 'he knows; nobody has said it'],
], [1, 1.3, 1.6, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(p('⚠ Write down every relationship where the other side does not know the span. Each one is a letter nobody has written, and in most classes there are four or five in the room. It is the cheapest piece of homework in Book 1.'));
out.push(stage('5', 'Read'));
out.push(p('1 An invitation to check it: *your own ledger will show it, and I would rather you checked it than took my word.*  2 Not a lower price — **a longer one**: the price held six months instead of three, in exchange for the year\'s order in two deliveries rather than six.  3 That she has never had to chase them, carry them, or put them on stop.'));
out.push(stage('6', 'Write with help – sample (140 words)'));
out.push(sample(null, [
  '**Subject:** The limit on 4471 — and twenty-eight years of ledger',
  'Dear Mr Haddad,',
  'Our account has been at this branch **since 1998 — twenty-eight years** — and in that time it has **never once** been overdrawn. Your own records will show it and I would rather you looked than took my word for it.',
  'I am writing about the overdraft limit, and I am going to put our case at its weakest, because the strong version is not true.',
  '**What is true.** We have asked twice before, in 2021 and 2023, and were refused both times. Nothing has been drawn on the present limit for nineteen months.',
  '**What is also true.** Our turnover is seasonal and a limit is of most use to us in exactly the quarter when it is of most risk to you.',
  '**What we are asking.** Not a larger limit. **A seasonal one** — the present figure for nine months of the year and double it for the second quarter only, reviewed each year.',
  '**Why we think you might.** It is twenty-eight years since the account was opened and you have never had to telephone us about it once. That is worth something to a branch that a new customer at a better margin is not.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The span and qualifier in the first sentence', '✓'],
  ['An invitation to check', '✓'],
  ['Their case conceded', '✓ – the risk is in the same quarter'],
  ['An ask that is not simply more money', '✓ – seasonal, not larger'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says concede their case before they make it, and the seasonal sentence does it honestly — you have named the quarter that worries them. The line I would ask about is *we have asked twice and were refused*: that is brave and it is also the only sentence here that argues against you. Did you want it that early?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the asks and ask the class to grant or refuse them as the supplier or the bank. ⚠ The asks that get granted are the ones that cost the other side **something other than money** — a term, a notice period, an order pattern.'));
out.push(stage('7', 'Write freely – sample (≈132 words)'));
out.push(sample(null, ['The longest relationship we have is with a carton maker in Aleppo, which my employer\'s father opened in 1989 — thirty-seven years. In that time we have never had a written contract with them, never had a price in writing until 2024, and never had a dispute that took more than one telephone call. They have carried us twice, once for four months in 2013. Nobody on either side has ever written any of that down, and both of the men who started it are dead. I am fairly sure that if I wrote them a letter saying *thirty-seven years and you have carried us twice* it would be read out loud in their office. I have not written it, and the only reason is that it has never occurred to anybody that it was a thing you could say.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"it has never occurred to anybody that it was a thing you could say"_   ✓ _for and since correct._   ? _Will you write it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask whether anybody has ever told the other side the span. Almost none have. ⚠ Then ask what it would cost to write it — four sentences — and let the room answer that for itself.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['Sent: *Dear Ms Shamsi, we have bought boxes from you for eleven years, since March 2014, and have never once been late with a payment; your ledger will show it.* She telephoned, which she has not done in two years, and asked who had worked it out.']));

// ===================== 4.4 =====================
out.push(pb());
out.push(h2('4.4  We have not received it yet'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the instruction to listen for the edge is the exercise. Most third chasers have one and the writer cannot hear it.'));
out.push(p('**b**  Least to most accusing: _It has not arrived._ → _We have not received it._ → _You have not sent it._ → _You still have not sent it._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — the subject of the sentence.  **b**  1 Because the fact is identical and nobody is accused, so the answer is a form rather than a defence.  2 The **record** — the dates: asked on the 12th, again on the 19th, and as at today the 26th.'));
out.push(p('**Language box – Practise (sample third chasers):**  _"We asked on the 12th and again on the 19th; as at today, the 26th, the credit form has not reached us."_ ⚠ Every verb\'s subject is *we* or *the form*; the word *you* does not appear.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Third time about the 640,000. I have written "You have not paid us."'],
  ['B', 'True, and it will cost us a month. Change the subject of the sentence.'],
  ['A', 'To the money?'],
  ['B', 'To the payment. *Payment has not reached us.* Then the record: invoiced 2 August, reminded 1 September, reminded 1 October, and as at today, the 14th.'],
  ['A', 'That is harder than what I wrote.'],
  ['B', 'Much harder, and it can be forwarded to his accountant without embarrassing him, which is how it will actually get paid.'],
  ['A', 'And if there is a fourth?'],
  ['B', 'The fourth goes to somebody else and says so plainly — ⚠ but not in this one.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the new sentence and the dates, and say whether it could be forwarded. **Typical errors:** _we did not receive it yet_ (past simple with *yet*) · _we are waiting since the 12th_ · _it is not arrived_ · and the content fault, which is a chaser that also threatens, and is answered by a defence of the delay.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['What I am waiting for', 'First', 'Second', 'Third, with the record'], [
  ['the credit form', 'Could you send the credit form?', 'We have not yet received the credit form.', 'Asked 12 and 19 Oct; as at today, 26 Oct, not received. One order, 40 boxes, standing since the 15th.'],
  ['640,000', 'Invoice 3318 is due on the 2nd.', 'Payment has not reached us.', 'Invoiced 2 Aug; reminded 1 Sept and 1 Oct; as at 14 Oct, not received.'],
  ['a signature', 'Could you sign the variation?', 'The signed variation has not reached us.', 'Asked in person twice and in writing once — nothing in writing from us until today, which is ours.'],
], [1.1, 1.2, 1.2, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(p('The class listens only for an accusation and names the word that did it. ⚠ Then write down the dates in each third chaser: a third chaser with no dates is a first chaser sent three times, and about half of them are.'));
out.push(stage('5', 'Read'));
out.push(p('1 The whole record — *asked 12 and 19 October; as at today, 26 October, not received* — because the subject line is the only part certain to be read.  2 A photograph of the signed form, on a telephone, with the paper original to follow.  3 Not telephoning on the 15th when the order was packed: *that is four days of this that are mine.*'));
out.push(stage('6', 'Write with help – sample (138 words)'));
out.push(sample(null, [
  '**Subject:** Invoice 3318, 640,000 — invoiced 2 Aug, reminded 1 Sep and 1 Oct; as at 14 Oct, not received',
  'Dear Mr Haffar,',
  'Payment of invoice 3318 has not yet reached us. **The record, so that we are both working from the same one:** invoiced 2 August; a reminder on 1 September, by post; a reminder on 1 October, by email; and as at today, 14 October, nothing has been received.',
  '**What is held up.** Nothing of yours. Your next order went out on the 9th and will go out again whenever you ask. We are not putting the account on stop and we are not going to.',
  '**What I think may have happened.** The first reminder went to the shop and the second to the email on the invoice, which is your son\'s. ⚠ I think neither reached you personally, and if I am wrong I would rather know what did happen.',
  '**What would end this today.** Tell me a date, any date, and I will write it on the ledger and stop writing to you. A date I can rely on is worth more to me than the money this week.',
  '**And one thing that is ours.** We have never once telephoned you about this in ten weeks. Three letters and no call, to a customer of nineteen years, which is the wrong way round and is mine.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The record in the subject line', '✓'],
  ['No accusation — every subject checked', '✓ – *payment*, *we*, *I*'],
  ['A cheaper way of complying', '✓ – a date, not the money'],
  ['A generous guess, and some delay taken', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says offer a cheaper way of complying, and *tell me a date, any date* is the cheapest I have seen — it asks for nothing but information. The sentence I would look at is *a date I can rely on is worth more to me than the money this week*. Is that true? Because if he takes you at your word you have given away ten weeks."'));
out.push(note('⚠ It is a real risk and it is usually worth taking: a reliable date from a nineteen-year customer is worth more than ten days of cash. But the learner should know they are trading, and the question makes them know it.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "one thing that is ours" lines. ⚠ The strongest is nearly always a **failure to telephone**, and it is worth naming out loud: three letters and no call is the commonest shape of a stuck chase in every class.'));
out.push(stage('7', 'Write freely – sample (≈131 words)'));
out.push(sample(null, ['We chased a customs refund for eleven months. I wrote six letters, each one more carefully worded than the last, and the sixth was the politest and the firmest and produced nothing, like the other five. What produced it was a man in the office telling me, in a corridor, that refunds are not processed from letters at all — they are processed from a form that only exists at one window, and the letters had been filed as correspondence by somebody whose job is to file correspondence. Nobody had been obstructing anything. I had spent eleven months writing beautifully to the wrong process. The delay was never explained because there was nothing to explain: the system had done exactly what it does with letters.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"eleven months writing beautifully to the wrong process"_   ✓ _present perfect negative, no accusation._   ? _Was the delay ever explained?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('What finally produced the thing? ⚠ Almost never the sharpest letter: it is a telephone call, a photograph, somebody being copied in, or — most often — finding out that the request was in the wrong form altogether. Say so; it changes how a class chases for the rest of their lives.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Sent the third chaser with the record in the subject line and *a photograph on a telephone* as the easy option. The form came back in forty minutes, photographed, with an apology I had not asked for. Nine days of waiting ended by making it easier rather than firmer.']));

// ===================== 4.5 =====================
out.push(pb());
out.push(h2('4.5  So far, and not yet'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Many learners cannot do it, because the measure has never been stated to them — which is a finding about the workplace rather than the learner.'));
out.push(p('**b**  The third. The first is a feeling, the second is a number with nothing to compare it to, the third lets the reader do the arithmetic and own the conclusion.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 The figure, the measure, and the time left.  2 Because *a bit behind* can mean one or nine, and the person saying it is asking him not to ask — whereas a bad number is cheap in October and expensive in December.'));
out.push(p('**Language box – Practise (samples):**  1 _Eleven of twenty, with ten weeks left; I have not been to Homs since August._  2 _Three store rooms of four, and the fourth is the biggest; I have not had a free Saturday since June._  3 _Four procedures of nine; I have not written the stock count one, which only I have ever done._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Collections are going quite well.'],
  ['B', 'So far against what, and with how long left?'],
  ['A', '2.1 million of 3.4. Six weeks.'],
  ['B', 'Then the sentence is *2.1 of 3.4, with six weeks left*, and I can see we will not get there.'],
  ['A', 'We might.'],
  ['B', 'What have you not done yet that would change it?'],
  ['A', 'I have not telephoned the four largest since September.'],
  ['B', 'That is a better sentence than the 2.1, and it is the only one on this page I can act on.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three numbers and the *not yet*, then do the arithmetic aloud. **Typical errors:** _until now we have done eleven_ for *so far* · _I did not go to Homs yet_ · _we have done eleven from twenty_ · and the content fault, which is *a bit behind*, in any of its disguises: *more or less on track*, *roughly where we should be*.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['What', 'Figure', 'Of what', 'Time left', 'What I have not done yet'], [
  ['new accounts', '11', '20', '10 weeks', 'not been to Homs since August'],
  ['debt over 60 days', '1.3m', 'under 1.0m', '10 weeks', 'not telephoned the four largest'],
  ['procedures', '4', '9', '10 weeks', 'not had a Saturday free'],
  ['stock on the system', '3 rooms', '4 rooms', 'no date set', 'not asked for Saturday cover'],
], [1.1, 0.7, 0.8, 0.8, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(p('⚠ Write down any position with no measure, then ask what the measure is. The speaker always knows and has often never said it aloud — and a target nobody has said aloud cannot be missed, which is comfortable and useless.'));
out.push(stage('5', 'Read'));
out.push(p('1 It forecasts — *No — 16 or 17 on this rate* — and the note says the forecast is a guess and that it would rather put a guess on paper than not.  2 Bassel not having been to Homs since August: six of last year\'s eleven accounts came from two Homs trips.  3 940,000 between the four largest debtors — and they are *four telephone calls nobody has made*, not disputes.'));
out.push(stage('6', 'Write with help – sample (136 words)'));
out.push(sample(null, [
  '**POSITION — year to date, 31 October. Three figures and three things not yet done.**',
  table(['', 'Year to date', 'Of', 'Left', 'Will we?'], [
    ['Standard sizes drawn', '11', '90', '9 weeks', '**No** — 20 at best'],
    ['Made-to-order disputes', '7', 'target 0', '9 weeks', 'No — they come from the drawings'],
    ['Price list reprints', '2', '2', '—', 'Done'],
  ], [1.6, 1, 1.2, 0.9, 1.9]),
  '**The three things not yet done, which are the whole of this note.**',
  '**1.** Nobody **has** yet **drawn** the made-to-order sizes. All seven disputes this year were about dimensions on jobs with no drawing. ⚠ This is the single item that would move the second line, and the second line is the expensive one.',
  '**2.** I **have not asked** for a second telephone line, although I have known since August that the shared line is why the drawings go slowly. Nobody has refused it; I have not asked.',
  '**3.** Bassel **has not written down** the made-to-order dimensions, which exist only in his head, and he is the only person who can.',
  '**What I am not saying.** I am not saying the eleven drawings are slow work. They are the eleven we make weekly and they took four months because they were done between other things. The forecast of twenty is a guess and I would rather write it than not.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Figure, measure and time left on every line', '✓'],
  ['A forecast, named as a guess', '✓'],
  ['One "not yet" named as the mover', '✓ – the made-to-order drawings'],
  ['A price on the inaction', '✓ – seven disputes'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says price the inaction, and *all seven disputes were about jobs with no drawing* prices it exactly. The item I would ask about is number two: you have known since August and not asked. What has stopped you? Because that sentence is the only one on the page about you rather than about the work."'));
out.push(note('⚠ Ask it gently. The honest answer is usually that asking for a second telephone line feels like asking for a favour, and that is worth one minute of class time — it is the same instinct that produces *a bit behind*.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the ranked "not yets" and ask which the class would act on first and what acting would cost. The expensive inactions are almost always cheap to fix, which is the whole argument of the cycle.'));
out.push(stage('7', 'Write freely – sample (≈130 words)'));
out.push(sample(null, ['The thing most behind at our place is the certification of the welding, which has been outstanding for two years. The measure is simple: nine of our ninety standard products are supposed to carry a certificate and none of them does. The time left is not a quarter or a year; it is until the first customer asks, and in two years two have asked and both accepted a letter instead. What has not been done is one visit from the inspector, which costs about 400,000 and takes a day. Nobody has refused it. It has simply never been the most urgent thing in any given week for a hundred weeks, which is a sentence I would be ashamed to read out and is exactly what has happened.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"it has never been the most urgent thing in any given week for a hundred weeks"_   ✓ _figure, measure, time left._   ? _Who else knows the measure?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Ask how many of these measures anybody else in the company knows. Where nobody does, the thing cannot be behind — and a class that sees that sentence written down generally does something about it within a fortnight.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['Put one line on Mr Ayoub\'s desk: *stock on the system — 3 rooms of 4, no date set, and the fourth is bigger than the other three together.* He wrote a date on it and gave it back. Nine months without a date, ended by writing the measure down.']));

// ===================== 4.6 =====================
out.push(pb());
out.push(h2('4.6  Have you ever handled…?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect *yes* with a qualification, and expect the qualification to be the honest part. The cycle simply moves it to the front.'));
out.push(p('**b**  The second and the fourth. The bare *yes* will be tested by a single specific question; the bare *no* is better than the *yes* and worse than the fourth.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 The nearest real thing she **has** done, and the bridge between them.  2 That two of the four candidates said yes to the letter of credit, that one of them had seen one, and that he did not need to ask which bank — because everybody who has really done one has a story about a date on a bill of lading and nobody who has not can invent it.'));
out.push(p('**Language box – Practise (samples):**  1 _No. I have never seen one._  2 _Twice, both last year, both with the broker beside me; I could not do one alone._  3 _No. The longest we have signed ran to one year — but I have written nine procedures, and a contract is a procedure somebody can sue you over._  4 _Once, and it went wrong, and I can tell you exactly how._  5 _No, and nobody here has._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Have you ever dismissed anybody?'],
  ['B', 'No. I have never done it and I would not want to pretend otherwise.'],
  ['A', 'Have you handled a disciplinary?'],
  ['B', 'Once, two years ago, and Mr Ayoub was in the room. I wrote the note afterwards and he signed it. I could not run one alone and I know what the note has to contain.'],
  ['A', 'And a budget?'],
  ['B', 'No. I have never been given one. But I have costed two changes this year to the nearest ten thousand and both came in within it, and a budget is costing with a year attached.'],
  ['A', 'That is three things you cannot do.'],
  ['B', 'Would you rather I had said yes to the first one?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners mark each answer *believed* or *not believed* and name the word that decided it. **Typical errors:** _Have you ever did…?_ · _I never did it before_ · _I have ever done it_ · and the content fault, which is a *yes* with no number — the one thing an experienced interviewer always follows up.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['The question', 'My honest answer, with numbers', 'The bridge, if no'], [
  ['Have you handled a letter of credit?', 'No. I have never seen one.', '—'],
  ['Customs documents?', 'Twice, last year, with the broker beside me.', '—'],
  ['A contract over a year?', 'No. The longest was one year, four pages.', 'nine procedures; a contract is a procedure you can be sued over'],
  ['An audit?', 'Yes — one, this October, and I wrote the procedure pages for it.', '—'],
  ['A budget?', 'No.', 'two changes costed to the nearest ten thousand, both inside it'],
], [1.2, 2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(p('⚠ Collect the best bridge in the room. A good bridge names a **real piece of work** and says what the two things have in common; a bad one says *I learn quickly*, which is the *be more careful* of job interviews.'));
out.push(stage('5', 'Read'));
out.push(p('1 It counts them in the second line — *two of the answers are no* — and gives each a bare **No** in bold, then the nearest real thing.  2 Four failed delivery dates in two years, all four in the second quarter, all four by two to nine days, all four with a telephone call **before** the date. ⚠ And it says what the alternative answer would have been worth: *I could have answered that with "rarely" and you would have learned nothing.*  3 The names of the customers concerned — and it matters because it is the one sentence in the letter that cannot be written by somebody who is exaggerating.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**Subject:** Your four questions — answered, including the two where the answer is no',
  'Dear Mr Rizk,',
  'You asked four questions and said you would rather have them in writing. Two of the answers are no.',
  '**1 · Have we made to a certified standard?** **No.** Nothing we have made has ever carried a certificate. What we have done is make to a customer\'s own drawing for twenty-two years, and we have never had a dimension disputed on a job where a drawing existed.',
  '**2 · Have we worked under a penalty clause?** **No**, and I have never read one. If this order carries one I would want to read it with somebody who has, before signing and not after.',
  '**3 · Can we make 400 units a month?** **Yes.** We made 380 a month for eleven months in 2023 for one customer. Our constraint is not the press, it is **steel delivery in the second quarter**, which I would want written into any agreement rather than discovered.',
  '**4 · Have we ever been late?** **Yes** — nine times in two years, seven of them in the second quarter, none by more than six days, and every one with a telephone call before the date. ⚠ I could have said *occasionally* and you would have learned nothing.',
  '**What I would like you to take from this.** The two yeses have figures you can check with the customers concerned, and I will give you their names if you ask for them.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The nos counted and put first', '✓'],
  ['A bare Yes or No at the head of each answer', '✓'],
  ['The failure question answered with numbers', '✓ – nine, seven, six days'],
  ['The real constraint named, referees offered', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says name your real constraint rather than your capacity, and *steel delivery in the second quarter* does it. The answer I would look at is the second: you say you would read a penalty clause with somebody who has. Who? Because at the moment that sentence is a promise with nobody in it."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the failure answers and ask which company the class would place a first order with. It is reliably the one with the most precise failures, and the room is usually surprised by its own answer.'));
out.push(stage('7', 'Write freely – sample (≈135 words)'));
out.push(sample(null, ['I said yes once to something I had not done. A customer asked whether we could palletise and shrink-wrap to export standard and I said yes, because we had a wrapping machine and I thought that was the same thing. It is not: export pallets need a heat-treatment stamp on the timber, which I had never heard of. The load was turned back at the border and sat for nine days. The customer found out before I did, from his own agent, which is the worst way for anybody to find out anything. What I would say now is: *no, we have never done an export pallet; we wrap to our own standard and I do not know what the export standard requires.* It would have cost me that order and saved me the customer, and I lost both.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"it would have cost me that order and saved me the customer, and I lost both"_   ✓ _have you ever / I have never._   ? _What would the honest answer have cost?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Put the two figures side by side: what the false yes cost, and what the honest no would have cost. The second is nearly always smaller and nearly always felt larger at the time. That asymmetry is the whole cycle and the room produces it themselves.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['Three honest nos with bridges: we have never exported (but we have shipped to Latakia port for nine years); we have never held stock on consignment (but we have run two sites since June); we have never had a written contract over a year (but we have kept a fourteen-day price promise for eighteen months without once withdrawing one).']));

// ===================== 4.7 =====================
out.push(pb());
out.push(h2('4.7  Review & Mediate: what does this claim?'));
out.push(stage('1', 'Get ready – Unit 4 quiz (answers)'));
out.push(p('**1** A **number** or a date — something that could be checked.  **2** For work **in progress**, and always with its shape attached.  **3** _**for** eleven years, **since** 2014._  **4** Because the fact is identical and nobody is accused, so the answer is the thing you asked for rather than a defence.  **5** It can mean one or nine, and the person saying it is asking the reader not to ask.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That it does not say how many customers, since when, or how many staff — four pages and it does not say.  2 *Our team has grown to eleven* — and Sham Trading is nineteen, so the company with extensive experience has eleven people and has printed the one number it is proud of.'));
out.push(p('**Language box – Practise (sample mediation):**  _"Read me a line. Now: how many customers, since when, how many staff? Four pages and it does not say. Find me a line with a number in it — that one, eleven. We are nineteen. ⚠ I am not saying they are not good; I am saying four pages with one number cannot be checked, and the number they chose is the one they are proud of. Ask them the four questions in writing and see which answers come back with figures."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'This CV is excellent. Extensive experience, excellent communication, strong work ethic.'],
  ['B', 'How long in each job?'],
  ['A', 'It gives dates. March 2023 to November 2023, then December 2023 to July 2024.'],
  ['B', 'Eight months and seven months. Does it say why either ended?'],
  ['A', 'No.'],
  ['B', 'Then those are the only two facts on the page and they are both dates. ⚠ I am not saying do not see him — I am saying the first question is the two dates, asked kindly, and the answer may be perfectly good.'],
  ['A', 'It might be two bad employers.'],
  ['B', 'It might be two bad employers, and if he says so plainly with numbers in it, that is a better answer than anything written on the page.'],
]));
out.push(note('⚠ This role card needs handling. It asks learners to read a CV critically, and a class will contain people whose own CVs look like that one. Keep the emphasis exactly where the dialogue puts it: the dates are a **question**, not a verdict, and the honest answer to them is usually fine.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the pages and the checkable facts; the ratio is the finding. ⚠ A class that starts counting numbers in documents does it for the rest of the course, and it is the most portable habit in Unit 4.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who I told', 'What impressed them', 'The numbers I found', 'What I would ask'], [
  ['Bassel', 'four pages, "market-leading"', 'two — "over 20 years" and "a team of 11"', 'the four questions from 4.6, in writing'],
  ['Mr Ayoub', 'the range of products listed', 'none in the whole range section', 'which three of these they have supplied this year'],
], [1, 1.2, 1.2, 1.5]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"The document said market-leading, comprehensive and nationwide. It had four pages and two checkable facts. The one number in it was a team of eleven, which tells me they are smaller than us and proud of having grown. What I would do is ask the four questions in writing and see which answers come back with figures — not to catch them out, but to find out whether anybody there writes the way we do."']));
out.push(p('This is the **fourth** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a claim with a number in it can be disbelieved, and that is exactly why it is worth making.** Everything uncheckable is free, so everybody writes it, so it is worth nothing — and a writer who gives you a figure has taken a risk on your behalf. ⚠ Say it in those words; learners who have been taught that modesty means vagueness find it genuinely freeing.'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 2)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'C', 'E', 'H', 'F']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(p('**1** B — nine years\' warehouse experience, paper records, no computer work.  **2** C — two years customer-facing, and *the work is writing*.  **3** E — the returners\' scheme, two years or more out of work.  **4** H — handled the documents under supervision and wants to be signed off. ⚠ **A is the distractor**: *no experience required* fits somebody with none, and this candidate has some.  **5** F — has run an office alone, ready for a department of nine.'));
out.push(note('⚠ Part 2 is won by reading the **people** first and underlining the condition in each, then scanning the notices for that condition. The distractors are built to match a person\'s general area and fail on one condition — A and H are the pair that teaches it, and the exam does this every time.'));
out.push(stage('6', 'Write with help – exam sample (42 words)'));
out.push(sample(null, ['Stock records: I have entered three store rooms of four. I have not entered the wrap room yet and it is bigger than the other three together. Could you confirm whether Saturday cover is possible, and then I can finish it in November.']));
out.push(stage('6P', 'Check together'));
out.push(p('Three points: what is done with a number (three of four) · what is not done yet (the wrap room, with its size) · what is needed from the reader (confirmation about Saturday cover). Forty-two words. ⚠ The commonest fault is explaining why it is slow, which spends ten words and turns a progress message into a defence.'));
out.push(stage('7', 'Write freely – sample (≈137 words)'));
out.push(sample(null, ['I have worked in administration for six years, the last two and a half at Sham Trading, and I have run the administration for two sites and nineteen staff since 8 June. I have written nine one-page procedures, every one corrected by somebody who had never done the job. I have opened two supplier accounts and renegotiated one price. I have been moving the stock records onto the system since August — three store rooms of four, and the fourth is the largest, so the work is about half done. I have covered the Baghdad Street counter every Saturday since it opened. I have been at Sham Trading for two years and four months and have never missed a quarter-end. I have never exported anything, never seen a letter of credit, and never been given a budget.']));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['My CV has eleven lines and six numbers. The one I was sent has fourteen lines and two, both of them dates. The difference is not honesty — it is that nobody ever told either of us that a number is the only part of a CV a stranger can use.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 4 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'a', 'a', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _have run_ — a record, with *since*.  **2** _have been moving_ — unfinished, and the shape is given.  **3** _**for** eleven years_.  **4** _**since** 2014_.  **5** _it is eleven years **since**_.  **6** _we **have not** received_.  **7** _**so far** this year_.  **8** _**Have** you ever…?_'));
out.push(note('⚠ Questions 3, 4 and 5 are one point in three costumes and should be marked as a group: *for* a length, *since* a point, and *it is … since* + the past simple. A learner who gets 3 and 4 and misses 5 has the pair and not the idiom.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Accounts YTD', 'Target', 'Time left', 'Not done yet', 'Last year on this date'], [[
  'eleven', 'twenty for the year', 'ten weeks', 'has not been to Homs since August', 'nine, and finished at eleven',
]], [1, 1.3, 1, 1.8, 1.5]));
out.push(note('The fifth gap needs **both** numbers — nine on the date and eleven at the end — because the pair is what makes the forecast a guess. *Nine* alone misses the point of the sentence.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (63 words)', ['I have run the administration for two sites and nineteen staff since June. I have written nine one-page procedures, all nine corrected by somebody who had never done the job. I have opened two supplier accounts and renegotiated one price. I have covered the second site every Saturday since 8 June. I have never exported anything and have never seen a letter of credit.']));
out.push(box('Marking the Unit 4 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Four claims in the present perfect (2) · **a number or date on each** (3) · a strong, testable verb in at least two (1) · one *I have never…* line (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The three marks for numbers are the heart of this check. **A claim with no number scores nothing**, however well formed: *I have dealt with suppliers* is correct English and earns 0. Say so before they write — the point is not to catch them.',
  '⚠ Give the strong-verb mark for *renegotiated · introduced · closed · trained · commissioned*. Do not give it for *helped with · was involved in · supported · assisted*, which are not claims at all.',
  '⚠ The *I have never* line earns its mark for being **specific**. *I have never exported anything* scores; *I have never had the opportunity to develop in this area* does not, and is worth a sentence of feedback.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 4**'));
out.push(p('**1 _Since_ with the present simple.** *We work here since 2017* is the single most persistent error at B1 and it is not carelessness: the present simple is correct in Arabic and in French for exactly this meaning, so the learner is translating a true sentence. ⚠ Do not explain the rule again; drill the chunk *we have been here since…* at the start of every lesson in this unit and the next. It is an articulation problem, like Unit 1\'s third-person -s, and the same treatment works.'));
out.push(p('**2 Numbers felt as boasting.** Several learners will write *I have dealt with suppliers* when they could write *I have opened two accounts and renegotiated one price*, and when asked why will say that the second sounds immodest. ⚠ The answer that works is not encouragement — it is the observation in 4.7: a number can be **disbelieved**, so giving one is a risk taken on the reader\'s behalf, and vagueness is the immodest option because it asks to be taken on trust. Learners accept that immediately; *be confident* does not.'));
out.push(p('**3 The continuous used to soften.** Some learners discover in 4.2 that *I have been doing it* sounds less exposed than *I have done it* and begin using it for finished work. ⚠ The cost is exactly the one Nadia names: it makes the done part sound provisional and loses the four finished procedures. The test to give them is a single question — **is the unfinishedness the information?** If not, the simple, and count it.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 4 · Answer Key');
