// Proactive Business English A2 · Syria Edition · Book 2 · Unit 22 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 22  Emails and Requests'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 18 taught the shape of an email; this unit teaches the distance.** If learners think 22 is a repeat of 18, show them 22.6 early: the same facts written for a colleague and for a bank. Nobody argues after that.',
  '⚠ **The unit works against a habit, not an ignorance.** Learners already know the long polite formulas — _at your earliest convenience_, _we look forward to your kind cooperation_ — and have been praised for them. The unit does not forbid them; it asks what the reader is supposed to do after reading them. Keep returning the question to the page: **can this email be answered?**',
  '⚠ Three errors will recur all week and are worth naming on day one: _Dear Mr_ + first name · _I hope you are well_ before the purpose · a deadline with no date in it.',
], C.grey, C.navy));

// ===================== 22.1 =====================
out.push(h2('22.1  Dear Mr Ayoub, Dear Sir or Madam, Hello Hala'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect four different habits in the room and at least one person who opens everything the same way.'));
out.push(p('**b**  _Dear Mr Khaled,_ is wrong — **Mr** takes the family name. _Dear Sir Ayoub,_ is wrong too: _Sir_ does not combine with a surname like that. The other two are both correct, for different readers.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It is correct and cold, and it tells the reader nobody troubled to find out who they are.  2 Write the whole name — _Dear Samir Haddad_ — rather than guess.'));
out.push(p('**Language box – Practise (answers):**  1 _Dear Mr / Ms_ + surname, or the first name if that is the office habit.  2 _Dear Sir or Madam,_ — after one telephone call to try for a name.  3 the first name, if they sign that way.  4 the whole name as written.  5 their first name — they went first.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I have written to the ministry office. "Dear Sirs,"'],
  ['B', 'Not Dear Sirs. There is a named officer on the website — I found her in ninety seconds. In English, Mr and Ms go with the family name: Dear Ms Dagher.'],
  ['A', 'And if I only have "Rana Dagher" on a page?'],
  ['B', 'Then Dear Ms Dagher. If she signs herself Rana you may write Dear Rana. Not both.'],
  ['A', 'And when I do not know the name at all?'],
  ['B', 'Dear Sir or Madam. It is correct, it is cold, and it tells the reader nobody troubled to find out who they are.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the correct opening and the time it would take to find the name. Typical errors: _Dear Mr Samir_ · _Dear Mrs_ with no evidence she uses it · _Dear Ms Rana_ (title plus first name — the same fault in the other direction).'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['To whom', 'What I wrote', 'What I would write now', 'Could a name be found?'], [
  ['the electricity office', 'Dear Sir,', 'Dear Ms Dagher,', 'yes — one telephone call'],
  ['a new customer', 'Dear Mr Fouad,', 'Dear Mr Tarabishi,', 'the name was already there'],
  ['a supplier of nine years', 'Dear Ms Shamsi,', 'Dear Dima, — she has signed Dima twice', 'yes'],
], [1, 1.2, 1.3, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I wrote _Dear Sir_ to the electricity office. I would now write _Dear Ms Dagher_, because her name is on the second page of their website and it took me ninety seconds to find."', 'Count the room\'s _Dear Sir or Madam_ openings that could have been a name. It is usually most of them, and the count is the lesson.']));
out.push(stage('5', 'Read'));
out.push(p('1 Telephone first — and the evidence is that in the last year **every single** "Dear Sir or Madam" the company sent could have had a name on it.  2 Stay formal until the other person uses your first name or signs with theirs; then you may match them. Never go friendly first.  3 Because inside the building _Dear_ is the opening of a complaint or a disciplinary letter, so it reads as a warning shot.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HOW WE OPEN AND CLOSE EMAILS**', '**A stranger whose name we know:** _Dear Mr Haffar,_ / _Dear Ms Dagher,_ — close with _Best regards_.', '**A stranger with no name:** _Dear Sir or Madam,_ — close with _Best regards_. ⚠ Telephone the switchboard first. Four of our five went out last month without anybody trying.', '**A name we cannot assign:** _Dear Rami Jaber,_ — the whole name, no title. Never guess.', '**A customer we know:** _Dear Mr Tarabishi,_ until he signs _Fouad_, then _Dear Fouad,_. Follow them down, never up.', '**A colleague:** _Hala,_ or _Hello Hala,_.', '**Never:** _Dear Mr_ + first name · _Dear Mrs_ unless she uses it · _Dear Sirs_ · _To whom it may concern_ in an email.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Mr / Ms with the family name', '✓'],
  ['A line for a name that cannot be assigned', '✓'],
  ['Each opening paired with its close', '✓'],
  ['A short "Never" list from real life', '✓ – four items, all seen'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says pair the opening with its closing on the same line. The colleague line here has an opening and no close — is that deliberate, because nothing is needed, or is it missing?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Collect the "Never" lists on the board. The combined list is the useful artefact and it is usually six items, all of them real.'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(null, ['I wrote to a woman at a shipping company for a year as _Dear Mrs Khoury_. She signed every reply _Ms L. Khoury_, which I did not read as a correction. When we finally met she said, pleasantly, that she had stopped noticing. Nothing was lost except that for a year I had been slightly wrong in the first two words of every message, and she had decided it was not worth mentioning. That is the cost of an opening: not a disaster, a small steady distance.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"for a year I had been slightly wrong in the first two words of every message"_   ✓ _Mr / Ms with the family name._   ? _Did she ever correct you, or did she simply decide not to?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask who has been on the receiving end of a wrong opening and said nothing. Most hands go up, which is the point: nobody complains, and the small distance stays.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['We write to the electricity office as "Dear Sir". Her name is Rana Dagher and it is on the second page of their website, under the department. It took ninety seconds, and we have been writing "Dear Sir" for two years.']));

// ===================== 22.2 =====================
out.push(pb());
out.push(h2('22.2  I am writing to ask about…'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. One in three is a generous estimate in most inboxes.'));
out.push(p('**b**  The third — it names the thing and the number, so it can be acted on without opening anything.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 To tell a busy reader whether this email is for them.  2 After the purpose, where it is a courtesy; and better still with something specific in it.'));
out.push(p('**Language box – Practise (samples):**  1 _I am writing to ask for a copy of the March statement for account 4471._  2 _With reference to your email of 3 May about order 0618,_  3 _Further to our call this morning, could you…_  4 _I am writing to ask the price of 300 units of article 55._  5 _Further to my emails of 2 and 9 May, I am still waiting for…_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Read the first three lines. "Dear Mr Haffar, We were extremely sorry to hear of the difficulty you experienced. We have been serving customers in Damascus since 1998 and we take every complaint seriously."'],
  ['B', 'And what does he want?'],
  ['A', 'A date for the replacement.'],
  ['B', 'Which is in line six. He will read the first three lines, decide he has been handled rather than answered, and telephone instead.'],
  ['A', 'So I take out the apology?'],
  ['B', 'You move it. _Dear Mr Haffar, the replacement will be with you on Tuesday 13 May before midday._ Then the apology — after the answer, where it is believed.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the new first line and count the lines it replaced; three to five is the usual answer. Typical errors: _I am writing for ask_ · _I am writing to asking_ · _With reference to I hope you are well_ · and the content fault of a first line with no reference number in it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The email', 'The old first line', 'The new first line'], [
  ['bank statement', 'I hope this email finds you well.', 'I am writing to ask for a copy of the March statement for account 4471.'],
  ['a late delivery', 'We have been customers for many years.', 'I am writing about order 0618, which was due on 6 May and has not arrived.'],
  ['a price', 'I hope you are well and business is good.', 'I am writing to ask the price of 300 units of article 55, delivered to Mezzeh.'],
], [1, 1.6, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It began _I hope this email finds you well_. Now it begins _I am writing to ask for a copy of the March statement for account 4471_. That replaced four lines."']));
out.push(stage('5', 'Read'));
out.push(p('1 In the fifth line — and the first four say nothing the reader needs.  2 The account number with the company name, and _a PDF by email is enough; we do not need a stamped copy_ — the second one removes the commonest cause of delay.  3 Below the request, and they have gained something particular: _thank you for the quick answer about the standing order last month_.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Order 0618 — 20 boxes of wrap, needed by 14 May', 'Dear Ms Shamsi,', 'I am writing to ask for a delivery date for order 0618, twenty boxes of wrap, placed on 28 April.', 'We need it for the Homs contract, which starts on 15 May. A part delivery of ten boxes by the 14th would be enough to begin; the rest can follow.', 'I hope you are well — and thank you for the quick replacement in March, which arrived before I had finished writing to you about it.', 'Thank you. Best regards, Hala Mourad · Customer Service · Sham Trading Co., Mezzeh · 011 ___ ____']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The purpose in the first line, with a reference', '✓ – order 0618'],
  ['Why it is needed', '✓ – the Homs contract, 15 May'],
  ['What form the answer should take', '✓ – a part delivery would do'],
  ['A specific courtesy, after the purpose', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says say what form the answer should take, and yours does — ten boxes would do. The line I would look at is the courtesy: _I hope you are well_ is general, and you have a real one two lines away in the March replacement."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the first lines and the courtesy lines together. Ask which email the class would answer today; it is always the one with a number in the first line.'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample(null, ['Last year I wrote to a customs broker whom I had never met. The subject line said "Shipment 7741 — one missing document, needed Thursday" and the first line said which document. He answered in forty minutes with the document attached and one sentence: "This is the first email this week I could answer without opening a file." I have written to him eight times since and he has never taken more than a morning. The whole effect came from putting a number in the subject line.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"This is the first email this week I could answer without opening a file."_   ✓ _the purpose and the number in the first line._   ? _Would it have worked without the number in the subject line?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The fast answers nearly always share two things: a reference number and a reason. Collect both from the three texts and write the pair on the board.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Three first lines rewritten. The first replaced four lines, the second replaced two, and the third replaced seven — seven lines about the weather and the family before a request for a price.']));

// ===================== 22.3 =====================
out.push(pb());
out.push(h2('22.3  Could you possibly send it?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The three versions usually differ in length far more than in politeness, which is the misunderstanding the cycle treats.'));
out.push(p('**b**  _Send me the form._ → _Can you send the form?_ → _Could you send the form?_ → _I would be grateful if you could send the form._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It does not say what is wanted or by when — it is polite and empty.  2 Of _could_ and _thank you_, not of length.'));
out.push(p('**Language box – Practise (samples):**  1 _Could you send the signed form by Thursday?_  2 _Could you send a price for 300 units by Friday?_  3 _Would you be able to visit on Tuesday or Wednesday morning?_  4 _Could you send a corrected invoice 3318 by Thursday?_  5 _Could you confirm today whether the 12th is possible? If not, I will use the alternative._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The request line: "It would be very helpful if somebody could perhaps come and see the machine when possible."'],
  ['B', 'Come and see what, and when?'],
  ['A', 'The wrapping machine. The limit switch. Tuesday or Wednesday morning.'],
  ['B', 'Then none of that is in the sentence. It is a very polite sentence that asks for nothing.'],
  ['A', 'But it is polite.'],
  ['B', 'It is polite in the way a locked door is polite. Try: _Could you send an engineer on Tuesday or Wednesday morning to look at the limit switch on the wrapping machine?_'],
  ['A', 'That is almost an instruction.'],
  ['B', 'It is a question, it has _could_ in it, and it tells them exactly what will make you happy.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the new request and count the words in both. The specific version is nearly always shorter, which surprises the room every time. Typical errors: _Could you to send_ · _I would be grateful if you can_ · _Could you possibly_ on something trivial.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['To whom', 'The request, with the date', 'Could they answer yes or no?'], [
  ['the bank', 'Could you send a stamped March statement for 4471 by 12 May?', 'yes'],
  ['Ms Shamsi', 'Could you confirm by Thursday that ten boxes can reach us by the 14th?', 'yes'],
  ['the landlord', 'Could you have the lock changed before Sunday?', 'yes'],
  ['the ministry office', 'Could you tell me which form replaces form 4?', 'yes — in one word'],
], [1, 2.2, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I would write: _Could you confirm by Thursday that ten boxes can reach us by the 14th?_ My partner could answer yes."', 'Any request a partner cannot answer yes or no has something missing — usually the date, sometimes the thing itself. That test is worth keeping for the rest of the course.']));
out.push(stage('5', 'Read'));
out.push(p('1 A certified copy of the March statement for account 4471 — and under _What we need_, that it must be stamped, signed and on paper, because the auditor requires the branch stamp.  2 _Could you confirm by Thursday that this is possible?_ — a request for an answer, eight days before the deadline matters.  3 To come and collect it, any morning. It removes a reason to say no, and it is almost never taken up.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Form 4/A — certified copy, needed by 20 May', 'Dear Ms Dagher,', 'I am writing to ask for a certified copy of form 4/A for Sham Trading Co., registration 11-4471.', '**What we need:** a stamped copy with the office seal. A scan is not enough this time; the bank requires the seal.', '**When:** by 20 May. The loan file closes on the 21st and cannot be reopened.', '**Could you confirm by Thursday 15 May that this is possible?** If it is not possible by the 20th, please tell me then — the bank will accept a letter from you instead, and I would rather arrange that now than on the 20th.', 'If it would help, I can come to the office and collect it, any morning this week.', 'Thank you. Best regards, Nour Mansour · Administration · Sham Trading Co. · 011 ___ ____']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Could you_ with the exact thing', '✓'],
  ['The form it must take', '✓ – stamped, with the seal'],
  ['A date, with the reason', '✓ – the file closes on the 21st'],
  ['A separate, earlier confirmation date', '✓ – Thursday the 15th'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says ask for confirmation separately and earlier. Yours asks for the 15th and the thing is due on the 20th — that is five days of warning. Is five days enough to arrange the letter instead, if the answer is no?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the confirmation sentences and count the days of warning each one buys. Zero days is common in the first draft and is the single most useful correction in the unit.'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(null, ['I asked a supplier in 2023 for a certificate of origin "as soon as convenient". He did not refuse; he simply never answered, and I did not chase it because I had given him no date to miss. Three weeks later the shipment was held at the port for four days and the certificate arrived the same afternoon I telephoned. He had never understood that it was urgent, and nothing in my email had told him. If I wrote it now it would say: _could you send it by Thursday, because the ship sails on Friday_.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I had given him no date to miss"_   ✓ _could you + the thing + a date._   ? _Did you ever telephone, and how long did it take once you did?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the unanswered requests that had no date in them. It is nearly all of them, every time, and the room usually finds this funnier than it is.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Sent Monday: "Could you send the stamped statement by 12 May, and confirm by Thursday that the 12th is possible?" He confirmed on Tuesday morning. Two years of this request taking three weeks, and one sentence ended it.']));

// ===================== 22.4 =====================
out.push(pb());
out.push(h2('22.4  Please let me know by Thursday'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  _By Thursday_ includes Thursday; _before Thursday_ means Wednesday at the latest. Most people would rather be given _by_, and most people write it meaning _before_.'));
out.push(p('**b**  The third works; the fourth works better. _As soon as possible_ and _urgently_ are not deadlines at all.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 A date, a time if the date is tight, and what happens after it.  2 Never give one — it works once, and afterwards every date you give is discounted, the real ones included.'));
out.push(p('**Language box – Practise (samples):**  1 _by Thursday 12 May, because the auditor is here on the 13th_  2 _by 4 p.m. on Friday, because the order goes in that evening_  3 _by Tuesday morning, because the site closes for the holiday_  4 _by the end of the week, because the file goes to Aleppo on Monday_  5 _by Thursday — and could you confirm today that Thursday is possible?_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I have put "as soon as possible".'],
  ['B', 'Which means nothing. He has eleven things that are as soon as possible and yours will be the eleventh.'],
  ['A', 'Then "urgently".'],
  ['B', 'Worse. A deadline is three things: a date, a time if it is tight, and what happens after it.'],
  ['A', 'What happens after it?'],
  ['B', 'By the 15th, because the depot holds the rate until the 15th. That is not pressure; it is information.'],
  ['A', 'And if I ask for the 10th to be safe?'],
  ['B', 'Then you have taught him that your dates are not real. Ask for the 15th and ask him to confirm by the 10th.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the reason attached to the deadline and say whether they would believe the date. Typical errors: _until Thursday_ for a deadline · _in Thursday_ · _by the Thursday_ · and the content fault of a date with no reason, which reads as pressure.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I am waiting for', 'The real deadline', 'The reason', 'Confirmation by'], [
  ['the March statement', '12 May', 'the auditor is here on the 13th', '8 May'],
  ['a price for 300 units', 'Friday 4 p.m.', 'the quarter order goes in that evening', 'Wednesday'],
  ['the lorry hire decision', '15 May', 'the depot holds the rate to the 15th', '10 May'],
  ['the corrected invoice', 'end of the month', 'the accounts close on the 31st', 'the 25th'],
], [1.3, 1, 1.5, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I need the price by 4 p.m. on Friday, because the quarter order goes in that evening. I would ask them to confirm by Wednesday."', 'Ask how many have ever given a date earlier than the real one. Nearly everybody; and nearly everybody has also been given one, which is why it no longer works on them.']));
out.push(stage('5', 'Read'));
out.push(p('1 The **answer** is being chased, not the statement.  2 It works the alternative out in advance, checks that the auditor will accept it, and says how little trouble it is for the reader — ten minutes rather than two days.  3 Because a reader who can see that saying no is cheap says no quickly; a reader who cannot goes silent, which is the expensive outcome.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Order 0618 — still needed; can you confirm today?', 'Dear Ms Shamsi,', 'Further to my email of 28 April and my telephone call on 6 May, I am still waiting for a delivery date for order 0618, twenty boxes of wrap.', '**The position.** I asked for it by 14 May. It is now the 9th. The Homs contract starts on the 15th and the first delivery to site is that morning.', '**What I need from you today**, and it is not the wrap: **can ten boxes reach us by the 14th, yes or no?**', '**If yes:** I will say nothing further and plan around the 14th.', '**If no:** tell me today and I will buy ten boxes locally for the first week at a higher price, which I can do if I order by Monday. After Monday I cannot.', 'I am not chasing the wrap. I am chasing the answer, because the answer is what lets me plan.', 'Thank you. Best regards, Hala Mourad · 011 ___ ____']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The earlier contacts, with dates', '✓ – 28 April and 6 May'],
  ['The answer asked for, not the thing', '✓'],
  ['An "if no" with a worked-out alternative', '✓ – local purchase, by Monday'],
  ['One line saying what is really being chased', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says do the \'no\' work in advance, and you have — local boxes, ordered by Monday. The thing I cannot find is what it costs you, and if she knew it was dearer she might answer faster."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the "if no" paragraphs. Ask the class, as readers, which alternative they would take. The ones they would take are the ones that are cheap for them, which is the test.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We have been waiting two years for a water connection at the store. I have asked six times, I think: four letters and two visits. I have never once asked for a yes or a no. I have asked for the connection, which nobody can promise, so nobody answers, and each time I go away and wait another four months. What I should have asked, in 2024, is whether it is possible at all this year — because if the answer were no, I would have put in a tank and stopped waiting.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I have never once asked for a yes or a no"_   ✓ _by / before used correctly._   ? _If the answer were no, what would you have done in 2024?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('This text, or one like it, appears in nearly every class. It is the strongest argument in the unit for chasing the answer rather than the thing, and it is better coming from a learner than from the book.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['I asked the ministry office one question: is the connection possible before the end of the year, yes or no? The answer came in four days: no, not before March. We have ordered a tank.']));

// ===================== 22.5 =====================
out.push(pb());
out.push(h2('22.5  Thank you in advance, Best regards'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners have one ending for everybody, and about half have never chosen it deliberately.'));
out.push(p('**b**  Expect the rule for _Yours sincerely_ and _Yours faithfully_ to be half-remembered or reversed. It is worth five minutes because English readers do notice it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It assumes the answer is yes, and many English readers find it presumptuous; _thank you_ is shorter and safe.  2 Name, position if the reader may not know you, company, and a telephone number that is answered.'));
out.push(p('**Language box – Practise (answers):**  1 _Dear Sir or Madam_ → _Yours faithfully_ in a letter, _Best regards_ in an email.  2 _Dear Mr Haddad_ → _Yours sincerely_ / _Best regards_.  3 _Dear Dima_ → _Kind regards_.  4 _Hello Fadi_ → _Regards_ or nothing.  5 _Dear Mr Haffar_ → _Best regards_ — and nothing warmer while the complaint is open.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I never know how to end. I have written "Thanks! Hala".'],
  ['B', 'Which means: I am in a hurry and you already know who I am. It is going to a bank.'],
  ['A', 'Everybody writes it.'],
  ['B', 'Inside the office, yes. _Thank you. Best regards,_ is better and barely longer.'],
  ['A', 'And my name?'],
  ['B', 'Name, position, company, and a telephone number that is answered. Hala Mourad · Customer Service · Sham Trading Co., Mezzeh · and the mobile, not the office line that rings in an empty room.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the finished block and count the lines; four is right. Typical errors: _Best regard_ · _Yours sincerely_ after _Dear Sir or Madam_ · _Yours faithfully_ to a named person · a block with a fax number that no longer exists.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Reader', 'Opening', 'Closing'], [
  ['a bank, no name', 'Dear Sir or Madam,', 'Best regards,'],
  ['a bank, named', 'Dear Mr Haddad,', 'Best regards,'],
  ['a supplier of nine years', 'Dear Dima,', 'Kind regards,'],
  ['a colleague', 'Hala,', 'nothing'],
  ['a customer complaining', 'Dear Mr Haffar,', 'Best regards,'],
], [1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"For the bank I would open _Dear Mr Haddad_ and close _Best regards_. My block is: Nour Mansour · Administration · Sham Trading Co., Mezzeh · 011 ___ ____."', 'Count the blocks in the room with a telephone number. Then ask how many of those numbers are answered. The second number is always smaller and it is the one that matters.']));
out.push(stage('5', 'Read'));
out.push(p('1 About four a year — and it is mentioned to explain why the sincerely/faithfully rule is got wrong on half of them: it is used too rarely to become a habit.  2 Quotations, fax numbers and second email addresses.  3 Four emails came back last year asking only for a telephone number — two days and somebody\'s patience for a line they already had.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HOW WE CLOSE**', '**Best regards,** — use it unless there is a reason not to. It is right for a bank, a customer, a supplier and a stranger.', '**Kind regards,** — somebody we deal with weekly and like.', '**Yours sincerely,** — a printed letter opened with a name. **Yours faithfully,** — a printed letter opened _Dear Sir or Madam_.', '**The block, four lines:** Name · Position · Sham Trading Co., Mezzeh, Damascus · a mobile number that is answered.', '⚠ **"Thank you in advance" is not used here.** Say _thank you_, and thank them properly when it is done.', '⚠ The number is the point of the block. Last year four emails came back asking only for a number, and one of them came back twice.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A default closing, with permission to vary', '✓'],
  ['Sincerely / faithfully explained', '✓'],
  ['A four-line block, with what is not allowed', '✗ – the block is there, the "never" is missing'],
  ['Evidence next to at least one rule', '✓ – four emails'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says say what is not allowed in the block. Yours lists the four lines but not the things people add — what would you put on that list from your own office?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the warnings aloud. Ask which workplace the class would rather write for; it is reliably the one that admitted a mistake in its own guide.'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample(null, ['At my workplace almost everybody ends with "Thanks" and a first name, and nothing else. It makes the place sound friendly and slightly disorganised, which is roughly accurate. The line I would add to everybody\'s block is a mobile number, because at the moment a customer who wants to speak to a particular person has to telephone the main line and describe them. We lose perhaps an hour a day to that, spread thin enough that nobody has ever counted it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"friendly and slightly disorganised, which is roughly accurate"_   ✓ _sincerely / faithfully correct._   ? _Who would have to agree before a mobile number went in everybody\'s block?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most workplaces everybody signs off differently, which is normal and is one short page away from not being. Ask who could write that page; it is usually the person reading this out.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['My block is now four lines with my mobile on it. Of the last forty emails in my sent folder, thirty-one had no telephone number anywhere, and two of those came back asking for one.']));

// ===================== 22.6 =====================
out.push(pb());
out.push(h2('22.6  The same message, two ways'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Listen for the version to the bank growing longer while the facts stay the same — that is the unit\'s point arriving on its own.'));
out.push(p('**b**  Expect: the opening, the length, how much is explained, whether it is an instruction or a question, the closing, the block. Not the facts and not the date.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Who she is, which account, what form is needed and why — everything the stranger cannot be assumed to know.  2 The facts and the date; two versions are a translation, not two stories.'));
out.push(p('**Language box – Practise (samples):**  1 _Thursday — auditor on Friday_ / _Could you confirm by Thursday that the 12th is possible?_  2 _Two boxes of twenty crushed, photographed_ / _Six of the forty boxes contain broken tiles; we have photographed them on the pallet._  3 _Thanks for Saturday_ / _Thank you for coming in on Saturday; it made the Homs delivery possible._  4 _No, not before the 20th_ / _I am afraid we cannot do it before the 20th. We can do the 21st, if that would help._  5 _The van is off the road till Tuesday_ / _I am sorry to say the delivery will now be Tuesday 13 May rather than Friday. The reason is a vehicle repair._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The same message goes to the warehouse and to the customer. Write both.'],
  ['B', 'To Abu Yasser: "The Haffar delivery is Tuesday now, not Friday. Van is off the road till Monday. Keep the twelve boxes on the bench."'],
  ['A', 'Good. Short, no explanation, because he knows the van and he knows the order.'],
  ['B', 'To Mr Haffar: "Dear Mr Haffar, I am sorry to say your delivery will now be Tuesday 13 May, not Friday the 9th. The reason is a vehicle repair. The goods are packed and set aside. If Tuesday does not work, I can send the twelve small boxes by taxi on Friday at our cost."'],
  ['A', 'That is the same message. Longer, because he cannot see the van or the bench.'],
  ['B', 'So formal means longer.'],
  ['A', 'Formal means more explained. And one thing never changes: the new date is Tuesday in both.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners check that the facts and the date match, then write what the formal version explained. Typical errors: a formal opening followed by an instruction · _Dear Abu Yasser_ (a nickname with _Dear_) · and the content fault of a date that has quietly moved between the two versions.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The message', 'To a colleague', 'To an outsider', 'What changed'], [
  ['delivery two days late', 'Haffar is Tuesday now. Van off the road.', 'Dear Mr Haffar, I am sorry to say your delivery will now be Tuesday 13 May…', 'opening, explanation, an offer added'],
  ['cannot do Friday', 'Can\'t do Friday — Monday?', 'I am afraid we cannot do Friday. We can do Monday the 12th, if that helps.', 'question form, the date spelled out'],
  ['thank you', 'Thanks for Saturday.', 'Thank you for coming in on Saturday; it made the Homs delivery possible.', 'the reason added'],
], [1, 1.4, 1.6, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"To Abu Yasser I wrote _Haffar is Tuesday now_. To Mr Haffar I wrote four lines with the date in full, the reason and an offer. What changed was the opening, the length and the form of the request; what did not was the date."']));
out.push(stage('5', 'Read'));
out.push(p('1 The thing wanted (the March statement / stock figures), the deadline — Thursday the 12th — the reason (the auditor, on the 13th), and the presence of an "if no".  2 Who the writer is, which account and company, that a stamp is required and a PDF will not do, and that there is an alternative the auditor accepts.  3 To the warehouse the "if no" is an offer of help — _I will come and count with you_; to the bank it is an alternative that is cheap for the reader — _ten minutes rather than two days_.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**The facts:** the Homs van leaves at six on the 15th, loaded the night before. **The date:** loaded by 6 p.m. on the 14th. **If no:** load at four on the morning of the 15th, with two extra men.', '**To a colleague** — Subject: Homs van — loaded by six on the 14th', 'Abu Yasser — the Homs van needs to be loaded by six on Tuesday evening, not Wednesday morning. It leaves at six on Wednesday and the driver will not wait. If six on Tuesday is not possible, tell me tomorrow and I will get you two extra men for four a.m. on Wednesday. — Hala', '**To an outsider** — Subject: Collection Wednesday 15 May, 6 a.m. — confirmation', 'Dear Mr Jaber, I am writing to confirm that your lorry can collect from our Mezzeh store at 6 a.m. on Wednesday 15 May. The pallets will be loaded and wrapped by 6 p.m. on Tuesday the 14th. Could you confirm by Monday that 6 a.m. suits your driver? If it does not, we can load from 4 a.m. instead, but we would need to know by Monday to arrange the men. Thank you. Best regards, Hala Mourad · Customer Service · Sham Trading Co. · 011 ___ ____']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The same facts in both', '✓'],
  ['The same date in both', '✓ – the 14th and the 15th in each'],
  ['An "if no" in both', '✓ – four a.m., in both'],
  ['Only the register changed', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says the facts and the date never change. Both of yours carry the 14th and the four a.m. — so the only thing I would ask is whether the colleague version needs _not Wednesday morning_ at all, since he has the date."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read both versions aloud and let the class listen only for differences in fact or date. Where one is found, ask the writer whether they had noticed. They almost never have, which is the strongest argument for writing the fact list first.'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(null, ['Two years ago I told a customer a delivery would be Thursday and told the warehouse Wednesday, to give myself a day. The warehouse sent it Wednesday. The customer was not there, the goods went back on the van, and when he telephoned he was told it had been attempted on Wednesday — the day he had been promised Thursday. He was not angry about the delivery. He was angry because two people in one company had told him two different things, and he was right.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"two people in one company had told him two different things"_   ✓ _was it register or fact?_   ? _Was the extra day deliberate, and did it ever help?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Sort the three texts into deliberate differences and careless ones. The careless kind is commoner and more damaging, because nobody is watching for it.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['I sent the holiday cover dates to the warehouse and to two customers. The warehouse has the 7th to the 11th and the customers have the 7th to the 12th. Nobody has noticed yet. I have corrected the customers.']));

// ===================== 22.7 =====================
out.push(pb());
out.push(h2('22.7  Review & Mediate: two emails compared'));
out.push(stage('1', 'Get ready – Unit 22 quiz (answers)'));
out.push(p('**1** _Mr_ takes the family name, so _Dear Mr Ayoub_.  **2** After the purpose, not before it.  **3** It is not a date, so it is treated as no date at all.  **4** _By_ Thursday includes Thursday.  **5** faithfully.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It never says what it wants.  2 Everybody writes it, so it carries nothing; a date is what makes something urgent.'));
out.push(p('**Language box – Practise (sample mediation):**  _"The long one is politer and it cannot be answered — read me the last line and tell me what you are supposed to do. The short one asks one question with a date on it, so you can answer it standing up. The short one will be answered first, and the long one will go in the pile."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'The long one is from head office, so it must matter.'],
  ['A', 'Read me what it wants.'],
  ['B', '"Certain changes may be implemented in due course which may affect your account."'],
  ['A', 'Which changes, when, and what should the customer do?'],
  ['B', 'It does not say. It says they value the custom.'],
  ['A', 'So the customer will telephone to ask, or ignore it and be surprised later. Read the short one.'],
  ['B', '"From 1 June the minimum order is 50 boxes, up from 30. Your last six orders have all been over 80, so this does not affect you."'],
  ['A', 'That one answers the question before it is asked, and it tells him he need do nothing. Which costs less?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what each long email wanted. Where it wanted nothing, that is the finding and it should be written down as nothing.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who I told', 'Which they thought was better', 'Which can be answered, and why'], [
  ['Fadi', 'the long one — it looked official', 'the short one: one question, one date, answerable in a word'],
  ['Bassel', 'the long one — "it is more respectful"', 'the short one: it says what to do and when, and the long one asks for nothing'],
], [1, 1.6, 2]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"One was long and very polite and one was four lines. The first wanted — nothing, in the end: it hoped for cooperation. The second could be answered in one word while standing up, because it asked one question and gave a date. The one that will be answered first is the short one, and the long one will be read, admired and put in the pile."']));
out.push(p('This is the **tenth** unit of Book 2, and the unwritten thing is the one the whole unit has been circling: an email is judged by whether it can be answered, and nothing on either page says so. Learners who get this stop asking whether their English is polite enough and start asking what the reader is supposed to do, which is a better question and a cheaper one to answer.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'A', 'B', 'A', 'B', 'C']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**3** and **4** are the pair worth ten minutes: _by_ Thursday makes Thursday the last day, _before_ Thursday makes Wednesday the last day. **6** is the unit in one question — a sentence that asks for nothing.'));
out.push(stage('6', 'Write with help – sample (31 words)'));
out.push(sample(null, ['Dear Ms Shamsi, I am writing to ask for a price for 300 boxes of wrap. We need it for the Homs contract. Could you send it by Friday? Thank you. Hala Mourad']));
out.push(stage('6P', 'Check together'));
out.push(p('All three points present: what (a price for 300 boxes) · why (the Homs contract) · by when (Friday). 31 words. Band 3 feedback should name the criterion: _"The task says three points — I can find the thing and the date; where is the reason?"_'));
out.push(stage('7', 'Write freely – sample (≈75 words)'));
out.push(sample(null, ['Dear Mr Jaber, I am writing about the 2024 invoice 3318, which we have still not paid. The amount is correct and the delay is ours. We will pay the whole sum by 30 May. If you need it earlier, telephone me and I will see what can be done this week. I am sorry this has taken ten months and that you have had to ask twice. Thank you for your patience. Best regards, Nour Mansour']));
out.push(p('The email people put off is nearly always one where they are in the wrong. Say so once, give a date, and the email becomes short.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['I sent it. He answered in two hours and said only that he had assumed we had decided not to pay at all, and that a date was all he had wanted for ten months. Ten months of silence, and the whole thing was one sentence long.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 22 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'a', 'a', 'b', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _Dear Mr_ + family name.  **2** _writing **to** ask_.  **3** _**With reference** to your email_.  **4** _**Could** you send_.  **5** _**by** Thursday_ when Thursday is the last day.  **6** no name → _faithfully_.  **7** _**in** advance_ — correct English, and better not written at all.  **8** _grateful **if** you could_.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Opening used', 'Purpose', 'Form required', 'Deadline', 'Confirmation by'], [[
  'Dear Mr Haddad', 'a certified copy of the March statement, account 4471', 'stamped — a PDF is not enough', '12 May', 'Thursday 8 May',
]], [1, 1.8, 1.3, 0.8, 1.1]));
out.push(note('The fifth gap is the one that separates the class. Learners who hear only the 12th have heard the deadline and missed the request that does the work.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (56 words)', ['Dear Ms Dagher, I am writing to ask for a certified copy of form 4/A for registration 11-4471. It must carry the office seal; a scan is not enough, because the bank requires the seal. We need it by 20 May, as the loan file closes on the 21st. Could you confirm by 15 May that this is possible? Thank you.']));
out.push(box('Marking the Unit 22 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Purpose in the first line (2) · a reference number (1) · the form required (1) · a date **with its reason** (2) · a separate, earlier confirmation date (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for the purpose are for **position**, as the apology marks were in Unit 21. A clear purpose in the fourth line scores 0 of 2. Say so before they write, not after.',
  '⚠ Give nothing for _at your earliest convenience_, _as soon as possible_ or _urgently_ in place of the date. They are the fault the cycle exists to remove and a mark for them undoes the week.',
  '⚠ The confirmation mark needs a **date earlier than the deadline**. _Please confirm_ with no date earns nothing.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 22**'));
out.push(p('**1 _Dear Mr_ + first name.** The commonest error in the region and the most visible, because it is in the first two words. It comes from the home language, where the first name with a title is normal and respectful. Do not explain it as rudeness — it is not heard as rude, it is heard as foreign. Drill the pair: _Mr Ayoub · Ms Shamsi_, never _Mr Khaled · Ms Dima_.'));
out.push(p('**2 The courtesy before the purpose.** Learners have been taught, correctly, that an abrupt opening is impolite, and the fix they were given was three lines of good wishes. Do not take the good wishes away; move them. Then make one specific — _thank you for the quick answer last month_ — and show how much more it does than two general lines.'));
out.push(p('**3 A deadline with no date.** This is a confidence problem wearing a grammar costume. _At your earliest convenience_ is what people write when they do not feel entitled to ask for a day. The treatment is 22.4\'s three parts — date, time if tight, reason — and especially the reason, because once the reason is on the page the date stops feeling like a demand. Watch for the false early deadline too, which is the same lack of confidence solving itself dishonestly.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 22 · Answer Key');
