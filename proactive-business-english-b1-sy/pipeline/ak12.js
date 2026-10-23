// Proactive Business English B1 · Syria Edition · Book 1 · Unit 12 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 12  Opinions, Agreement and the Decision'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This is the last unit of Book 1 and it decides whether the other eleven get used.** Everything in this book produces a document somebody has to decide about, and this unit is the four minutes in a room when the decision is actually taken — plus the two minutes afterwards that are the only reason anybody will know what was decided.',
  '⚠ **The cycle that will feel wrong is 12.3.** Conceding the strongest point against yourself feels like losing, and the reason it works is not generosity: **a concession you make yourself cannot be used against you, and the person who was going to make it has nothing left to say.** In the dialogue what they had to say turns out to prove Nadia\'s point — ⚠ which is the argument to give a class, because it is self-interested and true.',
  '⚠ **And 12.4 is the one with the largest effect outside the classroom.** The person who knows most about the thing being decided is very often the one who has not spoken, and *does anybody have anything to add?* has never produced anything — **because it asks people to judge whether what they know is relevant, and the person who knows least is the most confident about that.**',
], C.grey, C.navy));

// ===================== 12.1 =====================
out.push(h2('12.1  I would say, I take the view'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Collect what stopped people; in most classes nobody says *I was afraid of being wrong* and almost everybody says something about not having been asked.'));
out.push(p('**b**  The second. The first contains a view, a hedge and a condition, and a reader cannot agree or disagree with it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ That *a view with an escape clause on it is a question wearing a statement\'s clothes* — and *if we can afford it* would not have prevented a no.  2 **One reason, with a figure** — and nothing else.'));
out.push(note('⚠ Mr Ayoub\'s last speech is the one to read twice: *the junior person in the room is the only one whose view I do not already have, which makes it the most valuable one there — and they are the only one who hedges it into nothing.* ⚠ It is also the answer to the objection *I am the junior person*, which most learners will raise.'));
out.push(p('**Language box – Practise (samples):**  1 _My own view is that we should repair it: 1.8 million of hire to recover 400,000._  2 _My own view is that we should enter the fourth room on the system, because doing nothing is the only option whose cost rises while we think about it._  3 _I take the view that the Ghouta change should go ahead, because the Saturday objections are permanent._  4 _My own view is that the price list should move to the fifth, because the first is the busiest morning of the month._  5 _My own view is that we should take on a second counter assistant: eleven unreturned calls in October, about 900,000 of trade, against a salary of 650,000 a month._'));
out.push(note('⚠ Item 5 is the strongest of the five because the figure is on the **cost of not doing it**. ⚠ Learners default to costing the proposal; the view that persuades usually costs the alternative.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'What do you think about a second person on the counter?'],
  ['A', 'I think maybe it would probably help, if the money is there.'],
  ['B', 'Say that again without *think maybe*, *probably* and *if the money is there*.'],
  ['A', '…We should take somebody on.'],
  ['B', 'That is a view. Now the reason and nothing else.'],
  ['A', 'My own view is that we should take somebody on. Eleven calls went unreturned in October and four of those customers have ordered elsewhere since — about 900,000 of trade in one month against a salary of 650,000.'],
  ['B', 'And the *if the money is there* was for what?'],
  ['A', 'In case you said it was too expensive.'],
  ['B', '⚠ Which it would not have prevented — and your own figures say it is cheaper than not doing it, so the hedge was arguing against you.'],
]));
out.push(note('⚠ The last line is the sharpest thing in the cycle: the hedge did not merely weaken the view, **it contradicted the figures in it.** Learners hedge out of courtesy and in doing so concede the very point their evidence disproves.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the view in the house form, the one reason and the figure, then the hedge that was removed. **Typical errors:** _I am thinking that we should to repair it_ · _my own view is to repair it, if possible, maybe_ (a hedge at both ends) · _I take a view that_ (*the* view) · and the content fault, which is three reasons. ⚠ Three reasons dilute: the reader remembers the weakest.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['My own view is that…', 'The one reason', 'The figure', 'The hedge I would have used'], [
  ['we should repair the van', 'the hire costs more than the loss it recovers', '1.8m v 400,000', 'if we can afford it'],
  ['the fourth room goes on the system', 'doing nothing is the only cost that rises', '3 days, 450,000', 'when there is time'],
  ['we take on a second assistant', 'not having one costs more than having one', '900,000 v 650,000', 'I know it is expensive, but'],
  ['the list moves to the fifth', 'the first is the busiest morning of the month', '~60 orders', 'if Hala agrees'],
], [1.7, 1.5, 0.8, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My own view is that we should repair it, and the reason is that the hire costs 1.8 million to recover 400,000. The hedge I would have put on it is *if we can afford it*."', '⚠ Count the views with no figure. ⚠ **Then count the hedges and notice that the hedge is nearly always longer than the reason** — which is the quickest way to show a class where its effort has been going.']));
out.push(stage('5', 'Read'));
out.push(p('1 **One** — and she refuses to add the other three, because *they are all smaller and they would make this one harder to find*.  2 That if the van is off the road in January the 400,000 may not stay flat and the two customers may leave: ⚠ *I cannot put a figure on that and it is the one part of this I would want you to weigh against me*.  3 ⚠ **One thing only — whether those two customers will wait.**'));
out.push(note('⚠ Question 3 is the move worth teaching from this page. *We would be disagreeing about one thing only* — ⚠ **most disagreements are about one fact wearing four arguments**, and finding the fact is the whole of the skill. A learner who can write that sentence will shorten every argument they have for the rest of their career.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**Mr Nassif — my own view on the second saw bench, as asked. 8 December.**',
  '**My view.** Do not buy it. Measure the queue first, for a fortnight.',
  '**The reason, and it is one reason.** I timed the Thursday queue for four days and it is not a queue for the saw: eleven of fourteen people were waiting for a measurement and three for cutting. ⚠ **A second bench would shorten the wrong queue** and that is the whole of my argument.',
  '**Why a fortnight and not now.** Four days in December is not a fortnight in March, and the measuring bottleneck may be seasonal — half those eleven were hotel-site men with hand-written sizes.',
  '⚠ **The strongest thing against my view.** If the queue is genuinely about measuring, the fix is a second person and not a second machine, and **that costs more every month for ever than a bench costs once.** I cannot tell you which is cheaper over five years and I have not tried.',
  '**What I am not saying.** I am not saying the bench is a bad machine. If you take the view that we will grow into it, buying it now at this price is defensible and my four days do not contradict you.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The view in one line, with no hedge', '✓ *do not buy it*'],
  ['One reason, with a figure, and the refusal to add more', '✓ eleven of fourteen'],
  ['The strongest thing against, and that it cannot be priced', '✓ and it argues for a bigger spend'],
  ['The single thing the disagreement is about', '✗ **missing** — the note does not name it'],
], [5, 1]));
out.push(note('⚠ Leave that ✗. The single thing in that case is *whether the December queue is the March queue*, and the writer has circled it twice without naming it — which is the commonest near-miss in this cycle.'));
out.push(stage('6R', 'Share'));
out.push(p('The *strongest thing against* paragraphs read out. **Ask which writer the class would trust with a decision.** ⚠ It is the one who argued hardest against themselves, and it is worth asking the class why — the answer is that they have done the work the reader would otherwise have to do.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'I have thought since 2022 that we should stop taking cash at the workshop door and I have never said it.',
  'The reason is one figure: about 180,000 a week comes in that way, it is written on a pad, and the pad is reconciled on Fridays by me from memory of a week I was not always there for. ⚠ **I cannot tell you whether anything has ever gone missing, and that is the point — nobody could.**',
  'The strongest thing against me is that about a third of that 180,000 is from four men who have no bank account and would not come back, and that is not a small objection.',
  '⚠ What has stopped me is that nobody has asked, and the thing I would be saying is that a system my father set up cannot be audited. **Which is true, and is also about my father.**',
]));
out.push(note('⚠ That last sentence is the honest version of what stops most people, and it is not fear of being wrong. ⚠ Receive it as a finding rather than as something to be solved in a language class.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the one reason_ — "180,000 a week on a pad reconciled from memory"   ✓ _the view stated without a hedge?_ — yes   ? _what has stopped them, and is it still true?_ — "that the system is his father\'s, and yes"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('What has stopped people is rarely the fear of being wrong. ⚠ **It is usually that nobody has ever asked, and a view nobody asked for has to be volunteered — which is a different and harder act.** ⚠ Say so: it reframes the problem from courage to format, and the format is 12.1\'s stage 5.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['My view on the cash: stop taking it at the door from January. One reason, 180,000 a week on an unauditable pad. Strongest thing against: four men with no bank account. ⚠ I have written it and not sent it, and the reason I have not is in my stage 7 text.']));

// ===================== 12.2 =====================
out.push(pb());
out.push(h2('12.2  Up to a point'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Insist on *which half*; most learners name the claim and not the half.'));
out.push(p('**b**  The second. *That is not true* invites a defence of the whole sentence, and then you are arguing against the strongest version of the other side\'s case.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **The afternoon** — completely, and with a figure: about eleven loads a week after four.  2 ⚠ That *the count does not work* is an argument about **abolishing a control** and *the count is unreliable after four* is a **staffing decision about two hours a day** — and *you would lose that argument and we would both be worse off*.'));
out.push(note('⚠ The best line is about who should narrow the claim: *a man arguing that his own control works in the morning is believed; a man arguing that it does not work is believed too, and about the wrong thing.* ⚠ The person best placed to narrow an overstated claim is the person who made it, and they are usually the last to be asked to.'));
out.push(p('**Language box – Practise (samples):**  1 _True of after four — about eleven loads a week. Not true of seven to four, where eleven of fourteen differences were found._  2 _True of the Baghdad Street counter, which gets its copy on the Monday van. Not true of Mezzeh._  3 _True of telephone complaints settled the same day — about a dozen a year. Not true of written ones, all nine of which are in the book._  4 _True of the figure, which nobody can justify. Not true of the principle, which is sound._  5 _True of a market that moves twice in a fortnight. Not true of the last eight months._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Nobody uses the complaints book.'],
  ['B', 'All nine written complaints this year are in it.'],
  ['A', 'I mean the telephone ones. I settle about a dozen a year and I have never written one up.'],
  ['B', 'Then we agree about the telephone ones and disagree about the written ones, and I want that said before somebody repeats *nobody uses the complaints book*.'],
  ['A', 'Why does that matter?'],
  ['B', 'Because the wide version invites somebody to decide the book is not worth keeping, and then the nine go too. ⚠ **The narrow version is a procedure gap worth about a dozen entries a year, and it has a fix.**'],
  ['A', 'Which is what?'],
  ['B', 'A line in the book for same-day settlements, with your initials and no detail. ⚠ And I agree with your half completely — **about a dozen a year is a third of all our complaints and none of them is recorded anywhere.**'],
]));
out.push(note('⚠ Note what the concession produces: *a third of all our complaints*. ⚠ Putting a figure on the half you concede does not weaken your position — it converts the other person\'s grievance into a finding, which is a better outcome for both of them than winning.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both halves and the figure on the conceded one, then what the wide claim would have invited. **Typical errors:** _that is true for the afternoon_ (*true of*) · _I agree up to the point_ (*up to a point*) · _I see that but it is not true_ (which concedes nothing) · and the content fault, which is agreeing with the right half **without a figure** — ⚠ a concession without a figure sounds like politeness.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The claim as made', 'The half that is right, with a figure', 'The half that is not', 'What the wide claim invites'], [
  ['the gate count does not work', 'after four — 11 loads a week', 'seven to four, where 11 of 14 were found', 'abolishing the control'],
  ['nobody uses the complaints book', 'telephone settlements — a dozen a year', 'written complaints, all nine in it', 'scrapping the book'],
  ['the Friday list is useless', 'Baghdad Street, copy on the Monday van', 'Mezzeh, where it works', 'going back to two lists'],
  ['the two-signature rule is pointless', 'the figure, which nobody can justify', 'the principle, which is sound', 'removing the rule'],
], [1.4, 1.7, 1.2, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The claim was that the gate count does not work. It is true of after four — about eleven loads a week. It is not true of seven to four, where eleven of the fourteen differences this year were found. The wide version invites somebody to abolish the control."', '⚠ Count the claims that would have cost somebody a control. ⚠ **Then ask who was best placed to narrow each**, and the answer is almost always whoever made it — which is the practical move: go to them.']));
out.push(stage('5', 'Read'));
out.push(p('1 **Fourteen differences this year, eleven found between seven and four**; and **about eleven loads a week leave after four**, with three of the fourteen found after four ⚠ *and we do not know how many were not found*.  2 Because the two are **not degrees of the same sentence**: one is an argument about keeping a control and the other is a staffing decision about two hours a day — ⚠ *and the first one would be decided against us*.  3 **Not a second man.** A rule that a load arriving after four is counted in the morning and not released until it is — ⚠ which costs nothing and *makes the control true for twenty-four hours instead of nine*.'));
out.push(note('⚠ Two things to point out. **First**, the note is written **with** Abu Yasser and says so in its first line — a note splitting somebody\'s claim without them is a note correcting them. **Second**, the ask is **cheaper** than the obvious one: not a second man but a rule that costs nothing, ⚠ which is what the splitting made visible.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**THE CUTTING LIST — what works and what does not. Written with Khalil.**',
  '⚠ **This note is written with Khalil and not about him.** He has said since the summer that the cutting list does not work. **He is right about part of it.**',
  '**What works, and the figure.** For stock sizes the list is written from the order book and cut from the list, and **of about 340 stock cuts this year three have been wrong.** The system works and it is his own.',
  '**What does not, and the figure.** For hotel-site work the sizes come hand-written on site paper, and he transcribes them. **About 90 cuts this year and six of those six wrong cuts were site work.** ⚠ We do not know how many were right by luck.',
  '⚠ **Why the halves are separate.** *The cutting list does not work* is an argument for a different system. *Transcribing hand-written site sizes is unreliable* is a problem with one customer\'s paperwork. They are not degrees of the same sentence.',
  '**What we are asking for.** Not a new system. ⚠ **That site sizes are read back to the site by telephone before cutting** — four minutes a job, about twice a week.',
  '⚠ **And what Khalil wants recorded, in his words.** *I can read a number off a piece of paper. I cannot read somebody else\'s seven.*',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Written *with*, and said to be', '✓'],
  ['A figure on both halves, including the one against the writer', '✓ 340 and 3 · 90 and 6'],
  ['Why the halves cannot be one sentence', '✓'],
  ['The other person\'s own words at the end', '✓ *I cannot read somebody else\'s seven*'],
], [5, 1]));
out.push(note('⚠ *I cannot read somebody else\'s seven* is the strongest line in that note and it is not the writer\'s. ⚠ Quoting the other person unedited at the end does more for a note than any amount of advocacy, and learners will want to tidy it.'));
out.push(stage('6R', 'Share'));
out.push(p('The quoted sentences read out. **Ask which carries the most weight.** ⚠ It is nearly always the one in the plainest language, and it is nearly always the one the writer was tempted to paraphrase.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  '"The men never wear the goggles" is said in our workshop about once a month, usually by me.',
  'What is true is that the men do not wear goggles for a single quick cut on the small saw — perhaps three or four times a day each. What is not true is the grinder, where all four of them wear goggles every time without being told, and have for years.',
  '⚠ The wide version has cost something. I said it in front of a visitor from the insurers in 2023, and what he heard was that nobody in the workshop wears eye protection, **and our premium went up and I have never been able to find out how much of that was me.**',
  'The narrow version is a real problem about a quick cut on a small saw, and it has a fix I have never tried: goggles hanging **on** the small saw.',
]));
out.push(note('⚠ The cost in that text is paid by the speaker for his own overstatement, in front of an insurer, and he cannot even quantify it. ⚠ It is the best available argument for the cycle and it is worth reading aloud: **the wide claim is usually made by the person it damages.**'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the narrow version_ — "a single quick cut on the small saw, three or four times a day"   ✓ _partial agreement with a figure on the conceded half?_ — yes   ? _who is best placed to narrow it?_ — "he is; he is the one who says it"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually one or two of the three wide versions have already cost something. ⚠ **And in each case what was lost was a control or a practice that worked most of the time** — because an overstated complaint invites abolition rather than repair, and abolition is cheaper for whoever is deciding.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I took "the cutting list does not work" to Khalil and we wrote the two halves with figures. ⚠ He gave me the numbers in about a minute — 340 and three, 90 and six — because he keeps them in his head and nobody had ever asked him for them.']));

// ===================== 12.3 =====================
out.push(pb());
out.push(h2('12.3  Admittedly, and it is true that'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ If a learner cannot name the strongest point against them, they have not been in an argument — they have been in a monologue.'));
out.push(p('**b**  The second. The first is a claim nobody believes; the second has the risk in it and is therefore worth something.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That the van is **nine years old** and this may not be the last repair — ⚠ *it is the strongest thing against repairing it and it is true, and I would rather say it than have it said to me*.  2 ⚠ *A concession you make yourself cannot be used against you, and the person who was going to make it has nothing left to say* — and in this case what they had to say **turned out to prove her point**.'));
out.push(note('⚠ The mechanism is worth spelling out for the class, because it is not obvious. ⚠ **Conceding the age is what made the worst-case arithmetic available**: eight months at 1.9 million is 240,000 a month against a hire at 600,000. Without the concession there is no eight-month case to cost, so the sentence *the worst case for the repair beats the hire* cannot be reached. **The concession is not a cost of the argument; it is the argument.**'));
out.push(p('**Language box – Practise (samples):**  1 _Admittedly it is nine years old. Even at eight months, 1.9 million is 240,000 a month against 600,000._  2 _I accept that the system has been wrong about that room since June. Even a wrong figure that can be reconciled monthly beats no figure._  3 _It is true that Friday is the wrap morning. The wrap can move; the Saturday road cannot._  4 _Admittedly eleven calls is one month. If only one of the four was lost to the telephone, the salary is covered._  5 _It is true that one list means a wrong list is wrong everywhere. Two lists were wrong in two places in October and nobody noticed for eight days._'));
out.push(note('⚠ Item 5 is the hardest and the best: the concession is real, and the answer is not to deny it but to **compare it with the thing it replaces.** ⚠ A learner who gets there has understood that the worst case of your option is measured against the worst case of theirs, not against perfection.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I think we should take on a second counter assistant, and admittedly eleven unreturned calls is one month\'s evidence and those four customers may have left for price.'],
  ['B', 'That was going to be my objection.'],
  ['A', 'I know. It is the strongest thing against it and it may well be true of two of the four.'],
  ['B', 'Does that not sink your case?'],
  ['A', 'It sinks the version where all four left because of the telephone, which nobody was going to believe. ⚠ What is left is this: **if one of the four was lost to the telephone, the salary is covered by that one customer** — he was ordering about 700,000 a month.'],
  ['B', 'One of four.'],
  ['A', 'One of four, and I do not have to prove which. ⚠ **The case only needs one, and conceding the other three is how I got down to one.**'],
]));
out.push(note('⚠ *The case only needs one, and conceding the other three is how I got down to one* is the cycle in a sentence. ⚠ Conceding reduced the claim to the smallest version that still wins — which is both more honest and much harder to attack.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the concession and the worst-case figure, then what the other person had left. **Typical errors:** _admittedly that the van is old_ (no *that* after *admittedly*) · _it is true that is nine years old_ (missing subject) · _I accept it may not be the last_ (acceptable; *I accept that* is the house form) · and the content fault, which is a concession followed by nothing. ⚠ A concession with no worst case costed after it **is** a surrender.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['My view', 'The strongest point against it', 'The worst case, costed'], [
  ['repair the van', 'nine years old; may not be the last repair', 'eight months = 240,000/mo against a hire at 600,000'],
  ['enter the fourth room', 'the system has been wrong about it since June', 'a wrong but reconcilable figure beats no figure at all'],
  ['the Ghouta change', 'Friday is the wrap morning', 'the wrap can move; the Saturday road cannot'],
  ['a second assistant', 'eleven calls is one month; they may have left for price', 'one of four covers the salary; he was 700,000 a month'],
], [1.5, 2.1, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My view is repair it. Admittedly it is nine years old and this may not be the last repair. And even on the worst case — eight months — it is 240,000 a month, which is still less than half the hire."', '⚠ Count the views where the worst case still wins. ⚠ **Then point out that nobody could have said so without conceding first**, which is the only argument for this cycle that a sceptical learner accepts.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The three strongest arguments against**, before the recommendation — because a reader who meets the objections first reads the argument as a response to them, and one who meets them afterwards reads them as a hedge.  2 That the hire is 600,000 a month and the repair 1.9 million once, ⚠ so **at eight months the repair is 240,000 a month and the worst case wins**.  3 Whether the two half-order customers will leave in January. ⚠ **The only person who might be able to price it is Fadi, who sees them weekly, and she has not asked him — and will before Monday.**'));
out.push(note('⚠ Two further moves on that page deserve attention. ⚠ **The split quote** — *strip and inspect at 240,000, then a decision* — turns an irreversible 1.9 million decision into two decisions, which is available far more often than people notice. ⚠ And the last paragraph: *if the figures had come out the other way I would be recommending the hire, and the three arguments at the top would be my case rather than the case against me.* **That sentence is what tells a reader the paper was written to find out and not to persuade.**'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**THE SECOND SAW BENCH — a recommendation with the case against it first.**',
  '⚠ **The strongest arguments against my recommendation, before mine.** **One:** four days of timing in December is not a fortnight in March, and the queue may be seasonal. **Two:** if we grow at all, we will want a second bench within two years and it will cost more then. **Three:** the men want it, and a recommendation against something the workshop wants needs better evidence than four days.',
  '**My recommendation.** Do not buy it yet. Measure the queue for a fortnight in January.',
  '**The case, and it rests on one count.** Of fourteen people waiting on four Thursdays, **eleven were waiting for a measurement and three for cutting.** ⚠ Even if that proportion is half wrong, the queue is still mostly measuring — **so on the worst reading of my own figures the bench shortens the wrong queue.**',
  '**What would change the answer.** A fortnight in January showing the proportion reversed.',
  '⚠ **What I cannot cost.** What the men will think of being told to wait. **Khalil could tell me and I have not asked.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The three strongest arguments against, at the top', '✓ and the third is about morale, not figures'],
  ['One piece of arithmetic, with the worst case costed', '✓ *even if that proportion is half wrong*'],
  ['An irreversible decision split in two if possible', '✓ measure first, decide in February'],
  ['The risk that cannot be priced, and who might price it', '✓ Khalil'],
], [5, 1]));
out.push(note('⚠ The third argument-against in that sample is not a figure at all — *a recommendation against something the workshop wants needs better evidence than four days*. ⚠ Accept and praise non-numerical objections here: the cycle asks for the **strongest** point against, and sometimes the strongest point is about people.'));
out.push(stage('6R', 'Share'));
out.push(p('The arguments-against read out. **Ask which paper the class would act on.** ⚠ It is the one whose author argued against themselves hardest, and that result is so consistent that it is worth collecting as evidence rather than asserting.'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'In 2021 I argued for buying a van instead of hiring and I lost, and I lost badly in about four minutes.',
  'My case was that hiring was dead money. The strongest point against me was that we had no driver and would have to employ one, which turns a vehicle decision into a wage decision — and I had not mentioned it, because I had hoped nobody would.',
  'Somebody did, in the first minute, and after that nothing I said was listened to, including the parts that were right.',
  '⚠ If I had opened with it I think I would have won. The answer was there: Fadi was already doing four days a week on hire vehicles, so the wage was being paid anyway through the hire company at a margin. **But I could not say that after being caught hiding it.**',
]));
out.push(note('⚠ The last line is the whole cycle, learned expensively: **the answer to the objection existed, and concealing the objection destroyed the writer\'s ability to give it.** ⚠ Read it aloud. It is more persuasive than the Language box.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the strongest point against them_ — "no driver, so it becomes a wage decision"   ✓ _admittedly / it is true that, with the worst case costed?_ — in the retelling, yes   ? _would conceding it first have changed the outcome?_ — "he thinks so, and he had the answer"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually all three writers had not conceded the strongest point. ⚠ **And in at least one, conceding it would have produced an argument they could have won**, because the answer to the objection was available and concealing the objection made it unusable. ⚠ That is the finding to close on.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['View: do not buy the bench yet. Strongest argument against: if we grow we will want one within two years at a higher price. ⚠ Worst case costed: a fortnight of measuring delays the purchase by six weeks and the price rises about 4 per cent — about 160,000 to find out whether we are right.']));

// ===================== 12.4 =====================
out.push(pb());
out.push(h2('12.4  Hala, you have done this'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The answers will be about confidence and seniority; steer towards *they did not know which part of the question was theirs*, which is what the cycle shows.'));
out.push(p('**b**  The second. The first asks somebody to judge the relevance of their own knowledge; the second tells them which part of the question is theirs.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ She had been waiting to be asked whether **the counter** was part of the question: *I did not know whether the counter was part of the question*.  2 That he has asked it about four thousand times and ⚠ *does not believe it has ever produced anything* — **it asks people to decide for themselves whether what they know is relevant, and the person who knows least is the most confident about that.**'));
out.push(note('⚠ The three parts are the teachable content and the middle one is what learners drop: **name the person, name the thing they have done, and ask about that thing.** ⚠ *Hala, what do you think?* has the name and not the middle part, and it produces *I do not know* — because the question still requires her to decide what is relevant.'));
out.push(p('**Language box – Practise (samples):**  1 _Hala, you have priced about sixty orders off that list — what happens at the counter on the first?_  2 _Fadi, you have driven Ghouta twice a week since 2019 — which of the two days is the long run?_  3 _Abu Yasser, you have counted every load out for eleven years — what happens at the gate after four?_  4 _Nadia, you have reconciled the bank every month since 2016 — what does a mid-month price change do to the ledger?_  5 _Lina, you have filled in about forty of these forms — which box do people leave blank?_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'So we are agreed: the new order form with a quotation-reference box. Does anybody have anything to add?'],
  ['A', 'Hala, you take about thirty telephone orders a week — what will happen to that box?'],
  ['B', 'About half of them have no quotation at all.'],
  ['A', 'Go on.'],
  ['B', 'So the box will be blank on about fifteen forms a week. And a blank box is read later as a missing reference, not as *there was no quotation*.'],
  ['A', 'Which is how October looked in the file.'],
  ['B', 'It is exactly how October looked. ⚠ The form will manufacture about fifteen apparent faults a week, and in six months somebody will audit them.'],
  ['A', 'What would you do?'],
  ['B', 'Two boxes, or one box with *none* printed in it. ⚠ **A box you can tick to say there is nothing is worth more than a box you leave empty.**'],
]));
out.push(note('⚠ Role card 2 produces a design fault nobody in the meeting could have seen, and the fix is a printed word. ⚠ Note also the shape: the first answer is a **fact** (*half have no quotation*) and the second, after *go on*, is the **finding** (*a blank box is read as a missing reference*). **Always say *go on*.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three parts and the fact, then ⚠ **the fact that came out of *go on***, which is usually the bigger one. **Typical errors:** _Hala, what do you think about it?_ (name only — one part of three) · _does somebody want to say something_ · _Hala, you have done this, what do you think?_ (⚠ the middle part present but not specific — *this* names nothing) · and the content fault, which is asking and then talking.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The decision', 'Who knows', 'The thing they have done', 'The question about that thing'], [
  ['the price list date', 'Hala', 'priced ~60 orders off the trade list', 'what happens at the counter on the first?'],
  ['the Ghouta days', 'Fadi', 'driven the route twice a week since 2019', 'which of the two new days is the long run?'],
  ['the stocktake date', 'Abu Yasser', 'counted every load out for eleven years', 'what is the last Saturday of the month like?'],
  ['the new order form', 'Hala', 'taken ~30 telephone orders a week', 'what will happen to the reference box?'],
], [1.3, 0.9, 1.6, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(p('The three-part question asked to somebody in the class, and what came out. ⚠ **Count how many produced something nobody in the room knew.** ⚠ Then ask how many of those people would have spoken if asked *anything to add?* — and the honest answer, from the people themselves, is almost none.'));
out.push(stage('5', 'Read'));
out.push(p('1 Because **three decisions this year** were taken in a room and corrected within a fortnight by somebody who was in the room and did not speak — ⚠ *in every case they were asked whether they had anything to add*.  2 ⚠ That every one of the four questions is about something the person has **done a great many times**, and *I cannot write a three-part question for somebody who has not done the thing* — **which means the people worth asking are the ones whose names are not on the agenda.**  3 That three of the four answers will **contradict something on the agenda**, ⚠ *and the agenda is mine*.'));
out.push(note('⚠ The realisation in question 2 is the most useful thing in the unit for anybody who chairs anything. ⚠ **The three-part question cannot be written for a person who has not done the work** — so the exercise of writing the questions *is* the exercise of identifying who should be in the room, and it is done at a desk before the meeting.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**BEFORE THURSDAY — the three people I am going to ask, and what I am going to ask them.**',
  '⚠ **Why this note exists.** Two decisions this year have been reversed within a month by somebody who was in the room and said nothing. **Both times I asked whether anybody had anything to add.**',
  'Khalil | cut about 430 jobs this year | which sizes do you have to telephone the site about, and how often?',
  'Rami | loaded every delivery for six years | what happens to a load that comes back after five?',
  'Samira | reconciled the bank every month since 2014 | what does a part-payment do to the ledger when the invoice is unpaid?',
  '⚠ **What I am not going to say.** *Does anybody have anything to add.* It produced nothing both times, because it asks somebody to judge whether what they know is relevant.',
  '⚠ **And one thing I have realised.** All three questions are about something done hundreds of times. **I tried to write one for the man who does the quotations and I could not, because he has done eleven this year** — which tells me the quotations are not where our problem is.',
  '**What I will do with what comes out.** Minute it against their name, in their words, before anybody leaves.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Why the note exists, with a count', '✓ two decisions'],
  ['Three parts in every question, written in full', '✓'],
  ['*Does anybody have anything to add* ruled out, with the reason', '✓'],
  ['What will be done with the answers', '✓'],
], [5, 1]));
out.push(note('⚠ The best line in that sample is the diagnostic one: *I tried to write one for the man who does the quotations and I could not, because he has done eleven this year — which tells me the quotations are not where our problem is.* ⚠ **The inability to write a three-part question is itself information.**'));
out.push(stage('6R', 'Share'));
out.push(p('One question each, read out. **Ask whether the class could answer it** — ⚠ and if they could, the middle part is not specific enough. A good three-part question is unanswerable by anybody except its addressee, and that is the test.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'At a meeting in 2023 it was agreed to move the workshop start to seven o\'clock. I knew it would not work and I said nothing.',
  'What I knew is that the bus from Jaramana gets in at twenty past seven, and three of the four men come on it. There is an earlier one at ten to six.',
  'I was asked whether I had anything to add and I did not say it, because the meeting was about productivity and I thought the buses were not the subject. ⚠ **I also thought somebody must have checked.**',
  'The question that would have got it out of me is *Rami, you have opened up every morning for six years — who is standing at the door at seven?* ⚠ **What happened is that it ran for nine days and then went back to half past seven, and nobody ever said why.**'],
));
out.push(note('⚠ *I also thought somebody must have checked* is the sentence to collect. ⚠ The quiet person\'s silence is not only about relevance — it is an assumption that a decision has a basis. **Both are answered by naming the thing they have done**, because that tells them nobody else has that information.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what they knew_ — "three of four men come on a bus that arrives at 7.20"   ✓ _the three-part question written out?_ — yes   ? _what exactly were they asked instead?_ — "whether he had anything to add"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually all three were asked *anything to add?* ⚠ **And in most cases they did not speak because they did not know whether their part was in the question** — ⚠ with *I assumed somebody had checked* as a close second. Neither is shyness, and neither is fixed by encouragement.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I asked Rami the three-part question about loads coming back after five. First answer: it goes in the yard. ⚠ After *go on*: it goes in the yard because the shutter key is with whoever locked up, and twice this year that was somebody who had gone home. **Nobody has ever written that down.**']));

// ===================== 12.5 =====================
out.push(pb());
out.push(h2('12.5  So are we agreed?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect *nobody wrote it down*; push for **which part** people differed about, and it will be one of four.'));
out.push(p('**b**  The second. Four elements and a close that asks for an objection rather than for assent.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 **What · who · from when · and the awkward part** — the fifth, Nadia prints it, from January, and what happens to pre-change orders.  2 ⚠ That the fourth element was **wrong** — Nadia objects, and the corrected version is better: pre-change orders are priced by her from the file copy, not at the counter.'));
out.push(note('⚠ Mr Ayoub\'s closing line is the finding: *we never actually agreed it — we stopped talking about it.* ⚠ The fourth element of a decision is almost always the part that was discussed and abandoned rather than settled, and **it is invisible until somebody reads the decision back.** Reading back is not a courtesy; it is when the hole is found.'));
out.push(p('**Language box – Practise (samples):**  1 _The fifth; Nadia prints it; from January; pre-change orders priced by Nadia from the file copy._  2 _Wednesday and Friday; Nour tells the customers; from 8 December; the wrap moves to Thursday._  3 _A full recount; Y. Khalil with one man; by 19 December; the container counted separately — ⚠ or not at all, which is the awkward part._  4 _Two boxes on the form; Nadia orders them; from January; *none* printed in the second box._  5 _Thirty days; Nadia enforces it; from January; what happens to the four customers already on sixty._'));
out.push(note('⚠ In items 3, 4 and 5 the fourth element is the one nobody has settled, and that is deliberate: the awkward part is **structurally** the fourth, because a room settles the easy three and runs out of attention.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Before anybody stands up. So are we agreed: we will look at the van again in January.'],
  ['B', 'We did not agree that.'],
  ['A', 'Nobody objected.'],
  ['B', 'Nobody objected and nobody agreed. ⚠ **We stopped talking about it** — Samira raised the quotes and then the conversation went to the insurance.'],
  ['A', 'So what do I write?'],
  ['B', 'Deferred to the 15th. You to circulate the three quotes by the 8th. ⚠ **That is a decision about a decision and it is the only honest thing on the page.**'],
  ['A', 'It looks like we achieved nothing.'],
  ['B', 'We achieved one thing, which is a date. ⚠ **And in three weeks somebody will ask what we decided about the van, and there will be an answer** — which is more than the last two times.'],
]));
out.push(note('⚠ Role card 2 is the uncomfortable one and should be performed. *Deferred to the 15th* with an owner and a date is a real outcome; *we will look at it again* is not, ⚠ and the difference is that one of them produces a document and the other produces four memories.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four elements and the objection. ⚠ For role card 2, write the words *we stopped talking about it* and the decision about a decision. **Typical errors:** _are we agree?_ · _so we will look at that_ as a close · _is that everybody agreed?_ (acceptable; *is that everybody?* is the house form) · and the content fault, which is three elements and no fourth. ⚠ A decision with three elements has a hole and nobody in the room can see it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What', 'Who', 'From when', '⚠ The awkward part'], [
  ['the list changes on the fifth', 'Nadia prints it', 'January', 'pre-change orders priced by Nadia from the file copy'],
  ['Ghouta to Wednesday and Friday', 'Nour tells customers', '8 December', 'the wrap moves to Thursday — Ms Shamsi agreed on the 5th'],
  ['a full recount of store 4', 'Y. Khalil + one', 'by 19 December', '⚠ the container: counted separately, or not until somebody looks'],
  ['two boxes on the order form', 'Nadia orders them', 'January', '*none* printed in the second box, so a blank means unfilled'],
], [1.6, 0.9, 0.9, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(p('One decision read back in four elements, ending with *is that everybody?*  ⚠ **Count the decisions with no fourth element.** ⚠ Then ask what happened in each — and in most cases the fourth element was decided later by whoever was first to act, **who was not wrong to act.**'));
out.push(stage('5', 'Read'));
out.push(p('1 Pre-change orders being priced by Nadia from the dated file copy rather than at the counter — ⚠ *discussed for ten minutes in November and never decided*, and it is the part that caused October.  2 **Nadia** objected to the version read back first, and ⚠ *she was right and the decision as circulated is hers and not mine*.  3 What happens to a quotation issued before a change and presented after one. ⚠ *Nobody raised it and I have only thought of it while writing this* — and until the 15th the fourteen-day written price holds, **which is the writer\'s own decision and not the meeting\'s.**'));
out.push(note('⚠ Two conventions to teach from this page. ⚠ **Credit the objector** — *the decision as circulated is hers and not mine* — because it costs nothing and it is why the next objection arrives before the room empties. ⚠ And **say what holds in the gap and on whose authority**: an open question with nothing holding it is settled by whoever acts first, and at least this way it is settled deliberately and reversibly.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**DECISION OF 8 DECEMBER — the sheet audit. Written in the room and read back before anybody left.**',
  '**What.** Every offcut over half a square metre to be measured and listed with its thickness.',
  '**Who.** Khalil, with Rami on the Thursday afternoon.',
  '**From when.** Starting the 9th, finished by the 15th.',
  '⚠ **The part we had not settled, and have now.** Offcuts in the **back rack** are to be marked *estimated* where they cannot be reached without moving stock. ⚠ **This was raised in October and never decided**, and it is the reason the last list was abandoned — Khalil measured what he could reach and the list was treated as complete.',
  '**Who objected, and to what.** Samira objected to marking anything *estimated*, because an estimate in a stock list is read later as a count. ⚠ **She is right and I have taken the decision against her**, which is recorded here so that if the list is ever relied on, her objection is on the page.',
  '**What is not decided.** Whether the back rack gets moved in January. ⚠ **Nobody raised it and I have thought of it since.** Until the 15th nothing moves, which is my decision.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What, who and from when', '✓'],
  ['The part that had not been settled, with its history', '✓ raised in October'],
  ['The objector named and credited', '✓ ⚠ and overruled, which is recorded'],
  ['What is still open, and what holds until then', '✓'],
], [5, 1]));
out.push(note('⚠ That sample does something the Student\'s Book model does not: the objector is **overruled** and credited anyway — *she is right and I have taken the decision against her, which is recorded here so that if the list is ever relied on, her objection is on the page.* ⚠ That is Unit 10.6\'s objection line and Unit 12.5\'s crediting convention doing the same job together, and it is the strongest possible version of both.'));
out.push(stage('6R', 'Share'));
out.push(p('The *what is not decided* paragraphs read out. **Ask which open question will be decided by whoever acts first.** ⚠ Usually most of them — and the useful follow-up is whether the writer would be happy with that person\'s decision, because in practice that is the decision.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'In March we agreed to stop quoting for hotel fit-out work. Three of us left that meeting with three different versions.',
  'My father thought we had agreed to stop entirely. Samira thought we had agreed to stop quoting for **new** hotel work and finish the two we had. I thought we had agreed to stop quoting below a margin, which is not what anybody said.',
  '⚠ The part that had never been agreed was what happened to the two live jobs, and it was discussed for about five minutes and then somebody came in about a delivery and we never went back to it.',
  'It was settled by me, two days later, by sending a quotation for a variation on one of them — ⚠ **not because I had decided anything, but because the customer telephoned and I had to say something.**'],
));
out.push(note('⚠ The ending is the most common way a fourth element gets settled: **not by a decision but by a telephone call that requires an answer.** ⚠ Nobody in the chain did anything wrong, and the outcome was chosen by whichever customer happened to ring first.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the part never actually agreed_ — "what happened to the two live jobs"   ✓ _four elements in the close?_ — none at the time; four in the retelling   ? _who acted first, and did that settle it?_ — "he did, because a customer telephoned, and yes"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually all three unagreed parts were settled by whoever acted first. ⚠ **And in none of the three was that person wrong to act** — they were answering a customer, or loading a lorry, or filling in a form. ⚠ The decision was taken by the first person who had to do something, which is the argument for the two minutes before the room empties.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Read back Monday\'s decision in four elements. Rami objected to the third and he was right — the 15th is the day the lorry comes. ⚠ The fourth element turned out not to exist: we had never said who tells the customer. **Two minutes, and both would have been found in a fortnight by accident.**']));

// ===================== 12.6 =====================
out.push(pb());
out.push(h2('12.6  On the one hand, on balance'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Many learners will give both sides fluently and then stop, which is the cycle\'s subject.'));
out.push(p('**b**  It has handed the decision to somebody with **less information** than the writer had.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **_On balance_ must be followed by something that was not in either hand.** If it repeats the stronger side, *you have not weighed anything — you have counted*.  2 ⚠ That *balance is how you get to a position; it is not a substitute for having one* — and a paper with both hands and no position has handed the decision back.'));
out.push(note('⚠ The example of weighing is the thing to teach: *the Saturday problem is permanent and the Friday problem is one morning a week and can be managed by moving the wrap delivery.* ⚠ **The wrap delivery was in neither hand — it is what weighing produced, and that is how you know you did it.** Give the class that test rather than an instruction to be decisive.'));
out.push(p('**Language box – Practise (samples):**  1 _On balance, Wednesday and Friday, because the Saturday objections are permanent and the Friday ones are movable — the wrap goes to Thursday._  2 _On balance, repair it, because the quote can be split: strip and inspect, then decide._  3 _On balance, count the fourth room on paper first, in one day, which gives a usable figure now and makes the three days optional._  4 _On balance, a fortnight of measuring before a bench, because the thing in dispute is which queue it is._  5 _On balance, the fifth of the month, because the first is the busiest morning and the fifth is the quietest — ⚠ which nobody had said in twenty minutes of discussion._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your paper on the second assistant. Both hands and then it ends. Where do you stand?'],
  ['A', '⚠ I am undecided, and I will say what would settle it.'],
  ['B', 'Go on.'],
  ['A', 'Whether the four customers who left in October left because of the telephone or because of price. If it is the telephone, one of them covers the salary. If it is price, a second person changes nothing.'],
  ['B', 'And can that be found out?'],
  ['A', 'Fadi sees two of the four weekly. ⚠ **Nobody has asked him, and it is one question.**'],
  ['B', 'Then that is a position. It is a position about what the question is, and it is better than an *on balance* I would not have believed.'],
]));
out.push(note('⚠ Role card 2 is the honest-undecided case and it must be allowed to stand. ⚠ *I am undecided, and the thing that would settle it is X* **is a position** — a position about what the question is — and it is far more useful than a forced *on balance*. The test is whether the learner names what would settle it **and** who could find out.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two hands, the *on balance*, and ⚠ **the third thing that was in neither hand.** If there is no third thing, the writer counted. **Typical errors:** _in the one hand_ · _on balance, I think probably both sides are right_ (which is the absence of a position wearing the words of one) · _on the balance_ · and the content fault, which is an *on balance* that restates the first hand.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['On the one hand', 'On the other hand', 'On balance — and the third thing'], [
  ['the Saturday road closure is permanent', 'Friday is the wrap morning', 'Wednesday and Friday — ⚠ **the wrap moves to Thursday**, which was in neither hand'],
  ['entering the fourth room costs 3 days and 450,000', 'doing nothing costs a figure that grows', 'count it on paper first, in one day — ⚠ which makes the three days optional'],
  ['a bench costs 4.1 million once', 'the resets cost about 300,000 a month', '⚠ **measure which queue it is** — eleven of fourteen were waiting to be measured'],
], [1.9, 1.9, 2.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"On the one hand the Saturday closure is permanent. On the other, Friday is wrap morning. On balance Wednesday and Friday, because the first cannot be changed and the second can — the wrap moves to Thursday, and that was in neither hand."', '⚠ Count the *on balance* statements that only repeated one hand. ⚠ **Then ask what the third thing would have been in each** — and in most cases the class can find it in under a minute, which is the encouraging part.']));
out.push(stage('5', 'Read'));
out.push(p('1 That the Saturday objections are **permanent** and cannot be changed by anybody in the company, and the Friday objections are **one morning a week and movable**.  2 ⚠ **The wrap delivery moving to Thursday** — found by telephoning Ms Shamsi on the 5th, because Wednesday was in a standing order nobody looks at: *it is what the weighing produced*.  3 Recommending Wednesday and Saturday with the counter covered, ⚠ *because the whole of my position rests on one telephone call and if Ms Shamsi changes her mind my recommendation changes with it*.'));
out.push(note('⚠ Question 3 is the sentence that makes a position a position rather than a preference, and it is worth naming as the unit\'s last structural move: ⚠ **state where you would be if your third thing fell through.** A reader who has that sentence knows exactly how much weight the recommendation can bear.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**THE SECOND SAW BENCH — a position.**',
  '**On the one hand.** The resets cost about 300,000 a month in wages for a machine standing still, twice in October a job went out late because of one, and one of those customers has not come back. **None of that is in dispute** and all of it is an argument for a bench.',
  '**On the other hand.** A bench is 4.1 million, and of fourteen people waiting on four Thursdays eleven were waiting for a **measurement** and three for cutting. **A second bench shortens the wrong queue.**',
  '⚠ **On balance: a fortnight of measuring in January, then decide.** The reset cost is real and the queue evidence is four days in December — and the two can be reconciled, because **the resets and the queue are different problems and I have been treating them as one.** ⚠ The resets are a sequencing problem worth about 300,000 a month and free to fix. **That was in neither hand; it is what the weighing produced.**',
  '**What is left.** The late job and the lost customer. ⚠ **Sequencing would not have saved that job** and I am not going to pretend it would.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both hands, with each set characterised', '✓'],
  ['An *on balance* with a third thing, named as such', '✓ the resets and the queue are two problems'],
  ['What is left, and the refusal to claim it is solved', '✓'],
  ['Where the writer would be if the third thing fell through', '✗ **missing**'],
], [5, 1]));
out.push(note('⚠ Leave that ✗. ⚠ The third thing in that sample is not a fact somebody might withdraw but a **distinction the writer drew**, so the *if it fell through* paragraph is harder to write — and that is worth discussing rather than marking. **The honest version is: if the sequencing does not reduce the resets, I am back to arguing for a bench and I will have lost a month.**'));
out.push(stage('6R', 'Share'));
out.push(p('The third things read out. **Ask which papers counted and which weighed.** ⚠ Counting is easy to spot once named: the *on balance* contains no noun that is not already in one of the hands.'));
out.push(stage('7', 'Write freely – sample (137 words)'));
out.push(sample(null, [
  'We have argued about taking cash at the workshop door since about 2019.',
  'On the one hand it is about 180,000 a week and a third of it is from four men who have no bank account and would not come back. On the other it is written on a pad and reconciled from memory, and nobody could tell you whether anything has ever gone missing.',
  '⚠ On balance: keep taking it and put a numbered receipt book on the door. The money matters and the four men matter, and the thing that is actually wrong is not the cash — **it is that the pad is not a document.** A receipt book is 4,000 and it makes the same money auditable.',
  '⚠ **Nobody has suggested that in six years of arguing**, because the argument has always been cash or no cash. **The receipt book was in neither hand.**',
]));
out.push(note('⚠ That is the best possible answer to this stage: a six-year argument resolved by a 4,000 purchase that neither side had proposed, because both sides had been arguing about the wrong axis. ⚠ **Read it aloud.** It is the clearest demonstration in the key that weighing produces a third thing and counting cannot.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the third thing_ — "a numbered receipt book at 4,000"   ✓ _on the one hand / on the other / on balance?_ — yes   ? _has anybody ever asked the question the third thing answers?_ — "no — six years of cash or no cash"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually in all three cases nobody had ever asked the question the third thing answers. ⚠ **Which is why the argument had lasted a long time** — a long-running argument is nearly always two people defending the two hands, and the third thing is unoccupied ground.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Both hands on the cash, and I found the third thing by asking Samira one question: what would make the pad a document? ⚠ A numbered book, she said, in about four seconds. **Six years of argument and the answer took four seconds because nobody had asked that question.**']));

// ===================== 12.7 =====================
out.push(pb());
out.push(h2('12.7  Review & Mediate: both sides, and where I stand'));
out.push(stage('1', 'Get ready – Unit 12 quiz'));
out.push(p('**1** ⚠ It is **a question wearing a statement\'s clothes** — nobody can agree or disagree with it, and it would not have prevented a no.  **2** Because *that is not true* invites a defence of the whole sentence, and the wide version invites somebody to abolish a control that works most of the time.  **3** ⚠ It **leaves them nothing to say** — and what they were going to say often turns out to prove your point.  **4** **The name · the thing they have done · a question about that thing.**  **5** ⚠ **Something that was in neither hand.** If it repeats the stronger side, you counted.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Abu Yasser\'s own objection — Friday is wrap morning and he cannot be at the gate and on the forklift — ⚠ conceded completely: *that is true, I agree with it completely, and nothing in my paper makes it untrue*.  2 That if the wrap comes on Thursday it arrives on the day the **Mezzeh counter does its own order**, so Thursday has the wrap, the counter order and the Friday Ghouta load in four hours — ⚠ *and nobody has written the Thursday counter order down in eleven years*.'));
out.push(note('⚠ The reframing sentence is the unit\'s best single move: ⚠ *my position is that your objection is the one worth solving, not the one worth losing on.* **It changes an opponent into the person whose problem the paper is about**, which is both more accurate and more useful — and Abu Yasser\'s reply tells you it worked: *nobody has ever put it to me that way round.*'));
out.push(p('**Language box – Practise (sample):**  _"I will start with the strongest thing against my position, which is yours. … That is true and I agree with it completely. … I am still recommending Friday, because the Saturday objections cannot be changed and yours can. … Is there anything in it I have got wrong?"_ ⚠ **And then stop talking.**'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', 'I will start with the strongest thing against my position, which is yours. The 19th is the week the hotel order ships.'],
  ['B', 'It is.'],
  ['A', 'That is true and I agree with it, and nothing in my paper makes it untrue. I am still recommending the 19th, because the year end cannot move and the hotel ship date can — they have asked us twice to hold it.'],
  ['B', 'Nobody has put it to me that way round.'],
  ['A', 'Is there anything in it I have got wrong?'],
  ['B', 'One thing. The hotel order is picked from racks four to seven, and those are the racks that have to be emptied for a count. ⚠ **If we hold the ship date we still cannot count those racks, because the order is sitting in them.**'],
  ['A', 'Which is not in any paper.'],
  ['B', 'It is not written down anywhere. ⚠ **I know it because I pick it.**'],
]));
out.push(note('⚠ *I know it because I pick it* is the line that closes Book 1. ⚠ Everything in the book has been pointing at it: the gate clause in 5.7, the telephone number in 7.7, the half-objection in 10.7, the definitions page in 11.7 — **the facts that decide a question are held by the people who do the work, in the form of things nobody has written down.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the concession, the reframing sentence, and ⚠ **the fact nobody had written down, with how long.** **Typical errors:** _I agree completely with it, but_ (⚠ the *but* undoes the concession — the house form is *and I am still recommending*) · _your objection is the one worth to solve_ · _is there something I have wrong?_ · and the content fault, which is a performer who argues after asking the question instead of stopping.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I put it to', 'Their objection, conceded', 'The reframing', 'The undocumented fact, and how long'], [
  ['Abu Yasser', 'Friday is wrap morning; he cannot be at the gate and on the forklift', 'yours can be changed and the Saturday road cannot', 'the Thursday counter order — eleven years, never written down'],
  ['Khalil', 'the 19th is the hotel ship week', 'the year end cannot move and the ship date can', 'the hotel order sits in the racks that must be emptied — never written down'],
], [1, 1.4, 1.4, 1.8]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"I conceded that Friday is wrap morning and that nothing in my paper makes it untrue. I said his objection was the one worth solving and not the one worth losing on. He told me that Thursday is also the day the Mezzeh counter does its own order — which nobody has written down in eleven years."',
  '⚠ **The unit\'s mediation, named as the twelfth unit of this book:** the facts that decide a question are mostly held by the people who do the work, **in the form of things they have done for years and nobody has written down** — and they come out when somebody concedes their objection and asks what the paper has got wrong.',
  '⚠ And the sentence Abu Yasser adds, which is the instruction for Book 2: *put it in with the eleven years as well.* **A thing nobody has written down for eleven years is the kind of thing a meeting needs to be told it did not know** — so the number of years is part of the finding and not decoration.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 6)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'a', 'b', 'a', 'c', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Q1, Q3 and Q5 are one item in three costumes — *on the one hand*, *on the other hand*, *on balance* — and all three take **on**. ⚠ A learner who gets two of the three has guessed; mark them as a group and drill the three phrases together, because the preposition is fixed and there is nothing to understand.'));
out.push(note('⚠ Q8 is the discriminating item: *I **am not** going to pretend*. ⚠ A learner who chooses *do not* has heard *going to* as a main verb rather than as the future form, which is a Unit 13 matter at A2 and still appears at B1 under pressure.'));
out.push(stage('6', 'Write with help – sample (76 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Khalil — before I put this to Mr Nassif I want to put it to you. The strongest thing against my position is yours: the 19th is the week the hotel order ships. That is true and I agree with it. I am still recommending the 19th, because the year end cannot move and the ship date can — they have asked twice to hold it. Is there anything in it I have got wrong?',
]));
out.push(note('⚠ That sample is 76 words and keeps all three points. ⚠ The economy comes from conceding in **one sentence** and not explaining why the concession is sincere. **Sincerity is demonstrated by position, not by adjectives** — the concession is first, and that is the whole of the evidence.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their objection conceded, first', '✓'],
  ['The position, with one reason', '✓'],
  ['A question asking what the writer has got wrong', '✓'],
  ['60 to 80 words — count them', '✓ 76'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (140 words)'));
out.push(sample(null, [
  '**THE WORKSHOP CASH — a position.**',
  '**On the one hand.** About 180,000 a week, a third of it from four men with no bank account who would not come back. **That is not in dispute.**',
  '**On the other hand.** It is written on a pad and reconciled on Fridays from memory of a week nobody was fully present for. **Nobody could tell you whether anything has ever gone missing, and that is the objection.**',
  '⚠ **On balance: keep the cash and put a numbered receipt book on the door.** The money is real and the four men are real, and the thing that is wrong is not the cash — **it is that the pad is not a document.** A receipt book is 4,000. ⚠ **It was in neither hand, and nobody has suggested it in six years of arguing about cash or no cash.**',
  '⚠ **Admittedly** a receipt book is only a document if it is written up, and I cannot promise that it will be. **Even so, an unfilled numbered book shows its own gaps and a pad does not.**',
  '⚠ **And where I would be if the book is not kept.** Arguing to stop taking cash, in about three months, with better evidence than I have now.',
]));
out.push(note('⚠ That text uses five of the unit\'s six cycles in 140 words: both hands, the third thing, the concession, the worst case, and where the writer would be if it failed. ⚠ **It is the model for the end-of-book free write** and worth photocopying for the next class.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I put the receipt-book position to my father, conceding that the pad is his system and has worked for twenty years. ⚠ He said the pad was his father\'s and that he had wanted to change it since 2015 and had assumed I liked it. **Neither of us has ever asked the other.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 12 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'a', 'c', 'a', 'c', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 4 takes no *that*: *admittedly it is nine years old*. ⚠ Question 5 does: *it is true **that** this may not be the last*. **They are adjacent in the paper for that reason** and should be marked as a pair, because the pattern is arbitrary and has to be learned rather than worked out.'));
out.push(note('⚠ Question 6 tests the three-part question: *Hala, you have priced sixty of these — **what** happens at the counter?* ⚠ A learner who chooses *that* or *which* has read the dash as a relative clause, which is a Unit 11 reflex arriving one unit late.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['What is conceded', 'The reframing', 'The question', 'The undocumented fact', 'How long'], [[
  'Friday is wrap morning; he cannot be at the gate and on the forklift', 'your objection is the one worth solving, not the one worth losing on',
  'is there anything in it I have got wrong?', 'Thursday is also the day the Mezzeh counter does its own order', 'eleven years',
]], [1.6, 1.8, 1.3, 1.8, 0.7]));
out.push(note('⚠ Gap 2 is the one that separates the class. ⚠ A learner who writes *he says the Saturday road cannot change* has heard the **reason** and missed the **reframing** — and the reframing is the sentence that produced gap 4. Accept any wording that puts the objection on the solvable side.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (64 words)', ['On the one hand the resets cost about 300,000 a month. On the other, eleven of fourteen people waiting on four Thursdays were waiting for a measurement and not for the saw. On balance, measure the queue for a fortnight first — the resets and the queue are two different problems and I have been treating them as one. Admittedly four days in December is not a fortnight in March.']));
out.push(box('Marking the Unit 12 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap. Gap 2 needs the reframing, not the reason.'],
    ['**C Writing**', '7', 'Both hands (2) · an *on balance* (1) · ⚠ **a third thing that was in neither hand** (2) · a concession of the strongest point against (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for the third thing are this check\'s version of the series\' running demand** — Unit 4\'s numbers, Unit 5\'s sources, Unit 6\'s figures, Unit 7\'s first-hand paragraph, Unit 9\'s overturning condition, Unit 10\'s owners, Unit 11\'s unpunctuated defining clause. **An *on balance* that restates one hand scores 0 of those 2**, however fluent: the writer has counted and not weighed.',
  '⚠ Give the concession marks for a concession of the **strongest** point against, not any point. ⚠ A learner who concedes something trivial and then dismisses it has produced a hedge; the test is whether the conceded point is the one the reader would have raised.',
  '⚠ **And accept the honest undecided for full marks** where it names what would settle the question and who could find out. *I am undecided and the thing that would settle it is whether Fadi can do the Harasta drops before eleven* is a position, and a better one than a forced *on balance*.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 12, and one word about Book 1 as a whole**'));
out.push(p('**1 The hedge that argues against its own evidence.** *My own view is that we should take somebody on, if the money is there* — where the writer\'s own figures show it is cheaper than not doing it. ⚠ The hedge does not merely weaken the view; **it concedes the one point the evidence disproves.** Learners hedge out of courtesy and should be shown the contradiction rather than told to be bold, because the contradiction is specific and visible in their own sentence.'));
out.push(p('**2 _On balance_ as a decoration.** It will appear throughout 12.6 and into the check, and it is easy to diagnose: ⚠ **the *on balance* contains no noun that was not already in one of the hands.** Give the class that test — it takes four seconds, like 11.4\'s — and then give them the wrap delivery and the receipt book as proof that weighing produces something. ⚠ **A six-year argument settled by a 4,000 purchase that neither side had proposed is the best teaching material in this unit.**'));
out.push(p('**3 Conceding, and the fear that it is losing.** Half the class will resist 12.3 and the argument that persuades is arithmetical, not moral: **conceding the age is what makes the worst-case figure available**, and *the worst case for my option beats your option* cannot be said without it. ⚠ And give them the lost-argument sample from stage 7: the answer to the objection existed, and concealing the objection destroyed the ability to give it.'));
out.push(p('⚠ **And one word about Book 1 as a whole, for whoever teaches it next.** Every mediation cycle in this book ends the same way, and the class will notice before the teacher points it out: **the fact that decides the question belongs to somebody who was not asked.** Abu Yasser\'s missing clause in 5.7, Fadi\'s telephone number in 7.7, the half-objection in 10.7, the definitions page in 11.7, and the eleven undocumented years in 12.7. ⚠ **That is the book\'s argument and it is not a language point.** If a class leaves Book 1 writing figures, sources and overturning conditions and still does not ask the person who does the work, it has learned the grammar of this course and not the course.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 12 · Answer Key');
