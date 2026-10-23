// Proactive Business English B1 · Syria Edition · Book 1 · Unit 8 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 8  Options, Advice and the Second Conditional'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The second conditional is the easiest grammar in Book 1 and this is not an easy unit.** Learners will form *if I were you I would* correctly within ten minutes. What the unit is actually teaching is **what has to be attached to it** — a reason, a time, a figure, and the decision handed back — and none of that is grammar.',
  '⚠ **The two cycles that will produce resistance are 8.3 and 8.5**, for opposite reasons. In 8.3 learners discover that most of what they have written as *would* was never measured, and the honest response is embarrassment; **say early and clearly that nobody was exaggerating on purpose**, because a class that feels caught stops writing figures altogether. In 8.5 the resistance is to the idea that making it easy for somebody to say no produces more yeses, which sounds like a trick until they hear Mr Ayoub\'s reason.',
  '⚠ **The do-nothing option in 8.7 is the unit\'s one non-negotiable.** An options paper with two options has decided, and the writer will win the argument because they have had a week and the reader has four minutes. ⚠ In the dialogue the honest third option saves the company from Nour\'s own recommendation — **that is the whole case, and it is better than any argument about balance.**',
], C.grey, C.navy));

// ===================== 8.1 =====================
out.push(h2('8.1  If I were you'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Collect the reasons people took advice; almost nobody says *because they were senior* and almost everybody says something about a reason or a deadline.'));
out.push(p('**b**  The second. *You should write to him* says what the adviser wants; the second says what the adviser **knows**, and can be acted on without agreeing with them.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **A reason** (he reads his invoices on a Thursday; he telephones Mr Ayoub monthly) and **a time** (before one o\'clock).  2 She would **not** explain the price list — *the moment you explain, it sounds like a reason it might happen again*.'));
out.push(note('⚠ The distinction in the last four lines is the one learners take away and use for years: *there is a difference between answering a question and volunteering a system.* ⚠ Ask the class for an example from their own work and expect a good one immediately.'));
out.push(p('**Language box – Practise (samples):**  1 _If I were you I would telephone him today, because he reads his invoices on Thursday — before one. I would not explain the list unless he asks._  2 _…I would write it in the complaints book today, because the auditor will ask for the book on Thursday. I would not invent a date I cannot remember._  3 _…I would telephone the supplier before she telephones Mr Ayoub, because she speaks to him monthly. I would not promise a payment date I cannot control._  4 _…I would tell the trainee today, before she goes home, because the stock count is Monday. I would not correct the cards silently._  5 _…I would give what is mine in writing now and put the rest up, because he will otherwise hear a no from somebody else. I would not hint that it might be approved._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Lina has mis-entered nine stock cards. I was going to correct them myself and say nothing.'],
  ['B', 'If I were you I would tell her today, before she goes home. Two reasons. The count is on Monday, so if you do not tell her somebody else finds it in front of four people; and she will do it again on Thursday, because she does not know she is doing it.'],
  ['A', 'And if she takes it badly?'],
  ['B', 'Then she takes it badly today from you, rather than on Monday from the stock sheet.'],
  ['A', 'Would you say anything about it being nine?'],
  ['B', 'I would say nine, because the number is the thing that stops it sounding like a complaint about her. ⚠ I would not go through all nine with her — I would show her two and let her find the rest.'],
  ['A', 'You are not telling me to do it.'],
  ['B', 'No. **But you asked what I would do, and I would do it before she goes home.**'],
]));
out.push(note('⚠ *I would show her two and let her find the rest* is the kind of concrete *I would not* that the cycle wants, and it is worth pointing out that it is kinder **and** more effective, which is not always true of advice.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the reason, the time and the *I would not*, then whether the decision was actually handed back. **Typical errors:** _if I was you_ (acceptable in casual speech, wrong in the written form this unit teaches) · _if I were you I will telephone him_ · _if I were you I would to telephone_ · and the content fault, which is advice with a reason and no time. ⚠ Advice with no time is almost never taken on the day it is given, and that is worth saying as a fact rather than a rule.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Their decision', 'If I were you I would…', 'Because', 'By when', 'I would not…'], [
  ['an invoice error in our favour', 'telephone him', 'he reads invoices Thursday', 'before 1.00', 'explain the list unless asked'],
  ['a complaint never written up', 'write it in the book', 'the auditor asks for the book', 'today', 'invent a date'],
  ['a trainee\'s nine wrong cards', 'tell her', 'the count is Monday', 'before she goes', 'go through all nine'],
  ['a supplier unpaid two months', 'telephone her first', 'she speaks to Mr Ayoub monthly', 'this morning', 'promise a date I cannot control'],
], [1.1, 1.3, 1.3, 0.7, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"If I were Hala I would telephone him, because he reads his invoices on a Thursday, and I would do it before one. I would not explain the price list unless he asks."', '⚠ Count the pieces of advice with no reason. **Then notice out loud that those are the ones that sounded most confident** — which is the mechanism worth naming, because the class will otherwise conclude that confident advice is good advice.']));
out.push(stage('5', 'Read'));
out.push(p('1 That he reads his invoices on a Thursday, and that he speaks to Mr Ayoub monthly — and she says they are **about timing rather than about honesty**.  2 Explain the price list — because *an explanation offered before it is wanted reads as a reason it will happen again*.  3 Tell him the truth **including that she advised otherwise**.'));
out.push(note('⚠ Question 3 is the paragraph to read twice. A promise of silence that could not survive a direct question is worth nothing, and the version here is keepable and says exactly what it is. ⚠ Learners frequently write *I will not mention it to anybody*, which is a promise they cannot keep and which will be discovered precisely when it matters.'));
out.push(stage('6', 'Write with help – sample (140 words)'));
out.push(sample(null, [
  '**Lina — the nine stock cards. 18 November.**',
  'You asked what I would do, so here it is and then it is yours.',
  '**I would tell Samira today, before five.** Two reasons and they are both about who finds it rather than about the mistake. The count is on Monday, and if she finds it from the sheet she finds it in front of the whole workshop. And she will assume it has been going on for months, because nine cards is the number that looks like a habit.',
  '**I would say the number and the dates and stop.** ⚠ I would not explain how it happened unless she asks, because the explanation is about the card layout and it will sound like an argument that it was not your fault.',
  '**What I would not do.** I would not correct them quietly. Not because that is dishonest — the figures would be right — but because you would not know whether you had learned anything until the next nine.',
  '⚠ **It is yours.** If you decide to wait, I will not raise it, and if Samira asks me directly I will tell her the truth including that I advised otherwise.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*If I were you I would…* with a time on it', '✓ before five'],
  ['Reasons, and what kind of reasons they are', '✓ about who finds it'],
  ['What to say, and what not to say unless asked', '✓'],
  ['The decision handed back, with the limit of the writer\'s discretion', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Last paragraphs read out. **Ask which promise the writer could actually keep.** ⚠ The unkeepable version (*I will not mention it to anybody*) will appear several times and it is worth treating gently: it is written out of loyalty and it is the one that destroys trust when it fails.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'In 2023 Samira told me not to take on the hotel contract. I took it.',
  'She gave me one reason, which was that they pay in sixty days and we buy steel in cash, and she said it in about nine words on the way past my desk. I heard it as caution — she is cautious — and I did not hear it as arithmetic.',
  'It was arithmetic. We carried about four million of their steel for three months and borrowed against the yard to do it, and the contract made us nothing in the first year.',
  '⚠ She has never mentioned it again, not once, which I find harder than if she had. **What I think now is that she gave me the reason and I did not ask for the figure, and the figure was the whole argument and she had it.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _why they did not take it_ — "heard it as caution, not as arithmetic"   ✓ _second conditional used for advice, not prediction?_ — yes   ? _did the adviser give a reason at the time?_ — "a reason, in nine words, and no figure"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually one in three pieces of advice came with a reason. ⚠ **And in the other two the reason, had it been given, would probably have changed the decision** — which is the finding that matters, because it means the failure was in the advising and not in the listening.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I gave Lina the advice with the reason and the time and handed the decision back in those words. She said nobody had ever told her a thing was hers to decide. ⚠ She told Samira the same afternoon, and said the number first, which I had not advised and which was better.']));

// ===================== 8.2 =====================
out.push(pb());
out.push(h2('8.2  If we changed it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Note how many answers begin *it would never work* — the cycle\'s second half is that it usually would work, and would break two things.'));
out.push(p('**b**  The second. *Should we move it?* invites a yes or a no from somebody who has not thought about it; *what would stop working?* cannot be answered without thinking.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 *If we moved the Ghouta run…, what would stop working?*  2 That *would it work* is **a question you can answer yes to and still be right**, and it tells the person asking nothing at all.'));
out.push(note('⚠ The crucial point for the class: Abu Yasser was not withholding anything last year. He answered the question he was asked, truthfully, and two things broke. ⚠ A class that hears this as a story about a difficult employee has missed the unit; a class that hears it as a story about a badly chosen question has it.'));
out.push(p('**Language box – Practise (samples):**  1 _If we moved the delivery day, what would stop working? — the Wednesday lorry and the Saturday counter._  2 _If we closed at two on Thursdays, what would stop working? — the bank run at 2.30 and the late trade customers. Narrowed to three, only the bank run, and that could be Wednesday._  3 _If we had one price list, what would stop working? — the Baghdad Street counter on Thursdays, which has its own copy in a van._  4 _If we banked twice a week, what would stop working? — the float, and the insurance limit nobody has read since 2019._  5 _If we took on a second assistant, what would stop working? — nothing, and that is why the answer is about money rather than about the work._'));
out.push(note('⚠ Item 5 is a deliberate case where the answer is **nothing breaks**. Learners will try to find a breakage. ⚠ Saying *nothing would stop working, so this is purely a cost decision* is a complete and valuable answer, and it is the one that moves a conversation out of operations and into the one place it can be settled.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'If we banked twice a week instead of daily, what would stop working?'],
  ['B', 'Two things, and one of them is not about banking.'],
  ['A', 'Go on.'],
  ['B', 'The float would have to about double, because Thursday\'s takings would sit here until Sunday and we pay the yard men on a Thursday out of the till.'],
  ['A', 'And the second?'],
  ['B', 'The insurance covers cash on the premises up to a figure. I do not know the figure. ⚠ Nobody has read that policy since 2019 and we would be doubling the thing it limits.'],
  ['A', 'That is not a reason against. It is a thing to find out.'],
  ['B', 'It is — and if the figure is low it is a reason against, and if it is high it is nothing. **Either way I would not change the banking before somebody reads it.**'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what would break in round one and round two, then whether the second thing was in anybody\'s plan. **Typical errors:** _if we would move the run_ · _if the van was out nobody will be here_ (mixing the hypothetical with a real future) · _what would stop to work_ · and the content fault, which is working the answer out at a desk instead of asking the person who would have to do it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The change', 'Who would have to do it', 'What would stop working', 'Narrowed — what breaks then'], [
  ['Ghouta to Wed and Sat', 'Abu Yasser, Fadi', 'the Saturday counter; the Wednesday wrap; the Saturday road closure', 'Wed and Fri: only the wrap, which would move to Thursday'],
  ['bank twice a week', 'Nadia', 'the float would double; the insurance limit is unread', 'bank three times: the float rises less and the limit still needs reading'],
  ['close at two on Thursdays', 'the counter', 'the bank run at 2.30; late trade customers', 'close at three: only the bank run, which could be Wednesday'],
], [1.2, 1.1, 1.8, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"If we moved it to Saturday, the counter would be one man and the wrap would have nobody to unload it and the market road is shut until eleven. If we moved it to Friday instead, only the wrap breaks, and Ms Shamsi would move to Thursday if anybody asked."', '⚠ Count how many of the broken things were known to exactly one person. **That number is the argument for asking rather than for planning better** — the information was never missing from the company, only from the room.']));
out.push(stage('5', 'Read'));
out.push(p('1 Both said it **would work** — *which is true and is why nobody has found these before*.  2 On a Saturday the Ghouta road is closed at the market end until about eleven, so the run would finish after the shops shut; he has known it for **four years** and has never been asked about a Saturday.  3 Because it *would be read as the serious proposal with objections attached rather than as a thing I have already tested and dropped*.'));
out.push(note('⚠ The telephone call to Ms Shamsi is the move to teach from this page. *So that the paper says she has agreed rather than she would probably agree* — one call converts a hypothetical into a fact, it is almost always available, and almost nobody makes it before writing the paper.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**IF WE MOVED THE GUILLOTINE TO NIGHTS — what would stop working.**',
  '**The proposal as it was put to me.** Run the guillotine from six to ten in the evening, on the generator, to keep it off the daytime window.',
  '**I asked the two men who would have to do it what would stop working.** Not whether it would work. Both said it would work, which is true and is why nothing has been found before now.',
  '**Rami — two things.** The generator carries the guillotine or the compressor, not both, and the compressor is what the spray booth runs on in the evening. And the sheet store is locked at six by whoever leaves, so the night man would need a key that currently does not exist.',
  '**Khalil — one thing, and it is not about the machine.** ⚠ He has a bus at ten past ten and there is no later one. He has known this for the whole nine months the idea has been discussed and nobody has asked him what time he goes home.',
  '**The narrowed proposal.** Five to nine instead. The bus problem goes and the booth is finished by seven. Only the key breaks, and a key can be cut for 15,000.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The question *what would stop working*, asked of named people', '✓ Rami and Khalil'],
  ['Objections attributed, with how long they have been known', '✓ nine months'],
  ['A narrowed proposal that breaks fewer things', '✓ five to nine'],
  ['The last gap closed, and what the writer would not put forward', '✗ **the key has not been cut** — one gap left open'],
], [5, 1]));
out.push(note('⚠ Leave that ✗. Cutting the key costs 15,000 and would let the paper say *the key exists* rather than *a key can be cut*, which is exactly the Ms Shamsi move and the class should spot it.'));
out.push(stage('6R', 'Share'));
out.push(p('The never-asked objection read out. **Collect how long each had been known.** ⚠ The bus at ten past ten, known for nine months, is the kind of answer this cycle produces every time it is run honestly — and nobody was hiding it.'));
out.push(stage('7', 'Write freely – sample (131 words)'));
out.push(sample(null, [
  'We moved the paint store from the back of the workshop to the container in the yard in 2024, to free the bench space. It worked and it broke the winter.',
  'What nobody predicted is that the container is unheated. Below about four degrees the paint will not spray properly and has to be brought inside and left for two hours, which means that from December to February every spray job needs planning the day before.',
  'The man who knew was Khalil, who had kept paint in a container at his last job. ⚠ **He was asked whether the container would hold it, and it does, and that was a truthful answer to the question he was asked.** What would have found it is *what would stop working in January?* — and the January part is the whole of it.',
]));
out.push(note('⚠ *What would stop working in January?* is a refinement the sample arrives at on its own and it is worth putting on the board: **a hypothetical with a season or a month in it finds things the general version misses**, because people answer about the conditions they are currently in.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _who had known it would break_ — "Khalil, from a previous job"   ✓ _if + past, would + infinitive throughout?_ — yes   ? _what exactly were they asked at the time?_ — "whether the container would hold it, which it does"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In all three somebody had known. ⚠ **And in all three that person had been asked a question they answered honestly.** Say it in those words: the class should leave 8.2 believing the fault is in the question, because that is the only version of the lesson they can act on.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I asked Rami what would stop working if we went to nights, and then narrowed it twice. The third round found the thing: the sheet store key. ⚠ Three rounds took four minutes and I had been thinking about this proposal on my own since March.']));

// ===================== 8.3 =====================
out.push(pb());
out.push(h2('8.3  Would, might, could'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second half of the question — *what would make you surer?* — is the one that produces the useful answers, and it is usually *measuring it for a fortnight*.'));
out.push(p('**b**  *Would* = measured or arithmetic. *Might* = may happen on its own, not measured. *Could* = becomes possible, and usually needs a second decision by somebody.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 *Could* names what **becomes possible** and usually needs a second decision; *might* is what may happen on its own.  2 It reads as three guesses, ⚠ **and then the measured one is worth no more than the other two — which wastes the three weeks of measuring.**'));
out.push(note('⚠ That last point is the one that persuades learners to use the weak words, and it is an argument from self-interest rather than from accuracy. ⚠ Say it in Nadia\'s terms: the strong word only has value if the weak ones are present. A paper of *woulds* has thrown away its own best figure.'));
out.push(p('**Language box – Practise (answers):**  1 **would** — timed for three weeks.  2 **might** — two instances is not a pattern.  3 **could** — the hours exist but somebody must decide where they go.  4 ⚠ **we do not know** — not *might*; the queue has never been measured and the writer cannot see how to.  5 **might**, or **we do not know** — and a learner who argues for either has understood the cycle.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Your paper says the second van would restore four Ghouta days, would bring back the two customers, and would allow a Saturday run. Which have you measured?'],
  ['A', 'The four days. That is arithmetic — two vans, four days, it is how it was until August.'],
  ['B', 'And the two customers?'],
  ['A', 'Not measured. They halved their orders in August and have not changed since.'],
  ['B', 'Then that is **might**, and it may be weaker than that.'],
  ['A', 'It is. They have not said they would come back. ⚠ It is *we do not know*.'],
  ['B', 'And the Saturday run?'],
  ['A', '**Could.** The van would exist; whether anybody works Saturday is a different decision and I have not asked.'],
  ['B', 'So one would, one we-do-not-know, one could — and the *would* is the only one he will act on.'],
]));
out.push(note('⚠ The learner in that sample downgrades their own claim twice, from *would* to *might* to *we do not know*, in four lines. ⚠ That is the performance to praise: the second downgrade is harder than the first and is what distinguishes this cycle from a vocabulary exercise.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the claims with the right modal and find one that should be *we do not know*. **Typical errors:** _it would to save two hours_ · _it could be possible to being on the counter_ · _it will save two hours_ (the real future for a hypothetical) · and the content fault, which is three *woulds*. ⚠ Mark the third gently: it is produced by learners who are confident rather than careless.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The claim', 'would / might / could / we do not know', 'Why that word'], [
  ['saves about two hours a week', '**would**', 'timed, 61 orders over three weeks'],
  ['reduces pricing errors', '**might**', 'two instances; not a pattern'],
  ['frees Hala for the counter', '**could**', 'a second decision, not in this proposal'],
  ['shortens the queue at opening', '**we do not know**', 'never measured, and I cannot see how to'],
  ['stops a customer leaving', '**we do not know**', 'nobody has said why the last one left'],
], [2, 1.3, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"One would: two hours, timed over three weeks across sixty-one orders. One might: the errors, and two is not a pattern. One could: Hala on the counter, which is a second decision. And two we-do-not-knows."', '⚠ Count the room\'s *woulds* against the measurements behind them. ⚠ **Then say plainly that nobody was exaggerating on purpose** — the word is the default in English for anything one believes, and the class needs that said before they will keep writing figures at all.']));
out.push(stage('5', 'Read'));
out.push(p('1 The two hours — sixty-one orders timed across three weeks against both systems, 1 minute 50 against 55 seconds.  2 Because *the hours would exist; whether they go to the counter, to the complaints book or to nothing at all is somebody else\'s choice and I have not assumed it*.  3 With one list, a wrong list is wrong **everywhere** and there is no second copy to catch it — a risk that **did not exist before** — and the writer has not found a way to remove it: *printing on Fridays with two initials is the best I have, and it is a procedure rather than a safeguard*.'));
out.push(note('⚠ The last distinction is worth putting on the board: **a procedure is something people do and a safeguard is something that catches them when they do not.** Most things called safeguards are procedures, and a writer who knows the difference will be believed about both.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**ONE SHARED CUTTING LIST — what it would, might and could do.**',
  '**What it would do.** It **would** remove about forty minutes a day of walking between the office and the saw. I timed it for a fortnight: eleven trips a day at about three and a half minutes. ⚠ This is the only figure I have measured and the only one I would defend.',
  '**What it might do.** It **might** reduce wrong cuts. There have been three this year and two of those involved somebody working from a remembered measurement. Three is not a pattern and I am not going to call it one.',
  '**What it could do.** It **could** let the saw run while the office is shut, because the list would be at the saw. That is a second decision about hours and overtime and is not part of this.',
  '**What we do not know.** Whether it would make the Thursday rush easier. I have not measured the rush and I do not know how to, because it depends on who walks in.',
  '⚠ **One thing against.** A list at the saw gets wet and oily, and a wrong figure on a dirty list will not be noticed.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One *would*, with its measurement shown', '✓ eleven trips, 3.5 minutes, a fortnight'],
  ['*Might* where there is no pattern, and the refusal to call it one', '✓'],
  ['*Could* marked as a second decision', '✓'],
  ['A *we do not know*, and one thing against', '✓ both'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *one thing against* read out. **Ask which paper the class would act on.** ⚠ It is the one with a risk in it, every time, and the reason is worth saying: a paper with nothing against it tells the reader only that the writer wanted the change.'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'The computer was going to do three things: find a customer in five seconds, print an invoice, and tell us what was in stock. It does the second one.',
  'Finding a customer takes about the same as the cards did, because half of them are not on it. The stock figures are wrong for the largest store room, so nobody uses them and we count.',
  'The invoices are genuinely better. They are legible, they add up, and they have a number that means something.',
  '⚠ Nobody measured anything beforehand. The man who sold it said all three with *would*, and he was not lying — he had seen it do all three somewhere else. **What nobody said, including us, was which of the three depended on us entering four thousand customers and which did not, and that was the only question that mattered.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _which promise was kept_ — "the invoices, and they are genuinely better"   ✓ _would / might / could matched to the evidence?_ — yes, and the seller\'s *woulds* are quoted deliberately   ? _which of the three had anybody measured beforehand?_ — "none; and the real question was which depended on our own work"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually nothing had been measured. ⚠ **And the three promises were all made with *would*, by somebody honest** — which is the mechanism, and it is worth closing the cycle on it: the word costs nothing to use and it is what empties a measured claim of its value.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I had written that a second saw bench *would* halve the Thursday queue. I timed the queue for four days and it is not a queue for the saw, it is a queue for the measurements. ⚠ So the claim is now *we do not know*, and the saw bench is the wrong thing to buy.']));

// ===================== 8.4 =====================
out.push(pb());
out.push(h2('8.4  The conditions under which yes becomes yes'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Almost everybody has one, and it is usually a quantity or a date.'));
out.push(p('**b**  The second. *It depends on a few things* is a yes the other person cannot plan around, which makes it worse than a no.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Forty rolls not forty-five — *I can defend forty every month of the year, including August*; and the delivery day from Wednesday to Thursday — *that is not about the wrap; it is about a van*.  2 ⚠ That it will one day be pointed to, and the only thing it achieves is **making a four-year habit look like an obligation** — *two conditions I will enforce are worth more than five I will not*.'));
out.push(note('⚠ Nour declines a condition that is offered to her, unprompted, in her own favour. ⚠ Learners find this the most surprising moment in the unit. The reasoning is entirely practical and should be given as such: the clause adds nothing she does not already have and converts goodwill into a term that can be breached.'));
out.push(p('**Language box – Practise (samples):**  1 _Yes, provided the quantity is forty a month — which I can defend in August — and as long as the price is in writing._  2 _Yes, provided the order comes on a numbered form, and as long as the balance is clear at the month end._  3 _Yes, provided thirty days from invoice and not from delivery, and as long as the first one is paid before the second is placed._  4 _Yes, provided the day is Thursday, and as long as you tell us by the Monday if you are not sending._  5 _Yes, provided it is in the original packaging, and as long as it comes back inside fourteen days._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I want to be able to send back anything I have not used.'],
  ['B', 'Then the answer is yes, provided two things, and both are mine to give.'],
  ['A', 'Go on.'],
  ['B', 'Provided it is in the original packaging — not because of the packaging but because unwrapped stock cannot go back on a shelf. And as long as it comes back inside fourteen days, which is how long the price is held, so the credit matches the invoice.'],
  ['A', 'And should I telephone first?'],
  ['B', 'I would like you to, and I am not going to make it a condition.'],
  ['A', 'Why not?'],
  ['B', '⚠ Because the day you forget, somebody here will point at the sentence and refuse a return I would have accepted. **I would rather you telephoned because it helps than because it is a rule.**'],
]));
out.push(note('⚠ That last exchange is the clearest statement of the cycle\'s principle: a condition is a weapon somebody else in your own company may one day pick up. ⚠ Learners write conditions imagining themselves applying them, and the correction is to imagine a colleague applying them on a bad afternoon.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two conditions with their reasons, then the refused third and what writing it down would have cost. **Typical errors:** _provided that the quantity will be forty_ (the present, not *will*) · _unless the quantity does not fall below thirty_ (the double negative) · _as long as that the day moves_ · and the content fault, which is three or four conditions where two were enforceable.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What they ask', 'Condition 1, and what it is for', 'Condition 2, and what it is for', 'One I would not write'], [
  ['a three-month price', 'forty a month — defensible in August', 'delivery moves to Thursday — about a van', 'that she tells us before a price moves'],
  ['thirty-day terms', 'orders on a numbered form — traceability', 'balance clear at month end — exposure', 'that he gives notice of an address change'],
  ['returns of unused stock', 'original packaging — it must be resaleable', 'fourteen days — matches the held price', 'that he telephones first'],
  ['a standing order', 'a fixed day — the van', 'notice by Monday if not sending — the load plan', 'that the quantity never varies'],
], [1.1, 1.6, 1.6, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Yes, provided forty a month, which is about August, and as long as the day moves to Thursday, which is about a van. And I would not write down that she tells us before a price moves, because she already does."', '⚠ Count the conditions in the room nobody would ever check. ⚠ **Then ask who would be the first person to point at one** — and the answer is almost never the other party. It is a colleague, on a bad afternoon, refusing something the writer would have allowed.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because forty can be defended in **every month including August**, when their own trade halves; forty-five would be comfortable for nine months and would be *a conversation about August*.  2 That if the van comes back the day can move back — because *a condition that only runs one way is not a condition, it is a term*.  3 That she tells them before a price moves. Written down it *stops being something you do and becomes something you owe*, and the only use anybody would make of it is to point at it on a day when the market moved faster than the post.'));
out.push(note('⚠ *A condition is only as good as its worst month* is the transferable principle here, and it generalises well beyond price: a limit, a lead time or a staffing arrangement that works for nine months is a nine-month arrangement with three months of argument attached.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**To Mr Haffar. 21 November. The Tuesday standing order.**',
  'Yes — and **provided two things**, both of which are mine to agree.',
  '**One. Twelve sheets a week, not twenty.** Twelve is a figure I can cut in any week of the year, including the three weeks in August when we run one shift. Twenty would be comfortable for most of the year and would be a conversation every August, and I would rather have a number that never needs one.',
  '**Two. The day is Thursday, not Tuesday.** This is not about your order: our sheet delivery arrives Wednesday and cutting on Thursday means your sheets are from that week\'s steel rather than the previous week\'s. **If our delivery day changes I will tell you and the day can move** — a condition that runs one way is not a condition.',
  '⚠ **What is not in this letter.** You offered to take whatever we had left at the end of a month. You have done that twice and it has helped twice, and I would rather not write it down: written down it becomes a thing you owe, and the only use of the sentence would be to hold you to it in a month you could not afford.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Yes, with the number of conditions given first', '✓'],
  ['Each condition with what it is for', '✓'],
  ['One condition that runs both ways', '✓ the delivery day'],
  ['Something deliberately left out, with the reason', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *what is not in this letter* paragraphs read out. **Ask which clause the writer was right to leave out.** ⚠ Expect disagreement, and let it run — the judgement is genuinely a judgement, and the thing being learned is that it is one.'));
out.push(stage('7', 'Write freely – sample (133 words)'));
out.push(sample(null, [
  'Our terms say that no claim will be considered unless made in writing within three working days. Nobody has ever used that clause and about a dozen claims a year are made by telephone and settled.',
  'It went in in 2019, after a customer claimed for a load he had taken eleven months earlier. Somebody — probably my father — asked the accountant for a sentence and got that one.',
  '⚠ If somebody pointed at it tomorrow, every telephone claim we have settled this year would have been settled outside our own terms, which an auditor would ask about and which would look like a dozen favours rather than a dozen ordinary transactions. **The clause does not protect us from customers. It would be used by somebody inside this company to refuse a claim on a bad afternoon, and then we would lose the customer and keep the clause.**',
]));
out.push(note('⚠ The last sentence is the cycle\'s central insight reached independently, and it also names a second cost nobody mentions in the unit: a clause nobody honours makes every ordinary transaction look like an exception. Put that on the board if a learner produces it.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _why the clause was put in_ — "an eleven-month-old claim, in 2019"   ✓ _provided that / as long as / unless used correctly?_ — yes   ? _who would point at it, and what would it get them?_ — "somebody inside the company, and it would get them one refused claim and one lost customer"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Some clauses protect somebody and some are the residue of a forgotten argument. ⚠ **And it is the second kind that get used**, because the first kind everybody respects — which is a counter-intuitive and reliable observation about documents, and it closes the cycle better than any rule.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Two conditions on the Thursday order, each with its reason, and the delivery-day one runs both ways. ⚠ Mr Haffar wrote back to ask what would happen if our steel arrived late, which is the same question from his side and which I had not thought to answer. So it runs both ways twice now.']));

// ===================== 8.5 =====================
out.push(pb());
out.push(h2('8.5  Advice upwards'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second question matters more than the first and the answers are rarely about fear. Collect them.'));
out.push(p('**b**  The second. The first asks the recipient to agree with an opinion; the second gives them a date, a reason and a figure and leaves them to decide.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 That *you might want to* is **not politeness** — it is the form of words that leaves him **able to say no in one syllable**, and because of it he has said yes to about four things this year he would have argued with.  2 They tell him in March; or tell him now and leave out the draft, so saying yes costs him an evening; ⚠ or sign it in his name and tell him afterwards — which has happened twice, and both times he would have sent the letter and both times he was angry for a week **about something else entirely**.'));
out.push(note('⚠ The diagnosis in Mr Ayoub\'s last two speeches is the most useful thing in the cycle: what is resented is not the letter but **losing the ability to say no without a fuss**, and the resentment then attaches itself to something unrelated and lasts a week. ⚠ Several learners will recognise having been on both sides of this.'));
out.push(p('**Language box – Practise (samples):**  1 _You might want to write to the bank before the 30th. The review is on the 30th and the quarter is 14.2 against 11.6. It is drafted and unsigned, in your tray._  2 _You might want to look at the van quotes. Ghouta has been halved for four months and two customers halved their orders; three quotes are in your tray and the lowest is 1.9 million._  3 _It may be worth raising the credit ceiling. Sixty-one this year, forty-three above it; the paper is written._  4 _You might want to telephone Ms Shamsi before she telephones you. She has not been paid for September and it is the first time in four years._  5 _One option would be a price review in January rather than March. The list has moved twice; I have done the arithmetic on both dates._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'You might want to write to the supplier before the end of the month. She has not been paid for September and she telephones you monthly.'],
  ['B', 'No.'],
  ['A', 'Then I will leave it.'],
  ['B', '…'],
  ['A', '…'],
  ['B', 'You are not going to ask why?'],
  ['A', 'No. It is yours and you said no. If something changes I will bring it back.'],
]));
out.push(note('⚠ Role card 2 is the performance worth rehearsing twice. ⚠ *Then I will leave it* — seven words, no sigh, no second attempt — is harder than the advising, and it is the thing that makes the next piece of advice welcome. A learner who adds *but I really think…* has undone the whole cycle, and should be stopped and asked to run it again.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two reasons, the figure and the work done — and for role card 2, what A said after the no. **Typical errors:** _you might want to writing to the bank_ · _it may be worth to telephone him_ (*worth* + gerund) · _one option would be sending it_ — acceptable, and *would be to send* is the house form · and the content fault, which is advice with the decision already taken.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What they might want to do', 'Reason 1', 'Reason 2', 'The figure', 'The work I have done'], [
  ['write to the bank before the 30th', 'the review is on the 30th', 'after it, the next is April', '14.2 v 11.6', 'drafted, unsigned, in the tray'],
  ['look at the van quotes', 'Ghouta halved four months', 'two customers halved orders', '400,000/mo v 1.9m', 'three quotes, in the tray'],
  ['raise the credit ceiling', '43 of 61 above it', 'none of the 61 wrong', '250,000', 'the paper is written'],
], [1.3, 1.1, 1.1, 0.8, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['The advice given to the class as if to the decider, then: _"I will give it on Thursday morning, because he does the bank on Thursdays and the draft will be two days old rather than a fortnight."_', '⚠ Count the pieces of advice that arrived with the work done. ⚠ **Then ask which of them would take an evening to say yes to** — and point out that an evening is the commonest reason a good idea is postponed into nothing.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because after the review the next one is April, and by April the comparison is against a quarter that included the second site, so the improvement will look like half of what it is — *the figures are as good as they are going to look for about five months*.  2 The second van — *the strongest argument we have for needing the facility and the weakest thing to put in a letter asking for it*, because a letter saying *we cannot afford to repair a vehicle* answers a question they have not asked.  3 That if he would rather not, she will send nothing and not raise it before April — ⚠ *there is nothing behind this note*, she is not building to a conversation about the van, and she will not be disappointed.'));
out.push(note('⚠ Question 2 is also a lesson about writing to banks and it is worth giving as one: **the argument that persuades you internally is often the argument that damages you externally**, and the two have to be separated deliberately. ⚠ And she flags that she has made the judgement, which is what keeps it hers to be overruled on.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**Mr Nassif — the hotel contract renewal. 22 November. One page, and the figures are behind it.**',
  '**You might want to decide on the hotel before the 15th.** Their purchasing man leaves at the end of the month and the renewal would then go to somebody who has never dealt with us. And our own steel price is held until the 20th, so a quotation sent before the 15th is a quotation we can honour.',
  '**The figure.** Three years of the contract: 31 million of work at a gross margin of about 9 per cent, against about 17 per cent on trade counter work. **The contract is a third of our turnover and about a fifth of our margin.**',
  '**What I have done and what I have not.** The three years are worked out and attached. I have not telephoned the purchasing man and I have not drafted a quotation.',
  '**The one real judgement.** I would not renew at 9 per cent, and I know that is a view about the whole shape of the business and not about a contract.',
  '⚠ **And if you would rather not.** Then I will say nothing further and I will prepare the renewal at the current figure as soon as you tell me to. There is nothing behind this note.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*You might want to* + an action and a date', '✓ before the 15th'],
  ['Two reasons and a figure', '✓'],
  ['What has been done **and what has not**', '✓ two negatives'],
  ['One flagged judgement, and a real *if you would rather not*', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Last paragraphs read out. **Ask which one the class believes.** ⚠ The tell is usually a request attached to it — *let me know by Friday* — which converts the whole note into a demand and should be pointed out without being mocked, because it is written out of conscientiousness.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'I have thought for two years that we should stop quoting for hotel fit-out work and I have never said it in one piece.',
  'What has stopped me is not that he would be angry. It is that the argument takes about twenty minutes and ends in a decision about what the business is, and there has never been a twenty-minute space in which that conversation would not have been an interruption of something.',
  '⚠ If I wrote it as a note it would be one page: the three-year margin against the counter margin, the two men it ties up, and what we turned down in September because the hotel job was on. **Written down it is a decision he could take in four minutes, and spoken it is twenty — and the reason it has waited two years is entirely the difference between those two numbers.**',
]));
out.push(note('⚠ That is the best possible outcome for 8.5\'s stage 7: the learner identifies that the obstacle was the **format**, not courage and not the relationship. ⚠ Ask the class how many of their unsaid things are twenty-minute conversations that would be four-minute notes.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what has stopped them_ — "the argument takes twenty minutes and there has never been a twenty-minute space"   ✓ _you might want to / it may be worth?_ — in the hypothetical note, yes   ? _what work could they do first so that saying yes costs nothing?_ — "the three-year margin comparison, which is an afternoon"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('What stops people is rarely fear of the answer. ⚠ **It is usually that the advice would cost the recipient an evening, and nobody wants to be the person who creates an evening** — which is a solvable problem, and the solution is the whole of this cycle: do the work first.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I wrote the hotel note. One page, two reasons, the margin figures, and *if you would rather not* at the end. ⚠ I have not given it to him. I have put a date on it — the Thursday after the renewal is signed — because giving it now would be a note about a decision and giving it then is a note about a policy.']));

// ===================== 8.6 =====================
out.push(pb());
out.push(h2('8.6  Advice to a stranger'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Collect the questions and count them; most learners name one or two and the useful number is three.'));
out.push(p('**b**  The second. It names the basis, names the blind spot, and can therefore be acted on by somebody who knows something the adviser does not.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 How the pallets are handled at the Aleppo end — *if they are dragged rather than lifted, the standard will tear at the base and the heavy-duty will not, and nobody on a telephone can know that*.  2 Buy **four rolls, not forty**, and send one load.'));
out.push(note('⚠ The treatment of the other adviser is the move to teach: *he may know something I do not — did he ask about stacking?* ⚠ It is fair, it does not disparage him, and it produces the decisive fact (*he did not ask me anything*) from the caller\'s own mouth. Attacking him directly would have produced a defence of him instead.'));
out.push(p('**Language box – Practise (samples):**  1 _Three questions: how far, stacked, hand-unloaded? From what you tell me the standard is probably right. I cannot see the Aleppo end. Four rolls, not forty._  2 _How high, what weight, is the floor level? I cannot see the wall. One bay, not six._  3 _What time do you open, who signs, is anybody there at six? I cannot see your afternoons. Try a fortnight on Thursdays before we change the schedule._  4 _How much do you use a month, has it been steady, do you have storage? I cannot see what the price will do. A quarter, not a year._  5 _How soon do you need it, do you have an account anywhere, what size are the orders? I cannot see your cash flow. Pay on the first one before we talk about terms._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I want to buy a year of packaging at today\'s price. Can you hold it?'],
  ['B', 'Three questions first, if I may. How much do you use in a month, has that been steady for a year, and where would you keep it?'],
  ['A', 'About thirty rolls. It has gone up a bit. In the yard, under a sheet.'],
  ['B', 'Then from what you have told me I would not do a year, and that is advice against my own interest.'],
  ['A', 'Why not?'],
  ['B', 'Three hundred and sixty rolls under a sheet in a yard will not all be saleable in August — and a held price is only a bargain if the market rises, and I cannot see what the market will do any better than you can.'],
  ['A', 'Everybody says it will rise.'],
  ['B', '⚠ Everybody said that last February and it fell. **I would buy a quarter, and if it rises you have lost very little and if it falls you have not bought a year of it.**'],
]));
out.push(note('⚠ Role card 2 is the strongest version of this cycle because the honest advice is **against a large order**, and the learner has to say so out loud. ⚠ *That is advice against my own interest* is not boasting: it is the sentence that lets the caller weigh what follows.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three questions, the blind spot and the trial, then what the adviser gave up. **Typical errors:** _from what you told to me_ · _it depends of one thing_ · _I cannot to see_ · and the content fault, which is advice given with no questions asked — which is what the competitor did in the dialogue, and is worth naming by that comparison.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What they ask', 'My three questions', 'The one thing I cannot see', 'The limited trial'], [
  ['which wrap', 'how far, stacked, hand-unloaded?', 'how the pallets are handled at the far end', 'four rolls, one load'],
  ['which shelving', 'what load, how high, is the floor level?', 'the wall, and whether it can be fixed back', 'one bay, not six'],
  ['a year at today\'s price', 'monthly use, steady, storage?', 'what the market will do', 'a quarter, not a year'],
], [1.1, 1.8, 1.6, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"They ask which wrap. I ask how far, whether it is stacked and whether it is hand-unloaded. From what they tell me the standard is probably right — but I cannot see the Aleppo end, so I would say buy four rolls and not forty."', '⚠ Count how many of the room\'s limited trials cost the adviser money **this month**. All of them. ⚠ **Be explicit that this cycle is a trade**, because a class told that honesty is simply profitable will stop believing the rest of the course.']));
out.push(stage('5', 'Read'));
out.push(p('1 How the pallets are handled at the Aleppo end — *including the man you spoke to on Monday and including me*.  2 That it is **not disinterested in the way it might look**: *a customer who finds out that the cheap one works buys from me again, and a customer sold the expensive one and never told why does not*.  3 So that he can decide **without telephoning again**.'));
out.push(note('⚠ Putting the competitor inside her own blind spot — *including the man you spoke to on Monday and including me* — is both fairer and more persuasive than disagreeing with him, and it is the sentence to point at. ⚠ It also makes the next paragraph work: having declined to score a point, she can afford to say what her advice is worth.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**To Mrs Soha Khoury, Homs. 23 November. Shelving for the store room — following your call.**',
  '**What I am recommending, and what it rests on.** From what you told me — tinned goods, four shelves, a concrete floor that is level — the 400-kilogramme bay is right and the 700 would be about half again for a strength you will not use.',
  '⚠ **The one thing I cannot see.** Your wall. The 400 bay is stable free-standing on a level floor; on an uneven floor it needs fixing back, and whether your wall will take a fixing I cannot tell from here and nor could anybody on a telephone, including me.',
  '**What I would do about that.** **One bay, not six.** Put it up, load it, and look at it in a week. If it has not moved, order the other five.',
  '⚠ **What this costs me.** You asked about six bays and I am proposing one. You are entitled to know my interest: a customer who buys one bay and comes back for five is worth more to me than a customer who buys six and tells people they were sold too much.',
  '**Both prices, so you need not telephone.** 400 bay: 240,000. 700 bay: 355,000. Held fourteen days.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The basis repeated back, so it can be corrected', '✓'],
  ['The one thing the writer cannot see — and the other adviser inside it', '✓ *including me*'],
  ['A limited trial, with what to look at', '✓ load it and look in a week'],
  ['What the advice costs the writer, and both prices', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *what this costs me* paragraphs read out. **Ask which letter the class would buy from.** ⚠ And then ask whether any of them has ever received such a letter — usually not one person has, which is the commercial argument made for you.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'In 2022 I went to buy a compressor and the man asked me four questions before he said anything. What I was spraying, how many hours a day, whether I had three-phase, and whether the shop was shared.',
  'The last question was the one nobody else had asked. The shop is shared, so a loud compressor would have been a problem with the man next door within a week, and he sold me a quieter one that cost about a fifth more and was the right machine.',
  '⚠ He also told me which of his machines he would not sell me and why. **I have bought everything I have bought in four years from that shop, and I could not tell you whether his prices are good, because I have never compared them.** That is what four questions were worth to him.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _whether they asked anything first_ — "four questions, and the fourth was the one nobody else asked"   ✓ _hedges that add information rather than subtract it?_ — yes   ? _did the adviser have an interest, and did they say so?_ — "an interest, and he named the machine he would not sell"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually one seller in three asked a question first, ⚠ **and that one is remembered years later, by name**, which is the commercial argument for the whole cycle. ⚠ The last sentence of the sample — *I could not tell you whether his prices are good* — is the finding, and it is worth reading aloud.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['A man telephoned about sheet for a gate. Three questions, and the second one — how wide the gate is — turned out to matter, because at that width he needs a frame and not a thicker sheet. ⚠ I have sold him less than he asked for and a frame he had not thought of.']));

// ===================== 8.7 =====================
out.push(pb());
out.push(h2('8.7  Review & Mediate: two options, and what I would do'));
out.push(stage('1', 'Get ready – Unit 8 quiz'));
out.push(p('**1** **A reason and a time** — and handing the decision back out loud.  **2** Ask **what would stop working?**; never **would it work?**, which can be answered *yes*, truthfully, by somebody who can also see two breakages.  **3** *Would* = measured or arithmetic. *Might* = may happen on its own, unmeasured. *Could* = becomes possible, and usually needs a second decision.  **4** Because it turns somebody\'s habit into an obligation, and ⚠ the person who one day points at it is usually a colleague, not the other party.  **5** Say **no in one syllable**, without a discussion about why.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Do nothing — and its cost is **400,000 once, flat since September**, not 400,000 a month growing, which is what the paper had implied.  2 That it **has already decided**, so he can only agree or have an argument — ⚠ *and I have been having that argument since 1998 and I usually lose it, because the person who wrote the paper has thought about it for a week and I have had it for four minutes*.'));
out.push(note('⚠ The last exchange is the point of the whole unit and should be read twice. *The third option is for you, because with it in you found out that the hire is not worth it, and you found that out before I did. Without it you would have won, and we would have hired a van.* ⚠ The do-nothing option is not a courtesy to the reader; it is the writer\'s only protection against their own preference.'));
out.push(p('**Language box – Practise (sample):**  _Option A: repair, 1.9 million, one payment, and it would restore four Ghouta days. Option B: hire, 600,000 a month for three months, and it would do the same while we decide. Option C: nothing, which cost about 400,000 once in August and has been flat since September. What I would do is A, because B costs 1.8 million to recover 400,000 and A is the same money permanently._'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', 'Two options on the counter telephone. An answering machine at 180,000, or stagger the lunch hour at no cost.'],
  ['B', 'And the third?'],
  ['A', 'Do nothing.'],
  ['B', 'What does doing nothing cost?'],
  ['A', 'Four customers in October.'],
  ['B', 'And since October?'],
  ['A', '…None that I can identify.'],
  ['B', 'So it was four in one month and nothing in two. Which makes the machine hard to justify.'],
  ['A', 'And makes the staggered lunch obviously right, because it costs nothing and would have prevented all four.'],
  ['B', '⚠ So the honest third option did not argue for doing nothing. It argued against the expensive option and left the free one standing.'],
]));
out.push(note('⚠ That last line is worth making explicit to the class, because learners fear that costing the do-nothing honestly will lead to doing nothing. ⚠ It usually does the opposite: it kills the expensive option and leaves the cheap one unopposed, which is what happened to the van hire and to the answering machine.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write all three options with costs, then whether the do-nothing cost is **growing or flat**. **Typical errors:** _option three is do nothing which cost us nothing_ (a straw man in the other direction) · _doing nothing would cost 400,000 every month_ where the evidence is one month · and the content fault, which is three options and no recommendation. ⚠ That last is not neutrality; it is handing the work back to somebody with four minutes.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I put it to', 'Their first question', 'What it changed', 'What I would now do'], [
  ['Mr Ayoub', 'Where is the third one?', 'the do-nothing cost was one month, not monthly — so the hire fails', 'repair, not hire'],
  ['Nadia', 'What happens to the 1.9 million if we sell the van in a year?', 'about a third of it comes back; the hire returns nothing', 'repair, more strongly'],
], [1.1, 1.4, 1.4, 1.3]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"I had repair and hire. The third was do nothing, and costing it honestly showed that the 400,000 happened once and has been flat since September — which killed the hire, because 1.8 million to recover 400,000 is not a saving. The option I did not want improved my own paper."',
  '⚠ **The unit\'s mediation, named as the eighth unit of this book:** a paper with two options has already decided, and the person who wrote it will win the argument because they have had a week and the reader has had four minutes — **so the only protection against your own recommendation is the option you did not want.**',
  '⚠ Ask the class to count the two-option papers they have written. Then ask how many of those arguments they won. ⚠ The second number is usually close to the first, **and that is the problem rather than the achievement.**',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 1)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'A', 'B', 'C', 'C', 'B']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(note('⚠ Q2 is the item that tests the unit rather than the reading: the notice distinguishes a measured *would* from an unmeasured *might* and says so explicitly. ⚠ Q5 is arithmetic in a notice — 600,000 a month against 400,000 once — and a learner who answers A has read *hire* as cheaper because it is a smaller single number. **Both are B1 Part 1 traps and both are the unit\'s own content, which is why Part 1 is practised twice in this book.**'));
out.push(stage('6', 'Write with help – sample (74 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Mr Nassif — three options on the guillotine. One: a second bench, 4.1 million, which would end the resets. Two: sequence the jobs inside each window, free, which would cut about half of them. Three: nothing, which cost us one customer in October and nothing since. What I would do is two, this week, and look again in a month before spending four million.',
]));
out.push(note('⚠ That sample is 66 words and holds all three options plus a recommendation, which learners will say is impossible in eighty words. ⚠ The economy comes from costing the do-nothing in **one clause** — *which cost us one customer in October and nothing since* — and that clause is the one that must survive every cut.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three options, each with a cost', '✓'],
  ['The do-nothing costed, and whether it is growing or flat', '✓ one customer, nothing since'],
  ['A recommendation, with a reason', '✓ option two, with a review date'],
  ['60 to 80 words — count them', '✓ 66'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (138 words)'));
out.push(sample(null, [
  '**THE FOURTH STORE ROOM — three options.**',
  '**A. Enter it on the system.** Three days of one person, about 450,000 in wages, one payment. It **would** give a reconcilable figure for the largest room — that is arithmetic, not a forecast. It **could** then allow a monthly stock figure for the whole business, but that is a second decision about who counts.',
  '**B. Go back to paper for all four rooms.** Free, and it **would** work, because it worked until June. ⚠ But it undoes two years and nobody would ever start again.',
  '**C. Nothing.** This is the one that is growing. We have had no usable figure for the largest room since August, and each month the paper record and the shelves diverge further, so the three days become four.',
  '**What I would do.** A, this month, because C is the only option whose cost rises while we think about it.',
]));
out.push(note('⚠ That sample does the thing 8.7 most wants: it finds a case where the do-nothing option is the **expensive** one and says why — *the only option whose cost rises while we think about it*. ⚠ Put that sentence on the board. It is the honest counterpart of the van dialogue and it stops the class concluding that costing the third option always kills a proposal.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I costed the third option on the saw bench honestly. The queue is for measurements and not for the saw, so doing nothing costs almost nothing and the bench is the wrong purchase. ⚠ I had been going to ask for four million. **The third option saved me asking for the wrong thing.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 8 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'a', 'b', 'a', 'c', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Questions 3, 4 and 5 are the unit and should be marked as a group of three. A learner who gets all three has the distinction; a learner who gets 3 and misses 5 has *would* and has not understood that *could* carries a second decision. ⚠ Question 7 is the *unless* item and the error is usually the double negative rather than the choice.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Option A', 'Option B', 'Option C', 'Its cost, growing or flat', 'What the third option changed'], [[
  'repair, 1.9 million', 'hire, 600,000 a month for three', 'do nothing', '400,000, once in August, flat since September',
  'the hire fails — 1.8 million to recover 400,000 is not a saving',
]], [1, 1.4, 0.8, 1.6, 2]));
out.push(note('⚠ The fourth gap needs **both** the figure and the word *flat* or *once*. A learner who writes only *400,000 a month* has heard the paper\'s original claim rather than the correction, and that is the whole exchange. ⚠ The fifth gap scores for the arithmetic, in any wording.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (62 words)', ['Three options on the second van. One: repair it at 1.9 million, one payment, which would restore four Ghouta days. Two: hire at 600,000 a month for three months, which would do the same temporarily. Three: nothing, which cost about 400,000 once in August and has been flat since. What I would do is repair it, because the hire costs 1.8 million to recover 400,000.']));
out.push(box('Marking the Unit 8 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 4 needs the figure **and** *once* or *flat*.'],
    ['**C Writing**', '7', '**Three** options (2) · a cost on each (2) · ⚠ the do-nothing costed honestly, with growing or flat (2) · a recommendation with a reason (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ **Two options scores 0 of the first 2 and cannot pass this task**, however good the two are. This is the unit\'s declared position and it is printed in the Student\'s Book opener. Say it again before they write.',
  '⚠ The two marks for the do-nothing need it costed **honestly** — which in practice means a figure with a period attached. *Doing nothing would be very expensive* scores nothing; *400,000 once in August and flat since* scores both. ⚠ A straw-man third option (*doing nothing would ruin us*) scores 0, and should be circled: it is worse than no third option, because the reader can see it is one.',
  '⚠ Give the last mark for any recommendation with a reason, **including a recommendation to do nothing**. A learner who costs all three and chooses C has done the task perfectly and should be told so, because they will assume they have failed it.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 8**'));
out.push(p('**1 The confident _would_.** By 8.3 most of the class will discover that nearly everything they have ever written as *would* was unmeasured, and the natural response is embarrassment followed by over-hedging — a paper of *mights* with nothing to act on. ⚠ Head both off with Nadia\'s argument, which is about self-interest rather than accuracy: **the strong word only has value if the weak ones are present**, so a paper of *woulds* has thrown away its own best figure. ⚠ And say explicitly, more than once, that nobody was exaggerating on purpose. *Would* is the ordinary English word for anything one believes, and a class that feels caught will stop putting figures in at all, which is a worse outcome than where they started.'));
out.push(p('**2 Advice that keeps the decision.** The common shape is the exact inverse of what 8.1 teaches: the advice is hedged into near-invisibility while the adviser quietly retains the decision — *I just think maybe we should…*, followed by doing it. ⚠ The repair is mechanical and it works: **a reason, a time, and the words _it is yours_ said out loud.** Then the advice can be as direct as the adviser likes, because the other person can refuse it cheaply. ⚠ Learners find this counter-intuitive and then find it liberating, usually within one cycle.'));
out.push(p('**3 The two-option paper.** It will survive into the check and the exam task unless it is named repeatedly, because leaving out the option you do not want feels like doing the work rather than evading it. ⚠ Do not argue for balance. Use the dialogue: the third option is what showed Nour that the van hire was not worth it, **before Mr Ayoub saw it** — and without it she would have won the argument and the company would have hired a van. ⚠ Then ask the class to count the two-option papers they have written and how many of those arguments they won. The two numbers are usually the same, and that is the uncomfortable finding the unit exists to produce.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 8 · Answer Key');
